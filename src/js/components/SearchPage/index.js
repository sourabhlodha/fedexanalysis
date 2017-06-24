import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import VisionDetailPage from '../shared/VisionDetailPage';
import SearchDropZone from './SearchDropZone';
import BingSearchResult from './BingSearchResult';

import axios from 'axios';

import {onSearch, uploadAzure, clearSearch, showVisionPage, hideVisionPage, getVision, ocrVision, handWrittenVision} from '../../redux/actions';

@connect((store) => {
  return {
    searchResult: store.search.searchResult,
    fetching: store.search.fetching,
    fetched: store.search.fetched,
    isvisionDetailPage: store.search.isvisionDetailPage,
    cosmosDB: store.search.cosmosDB,

    dropzoneImgUrl: store.search.dropzoneImgUrl,
    dzFetching: store.search.fetching,
    dzFetched: store.search.fetched,
    
    visionList: store.search.visionList,
    visionFetching: store.search.visionFetching,
    visionFetched: store.search.visionFetched,

    ocrList: store.search.ocrList,
    ocrFetching: store.search.ocrFetching,
    ocrFetched: store.search.ocrFetched,
    
    handList: store.search.handList,
    handFetching: store.search.handFetching,
    handFetched: store.search.handFetched,

    callApi: store.search.callApi,

    BingSearchList: store.dropzone.BingSearchList,

  };
})

class SearchPage extends Component {
  
  constructor() {
    super();
    this._onSearchChange = this._onSearchChange.bind(this);
    this._onSearch = this._onSearch.bind(this);
    this._viewDetails = this._viewDetails.bind(this);
    this._hideVisionPage = this._hideVisionPage.bind(this);
    this._toggleDescTags = this._toggleDescTags.bind(this);
    this._toggleItemTags = this._toggleItemTags.bind(this);
    this._callSearchService = this._callSearchService.bind(this);
    this._onSuggest = this._onSuggest.bind(this);
    this._callSearchOnAutoSuggest = this._callSearchOnAutoSuggest.bind(this);
    this._resetAutoSuggest = this._resetAutoSuggest.bind(this);

    this._onDrop = this._onDrop.bind(this);
    this._uploadToAWS = this._uploadToAWS.bind(this);
    this._callApi = this._callApi.bind(this);
    this._callOcrApi = this._callOcrApi.bind(this);
    this._callHandWrittenApi = this._callHandWrittenApi.bind(this);


    this.state = {
      searchValue: '',
      itemtags: [],
      descriptiontags: [],
      autoSeggestValue: [],
      isAutoSuggest: false,
      files: [],
      apiCall: 0,
    };
  }

  componentWillMount () {
    localStorage.clear();
    this.props.dispatch(clearSearch());
    this.selectedCheckboxes = new Set();
  }

  _onSearchChange(e) {
    this.setState({ searchValue: e.target.value });
    if (e.target.value.length > 1) {
      this._onSuggest(e.target.value);
    } else {
      this.setState({ isAutoSuggest: false });
    }
  }

  _onSearch(e) {
    e.preventDefault();
    this.setState({ itemtags: [], descriptiontags: [] }, () => this._callSearchService());
  }
  _resetAutoSuggest() {
    this.setState({ isAutoSuggest: false });
  }

  _onSuggest(value) {
    const url = `https://fedexovergoods.search.windows.net/indexes/temp3/docs/suggest?search=${value}&suggesterName=overgoodssearch&fuzzy=false&api-version=2016-09-01&api-key=C4FBD0A95D9184A1C7EB40C8D884F5B4`;

    axios.get(url)
    .then(response => {
      this.setState({ autoSeggestValue: response.data.value, isAutoSuggest: true });
    });

  }

  _callSearchService() {
    let url = `https://fedexovergoods.search.windows.net/indexes/temp3/docs?api-version=2016-09-01&search=${this.state.searchValue}&$orderby=confidence asc&highlight=ocrtags&api-key=C4FBD0A95D9184A1C7EB40C8D884F5B4`;
    let filterParam = '&$filter=';

    const tagParam = [];
    if(!_.isEmpty(this.state.itemtags)) {
      _.map(this.state.itemtags, item => tagParam.push(`tags/any(t: t eq '${item}')`));
    }
    
    if (!_.isEmpty(this.state.descriptiontags)) {
      _.map(this.state.descriptiontags, item => tagParam.push(`descriptiontags/any(t: t eq '${item}')`));
    }

    filterParam += _.join(tagParam, ' or ');

    if (!_.isEmpty(this.state.descriptiontags) || !_.isEmpty(this.state.itemtags)) {
      url = `https://fedexovergoods.search.windows.net/indexes/temp3/docs?api-version=2016-09-01&search=${this.state.searchValue}${filterParam}&$orderby=confidence asc&highlight=ocrtags&api-key=C4FBD0A95D9184A1C7EB40C8D884F5B4`;
    }
    
    this.props.dispatch(onSearch(url));
    this.setState({ autoSeggestValue: [] });
  }

  _callSearchOnAutoSuggest(searchValue) {
    this.setState({ searchValue }, () => this._callSearchService());
  }

  _viewDetails(data) {
    this.props.dispatch(showVisionPage(data));
  }

  _hideVisionPage() {
    this.props.dispatch(hideVisionPage());
  }

  _toggleDescTags(descriptiontags) {
    this.setState({descriptiontags}, () => this._callSearchService());
  }

  _toggleItemTags(itemtags) {
    this.setState({itemtags}, () => this._callSearchService());
  }

  _onDrop(files) {
    this.setState({ files }, () => {
      this._uploadToAWS(files);
    });
  }

  _uploadToAWS(files) {
    this.props.dispatch(uploadAzure(files[0]));
  }

  _callApi(url) {  
    const imageBody = { url };
    this.props.dispatch(getVision(imageBody));
    
    this._callOcrApi(imageBody);
    this._callHandWrittenApi(imageBody);
  }

  _callOcrApi(imageBody) {  
    this.props.dispatch(ocrVision(imageBody));
  }

  _callHandWrittenApi(imageBody) {  
    this.props.dispatch(handWrittenVision(imageBody));
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.dropzoneImgUrl) {
      this.setState({ apiCall: 0 });
      this._callApi(nextProps.dropzoneImgUrl);
    }

    // if (nextProps.fetching) {
    //   this.setState({ apiCall: 0 });
    // }

    if (nextProps.callApi) {
      this.setState({ apiCall: this.state.apiCall + 1 }, ()=> {
        if (this.state.apiCall === 2 || this.state.apiCall === 3) {
          const allOrcText = [];
          const allHandText = [];
          const tags = [];
          const captions = [];
          let descriptiontags;

          if (!_.isEmpty(nextProps.ocrList)){
            if(!_.isEmpty(nextProps.ocrList.regions)) {
              console.log('is ocr available');
              _.map(nextProps.ocrList.regions, region => {
                _.map(region.lines, line => {
                  _.map(line.words, word => {
                    allOrcText.push(word.text);
                  });
                });
              });
              captions.push(_.join(allOrcText, ' '));
            }
          }
          
          

          if(!_.isEmpty(nextProps.handList)) {
            if (!_.isEmpty(nextProps.handList.recognitionResult)) {
              _.map(nextProps.handList.recognitionResult.lines, line => {
                allHandText.push(line.text);
              });
              captions.push(_.join(allHandText, ' '));
            }
          }

          
          

          if (!_.isEmpty(nextProps.visionList)) {
            console.log('visionlist');
            if (!_.isEmpty(nextProps.visionList.description.captions)) {
              console.log(nextProps.visionList.description.captions[0].text);
              captions.push(nextProps.visionList.description.captions[0].text);
            }
            if (!_.isEmpty(nextProps.visionList.description.tags)) {
              descriptiontags = nextProps.visionList.description.tags;
            }
            if (!_.isEmpty(nextProps.visionList.tags)) {
              _.map(nextProps.visionList.tags, item => tags.push(item.name));
            }
          }
          let searchValue;
          if (captions.length > 1) {
            searchValue = _.join(captions, ' ');
          } else {
            searchValue = captions[0];
          }
          const itemtags = tags;

          // console.log(searchValue, itemtags, descriptiontags);

          this.setState({ searchValue, itemtags, descriptiontags}, () => {
            this._callSearchService();
          });
        }
      });
    }
  }

  render() {
    const { searchResult, BingSearchList, isvisionDetailPage, fetching, fetched, cosmosDB } = this.props;
    let searchResultPage;
    let noresult;
    if (fetched) {
      if (_.isEmpty(searchResult.value)) {
        noresult = <h2 className='text-center'>No result found, plese try again</h2>;
      }
    }

    if(!_.isEmpty(searchResult.value)) {
      searchResultPage = <SearchResult 
        viewDetails={this._viewDetails}
        searchResults={searchResult.value}
        descriptiontags={descriptiontags}
        tags={tags}
        toggleDescTags={this._toggleDescTags}
        toggleItemTags={this._toggleItemTags}
      />;
    } else if (!_.isEmpty(BingSearchList)) {
      searchResultPage = <BingSearchResult searchResults={BingSearchList.value} />;
    }

    let loading;
    if(fetching) {
      loading = (<div className="progress"><div className="status spinner">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div></div>);
    }
    let visionDetail;

    if (isvisionDetailPage) {
      visionDetail = <VisionDetailPage search cosmosDB={cosmosDB} onBack={this._hideVisionPage} />;
    }

    let autoSeggestFields;
    if (!_.isEmpty(this.state.autoSeggestValue)) {
      const suggestValue = _.map(this.state.autoSeggestValue, items => _.values(items));
      autoSeggestFields = _.map(suggestValue, (value, i) => {
        return (
          <button type="button" onClick={() => this._callSearchOnAutoSuggest(_.head(value))} className="list-group-item list-group-item-action" key={i}>
            {_.head(value)}
          </button>
        );
      });
    }

    return (
      <div className="search-page">
        <div className="container-fluid search">
          <form onSubmit={this._onSearch}>
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.searchValue} placeholder="Search for..." onChange={this._onSearchChange} onBlur={this._resetAutoSuggest} />
              <SearchDropZone onDrop={this._onDrop}/>
              <span className="input-group-btn">
                <button onClick={() => {}} className="btn btn-secondary" type="submit"><i className="fa fa-search" /></button>
              </span>
            </div>
            <div className={this.state.isAutoSuggest ? 'list-group': 'fade'}>
              {autoSeggestFields}
            </div>
          </form>
        </div>
        {loading}
        {noresult}
        {searchResultPage}
        {visionDetail}
      </div>
    );
  }
}

const descriptiontags = [
  'rock',
  'photo',
  'bird',
  'water',
];

const tags = [
  'rock',
  'nature',
  'night sky',
];

SearchPage.propTypes = {
  dispatch: PropTypes.func,
  onSearch: PropTypes.func,
  searchResult: PropTypes.object,
  fetching: PropTypes.bool,
  dzFetching: PropTypes.bool,
  visionFetching: PropTypes.bool,
  handFetching: PropTypes.bool,
  ocrFetching: PropTypes.bool,
  callApi: PropTypes.bool,
  fetched: PropTypes.bool,
  isvisionDetailPage: PropTypes.bool,
  cosmosDB: PropTypes.object,
  dropzoneImgUrl: PropTypes.object,
  visionList: PropTypes.object,
  ocrList: PropTypes.object,
  handList: PropTypes.object,
  BingSearchList: PropTypes.object,
};  


export default SearchPage;
