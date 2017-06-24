import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import SearchFilters from './SearchFilters';
// <div className="col-sm-4 hide">
//   <SearchFilters 
//     descriptiontags={props.descriptiontags} 
//     tags={props.tags}
//     confidence={30} 
//     toggleDescTags={props.toggleDescTags}
//     toggleItemTags={props.toggleItemTags}
//   />
//   </div>

const SearchResult = ({ ...props }) => {
  const results = [];
  
  _.map(props.searchResults, product => {
    const result = _.values(product);
    const score = _.head(result);

    const data = {
      product,
      score: score,
    };
    results.push(data);
  });
  
  const productResults = _.orderBy(results, ['score'], ['desc', 'asc']);

  const searchList = _.map(productResults, (product, i) => {
    const productImage = {
      'backgroundImage': product.product.url,
    };

    const result = _.values(product.product);

    const score = _.head(result);

    
    const confidence = Number(parseFloat(score * 100).toFixed(0));
    const style = {
      'width': `${confidence}%`,
    };

    return (
      <div className="col-sm-6 d-flex" key={i}>
        <div className="product-list">
          <div className="product-list-box">
            <div className="product-image">
              <div className="full-image"  style={productImage}></div>
              <img src={product.product.url}  />
            </div>
            <div className="product-desc">
              <div className="confidence display-progress">
                <div className="title">Search Score: <span className="badge badge-primary score-value">{score}</span></div>
                <div className="info">
                  <span className="perc">{confidence}%</span>
                  <span className="progress"><span className="progress-bar" style={style}></span></span>
                </div>
              </div>
              <div>
                <div className="title">Caption:</div>
                <div className="info">
                  {product.product.captions ? product.product.captions : '--'}
                </div>
              </div>
              <div>
                <div className="title">Hand written tags:</div>
                <div className="info">
                  {product.product.handwrittentags ? product.product.handwrittentags : '--'}
                </div>
              </div>
            </div>
          </div>
          <div className="view-detail">
            <button onClick={() => props.viewDetails(product.product)} className="btn btn-block btn-secondary">View details</button>
          </div>
        </div>
      </div>
    );
  });
  
  return (
    <div className="container-fluid search-result-page">
      <div className="row">
        {searchList}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  searchResults: PropTypes.array,
  viewDetails: PropTypes.func,
  descriptiontags: PropTypes.array,
  tags: PropTypes.array,
  toggleDescTags: PropTypes.func,
  toggleItemTags: PropTypes.func,
};

export default SearchResult;
