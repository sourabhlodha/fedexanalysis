! function(e, t) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.BotChat = t() : e.BotChat = t();
}(this, function() {
  return function(e) {
      function t(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
              i: r,
              l: !1,
              exports: {},
            };
          return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
      var n = {};
      return t.m = e, t.c = n, t.i = function(e) {
          return e;
        }, t.d = function(e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
              configurable: !1,
              enumerable: !0,
              get: r,
            });
        }, t.n = function(e) {
          var n = e && e.__esModule ? function() {
              return e.default;
            } : function() {
              return e;
            };
          return t.d(n, 'a', n), n;
        }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = '', t(t.s = 228);
    }([function(e, t, n) {
      'use strict';
      var r = n(19),
          o = n(484),
          i = n(90),
          s = function() {
              function e(e) {
                  this._isScalar = !1, e && (this._subscribe = e);
                }
              return e.prototype.lift = function(t) {
                  var n = new e;
                  return n.source = this, n.operator = t, n;
                }, e.prototype.subscribe = function(e, t, n) {
                  var r = this.operator,
                      i = o.toSubscriber(e, t, n);
                  if (r ? r.call(i, this.source) : i.add(this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                  return i;
                }, e.prototype._trySubscribe = function(e) {
                  try {
                      return this._subscribe(e);
                    } catch (t) {
                      e.syncErrorThrown = !0, e.syncErrorValue = t, e.error(t);
                    }
                }, e.prototype.forEach = function(e, t) {
                  var n = this;
                  if (t || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? t = r.root.Rx.config.Promise : r.root.Promise && (t = r.root.Promise)), !t) throw new Error('no Promise impl found');
                  return new t(function(t, r) {
                      var o;
                      o = n.subscribe(function(t) {
                          if (o) try {
                              e(t);
                            } catch (e) {
                              r(e), o.unsubscribe();
                            } else e(t);
                        }, r, t);
                    });
                }, e.prototype._subscribe = function(e) {
                  return this.source.subscribe(e);
                }, e.prototype[i.observable] = function() {
                  return this;
                }, e.create = function(t) {
                  return new e(t);
                }, e;
            }();
      t.Observable = s;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r, i, s, a, c) {
          if (o(t), !e) {
              var u;
              if (void 0 === t) u = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
              else {
                  var l = [n, r, i, s, a, c],
                      p = 0;
                  u = new Error(t.replace(/%s/g, function() {
                      return l[p++];
                    })), u.name = 'Invariant Violation';
                }
              throw u.framesToPop = 1, u;
            }
        }
      var o = function(e) {};
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return Object.prototype.toString.call(e);
        }

      function o(e) {
          return '[object String]' === r(e);
        }

      function i(e, t) {
          return w.call(e, t);
        }

      function s(e) {
          return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
              if (t) {
                  if ('object' != typeof t) throw new TypeError(t + 'must be object');
                  Object.keys(t).forEach(function(n) {
                      e[n] = t[n];
                    });
                }
            }), e;
        }

      function a(e, t, n) {
          return [].concat(e.slice(0, t), n, e.slice(t + 1));
        }

      function c(e) {
          return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 != (65535 & e) && 65534 != (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))));
        }

      function u(e) {
          if (e > 65535) {
              e -= 65536;
              var t = 55296 + (e >> 10),
                  n = 56320 + (1023 & e);
              return String.fromCharCode(t, n);
            }
          return String.fromCharCode(e);
        }

      function l(e, t) {
          var n = 0;
          return i(k, t) ? k[t] : 35 === t.charCodeAt(0) && x.test(t) && (n = 'x' === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), c(n)) ? u(n) : e;
        }

      function p(e) {
          return e.indexOf('\\') < 0 ? e : e.replace(C, '$1');
        }

      function f(e) {
          return e.indexOf('\\') < 0 && e.indexOf('&') < 0 ? e : e.replace(E, function(e, t, n) {
              return t || l(e, n);
            });
        }

      function h(e) {
          return A[e];
        }

      function d(e) {
          return O.test(e) ? e.replace(T, h) : e;
        }

      function v(e) {
          return e.replace(P, '\\$&');
        }

      function m(e) {
          switch (e) {
            case 9:
            case 32:
              return !0;
            }
          return !1;
        }

      function g(e) {
          if (e >= 8192 && e <= 8202) return !0;
          switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
              return !0;
            }
          return !1;
        }

      function y(e) {
          return I.test(e);
        }

      function b(e) {
          switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
              return !0;
            default:
              return !1;
            }
        }

      function _(e) {
          return e.trim().replace(/\s+/g, ' ').toUpperCase();
        }
      var w = Object.prototype.hasOwnProperty,
          C = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
          S = /&([a-z#][a-z0-9]{1,31});/gi,
          E = new RegExp(C.source + '|' + S.source, 'gi'),
          x = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
          k = n(116),
          O = /[&<>"]/,
          T = /[&<>"]/g,
          A = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
            },
          P = /[.?*+^$[\]\\(){}|-]/g,
          I = n(93);
      t.lib = {}, t.lib.mdurl = n(120), t.lib.ucmicro = n(489), t.assign = s, t.isString = o, t.has = i, t.unescapeMd = p, t.unescapeAll = f, t.isValidEntityCode = c, t.fromCodePoint = u, t.escapeHtml = d, t.arrayReplaceAt = a, t.isSpace = m, t.isWhiteSpace = g, t.isMdAsciiPunct = b, t.isPunctChar = y, t.escapeRE = v, t.normalizeReference = _;
    }, function(e, t, n) {
      'use strict';
      var r = n(11),
          o = r;
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var t = arguments.length - 1, n = 'Minified React error #' + e + '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' + e, r = 0; r < t; r++) n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
          n += ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
          var o = new Error(n);
          throw o.name = 'Invariant Violation', o.framesToPop = 1, o;
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (null === e || void 0 === e) throw new TypeError('Object.assign cannot be called with null or undefined');
          return Object(e);
        }
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
      var o = Object.getOwnPropertySymbols,
          i = Object.prototype.hasOwnProperty,
          s = Object.prototype.propertyIsEnumerable;
      e.exports = function() {
          try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (e[5] = 'de', '5' === Object.getOwnPropertyNames(e)[0]) return !1;
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
              if ('0123456789' !== Object.getOwnPropertyNames(t).map(function(e) {
                  return t[e];
                }).join('')) return !1;
              var r = {};
              return 'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                  r[e] = e;
                }), 'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('');
            } catch (e) {
              return !1;
            }
        }() ? Object.assign : function(e, t) {
          for (var n, a, c = r(e), u = 1; u < arguments.length; u++) {
              n = Object(arguments[u]);
              for (var l in n) i.call(n, l) && (c[l] = n[l]);
              if (o) {
                  a = o(n);
                  for (var p = 0; p < a.length; p++) s.call(n, a[p]) && (c[a[p]] = n[a[p]]);
                }
            }
          return c;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return 1 === e.nodeType && e.getAttribute(d) === String(t) || 8 === e.nodeType && e.nodeValue === ' react-text: ' + t + ' ' || 8 === e.nodeType && e.nodeValue === ' react-empty: ' + t + ' ';
        }

      function o(e) {
          for (var t; t = e._renderedComponent;) e = t;
          return e;
        }

      function i(e, t) {
          var n = o(e);
          n._hostNode = t, t[m] = n;
        }

      function s(e) {
          var t = e._hostNode;
          t && (delete t[m], e._hostNode = null);
        }

      function a(e, t) {
          if (!(e._flags & v.hasCachedChildNodes)) {
              var n = e._renderedChildren,
                  s = t.firstChild;
              e: for (var a in n)
                  if (n.hasOwnProperty(a)) {
                      var c = n[a],
                          u = o(c)._domID;
                      if (0 !== u) {
                          for (; null !== s; s = s.nextSibling)
                              if (r(s, u)) {
                                  i(c, s);
                                  continue e;
                                }
                          p('32', u);
                        }
                    }
              e._flags |= v.hasCachedChildNodes;
            }
        }

      function c(e) {
          if (e[m]) return e[m];
          for (var t = []; !e[m];) {
              if (t.push(e), !e.parentNode) return null;
              e = e.parentNode;
            }
          for (var n, r; e && (r = e[m]); e = t.pop()) n = r, t.length && a(r, e);
          return n;
        }

      function u(e) {
          var t = c(e);
          return null != t && t._hostNode === e ? t : null;
        }

      function l(e) {
          if (void 0 === e._hostNode && p('33'), e._hostNode) return e._hostNode;
          for (var t = []; !e._hostNode;) t.push(e), e._hostParent || p('34'), e = e._hostParent;
          for (; t.length; e = t.pop()) a(e, e._hostNode);
          return e._hostNode;
        }
      var p = n(4),
          f = n(26),
          h = n(128),
          d = (n(1), f.ID_ATTRIBUTE_NAME),
          v = h,
          m = '__reactInternalInstance$' + Math.random().toString(36).slice(2),
          g = {
              getClosestInstanceFromNode: c,
              getInstanceFromNode: u,
              getNodeFromInstance: l,
              precacheChildNodes: a,
              precacheNode: i,
              uncacheNode: s,
            };
      e.exports = g;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), r(n(200)), r(n(201)), r(n(95)), r(n(202)), r(n(13)), r(n(203)), r(n(96)), r(n(24)), r(n(204)), r(n(205)), r(n(206)), r(n(207)), r(n(208)), r(n(209)), r(n(210)), r(n(97)), r(n(211)), r(n(212)), r(n(98)), r(n(57)), r(n(99)), r(n(100)), r(n(213)), r(n(214)), r(n(215)), r(n(216));
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          function n() {
              this.constructor = e;
            }
          y(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
        }

      function o(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
              for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          return n;
        }

      function i(e, t, n, r) {
          var o, i = arguments.length,
              s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
          else
                for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
          return i > 3 && s && Object.defineProperty(t, n, s), s;
        }

      function s(e, t) {
          return function(n, r) {
              t(n, r, e);
            };
        }

      function a(e, t) {
          if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }

      function c(e, t, n, r) {
          return new(n || (n = Promise))(function(o, i) {
              function s(e) {
                  try {
                      c(r.next(e));
                    } catch (e) {
                      i(e);
                    }
                }

              function a(e) {
                  try {
                      c(r.throw(e));
                    } catch (e) {
                      i(e);
                    }
                }

              function c(e) {
                  e.done ? o(e.value) : new n(function(t) {
                      t(e.value);
                    }).then(s, a);
                }
              c((r = r.apply(e, t || [])).next());
            });
        }

      function u(e, t) {
          function n(e) {
              return function(t) {
                  return r([e, t]);
                };
            }

          function r(n) {
              if (o) throw new TypeError('Generator is already executing.');
              for (; c;) try {
                  if (o = 1, i && (s = i[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(s = s.call(i, n[1])).done) return s;
                  switch (i = 0, s && (n = [0, s.value]), n[0]) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return c.label++, {
                              value: n[1],
                              done: !1,
                            };
                    case 5:
                      c.label++, i = n[1], n = [0];
                      continue;
                    case 7:
                      n = c.ops.pop(), c.trys.pop();
                      continue;
                    default:
                      if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                              c = 0;
                              continue;
                            }
                      if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                              c.label = n[1];
                              break;
                            }
                      if (6 === n[0] && c.label < s[1]) {
                              c.label = s[1], s = n;
                              break;
                            }
                      if (s && c.label < s[2]) {
                              c.label = s[2], c.ops.push(n);
                              break;
                            }
                      s[2] && c.ops.pop(), c.trys.pop();
                      continue;
                    }
                  n = t.call(e, c);
                } catch (e) {
                  n = [6, e], i = 0;
                } finally {
                  o = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return {
                  value: n[0] ? n[1] : void 0,
                  done: !0,
                };
            }
          var o, i, s, a, c = {
                label: 0,
                sent: function() {
                  if (1 & s[0]) throw s[1];
                  return s[1];
                },
                trys: [],
                ops: [],
              };
          return a = {
              next: n(0),
              throw: n(1),
              return: n(2),
            }, 'function' == typeof Symbol && (a[Symbol.iterator] = function() {
              return this;
            }), a;
        }

      function l(e, t) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }

      function p(e) {
          var t = 'function' == typeof Symbol && e[Symbol.iterator],
              n = 0;
          return t ? t.call(e) : {
              next: function() {
                  return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e,
                    };
                },
            };
        }

      function f(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r, o, i = n.call(e),
              s = [];
          try {
              for (;
                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value);
            } catch (e) {
              o = {
                  error: e,
                };
            } finally {
              try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
            }
          return s;
        }

      function h() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
          return e;
        }

      function d(e) {
          return this instanceof d ? (this.v = e, this) : new d(e);
        }

      function v(e, t, n) {
          function r(e) {
              l[e] && (u[e] = function(t) {
                  return new Promise(function(n, r) {
                      p.push([e, t, n, r]) > 1 || o(e, t);
                    });
                });
            }

          function o(e, t) {
              try {
                  i(l[e](t));
                } catch (e) {
                  c(p[0][3], e);
                }
            }

          function i(e) {
              e.value instanceof d ? Promise.resolve(e.value.v).then(s, a) : c(p[0][2], e);
            }

          function s(e) {
              o('next', e);
            }

          function a(e) {
              o('throw', e);
            }

          function c(e, t) {
              e(t), p.shift(), p.length && o(p[0][0], p[0][1]);
            }
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var u, l = n.apply(e, t || []),
              p = [];
          return u = {}, r('next'), r('throw'), r('return'), u[Symbol.asyncIterator] = function() {
              return this;
            }, u;
        }

      function m(e) {
          function t(t, o) {
              e[t] && (n[t] = function(n) {
                  return (r = !r) ? {
                      value: d(e[t](n)),
                      done: 'return' === t,
                    } : o ? o(n) : n;
                });
            }
          var n, r;
          return n = {}, t('next'), t('throw', function(e) {
              throw e;
            }), t('return'), n[Symbol.iterator] = function() {
              return this;
            }, n;
        }

      function g(e) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var t = e[Symbol.asyncIterator];
          return t ? t.call(e) : 'function' == typeof p ? p(e) : e[Symbol.iterator]();
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), t.__extends = r, n.d(t, '__assign', function() {
          return b;
        }), t.__rest = o, t.__decorate = i, t.__param = s, t.__metadata = a, t.__awaiter = c, t.__generator = u, t.__exportStar = l, t.__values = p, t.__read = f, t.__spread = h, t.__await = d, t.__asyncGenerator = v, t.__asyncDelegator = m, t.__asyncValues = g;
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
      var y = Object.setPrototypeOf || {
            __proto__: [],
          }
        instanceof Array && function(e, t) {
          e.__proto__ = t;
        } || function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        }, b = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
          return e;
        };
    }, function(e, t, n) {
      'use strict';
      var r = !('undefined' == typeof window || !window.document || !window.document.createElement),
          o = {
              canUseDOM: r,
              canUseWorkers: 'undefined' != typeof Worker,
              canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
              canUseViewport: r && !!window.screen,
              isInWorker: !r,
            };
      e.exports = o;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(92),
          i = n(23),
          s = n(161),
          a = n(91),
          c = function(e) {
              function t(n, r, o) {
                  switch (e.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                    case 0:
                      this.destination = s.empty;
                      break;
                    case 1:
                      if (!n) {
                              this.destination = s.empty;
                              break;
                            }
                      if ('object' == typeof n) {
                              n instanceof t ? (this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, n));
                              break;
                            }
                    default:
                      this.syncErrorThrowable = !0, this.destination = new u(this, n, r, o);
                    }
                }
              return r(t, e), t.prototype[a.rxSubscriber] = function() {
                  return this;
                }, t.create = function(e, n, r) {
                  var o = new t(e, n, r);
                  return o.syncErrorThrowable = !1, o;
                }, t.prototype.next = function(e) {
                  this.isStopped || this._next(e);
                }, t.prototype.error = function(e) {
                  this.isStopped || (this.isStopped = !0, this._error(e));
                }, t.prototype.complete = function() {
                  this.isStopped || (this.isStopped = !0, this._complete());
                }, t.prototype.unsubscribe = function() {
                  this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this));
                }, t.prototype._next = function(e) {
                  this.destination.next(e);
                }, t.prototype._error = function(e) {
                  this.destination.error(e), this.unsubscribe();
                }, t.prototype._complete = function() {
                  this.destination.complete(), this.unsubscribe();
                }, t.prototype._unsubscribeAndRecycle = function() {
                  var e = this,
                      t = e._parent,
                      n = e._parents;
                  return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = n, this;
                }, t;
            }(i.Subscription);
      t.Subscriber = c;
      var u = function(e) {
          function t(t, n, r, i) {
              e.call(this), this._parentSubscriber = t;
              var a, c = this;
              o.isFunction(n) ? a = n : n && (a = n.next, r = n.error, i = n.complete, n !== s.empty && (c = Object.create(n), o.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)), c.unsubscribe = this.unsubscribe.bind(this))), this._context = c, this._next = a, this._error = r, this._complete = i;
            }
          return r(t, e), t.prototype.next = function(e) {
              if (!this.isStopped && this._next) {
                  var t = this._parentSubscriber;
                  t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e);
                }
            }, t.prototype.error = function(e) {
              if (!this.isStopped) {
                  var t = this._parentSubscriber;
                  if (this._error) t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                  else {
                      if (!t.syncErrorThrowable) throw this.unsubscribe(), e;
                      t.syncErrorValue = e, t.syncErrorThrown = !0, this.unsubscribe();
                    }
                }
            }, t.prototype.complete = function() {
              var e = this;
              if (!this.isStopped) {
                  var t = this._parentSubscriber;
                  if (this._complete) {
                      var n = function() {
                          return e._complete.call(e._context);
                        };
                      t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
                    } else this.unsubscribe();
                }
            }, t.prototype.__tryOrUnsub = function(e, t) {
              try {
                  e.call(this._context, t);
                } catch (e) {
                  throw this.unsubscribe(), e;
                }
            }, t.prototype.__tryOrSetError = function(e, t, n) {
              try {
                  t.call(this._context, n);
                } catch (t) {
                  return e.syncErrorValue = t, e.syncErrorThrown = !0, !0;
                }
              return !1;
            }, t.prototype._unsubscribe = function() {
              var e = this._parentSubscriber;
              this._context = null, this._parentSubscriber = null, e.unsubscribe();
            }, t;
        }(c);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return function() {
              return e;
            };
        }
      var o = function() {};
      o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
          return this;
        }, o.thatReturnsArgument = function(e) {
          return e;
        }, e.exports = o;
    }, function(e, t, n) {
      'use strict';
      e.exports = n(28);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = function(e) {
              function t(t) {
                  var n = e.call(this, t) || this;
                  return n.name = 'ArgumentNull', n.message = t, n;
                }
              return r.__extends(t, e), t;
            }(Error);
      t.ArgumentNullError = o;
      var i = function(e) {
          function t(t) {
              var n = e.call(this, t) || this;
              return n.name = 'InvalidOperation', n.message = t, n;
            }
          return r.__extends(t, e), t;
        }(Error);
      t.InvalidOperationError = i;
      var s = function(e) {
          function t(t, n) {
              var r = e.call(this, n) || this;
              return r.name = t + 'ObjectDisposed', r.message = n, r;
            }
          return r.__extends(t, e), t;
        }(Error);
      t.ObjectDisposedError = s;
    }, function(e, t, n) {
      'use strict';
      var r = null;
      e.exports = {
          debugTool: r,
        };
    }, function(e, t, n) {
      'use strict';

      function r() {
          O.ReactReconcileTransaction && w || l('123');
        }

      function o() {
          this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = f.getPooled(), this.reconcileTransaction = O.ReactReconcileTransaction.getPooled(!0);
        }

      function i(e, t, n, o, i, s) {
          return r(), w.batchedUpdates(e, t, n, o, i, s);
        }

      function s(e, t) {
          return e._mountOrder - t._mountOrder;
        }

      function a(e) {
          var t = e.dirtyComponentsLength;
          t !== g.length && l('124', t, g.length), g.sort(s), y++;
          for (var n = 0; n < t; n++) {
              var r = g[n],
                  o = r._pendingCallbacks;
              r._pendingCallbacks = null;
              var i;
              if (d.logTopLevelRenders) {
                  var a = r;
                  r._currentElement.type.isReactTopLevelWrapper && (a = r._renderedComponent), i = 'React update: ' + a.getName(), console.time(i);
                }
              if (v.performUpdateIfNecessary(r, e.reconcileTransaction, y), i && console.timeEnd(i), o)
                  for (var c = 0; c < o.length; c++) e.callbackQueue.enqueue(o[c], r.getPublicInstance());
            }
        }

      function c(e) {
          if (r(), !w.isBatchingUpdates) return void w.batchedUpdates(c, e);
          g.push(e), null == e._updateBatchNumber && (e._updateBatchNumber = y + 1);
        }

      function u(e, t) {
          w.isBatchingUpdates || l('125'), b.enqueue(e, t), _ = !0;
        }
      var l = n(4),
          p = n(5),
          f = n(126),
          h = n(22),
          d = n(131),
          v = n(27),
          m = n(46),
          g = (n(1), []),
          y = 0,
          b = f.getPooled(),
          _ = !1,
          w = null,
          C = {
              initialize: function() {
                  this.dirtyComponentsLength = g.length;
                },
              close: function() {
                  this.dirtyComponentsLength !== g.length ? (g.splice(0, this.dirtyComponentsLength), x()) : g.length = 0;
                },
            },
          S = {
              initialize: function() {
                  this.callbackQueue.reset();
                },
              close: function() {
                  this.callbackQueue.notifyAll();
                },
            },
          E = [C, S];
      p(o.prototype, m, {
          getTransactionWrappers: function() {
              return E;
            },
          destructor: function() {
              this.dirtyComponentsLength = null, f.release(this.callbackQueue), this.callbackQueue = null, O.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null;
            },
          perform: function(e, t, n) {
              return m.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n);
            },
        }), h.addPoolingTo(o);
      var x = function() {
            for (; g.length || _;) {
                  if (g.length) {
                      var e = o.getPooled();
                      e.perform(a, null, e), o.release(e);
                    }
                  if (_) {
                      _ = !1;
                      var t = b;
                      b = f.getPooled(), t.notifyAll(), f.release(t);
                    }
                }
          },
          k = {
              injectReconcileTransaction: function(e) {
                  e || l('126'), O.ReactReconcileTransaction = e;
                },
              injectBatchingStrategy: function(e) {
                  e || l('127'), 'function' != typeof e.batchedUpdates && l('128'), 'boolean' != typeof e.isBatchingUpdates && l('129'), w = e;
                },
            },
          O = {
              ReactReconcileTransaction: null,
              batchedUpdates: i,
              enqueueUpdate: c,
              flushBatchedUpdates: x,
              injection: k,
              asap: u,
            };
      e.exports = O;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(56),
          s = n(234),
          a = n(49),
          c = n(40),
          u = n(55);
      t.sendMessage = function(e, t, n) {
          return {
              type: 'Send_Message',
              activity: {
                  type: 'message',
                  text: e,
                  from: t,
                  locale: n,
                  textFormat: 'plain',
                  timestamp: (new Date).toISOString(),
                },
            };
        }, t.sendFiles = function(e, t, n) {
          return {
              type: 'Send_Message',
              activity: {
                  type: 'message',
                  attachments: d(e),
                  from: t,
                  locale: n,
                },
            };
        };
      var l = n(231),
          p = n(232),
          f = n(233),
          h = function(e) {
              function n(n) {
                  var r = e.call(this, n) || this;
                  return r.store = s.createStore(), r.resizeListener = function() {
                      return r.setSize();
                    }, t.konsole.log('BotChat.Chat props', n), r.store.dispatch({
                      type: 'Set_Locale',
                      locale: n.locale || window.navigator.userLanguage || window.navigator.language || 'en',
                    }), n.formatOptions && r.store.dispatch({
                      type: 'Set_Format_Options',
                      options: n.formatOptions,
                    }), n.sendTyping && r.store.dispatch({
                      type: 'Set_Send_Typing',
                      sendTyping: n.sendTyping,
                    }), n.speechOptions && (c.SpeechRecognizer.setSpeechRecognizer(n.speechOptions.speechRecognizer), u.SpeechSynthesizer.setSpeechSynthesizer(n.speechOptions.speechSynthesizer)), r;
                }
              return r.__extends(n, e), n.prototype.handleIncomingActivity = function(e) {
                  var t = this.store.getState();
                  // console.log(t);
                  var database = t;
                  var arr = '';
                  // console.log(database.history.activities);
                  // console.log('length'+database.history.activities.length)
                  // console.log(database.history.activities);
                  for(var i = 0; i < database.history.activities.length; i++){
                    if (!database.history.activities[i].channelId) {
                      arr = database.history.activities[i].text;
                    };
                  }
                  //  console.log(arr);
                   var count = 1;
                   var key = count.toString();
                   if (typeof(Storage) !== "undefined") {
                     localStorage.setItem(key, arr);
                    //  console.log(localStorage.getItem(key));
                     count++;
                   } else {
                     console.log('browser not supported');
                     }
                   switch (e.type) {
                    case 'message':
                      this.store.dispatch({
                              type: e.from.id === t.connection.user.id ? 'Receive_Sent_Message' : 'Receive_Message',
                              activity: e,
                            });
                      break;
                    case 'typing':
                      e.from.id !== t.connection.user.id && this.store.dispatch({
                              type: 'Show_Typing',
                              activity: e,
                            });
                    }
                }, n.prototype.setSize = function() {
                  this.store.dispatch({
                      type: 'Set_Size',
                      width: this.chatviewPanel.offsetWidth,
                      height: this.chatviewPanel.offsetHeight,
                    });
                }, n.prototype.componentDidMount = function() {
                  var e = this;
                  this.setSize();
                  var n = this.props.directLine ? this.botConnection = new i.DirectLine(this.props.directLine) : this.props.botConnection;
                  'window' === this.props.resize && window.addEventListener('resize', this.resizeListener), this.store.dispatch({
                      type: 'Start_Connection',
                      user: this.props.user,
                      bot: this.props.bot,
                      botConnection: n,
                      selectedActivity: this.props.selectedActivity,
                    }), this.connectionStatusSubscription = n.connectionStatus$.subscribe(function(t) {
                      if (e.props.speechOptions && e.props.speechOptions.speechRecognizer) {
                          var r = n.referenceGrammarId;
                          r && (e.props.speechOptions.speechRecognizer.referenceGrammarId = r);
                        }
                      e.store.dispatch({
                          type: 'Connection_Change',
                          connectionStatus: t,
                        });
                    }), this.activitySubscription = n.activity$.subscribe(function(t) {
                      return e.handleIncomingActivity(t);
                    }, function(e) {
                      return t.konsole.log('activity$ error', e);
                    }), this.props.selectedActivity && (this.selectedActivitySubscription = this.props.selectedActivity.subscribe(function(t) {
                      e.store.dispatch({
                          type: 'Select_Activity',
                          selectedActivity: t.activity || e.store.getState().history.activities.find(function(e) {
                              return e.id === t.id;
                            }),
                        });
                    }));
                }, n.prototype.componentWillUnmount = function() {
                  this.connectionStatusSubscription.unsubscribe(), this.activitySubscription.unsubscribe(), this.selectedActivitySubscription && this.selectedActivitySubscription.unsubscribe(), this.botConnection && this.botConnection.end(), window.removeEventListener('resize', this.resizeListener);
                }, n.prototype.setFocus = function() {
                  this.chatviewPanel.querySelector('.wc-shellinput').focus();
                }, n.prototype.render = function() {
                  var e = this,
                      n = this.store.getState();
                  t.konsole.log('BotChat.Chat state', n);
                  var r;
                  n.format.options.showHeader && (r = o.createElement('div', {
                      className: 'wc-header',
                    }, o.createElement('span', null, n.format.strings.title)));
                  var i;
                  return 'detect' === this.props.resize && (i = o.createElement(v, {
                      onresize: this.resizeListener,
                    })), o.createElement(a.Provider, {
                      store: this.store,
                    }, o.createElement('div', {
                      className: 'wc-chatview-panel',
                      ref: function(t) {
                          return e.chatviewPanel = t;
                        },
                    }, r, o.createElement(p.MessagePane, {
                      setFocus: function() {
                          return e.setFocus();
                        },
                    }, o.createElement(l.History, {
                      setFocus: function() {
                          return e.setFocus();
                        },
                    })), o.createElement(f.Shell, null), i));
                }, n;
            }(o.Component);
      t.Chat = h, t.doCardAction = function(e, n, r, o) {
          return function(i, s) {
              switch (i) {
                case 'imBack':
                  s && 'string' == typeof s && o(s, n, r);
                  break;
                case 'postBack':
                  t.sendPostBack(e, s, n, r);
                  break;
                case 'call':
                case 'openUrl':
                case 'playAudio':
                case 'playVideo':
                case 'showImage':
                case 'downloadFile':
                case 'signin':
                  window.open(s);
                  break;
                default:
                  t.konsole.log('unknown button type', i);
                }
            };
        }, t.sendPostBack = function(e, n, r, o) {
          e.postActivity({
              type: 'message',
              text: n,
              from: r,
              locale: o,
            }).subscribe(function(e) {
              t.konsole.log('success sending postBack', e);
            }, function(e) {
              t.konsole.log('failed to send postBack', e);
            });
        };
      var d = function(e) {
          for (var t = [], n = 0, r = e.length; n < r; n++) {
              var o = e[n];
              t.push({
                  contentType: o.type,
                  contentUrl: window.URL.createObjectURL(o),
                  name: o.name,
                });
            }
          return t;
        };
      t.renderIfNonempty = function(e, t) {
          if (void 0 !== e && null !== e && ('string' != typeof e || e.length > 0)) return t(e);
        }, t.classList = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return e.filter(Boolean).join(' ');
        }, t.konsole = {
          log: function(e) {
              for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
              'undefined' != typeof window && window.botchatDebug && e && console.log.apply(console, [e].concat(t));
            },
        };
      var v = function(e) {
          return o.createElement('iframe', {
              style: {
                  position: 'absolute',
                  left: '0',
                  top: '-100%',
                  width: '100%',
                  height: '100%',
                  margin: '1px 0 0',
                  border: 'none',
                  opacity: 0,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                },
              ref: function(t) {
                  t && (t.contentWindow.onresize = e.onresize);
                },
            });
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
          var o = this.constructor.Interface;
          for (var i in o)
              if (o.hasOwnProperty(i)) {
                  var a = o[i];
                  a ? this[i] = a(n) : 'target' === i ? this.target = r : this[i] = n[i];
                }
          var c = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
          return this.isDefaultPrevented = c ? s.thatReturnsTrue : s.thatReturnsFalse, this.isPropagationStopped = s.thatReturnsFalse, this;
        }
      var o = n(5),
          i = n(22),
          s = n(11),
          a = (n(3), ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances']),
          c = {
              type: null,
              target: null,
              currentTarget: s.thatReturnsNull,
              eventPhase: null,
              bubbles: null,
              cancelable: null,
              timeStamp: function(e) {
                  return e.timeStamp || Date.now();
                },
              defaultPrevented: null,
              isTrusted: null,
            };
      o(r.prototype, {
          preventDefault: function() {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e && (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = s.thatReturnsTrue);
            },
          stopPropagation: function() {
              var e = this.nativeEvent;
              e && (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = s.thatReturnsTrue);
            },
          persist: function() {
              this.isPersistent = s.thatReturnsTrue;
            },
          isPersistent: s.thatReturnsFalse,
          destructor: function() {
              var e = this.constructor.Interface;
              for (var t in e) this[t] = null;
              for (var n = 0; n < a.length; n++) this[a[n]] = null;
            },
        }), r.Interface = c, r.augmentClass = function(e, t) {
          var n = this,
              r = function() {};
          r.prototype = n.prototype;
          var s = new r;
          o(s, e.prototype), e.prototype = s, e.prototype.constructor = e, e.Interface = o({}, n.Interface, t), e.augmentClass = n.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler);
        }, i.addPoolingTo(r, i.fourArgumentPooler), e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = {
          current: null,
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      (function(e) {
          var n = 'undefined' != typeof window && window,
              r = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
              o = void 0 !== e && e,
              i = n || o || r;
          t.root = i,
                function() {
                  if (!i) throw new Error('RxJS could not find any global context (window, self, global)');
                }();
        }).call(t, n(53));
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(10),
          i = function(e) {
              function t() {
                  e.apply(this, arguments);
                }
              return r(t, e), t.prototype.notifyNext = function(e, t, n, r, o) {
                  this.destination.next(t);
                }, t.prototype.notifyError = function(e, t) {
                  this.destination.error(e);
                }, t.prototype.notifyComplete = function(e) {
                  this.destination.complete();
                }, t;
            }(o.Subscriber);
      t.OuterSubscriber = i;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          var f = new l.InnerSubscriber(e, n, r);
          if (f.closed) return null;
          if (t instanceof c.Observable) return t._isScalar ? (f.next(t.value), f.complete(), null) : t.subscribe(f);
          if (i.isArrayLike(t)) {
              for (var h = 0, d = t.length; h < d && !f.closed; h++) f.next(t[h]);
              f.closed || f.complete();
            } else {
              if (s.isPromise(t)) return t.then(function(e) {
                  f.closed || (f.next(e), f.complete());
                }, function(e) {
                  return f.error(e);
                }).then(null, function(e) {
                  o.root.setTimeout(function() {
                      throw e;
                    });
                }), f;
              if (t && 'function' == typeof t[u.iterator])
                  for (var v = t[u.iterator]();;) {
                      var m = v.next();
                      if (m.done) {
                          f.complete();
                          break;
                        }
                      if (f.next(m.value), f.closed) break;
                    } else if (t && 'function' == typeof t[p.observable]) {
                      var g = t[p.observable]();
                      if ('function' == typeof g.subscribe) return g.subscribe(new l.InnerSubscriber(e, n, r));
                      f.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
                    } else {
                      var y = a.isObject(t) ? 'an invalid object' : '\'' + t + '\'',
                          b = 'You provided ' + y + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.';
                      f.error(new TypeError(b));
                    }
            }
          return null;
        }
      var o = n(19),
          i = n(177),
          s = n(179),
          a = n(178),
          c = n(0),
          u = n(89),
          l = n(427),
          p = n(90);
      t.subscribeToResult = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = (n(1), function(e) {
              var t = this;
              if (t.instancePool.length) {
                  var n = t.instancePool.pop();
                  return t.call(n, e), n;
                }
              return new t(e);
            }),
          i = function(e, t) {
              var n = this;
              if (n.instancePool.length) {
                  var r = n.instancePool.pop();
                  return n.call(r, e, t), r;
                }
              return new n(e, t);
            },
          s = function(e, t, n) {
              var r = this;
              if (r.instancePool.length) {
                  var o = r.instancePool.pop();
                  return r.call(o, e, t, n), o;
                }
              return new r(e, t, n);
            },
          a = function(e, t, n, r) {
              var o = this;
              if (o.instancePool.length) {
                  var i = o.instancePool.pop();
                  return o.call(i, e, t, n, r), i;
                }
              return new o(e, t, n, r);
            },
          c = function(e) {
              var t = this;
              e instanceof t || r('25'), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
            },
          u = o,
          l = function(e, t) {
              var n = e;
              return n.instancePool = [], n.getPooled = t || u, n.poolSize || (n.poolSize = 10), n.release = c, n;
            },
          p = {
              addPoolingTo: l,
              oneArgumentPooler: o,
              twoArgumentPooler: i,
              threeArgumentPooler: s,
              fourArgumentPooler: a,
            };
      e.exports = p;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e.reduce(function(e, t) {
              return e.concat(t instanceof u.UnsubscriptionError ? t.errors : t);
            }, []);
        }
      var o = n(52),
          i = n(178),
          s = n(92),
          a = n(39),
          c = n(31),
          u = n(481),
          l = function() {
              function e(e) {
                  this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, e && (this._unsubscribe = e);
                }
              return e.prototype.unsubscribe = function() {
                  var e, t = !1;
                  if (!this.closed) {
                      var n = this,
                          l = n._parent,
                          p = n._parents,
                          f = n._unsubscribe,
                          h = n._subscriptions;
                      this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                      for (var d = -1, v = p ? p.length : 0; l;) l.remove(this), l = ++d < v && p[d] || null;
                      if (s.isFunction(f)) {
                          var m = a.tryCatch(f).call(this);
                          m === c.errorObject && (t = !0, e = e || (c.errorObject.e instanceof u.UnsubscriptionError ? r(c.errorObject.e.errors) : [c.errorObject.e]));
                        }
                      if (o.isArray(h))
                          for (d = -1, v = h.length; ++d < v;) {
                              var g = h[d];
                              if (i.isObject(g)) {
                                  var m = a.tryCatch(g.unsubscribe).call(g);
                                  if (m === c.errorObject) {
                                      t = !0, e = e || [];
                                      var y = c.errorObject.e;
                                      y instanceof u.UnsubscriptionError ? e = e.concat(r(y.errors)) : e.push(y);
                                    }
                                }
                            }
                      if (t) throw new u.UnsubscriptionError(e);
                    }
                }, e.prototype.add = function(t) {
                  if (!t || t === e.EMPTY) return e.EMPTY;
                  if (t === this) return this;
                  var n = t;
                  switch (typeof t) {
                    case 'function':
                      n = new e(t);
                    case 'object':
                      if (n.closed || 'function' != typeof n.unsubscribe) return n;
                      if (this.closed) return n.unsubscribe(), n;
                      if ('function' != typeof n._addParent) {
                              var r = n;
                              n = new e, n._subscriptions = [r];
                            }
                      break;
                    default:
                      throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
                    }
                  return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n;
                }, e.prototype.remove = function(e) {
                  var t = this._subscriptions;
                  if (t) {
                      var n = t.indexOf(e); - 1 !== n && t.splice(n, 1);
                    }
                }, e.prototype._addParent = function(e) {
                  var t = this,
                      n = t._parent,
                      r = t._parents;
                  n && n !== e ? r ? -1 === r.indexOf(e) && r.push(e) : this._parents = [e] : this._parent = e;
                }, e.EMPTY = function(e) {
                  return e.closed = !0, e;
                }(new e), e;
            }();
      t.Subscription = l;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          var e = (new Date).getTime();
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
              var n = (e + 16 * Math.random()) % 16 | 0;
              return e = Math.floor(e / 16), ('x' === t ? n : 3 & n | 8).toString(16);
            });
        };
      t.CreateGuid = r;
      var o = function() {
          return r().replace(new RegExp('-', 'g'), '').toUpperCase();
        };
      t.CreateNoDashGuid = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (d) {
              var t = e.node,
                  n = e.children;
              if (n.length)
                  for (var r = 0; r < n.length; r++) v(t, n[r], null);
              else null != e.html ? p(t, e.html) : null != e.text && h(t, e.text);
            }
        }

      function o(e, t) {
          e.parentNode.replaceChild(t.node, e), r(t);
        }

      function i(e, t) {
          d ? e.children.push(t) : e.node.appendChild(t.node);
        }

      function s(e, t) {
          d ? e.html = t : p(e.node, t);
        }

      function a(e, t) {
          d ? e.text = t : h(e.node, t);
        }

      function c() {
          return this.node.nodeName;
        }

      function u(e) {
          return {
              node: e,
              children: [],
              html: null,
              text: null,
              toString: c,
            };
        }
      var l = n(70),
          p = n(48),
          f = n(78),
          h = n(144),
          d = 'undefined' != typeof document && 'number' == typeof document.documentMode || 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
          v = f(function(e, t, n) {
              11 === t.node.nodeType || 1 === t.node.nodeType && 'object' === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === l.html) ? (r(t), e.insertBefore(t.node, n)) : (e.insertBefore(t.node, n), r(t));
            });
      u.insertTreeBefore = v, u.replaceChildWithTree = o, u.queueChild = i, u.queueHTML = s, u.queueText = a, e.exports = u;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return (e & t) === t;
        }
      var o = n(4),
          i = (n(1), {
              MUST_USE_PROPERTY: 1,
              HAS_BOOLEAN_VALUE: 4,
              HAS_NUMERIC_VALUE: 8,
              HAS_POSITIVE_NUMERIC_VALUE: 24,
              HAS_OVERLOADED_BOOLEAN_VALUE: 32,
              injectDOMPropertyConfig: function(e) {
                  var t = i,
                      n = e.Properties || {},
                      s = e.DOMAttributeNamespaces || {},
                      c = e.DOMAttributeNames || {},
                      u = e.DOMPropertyNames || {},
                      l = e.DOMMutationMethods || {};
                  e.isCustomAttribute && a._isCustomAttributeFunctions.push(e.isCustomAttribute);
                  for (var p in n) {
                      a.properties.hasOwnProperty(p) && o('48', p);
                      var f = p.toLowerCase(),
                          h = n[p],
                          d = {
                              attributeName: f,
                              attributeNamespace: null,
                              propertyName: p,
                              mutationMethod: null,
                              mustUseProperty: r(h, t.MUST_USE_PROPERTY),
                              hasBooleanValue: r(h, t.HAS_BOOLEAN_VALUE),
                              hasNumericValue: r(h, t.HAS_NUMERIC_VALUE),
                              hasPositiveNumericValue: r(h, t.HAS_POSITIVE_NUMERIC_VALUE),
                              hasOverloadedBooleanValue: r(h, t.HAS_OVERLOADED_BOOLEAN_VALUE),
                            };
                      if (d.hasBooleanValue + d.hasNumericValue + d.hasOverloadedBooleanValue <= 1 || o('50', p), c.hasOwnProperty(p)) {
                          var v = c[p];
                          d.attributeName = v;
                        }
                      s.hasOwnProperty(p) && (d.attributeNamespace = s[p]), u.hasOwnProperty(p) && (d.propertyName = u[p]), l.hasOwnProperty(p) && (d.mutationMethod = l[p]), a.properties[p] = d;
                    }
                },
            }),
          s = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
          a = {
              ID_ATTRIBUTE_NAME: 'data-reactid',
              ROOT_ATTRIBUTE_NAME: 'data-reactroot',
              ATTRIBUTE_NAME_START_CHAR: s,
              ATTRIBUTE_NAME_CHAR: s + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
              properties: {},
              getPossibleStandardName: null,
              _isCustomAttributeFunctions: [],
              isCustomAttribute: function(e) {
                  for (var t = 0; t < a._isCustomAttributeFunctions.length; t++) {
                      if ((0, a._isCustomAttributeFunctions[t])(e)) return !0;
                    }
                  return !1;
                },
              injection: i,
            };
      e.exports = a;
    }, function(e, t, n) {
      'use strict';

      function r() {
          o.attachRefs(this, this._currentElement);
        }
      var o = n(371),
          i = (n(14), n(3), {
              mountComponent: function(e, t, n, o, i, s) {
                  var a = e.mountComponent(t, n, o, i, s);
                  return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(r, e), a;
                },
              getHostNode: function(e) {
                  return e.getHostNode();
                },
              unmountComponent: function(e, t) {
                  o.detachRefs(e, e._currentElement), e.unmountComponent(t);
                },
              receiveComponent: function(e, t, n, i) {
                  var s = e._currentElement;
                  if (t !== s || i !== e._context) {
                      var a = o.shouldUpdateRefs(s, t);
                      a && o.detachRefs(e, s), e.receiveComponent(t, n, i), a && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(r, e);
                    }
                },
              performUpdateIfNecessary: function(e, t, n) {
                  e._updateBatchNumber === n && e.performUpdateIfNecessary(t);
                },
            });
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      var r = n(5),
          o = n(150),
          i = n(409),
          s = n(410),
          a = n(29),
          c = n(411),
          u = n(412),
          l = n(413),
          p = n(417),
          f = a.createElement,
          h = a.createFactory,
          d = a.cloneElement,
          v = r,
          m = function(e) {
              return e;
            },
          g = {
              Children: {
                  map: i.map,
                  forEach: i.forEach,
                  count: i.count,
                  toArray: i.toArray,
                  only: p,
                },
              Component: o.Component,
              PureComponent: o.PureComponent,
              createElement: f,
              cloneElement: d,
              isValidElement: a.isValidElement,
              PropTypes: c,
              createClass: l,
              createFactory: h,
              createMixin: m,
              DOM: s,
              version: u,
              __spread: v,
            };
      e.exports = g;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return void 0 !== e.ref;
        }

      function o(e) {
          return void 0 !== e.key;
        }
      var i = n(5),
          s = n(18),
          a = (n(3), n(154), Object.prototype.hasOwnProperty),
          c = n(152),
          u = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
          l = function(e, t, n, r, o, i, s) {
              var a = {
                  $$typeof: c,
                  type: e,
                  key: t,
                  ref: n,
                  props: s,
                  _owner: i,
                };
              return a;
            };
      l.createElement = function(e, t, n) {
          var i, c = {},
              p = null,
              f = null;
          if (null != t) {
              r(t) && (f = t.ref), o(t) && (p = '' + t.key), void 0 === t.__self ? null : t.__self, void 0 === t.__source ? null : t.__source;
              for (i in t) a.call(t, i) && !u.hasOwnProperty(i) && (c[i] = t[i]);
            }
          var h = arguments.length - 2;
          if (1 === h) c.children = n;
          else if (h > 1) {
              for (var d = Array(h), v = 0; v < h; v++) d[v] = arguments[v + 2];
              c.children = d;
            }
          if (e && e.defaultProps) {
              var m = e.defaultProps;
              for (i in m) void 0 === c[i] && (c[i] = m[i]);
            }
          return l(e, p, f, 0, 0, s.current, c);
        }, l.createFactory = function(e) {
          var t = l.createElement.bind(null, e);
          return t.type = e, t;
        }, l.cloneAndReplaceKey = function(e, t) {
          return l(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        }, l.cloneElement = function(e, t, n) {
          var c, p = i({}, e.props),
              f = e.key,
              h = e.ref,
              d = (e._self, e._source, e._owner);
          if (null != t) {
              r(t) && (h = t.ref, d = s.current), o(t) && (f = '' + t.key);
              var v;
              e.type && e.type.defaultProps && (v = e.type.defaultProps);
              for (c in t) a.call(t, c) && !u.hasOwnProperty(c) && (void 0 === t[c] && void 0 !== v ? p[c] = v[c] : p[c] = t[c]);
            }
          var m = arguments.length - 2;
          if (1 === m) p.children = n;
          else if (m > 1) {
              for (var g = Array(m), y = 0; y < m; y++) g[y] = arguments[y + 2];
              p.children = g;
            }
          return l(e.type, f, h, 0, 0, d, p);
        }, l.isValidElement = function(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === c;
        }, e.exports = l;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = n(10),
          s = n(23),
          a = n(176),
          c = n(429),
          u = n(91),
          l = function(e) {
              function t(t) {
                  e.call(this, t), this.destination = t;
                }
              return r(t, e), t;
            }(i.Subscriber);
      t.SubjectSubscriber = l;
      var p = function(e) {
          function t() {
              e.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null;
            }
          return r(t, e), t.prototype[u.rxSubscriber] = function() {
              return new l(this);
            }, t.prototype.lift = function(e) {
              var t = new f(this, this);
              return t.operator = e, t;
            }, t.prototype.next = function(e) {
              if (this.closed) throw new a.ObjectUnsubscribedError;
              if (!this.isStopped)
                  for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e);
            }, t.prototype.error = function(e) {
              if (this.closed) throw new a.ObjectUnsubscribedError;
              this.hasError = !0, this.thrownError = e, this.isStopped = !0;
              for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
              this.observers.length = 0;
            }, t.prototype.complete = function() {
              if (this.closed) throw new a.ObjectUnsubscribedError;
              this.isStopped = !0;
              for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
              this.observers.length = 0;
            }, t.prototype.unsubscribe = function() {
              this.isStopped = !0, this.closed = !0, this.observers = null;
            }, t.prototype._trySubscribe = function(t) {
              if (this.closed) throw new a.ObjectUnsubscribedError;
              return e.prototype._trySubscribe.call(this, t);
            }, t.prototype._subscribe = function(e) {
              if (this.closed) throw new a.ObjectUnsubscribedError;
              return this.hasError ? (e.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (e.complete(), s.Subscription.EMPTY) : (this.observers.push(e), new c.SubjectSubscription(this, e));
            }, t.prototype.asObservable = function() {
              var e = new o.Observable;
              return e.source = this, e;
            }, t.create = function(e, t) {
              return new f(e, t);
            }, t;
        }(o.Observable);
      t.Subject = p;
      var f = function(e) {
          function t(t, n) {
              e.call(this), this.destination = t, this.source = n;
            }
          return r(t, e), t.prototype.next = function(e) {
              var t = this.destination;
              t && t.next && t.next(e);
            }, t.prototype.error = function(e) {
              var t = this.destination;
              t && t.error && this.destination.error(e);
            }, t.prototype.complete = function() {
              var e = this.destination;
              e && e.complete && this.destination.complete();
            }, t.prototype._subscribe = function(e) {
              return this.source ? this.source.subscribe(e) : s.Subscription.EMPTY;
            }, t;
        }(p);
      t.AnonymousSubject = f;
    }, function(e, t, n) {
      'use strict';
      t.errorObject = {
          e: {},
        };
    }, function(e, t) {
      var n = e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')();
      'number' == typeof __g && (__g = n);
    }, function(e, t) {
      e.exports = function(e) {
          return 'object' == typeof e ? null !== e : 'function' == typeof e;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 'button' === e || 'input' === e || 'select' === e || 'textarea' === e;
        }

      function o(e, t, n) {
          switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
              return !(!n.disabled || !r(t));
            default:
              return !1;
            }
        }
      var i = n(4),
          s = n(71),
          a = n(72),
          c = n(76),
          u = n(137),
          l = n(138),
          p = (n(1), {}),
          f = null,
          h = function(e, t) {
              e && (a.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e));
            },
          d = function(e) {
              return h(e, !0);
            },
          v = function(e) {
              return h(e, !1);
            },
          m = function(e) {
              return '.' + e._rootNodeID;
            },
          g = {
              injection: {
                  injectEventPluginOrder: s.injectEventPluginOrder,
                  injectEventPluginsByName: s.injectEventPluginsByName,
                },
              putListener: function(e, t, n) {
                  'function' != typeof n && i('94', t, typeof n);
                  var r = m(e);
                  (p[t] || (p[t] = {}))[r] = n;
                  var o = s.registrationNameModules[t];
                  o && o.didPutListener && o.didPutListener(e, t, n);
                },
              getListener: function(e, t) {
                  var n = p[t];
                  if (o(t, e._currentElement.type, e._currentElement.props)) return null;
                  var r = m(e);
                  return n && n[r];
                },
              deleteListener: function(e, t) {
                  var n = s.registrationNameModules[t];
                  n && n.willDeleteListener && n.willDeleteListener(e, t);
                  var r = p[t];
                  if (r) {
                      delete r[m(e)];
                    }
                },
              deleteAllListeners: function(e) {
                  var t = m(e);
                  for (var n in p)
                      if (p.hasOwnProperty(n) && p[n][t]) {
                          var r = s.registrationNameModules[n];
                          r && r.willDeleteListener && r.willDeleteListener(e, n), delete p[n][t];
                        }
                },
              extractEvents: function(e, t, n, r) {
                  for (var o, i = s.plugins, a = 0; a < i.length; a++) {
                      var c = i[a];
                      if (c) {
                          var l = c.extractEvents(e, t, n, r);
                          l && (o = u(o, l));
                        }
                    }
                  return o;
                },
              enqueueEvents: function(e) {
                  e && (f = u(f, e));
                },
              processEventQueue: function(e) {
                  var t = f;
                  f = null, e ? l(t, d) : l(t, v), f && i('95'), c.rethrowCaughtError();
                },
              __purge: function() {
                  p = {};
                },
              __getListenerBank: function() {
                  return p;
                },
            };
      e.exports = g;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          var r = t.dispatchConfig.phasedRegistrationNames[n];
          return g(e, r);
        }

      function o(e, t, n) {
          var o = r(e, n, t);
          o && (n._dispatchListeners = v(n._dispatchListeners, o), n._dispatchInstances = v(n._dispatchInstances, e));
        }

      function i(e) {
          e && e.dispatchConfig.phasedRegistrationNames && d.traverseTwoPhase(e._targetInst, o, e);
        }

      function s(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
              var t = e._targetInst,
                  n = t ? d.getParentInstance(t) : null;
              d.traverseTwoPhase(n, o, e);
            }
        }

      function a(e, t, n) {
          if (n && n.dispatchConfig.registrationName) {
              var r = n.dispatchConfig.registrationName,
                  o = g(e, r);
              o && (n._dispatchListeners = v(n._dispatchListeners, o), n._dispatchInstances = v(n._dispatchInstances, e));
            }
        }

      function c(e) {
          e && e.dispatchConfig.registrationName && a(e._targetInst, null, e);
        }

      function u(e) {
          m(e, i);
        }

      function l(e) {
          m(e, s);
        }

      function p(e, t, n, r) {
          d.traverseEnterLeave(n, r, a, e, t);
        }

      function f(e) {
          m(e, c);
        }
      var h = n(34),
          d = n(72),
          v = n(137),
          m = n(138),
          g = (n(3), h.getListener),
          y = {
              accumulateTwoPhaseDispatches: u,
              accumulateTwoPhaseDispatchesSkipTarget: l,
              accumulateDirectDispatches: f,
              accumulateEnterLeaveDispatches: p,
            };
      e.exports = y;
    }, function(e, t, n) {
      'use strict';
      var r = {
          remove: function(e) {
              e._reactInternalInstance = void 0;
            },
          get: function(e) {
              return e._reactInternalInstance;
            },
          has: function(e) {
              return void 0 !== e._reactInternalInstance;
            },
          set: function(e, t) {
              e._reactInternalInstance = t;
            },
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = n(81),
          s = {
              view: function(e) {
                  if (e.view) return e.view;
                  var t = i(e);
                  if (t.window === t) return t;
                  var n = t.ownerDocument;
                  return n ? n.defaultView || n.parentWindow : window;
                },
              detail: function(e) {
                  return e.detail || 0;
                },
            };
      o.augmentClass(r, s), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var t = arguments.length - 1, n = 'Minified React error #' + e + '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' + e, r = 0; r < t; r++) n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
          n += ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
          var o = new Error(n);
          throw o.name = 'Invariant Violation', o.framesToPop = 1, o;
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          try {
              return i.apply(this, arguments);
            } catch (e) {
              return s.errorObject.e = e, s.errorObject;
            }
        }

      function o(e) {
          return i = e, r;
        }
      var i, s = n(31);
      t.tryCatch = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(16),
          o = n(190),
          i = function() {
              function e() {}
              return e.setSpeechRecognizer = function(t) {
                  e.instance = t;
                }, e.startRecognizing = function(t, n, r, o) {
                  void 0 === t && (t = 'en-US'), void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = null), e.speechIsAvailable() && (t && e.instance.locale !== t && (e.instance.stopRecognizing(), e.instance.locale = t), e.alreadyRecognizing() && e.stopRecognizing(), e.instance.onIntermediateResult = n, e.instance.onFinalResult = r, e.instance.onAudioStreamingToService = o, e.instance.startRecognizing());
                }, e.stopRecognizing = function() {
                  e.speechIsAvailable() && e.instance.stopRecognizing();
                }, e.warmup = function() {
                  e.speechIsAvailable() && e.instance.warmup();
                }, e.speechIsAvailable = function() {
                  return null != e.instance;
                }, e.alreadyRecognizing = function() {
                  return !!e.instance && e.instance.isStreamingToService;
                }, e;
            }();
      i.instance = null, t.SpeechRecognizer = i;
      ! function(e) {
          var t = function() {
              function e() {
                  var e = this;
                  if (this.locale = null, this.isStreamingToService = !1, this.onIntermediateResult = null, this.onFinalResult = null, this.onAudioStreamingToService = null, this.recognizer = null, this.recognizer = new window.webkitSpeechRecognition, null == this.recognizer) throw 'Error: This browser does not support speech recognition';
                  this.recognizer.lang = 'en-US', this.recognizer.interimResults = !0, this.recognizer.onaudiostart = function() {
                      e.onAudioStreamingToService && e.onAudioStreamingToService();
                    }, this.recognizer.onresult = function(t) {
                      if (null != t.results && 0 != t.length) {
                          var n = t.results[0];
                          if (!0 === n.isFinal && null != e.onFinalResult) e.onFinalResult(n[0].transcript);
                          else if (!1 === n.isFinal && null != e.onIntermediateResult) {
                              for (var r = '', o = 0; o < t.results.length; ++o) r += t.results[o][0].transcript;
                              e.onIntermediateResult(r);
                            }
                        }
                    }, this.recognizer.onerror = function(e) {
                      throw e;
                    };
                }
              return e.prototype.warmup = function() {}, e.prototype.startRecognizing = function() {
                  this.recognizer.start();
                }, e.prototype.stopRecognizing = function() {
                  this.recognizer.stop();
                }, e;
            }();
          e.BrowserSpeechRecognizer = t;
          var n = function() {
              function e(e) {
                  void 0 === e && (e = {});
                  var t = this;
                  this.audioStreamStartInitiated = !1, this.isStreamingToService = !1, this.onIntermediateResult = null, this.onFinalResult = null, this.onAudioStreamingToService = null, this.locale = null, this.actualRecognizer = null, this.properties = e;
                  var n, r = o.RecognitionMode.Interactive,
                      i = o.SpeechResultFormat.Simple,
                      s = e.locale || 'en-US',
                      a = new o.RecognizerConfig(new o.SpeechConfig(new o.Context(new o.OS(navigator.userAgent, 'Browser', null), new o.Device('WebChat', 'WebChat', '1.0.00000'))), r, s, i);
                  if (e.subscriptionKey) n = new o.CognitiveSubscriptionKeyAuthentication(e.subscriptionKey);
                  else {
                      if (!e.fetchCallback || !e.fetchOnExpiryCallback) throw 'Error: The CognitiveServicesSpeechRecognizer requires either a subscriptionKey or a fetchCallback and fetchOnExpiryCallback.';
                      n = new o.CognitiveTokenAuthentication(function(e) {
                          var n = new o.Deferred;
                          return t.properties.fetchCallback(e).then(function(e) {
                              return n.Resolve(e);
                            }, function(e) {
                              return n.Reject(e);
                            }), n.Promise();
                        }, function(e) {
                          var n = new o.Deferred;
                          return t.properties.fetchOnExpiryCallback(e).then(function(e) {
                              return n.Resolve(e);
                            }, function(e) {
                              return n.Reject(e);
                            }), n.Promise();
                        });
                    }
                  this.actualRecognizer = o.CreateRecognizer(a, n);
                }
              return e.prototype.warmup = function() {}, e.prototype.startRecognizing = function() {
                  var e = this;
                  if (!this.actualRecognizer) return void this.log('ERROR: no recognizer?');
                  var t = function(t) {
                        switch (t.Name) {
                            case 'RecognitionTriggeredEvent':
                              e.log('RecognitionTriggeredEvent');
                              break;
                            case 'ListeningStartedEvent':
                              e.log('ListeningStartedEvent');
                              break;
                            case 'RecognitionStartedEvent':
                              e.log('RecognitionStartedEvent'), e.onAudioStreamingToService && e.onAudioStreamingToService(), e.isStreamingToService = !0;
                              break;
                            case 'SpeechStartDetectedEvent':
                              e.log('SpeechStartDetectedEvent');
                              break;
                            case 'SpeechHypothesisEvent':
                              var n = t;
                              e.log('SpeechHypothesisEvent: ' + n.Result.Text), e.onIntermediateResult && e.onIntermediateResult(n.Result.Text);
                              break;
                            case 'SpeechEndDetectedEvent':
                              e.log('SpeechEndDetectedEvent');
                              break;
                            case 'SpeechSimplePhraseEvent':
                              e.log('SpeechSimplePhraseEvent');
                              var r = t;
                              o.RecognitionStatus[r.Result.RecognitionStatus] === o.RecognitionStatus.Success ? e.onFinalResult && e.onFinalResult(r.Result.DisplayText) : e.log('Recognition Status: ' + r.Result.RecognitionStatus.toString());
                              break;
                            case 'SpeechDetailedPhraseEvent':
                              e.log('SpeechDetailedPhraseEvent');
                              break;
                            case 'RecognitionEndedEvent':
                              e.log('RecognitionEndedEvent'), e.isStreamingToService = !1;
                            }
                      },
                      n = null;
                  this.referenceGrammarId && (n = JSON.stringify({
                      dgi: {
                          Groups: [{
                              Type: 'Generic',
                              Hints: {
                                  ReferenceGrammar: this.referenceGrammarId,
                                },
                            }],
                        },
                    })), this.actualRecognizer.Recognize(t, n);
                }, e.prototype.stopRecognizing = function() {
                  null != this.actualRecognizer && this.actualRecognizer.AudioSource.TurnOff(), this.isStreamingToService = !1;
                }, e.prototype.log = function(e) {
                  r.konsole.log('CognitiveServicesSpeechRecognizer: ' + e);
                }, e;
            }();
          e.CognitiveServicesSpeechRecognizer = n;
        }(t.SpeechRecognition || (t.SpeechRecognition = {}));
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), r(n(191)), r(n(192)), r(n(193)), r(n(194)), r(n(195)), r(n(196)), r(n(197)), r(n(198)), r(n(199)), r(n(94));
    }, function(e, t, n) {
      var r = n(251)('wks'),
          o = n(111),
          i = n(32).Symbol,
          s = 'function' == typeof i;
      (e.exports = function(e) {
          return r[e] || (r[e] = s && i[e] || (s ? i : o)('Symbol.' + e));
        }).store = r;
    }, function(e, t, n) {
      'use strict';
      var r = {};
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return Object.prototype.hasOwnProperty.call(e, v) || (e[v] = h++, p[e[v]] = {}), p[e[v]];
        }
      var o, i = n(5),
          s = n(71),
          a = n(363),
          c = n(136),
          u = n(395),
          l = n(82),
          p = {},
          f = !1,
          h = 0,
          d = {
              topAbort: 'abort',
              topAnimationEnd: u('animationend') || 'animationend',
              topAnimationIteration: u('animationiteration') || 'animationiteration',
              topAnimationStart: u('animationstart') || 'animationstart',
              topBlur: 'blur',
              topCanPlay: 'canplay',
              topCanPlayThrough: 'canplaythrough',
              topChange: 'change',
              topClick: 'click',
              topCompositionEnd: 'compositionend',
              topCompositionStart: 'compositionstart',
              topCompositionUpdate: 'compositionupdate',
              topContextMenu: 'contextmenu',
              topCopy: 'copy',
              topCut: 'cut',
              topDoubleClick: 'dblclick',
              topDrag: 'drag',
              topDragEnd: 'dragend',
              topDragEnter: 'dragenter',
              topDragExit: 'dragexit',
              topDragLeave: 'dragleave',
              topDragOver: 'dragover',
              topDragStart: 'dragstart',
              topDrop: 'drop',
              topDurationChange: 'durationchange',
              topEmptied: 'emptied',
              topEncrypted: 'encrypted',
              topEnded: 'ended',
              topError: 'error',
              topFocus: 'focus',
              topInput: 'input',
              topKeyDown: 'keydown',
              topKeyPress: 'keypress',
              topKeyUp: 'keyup',
              topLoadedData: 'loadeddata',
              topLoadedMetadata: 'loadedmetadata',
              topLoadStart: 'loadstart',
              topMouseDown: 'mousedown',
              topMouseMove: 'mousemove',
              topMouseOut: 'mouseout',
              topMouseOver: 'mouseover',
              topMouseUp: 'mouseup',
              topPaste: 'paste',
              topPause: 'pause',
              topPlay: 'play',
              topPlaying: 'playing',
              topProgress: 'progress',
              topRateChange: 'ratechange',
              topScroll: 'scroll',
              topSeeked: 'seeked',
              topSeeking: 'seeking',
              topSelectionChange: 'selectionchange',
              topStalled: 'stalled',
              topSuspend: 'suspend',
              topTextInput: 'textInput',
              topTimeUpdate: 'timeupdate',
              topTouchCancel: 'touchcancel',
              topTouchEnd: 'touchend',
              topTouchMove: 'touchmove',
              topTouchStart: 'touchstart',
              topTransitionEnd: u('transitionend') || 'transitionend',
              topVolumeChange: 'volumechange',
              topWaiting: 'waiting',
              topWheel: 'wheel',
            },
          v = '_reactListenersID' + String(Math.random()).slice(2),
          m = i({}, a, {
              ReactEventListener: null,
              injection: {
                  injectReactEventListener: function(e) {
                      e.setHandleTopLevel(m.handleTopLevel), m.ReactEventListener = e;
                    },
                },
              setEnabled: function(e) {
                  m.ReactEventListener && m.ReactEventListener.setEnabled(e);
                },
              isEnabled: function() {
                  return !(!m.ReactEventListener || !m.ReactEventListener.isEnabled());
                },
              listenTo: function(e, t) {
                  for (var n = t, o = r(n), i = s.registrationNameDependencies[e], a = 0; a < i.length; a++) {
                      var c = i[a];
                      o.hasOwnProperty(c) && o[c] || ('topWheel' === c ? l('wheel') ? m.ReactEventListener.trapBubbledEvent('topWheel', 'wheel', n) : l('mousewheel') ? m.ReactEventListener.trapBubbledEvent('topWheel', 'mousewheel', n) : m.ReactEventListener.trapBubbledEvent('topWheel', 'DOMMouseScroll', n) : 'topScroll' === c ? l('scroll', !0) ? m.ReactEventListener.trapCapturedEvent('topScroll', 'scroll', n) : m.ReactEventListener.trapBubbledEvent('topScroll', 'scroll', m.ReactEventListener.WINDOW_HANDLE) : 'topFocus' === c || 'topBlur' === c ? (l('focus', !0) ? (m.ReactEventListener.trapCapturedEvent('topFocus', 'focus', n), m.ReactEventListener.trapCapturedEvent('topBlur', 'blur', n)) : l('focusin') && (m.ReactEventListener.trapBubbledEvent('topFocus', 'focusin', n), m.ReactEventListener.trapBubbledEvent('topBlur', 'focusout', n)), o.topBlur = !0, o.topFocus = !0) : d.hasOwnProperty(c) && m.ReactEventListener.trapBubbledEvent(c, d[c], n), o[c] = !0);
                    }
                },
              trapBubbledEvent: function(e, t, n) {
                  return m.ReactEventListener.trapBubbledEvent(e, t, n);
                },
              trapCapturedEvent: function(e, t, n) {
                  return m.ReactEventListener.trapCapturedEvent(e, t, n);
                },
              supportsEventPageXY: function() {
                  if (!document.createEvent) return !1;
                  var e = document.createEvent('MouseEvent');
                  return null != e && 'pageX' in e;
                },
              ensureScrollValueMonitoring: function() {
                  if (void 0 === o && (o = m.supportsEventPageXY()), !o && !f) {
                      var e = c.refreshScrollValues;
                      m.ReactEventListener.monitorScrollValue(e), f = !0;
                    }
                },
            });
      e.exports = m;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(37),
          i = n(136),
          s = n(80),
          a = {
              screenX: null,
              screenY: null,
              clientX: null,
              clientY: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              getModifierState: s,
              button: function(e) {
                  var t = e.button;
                  return 'which' in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0;
                },
              buttons: null,
              relatedTarget: function(e) {
                  return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                },
              pageX: function(e) {
                  return 'pageX' in e ? e.pageX : e.clientX + i.currentScrollLeft;
                },
              pageY: function(e) {
                  return 'pageY' in e ? e.pageY : e.clientY + i.currentScrollTop;
                },
            };
      o.augmentClass(r, a), e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = (n(1), {}),
          i = {
              reinitializeTransaction: function() {
                  this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1;
                },
              _isInTransaction: !1,
              getTransactionWrappers: null,
              isInTransaction: function() {
                  return !!this._isInTransaction;
                },
              perform: function(e, t, n, o, i, s, a, c) {
                  this.isInTransaction() && r('27');
                  var u, l;
                  try {
                      this._isInTransaction = !0, u = !0, this.initializeAll(0), l = e.call(t, n, o, i, s, a, c), u = !1;
                    } finally {
                      try {
                          if (u) try {
                              this.closeAll(0);
                            } catch (e) {} else this.closeAll(0);
                        } finally {
                          this._isInTransaction = !1;
                        }
                    }
                  return l;
                },
              initializeAll: function(e) {
                  for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                      var r = t[n];
                      try {
                          this.wrapperInitData[n] = o, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null;
                        } finally {
                          if (this.wrapperInitData[n] === o) try {
                              this.initializeAll(n + 1);
                            } catch (e) {}
                        }
                    }
                },
              closeAll: function(e) {
                  this.isInTransaction() || r('28');
                  for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                      var i, s = t[n],
                          a = this.wrapperInitData[n];
                      try {
                          i = !0, a !== o && s.close && s.close.call(this, a), i = !1;
                        } finally {
                          if (i) try {
                              this.closeAll(n + 1);
                            } catch (e) {}
                        }
                    }
                  this.wrapperInitData.length = 0;
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = '' + e,
              n = i.exec(t);
          if (!n) return t;
          var r, o = '',
              s = 0,
              a = 0;
          for (s = n.index; s < t.length; s++) {
              switch (t.charCodeAt(s)) {
                case 34:
                  r = '&quot;';
                  break;
                case 38:
                  r = '&amp;';
                  break;
                case 39:
                  r = '&#x27;';
                  break;
                case 60:
                  r = '&lt;';
                  break;
                case 62:
                  r = '&gt;';
                  break;
                default:
                  continue;
                }
              a !== s && (o += t.substring(a, s)), a = s + 1, o += r;
            }
          return a !== s ? o + t.substring(a, s) : o;
        }

      function o(e) {
          return 'boolean' == typeof e || 'number' == typeof e ? '' + e : r(e);
        }
      var i = /["'&<>]/;
      e.exports = o;
    }, function(e, t, n) {
      'use strict';
      var r, o = n(9),
          i = n(70),
          s = /^[ \r\n\t\f]/,
          a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
          c = n(78),
          u = c(function(e, t) {
              if (e.namespaceURI !== i.svg || 'innerHTML' in e) e.innerHTML = t;
              else {
                  r = r || document.createElement('div'), r.innerHTML = '<svg>' + t + '</svg>';
                  for (var n = r.firstChild; n.firstChild;) e.appendChild(n.firstChild);
                }
            });
      if (o.canUseDOM) {
          var l = document.createElement('div');
          l.innerHTML = ' ', '' === l.innerHTML && (u = function(e, t) {
              if (e.parentNode && e.parentNode.replaceChild(e, e), s.test(t) || '<' === t[0] && a.test(t)) {
                  e.innerHTML = String.fromCharCode(65279) + t;
                  var n = e.firstChild;
                  1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1);
                } else e.innerHTML = t;
            }), l = null;
        }
      e.exports = u;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(398),
          o = n(146),
          i = n(399);
      n.d(t, 'Provider', function() {
          return r.a;
        }), n.d(t, 'createProvider', function() {
          return r.b;
        }), n.d(t, 'connectAdvanced', function() {
          return o.a;
        }), n.d(t, 'connect', function() {
          return i.a;
        });
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = n(170),
          s = n(51),
          a = n(180),
          c = function(e) {
              function t(t, n) {
                  e.call(this), this.array = t, this.scheduler = n, n || 1 !== t.length || (this._isScalar = !0, this.value = t[0]);
                }
              return r(t, e), t.create = function(e, n) {
                  return new t(e, n);
                }, t.of = function() {
                  for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                  var r = e[e.length - 1];
                  a.isScheduler(r) ? e.pop() : r = null;
                  var o = e.length;
                  return o > 1 ? new t(e, r) : 1 === o ? new i.ScalarObservable(e[0], r) : new s.EmptyObservable(r);
                }, t.dispatch = function(e) {
                  var t = e.array,
                      n = e.index,
                      r = e.count,
                      o = e.subscriber;
                  if (n >= r) return void o.complete();
                  o.next(t[n]), o.closed || (e.index = n + 1, this.schedule(e));
                }, t.prototype._subscribe = function(e) {
                  var n = this.array,
                      r = n.length,
                      o = this.scheduler;
                  if (o) return o.schedule(t.dispatch, 0, {
                      array: n,
                      index: 0,
                      count: r,
                      subscriber: e,
                    });
                  for (var i = 0; i < r && !e.closed; i++) e.next(n[i]);
                  e.complete();
                }, t;
            }(o.Observable);
      t.ArrayObservable = c;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = function(e) {
              function t(t) {
                  e.call(this), this.scheduler = t;
                }
              return r(t, e), t.create = function(e) {
                  return new t(e);
                }, t.dispatch = function(e) {
                  e.subscriber.complete();
                }, t.prototype._subscribe = function(e) {
                  var n = this.scheduler;
                  if (n) return n.schedule(t.dispatch, 0, {
                      subscriber: e,
                    });
                  e.complete();
                }, t;
            }(o.Observable);
      t.EmptyObservable = i;
    }, function(e, t, n) {
      'use strict';
      t.isArray = Array.isArray || function(e) {
          return e && 'number' == typeof e.length;
        };
    }, function(e, t) {
      var n;
      n = function() {
          return this;
        }();
      try {
          n = n || Function('return this')() || (0, eval)('this');
        } catch (e) {
          'object' == typeof window && (n = window);
        }
      e.exports = n;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(16),
          s = /\^application\/vnd\.microsoft\.card\./i;
      t.queryParams = function(e) {
          return e.substr(1).split('&').reduce(function(e, t) {
              var n = t.split('=');
              return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), e;
            }, {});
        };
      var a = function(e) {
            return Object.keys(e).map(function(t) {
                  return encodeURIComponent(t) + '=' + encodeURIComponent(e[t].toString());
                }).join('&');
          },
          c = function(e) {
              return o.createElement('iframe', {
                  type: 'text/html',
                  src: 'https://youtube.com/embed/' + e.embedId + '?' + a({
                      modestbranding: '1',
                      loop: e.loop ? '1' : '0',
                      autoplay: e.autoPlay ? '1' : '0',
                    }),
                });
            },
          u = function(e) {
              return o.createElement('iframe', {
                  type: 'text/html',
                  src: 'https://player.vimeo.com/video/' + e.embedId + '?' + a({
                      title: '0',
                      byline: '0',
                      portrait: '0',
                      badge: '0',
                      autoplay: e.autoPlay ? '1' : '0',
                      loop: e.loop ? '1' : '0',
                    }),
                });
            },
          l = function(e) {
              var n = document.createElement('a');
              n.href = e.src;
              var i = t.queryParams(n.search),
                  s = n.pathname.substr(1).split('/');
              switch (n.hostname) {
                case 'youtube.com':
                case 'youtu.be':
                case 'www.youtube.com':
                case 'www.youtu.be':
                  return o.createElement(c, r.__assign({
                          embedId: 'youtube.com' === n.hostname || 'www.youtube.com' === n.hostname ? i.v : s[s.length - 1],
                        }, e));
                case 'www.vimeo.com':
                case 'vimeo.com':
                  return o.createElement(u, r.__assign({
                          embedId: s[s.length - 1],
                        }, e));
                default:
                  return o.createElement('video', r.__assign({
                          controls: !0,
                        }, e));
                }
            },
          p = function(e) {
              switch (e.type) {
                case 'video':
                  return o.createElement(l, r.__assign({}, e));
                case 'audio':
                  return o.createElement('audio', r.__assign({
                          controls: !0,
                        }, e));
                default:
                  return o.createElement('img', r.__assign({}, e));
                }
            },
          f = function(e) {
              return s.test(e.contentType) ? o.createElement('span', null, e.format.strings.unknownCard.replace('%1', e.contentType)) : e.contentUrl ? o.createElement('span', null, o.createElement('a', {
                  href: e.contentUrl,
                  title: e.contentUrl,
                  target: '_blank',
                }, e.name || e.format.strings.unknownFile.replace('%1', e.contentType))) : o.createElement('span', null, e.format.strings.unknownFile.replace('%1', e.contentType));
            },
          h = function(e) {
              return 'gif' == e.slice(2 + (e.lastIndexOf('.') - 1 >>> 0)).toLowerCase() ? 'image' : 'video';
            },
          d = function(e) {
              return i.renderIfNonempty(e, function(e) {
                  return o.createElement('h1', null, e);
                });
            },
          v = function(e) {
              return i.renderIfNonempty(e, function(e) {
                  return o.createElement('h2', null, e);
                });
            },
          m = function(e) {
              return i.renderIfNonempty(e, function(e) {
                  return o.createElement('p', null, e);
                });
            };
      t.AttachmentView = function(e) {
          if (e.attachment) {
              var t = e.attachment,
                  n = function(t) {
                      return t && function(n) {
                          e.onCardAction(t.type, t.value), n.stopPropagation();
                        };
                    },
                  r = function(e) {
                      return e && o.createElement('ul', {
                          className: 'wc-card-buttons',
                        }, e.map(function(e, t) {
                          return o.createElement('li', {
                              key: t,
                            }, o.createElement('button', {
                              onClick: n(e),
                            }, e.title));
                        }));
                    },
                  s = function(t) {
                      return t && t.length > 0 && o.createElement(p, {
                          src: t[0].url,
                          onLoad: e.onImageLoad,
                          onClick: n(t[0].tap),
                        });
                    };
              switch (t.contentType) {
                case 'application/vnd.microsoft.card.hero':
                  return t.content ? o.createElement('div', {
                          className: 'wc-card hero',
                          onClick: n(t.content.tap),
                        }, s(t.content.images), d(t.content.title), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.thumbnail':
                  return t.content ? o.createElement('div', {
                          className: 'wc-card thumbnail',
                          onClick: n(t.content.tap),
                        }, d(t.content.title), s(t.content.images), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.video':
                  return t.content && t.content.media && 0 !== t.content.media.length ? o.createElement('div', {
                          className: 'wc-card video',
                        }, o.createElement(p, {
                          type: 'video',
                          src: t.content.media[0].url,
                          onLoad: e.onImageLoad,
                          poster: t.content.image && t.content.image.url,
                          autoPlay: t.content.autostart,
                          loop: t.content.autoloop,
                        }), d(t.content.title), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.animation':
                  return t.content && t.content.media && 0 !== t.content.media.length ? o.createElement('div', {
                          className: 'wc-card animation',
                        }, o.createElement(p, {
                          type: h(t.content.media[0].url),
                          src: t.content.media[0].url,
                          onLoad: e.onImageLoad,
                          poster: t.content.image && t.content.image.url,
                          autoPlay: t.content.autostart,
                          loop: t.content.autoloop,
                        }), d(t.content.title), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.audio':
                  return t.content && t.content.media && 0 !== t.content.media.length ? o.createElement('div', {
                          className: 'wc-card audio',
                        }, o.createElement(p, {
                          type: 'audio',
                          src: t.content.media[0].url,
                          autoPlay: t.content.autostart,
                          loop: t.content.autoloop,
                        }), d(t.content.title), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.signin':
                  return t.content ? o.createElement('div', {
                          className: 'wc-card signin',
                        }, m(t.content.text), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.receipt':
                  return t.content ? o.createElement('div', {
                          className: 'wc-card receipt',
                          onClick: n(t.content.tap),
                        }, o.createElement('table', null, o.createElement('thead', null, o.createElement('tr', null, o.createElement('th', {
                          colSpan: 2,
                        }, t.content.title)), t.content.facts && t.content.facts.map(function(e, t) {
                          return o.createElement('tr', {
                              key: 'fact' + t,
                            }, o.createElement('th', null, e.key), o.createElement('th', null, e.value));
                        })), o.createElement('tbody', null, t.content.items && t.content.items.map(function(t, r) {
                          return o.createElement('tr', {
                              key: 'item' + r,
                              onClick: n(t.tap),
                            }, o.createElement('td', null, t.image && o.createElement(p, {
                              src: t.image.url,
                              onLoad: e.onImageLoad,
                            }), i.renderIfNonempty(t.title, function(e) {
                              return o.createElement('div', {
                                  className: 'title',
                                }, t.title);
                            }), i.renderIfNonempty(t.subtitle, function(e) {
                              return o.createElement('div', {
                                  className: 'subtitle',
                                }, t.subtitle);
                            })), o.createElement('td', null, t.price));
                        })), o.createElement('tfoot', null, i.renderIfNonempty(t.content.tax, function(n) {
                          return o.createElement('tr', null, o.createElement('td', null, e.format.strings.receiptTax), o.createElement('td', null, t.content.tax));
                        }), i.renderIfNonempty(t.content.total, function(n) {
                          return o.createElement('tr', {
                              className: 'total',
                            }, o.createElement('td', null, e.format.strings.receiptTotal), o.createElement('td', null, t.content.total));
                        }))), r(t.content.buttons)) : null;
                case 'application/vnd.microsoft.card.flex':
                  return t.content ? o.createElement('div', {
                          className: 'wc-card flex',
                        }, s(t.content.images), d(t.content.title), v(t.content.subtitle), m(t.content.text), r(t.content.buttons)) : null;
                case 'image/png':
                case 'image/jpg':
                case 'image/jpeg':
                case 'image/gif':
                  return o.createElement(p, {
                          src: t.contentUrl,
                          onLoad: e.onImageLoad,
                        });
                case 'audio/mpeg':
                case 'audio/mp4':
                  return o.createElement(p, {
                          type: 'audio',
                          src: t.contentUrl,
                        });
                case 'video/mp4':
                  return o.createElement(p, {
                          type: 'video',
                          src: t.contentUrl,
                          onLoad: e.onImageLoad,
                        });
                default:
                  return o.createElement(f, {
                          format: e.format,
                          contentType: t.contentType,
                          contentUrl: t.contentUrl,
                          name: t.name,
                        });
                }
            }
        };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e() {}
          return e.setSpeechSynthesizer = function(t) {
              e.instance = t;
            }, e.speak = function(t, n, r, o) {
              void 0 === r && (r = null), void 0 === o && (o = null), null != e.instance && e.instance.speak(t, n, r, o);
            }, e.stopSpeaking = function() {
              null != e.instance && e.instance.stopSpeaking();
            }, e;
        }();
      r.instance = null, t.SpeechSynthesizer = r;
      ! function(e) {
          var t = function() {
              function e() {
                  this.lastOperation = null, this.audioElement = null, this.speakRequests = [];
                }
              return e.prototype.speak = function(e, t, r, o) {
                  var i = this;
                  if (void 0 === r && (r = null), void 0 === o && (o = null), 'SpeechSynthesisUtterance' in window && e) {
                      if (null === this.audioElement) {
                          var s = document.createElement('audio');
                          s.id = 'player', s.autoplay = !0, this.audioElement = s;
                        }
                      var a = new Array;
                      if ('<' === e[0]) {
                          0 != e.indexOf('<speak') && (e = '<speak>\n' + e + '\n</speak>\n');
                          var c = new DOMParser,
                              u = c.parseFromString(e, 'text/xml'),
                              l = u.documentElement.childNodes;
                          this.processNodes(l, a);
                        } else a.push(e);
                      var p = function() {
                            null !== o && o(), i.speakRequests.length && (i.speakRequests[0].completed(), i.speakRequests.splice(0, 1)), i.speakRequests.length && i.playNextTTS(i.speakRequests[0], 0);
                          },
                          f = new n(a, t, function(e) {
                              i.lastOperation = e;
                            }, r, p);
                      0 === this.speakRequests.length ? (this.speakRequests = [f], this.playNextTTS(this.speakRequests[0], 0)) : this.speakRequests.push(f);
                    }
                }, e.prototype.stopSpeaking = function() {
                  if ('SpeechSynthesisUtterance' in window != !1 && this.speakRequests.length) {
                      this.audioElement && this.audioElement.pause(), this.speakRequests.forEach(function(e) {
                          e.abandon();
                        }), this.speakRequests = [];
                      var e = window.speechSynthesis;
                      (e.speaking || e.pending) && (this.lastOperation && (this.lastOperation.onend = null), e.cancel());
                    }
                }, e.prototype.playNextTTS = function(e, t) {
                  var n = this,
                      r = function() {
                          n.playNextTTS(e, t + 1);
                        };
                  if (t < e.speakChunks.length) {
                      var o = e.speakChunks[t];
                      if ('number' == typeof o) setTimeout(r, o);
                      else if (0 === o.indexOf('http')) {
                          var i = this.audioElement;
                          i.src = o, i.onended = r, i.onerror = r, i.play();
                        } else {
                          var s = new SpeechSynthesisUtterance;
                          s.text = o, s.lang = e.lang, s.onstart = 0 === t ? e.onSpeakingStarted : null, s.onend = r, s.onerror = r, e.onSpeakQueued && e.onSpeakQueued(s), window.speechSynthesis.speak(s);
                        }
                    } else e.onSpeakingFinished && e.onSpeakingFinished();
                }, e.prototype.processNodes = function(e, t) {
                  for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      switch (r.nodeName) {
                        case 'p':
                          this.processNodes(r.childNodes, t), t.push(250);
                          break;
                        case 'break':
                          if (r.attributes.getNamedItem('strength')) {
                                  var o = r.attributes.getNamedItem('strength').nodeValue;
                                  'weak' === o || ('medium' === o ? t.push(50) : 'strong' === o ? t.push(100) : 'x-strong' === o && t.push(250));
                                } else r.attributes.getNamedItem('time') && t.push(JSON.parse(r.attributes.getNamedItem('time').value));
                          break;
                        case 'audio':
                          r.attributes.getNamedItem('src') && t.push(r.attributes.getNamedItem('src').value);
                          break;
                        case 'say-as':
                        case 'prosody':
                        case 'emphasis':
                        case 'w':
                        case 'phoneme':
                        case 'voice':
                          this.processNodes(r.childNodes, t);
                          break;
                        default:
                          t.push(r.nodeValue);
                        }
                    }
                }, e;
            }();
          e.BrowserSpeechSynthesizer = t;
          var n = function() {
              function e(e, t, n, r, o) {
                  void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = null), this._onSpeakQueued = null, this._onSpeakingStarted = null, this._onSpeakingFinished = null, this._speakChunks = [], this._lang = null, this._onSpeakQueued = n, this._onSpeakingStarted = r, this._onSpeakingFinished = o, this._speakChunks = e, this._lang = t;
                }
              return e.prototype.abandon = function() {
                  this._speakChunks = [];
                }, e.prototype.completed = function() {
                  this._speakChunks = [];
                }, Object.defineProperty(e.prototype, 'onSpeakQueued', {
                  get: function() {
                      return this._onSpeakQueued;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'onSpeakingStarted', {
                  get: function() {
                      return this._onSpeakingStarted;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'onSpeakingFinished', {
                  get: function() {
                      return this._onSpeakingFinished;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'speakChunks', {
                  get: function() {
                      return this._speakChunks;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'lang', {
                  get: function() {
                      return this._lang;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
        }(t.SpeechSynthesis || (t.SpeechSynthesis = {}));
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__rest || function(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
              for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          return n;
        };
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var o = n(426),
          i = n(0);
      n(164), n(437), n(438), n(165), n(166), n(167), n(168), n(169), n(440), n(441), n(442), n(431), n(162), n(432), n(434), n(163), n(436);
      var s;
      ! function(e) {
          e[e.Uninitialized = 0] = 'Uninitialized', e[e.Connecting = 1] = 'Connecting', e[e.Online = 2] = 'Online', e[e.ExpiredToken = 3] = 'ExpiredToken', e[e.FailedToConnect = 4] = 'FailedToConnect', e[e.Ended = 5] = 'Ended';
        }(s = t.ConnectionStatus || (t.ConnectionStatus = {}));
      var a = new Error('expired token'),
          c = new Error('conversation ended'),
          u = new Error('failed to connect'),
          l = {
              log: function(e) {
                  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                  'undefined' != typeof window && window.botchatDebug && e && console.log.apply(console, [e].concat(t));
                },
            },
          p = function() {
              function e(e) {
                  this.connectionStatus$ = new o.BehaviorSubject(s.Uninitialized), this.domain = 'https://directline.botframework.com/v3/directline', this.watermark = '', this.pollingInterval = 1e3, this.secret = e.secret, this.token = e.secret || e.token, this.webSocket = (void 0 === e.webSocket || e.webSocket) && 'undefined' != typeof WebSocket && void 0 !== WebSocket, e.domain && (this.domain = e.domain), e.conversationId && (this.conversationId = e.conversationId), e.watermark && (this.webSocket ? console.warn('Watermark was ignored: it is not supported using websockets at the moment') : this.watermark = e.watermark), e.streamUrl && (e.token && e.conversationId ? this.streamUrl = e.streamUrl : console.warn('streamUrl was ignored: you need to provide a token and a conversationid')), void 0 !== e.pollingInterval && (this.pollingInterval = e.pollingInterval), this.activity$ = (this.webSocket ? this.webSocketActivity$() : this.pollingGetActivity$()).share();
                }
              return e.prototype.checkConnection = function(e) {
                  var t = this;
                  void 0 === e && (e = !1);
                  var n = this.connectionStatus$.flatMap(function(e) {
                      return e === s.Uninitialized ? (t.connectionStatus$.next(s.Connecting), t.token && t.streamUrl ? (t.connectionStatus$.next(s.Online), i.Observable.of(e)) : t.startConversation().do(function(e) {
                          t.conversationId = e.conversationId, t.token = t.secret || e.token, t.streamUrl = e.streamUrl, t.referenceGrammarId = e.referenceGrammarId, t.secret || t.refreshTokenLoop(), t.connectionStatus$.next(s.Online);
                        }, function(e) {
                          t.connectionStatus$.next(s.FailedToConnect);
                        }).map(function(t) {
                          return e;
                        })) : i.Observable.of(e);
                    }).filter(function(e) {
                      return e != s.Uninitialized && e != s.Connecting;
                    }).flatMap(function(e) {
                      switch (e) {
                        case s.Ended:
                          return i.Observable.throw(c);
                        case s.FailedToConnect:
                          return i.Observable.throw(u);
                        case s.ExpiredToken:
                          return i.Observable.throw(a);
                        default:
                          return i.Observable.of(null);
                        }
                    });
                  return e ? n.take(1) : n;
                }, e.prototype.expiredToken = function() {
                  var e = this.connectionStatus$.getValue();
                  e != s.Ended && e != s.FailedToConnect && this.connectionStatus$.next(s.ExpiredToken);
                }, e.prototype.startConversation = function() {
                  var e = this.conversationId ? this.domain + '/conversations/' + this.conversationId + '?watermark=' + this.watermark : this.domain + '/conversations',
                      t = this.conversationId ? 'GET' : 'POST';
                  return i.Observable.ajax({
                      method: t,
                      url: e,
                      timeout: 2e4,
                      headers: {
                          Accept: 'application/json',
                          Authorization: 'Bearer ' + this.token,
                        },
                    }).map(function(e) {
                      return e.response;
                    }).retryWhen(function(e) {
                      return e.mergeMap(function(e) {
                          return e.status >= 400 && e.status < 600 ? i.Observable.throw(e) : i.Observable.of(e);
                        }).delay(2e4).take(45);
                    });
                }, e.prototype.refreshTokenLoop = function() {
                  var e = this;
                  this.tokenRefreshSubscription = i.Observable.interval(9e5).flatMap(function(t) {
                      return e.refreshToken();
                    }).subscribe(function(t) {
                      l.log('refreshing token', t, 'at', new Date), e.token = t;
                    });
                }, e.prototype.refreshToken = function() {
                  var e = this;
                  return this.checkConnection(!0).flatMap(function(t) {
                      return i.Observable.ajax({
                          method: 'POST',
                          url: e.domain + '/tokens/refresh',
                          timeout: 2e4,
                          headers: {
                              Authorization: 'Bearer ' + e.token,
                            },
                        }).map(function(e) {
                          return e.response.token;
                        }).retryWhen(function(t) {
                          return t.mergeMap(function(t) {
                              return 403 === t.status ? (e.expiredToken(), i.Observable.throw(t)) : i.Observable.of(t);
                            }).delay(2e4).take(45);
                        });
                    });
                }, e.prototype.reconnect = function(e) {
                  this.token = e.token, this.streamUrl = e.streamUrl, this.connectionStatus$.getValue() === s.ExpiredToken && this.connectionStatus$.next(s.Online);
                }, e.prototype.end = function() {
                  this.tokenRefreshSubscription && this.tokenRefreshSubscription.unsubscribe(), this.connectionStatus$.next(s.Ended);
                }, e.prototype.postActivity = function(e) {
                  var t = this;
                  return 'message' === e.type && e.attachments && e.attachments.length > 0 ? this.postMessageWithAttachments(e) : (l.log('postActivity', e), this.checkConnection(!0).flatMap(function(n) {
                      return i.Observable.ajax({
                          method: 'POST',
                          url: t.domain + '/conversations/' + t.conversationId + '/activities',
                          body: e,
                          timeout: 2e4,
                          headers: {
                              'Content-Type': 'application/json',
                              Authorization: 'Bearer ' + t.token,
                            },
                        }).map(function(e) {
                          return e.response.id;
                        }).catch(function(e) {
                          return t.catchPostError(e);
                        });
                    }).catch(function(e) {
                      return t.catchExpiredToken(e);
                    }));
                }, e.prototype.postMessageWithAttachments = function(e) {
                  var t, n = this,
                      o = e.attachments,
                      s = r(e, ['attachments']);
                  return this.checkConnection(!0).flatMap(function(e) {
                      return t = new FormData, t.append('activity', new Blob([JSON.stringify(s)], {
                          type: 'application/vnd.microsoft.activity',
                        })), i.Observable.from(o || []).flatMap(function(e) {
                          return i.Observable.ajax({
                              method: 'GET',
                              url: e.contentUrl,
                              responseType: 'arraybuffer',
                            }).do(function(n) {
                              return t.append('file', new Blob([n.response], {
                                  type: e.contentType,
                                }), e.name);
                            });
                        }).count();
                    }).flatMap(function(e) {
                      return i.Observable.ajax({
                          method: 'POST',
                          url: n.domain + '/conversations/' + n.conversationId + '/upload?userId=' + s.from.id,
                          body: t,
                          timeout: 2e4,
                          headers: {
                              Authorization: 'Bearer ' + n.token,
                            },
                        }).map(function(e) {
                          return e.response.id;
                        }).catch(function(e) {
                          return n.catchPostError(e);
                        });
                    }).catch(function(e) {
                      return n.catchPostError(e);
                    });
                }, e.prototype.catchPostError = function(e) {
                  if (403 === e.status) this.expiredToken();
                  else if (e.status >= 400 && e.status < 500) return i.Observable.throw(e);
                  return i.Observable.of('retry');
                }, e.prototype.catchExpiredToken = function(e) {
                  return e === a ? i.Observable.of('retry') : i.Observable.throw(e);
                }, e.prototype.pollingGetActivity$ = function() {
                  var e = this;
                  return i.Observable.interval(this.pollingInterval).combineLatest(this.checkConnection()).flatMap(function(t) {
                      return i.Observable.ajax({
                          method: 'GET',
                          url: e.domain + '/conversations/' + e.conversationId + '/activities?watermark=' + e.watermark,
                          timeout: 2e4,
                          headers: {
                              Accept: 'application/json',
                              Authorization: 'Bearer ' + e.token,
                            },
                        }).catch(function(t) {
                          return 403 === t.status && e.expiredToken(), i.Observable.empty();
                        }).map(function(e) {
                          return e.response;
                        }).flatMap(function(t) {
                          return e.observableFromActivityGroup(t);
                        });
                    }).catch(function(e) {
                      return i.Observable.empty();
                    });
                }, e.prototype.observableFromActivityGroup = function(e) {
                  return e.watermark && (this.watermark = e.watermark), i.Observable.from(e.activities);
                }, e.prototype.webSocketActivity$ = function() {
                  var e = this;
                  return this.checkConnection().flatMap(function(t) {
                      return e.observableWebSocket().retryWhen(function(t) {
                          return t.mergeMap(function(t) {
                              return e.reconnectToConversation();
                            });
                        });
                    }).flatMap(function(t) {
                      return e.observableFromActivityGroup(t);
                    });
                }, e.prototype.observableWebSocket = function() {
                  var e = this;
                  return i.Observable.create(function(t) {
                      l.log('creating WebSocket', e.streamUrl);
                      var n, r = new WebSocket(e.streamUrl);
                      return r.onopen = function(e) {
                          l.log('WebSocket open', e), n = i.Observable.interval(2e4).subscribe(function(e) {
                                  return r.send(null);
                                });
                        }, r.onclose = function(e) {
                              l.log('WebSocket close', e), n && n.unsubscribe(), t.error(e);
                            }, r.onmessage = function(e) {
                              return e.data && t.next(JSON.parse(e.data));
                            },
                            function() {
                              0 !== r.readyState && 1 !== r.readyState || r.close();
                            };
                    });
                }, e.prototype.reconnectToConversation = function() {
                  var e = this;
                  return this.checkConnection(!0).flatMap(function(t) {
                      return i.Observable.ajax({
                          method: 'GET',
                          url: e.domain + '/conversations/' + e.conversationId + '?watermark=' + e.watermark,
                          timeout: 2e4,
                          headers: {
                              Accept: 'application/json',
                              Authorization: 'Bearer ' + e.token,
                            },
                        }).do(function(t) {
                          e.secret || (e.token = t.response.token), e.streamUrl = t.response.streamUrl;
                        }).map(function(e) {
                          return null;
                        }).retryWhen(function(t) {
                          return t.mergeMap(function(t) {
                              return 403 === t.status && e.expiredToken(), i.Observable.of(t);
                            }).delay(2e4).take(45);
                        });
                    });
                }, e;
            }();
      t.DirectLine = p;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(24);
      ! function(e) {
          e[e.Debug = 0] = 'Debug', e[e.Info = 1] = 'Info', e[e.Warning = 2] = 'Warning', e[e.Error = 3] = 'Error';
        }(t.EventType || (t.EventType = {}));
      var o = function() {
          function e(e) {
              this.eventId = r.CreateNoDashGuid(), this.eventTime = (new Date).toISOString(), this.eventType = e, this.metadata = {};
            }
          return Object.defineProperty(e.prototype, 'EventId', {
              get: function() {
                  return this.eventId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'EventTime', {
              get: function() {
                  return this.eventTime;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'EventType', {
              get: function() {
                  return this.eventType;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Metadata', {
              get: function() {
                  return this.metadata;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.PlatformEvent = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), r(n(219)), r(n(220)), r(n(59)), r(n(221)), r(n(60)), r(n(222)), r(n(102)), r(n(225)), r(n(226));
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e(e, t) {
              this.headerName = e, this.token = t;
            }
          return Object.defineProperty(e.prototype, 'HeaderName', {
              get: function() {
                  return this.headerName;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Token', {
              get: function() {
                  return this.token;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.AuthInfo = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(7),
          i = function(e) {
              function t(t, n, r) {
                  void 0 === r && (r = o.EventType.Info);
                  var i = e.call(this, r) || this;
                  return i.eventName = t, i.requestId = n, i;
                }
              return r.__extends(t, e), Object.defineProperty(t.prototype, 'Name', {
                  get: function() {
                      return this.eventName;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(t.prototype, 'RequestId', {
                  get: function() {
                      return this.requestId;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), t;
            }(o.PlatformEvent);
      t.SpeechRecognitionEvent = i;
      var s = function(e) {
          function t(t, n, r) {
              var o = e.call(this, t, n) || this;
              return o.result = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Result', {
              get: function() {
                  return this.result;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.SpeechRecognitionResultEvent = s;
      var a = function(e) {
          function t(t, n, r) {
              var o = e.call(this, 'RecognitionTriggeredEvent', t) || this;
              return o.audioSourceId = n, o.audioNodeId = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioSourceId', {
              get: function() {
                  return this.audioSourceId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.RecognitionTriggeredEvent = a;
      var c = function(e) {
          function t(t, n, r) {
              var o = e.call(this, 'ListeningStartedEvent', t) || this;
              return o.audioSourceId = n, o.audioNodeId = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioSourceId', {
              get: function() {
                  return this.audioSourceId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ListeningStartedEvent = c;
      var u = function(e) {
          function t(t, n, r) {
              var o = e.call(this, 'ConnectingToServiceEvent', t) || this;
              return o.authFetchEventid = n, o.connectionId = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AuthFetchEventid', {
              get: function() {
                  return this.authFetchEventid;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'ConnectionId', {
              get: function() {
                  return this.connectionId;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectingToServiceEvent = u;
      var l = function(e) {
          function t(t, n, r, o, i) {
              var s = e.call(this, 'RecognitionStartedEvent', t) || this;
              return s.audioSourceId = n, s.audioNodeId = r, s.authFetchEventId = o, s.connectionId = i, s;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioSourceId', {
              get: function() {
                  return this.audioSourceId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AuthFetchEventId', {
              get: function() {
                  return this.authFetchEventId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'ConnectionId', {
              get: function() {
                  return this.connectionId;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.RecognitionStartedEvent = l;
      var p = function(e) {
          function t(t, n) {
              return e.call(this, 'SpeechStartDetectedEvent', t, n) || this;
            }
          return r.__extends(t, e), t;
        }(s);
      t.SpeechStartDetectedEvent = p;
      var f = function(e) {
          function t(t, n) {
              return e.call(this, 'SpeechHypothesisEvent', t, n) || this;
            }
          return r.__extends(t, e), t;
        }(s);
      t.SpeechHypothesisEvent = f;
      var h = function(e) {
          function t(t, n) {
              return e.call(this, 'SpeechEndDetectedEvent', t, n) || this;
            }
          return r.__extends(t, e), t;
        }(s);
      t.SpeechEndDetectedEvent = h;
      var d = function(e) {
          function t(t, n) {
              return e.call(this, 'SpeechSimplePhraseEvent', t, n) || this;
            }
          return r.__extends(t, e), t;
        }(s);
      t.SpeechSimplePhraseEvent = d;
      var v = function(e) {
          function t(t, n) {
              return e.call(this, 'SpeechDetailedPhraseEvent', t, n) || this;
            }
          return r.__extends(t, e), t;
        }(s);
      t.SpeechDetailedPhraseEvent = v;
      var m;
      ! function(e) {
          e[e.Success = 0] = 'Success', e[e.AudioSourceError = 1] = 'AudioSourceError', e[e.AudioSourceTimeout = 2] = 'AudioSourceTimeout', e[e.AuthTokenFetchError = 3] = 'AuthTokenFetchError', e[e.AuthTokenFetchTimeout = 4] = 'AuthTokenFetchTimeout', e[e.UnAuthorized = 5] = 'UnAuthorized', e[e.ConnectTimeout = 6] = 'ConnectTimeout', e[e.ConnectError = 7] = 'ConnectError', e[e.ClientRecognitionActivityTimeout = 8] = 'ClientRecognitionActivityTimeout', e[e.UnknownError = 9] = 'UnknownError';
        }(m = t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}));
      var g = function(e) {
          function t(t, n, r, i, s, a, c, u) {
              var l = e.call(this, 'RecognitionEndedEvent', t, c === m.Success ? o.EventType.Info : o.EventType.Error) || this;
              return l.audioSourceId = n, l.audioNodeId = r, l.connectionId = s, l.authFetchEventId = i, l.serviceTag = a, l;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioSourceId', {
              get: function() {
                  return this.audioSourceId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'AuthFetchEventId', {
              get: function() {
                  return this.authFetchEventId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'ConnectionId', {
              get: function() {
                  return this.connectionId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'ServiceTag', {
              get: function() {
                  return this.serviceTag;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'Status', {
              get: function() {
                  return this.status;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'Error', {
              get: function() {
                  return this.error;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.RecognitionEndedEvent = g;
    }, function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
          return n.call(e).slice(8, -1);
        };
    }, function(e, t, n) {
      e.exports = !n(109)(function() {
          return 7 != Object.defineProperty({}, 'a', {
              get: function() {
                  return 7;
                },
            }).a;
        });
    }, function(e, t, n) {
      var r = n(32),
          o = n(106),
          i = n(64),
          s = n(250),
          a = n(107),
          c = function(e, t, n) {
              var u, l, p, f, h = e & c.F,
                  d = e & c.G,
                  v = e & c.S,
                  m = e & c.P,
                  g = e & c.B,
                  y = d ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                  b = d ? o : o[t] || (o[t] = {}),
                  _ = b.prototype || (b.prototype = {});
              d && (n = t);
              for (u in n) l = !h && y && void 0 !== y[u], p = (l ? y : n)[u], f = g && l ? a(p, r) : m && 'function' == typeof p ? a(Function.call, p) : p, y && s(y, u, p, e & c.U), b[u] != p && i(b, u, f), m && _[u] != p && (_[u] = p);
            };
      r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
    }, function(e, t, n) {
      var r = n(248),
          o = n(249);
      e.exports = n(62) ? function(e, t, n) {
          return r.f(e, t, o(1, n));
        } : function(e, t, n) {
          return e[t] = n, e;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t;
        }

      function o(e, t) {
          if (r(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
          var n = Object.keys(e),
              o = Object.keys(t);
          if (n.length !== o.length) return !1;
          for (var s = 0; s < n.length; s++)
              if (!i.call(t, n[s]) || !r(e[n[s]], t[n[s]])) return !1;
          return !0;
        }
      var i = Object.prototype.hasOwnProperty;
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (!n.i(s.a)(e) || n.i(o.a)(e) != a) return !1;
          var t = n.i(i.a)(e);
          if (null === t) return !0;
          var r = p.call(t, 'constructor') && t.constructor;
          return 'function' == typeof r && r instanceof r && l.call(r) == f;
        }
      var o = n(273),
          i = n(275),
          s = n(280),
          a = '[object Object]',
          c = Function.prototype,
          u = Object.prototype,
          l = c.toString,
          p = u.hasOwnProperty,
          f = l.call(Object);
      t.a = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.__rules__ = [], this.__cache__ = null;
        }
      r.prototype.__find__ = function(e) {
          for (var t = 0; t < this.__rules__.length; t++)
              if (this.__rules__[t].name === e) return t;
          return -1;
        }, r.prototype.__compile__ = function() {
          var e = this,
              t = [''];
          e.__rules__.forEach(function(e) {
              e.enabled && e.alt.forEach(function(e) {
                  t.indexOf(e) < 0 && t.push(e);
                });
            }), e.__cache__ = {}, t.forEach(function(t) {
              e.__cache__[t] = [], e.__rules__.forEach(function(n) {
                  n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn));
                });
            });
        }, r.prototype.at = function(e, t, n) {
          var r = this.__find__(e),
              o = n || {};
          if (-1 === r) throw new Error('Parser rule not found: ' + e);
          this.__rules__[r].fn = t, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
        }, r.prototype.before = function(e, t, n, r) {
          var o = this.__find__(e),
              i = r || {};
          if (-1 === o) throw new Error('Parser rule not found: ' + e);
          this.__rules__.splice(o, 0, {
              name: t,
              enabled: !0,
              fn: n,
              alt: i.alt || [],
            }), this.__cache__ = null;
        }, r.prototype.after = function(e, t, n, r) {
          var o = this.__find__(e),
              i = r || {};
          if (-1 === o) throw new Error('Parser rule not found: ' + e);
          this.__rules__.splice(o + 1, 0, {
              name: t,
              enabled: !0,
              fn: n,
              alt: i.alt || [],
            }), this.__cache__ = null;
        }, r.prototype.push = function(e, t, n) {
          var r = n || {};
          this.__rules__.push({
              name: e,
              enabled: !0,
              fn: t,
              alt: r.alt || [],
            }), this.__cache__ = null;
        }, r.prototype.enable = function(e, t) {
          Array.isArray(e) || (e = [e]);
          var n = [];
          return e.forEach(function(e) {
              var r = this.__find__(e);
              if (r < 0) {
                  if (t) return;
                  throw new Error('Rules manager: invalid rule name ' + e);
                }
              this.__rules__[r].enabled = !0, n.push(e);
            }, this), this.__cache__ = null, n;
        }, r.prototype.enableOnly = function(e, t) {
          Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(e) {
              e.enabled = !1;
            }), this.enable(e, t);
        }, r.prototype.disable = function(e, t) {
          Array.isArray(e) || (e = [e]);
          var n = [];
          return e.forEach(function(e) {
              var r = this.__find__(e);
              if (r < 0) {
                  if (t) return;
                  throw new Error('Rules manager: invalid rule name ' + e);
                }
              this.__rules__[r].enabled = !1, n.push(e);
            }, this), this.__cache__ = null, n;
        }, r.prototype.getRules = function(e) {
          return null === this.__cache__ && this.__compile__(), this.__cache__[e] || [];
        }, e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = '', this.markup = '', this.info = '', this.meta = null, this.block = !1, this.hidden = !1;
        }
      r.prototype.attrIndex = function(e) {
          var t, n, r;
          if (!this.attrs) return -1;
          for (t = this.attrs, n = 0, r = t.length; n < r; n++)
              if (t[n][0] === e) return n;
          return -1;
        }, r.prototype.attrPush = function(e) {
          this.attrs ? this.attrs.push(e) : this.attrs = [e];
        }, r.prototype.attrSet = function(e, t) {
          var n = this.attrIndex(e),
              r = [e, t];
          n < 0 ? this.attrPush(r) : this.attrs[n] = r;
        }, r.prototype.attrGet = function(e) {
          var t = this.attrIndex(e),
              n = null;
          return t >= 0 && (n = this.attrs[t][1]), n;
        }, r.prototype.attrJoin = function(e, t) {
          var n = this.attrIndex(e);
          n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + ' ' + t;
        }, e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild;
        }

      function o(e, t, n) {
          l.insertTreeBefore(e, t, n);
        }

      function i(e, t, n) {
          Array.isArray(t) ? a(e, t[0], t[1], n) : v(e, t, n);
        }

      function s(e, t) {
          if (Array.isArray(t)) {
              var n = t[1];
              t = t[0], c(e, t, n), e.removeChild(n);
            }
          e.removeChild(t);
        }

      function a(e, t, n, r) {
          for (var o = t;;) {
              var i = o.nextSibling;
              if (v(e, o, r), o === n) break;
              o = i;
            }
        }

      function c(e, t, n) {
          for (;;) {
              var r = t.nextSibling;
              if (r === n) break;
              e.removeChild(r);
            }
        }

      function u(e, t, n) {
          var r = e.parentNode,
              o = e.nextSibling;
          o === t ? n && v(r, document.createTextNode(n), o) : n ? (d(o, n), c(r, o, t)) : c(r, e, t);
        }
      var l = n(25),
          p = n(340),
          f = (n(6), n(14), n(78)),
          h = n(48),
          d = n(144),
          v = f(function(e, t, n) {
              e.insertBefore(t, n);
            }),
          m = p.dangerouslyReplaceNodeWithMarkup,
          g = {
              dangerouslyReplaceNodeWithMarkup: m,
              replaceDelimitedText: u,
              processUpdates: function(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var a = t[n];
                      switch (a.type) {
                        case 'INSERT_MARKUP':
                          o(e, a.content, r(e, a.afterNode));
                          break;
                        case 'MOVE_EXISTING':
                          i(e, a.fromNode, r(e, a.afterNode));
                          break;
                        case 'SET_MARKUP':
                          h(e, a.content);
                          break;
                        case 'TEXT_CONTENT':
                          d(e, a.content);
                          break;
                        case 'REMOVE_NODE':
                          s(e, a.fromNode);
                        }
                    }
                },
            };
      e.exports = g;
    }, function(e, t, n) {
      'use strict';
      var r = {
          html: 'http://www.w3.org/1999/xhtml',
          mathml: 'http://www.w3.org/1998/Math/MathML',
          svg: 'http://www.w3.org/2000/svg',
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          if (a)
              for (var e in c) {
                  var t = c[e],
                      n = a.indexOf(e);
                  if (n > -1 || s('96', e), !u.plugins[n]) {
                      t.extractEvents || s('97', e), u.plugins[n] = t;
                      var r = t.eventTypes;
                      for (var i in r) o(r[i], t, i) || s('98', i, e);
                    }
                }
        }

      function o(e, t, n) {
          u.eventNameDispatchConfigs.hasOwnProperty(n) && s('99', n), u.eventNameDispatchConfigs[n] = e;
          var r = e.phasedRegistrationNames;
          if (r) {
              for (var o in r)
                  if (r.hasOwnProperty(o)) {
                      var a = r[o];
                      i(a, t, n);
                    }
              return !0;
            }
          return !!e.registrationName && (i(e.registrationName, t, n), !0);
        }

      function i(e, t, n) {
          u.registrationNameModules[e] && s('100', e), u.registrationNameModules[e] = t, u.registrationNameDependencies[e] = t.eventTypes[n].dependencies;
        }
      var s = n(4),
          a = (n(1), null),
          c = {},
          u = {
              plugins: [],
              eventNameDispatchConfigs: {},
              registrationNameModules: {},
              registrationNameDependencies: {},
              possibleRegistrationNames: null,
              injectEventPluginOrder: function(e) {
                  a && s('101'), a = Array.prototype.slice.call(e), r();
                },
              injectEventPluginsByName: function(e) {
                  var t = !1;
                  for (var n in e)
                      if (e.hasOwnProperty(n)) {
                          var o = e[n];
                          c.hasOwnProperty(n) && c[n] === o || (c[n] && s('102', n), c[n] = o, t = !0);
                        }
                  t && r();
                },
              getPluginModuleForEvent: function(e) {
                  var t = e.dispatchConfig;
                  if (t.registrationName) return u.registrationNameModules[t.registrationName] || null;
                  if (void 0 !== t.phasedRegistrationNames) {
                      var n = t.phasedRegistrationNames;
                      for (var r in n)
                          if (n.hasOwnProperty(r)) {
                              var o = u.registrationNameModules[n[r]];
                              if (o) return o;
                            }
                    }
                  return null;
                },
              _resetEventPlugins: function() {
                  a = null;
                  for (var e in c) c.hasOwnProperty(e) && delete c[e];
                  u.plugins.length = 0;
                  var t = u.eventNameDispatchConfigs;
                  for (var n in t) t.hasOwnProperty(n) && delete t[n];
                  var r = u.registrationNameModules;
                  for (var o in r) r.hasOwnProperty(o) && delete r[o];
                },
            };
      e.exports = u;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 'topMouseUp' === e || 'topTouchEnd' === e || 'topTouchCancel' === e;
        }

      function o(e) {
          return 'topMouseMove' === e || 'topTouchMove' === e;
        }

      function i(e) {
          return 'topMouseDown' === e || 'topTouchStart' === e;
        }

      function s(e, t, n, r) {
          var o = e.type || 'unknown-event';
          e.currentTarget = g.getNodeFromInstance(r), t ? v.invokeGuardedCallbackWithCatch(o, n, e) : v.invokeGuardedCallback(o, n, e), e.currentTarget = null;
        }

      function a(e, t) {
          var n = e._dispatchListeners,
              r = e._dispatchInstances;
          if (Array.isArray(n))
              for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) s(e, t, n[o], r[o]);
          else n && s(e, t, n, r);
          e._dispatchListeners = null, e._dispatchInstances = null;
        }

      function c(e) {
          var t = e._dispatchListeners,
              n = e._dispatchInstances;
          if (Array.isArray(t)) {
              for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                  if (t[r](e, n[r])) return n[r];
            } else if (t && t(e, n)) return n;
          return null;
        }

      function u(e) {
          var t = c(e);
          return e._dispatchInstances = null, e._dispatchListeners = null, t;
        }

      function l(e) {
          var t = e._dispatchListeners,
              n = e._dispatchInstances;
          Array.isArray(t) && d('103'), e.currentTarget = t ? g.getNodeFromInstance(n) : null;
          var r = t ? t(e) : null;
          return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, r;
        }

      function p(e) {
          return !!e._dispatchListeners;
        }
      var f, h, d = n(4),
          v = n(76),
          m = (n(1), n(3), {
              injectComponentTree: function(e) {
                  f = e;
                },
              injectTreeTraversal: function(e) {
                  h = e;
                },
            }),
          g = {
              isEndish: r,
              isMoveish: o,
              isStartish: i,
              executeDirectDispatch: l,
              executeDispatchesInOrder: a,
              executeDispatchesInOrderStopAtTrue: u,
              hasDispatches: p,
              getInstanceFromNode: function(e) {
                  return f.getInstanceFromNode(e);
                },
              getNodeFromInstance: function(e) {
                  return f.getNodeFromInstance(e);
                },
              isAncestor: function(e, t) {
                  return h.isAncestor(e, t);
                },
              getLowestCommonAncestor: function(e, t) {
                  return h.getLowestCommonAncestor(e, t);
                },
              getParentInstance: function(e) {
                  return h.getParentInstance(e);
                },
              traverseTwoPhase: function(e, t, n) {
                  return h.traverseTwoPhase(e, t, n);
                },
              traverseEnterLeave: function(e, t, n, r, o) {
                  return h.traverseEnterLeave(e, t, n, r, o);
                },
              injection: m,
            };
      e.exports = g;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = {
              '=': '=0',
              ':': '=2',
            };
          return '$' + ('' + e).replace(/[=:]/g, function(e) {
              return t[e];
            });
        }

      function o(e) {
          var t = /(=0|=2)/g,
              n = {
                  '=0': '=',
                  '=2': ':',
                };
          return ('' + ('.' === e[0] && '$' === e[1] ? e.substring(2) : e.substring(1))).replace(t, function(e) {
              return n[e];
            });
        }
      var i = {
          escape: r,
          unescape: o,
        };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          null != e.checkedLink && null != e.valueLink && a('87');
        }

      function o(e) {
          r(e), (null != e.value || null != e.onChange) && a('88');
        }

      function i(e) {
          r(e), (null != e.checked || null != e.onChange) && a('89');
        }

      function s(e) {
          if (e) {
              var t = e.getName();
              if (t) return ' Check the render method of `' + t + '`.';
            }
          return '';
        }
      var a = n(4),
          c = n(369),
          u = n(122),
          l = n(28),
          p = u(l.isValidElement),
          f = (n(1), n(3), {
              button: !0,
              checkbox: !0,
              image: !0,
              hidden: !0,
              radio: !0,
              reset: !0,
              submit: !0,
            }),
          h = {
              value: function(e, t, n) {
                  return !e[t] || f[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error('You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.');
                },
              checked: function(e, t, n) {
                  return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error('You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.');
                },
              onChange: p.func,
            },
          d = {},
          v = {
              checkPropTypes: function(e, t, n) {
                  for (var r in h) {
                      if (h.hasOwnProperty(r)) var o = h[r](t, r, e, 'prop', null, c);
                      if (o instanceof Error && !(o.message in d)) {
                          d[o.message] = !0;
                          s(n);
                        }
                    }
                },
              getValue: function(e) {
                  return e.valueLink ? (o(e), e.valueLink.value) : e.value;
                },
              getChecked: function(e) {
                  return e.checkedLink ? (i(e), e.checkedLink.value) : e.checked;
                },
              executeOnChange: function(e, t) {
                  return e.valueLink ? (o(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (i(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0;
                },
            };
      e.exports = v;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = (n(1), !1),
          i = {
              replaceNodeWithMarkup: null,
              processChildrenUpdates: null,
              injection: {
                  injectEnvironment: function(e) {
                      o && r('104'), i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, o = !0;
                    },
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          try {
              t(n);
            } catch (e) {
              null === o && (o = e);
            }
        }
      var o = null,
          i = {
              invokeGuardedCallback: r,
              invokeGuardedCallbackWithCatch: r,
              rethrowCaughtError: function() {
                  if (o) {
                      var e = o;
                      throw o = null, e;
                    }
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          c.enqueueUpdate(e);
        }

      function o(e) {
          var t = typeof e;
          if ('object' !== t) return t;
          var n = e.constructor && e.constructor.name || t,
              r = Object.keys(e);
          return r.length > 0 && r.length < 20 ? n + ' (keys: ' + r.join(', ') + ')' : n;
        }

      function i(e, t) {
          var n = a.get(e);
          if (!n) {
              return null;
            }
          return n;
        }
      var s = n(4),
          a = (n(18), n(36)),
          c = (n(14), n(15)),
          u = (n(1), n(3), {
              isMounted: function(e) {
                  var t = a.get(e);
                  return !!t && !!t._renderedComponent;
                },
              enqueueCallback: function(e, t, n) {
                  u.validateCallback(t, n);
                  var o = i(e);
                  if (!o) return null;
                  o._pendingCallbacks ? o._pendingCallbacks.push(t) : o._pendingCallbacks = [t], r(o);
                },
              enqueueCallbackInternal: function(e, t) {
                  e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e);
                },
              enqueueForceUpdate: function(e) {
                  var t = i(e, 'forceUpdate');
                  t && (t._pendingForceUpdate = !0, r(t));
                },
              enqueueReplaceState: function(e, t, n) {
                  var o = i(e, 'replaceState');
                  o && (o._pendingStateQueue = [t], o._pendingReplaceState = !0, void 0 !== n && null !== n && (u.validateCallback(n, 'replaceState'), o._pendingCallbacks ? o._pendingCallbacks.push(n) : o._pendingCallbacks = [n]), r(o));
                },
              enqueueSetState: function(e, t) {
                  var n = i(e, 'setState');
                  if (n) {
                      (n._pendingStateQueue || (n._pendingStateQueue = [])).push(t), r(n);
                    }
                },
              enqueueElementInternal: function(e, t, n) {
                  e._pendingElement = t, e._context = n, r(e);
                },
              validateCallback: function(e, t) {
                  e && 'function' != typeof e && s('122', t, o(e));
                },
            });
      e.exports = u;
    }, function(e, t, n) {
      'use strict';
      var r = function(e) {
          return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function() {
                  return e(t, n, r, o);
                });
            } : e;
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t, n = e.keyCode;
          return 'charCode' in e ? 0 === (t = e.charCode) && 13 === n && (t = 13) : t = n, t >= 32 || 13 === t ? t : 0;
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = this,
              n = t.nativeEvent;
          if (n.getModifierState) return n.getModifierState(e);
          var r = i[e];
          return !!r && !!n[r];
        }

      function o(e) {
          return r;
        }
      var i = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey',
        };
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.target || e.srcElement || window;
          return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t;
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @param {?boolean} capture Check if the capture phase is supported.
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */
      function r(e, t) {
          if (!i.canUseDOM || t && !('addEventListener' in document)) return !1;
          var n = 'on' + e,
              r = n in document;
          if (!r) {
              var s = document.createElement('div');
              s.setAttribute(n, 'return;'), r = 'function' == typeof s[n];
            }
          return !r && o && 'wheel' === e && (r = document.implementation.hasFeature('Events.wheel', '3.0')), r;
        }
      var o, i = n(9);
      i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature('', '')), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = null === e || !1 === e,
              r = null === t || !1 === t;
          if (n || r) return n === r;
          var o = typeof e,
              i = typeof t;
          return 'string' === o || 'number' === o ? 'string' === i || 'number' === i : 'object' === i && e.type === t.type && e.key === t.key;
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = (n(5), n(11)),
          o = (n(3), r);
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          'undefined' != typeof console && 'function' == typeof console.error && console.error(e);
          try {
              throw new Error(e);
            } catch (e) {}
        }
      t.a = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(158),
          o = n(424),
          i = n(423),
          s = n(422),
          a = n(157);
      n(159);
      n.d(t, 'createStore', function() {
          return r.b;
        }), n.d(t, 'combineReducers', function() {
          return o.a;
        }), n.d(t, 'bindActionCreators', function() {
          return i.a;
        }), n.d(t, 'applyMiddleware', function() {
          return s.a;
        }), n.d(t, 'compose', function() {
          return a.a;
        });
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if ('function' != typeof e) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return this.lift(new s(e, t));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10);
      t.map = r;
      var s = function() {
          function e(e, t) {
              this.project = e, this.thisArg = t;
            }
          return e.prototype.call = function(e, t) {
              return t.subscribe(new a(e, this.project, this.thisArg));
            }, e;
        }();
      t.MapOperator = s;
      var a = function(e) {
          function t(t, n, r) {
              e.call(this, t), this.project = n, this.count = 0, this.thisArg = r || this;
            }
          return o(t, e), t.prototype._next = function(e) {
              var t;
              try {
                  t = this.project.call(this.thisArg, e, this.count++);
                } catch (e) {
                  return void this.destination.error(e);
                }
              this.destination.next(t);
            }, t;
        }(i.Subscriber);
    }, function(e, t, n) {
      'use strict';
      var r = n(478),
          o = n(479);
      t.async = new o.AsyncScheduler(r.AsyncAction);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.Symbol;
          if ('function' == typeof t) return t.iterator || (t.iterator = t('iterator polyfill')), t.iterator;
          var n = e.Set;
          if (n && 'function' == typeof(new n)['@@iterator']) return '@@iterator';
          var r = e.Map;
          if (r)
              for (var o = Object.getOwnPropertyNames(r.prototype), i = 0; i < o.length; ++i) {
                  var s = o[i];
                  if ('entries' !== s && 'size' !== s && r.prototype[s] === r.prototype.entries) return s;
                }
          return '@@iterator';
        }
      var o = n(19);
      t.symbolIteratorPonyfill = r, t.iterator = r(o.root), t.$$iterator = t.iterator;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t, n = e.Symbol;
          return 'function' == typeof n ? n.observable ? t = n.observable : (t = n('observable'), n.observable = t) : t = '@@observable', t;
        }
      var o = n(19);
      t.getSymbolObservable = r, t.observable = r(o.root), t.$$observable = t.observable;
    }, function(e, t, n) {
      'use strict';
      var r = n(19),
          o = r.root.Symbol;
      t.rxSubscriber = 'function' == typeof o && 'function' == typeof o.for ? o.for('rxSubscriber') : '@@rxSubscriber', t.$$rxSubscriber = t.rxSubscriber;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 'function' == typeof e;
        }
      t.isFunction = r;
    }, function(e, t) {
      e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e(e, t, n) {
                  var o = this;
                  if (this.Open = function() {
                      return o.connectionState === r.ConnectionState.Disconnected ? r.PromiseHelper.FromError('Cannot open a connection that is in ' + o.connectionState + ' state') : o.connectionEstablishDeferral ? o.connectionEstablishDeferral.Promise() : (o.connectionEstablishDeferral = new r.Deferred, o.connectionState = r.ConnectionState.Connecting, o.websocketClient = new WebSocket(o.uri), o.receivingMessageQueue = new r.Queue, o.disconnectDeferral = new r.Deferred, o.sendMessageQueue = new r.Queue, o.ProcessSendQueue(), o.OnEvent(new r.ConnectionStartEvent(o.connectionId, o.uri)), o.websocketClient.onopen = function(e) {
                              o.connectionState = r.ConnectionState.Connected, o.OnEvent(new r.ConnectionEstablishedEvent(o.connectionId)), o.connectionEstablishDeferral.Resolve(new r.ConnectionOpenResponse(200, ''));
                            }, o.websocketClient.onerror = function(e) {
                              o.connectionState, r.ConnectionState.Connecting;
                            }, o.websocketClient.onclose = function(e) {
                              o.connectionState === r.ConnectionState.Connecting ? (o.connectionState = r.ConnectionState.Disconnected, o.OnEvent(new r.ConnectionEstablishErrorEvent(o.connectionId, e.code, e.reason)), o.connectionEstablishDeferral.Resolve(new r.ConnectionOpenResponse(e.code, e.reason))) : o.OnEvent(new r.ConnectionClosedEvent(o.connectionId, e.code, e.reason)), o.OnClose(e.code, e.reason);
                            }, o.websocketClient.onmessage = function(e) {
                              var t = (new Date).toISOString();
                              if (o.connectionState === r.ConnectionState.Connected) {
                                  var n = new r.Deferred;
                                  if (o.receivingMessageQueue.EnqueueFromPromise(n.Promise()), e.data instanceof Blob) {
                                      var i = new FileReader;
                                      i.onload = function(e) {
                                          var s = new r.RawWebsocketMessage(r.MessageType.Binary, i.result);
                                          o.messageFormatter.ToConnectionMessage(s).On(function(e) {
                                              o.OnEvent(new r.ConnectionMessageReceivedEvent(o.connectionId, t, e)), n.Resolve(e);
                                            }, function(e) {
                                              n.Reject('Invalid binary message format. Error: ' + e);
                                            });
                                        }, i.onerror = function(e) {
                                          n.Reject('Binary message parse error');
                                        }, i.readAsArrayBuffer(e.data);
                                    } else {
                                      var s = new r.RawWebsocketMessage(r.MessageType.Text, e.data);
                                      o.messageFormatter.ToConnectionMessage(s).On(function(e) {
                                          o.OnEvent(new r.ConnectionMessageReceivedEvent(o.connectionId, t, e)), n.Resolve(e);
                                        }, function(e) {
                                          n.Reject('Invalid text message format. Error: ' + e);
                                        });
                                    }
                                }
                            }, o.connectionEstablishDeferral.Promise());
                    }, this.Send = function(e) {
                          if (o.connectionState !== r.ConnectionState.Connected) return r.PromiseHelper.FromError('Cannot send on connection that is in ' + o.connectionState + ' state');
                          var t = new r.Deferred,
                              n = new r.Deferred;
                          return o.sendMessageQueue.EnqueueFromPromise(n.Promise()), o.messageFormatter.FromConnectionMessage(e).On(function(r) {
                              n.Resolve({
                                  Message: e,
                                  RawWebsocketMessage: r,
                                  SendStatusDeferral: t,
                                });
                            }, function(e) {
                              n.Reject('Error formatting the message. ' + e);
                            }), t.Promise();
                        }, this.Read = function() {
                          return o.connectionState !== r.ConnectionState.Connected ? r.PromiseHelper.FromError('Cannot read on connection that is in ' + o.connectionState + ' state') : o.receivingMessageQueue.Dequeue();
                        }, this.Close = function(e) {
                          if (!o.websocketClient) {
                              var t = new r.Deferred;
                              return t.Resolve(!0), t.Promise();
                            }
                          return o.connectionState !== r.ConnectionState.Connected && o.websocketClient.close(1e3, e || 'Normal closure by client'), o.disconnectDeferral.Promise();
                        }, this.SendRawMessage = function(e) {
                          try {
                              return o.OnEvent(new r.ConnectionMessageSentEvent(o.connectionId, (new Date).toISOString(), e.Message)), o.websocketClient.send(e.RawWebsocketMessage.Payload), r.PromiseHelper.FromResult(!0);
                            } catch (e) {
                              return r.PromiseHelper.FromError('websocket send error: ' + e);
                            }
                        }, this.OnClose = function(e, t) {
                          var n = 'Connection closed. ' + e + ': ' + t;
                          o.connectionState = r.ConnectionState.Disconnected, o.disconnectDeferral.Resolve(!0), o.receivingMessageQueue.Dispose(t), o.receivingMessageQueue.DrainAndDispose(function(e) {}, n), o.sendMessageQueue.DrainAndDispose(function(e) {
                              e.SendStatusDeferral.Reject(n);
                            }, n);
                        }, this.ProcessSendQueue = function() {
                          o.sendMessageQueue.Dequeue().On(function(e) {
                              o.SendRawMessage(e).On(function(t) {
                                  e.SendStatusDeferral.Resolve(t), o.ProcessSendQueue();
                                }, function(t) {
                                  e.SendStatusDeferral.Reject(t), o.ProcessSendQueue();
                                });
                            }, function(e) {});
                        }, this.OnEvent = function(e) {
                          o.connectionEvents.OnEvent(e), r.Events.Instance.OnEvent(e);
                        }, !e) throw new r.ArgumentNullError('uri');
                  if (!n) throw new r.ArgumentNullError('messageFormatter');
                  this.connectionEvents = new r.EventSource, this.connectionId = t, this.messageFormatter = n, this.connectionState = r.ConnectionState.None, this.uri = e;
                }
              return Object.defineProperty(e.prototype, 'State', {
                  get: function() {
                      return this.connectionState;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'Events', {
                  get: function() {
                      return this.connectionEvents;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.WebsocketMessageAdapter = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r, o = n(13),
          i = n(24);
      ! function(e) {
          e[e.Text = 0] = 'Text', e[e.Binary = 1] = 'Binary';
        }(r = t.MessageType || (t.MessageType = {}));
      var s = function() {
          function e(e, t, n, s) {
              if (this.body = null, e === r.Text && t && 'string' != typeof t) throw new o.InvalidOperationError('Payload must be a string');
              if (e === r.Binary && t && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError('Payload must be ArrayBuffer');
              this.messageType = e, this.body = t, this.headers = n || {}, this.id = s || i.CreateNoDashGuid();
            }
          return Object.defineProperty(e.prototype, 'MessageType', {
              get: function() {
                  return this.messageType;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Headers', {
              get: function() {
                  return this.headers;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Body', {
              get: function() {
                  return this.body;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'TextBody', {
              get: function() {
                  if (this.messageType === r.Binary) throw new o.InvalidOperationError('Not supported for binary message');
                  return this.body;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'BinaryBody', {
              get: function() {
                  if (this.messageType === r.Text) throw new o.InvalidOperationError('Not supported for text message');
                  return this.body;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Id', {
              get: function() {
                  return this.id;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.ConnectionMessage = s;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = n(24),
          i = function() {
              function e(e) {
                  var t = this;
                  this.eventListeners = {}, this.isDisposed = !1, this.OnEvent = function(e) {
                      if (t.IsDisposed()) throw new r.ObjectDisposedError('EventSource');
                      if (t.Metadata)
                          for (var n in t.Metadata) n && e.Metadata && (e.Metadata[n] || (e.Metadata[n] = t.Metadata[n]));
                      for (var o in t.eventListeners) o && t.eventListeners[o] && t.eventListeners[o](e);
                    }, this.Attach = function(e) {
                      var n = o.CreateNoDashGuid();
                      return t.eventListeners[n] = e, {
                          Detach: function() {
                              delete t.eventListeners[n];
                            },
                        };
                    }, this.AttachListener = function(e) {
                      return t.Attach(e.OnEvent);
                    }, this.IsDisposed = function() {
                      return t.isDisposed;
                    }, this.Dispose = function() {
                      t.eventListeners = null, t.isDisposed = !0;
                    }, this.metadata = e;
                }
              return Object.defineProperty(e.prototype, 'Metadata', {
                  get: function() {
                      return this.metadata;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.EventSource = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = function() {
              function e() {
                  var e = this;
                  this.store = {}, this.Get = function(t) {
                      if (!t) throw new r.ArgumentNullError('key');
                      return e.store[t];
                    }, this.GetOrAdd = function(t, n) {
                      if (!t) throw new r.ArgumentNullError('key');
                      return void 0 === e.store[t] && (e.store[t] = n), e.store[t];
                    }, this.Set = function(t, n) {
                      if (!t) throw new r.ArgumentNullError('key');
                      e.store[t] = n;
                    }, this.Remove = function(t) {
                      if (!t) throw new r.ArgumentNullError('key');
                      void 0 !== e.store[t] && delete e.store[t];
                    };
                }
              return e;
            }();
      t.InMemoryStorage = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = function() {
              function e(t) {
                  var n = this;
                  if (this.subscriptionIdCounter = 0, this.addSubscriptions = {}, this.removeSubscriptions = {}, this.disposedSubscriptions = {}, this.disposeReason = null, this.Get = function(e) {
                      return n.ThrowIfDisposed(), n.list[e];
                    }, this.First = function() {
                          return n.Get(0);
                        }, this.Last = function() {
                          return n.Get(n.Length() - 1);
                        }, this.Add = function(e) {
                          n.ThrowIfDisposed(), n.InsertAt(n.list.length, e);
                        }, this.InsertAt = function(e, t) {
                          n.ThrowIfDisposed(), 0 === e ? n.list.unshift(t) : e === n.list.length ? n.list.push(t) : n.list.splice(e, 0, t), n.TriggerSubscriptions(n.addSubscriptions);
                        }, this.RemoveFirst = function() {
                          return n.ThrowIfDisposed(), n.RemoveAt(0);
                        }, this.RemoveLast = function() {
                          return n.ThrowIfDisposed(), n.RemoveAt(n.Length() - 1);
                        }, this.RemoveAt = function(e) {
                          return n.ThrowIfDisposed(), n.Remove(e, 1)[0];
                        }, this.Remove = function(e, t) {
                          n.ThrowIfDisposed();
                          var r = n.list.splice(e, t);
                          return n.TriggerSubscriptions(n.removeSubscriptions), r;
                        }, this.Clear = function() {
                          n.ThrowIfDisposed(), n.Remove(0, n.Length());
                        }, this.Length = function() {
                          return n.ThrowIfDisposed(), n.list.length;
                        }, this.OnAdded = function(e) {
                          n.ThrowIfDisposed();
                          var t = n.subscriptionIdCounter++;
                          return n.addSubscriptions[t] = e, {
                              Detach: function() {
                                  delete n.addSubscriptions[t];
                                },
                            };
                        }, this.OnRemoved = function(e) {
                          n.ThrowIfDisposed();
                          var t = n.subscriptionIdCounter++;
                          return n.removeSubscriptions[t] = e, {
                              Detach: function() {
                                  delete n.removeSubscriptions[t];
                                },
                            };
                        }, this.OnDisposed = function(e) {
                          n.ThrowIfDisposed();
                          var t = n.subscriptionIdCounter++;
                          return n.disposedSubscriptions[t] = e, {
                              Detach: function() {
                                  delete n.disposedSubscriptions[t];
                                },
                            };
                        }, this.Join = function(e) {
                          return n.ThrowIfDisposed(), n.list.join(e);
                        }, this.ToArray = function() {
                          var e = Array();
                          return n.list.forEach(function(t) {
                              e.push(t);
                            }), e;
                        }, this.Any = function(e) {
                          return n.ThrowIfDisposed(), e ? n.Where(e).Length() > 0 : n.Length() > 0;
                        }, this.All = function(e) {
                          return n.ThrowIfDisposed(), n.Where(e).Length() === n.Length();
                        }, this.ForEach = function(e) {
                          n.ThrowIfDisposed();
                          for (var t = 0; t < n.Length(); t++) e(n.list[t], t);
                        }, this.Select = function(t) {
                          n.ThrowIfDisposed();
                          for (var r = [], o = 0; o < n.list.length; o++) r.push(t(n.list[o], o));
                          return new e(r);
                        }, this.Where = function(t) {
                          n.ThrowIfDisposed();
                          for (var r = new e, o = 0; o < n.list.length; o++) t(n.list[o], o) && r.Add(n.list[o]);
                          return r;
                        }, this.OrderBy = function(t) {
                          return n.ThrowIfDisposed(), new e(n.ToArray().sort(t));
                        }, this.OrderByDesc = function(e) {
                          return n.ThrowIfDisposed(), n.OrderBy(function(t, n) {
                              return e(n, t);
                            });
                        }, this.Clone = function() {
                          return n.ThrowIfDisposed(), new e(n.ToArray());
                        }, this.Concat = function(t) {
                          return n.ThrowIfDisposed(), new e(n.list.concat(t.ToArray()));
                        }, this.ConcatArray = function(t) {
                          return n.ThrowIfDisposed(), new e(n.list.concat(t));
                        }, this.IsDisposed = function() {
                          return null == n.list;
                        }, this.Dispose = function(e) {
                          n.IsDisposed() || (n.disposeReason = e, n.list = null, n.addSubscriptions = null, n.removeSubscriptions = null, n.TriggerSubscriptions(n.disposedSubscriptions));
                        }, this.ThrowIfDisposed = function() {
                          if (n.IsDisposed()) throw new r.ObjectDisposedError('List', n.disposeReason);
                        }, this.TriggerSubscriptions = function(e) {
                          if (e)
                              for (var t in e) t && e[t]();
                        }, this.list = [], t)
                      for (var o = 0, i = t; o < i.length; o++) {
                          var s = i[o];
                          this.list.push(s);
                        }
                }
              return e;
            }();
      t.List = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r, o = n(13);
      ! function(e) {
          e[e.None = 0] = 'None', e[e.Resolved = 1] = 'Resolved', e[e.Rejected = 2] = 'Rejected';
        }(r = t.PromiseState || (t.PromiseState = {}));
      var i = function() {
          function e(e) {
              var t = this;
              this.ThrowIfError = function() {
                  if (t.IsError) throw t.Error;
                }, e.On(function(e) {
                  t.isCompleted || (t.isCompleted = !0, t.isError = !1, t.result = e);
                }, function(e) {
                  t.isCompleted || (t.isCompleted = !0, t.isError = !0, t.error = e);
                });
            }
          return Object.defineProperty(e.prototype, 'IsCompleted', {
              get: function() {
                  return this.isCompleted;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'IsError', {
              get: function() {
                  return this.isError;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Error', {
              get: function() {
                  return this.error;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Result', {
              get: function() {
                  return this.result;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.PromiseResult = i;
      var s = function() {
          function e() {
              var e = this;
              this.SetResult = function(t) {
                  e.onSetResult(t);
                }, this.SetError = function(t) {
                  e.onSetError(t);
                }, this.On = function(t, n) {
                  e.onSetResult = t, e.onSetError = n;
                };
            }
          return e;
        }();
      t.PromiseResultEventSource = s;
      var a = function() {
          function e() {}
          return e;
        }();
      a.WhenAll = function(e) {
          if (!e || 0 === e.length) throw new o.ArgumentNullError('promises');
          for (var t = new u, n = [], r = 0, i = function() {
                ++r === e.length && (0 === n.length ? t.Resolve(!0) : t.Reject(n.join(', ')));
              }, s = 0, a = e; s < a.length; s++) {
              a[s].On(function(e) {
                  i();
                }, function(e) {
                  n.push(e), i();
                });
            }
          return t.Promise();
        }, a.FromResult = function(e) {
          var t = new u;
          return t.Resolve(e), t.Promise();
        }, a.FromError = function(e) {
          var t = new u;
          return t.Reject(e), t.Promise();
        }, t.PromiseHelper = a;
      var c = function() {
          function e(e) {
              var t = this;
              this.Result = function() {
                  return t.sink.Result;
                }, this.ContinueWith = function(e) {
                  if (!e) throw new o.ArgumentNullError('continuationCallback');
                  var n = new u;
                  return t.sink.on(function(r) {
                      try {
                          var o = e(t.sink.Result);
                          n.Resolve(o);
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '\'');
                        }
                    }, function(r) {
                      try {
                          var o = e(t.sink.Result);
                          n.Resolve(o);
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '. InnerError: ' + r + '\'');
                        }
                    }), n.Promise();
                }, this.OnSuccessContinueWith = function(e) {
                  if (!e) throw new o.ArgumentNullError('continuationCallback');
                  var n = new u;
                  return t.sink.on(function(t) {
                      try {
                          var r = e(t);
                          n.Resolve(r);
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '\'');
                        }
                    }, function(e) {
                      n.Reject('\'Unhandled callback error: ' + e + '\'');
                    }), n.Promise();
                }, this.ContinueWithPromise = function(e) {
                  if (!e) throw new o.ArgumentNullError('continuationCallback');
                  var n = new u;
                  return t.sink.on(function(r) {
                      try {
                          var o = e(t.sink.Result);
                          if (!o) throw new Error('\'Contuniation callback did not return promise\'');
                          o.On(function(e) {
                              n.Resolve(e);
                            }, function(e) {
                              n.Reject(e);
                            });
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '\'');
                        }
                    }, function(r) {
                      try {
                          var o = e(t.sink.Result);
                          if (!o) throw new Error('Contuniation callback did not return promise');
                          o.On(function(e) {
                              n.Resolve(e);
                            }, function(e) {
                              n.Reject(e);
                            });
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '. InnerError: ' + r + '\'');
                        }
                    }), n.Promise();
                }, this.OnSuccessContinueWithPromise = function(e) {
                  if (!e) throw new o.ArgumentNullError('continuationCallback');
                  var n = new u;
                  return t.sink.on(function(t) {
                      try {
                          var r = e(t);
                          if (!r) throw new Error('Contuniation callback did not return promise');
                          r.On(function(e) {
                              n.Resolve(e);
                            }, function(e) {
                              n.Reject(e);
                            });
                        } catch (e) {
                          n.Reject('\'Unhandled callback error: ' + e + '\'');
                        }
                    }, function(e) {
                      n.Reject('\'Unhandled callback error: ' + e + '.\'');
                    }), n.Promise();
                }, this.On = function(e, n) {
                  if (!e) throw new o.ArgumentNullError('successCallback');
                  if (!n) throw new o.ArgumentNullError('errorCallback');
                  return t.sink.on(e, n), t;
                }, this.Finally = function(e) {
                  if (!e) throw new o.ArgumentNullError('callback');
                  var n = function(t) {
                      e();
                    };
                  return t.On(n, n);
                }, this.sink = e;
            }
          return e;
        }();
      t.Promise = c;
      var u = function() {
          function e() {
              var e = this;
              this.State = function() {
                  return e.sink.State;
                }, this.Promise = function() {
                  return e.promise;
                }, this.Resolve = function(t) {
                  return e.sink.Resolve(t), e;
                }, this.Reject = function(t) {
                  return e.sink.Reject(t), e;
                }, this.sink = new l, this.promise = new c(this.sink);
            }
          return e;
        }();
      t.Deferred = u;
      var l = function() {
          function e() {
              var e = this;
              this.state = r.None, this.promiseResult = null, this.promiseResultEvents = null, this.successHandlers = [], this.errorHandlers = [], this.Resolve = function(t) {
                  if (e.state !== r.None) throw new Error('\'Cannot resolve a completed promise\'');
                  e.state = r.Resolved, e.promiseResultEvents.SetResult(t);
                  for (var n = 0; n < e.successHandlers.length; n++) e.ExecuteSuccessCallback(t, e.successHandlers[n], e.errorHandlers[n]);
                  e.DetachHandlers();
                }, this.Reject = function(t) {
                  if (e.state !== r.None) throw new Error('\'Cannot reject a completed promise\'');
                  e.state = r.Rejected, e.promiseResultEvents.SetError(t);
                  for (var n = 0, o = e.errorHandlers; n < o.length; n++) {
                      var i = o[n];
                      e.ExecuteErrorCallback(t, i);
                    }
                  e.DetachHandlers();
                }, this.on = function(t, n) {
                  null == t && (t = function(e) {}), e.state === r.None ? (e.successHandlers.push(t), e.errorHandlers.push(n)) : (e.state === r.Resolved ? e.ExecuteSuccessCallback(e.promiseResult.Result, t, n) : e.state === r.Rejected && e.ExecuteErrorCallback(e.promiseResult.Error, n), e.DetachHandlers());
                }, this.ExecuteSuccessCallback = function(t, n, r) {
                  try {
                      n(t);
                    } catch (t) {
                      e.ExecuteErrorCallback('\'Unhandled callback error: ' + t + '\'', r);
                    }
                }, this.ExecuteErrorCallback = function(e, t) {
                  if (!t) throw new Error('\'Unhandled error: ' + e + '\'');
                  try {
                      t(e);
                    } catch (t) {
                      throw new Error('\'Unhandled callback error: ' + t + '. InnerError: ' + e + '\'');
                    }
                }, this.DetachHandlers = function() {
                  e.errorHandlers = [], e.successHandlers = [];
                }, this.promiseResultEvents = new s, this.promiseResult = new i(this.promiseResultEvents);
            }
          return Object.defineProperty(e.prototype, 'State', {
              get: function() {
                  return this.state;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Result', {
              get: function() {
                  return this.promiseResult;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.Sink = l;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r, o = n(13),
          i = n(98),
          s = n(99);
      ! function(e) {
          e[e.Dequeue = 0] = 'Dequeue', e[e.Peek = 1] = 'Peek';
        }(r || (r = {}));
      var a = function() {
          function e(e) {
              var t = this;
              this.promiseStore = new i.List, this.isDrainInProgress = !1, this.isDisposing = !1, this.disposeReason = null, this.Enqueue = function(e) {
                  t.ThrowIfDispose(), t.EnqueueFromPromise(s.PromiseHelper.FromResult(e));
                }, this.EnqueueFromPromise = function(e) {
                  t.ThrowIfDispose(), t.promiseStore.Add(e), e.Finally(function() {
                      for (; t.promiseStore.Length() > 0 && t.promiseStore.First().Result().IsCompleted;) {
                          var e = t.promiseStore.RemoveFirst();
                          e.Result().IsError || t.list.Add(e.Result().Result);
                        }
                    });
                }, this.Dequeue = function() {
                  t.ThrowIfDispose();
                  var e = new s.Deferred;
                  return t.subscribers.Add({
                      deferral: e,
                      type: r.Dequeue,
                    }), t.Drain(), e.Promise();
                }, this.Peek = function() {
                  t.ThrowIfDispose();
                  var e = new s.Deferred;
                  return t.subscribers.Add({
                      deferral: e,
                      type: r.Peek,
                    }), t.Drain(), e.Promise();
                }, this.Length = function() {
                  return t.ThrowIfDispose(), t.list.Length();
                }, this.IsDisposed = function() {
                  return null == t.subscribers;
                }, this.DrainAndDispose = function(e, n) {
                  if (!t.IsDisposed() && !t.isDisposing) {
                      for (t.disposeReason = n, t.isDisposing = !0; t.subscribers.Length() > 0;) {
                          t.subscribers.RemoveFirst().deferral.Reject('Disposed');
                        }
                      for (var r = 0, o = t.detachables; r < o.length; r++) {
                          o[r].Detach();
                        }
                      if (t.promiseStore.Length() > 0 && e) return s.PromiseHelper.WhenAll(t.promiseStore.ToArray()).ContinueWith(function() {
                          return t.subscribers = null, t.list.ForEach(function(t, n) {
                              e(t);
                            }), t.list = null, !0;
                        });
                      t.subscribers = null, t.list = null;
                    }
                  return s.PromiseHelper.FromResult(!0);
                }, this.Dispose = function(e) {
                  t.DrainAndDispose(null, e);
                }, this.Drain = function() {
                  if (!t.isDrainInProgress && !t.isDisposing) {
                      for (t.isDrainInProgress = !0; t.list.Length() > 0 && t.subscribers.Length() > 0 && !t.isDisposing;) {
                          var e = t.subscribers.RemoveFirst();
                          if (e.type === r.Peek) e.deferral.Resolve(t.list.First());
                          else {
                              var n = t.list.RemoveFirst();
                              e.deferral.Resolve(n);
                            }
                        }
                      t.isDrainInProgress = !1;
                    }
                }, this.ThrowIfDispose = function() {
                  if (t.IsDisposed()) {
                      if (t.disposeReason) throw new o.InvalidOperationError(t.disposeReason);
                      throw new o.ObjectDisposedError('Queue');
                    }
                  if (t.isDisposing) throw new o.InvalidOperationError('Queue disposing');
                }, this.list = e || new i.List, this.detachables = [], this.subscribers = new i.List, this.detachables.push(this.list.OnAdded(this.Drain));
            }
          return e;
        }();
      t.Queue = a;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(41),
          o = n(7),
          i = n(58),
          s = 'testhooks',
          a = 'X-ConnectionId',
          c = function() {
              function e() {
                  var e = this;
                  this.Create = function(t, n, o) {
                      var c = '';
                      switch (t.RecognitionMode) {
                        case i.RecognitionMode.Conversation:
                          c = e.Host + e.ConversationRelativeUri;
                          break;
                        case i.RecognitionMode.Dictation:
                          c = e.Host + e.DictationRelativeUri;
                          break;
                        default:
                          c = e.Host + e.InteractiveRelativeUri;
                        }
                      var u = {
                          format: i.SpeechResultFormat[t.Format].toString().toLowerCase(),
                          language: t.Language,
                        };
                      e.IsDebugModeEnabled && (u[s] = '1');
                      var l = {};
                      return l[n.HeaderName] = n.Token, l[a] = o, new r.WebsocketConnection(c, u, l, new i.WebsocketMessageFormatter, o);
                    };
                }
              return Object.defineProperty(e.prototype, 'Host', {
                  get: function() {
                      return o.Storage.Local.GetOrAdd('Host', 'wss://speech.platform.bing.com');
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'InteractiveRelativeUri', {
                  get: function() {
                      return o.Storage.Local.GetOrAdd('InteractiveRelativeUri', '/speech/recognition/interactive/cognitiveservices/v1');
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'ConversationRelativeUri', {
                  get: function() {
                      return o.Storage.Local.GetOrAdd('ConversationRelativeUri', '/speech/recognition/conversation/cognitiveservices/v1');
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'DictationRelativeUri', {
                  get: function() {
                      return o.Storage.Local.GetOrAdd('DictationRelativeUri', '/speech/recognition/dictation/cognitiveservices/v1');
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'IsDebugModeEnabled', {
                  get: function() {
                      return 'true' === o.Storage.Local.GetOrAdd('IsDebugModeEnabled', 'false').toLowerCase();
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.SpeechConnectionFactory = c;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r;
      ! function(e) {
          e[e.Interactive = 0] = 'Interactive', e[e.Conversation = 1] = 'Conversation', e[e.Dictation = 2] = 'Dictation';
        }(r = t.RecognitionMode || (t.RecognitionMode = {}));
      var o;
      ! function(e) {
          e[e.Simple = 0] = 'Simple', e[e.Detailed = 1] = 'Detailed';
        }(o = t.SpeechResultFormat || (t.SpeechResultFormat = {}));
      var i = function() {
          function e(e, t, n, i) {
              void 0 === t && (t = r.Interactive), void 0 === n && (n = 'en-us'), void 0 === i && (i = o.Simple), this.recognitionMode = r.Interactive, this.speechConfig = e || new s(new a(null, null)), this.recognitionMode = t, this.language = n, this.format = i, this.recognitionActivityTimeout = t === r.Interactive ? 8e3 : 25e3;
            }
          return Object.defineProperty(e.prototype, 'RecognitionMode', {
              get: function() {
                  return this.recognitionMode;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Language', {
              get: function() {
                  return this.language;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Format', {
              get: function() {
                  return this.format;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'SpeechConfig', {
              get: function() {
                  return this.speechConfig;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'RecognitionActivityTimeout', {
              get: function() {
                  return this.recognitionActivityTimeout;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'IsContinuousRecognition', {
              get: function() {
                  return this.recognitionMode !== r.Interactive;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.RecognizerConfig = i;
      var s = function() {
          function e(e) {
              var t = this;
              this.Serialize = function() {
                  return JSON.stringify(t, function(e, t) {
                      if (t && 'object' == typeof t) {
                          var n = {};
                          for (var r in t) Object.hasOwnProperty.call(t, r) && (n[r && r.charAt(0).toLowerCase() + r.substring(1)] = t[r]);
                          return n;
                        }
                      return t;
                    });
                }, this.context = e;
            }
          return Object.defineProperty(e.prototype, 'Context', {
              get: function() {
                  return this.context;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.SpeechConfig = s;
      var a = function() {
          function e(e, t) {
              this.system = new c, this.os = e, this.device = t;
            }
          return Object.defineProperty(e.prototype, 'System', {
              get: function() {
                  return this.system;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'OS', {
              get: function() {
                  return this.os;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Device', {
              get: function() {
                  return this.device;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.Context = a;
      var c = function() {
          function e() {
              this.version = '1.0.00000';
            }
          return Object.defineProperty(e.prototype, 'Version', {
              get: function() {
                  return this.version;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.System = c;
      var u = function() {
          function e(e, t, n) {
              this.platform = e, this.name = t, this.version = n;
            }
          return Object.defineProperty(e.prototype, 'Platform', {
              get: function() {
                  return this.platform;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Name', {
              get: function() {
                  return this.name;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Version', {
              get: function() {
                  return this.version;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.OS = u;
      var l = function() {
          function e(e, t, n) {
              this.manufacturer = e, this.model = t, this.version = n;
            }
          return Object.defineProperty(e.prototype, 'Manufacturer', {
              get: function() {
                  return this.manufacturer;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Model', {
              get: function() {
                  return this.model;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Version', {
              get: function() {
                  return this.version;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.Device = l;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(0);
      n(433), n(435);
      var s = function(e) {
          function t(t) {
              return e.call(this, t) || this;
            }
          return r.__extends(t, e), t.prototype.clearScrollTimers = function() {
              clearInterval(this.scrollStartTimer), clearInterval(this.scrollSyncTimer), clearTimeout(this.scrollDurationTimer), document.body.removeChild(this.animateDiv), this.animateDiv = null, this.scrollStartTimer = null, this.scrollSyncTimer = null, this.scrollDurationTimer = null;
            }, t.prototype.updateScrollButtons = function() {
              this.prevButton.disabled = !this.scrollDiv || this.scrollDiv.scrollLeft <= 0, this.nextButton.disabled = !this.scrollDiv || this.scrollDiv.scrollLeft >= this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth;
            }, t.prototype.componentDidMount = function() {
              var e = this;
              this.scrollDiv.style.marginBottom = -(this.scrollDiv.offsetHeight - this.scrollDiv.clientHeight) + 'px', this.scrollSubscription = i.Observable.fromEvent(this.scrollDiv, 'scroll').subscribe(function(t) {
                  e.updateScrollButtons();
                }), this.clickSubscription = i.Observable.merge(i.Observable.fromEvent(this.prevButton, 'click').map(function(e) {
                  return -1;
                }), i.Observable.fromEvent(this.nextButton, 'click').map(function(e) {
                  return 1;
                })).subscribe(function(t) {
                  e.scrollBy(t);
                }), this.updateScrollButtons();
            }, t.prototype.componentDidUpdate = function() {
              this.scrollDiv.scrollLeft = 0, this.updateScrollButtons();
            }, t.prototype.componentWillUnmount = function() {
              this.scrollSubscription.unsubscribe(), this.clickSubscription.unsubscribe();
            }, t.prototype.scrollAmount = function(e) {
              if ('item' == this.props.scrollUnit) {
                  var t = this.scrollDiv.querySelector('ul > li');
                  return t ? e * t.offsetWidth : 0;
                }
              return e * (this.scrollDiv.offsetWidth - 70);
            }, t.prototype.scrollBy = function(e) {
              var t = this,
                  n = 'wc-animate-scroll';
              this.animateDiv && (n = 'wc-animate-scroll-rapid', this.clearScrollTimers());
              var r = this.scrollAmount(e),
                  o = this.scrollDiv.scrollLeft,
                  i = o + r;
              i = Math.max(i, 0), i = Math.min(i, this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth), o != i && (Math.abs(i - o) < 60 && (n = 'wc-animate-scroll-near'), this.animateDiv = document.createElement('div'), this.animateDiv.className = n, this.animateDiv.style.left = o + 'px', document.body.appendChild(this.animateDiv), this.scrollSyncTimer = window.setInterval(function() {
                  var e = parseFloat(getComputedStyle(t.animateDiv).left);
                  t.scrollDiv.scrollLeft = e;
                }, 1), this.scrollStartTimer = window.setTimeout(function() {
                  t.animateDiv.style.left = i + 'px';
                  var e = 1e3 * parseFloat(getComputedStyle(t.animateDiv).transitionDuration);
                  e ? (e += 50, t.scrollDurationTimer = window.setTimeout(function() {
                      return t.clearScrollTimers();
                    }, e)) : t.clearScrollTimers();
                }, 1));
            }, t.prototype.render = function() {
              var e = this;
              return o.createElement('div', null, o.createElement('button', {
                  ref: function(t) {
                      return e.prevButton = t;
                    },
                  className: 'scroll previous',
                  disabled: !0,
                }, o.createElement('svg', null, o.createElement('path', {
                  d: this.props.prevSvgPathData,
                }))), o.createElement('div', {
                  className: 'wc-hscroll-outer',
                }, o.createElement('div', {
                  className: 'wc-hscroll',
                  ref: function(t) {
                      return e.scrollDiv = t;
                    },
                }, this.props.children)), o.createElement('button', {
                  ref: function(t) {
                      return e.nextButton = t;
                    },
                  className: 'scroll next',
                  disabled: !0,
                }, o.createElement('svg', null, o.createElement('path', {
                  d: this.props.nextSvgPathData,
                }))));
            }, t;
        }(o.Component);
      t.HScroll = s;
    }, function(e, t, n) {
      var r = n(42)('unscopables'),
          o = Array.prototype;
      void 0 == o[r] && n(64)(o, r, {}), e.exports = function(e) {
          o[r][e] = !0;
        };
    }, function(e, t, n) {
      var r = n(107),
          o = n(245),
          i = n(254),
          s = n(110),
          a = n(240);
      e.exports = function(e, t) {
          var n = 1 == e,
              c = 2 == e,
              u = 3 == e,
              l = 4 == e,
              p = 6 == e,
              f = 5 == e || p,
              h = t || a;
          return function(t, a, d) {
              for (var v, m, g = i(t), y = o(g), b = r(a, d, 3), _ = s(y.length), w = 0, C = n ? h(t, _) : c ? h(t, 0) : void 0; _ > w; w++)
                  if ((f || w in y) && (v = y[w], m = b(v, w, g), e))
                      if (n) C[w] = m;
                      else if (m) switch (e) {
                        case 3:
                          return !0;
                        case 5:
                          return v;
                        case 6:
                          return w;
                        case 2:
                          C.push(v);
                        } else if (l) return !1;
              return p ? -1 : u || l ? l : C;
            };
        };
    }, function(e, t) {
      var n = e.exports = {
          version: '2.4.0',
        };
      'number' == typeof __e && (__e = n);
    }, function(e, t, n) {
      var r = n(237);
      e.exports = function(e, t, n) {
          if (r(e), void 0 === t) return e;
          switch (n) {
            case 1:
              return function(n) {
                      return e.call(t, n);
                    };
            case 2:
              return function(n, r) {
                      return e.call(t, n, r);
                    };
            case 3:
              return function(n, r, o) {
                      return e.call(t, n, r, o);
                    };
            }
          return function() {
              return e.apply(t, arguments);
            };
        };
    }, function(e, t) {
      e.exports = function(e) {
          if (void 0 == e) throw TypeError('Can\'t call method on  ' + e);
          return e;
        };
    }, function(e, t) {
      e.exports = function(e) {
          try {
              return !!e();
            } catch (e) {
              return !0;
            }
        };
    }, function(e, t, n) {
      var r = n(253),
          o = Math.min;
      e.exports = function(e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    }, function(e, t) {
      var n = 0,
          r = Math.random();
      e.exports = function(e) {
          return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(11),
          o = {
              listen: function(e, t, n) {
                  return e.addEventListener ? (e.addEventListener(t, n, !1), {
                      remove: function() {
                          e.removeEventListener(t, n, !1);
                        },
                    }) : e.attachEvent ? (e.attachEvent('on' + t, n), {
                      remove: function() {
                          e.detachEvent('on' + t, n);
                        },
                    }) : void 0;
                },
              capture: function(e, t, n) {
                  return e.addEventListener ? (e.addEventListener(t, n, !0), {
                      remove: function() {
                          e.removeEventListener(t, n, !0);
                        },
                    }) : {
                      remove: r,
                    };
                },
              registerDefault: function() {},
            };
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          try {
              e.focus();
            } catch (e) {}
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
          try {
              return e.activeElement || e.body;
            } catch (t) {
              return e.body;
            }
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(279),
          o = r.a.Symbol;
      t.a = o;
    }, function(e, t, n) {
      'use strict';
      e.exports = n(236);
    }, function(e, t, n) {
      'use strict';
      var r = '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
          o = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
          i = new RegExp('^(?:' + r + '|' + o + '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'),
          s = new RegExp('^(?:' + r + '|' + o + ')');
      e.exports.HTML_TAG_RE = i, e.exports.HTML_OPEN_CLOSE_TAG_RE = s;
    }, function(e, t, n) {
      'use strict';
      e.exports.tokenize = function(e, t) {
          var n, r, o, i = e.pos,
              s = e.src.charCodeAt(i);
          if (t) return !1;
          if (95 !== s && 42 !== s) return !1;
          for (r = e.scanDelims(e.pos, 42 === s), n = 0; n < r.length; n++) o = e.push('text', '', 0), o.content = String.fromCharCode(s), e.delimiters.push({
              marker: s,
              length: r.length,
              jump: n,
              token: e.tokens.length - 1,
              level: e.level,
              end: -1,
              open: r.can_open,
              close: r.can_close,
            });
          return e.pos += r.length, !0;
        }, e.exports.postProcess = function(e) {
          var t, n, r, o, i, s, a = e.delimiters,
              c = e.delimiters.length;
          for (t = 0; t < c; t++) n = a[t], 95 !== n.marker && 42 !== n.marker || -1 !== n.end && (r = a[n.end], s = t + 1 < c && a[t + 1].end === n.end - 1 && a[t + 1].token === n.token + 1 && a[n.end - 1].token === r.token - 1 && a[t + 1].marker === n.marker, i = String.fromCharCode(n.marker), o = e.tokens[n.token], o.type = s ? 'strong_open' : 'em_open', o.tag = s ? 'strong' : 'em', o.nesting = 1, o.markup = s ? i + i : i, o.content = '', o = e.tokens[r.token], o.type = s ? 'strong_close' : 'em_close', o.tag = s ? 'strong' : 'em', o.nesting = -1, o.markup = s ? i + i : i, o.content = '', s && (e.tokens[a[t + 1].token].content = '', e.tokens[a[n.end - 1].token].content = '', t++));
        };
    }, function(e, t, n) {
      'use strict';
      e.exports.tokenize = function(e, t) {
          var n, r, o, i, s, a = e.pos,
              c = e.src.charCodeAt(a);
          if (t) return !1;
          if (126 !== c) return !1;
          if (r = e.scanDelims(e.pos, !0), i = r.length, s = String.fromCharCode(c), i < 2) return !1;
          for (i % 2 && (o = e.push('text', '', 0), o.content = s, i--), n = 0; n < i; n += 2) o = e.push('text', '', 0), o.content = s + s, e.delimiters.push({
              marker: c,
              jump: n,
              token: e.tokens.length - 1,
              level: e.level,
              end: -1,
              open: r.can_open,
              close: r.can_close,
            });
          return e.pos += r.length, !0;
        }, e.exports.postProcess = function(e) {
          var t, n, r, o, i, s = [],
              a = e.delimiters,
              c = e.delimiters.length;
          for (t = 0; t < c; t++) r = a[t], 126 === r.marker && -1 !== r.end && (o = a[r.end], i = e.tokens[r.token], i.type = 's_open', i.tag = 's', i.nesting = 1, i.markup = '~~', i.content = '', i = e.tokens[o.token], i.type = 's_close', i.tag = 's', i.nesting = -1, i.markup = '~~', i.content = '', 'text' === e.tokens[o.token - 1].type && '~' === e.tokens[o.token - 1].content && s.push(o.token - 1));
          for (; s.length;) {
              for (t = s.pop(), n = t + 1; n < e.tokens.length && 's_close' === e.tokens[n].type;) n++;
              n--, t !== n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i);
            }
        };
    }, function(e, t, n) {
      'use strict';
      e.exports.encode = n(327), e.exports.decode = n(326), e.exports.format = n(328), e.exports.parse = n(329);
    }, function(e, t) {
      function n() {
          throw new Error('setTimeout has not been defined');
        }

      function r() {
          throw new Error('clearTimeout has not been defined');
        }

      function o(e) {
          if (l === setTimeout) return setTimeout(e, 0);
          if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
          try {
              return l(e, 0);
            } catch (t) {
              try {
                  return l.call(null, e, 0);
                } catch (t) {
                  return l.call(this, e, 0);
                }
            }
        }

      function i(e) {
          if (p === clearTimeout) return clearTimeout(e);
          if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
          try {
              return p(e);
            } catch (t) {
              try {
                  return p.call(null, e);
                } catch (t) {
                  return p.call(this, e);
                }
            }
        }

      function s() {
          v && h && (v = !1, h.length ? d = h.concat(d) : m = -1, d.length && a());
        }

      function a() {
          if (!v) {
              var e = o(s);
              v = !0;
              for (var t = d.length; t;) {
                  for (h = d, d = []; ++m < t;) h && h[m].run();
                  m = -1, t = d.length;
                }
              h = null, v = !1, i(e);
            }
        }

      function c(e, t) {
          this.fun = e, this.array = t;
        }

      function u() {}
      var l, p, f = e.exports = {};
      ! function() {
          try {
              l = 'function' == typeof setTimeout ? setTimeout : n;
            } catch (e) {
              l = n;
            }
          try {
              p = 'function' == typeof clearTimeout ? clearTimeout : r;
            } catch (e) {
              p = r;
            }
        }();
      var h, d = [],
          v = !1,
          m = -1;
      f.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          d.push(new c(e, t)), 1 !== d.length || v || o(a);
        }, c.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, f.title = 'browser', f.browser = !0, f.env = {}, f.argv = [], f.version = '', f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) {
          return [];
        }, f.binding = function(e) {
          throw new Error('process.binding is not supported');
        }, f.cwd = function() {
          return '/';
        }, f.chdir = function(e) {
          throw new Error('process.chdir is not supported');
        }, f.umask = function() {
          return 0;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(332);
      e.exports = function(e) {
          return r(e, !1);
        };
    }, function(e, t, n) {
      e.exports = n(331)();
    }, function(e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return e + t.charAt(0).toUpperCase() + t.substring(1);
        }
      var o = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          i = ['Webkit', 'ms', 'Moz', 'O'];
      Object.keys(o).forEach(function(e) {
          i.forEach(function(t) {
              o[r(t, e)] = o[e];
            });
        });
      var s = {
            background: {
                  backgroundAttachment: !0,
                  backgroundColor: !0,
                  backgroundImage: !0,
                  backgroundPositionX: !0,
                  backgroundPositionY: !0,
                  backgroundRepeat: !0,
                },
            backgroundPosition: {
                  backgroundPositionX: !0,
                  backgroundPositionY: !0,
                },
            border: {
                  borderWidth: !0,
                  borderStyle: !0,
                  borderColor: !0,
                },
            borderBottom: {
                  borderBottomWidth: !0,
                  borderBottomStyle: !0,
                  borderBottomColor: !0,
                },
            borderLeft: {
                  borderLeftWidth: !0,
                  borderLeftStyle: !0,
                  borderLeftColor: !0,
                },
            borderRight: {
                  borderRightWidth: !0,
                  borderRightStyle: !0,
                  borderRightColor: !0,
                },
            borderTop: {
                  borderTopWidth: !0,
                  borderTopStyle: !0,
                  borderTopColor: !0,
                },
            font: {
                  fontStyle: !0,
                  fontVariant: !0,
                  fontWeight: !0,
                  fontSize: !0,
                  lineHeight: !0,
                  fontFamily: !0,
                },
            outline: {
                  outlineWidth: !0,
                  outlineStyle: !0,
                  outlineColor: !0,
                },
          },
          a = {
              isUnitlessNumber: o,
              shorthandPropertyExpansions: s,
            };
      e.exports = a;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
      var o = n(4),
          i = n(22),
          s = (n(1), function() {
              function e(t) {
                  r(this, e), this._callbacks = null, this._contexts = null, this._arg = t;
                }
              return e.prototype.enqueue = function(e, t) {
                  this._callbacks = this._callbacks || [], this._callbacks.push(e), this._contexts = this._contexts || [], this._contexts.push(t);
                }, e.prototype.notifyAll = function() {
                  var e = this._callbacks,
                      t = this._contexts,
                      n = this._arg;
                  if (e && t) {
                      e.length !== t.length && o('24'), this._callbacks = null, this._contexts = null;
                      for (var r = 0; r < e.length; r++) e[r].call(t[r], n);
                      e.length = 0, t.length = 0;
                    }
                }, e.prototype.checkpoint = function() {
                  return this._callbacks ? this._callbacks.length : 0;
                }, e.prototype.rollback = function(e) {
                  this._callbacks && this._contexts && (this._callbacks.length = e, this._contexts.length = e);
                }, e.prototype.reset = function() {
                  this._callbacks = null, this._contexts = null;
                }, e.prototype.destructor = function() {
                  this.reset();
                }, e;
            }());
      e.exports = i.addPoolingTo(s);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return !!u.hasOwnProperty(e) || !c.hasOwnProperty(e) && (a.test(e) ? (u[e] = !0, !0) : (c[e] = !0, !1));
        }

      function o(e, t) {
          return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && !1 === t;
        }
      var i = n(26),
          s = (n(6), n(14), n(396)),
          a = (n(3), new RegExp('^[' + i.ATTRIBUTE_NAME_START_CHAR + '][' + i.ATTRIBUTE_NAME_CHAR + ']*$')),
          c = {},
          u = {},
          l = {
              createMarkupForID: function(e) {
                  return i.ID_ATTRIBUTE_NAME + '=' + s(e);
                },
              setAttributeForID: function(e, t) {
                  e.setAttribute(i.ID_ATTRIBUTE_NAME, t);
                },
              createMarkupForRoot: function() {
                  return i.ROOT_ATTRIBUTE_NAME + '=""';
                },
              setAttributeForRoot: function(e) {
                  e.setAttribute(i.ROOT_ATTRIBUTE_NAME, '');
                },
              createMarkupForProperty: function(e, t) {
                  var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
                  if (n) {
                      if (o(n, t)) return '';
                      var r = n.attributeName;
                      return n.hasBooleanValue || n.hasOverloadedBooleanValue && !0 === t ? r + '=""' : r + '=' + s(t);
                    }
                  return i.isCustomAttribute(e) ? null == t ? '' : e + '=' + s(t) : null;
                },
              createMarkupForCustomAttribute: function(e, t) {
                  return r(e) && null != t ? e + '=' + s(t) : '';
                },
              setValueForProperty: function(e, t, n) {
                  var r = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                  if (r) {
                      var s = r.mutationMethod;
                      if (s) s(e, n);
                      else {
                          if (o(r, n)) return void this.deleteValueForProperty(e, t);
                          if (r.mustUseProperty) e[r.propertyName] = n;
                          else {
                              var a = r.attributeName,
                                  c = r.attributeNamespace;
                              c ? e.setAttributeNS(c, a, '' + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(a, '') : e.setAttribute(a, '' + n);
                            }
                        }
                    } else if (i.isCustomAttribute(t)) return void l.setValueForAttribute(e, t, n);
                },
              setValueForAttribute: function(e, t, n) {
                  if (r(t)) {
                      null == n ? e.removeAttribute(t) : e.setAttribute(t, '' + n);
                    }
                },
              deleteValueForAttribute: function(e, t) {
                  e.removeAttribute(t);
                },
              deleteValueForProperty: function(e, t) {
                  var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                  if (n) {
                      var r = n.mutationMethod;
                      if (r) r(e, void 0);
                      else if (n.mustUseProperty) {
                          var o = n.propertyName;
                          n.hasBooleanValue ? e[o] = !1 : e[o] = '';
                        } else e.removeAttribute(n.attributeName);
                    } else i.isCustomAttribute(t) && e.removeAttribute(t);
                },
            };
      e.exports = l;
    }, function(e, t, n) {
      'use strict';
      var r = {
          hasCachedChildNodes: 1,
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          if (this._rootNodeID && this._wrapperState.pendingUpdate) {
              this._wrapperState.pendingUpdate = !1;
              var e = this._currentElement.props,
                  t = a.getValue(e);
              null != t && o(this, Boolean(e.multiple), t);
            }
        }

      function o(e, t, n) {
          var r, o, i = c.getNodeFromInstance(e).options;
          if (t) {
              for (r = {}, o = 0; o < n.length; o++) r['' + n[o]] = !0;
              for (o = 0; o < i.length; o++) {
                  var s = r.hasOwnProperty(i[o].value);
                  i[o].selected !== s && (i[o].selected = s);
                }
            } else {
              for (r = '' + n, o = 0; o < i.length; o++)
                  if (i[o].value === r) return void(i[o].selected = !0);
              i.length && (i[0].selected = !0);
            }
        }

      function i(e) {
          var t = this._currentElement.props,
              n = a.executeOnChange(t, e);
          return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), u.asap(r, this), n;
        }
      var s = n(5),
          a = n(74),
          c = n(6),
          u = n(15),
          l = (n(3), !1),
          p = {
              getHostProps: function(e, t) {
                  return s({}, t, {
                      onChange: e._wrapperState.onChange,
                      value: void 0,
                    });
                },
              mountWrapper: function(e, t) {
                  var n = a.getValue(t);
                  e._wrapperState = {
                      pendingUpdate: !1,
                      initialValue: null != n ? n : t.defaultValue,
                      listeners: null,
                      onChange: i.bind(e),
                      wasMultiple: Boolean(t.multiple),
                    }, void 0 === t.value || void 0 === t.defaultValue || l || (l = !0);
                },
              getSelectValueContext: function(e) {
                  return e._wrapperState.initialValue;
                },
              postUpdateWrapper: function(e) {
                  var t = e._currentElement.props;
                  e._wrapperState.initialValue = void 0;
                  var n = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = Boolean(t.multiple);
                  var r = a.getValue(t);
                  null != r ? (e._wrapperState.pendingUpdate = !1, o(e, Boolean(t.multiple), r)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? o(e, Boolean(t.multiple), t.defaultValue) : o(e, Boolean(t.multiple), t.multiple ? [] : ''));
                },
            };
      e.exports = p;
    }, function(e, t, n) {
      'use strict';
      var r, o = {
            injectEmptyComponentFactory: function(e) {
                  r = e;
                },
          },
          i = {
              create: function(e) {
                  return r(e);
                },
            };
      i.injection = o, e.exports = i;
    }, function(e, t, n) {
      'use strict';
      var r = {
          logTopLevelRenders: !1,
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return a || s('111', e.type), new a(e);
        }

      function o(e) {
          return new c(e);
        }

      function i(e) {
          return e instanceof c;
        }
      var s = n(4),
          a = (n(1), null),
          c = null,
          u = {
              injectGenericComponentClass: function(e) {
                  a = e;
                },
              injectTextComponentClass: function(e) {
                  c = e;
                },
            },
          l = {
              createInternalComponent: r,
              createInstanceForText: o,
              isTextComponent: i,
              injection: u,
            };
      e.exports = l;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return i(document.documentElement, e);
        }
      var o = n(356),
          i = n(259),
          s = n(113),
          a = n(114),
          c = {
              hasSelectionCapabilities: function(e) {
                  var t = e && e.nodeName && e.nodeName.toLowerCase();
                  return t && ('input' === t && 'text' === e.type || 'textarea' === t || 'true' === e.contentEditable);
                },
              getSelectionInformation: function() {
                  var e = a();
                  return {
                      focusedElem: e,
                      selectionRange: c.hasSelectionCapabilities(e) ? c.getSelection(e) : null,
                    };
                },
              restoreSelection: function(e) {
                  var t = a(),
                      n = e.focusedElem,
                      o = e.selectionRange;
                  t !== n && r(n) && (c.hasSelectionCapabilities(n) && c.setSelection(n, o), s(n));
                },
              getSelection: function(e) {
                  var t;
                  if ('selectionStart' in e) t = {
                      start: e.selectionStart,
                      end: e.selectionEnd,
                    };
                  else if (document.selection && e.nodeName && 'input' === e.nodeName.toLowerCase()) {
                      var n = document.selection.createRange();
                      n.parentElement() === e && (t = {
                          start: -n.moveStart('character', -e.value.length),
                          end: -n.moveEnd('character', -e.value.length),
                        });
                    } else t = o.getOffsets(e);
                  return t || {
                      start: 0,
                      end: 0,
                    };
                },
              setSelection: function(e, t) {
                  var n = t.start,
                      r = t.end;
                  if (void 0 === r && (r = n), 'selectionStart' in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                  else if (document.selection && e.nodeName && 'input' === e.nodeName.toLowerCase()) {
                      var i = e.createTextRange();
                      i.collapse(!0), i.moveStart('character', n), i.moveEnd('character', r - n), i.select();
                    } else o.setOffsets(e, t);
                },
            };
      e.exports = c;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
              if (e.charAt(r) !== t.charAt(r)) return r;
          return e.length === t.length ? -1 : n;
        }

      function o(e) {
          return e ? e.nodeType === D ? e.documentElement : e.firstChild : null;
        }

      function i(e) {
          return e.getAttribute && e.getAttribute(I) || '';
        }

      function s(e, t, n, r, o) {
          var i;
          if (w.logTopLevelRenders) {
              var s = e._currentElement.props.child,
                  a = s.type;
              i = 'React mount: ' + ('string' == typeof a ? a : a.displayName || a.name), console.time(i);
            }
          var c = E.mountComponent(e, n, null, b(e, t), o, 0);
          i && console.timeEnd(i), e._renderedComponent._topLevelWrapper = e, U._mountImageIntoNode(c, t, e, r, n);
        }

      function a(e, t, n, r) {
          var o = k.ReactReconcileTransaction.getPooled(!n && _.useCreateElement);
          o.perform(s, null, e, t, o, n, r), k.ReactReconcileTransaction.release(o);
        }

      function c(e, t, n) {
          for (E.unmountComponent(e, n), t.nodeType === D && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild);
        }

      function u(e) {
          var t = o(e);
          if (t) {
              var n = y.getInstanceFromNode(t);
              return !(!n || !n._hostParent);
            }
        }

      function l(e) {
          return !(!e || e.nodeType !== R && e.nodeType !== D && e.nodeType !== N);
        }

      function p(e) {
          var t = o(e),
              n = t && y.getInstanceFromNode(t);
          return n && !n._hostParent ? n : null;
        }

      function f(e) {
          var t = p(e);
          return t ? t._hostContainerInfo._topLevelWrapper : null;
        }
      var h = n(4),
          d = n(25),
          v = n(26),
          m = n(28),
          g = n(44),
          y = (n(18), n(6)),
          b = n(350),
          _ = n(352),
          w = n(131),
          C = n(36),
          S = (n(14), n(366)),
          E = n(27),
          x = n(77),
          k = n(15),
          O = n(43),
          T = n(142),
          A = (n(1), n(48)),
          P = n(83),
          I = (n(3), v.ID_ATTRIBUTE_NAME),
          M = v.ROOT_ATTRIBUTE_NAME,
          R = 1,
          D = 9,
          N = 11,
          j = {},
          L = 1,
          F = function() {
              this.rootID = L++;
            };
      F.prototype.isReactComponent = {}, F.prototype.render = function() {
          return this.props.child;
        }, F.isReactTopLevelWrapper = !0;
      var U = {
          TopLevelWrapper: F,
          _instancesByReactRootID: j,
          scrollMonitor: function(e, t) {
              t();
            },
          _updateRootComponent: function(e, t, n, r, o) {
              return U.scrollMonitor(r, function() {
                  x.enqueueElementInternal(e, t, n), o && x.enqueueCallbackInternal(e, o);
                }), e;
            },
          _renderNewRootComponent: function(e, t, n, r) {
              l(t) || h('37'), g.ensureScrollValueMonitoring();
              var o = T(e, !1);
              k.batchedUpdates(a, o, t, n, r);
              var i = o._instance.rootID;
              return j[i] = o, o;
            },
          renderSubtreeIntoContainer: function(e, t, n, r) {
              return null != e && C.has(e) || h('38'), U._renderSubtreeIntoContainer(e, t, n, r);
            },
          _renderSubtreeIntoContainer: function(e, t, n, r) {
              x.validateCallback(r, 'ReactDOM.render'), m.isValidElement(t) || h('39', 'string' == typeof t ? ' Instead of passing a string like \'div\', pass React.createElement(\'div\') or <div />.' : 'function' == typeof t ? ' Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.' : null != t && void 0 !== t.props ? ' This may be caused by unintentionally loading two independent copies of React.' : '');
              var s, a = m.createElement(F, {
                    child: t,
                  });
              if (e) {
                  var c = C.get(e);
                  s = c._processChildContext(c._context);
                } else s = O;
              var l = f(n);
              if (l) {
                  var p = l._currentElement,
                      d = p.props.child;
                  if (P(d, t)) {
                      var v = l._renderedComponent.getPublicInstance(),
                          g = r && function() {
                              r.call(v);
                            };
                      return U._updateRootComponent(l, a, s, n, g), v;
                    }
                  U.unmountComponentAtNode(n);
                }
              var y = o(n),
                  b = y && !!i(y),
                  _ = u(n),
                  w = b && !l && !_,
                  S = U._renderNewRootComponent(a, n, w, s)._renderedComponent.getPublicInstance();
              return r && r.call(S), S;
            },
          render: function(e, t, n) {
              return U._renderSubtreeIntoContainer(null, e, t, n);
            },
          unmountComponentAtNode: function(e) {
              l(e) || h('40');
              var t = f(e);
              if (!t) {
                  u(e), 1 === e.nodeType && e.hasAttribute(M);
                  return !1;
                }
              return delete j[t._instance.rootID], k.batchedUpdates(c, t, e, !1), !0;
            },
          _mountImageIntoNode: function(e, t, n, i, s) {
              if (l(t) || h('41'), i) {
                  var a = o(t);
                  if (S.canReuseMarkup(e, a)) return void y.precacheNode(n, a);
                  var c = a.getAttribute(S.CHECKSUM_ATTR_NAME);
                  a.removeAttribute(S.CHECKSUM_ATTR_NAME);
                  var u = a.outerHTML;
                  a.setAttribute(S.CHECKSUM_ATTR_NAME, c);
                  var p = e,
                      f = r(p, u),
                      v = ' (client) ' + p.substring(f - 20, f + 20) + '\n (server) ' + u.substring(f - 20, f + 20);
                  t.nodeType === D && h('42', v);
                }
              if (t.nodeType === D && h('43'), s.useCreateElement) {
                  for (; t.lastChild;) t.removeChild(t.lastChild);
                  d.insertTreeBefore(t, e, null);
                } else A(t, e), y.precacheNode(n, t.firstChild);
            },
        };
      e.exports = U;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = n(28),
          i = (n(1), {
              HOST: 0,
              COMPOSITE: 1,
              EMPTY: 2,
              getType: function(e) {
                  return null === e || !1 === e ? i.EMPTY : o.isValidElement(e) ? 'function' == typeof e.type ? i.COMPOSITE : i.HOST : void r('26', e);
                },
            });
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      var r = {
          currentScrollLeft: 0,
          currentScrollTop: 0,
          refreshScrollValues: function(e) {
              r.currentScrollLeft = e.x, r.currentScrollTop = e.y;
            },
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return null == t && o('30'), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }
      var o = n(4);
      n(1);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var t;
                (t = e._renderedNodeType) === o.COMPOSITE;) e = e._renderedComponent;
          return t === o.HOST ? e._renderedComponent : t === o.EMPTY ? null : void 0;
        }
      var o = n(135);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          return !i && o.canUseDOM && (i = 'textContent' in document.documentElement ? 'textContent' : 'innerText'), i;
        }
      var o = n(9),
          i = null;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.type,
              n = e.nodeName;
          return n && 'input' === n.toLowerCase() && ('checkbox' === t || 'radio' === t);
        }

      function o(e) {
          return e._wrapperState.valueTracker;
        }

      function i(e, t) {
          e._wrapperState.valueTracker = t;
        }

      function s(e) {
          delete e._wrapperState.valueTracker;
        }

      function a(e) {
          var t;
          return e && (t = r(e) ? '' + e.checked : e.value), t;
        }
      var c = n(6),
          u = {
              _getTrackerFromNode: function(e) {
                  return o(c.getInstanceFromNode(e));
                },
              track: function(e) {
                  if (!o(e)) {
                      var t = c.getNodeFromInstance(e),
                          n = r(t) ? 'checked' : 'value',
                          a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
                          u = '' + t[n];
                      t.hasOwnProperty(n) || (Object.defineProperty(t, n, {
                          enumerable: a.enumerable,
                          configurable: !0,
                          get: function() {
                              return a.get.call(this);
                            },
                          set: function(e) {
                              u = '' + e, a.set.call(this, e);
                            },
                        }), i(e, {
                          getValue: function() {
                              return u;
                            },
                          setValue: function(e) {
                              u = '' + e;
                            },
                          stopTracking: function() {
                              s(e), delete t[n];
                            },
                        }));
                    }
                },
              updateValueIfChanged: function(e) {
                  if (!e) return !1;
                  var t = o(e);
                  if (!t) return u.track(e), !0;
                  var n = t.getValue(),
                      r = a(c.getNodeFromInstance(e));
                  return r !== n && (t.setValue(r), !0);
                },
              stopTracking: function(e) {
                  var t = o(e);
                  t && t.stopTracking();
                },
            };
      e.exports = u;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (e) {
              var t = e.getName();
              if (t) return ' Check the render method of `' + t + '`.';
            }
          return '';
        }

      function o(e) {
          return 'function' == typeof e && void 0 !== e.prototype && 'function' == typeof e.prototype.mountComponent && 'function' == typeof e.prototype.receiveComponent;
        }

      function i(e, t) {
          var n;
          if (null === e || !1 === e) n = u.create(i);
          else if ('object' == typeof e) {
              var a = e,
                  c = a.type;
              if ('function' != typeof c && 'string' != typeof c) {
                  var f = '';
                  f += r(a._owner), s('130', null == c ? c : typeof c, f);
                }
              'string' == typeof a.type ? n = l.createInternalComponent(a) : o(a.type) ? (n = new a.type(a), n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new p(a);
            } else 'string' == typeof e || 'number' == typeof e ? n = l.createInstanceForText(e) : s('131', typeof e);
          return n._mountIndex = 0, n._mountImage = null, n;
        }
      var s = n(4),
          a = n(5),
          c = n(347),
          u = n(130),
          l = n(132),
          p = (n(415), n(1), n(3), function(e) {
              this.construct(e);
            });
      a(p.prototype, c, {
          _instantiateReactComponent: i,
        }), e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!o[e.type] : 'textarea' === t;
        }
      var o = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(9),
          o = n(47),
          i = n(48),
          s = function(e, t) {
              if (t) {
                  var n = e.firstChild;
                  if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t);
                }
              e.textContent = t;
            };
      r.canUseDOM && ('textContent' in document.documentElement || (s = function(e, t) {
          if (3 === e.nodeType) return void(e.nodeValue = t);
          i(e, o(t));
        })), e.exports = s;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return e && 'object' == typeof e && null != e.key ? u.escape(e.key) : t.toString(36);
        }

      function o(e, t, n, i) {
          var f = typeof e;
          if ('undefined' !== f && 'boolean' !== f || (e = null), null === e || 'string' === f || 'number' === f || 'object' === f && e.$$typeof === a) return n(i, e, '' === t ? l + r(e, 0) : t), 1;
          var h, d, v = 0,
              m = '' === t ? l : t + p;
          if (Array.isArray(e))
              for (var g = 0; g < e.length; g++) h = e[g], d = m + r(h, g), v += o(h, d, n, i);
          else {
              var y = c(e);
              if (y) {
                  var b, _ = y.call(e);
                  if (y !== e.entries)
                      for (var w = 0; !(b = _.next()).done;) h = b.value, d = m + r(h, w++), v += o(h, d, n, i);
                  else
                        for (; !(b = _.next()).done;) {
                          var C = b.value;
                          C && (h = C[1], d = m + u.escape(C[0]) + p + r(h, 0), v += o(h, d, n, i));
                        }
                } else if ('object' === f) {
                  var S = '',
                      E = String(e);
                  s('31', '[object Object]' === E ? 'object with keys {' + Object.keys(e).join(', ') + '}' : E, S);
                }
            }
          return v;
        }

      function i(e, t, n) {
          return null == e ? 0 : o(e, '', t, n);
        }
      var s = n(4),
          a = (n(18), n(362)),
          c = n(393),
          u = (n(1), n(73)),
          l = (n(3), '.'),
          p = ':';
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }

      function o(e, t) {
          if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }

      function i(e, t) {
          if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }

      function s(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n;
        }

      function a() {}

      function c(e, t) {
          var n = {
              run: function(r) {
                  try {
                      var o = e(t.getState(), r);
                      (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null);
                    } catch (e) {
                      n.shouldComponentUpdate = !0, n.error = e;
                    }
                },
            };
          return n;
        }

      function u(e) {
          var t, u, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              f = l.getDisplayName,
              _ = void 0 === f ? function(e) {
                  return 'ConnectAdvanced(' + e + ')';
                } : f,
              w = l.methodName,
              C = void 0 === w ? 'connectAdvanced' : w,
              S = l.renderCountProp,
              E = void 0 === S ? void 0 : S,
              x = l.shouldHandleStateChanges,
              k = void 0 === x || x,
              O = l.storeKey,
              T = void 0 === O ? 'store' : O,
              A = l.withRef,
              P = void 0 !== A && A,
              I = s(l, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']),
              M = T + 'Subscription',
              R = y++,
              D = (t = {}, t[T] = m.a, t[M] = m.b, t),
              N = (u = {}, u[M] = m.b, u);
          return function(t) {
              h()('function' == typeof t, 'You must pass a component to the function returned by connect. Instead received ' + JSON.stringify(t));
              var s = t.displayName || t.name || 'Component',
                  u = _(s),
                  l = g({}, I, {
                      getDisplayName: _,
                      methodName: C,
                      renderCountProp: E,
                      shouldHandleStateChanges: k,
                      storeKey: T,
                      withRef: P,
                      displayName: u,
                      wrappedComponentName: s,
                      WrappedComponent: t,
                    }),
                  f = function(s) {
                      function p(e, t) {
                          r(this, p);
                          var n = o(this, s.call(this, e, t));
                          return n.version = R, n.state = {}, n.renderCount = 0, n.store = e[T] || t[T], n.propsMode = Boolean(e[T]), n.setWrappedInstance = n.setWrappedInstance.bind(n), h()(n.store, 'Could not find "' + T + '" in either the context or props of "' + u + '". Either wrap the root component in a <Provider>, or explicitly pass "' + T + '" as a prop to "' + u + '".'), n.initSelector(), n.initSubscription(), n;
                        }
                      return i(p, s), p.prototype.getChildContext = function() {
                          var e, t = this.propsMode ? null : this.subscription;
                          return e = {}, e[M] = t || this.context[M], e;
                        }, p.prototype.componentDidMount = function() {
                          k && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate());
                        }, p.prototype.componentWillReceiveProps = function(e) {
                          this.selector.run(e);
                        }, p.prototype.shouldComponentUpdate = function() {
                          return this.selector.shouldComponentUpdate;
                        }, p.prototype.componentWillUnmount = function() {
                          this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = a, this.store = null, this.selector.run = a, this.selector.shouldComponentUpdate = !1;
                        }, p.prototype.getWrappedInstance = function() {
                          return h()(P, 'To access the wrapped instance, you need to specify { withRef: true } in the options argument of the ' + C + '() call.'), this.wrappedInstance;
                        }, p.prototype.setWrappedInstance = function(e) {
                          this.wrappedInstance = e;
                        }, p.prototype.initSelector = function() {
                          var t = e(this.store.dispatch, l);
                          this.selector = c(t, this.store), this.selector.run(this.props);
                        }, p.prototype.initSubscription = function() {
                          if (k) {
                              var e = (this.propsMode ? this.props : this.context)[M];
                              this.subscription = new v.a(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
                            }
                        }, p.prototype.onStateChange = function() {
                          this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(b)) : this.notifyNestedSubs();
                        }, p.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                          this.componentDidUpdate = void 0, this.notifyNestedSubs();
                        }, p.prototype.isSubscribed = function() {
                          return Boolean(this.subscription) && this.subscription.isSubscribed();
                        }, p.prototype.addExtraProps = function(e) {
                          if (!(P || E || this.propsMode && this.subscription)) return e;
                          var t = g({}, e);
                          return P && (t.ref = this.setWrappedInstance), E && (t[E] = this.renderCount++), this.propsMode && this.subscription && (t[M] = this.subscription), t;
                        }, p.prototype.render = function() {
                          var e = this.selector;
                          if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                          return n.i(d.createElement)(t, this.addExtraProps(e.props));
                        }, p;
                    }(d.Component);
              return f.WrappedComponent = t, f.displayName = u, f.childContextTypes = N, f.contextTypes = D, f.propTypes = D, p()(f, t);
            };
        }
      t.a = u;
      var l = n(269),
          p = n.n(l),
          f = n(270),
          h = n.n(f),
          d = n(12),
          v = (n.n(d), n(405)),
          m = n(148),
          g = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
              return e;
            },
          y = 0,
          b = {};
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return function(t, n) {
              function r() {
                  return o;
                }
              var o = e(t, n);
              return r.dependsOnOwnProps = !1, r;
            };
        }

      function o(e) {
          return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
        }

      function i(e, t) {
          return function(t, n) {
              var r = (n.displayName, function(e, t) {
                  return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
                });
              return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
                  r.mapToProps = e, r.dependsOnOwnProps = o(e);
                  var i = r(t, n);
                  return 'function' == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = o(i), i = r(t, n)), i;
                }, r;
            };
        }
      t.b = r, t.a = i;
      n(149);
    }, function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
          return i;
        }), n.d(t, 'a', function() {
          return s;
        });
      var r = n(123),
          o = n.n(r),
          i = o.a.shape({
              trySubscribe: o.a.func.isRequired,
              tryUnsubscribe: o.a.func.isRequired,
              notifyNestedSubs: o.a.func.isRequired,
              isSubscribed: o.a.func.isRequired,
            }),
          s = o.a.shape({
              subscribe: o.a.func.isRequired,
              dispatch: o.a.func.isRequired,
              getState: o.a.func.isRequired,
            });
    }, function(e, t, n) {
      'use strict';
      n(66), n(85);
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          this.props = e, this.context = t, this.refs = u, this.updater = n || c;
        }

      function o(e, t, n) {
          this.props = e, this.context = t, this.refs = u, this.updater = n || c;
        }

      function i() {}
      var s = n(38),
          a = n(5),
          c = n(153),
          u = (n(154), n(43));
      n(1), n(416);
      r.prototype.isReactComponent = {}, r.prototype.setState = function(e, t) {
          'object' != typeof e && 'function' != typeof e && null != e && s('85'), this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, 'setState');
        }, r.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, 'forceUpdate');
        };
      i.prototype = r.prototype, o.prototype = new i, o.prototype.constructor = o, a(o.prototype, r.prototype), o.prototype.isPureReactComponent = !0, e.exports = {
          Component: r,
          PureComponent: o,
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = Function.prototype.toString,
              n = Object.prototype.hasOwnProperty,
              r = RegExp('^' + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
          try {
              var o = t.call(e);
              return r.test(o);
            } catch (e) {
              return !1;
            }
        }

      function o(e) {
          var t = u(e);
          if (t) {
              var n = t.childIDs;
              l(e), n.forEach(o);
            }
        }

      function i(e, t, n) {
          return '\n    in ' + (e || 'Unknown') + (t ? ' (at ' + t.fileName.replace(/^.*[\\\/]/, '') + ':' + t.lineNumber + ')' : n ? ' (created by ' + n + ')' : '');
        }

      function s(e) {
          return null == e ? '#empty' : 'string' == typeof e || 'number' == typeof e ? '#text' : 'string' == typeof e.type ? e.type : e.type.displayName || e.type.name || 'Unknown';
        }

      function a(e) {
          var t, n = x.getDisplayName(e),
              r = x.getElement(e),
              o = x.getOwnerID(e);
          return o && (t = x.getDisplayName(o)), i(n, r && r._source, t);
        }
      var c, u, l, p, f, h, d, v = n(38),
          m = n(18),
          g = (n(1), n(3), 'function' == typeof Array.from && 'function' == typeof Map && r(Map) && null != Map.prototype && 'function' == typeof Map.prototype.keys && r(Map.prototype.keys) && 'function' == typeof Set && r(Set) && null != Set.prototype && 'function' == typeof Set.prototype.keys && r(Set.prototype.keys));
      if (g) {
          var y = new Map,
              b = new Set;
          c = function(e, t) {
              y.set(e, t);
            }, u = function(e) {
              return y.get(e);
            }, l = function(e) {
              y.delete(e);
            }, p = function() {
              return Array.from(y.keys());
            }, f = function(e) {
              b.add(e);
            }, h = function(e) {
              b.delete(e);
            }, d = function() {
              return Array.from(b.keys());
            };
        } else {
          var _ = {},
              w = {},
              C = function(e) {
                  return '.' + e;
                },
              S = function(e) {
                  return parseInt(e.substr(1), 10);
                };
          c = function(e, t) {
              var n = C(e);
              _[n] = t;
            }, u = function(e) {
              var t = C(e);
              return _[t];
            }, l = function(e) {
              var t = C(e);
              delete _[t];
            }, p = function() {
              return Object.keys(_).map(S);
            }, f = function(e) {
              var t = C(e);
              w[t] = !0;
            }, h = function(e) {
              var t = C(e);
              delete w[t];
            }, d = function() {
              return Object.keys(w).map(S);
            };
        }
      var E = [],
          x = {
              onSetChildren: function(e, t) {
                  var n = u(e);
                  n || v('144'), n.childIDs = t;
                  for (var r = 0; r < t.length; r++) {
                      var o = t[r],
                          i = u(o);
                      i || v('140'), null == i.childIDs && 'object' == typeof i.element && null != i.element && v('141'), i.isMounted || v('71'), null == i.parentID && (i.parentID = e), i.parentID !== e && v('142', o, i.parentID, e);
                    }
                },
              onBeforeMountComponent: function(e, t, n) {
                  c(e, {
                      element: t,
                      parentID: n,
                      text: null,
                      childIDs: [],
                      isMounted: !1,
                      updateCount: 0,
                    });
                },
              onBeforeUpdateComponent: function(e, t) {
                  var n = u(e);
                  n && n.isMounted && (n.element = t);
                },
              onMountComponent: function(e) {
                  var t = u(e);
                  t || v('144'), t.isMounted = !0, 0 === t.parentID && f(e);
                },
              onUpdateComponent: function(e) {
                  var t = u(e);
                  t && t.isMounted && t.updateCount++;
                },
              onUnmountComponent: function(e) {
                  var t = u(e);
                  if (t) {
                      t.isMounted = !1;
                      0 === t.parentID && h(e);
                    }
                  E.push(e);
                },
              purgeUnmountedComponents: function() {
                  if (!x._preventPurging) {
                      for (var e = 0; e < E.length; e++) {
                          o(E[e]);
                        }
                      E.length = 0;
                    }
                },
              isMounted: function(e) {
                  var t = u(e);
                  return !!t && t.isMounted;
                },
              getCurrentStackAddendum: function(e) {
                  var t = '';
                  if (e) {
                      var n = s(e),
                          r = e._owner;
                      t += i(n, e._source, r && r.getName());
                    }
                  var o = m.current,
                      a = o && o._debugID;
                  return t += x.getStackAddendumByID(a);
                },
              getStackAddendumByID: function(e) {
                  for (var t = ''; e;) t += a(e), e = x.getParentID(e);
                  return t;
                },
              getChildIDs: function(e) {
                  var t = u(e);
                  return t ? t.childIDs : [];
                },
              getDisplayName: function(e) {
                  var t = x.getElement(e);
                  return t ? s(t) : null;
                },
              getElement: function(e) {
                  var t = u(e);
                  return t ? t.element : null;
                },
              getOwnerID: function(e) {
                  var t = x.getElement(e);
                  return t && t._owner ? t._owner._debugID : null;
                },
              getParentID: function(e) {
                  var t = u(e);
                  return t ? t.parentID : null;
                },
              getSource: function(e) {
                  var t = u(e),
                      n = t ? t.element : null;
                  return null != n ? n._source : null;
                },
              getText: function(e) {
                  var t = x.getElement(e);
                  return 'string' == typeof t ? t : 'number' == typeof t ? '' + t : null;
                },
              getUpdateCount: function(e) {
                  var t = u(e);
                  return t ? t.updateCount : 0;
                },
              getRootIDs: d,
              getRegisteredIDs: p,
              pushNonStandardWarningStack: function(e, t) {
                  if ('function' == typeof console.reactStack) {
                      var n = [],
                          r = m.current,
                          o = r && r._debugID;
                      try {
                          for (e && n.push({
                              name: o ? x.getDisplayName(o) : null,
                              fileName: t ? t.fileName : null,
                              lineNumber: t ? t.lineNumber : null,
                            }); o;) {
                              var i = x.getElement(o),
                                  s = x.getParentID(o),
                                  a = x.getOwnerID(o),
                                  c = a ? x.getDisplayName(a) : null,
                                  u = i && i._source;
                              n.push({
                                  name: c,
                                  fileName: u ? u.fileName : null,
                                  lineNumber: u ? u.lineNumber : null,
                                }), o = s;
                            }
                        } catch (e) {}
                      console.reactStack(n);
                    }
                },
              popNonStandardWarningStack: function() {
                  'function' == typeof console.reactStackEnd && console.reactStackEnd();
                },
            };
      e.exports = x;
    }, function(e, t, n) {
      'use strict';
      var r = 'function' == typeof Symbol && Symbol.for && Symbol.for('react.element') || 60103;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = (n(3), {
          isMounted: function(e) {
              return !1;
            },
          enqueueCallback: function(e, t) {},
          enqueueForceUpdate: function(e) {},
          enqueueReplaceState: function(e, t) {},
          enqueueSetState: function(e, t) {},
        });
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = !1;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }

      function o(e, t) {
          if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }

      function i(e, t) {
          if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), t.ActionsObservable = void 0;
      var s = function() {
            function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
            return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
          }(),
          a = n(0),
          c = n(173),
          u = n(171),
          l = n(174);
      t.ActionsObservable = function(e) {
          function t(e) {
              r(this, t);
              var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
              return n.source = e, n;
            }
          return i(t, e), s(t, null, [{
              key: 'of',
              value: function() {
                  return new this(c.of.apply(void 0, arguments));
                },
            }, {
              key: 'from',
              value: function(e, t) {
                  return new this((0, u.from)(e, t));
                },
            }]), s(t, [{
              key: 'lift',
              value: function(e) {
                  var n = new t(this);
                  return n.operator = e, n;
                },
            }, {
              key: 'ofType',
              value: function() {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return l.filter.call(this, function(e) {
                      var n = e.type,
                          r = t.length;
                      if (1 === r) return n === t[0];
                      for (var o = 0; o < r; o++)
                          if (t[o] === n) return !0;
                      return !1;
                    });
                },
            }]), t;
        }(a.Observable);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      t.EPIC_END = '@@redux-observable/EPIC_END';
    }, function(e, t, n) {
      'use strict';

      function r() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          if (0 === t.length) return function(e) {
              return e;
            };
          if (1 === t.length) return t[0];
          var r = t[t.length - 1],
              o = t.slice(0, -1);
          return function() {
              return o.reduceRight(function(e, t) {
                  return t(e);
                }, r.apply(void 0, arguments));
            };
        }
      t.a = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, i) {
          function c() {
              y === g && (y = g.slice());
            }

          function u() {
              return m;
            }

          function l(e) {
              if ('function' != typeof e) throw new Error('Expected listener to be a function.');
              var t = !0;
              return c(), y.push(e),
                    function() {
                      if (t) {
                          t = !1, c();
                          var n = y.indexOf(e);
                          y.splice(n, 1);
                        }
                    };
            }

          function p(e) {
              if (!n.i(o.a)(e)) throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
              if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (b) throw new Error('Reducers may not dispatch actions.');
              try {
                  b = !0, m = v(m, e);
                } finally {
                  b = !1;
                }
              for (var t = g = y, r = 0; r < t.length; r++) t[r]();
              return e;
            }

          function f(e) {
              if ('function' != typeof e) throw new Error('Expected the nextReducer to be a function.');
              v = e, p({
                  type: a.INIT,
                });
            }

          function h() {
              var e, t = l;
              return e = {
                  subscribe: function(e) {
                      function n() {
                          e.next && e.next(u());
                        }
                      if ('object' != typeof e) throw new TypeError('Expected the observer to be an object.');
                      return n(), {
                          unsubscribe: t(n),
                        };
                    },
                }, e[s.a] = function() {
                  return this;
                }, e;
            }
          var d;
          if ('function' == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
              if ('function' != typeof i) throw new Error('Expected the enhancer to be a function.');
              return i(r)(e, t);
            }
          if ('function' != typeof e) throw new Error('Expected the reducer to be a function.');
          var v = e,
              m = t,
              g = [],
              y = g,
              b = !1;
          return p({
              type: a.INIT,
            }), d = {
              dispatch: p,
              subscribe: l,
              getState: u,
              replaceReducer: f,
            }, d[s.a] = h, d;
        }
      n.d(t, 'a', function() {
          return a;
        }), t.b = r;
      var o = n(66),
          i = n(485),
          s = n.n(i),
          a = {
              INIT: '@@redux/INIT',
            };
    }, function(e, t, n) {
      'use strict';
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = function() {
              function e(e, t, n) {
                  this.kind = e, this.value = t, this.error = n, this.hasValue = 'N' === e;
                }
              return e.prototype.observe = function(e) {
                  switch (this.kind) {
                    case 'N':
                      return e.next && e.next(this.value);
                    case 'E':
                      return e.error && e.error(this.error);
                    case 'C':
                      return e.complete && e.complete();
                    }
                }, e.prototype.do = function(e, t, n) {
                  switch (this.kind) {
                    case 'N':
                      return e && e(this.value);
                    case 'E':
                      return t && t(this.error);
                    case 'C':
                      return n && n();
                    }
                }, e.prototype.accept = function(e, t, n) {
                  return e && 'function' == typeof e.next ? this.observe(e) : this.do(e, t, n);
                }, e.prototype.toObservable = function() {
                  switch (this.kind) {
                    case 'N':
                      return r.Observable.of(this.value);
                    case 'E':
                      return r.Observable.throw(this.error);
                    case 'C':
                      return r.Observable.empty();
                    }
                  throw new Error('unexpected notification kind value');
                }, e.createNext = function(t) {
                  return void 0 !== t ? new e('N', t) : this.undefinedValueNotification;
                }, e.createError = function(t) {
                  return new e('E', void 0, t);
                }, e.createComplete = function() {
                  return this.completeNotification;
                }, e.completeNotification = new e('C'), e.undefinedValueNotification = new e('N', void 0), e;
            }();
      t.Notification = o;
    }, function(e, t, n) {
      'use strict';
      t.empty = {
          closed: !0,
          next: function(e) {},
          error: function(e) {
              throw e;
            },
          complete: function() {},
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(457);
      r.Observable.empty = o.empty;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(173);
      r.Observable.of = o.of;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(461);
      r.Observable.prototype.catch = o._catch, r.Observable.prototype._catch = o._catch;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(464);
      r.Observable.prototype.delay = o.delay;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(465);
      r.Observable.prototype.do = o._do, r.Observable.prototype._do = o._do;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(174);
      r.Observable.prototype.filter = o.filter;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(87);
      r.Observable.prototype.map = o.map;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(467);
      r.Observable.prototype.mergeMap = o.mergeMap, r.Observable.prototype.flatMap = o.mergeMap;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = function(e) {
              function t(t, n) {
                  e.call(this), this.value = t, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1);
                }
              return r(t, e), t.create = function(e, n) {
                  return new t(e, n);
                }, t.dispatch = function(e) {
                  var t = e.done,
                      n = e.value,
                      r = e.subscriber;
                  if (t) return void r.complete();
                  r.next(n), r.closed || (e.done = !0, this.schedule(e));
                }, t.prototype._subscribe = function(e) {
                  var n = this.value,
                      r = this.scheduler;
                  if (r) return r.schedule(t.dispatch, 0, {
                      done: !1,
                      value: n,
                      subscriber: e,
                    });
                  e.next(n), e.closed || e.complete();
                }, t;
            }(o.Observable);
      t.ScalarObservable = i;
    }, function(e, t, n) {
      'use strict';
      var r = n(450);
      t.from = r.FromObservable.create;
    }, function(e, t, n) {
      'use strict';
      var r = n(175);
      t.merge = r.mergeStatic;
    }, function(e, t, n) {
      'use strict';
      var r = n(50);
      t.of = r.ArrayObservable.of;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return this.lift(new s(e, t));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10);
      t.filter = r;
      var s = function() {
            function e(e, t) {
                  this.predicate = e, this.thisArg = t;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new a(e, this.predicate, this.thisArg));
                }, e;
          }(),
          a = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.predicate = n, this.thisArg = r, this.count = 0, this.predicate = n;
                }
              return o(t, e), t.prototype._next = function(e) {
                  var t;
                  try {
                      t = this.predicate.call(this.thisArg, e, this.count++);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                  t && this.destination.next(e);
                }, t;
            }(i.Subscriber);
    }, function(e, t, n) {
      'use strict';

      function r() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
          return this.lift.call(o.apply(void 0, [this].concat(e)));
        }

      function o() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
          var n = Number.POSITIVE_INFINITY,
              r = null,
              o = e[e.length - 1];
          return c.isScheduler(o) ? (r = e.pop(), e.length > 1 && 'number' == typeof e[e.length - 1] && (n = e.pop())) : 'number' == typeof o && (n = e.pop()), null === r && 1 === e.length && e[0] instanceof i.Observable ? e[0] : new s.ArrayObservable(e, r).lift(new a.MergeAllOperator(n));
        }
      var i = n(0),
          s = n(50),
          a = n(466),
          c = n(180);
      t.merge = r, t.mergeStatic = o;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = function(e) {
              function t() {
                  var t = e.call(this, 'object unsubscribed');
                  this.name = t.name = 'ObjectUnsubscribedError', this.stack = t.stack, this.message = t.message;
                }
              return r(t, e), t;
            }(Error);
      t.ObjectUnsubscribedError = o;
    }, function(e, t, n) {
      'use strict';
      t.isArrayLike = function(e) {
          return e && 'number' == typeof e.length;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return null != e && 'object' == typeof e;
        }
      t.isObject = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
        }
      t.isPromise = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e && 'function' == typeof e.schedule;
        }
      t.isScheduler = r;
    }, function(e, t) {
      e.exports = /[\0-\x1F\x7F-\x9F]/;
    }, function(e, t) {
      e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    }, function(e, t) {
      e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }, function(e, t) {
      e.exports = function(e) {
          return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                  return e.l;
                },
            }), Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                  return e.i;
                },
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(334),
          s = n(16);
      t.App = function(e, t) {
          s.konsole.log('BotChat.App props', e), i.render(o.createElement(a, e), t);
        };
      var a = function(e) {
          return o.createElement('div', {
              className: 'wc-app',
            }, o.createElement(s.Chat, r.__assign({}, e)));
        };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e() {}
          return e;
        }();
      t.SpeechOptions = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(63),
          o = n(105)(6),
          i = 'findIndex',
          s = !0;
      i in [] && Array(1)[i](function() {
          s = !1;
        }), r(r.P + r.F * s, 'Array', {
          findIndex: function(e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }), n(104)(i);
    }, function(e, t, n) {
      'use strict';
      var r = n(63),
          o = n(105)(5),
          i = !0;
      'find' in [] && Array(1).find(function() {
          i = !1;
        }), r(r.P + r.F * i, 'Array', {
          find: function(e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }), n(104)('find');
    }, function(e, t, n) {
      'use strict';
      var r = n(63),
          o = n(110),
          i = n(252),
          s = ''.startsWith;
      r(r.P + r.F * n(242)('startsWith'), 'String', {
          startsWith: function(e) {
              var t = i(this, e, 'startsWith'),
                  n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                  r = String(e);
              return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
            },
        });
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var o = n(41);
      n(7).Events.Instance.AttachListener(new o.ConsoleLoggingListener), r(n(7)), r(n(41)), r(n(58)), r(n(217));
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e(e) {
                  void 0 === e && (e = r.EventType.Warning);
                  var t = this;
                  this.OnEvent = function(e) {
                      if (e.EventType >= t.logLevelFilter) {
                          var n = t.ToString(e);
                          switch (e.EventType) {
                            case r.EventType.Debug:
                              console.debug(n);
                              break;
                            case r.EventType.Info:
                              console.info(n);
                              break;
                            case r.EventType.Warning:
                              console.warn(n);
                              break;
                            case r.EventType.Error:
                              console.error(n);
                              break;
                            default:
                              console.log(n);
                            }
                        }
                    }, this.ToString = function(e) {
                      var t = ['' + e.EventTime];
                      e.constructor && e.constructor.name && t.push('' + e.constructor.name);
                      for (var n in e)
                          if (n && 'EventTime' !== n && 'EventType' !== n && 'EventId' !== n && 'constructor' !== n) {
                              var r = e[n],
                                  o = '<NULL>';
                              void 0 !== r && null !== r && (o = 'number' == typeof r || 'string' == typeof r ? r.toString() : JSON.stringify(r)), t.push(n + ': ' + o);
                            }
                      return t.join(' | ');
                    }, this.logLevelFilter = e;
                }
              return e;
            }();
      t.ConsoleLoggingListener = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e() {
                  this.Get = function(e) {
                      if (!e) throw new r.ArgumentNullError('key');
                      return localStorage.getItem(e);
                    }, this.GetOrAdd = function(e, t) {
                      if (!e) throw new r.ArgumentNullError('key');
                      var n = localStorage.getItem(e);
                      return null !== n && void 0 !== n || localStorage.setItem(e, t), localStorage.getItem(e);
                    }, this.Set = function(e, t) {
                      if (!e) throw new r.ArgumentNullError('key');
                      localStorage.setItem(e, t);
                    }, this.Remove = function(e) {
                      if (!e) throw new r.ArgumentNullError('key');
                      localStorage.removeItem(e);
                    };
                }
              return e;
            }();
      t.LocalStorage = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e(e, t) {
                  var n = this;
                  this.streams = {}, this.TurnOn = function() {
                      if (n.initializeDeferral) return n.initializeDeferral.Promise();
                      n.initializeDeferral = new r.Deferred;
                      window.navigator;
                      if (window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia, window.navigator.getUserMedia) n.OnEvent(new r.AudioSourceInitializingEvent(n.id)), window.navigator.getUserMedia({
                          audio: !0,
                        }, function(e) {
                          n.mediaStream = e, n.OnEvent(new r.AudioSourceReadyEvent(n.id)), n.initializeDeferral.Resolve(!0);
                        }, function(e) {
                          var t = 'Error occured processing the user media stream. ' + e;
                          n.initializeDeferral.Reject(t), n.OnEvent(new r.AudioSourceErrorEvent(n.id, t));
                        });
                      else {
                          var e = 'Browser doesnot support getUserMedia.';
                          n.initializeDeferral.Reject(e), n.OnEvent(new r.AudioSourceErrorEvent(e, ''));
                        }
                      return n.initializeDeferral.Promise();
                    }, this.Id = function() {
                      return n.id;
                    }, this.Attach = function(e) {
                      return n.OnEvent(new r.AudioStreamNodeAttachingEvent(n.id, e)), n.Listen(e).OnSuccessContinueWith(function(t) {
                          return n.OnEvent(new r.AudioStreamNodeAttachedEvent(n.id, e)), {
                              Detach: function() {
                                  t.Close(), delete n.streams[e], n.OnEvent(new r.AudioStreamNodeDetachedEvent(n.id, e)), n.TurnOff();
                                },
                              Id: function() {
                                  return e;
                                },
                              Read: function() {
                                  return t.Read();
                                },
                            };
                        });
                    }, this.Detach = function(e) {
                      e && n.streams[e] && (n.streams[e].Close(), delete n.streams[e], n.OnEvent(new r.AudioStreamNodeDetachedEvent(n.id, e)));
                    }, this.TurnOff = function() {
                      for (var e in n.streams)
                          if (e) {
                              var t = n.streams[e];
                              t && t.Close();
                            }
                      return n.recorder.ReleaseMediaResources(), n.OnEvent(new r.AudioSourceOffEvent(n.id)), n.initializeDeferral = null, r.PromiseHelper.FromResult(!0);
                    }, this.Listen = function(e) {
                      return n.TurnOn().OnSuccessContinueWith(function(t) {
                          var o = new r.Stream(e);
                          n.streams[e] = o;
                          try {
                              n.recorder.Record(n.mediaStream, o);
                            } catch (t) {
                              var i = 'Error occured processing the user media stream. ' + t;
                              n.initializeDeferral.Reject(i), n.OnEvent(new r.AudioStreamNodeErrorEvent(n.id, e, t));
                            }
                          return o.GetReader();
                        });
                    }, this.OnEvent = function(e) {
                      n.events.OnEvent(e), r.Events.Instance.OnEvent(e);
                    }, this.id = t || r.CreateNoDashGuid(), this.events = new r.EventSource, this.recorder = e;
                }
              return Object.defineProperty(e.prototype, 'Events', {
                  get: function() {
                      return this.events;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.MicAudioSource = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e(e) {
              var t = this;
              this.Record = function(e, n) {
                  var r = new MediaRecorder(e, t.mediaRecorderOptions);
                  r.ondataavailable = function(e) {
                      if (n) {
                          var t = new FileReader;
                          t.readAsArrayBuffer(e.data), t.onloadend = function(e) {
                              n.Write(t.result);
                            };
                        }
                    }, t.mediaResources = {
                      recorder: r,
                      stream: e,
                    }, r.start(100);
                }, this.ReleaseMediaResources = function() {
                  'inactive' !== t.mediaResources.recorder.state && t.mediaResources.recorder.stop(), t.mediaResources.stream.getTracks().forEach(function(e) {
                      return e.stop();
                    });
                }, this.mediaRecorderOptions = e;
            }
          return e;
        }();
      t.OpusRecorder = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e() {
                  var e = this;
                  this.Record = function(t, n) {
                      var o = new AudioContext,
                          i = o.createMediaStreamSource(t),
                          s = 2048,
                          a = !1;
                      64e3 <= i.context.sampleRate ? s = 8192 : 32e3 <= i.context.sampleRate && (s = 4096);
                      var c = i.context.createScriptProcessor(s, 1, 1),
                          u = new r.RiffPcmEncoder(i.context.sampleRate, 16e3);
                      c.onaudioprocess = function(e) {
                          var t, r, o = e.inputBuffer.getChannelData(0);
                          n && (a ? (r || (r = u.Encode(!1, o)), n.Write(r)) : (t || (t = u.Encode(!0, o)), n.Write(t), a = !0));
                        }, e.mediaResources = {
                          context: o,
                          scriptProcessorNode: c,
                          source: i,
                          stream: t,
                        }, i.connect(c), c.connect(i.context.destination);
                    }, this.ReleaseMediaResources = function() {
                      e.mediaResources && (e.mediaResources.scriptProcessorNode && (e.mediaResources.scriptProcessorNode.disconnect(), e.mediaResources.scriptProcessorNode = null), e.mediaResources.source && (e.mediaResources.source.disconnect(), e.mediaResources.stream.getTracks().forEach(function(e) {
                          return e.stop();
                        }), e.mediaResources.source = null), e.mediaResources.context && 'closed' !== e.mediaResources.context.state && e.mediaResources.context.close());
                    };
                }
              return e;
            }();
      t.PcmRecorder = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = function() {
              function e() {
                  this.Get = function(e) {
                      if (!e) throw new r.ArgumentNullError('key');
                      return sessionStorage.getItem(e);
                    }, this.GetOrAdd = function(e, t) {
                      if (!e) throw new r.ArgumentNullError('key');
                      var n = sessionStorage.getItem(e);
                      return null !== n && void 0 !== n || sessionStorage.setItem(e, t), sessionStorage.getItem(e);
                    }, this.Set = function(e, t) {
                      if (!e) throw new r.ArgumentNullError('key');
                      sessionStorage.setItem(e, t);
                    }, this.Remove = function(e) {
                      if (!e) throw new r.ArgumentNullError('key');
                      sessionStorage.removeItem(e);
                    };
                }
              return e;
            }();
      t.SessionStorage = o;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e(e, t) {
              var n = this;
              this.start = function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  n.timerId && n.stop(), n.timerId = setTimeout(n.successCallback, n.delayInMillisec, e);
                }, this.stop = function() {
                  clearTimeout(n.timerId);
                }, this.delayInMillisec = e, this.successCallback = t;
            }
          return e;
        }();
      t.Timer = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = n(94),
          i = function() {
              function e(e, t, n, i, s) {
                  var a = this;
                  if (this.isDisposed = !1, this.Dispose = function() {
                      a.isDisposed = !0, a.connectionMessageAdapter && a.connectionMessageAdapter.Close();
                    }, this.IsDisposed = function() {
                          return a.isDisposed;
                        }, this.State = function() {
                          return a.connectionMessageAdapter.State;
                        }, this.Open = function() {
                          return a.connectionMessageAdapter.Open();
                        }, this.Send = function(e) {
                          return a.connectionMessageAdapter.Send(e);
                        }, this.Read = function() {
                          return a.connectionMessageAdapter.Read();
                        }, !e) throw new r.ArgumentNullError('uri');
                  if (!i) throw new r.ArgumentNullError('messageFormatter');
                  this.messageFormatter = i;
                  var c = '',
                      u = 0;
                  if (t)
                      for (var l in t)
                          if (l) {
                              c += 0 === u ? '?' : '&';
                              var p = encodeURIComponent(t[l]);
                              c += l + '=' + p, u++;
                            }
                  if (n)
                      for (var f in n)
                          if (f) {
                              c += 0 === u ? '?' : '&';
                              var p = encodeURIComponent(n[f]);
                              c += f + '=' + p, u++;
                            }
                  this.uri = e + c, this.id = s || r.CreateNoDashGuid(), this.connectionMessageAdapter = new o.WebsocketMessageAdapter(this.uri, this.Id, this.messageFormatter);
                }
              return Object.defineProperty(e.prototype, 'Id', {
                  get: function() {
                      return this.id;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'Events', {
                  get: function() {
                      return this.connectionMessageAdapter.Events;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.WebsocketConnection = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(57),
          i = function(e) {
              function t(t, n) {
                  void 0 === n && (n = o.EventType.Info);
                  var r = e.call(this, n) || this;
                  return r.audioSourceId = t, r;
                }
              return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioSourceId', {
                  get: function() {
                      return this.audioSourceId;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), t;
            }(o.PlatformEvent);
      t.AudioSourceEvent = i;
      var s = function(e) {
          function t(t) {
              return e.call(this, t) || this;
            }
          return r.__extends(t, e), t;
        }(i);
      t.AudioSourceInitializingEvent = s;
      var a = function(e) {
          function t(t) {
              return e.call(this, t) || this;
            }
          return r.__extends(t, e), t;
        }(i);
      t.AudioSourceReadyEvent = a;
      var c = function(e) {
          function t(t) {
              return e.call(this, t) || this;
            }
          return r.__extends(t, e), t;
        }(i);
      t.AudioSourceOffEvent = c;
      var u = function(e) {
          function t(t, n) {
              var r = e.call(this, t, o.EventType.Error) || this;
              return r.error = n, r;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Error', {
              get: function() {
                  return this.error;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.AudioSourceErrorEvent = u;
      var l = function(e) {
          function t(t, n) {
              var r = e.call(this, t) || this;
              return r.audioNodeId = n, r;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.AudioStreamNodeEvent = l;
      var p = function(e) {
          function t(t, n) {
              return e.call(this, t, n) || this;
            }
          return r.__extends(t, e), t;
        }(l);
      t.AudioStreamNodeAttachingEvent = p;
      var f = function(e) {
          function t(t, n) {
              return e.call(this, t, n) || this;
            }
          return r.__extends(t, e), t;
        }(l);
      t.AudioStreamNodeAttachedEvent = f;
      var h = function(e) {
          function t(t, n) {
              return e.call(this, t, n) || this;
            }
          return r.__extends(t, e), t;
        }(l);
      t.AudioStreamNodeDetachedEvent = h;
      var d = function(e) {
          function t(t, n, r) {
              var o = e.call(this, t, n) || this;
              return o.error = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Error', {
              get: function() {
                  return this.error;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(l);
      t.AudioStreamNodeErrorEvent = d;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(57),
          i = function(e) {
              function t(t, n) {
                  void 0 === n && (n = o.EventType.Info);
                  var r = e.call(this, n) || this;
                  return r.connectionId = t, r;
                }
              return r.__extends(t, e), Object.defineProperty(t.prototype, 'ConnectionId', {
                  get: function() {
                      return this.connectionId;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), t;
            }(o.PlatformEvent);
      t.ConnectionEvent = i;
      var s = function(e) {
          function t(t, n, r) {
              var o = e.call(this, t) || this;
              return o.uri = n, o.headers = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Uri', {
              get: function() {
                  return this.uri;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'Headers', {
              get: function() {
                  return this.headers;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectionStartEvent = s;
      var a = function(e) {
          function t(t, n) {
              return e.call(this, t) || this;
            }
          return r.__extends(t, e), t;
        }(i);
      t.ConnectionEstablishedEvent = a;
      var c = function(e) {
          function t(t, n, r) {
              var i = e.call(this, t, o.EventType.Warning) || this;
              return i.reason = r, i.statusCode = n, i;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Reason', {
              get: function() {
                  return this.reason;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'StatusCode', {
              get: function() {
                  return this.statusCode;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectionClosedEvent = c;
      var u = function(e) {
          function t(t, n, r) {
              var i = e.call(this, t, o.EventType.Error) || this;
              return i.statusCode = n, i.reason = r, i;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'Reason', {
              get: function() {
                  return this.reason;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'StatusCode', {
              get: function() {
                  return this.statusCode;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectionEstablishErrorEvent = u;
      var l = function(e) {
          function t(t, n, r) {
              var o = e.call(this, t) || this;
              return o.networkReceivedTime = n, o.message = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'NetworkReceivedTime', {
              get: function() {
                  return this.networkReceivedTime;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'Message', {
              get: function() {
                  return this.message;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectionMessageReceivedEvent = l;
      var p = function(e) {
          function t(t, n, r) {
              var o = e.call(this, t) || this;
              return o.networkSentTime = n, o.message = r, o;
            }
          return r.__extends(t, e), Object.defineProperty(t.prototype, 'NetworkSentTime', {
              get: function() {
                  return this.networkSentTime;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(t.prototype, 'Message', {
              get: function() {
                  return this.message;
                },
              enumerable: !0,
              configurable: !0,
            }), t;
        }(i);
      t.ConnectionMessageSentEvent = p;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e(e, t) {
              this.statusCode = e, this.reason = t;
            }
          return Object.defineProperty(e.prototype, 'StatusCode', {
              get: function() {
                  return this.statusCode;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'Reason', {
              get: function() {
                  return this.reason;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.ConnectionOpenResponse = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = n(96),
          i = function() {
              function e() {}
              return Object.defineProperty(e, 'Instance', {
                  get: function() {
                      return e.instance;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      i.instance = new o.EventSource, i.SetEventSource = function(e) {
          if (!e) throw new r.ArgumentNullError('eventSource');
          i.instance = e;
        }, t.Events = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      ! function(e) {
          e[e.None = 0] = 'None', e[e.Connected = 1] = 'Connected', e[e.Connecting = 2] = 'Connecting', e[e.Disconnected = 3] = 'Disconnected';
        }(t.ConnectionState || (t.ConnectionState = {}));
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(95),
          o = n(13),
          i = n(24),
          s = function() {
              function e(e, t, n) {
                  if (this.payload = null, !t) throw new o.ArgumentNullError('payload');
                  if (e === r.MessageType.Binary && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError('Payload must be ArrayBuffer');
                  if (e === r.MessageType.Text && 'string' != typeof t) throw new o.InvalidOperationError('Payload must be a string');
                  this.messageType = e, this.payload = t, this.id = n || i.CreateNoDashGuid();
                }
              return Object.defineProperty(e.prototype, 'MessageType', {
                  get: function() {
                      return this.messageType;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'Payload', {
                  get: function() {
                      return this.payload;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'TextContent', {
                  get: function() {
                      if (this.messageType === r.MessageType.Binary) throw new o.InvalidOperationError('Not supported for binary message');
                      return this.payload;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'BinaryContent', {
                  get: function() {
                      if (this.messageType === r.MessageType.Text) throw new o.InvalidOperationError('Not supported for text message');
                      return this.payload;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'Id', {
                  get: function() {
                      return this.id;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.RawWebsocketMessage = s;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = function() {
          function e(e, t) {
              var n = this;
              this.channelCount = 1, this.Encode = function(e, t) {
                  var r = n.DownSampleAudioFrame(t, n.actualSampleRate, n.desiredSampleRate),
                      o = 2 * r.length;
                  if (!e) {
                      var i = new ArrayBuffer(o),
                          s = new DataView(i);
                      return n.FloatTo16BitPCM(s, 0, r), i;
                    }
                  var a = new ArrayBuffer(44 + o),
                      c = new DataView(a);
                  return n.SetString(c, 0, 'RIFF'), c.setUint32(4, 0, !0), n.SetString(c, 8, 'WAVEfmt '), c.setUint32(16, 16, !0), c.setUint16(20, 1, !0), c.setUint16(22, n.channelCount, !0), c.setUint32(24, n.desiredSampleRate, !0), c.setUint32(28, n.desiredSampleRate * n.channelCount * 2, !0), c.setUint16(32, 2 * n.channelCount, !0), c.setUint16(34, 16, !0), n.SetString(c, 36, 'data'), c.setUint32(40, 0, !0), n.FloatTo16BitPCM(c, 44, r), a;
                }, this.SetString = function(e, t, n) {
                  for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r));
                }, this.FloatTo16BitPCM = function(e, t, n) {
                  for (var r = 0; r < n.length; r++, t += 2) {
                      var o = Math.max(-1, Math.min(1, n[r]));
                      e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0);
                    }
                }, this.DownSampleAudioFrame = function(e, t, n) {
                  if (n === t || n > t) return e;
                  for (var r = t / n, o = Math.round(e.length / r), i = new Float32Array(o), s = 0, a = 0; s < i.length;) {
                      for (var c = Math.round((s + 1) * r), u = 0, l = 0, p = a; p < c && p < e.length; p++) u += e[p], l++;
                      i[s] = u / l, s++, a = c;
                    }
                  return i;
                }, this.actualSampleRate = e, this.desiredSampleRate = t;
            }
          return e;
        }();
      t.RiffPcmEncoder = r;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = n(97),
          i = function() {
              function e() {}
              return Object.defineProperty(e, 'Session', {
                  get: function() {
                      return e.sessionStorage;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e, 'Local', {
                  get: function() {
                      return e.localStorage;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      i.sessionStorage = new o.InMemoryStorage, i.localStorage = new o.InMemoryStorage, i.SetSessionStorage = function(e) {
          if (!e) throw new r.ArgumentNullError('sessionStorage');
          i.sessionStorage = e;
        }, i.SetLocalStorage = function(e) {
          if (!e) throw new r.ArgumentNullError('localStorage');
          i.localStorage = e;
        }, t.Storage = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(13),
          o = n(24),
          i = n(100),
          s = function() {
              function e(e) {
                  var t = this;
                  this.readerIdCounter = 1, this.isEnded = !1, this.Write = function(e) {
                      t.ThrowIfClosed(), t.WriteStreamChunk({
                          Buffer: e,
                          IsEnd: !1,
                        });
                    }, this.GetReader = function() {
                      var e = t.readerIdCounter;
                      t.readerIdCounter++;
                      var n = new i.Queue,
                          r = t.streambuffer.length;
                      t.readerQueues[e] = n;
                      for (var o = 0; o < r; o++) n.Enqueue(t.streambuffer[o]);
                      return new a(t.id, n, function() {
                          delete t.readerQueues[e];
                        });
                    }, this.Close = function() {
                      t.isEnded || (t.WriteStreamChunk({
                          Buffer: null,
                          IsEnd: !0,
                        }), t.isEnded = !0);
                    }, this.WriteStreamChunk = function(e) {
                      t.ThrowIfClosed(), t.streambuffer.push(e);
                      for (var n in t.readerQueues)
                          if (!t.readerQueues[n].IsDisposed()) try {
                              t.readerQueues[n].Enqueue(e);
                            } catch (e) {}
                    }, this.ThrowIfClosed = function() {
                      if (t.isEnded) throw new r.InvalidOperationError('Stream closed');
                    }, this.id = e || o.CreateNoDashGuid(), this.streambuffer = [], this.readerQueues = {};
                }
              return Object.defineProperty(e.prototype, 'IsClosed', {
                  get: function() {
                      return this.isEnded;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(e.prototype, 'Id', {
                  get: function() {
                      return this.id;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.Stream = s;
      var a = function() {
          function e(e, t, n) {
              var o = this;
              this.isClosed = !1, this.Read = function() {
                  if (o.IsClosed) throw new r.InvalidOperationError('StreamReader closed');
                  return o.readerQueue.Dequeue().OnSuccessContinueWith(function(e) {
                      return e.IsEnd && o.readerQueue.Dispose('End of stream reached'), e;
                    });
                }, this.Close = function() {
                  o.isClosed || (o.isClosed = !0, o.readerQueue.Dispose('StreamReader closed'), o.onClose());
                }, this.readerQueue = t, this.onClose = n, this.streamId = e;
            }
          return Object.defineProperty(e.prototype, 'IsClosed', {
              get: function() {
                  return this.isClosed;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'StreamId', {
              get: function() {
                  return this.streamId;
                },
              enumerable: !0,
              configurable: !0,
            }), e;
        }();
      t.StreamReader = a;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), r(n(218)), r(n(101));
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(41),
          o = n(58),
          i = n(101),
          s = function(e, t) {
              return a(e, t);
            };
      t.CreateRecognizer = s;
      var a = function(e, t) {
          return c(e, t, new r.MicAudioSource(new r.PcmRecorder));
        };
      t.CreateRecognizerWithPcmRecorder = a;
      var c = function(e, t, n) {
          return new o.Recognizer(t, new i.SpeechConnectionFactory, n, e);
        };
      t.CreateRecognizerWithCustomAudioSource = c;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = n(59),
          i = 'Ocp-Apim-Subscription-Key',
          s = function() {
              function e(e) {
                  var t = this;
                  if (this.Fetch = function(e) {
                      return r.PromiseHelper.FromResult(t.authInfo);
                    }, this.FetchOnExpiry = function(e) {
                          return r.PromiseHelper.FromResult(t.authInfo);
                        }, !e) throw new r.ArgumentNullError('subscriptionKey');
                  this.authInfo = new o.AuthInfo(i, e);
                }
              return e;
            }();
      t.CognitiveSubscriptionKeyAuthentication = s;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = n(59),
          i = 'Authorization',
          s = function() {
              function e(e, t) {
                  var n = this;
                  if (this.Fetch = function(e) {
                      return n.fetchCallback(e).OnSuccessContinueWith(function(e) {
                              return new o.AuthInfo(i, e);
                            });
                    }, this.FetchOnExpiry = function(e) {
                          return n.fetchOnExpiryCallback(e).OnSuccessContinueWith(function(e) {
                              return new o.AuthInfo(i, e);
                            });
                        }, !e) throw new r.ArgumentNullError('fetchCallback');
                  if (!t) throw new r.ArgumentNullError('fetchOnExpiryCallback');
                  this.fetchCallback = e, this.fetchOnExpiryCallback = t;
                }
              return e;
            }();
      t.CognitiveTokenAuthentication = s;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = n(60),
          i = n(102),
          s = n(223),
          a = n(224),
          c = function() {
              function e(e, t, n, o) {
                  var s = this;
                  if (this.Recognize = function(e, t) {
                      var n = new u(s.audioSource.Id(), e);
                      return n.ListenForServiceTelemetry(s.audioSource.Events), s.audioSource.Attach(n.AudioNodeId).ContinueWithPromise(function(e) {
                              if (e.IsError) throw n.OnAudioSourceAttachCompleted(null, !0, e.Error), new Error(e.Error);
                              n.OnAudioSourceAttachCompleted(e.Result, !1);
                              var o = e.Result;
                              return s.FetchConnection(n).OnSuccessContinueWith(function(e) {
                                  var i = s.ReceiveMessage(e, n),
                                      a = s.SendSpeechConfig(n.RequestId, e, s.recognizerConfig.SpeechConfig.Serialize()).OnSuccessContinueWithPromise(function(r) {
                                          return s.SendSpeechContext(n.RequestId, e, t).OnSuccessContinueWithPromise(function(t) {
                                              return s.SendAudio(n.RequestId, e, o, n);
                                            });
                                        }),
                                      c = r.PromiseHelper.WhenAll([i, a]);
                                  return c.On(function(t) {
                                      n.Dispose(), s.SendTelemetryData(n.RequestId, e, n.GetTelemetry());
                                    }, function(t) {
                                      n.Dispose(t), s.SendTelemetryData(n.RequestId, e, n.GetTelemetry());
                                    }), c;
                                }), n.CompletionPromise;
                            });
                    }, this.FetchConnection = function(e, t) {
                          if (void 0 === t && (t = !1), s.connectionFetchPromise) return s.connectionFetchPromise.Result().IsError || s.connectionFetchPromise.Result().Result.State() === r.ConnectionState.Disconnected ? (s.connectionId = null, s.connectionFetchPromise = null, s.FetchConnection(e)) : (e.OnPreConnectionStart(s.authFetchEventId, s.connectionId), e.OnConnectionEstablishCompleted(200), e.ListenForServiceTelemetry(s.connectionFetchPromise.Result().Result.Events), s.connectionFetchPromise);
                          s.authFetchEventId = r.CreateNoDashGuid(), s.connectionId = r.CreateNoDashGuid(), e.OnPreConnectionStart(s.authFetchEventId, s.connectionId);
                          var n = t ? s.authentication.FetchOnExpiry(s.authFetchEventId) : s.authentication.Fetch(s.authFetchEventId);
                          return s.connectionFetchPromise = n.ContinueWithPromise(function(n) {
                              if (n.IsError) throw e.OnAuthCompleted(!0, n.Error), new Error(n.Error);
                              e.OnAuthCompleted(!1);
                              var o = s.connectionFactory.Create(s.recognizerConfig, n.Result, s.connectionId);
                              return e.ListenForServiceTelemetry(o.Events), o.Open().OnSuccessContinueWithPromise(function(n) {
                                  return 200 === n.StatusCode ? (e.OnConnectionEstablishCompleted(n.StatusCode), r.PromiseHelper.FromResult(o)) : 403 !== n.StatusCode || t ? (e.OnConnectionEstablishCompleted(n.StatusCode, n.Reason), r.PromiseHelper.FromError('Unable to contact server. StatusCode: ' + n.StatusCode + ', Reason: ' + n.Reason)) : s.FetchConnection(e, !0);
                                });
                            }), s.connectionFetchPromise;
                        }, this.ReceiveMessage = function(e, t) {
                          return e.Read().OnSuccessContinueWithPromise(function(n) {
                              var o = a.SpeechConnectionMessage.FromConnectionMessage(n);
                              if (o.RequestId.toLowerCase() === t.RequestId.toLowerCase()) switch (o.Path.toLowerCase()) {
                                case 'turn.start':
                                  t.OnServiceTurnStartResponse(JSON.parse(o.TextBody));
                                  break;
                                case 'speech.startDetected':
                                  t.OnServiceSpeechStartDetectedResponse(JSON.parse(o.TextBody));
                                  break;
                                case 'speech.hypothesis':
                                  t.OnServiceSpeechHypothesisResponse(JSON.parse(o.TextBody));
                                  break;
                                case 'speech.enddetected':
                                  t.OnServiceSpeechEndDetectedResponse(JSON.parse(o.TextBody));
                                  break;
                                case 'speech.phrase':
                                  s.recognizerConfig.IsContinuousRecognition && s.SendTelemetryData(t.RequestId, e, t.GetTelemetry()), s.recognizerConfig.Format === i.SpeechResultFormat.Simple ? t.OnServiceSimpleSpeechPhraseResponse(JSON.parse(o.TextBody)) : t.OnServiceDetailedSpeechPhraseResponse(JSON.parse(o.TextBody));
                                  break;
                                case 'turn.end':
                                  return t.OnServiceTurnEndResponse(), r.PromiseHelper.FromResult(!0);
                                }
                              return s.ReceiveMessage(e, t);
                            });
                        }, this.SendSpeechConfig = function(e, t, n) {
                          return n && s.connectionId !== s.speechConfigConnectionId ? (s.speechConfigConnectionId = s.connectionId, t.Send(new a.SpeechConnectionMessage(r.MessageType.Text, 'speech.config', e, 'application/json', n))) : r.PromiseHelper.FromResult(!0);
                        }, this.SendSpeechContext = function(e, t, n) {
                          return n ? t.Send(new a.SpeechConnectionMessage(r.MessageType.Text, 'speech.context', e, 'application/json', n)) : r.PromiseHelper.FromResult(!0);
                        }, this.SendTelemetryData = function(e, t, n) {
                          return t.Send(new a.SpeechConnectionMessage(r.MessageType.Text, 'telemetry', e, 'application/json', n));
                        }, this.SendAudio = function(e, t, n, o) {
                          return n.Read().OnSuccessContinueWithPromise(function(i) {
                              return o.IsSpeechEnded ? r.PromiseHelper.FromResult(!0) : i.IsEnd ? t.Send(new a.SpeechConnectionMessage(r.MessageType.Binary, 'audio', e, null, null)) : t.Send(new a.SpeechConnectionMessage(r.MessageType.Binary, 'audio', e, null, i.Buffer)).OnSuccessContinueWithPromise(function(r) {
                                  return s.SendAudio(e, t, n, o);
                                });
                            });
                        }, !e) throw new r.ArgumentNullError('authentication');
                  if (!t) throw new r.ArgumentNullError('connectionFactory');
                  if (!n) throw new r.ArgumentNullError('audioSource');
                  if (!o) throw new r.ArgumentNullError('recognizerConfig');
                  this.authentication = e, this.connectionFactory = t, this.audioSource = n, this.recognizerConfig = o;
                }
              return Object.defineProperty(e.prototype, 'AudioSource', {
                  get: function() {
                      return this.audioSource;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), e;
            }();
      t.Recognizer = c;
      var u = function() {
          function e(e, t) {
              var n = this;
              this.isDisposed = !1, this.detachables = new Array, this.isAudioNodeDetached = !1, this.isCompleted = !1, this.OnAudioSourceAttachCompleted = function(e, t, r) {
                  n.audioNode = e, t ? n.OnComplete(o.RecognitionCompletionStatus.AudioSourceError, r) : n.OnEvent(new o.ListeningStartedEvent(n.requestId, n.audioSourceId, n.audioNodeId));
                }, this.OnPreConnectionStart = function(e, t) {
                  n.authFetchEventId = e, n.connectionId = t, n.OnEvent(new o.ConnectingToServiceEvent(n.requestId, n.authFetchEventId, n.connectionId));
                }, this.OnAuthCompleted = function(e, t) {
                  e && n.OnComplete(o.RecognitionCompletionStatus.AuthTokenFetchError, t);
                }, this.OnConnectionEstablishCompleted = function(e, t) {
                  if (200 === e) return void n.OnEvent(new o.RecognitionStartedEvent(n.RequestId, n.audioSourceId, n.audioNodeId, n.authFetchEventId, n.connectionId));
                  403 === e ? n.OnComplete(o.RecognitionCompletionStatus.UnAuthorized, t) : n.OnComplete(o.RecognitionCompletionStatus.ConnectError, t);
                }, this.OnServiceTurnStartResponse = function(e) {
                  e && e.context && e.context.serviceTag && (n.serviceTag = e.context.serviceTag);
                }, this.OnServiceSpeechStartDetectedResponse = function(e) {
                  n.OnEvent(new o.SpeechStartDetectedEvent(n.RequestId, e));
                }, this.OnServiceSpeechHypothesisResponse = function(e) {
                  n.OnEvent(new o.SpeechHypothesisEvent(n.RequestId, e));
                }, this.OnServiceSpeechEndDetectedResponse = function(e) {
                  n.DetachAudioNode(), n.OnEvent(new o.SpeechEndDetectedEvent(n.RequestId, e));
                }, this.OnServiceSimpleSpeechPhraseResponse = function(e) {
                  n.OnEvent(new o.SpeechSimplePhraseEvent(n.RequestId, e));
                }, this.OnServiceDetailedSpeechPhraseResponse = function(e) {
                  n.OnEvent(new o.SpeechDetailedPhraseEvent(n.RequestId, e));
                }, this.OnServiceTurnEndResponse = function() {
                  n.OnComplete(o.RecognitionCompletionStatus.Success);
                }, this.OnConnectionError = function(e) {
                  n.OnComplete(o.RecognitionCompletionStatus.UnknownError, e);
                }, this.Dispose = function(e) {
                  if (!n.isDisposed) {
                      n.OnComplete(o.RecognitionCompletionStatus.UnknownError, e), n.isDisposed = !0;
                      for (var t = 0, r = n.detachables; t < r.length; t++) {
                          r[t].Detach();
                        }
                      n.serviceTelemetryListener.Dispose();
                    }
                }, this.GetTelemetry = function() {
                  return n.serviceTelemetryListener.GetTelemetry();
                }, this.OnComplete = function(e, t) {
                  n.isCompleted || (n.isCompleted = !0, n.DetachAudioNode(), n.OnEvent(new o.RecognitionEndedEvent(n.RequestId, n.audioSourceId, n.audioNodeId, n.authFetchEventId, n.connectionId, n.serviceTag, e, t || '')));
                }, this.DetachAudioNode = function() {
                  n.isAudioNodeDetached || (n.isAudioNodeDetached = !0, n.audioNode && n.audioNode.Detach());
                }, this.OnEvent = function(e) {
                  n.serviceTelemetryListener.OnEvent(e), r.Events.Instance.OnEvent(e), n.onEventCallback && n.onEventCallback(e);
                }, this.audioSourceId = e, this.onEventCallback = t, this.requestId = r.CreateNoDashGuid(), this.audioNodeId = r.CreateNoDashGuid(), this.requestCompletionDeferral = new r.Deferred, this.serviceTelemetryListener = new s.ServiceTelemetryListener(this.requestId, this.audioSourceId, this.audioNodeId), this.OnEvent(new o.RecognitionTriggeredEvent(this.RequestId, this.audioSourceId, this.audioNodeId));
            }
          return Object.defineProperty(e.prototype, 'RequestId', {
              get: function() {
                  return this.requestId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'AudioNodeId', {
              get: function() {
                  return this.audioNodeId;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'CompletionPromise', {
              get: function() {
                  return this.requestCompletionDeferral.Promise();
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'IsSpeechEnded', {
              get: function() {
                  return this.isAudioNodeDetached;
                },
              enumerable: !0,
              configurable: !0,
            }), Object.defineProperty(e.prototype, 'IsCompleted', {
              get: function() {
                  return this.isCompleted;
                },
              enumerable: !0,
              configurable: !0,
            }), e.prototype.ListenForServiceTelemetry = function(e) {
              this.detachables.push(e.AttachListener(this.serviceTelemetryListener));
            }, e;
        }();
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = n(60),
          i = function() {
              function e(e, t, n) {
                  var i = this;
                  this.isDisposed = !1, this.listeningTriggerMetric = null, this.micMetric = null, this.connectionEstablishMetric = null, this.OnEvent = function(e) {
                      i.isDisposed || (e instanceof o.RecognitionTriggeredEvent && e.RequestId === i.requestId && (i.listeningTriggerMetric = {
                          End: e.EventTime,
                          Name: 'ListeningTrigger',
                          Start: e.EventTime,
                        }), e instanceof r.AudioStreamNodeAttachingEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof r.AudioStreamNodeAttachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof r.AudioSourceErrorEvent && e.AudioSourceId === i.audioSourceId && (i.micMetric || (i.micMetric = {
                          End: e.EventTime,
                          Error: e.Error,
                          Name: 'Microphone',
                          Start: i.micStartTime,
                        })), e instanceof r.AudioStreamNodeErrorEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
                          End: e.EventTime,
                          Error: e.Error,
                          Name: 'Microphone',
                          Start: i.micStartTime,
                        })), e instanceof r.AudioStreamNodeDetachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
                          End: e.EventTime,
                          Name: 'Microphone',
                          Start: i.micStartTime,
                        })), e instanceof o.ConnectingToServiceEvent && e.RequestId === i.requestId && (i.connectionId = e.ConnectionId), e instanceof r.ConnectionStartEvent && e.ConnectionId === i.connectionId && (i.connectionStartTime = e.EventTime), e instanceof r.ConnectionEstablishedEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
                          End: e.EventTime,
                          Id: i.connectionId,
                          Name: 'Connection',
                          Start: i.connectionStartTime,
                        })), e instanceof r.ConnectionEstablishErrorEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
                          End: e.EventTime,
                          Error: i.GetConnectionError(e.StatusCode),
                          Id: i.connectionId,
                          Name: 'Connection',
                          Start: i.connectionStartTime,
                        })), e instanceof r.ConnectionMessageReceivedEvent && e.ConnectionId === i.connectionId && e.Message && e.Message.Headers && e.Message.Headers.path && (i.receivedMessages[e.Message.Headers.path] || (i.receivedMessages[e.Message.Headers.path] = new Array), i.receivedMessages[e.Message.Headers.path].push(e.NetworkReceivedTime)));
                    }, this.GetTelemetry = function() {
                      var e = new Array;
                      i.listeningTriggerMetric && e.push(i.listeningTriggerMetric), i.micMetric && e.push(i.micMetric), i.connectionEstablishMetric && e.push(i.connectionEstablishMetric);
                      var t = {
                            Metrics: e,
                            ReceivedMessages: i.receivedMessages,
                          },
                          n = JSON.stringify(t);
                      return i.receivedMessages = {}, i.listeningTriggerMetric = null, i.micMetric = null, i.connectionEstablishMetric = null, n;
                    }, this.Dispose = function() {
                      i.isDisposed = !0;
                    }, this.GetConnectionError = function(e) {
                      switch (e) {
                        case 400:
                        case 1002:
                        case 1003:
                        case 1005:
                        case 1007:
                        case 1008:
                        case 1009:
                          return 'BadRequest';
                        case 401:
                          return 'Unauthorized';
                        case 403:
                          return 'Forbidden';
                        case 503:
                        case 1001:
                          return 'ServerUnavailable';
                        case 500:
                        case 1011:
                          return 'ServerError';
                        case 408:
                        case 504:
                          return 'Timeout';
                        default:
                          return 'statuscode:' + e.toString();
                        }
                    }, this.requestId = e, this.audioSourceId = t, this.audioNodeId = n, this.receivedMessages = {};
                }
              return e;
            }();
      t.ServiceTelemetryListener = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(7),
          i = 'path',
          s = 'content-type',
          a = 'x-requestid',
          c = 'x-timestamp',
          u = function(e) {
              function t(t, n, r, u, l, p, f) {
                  var h = this;
                  if (!n) throw new o.ArgumentNullError('path');
                  if (!r) throw new o.ArgumentNullError('requestId');
                  var d = {};
                  if (d[i] = n, d[a] = r, d[c] = (new Date).toISOString(), u && (d[s] = u), p)
                      for (var v in p) v && (d[v] = p[v]);
                  return h = f ? e.call(this, t, l, d, f) || this : e.call(this, t, l, d) || this, h.path = n, h.requestId = r, h.contentType = u, h.additionalHeaders = p, h;
                }
              return r.__extends(t, e), Object.defineProperty(t.prototype, 'Path', {
                  get: function() {
                      return this.path;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(t.prototype, 'RequestId', {
                  get: function() {
                      return this.requestId;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(t.prototype, 'ContentType', {
                  get: function() {
                      return this.contentType;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), Object.defineProperty(t.prototype, 'AdditionalHeaders', {
                  get: function() {
                      return this.additionalHeaders;
                    },
                  enumerable: !0,
                  configurable: !0,
                }), t;
            }(o.ConnectionMessage);
      u.FromConnectionMessage = function(e) {
          var t = null,
              n = null,
              r = null,
              o = {};
          if (e.Headers)
              for (var l in e.Headers) l && (l.toLowerCase() === i.toLowerCase() ? t = e.Headers[l] : l.toLowerCase() === a.toLowerCase() ? n = e.Headers[l] : l.toLowerCase() === c.toLowerCase() ? e.Headers[l] : l.toLowerCase() === s.toLowerCase() ? r = e.Headers[l] : o[l] = e.Headers[l]);
          return new u(e.MessageType, t, n, r, e.Body, o, e.Id);
        }, t.SpeechConnectionMessage = u;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      ! function(e) {
          e[e.Success = 0] = 'Success', e[e.NoMatch = 1] = 'NoMatch', e[e.InitialSilenceTimeout = 2] = 'InitialSilenceTimeout', e[e.BabbleTimeout = 3] = 'BabbleTimeout', e[e.Error = 4] = 'Error', e[e.EndOfDictation = 5] = 'EndOfDictation';
        }(t.RecognitionStatus || (t.RecognitionStatus = {}));
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(7),
          o = '\r\n',
          i = function() {
              function e() {
                  var e = this;
                  this.ToConnectionMessage = function(t) {
                      var n = new r.Deferred;
                      try {
                          if (t.MessageType === r.MessageType.Text) {
                              var o = t.TextContent,
                                  i = {},
                                  s = null;
                              if (o) {
                                  var a = o.split('\r\n\r\n');
                                  a && a.length > 0 && (i = e.ParseHeaders(a[0]), a.length > 1 && (s = a[1]));
                                }
                              n.Resolve(new r.ConnectionMessage(t.MessageType, s, i, t.Id));
                            } else if (t.MessageType === r.MessageType.Binary) {
                              var c = t.BinaryContent,
                                  i = {},
                                  s = null;
                              if (!c || c.byteLength < 2) throw new Error('Invalid binary message format. Header length missing.');
                              var u = new DataView(c),
                                  l = u.getInt16(0);
                              if (c.byteLength < l + 2) throw new Error('Invalid binary message format. Header content missing.');
                              for (var p = '', f = 0; f < l; f++) p += String.fromCharCode(u.getInt8(f + 2));
                              i = e.ParseHeaders(p), c.byteLength > l + 2 && (s = c.slice(2 + l)), n.Resolve(new r.ConnectionMessage(t.MessageType, s, i, t.Id));
                            }
                        } catch (e) {
                          n.Reject('Error formatting the message. Error: ' + e);
                        }
                      return n.Promise();
                    }, this.FromConnectionMessage = function(t) {
                      var n = new r.Deferred;
                      try {
                          if (t.MessageType === r.MessageType.Text) {
                              var i = '' + e.MakeHeaders(t) + o + (t.TextBody ? t.TextBody : '');
                              n.Resolve(new r.RawWebsocketMessage(r.MessageType.Text, i, t.Id));
                            } else if (t.MessageType === r.MessageType.Binary) {
                              var s = e.MakeHeaders(t),
                                  a = t.BinaryBody,
                                  c = new FileReader;
                              c.onload = function() {
                                  var e = new Int8Array(c.result),
                                      o = new ArrayBuffer(2 + e.byteLength + (a ? a.byteLength : 0)),
                                      i = new DataView(o);
                                  i.setInt16(0, e.length);
                                  for (var s = 0; s < e.byteLength; s++) i.setInt8(2 + s, e[s]);
                                  if (a)
                                      for (var u = new Int8Array(a), s = 0; s < u.byteLength; s++) i.setInt8(2 + e.byteLength + s, u[s]);
                                  n.Resolve(new r.RawWebsocketMessage(r.MessageType.Binary, o, t.Id));
                                }, c.onerror = function() {
                                  n.Reject('failed to load headers into file reader');
                                }, c.readAsArrayBuffer(new Blob([s]));
                            }
                        } catch (e) {
                          n.Reject('Error formatting the message. ' + e);
                        }
                      return n.Promise();
                    }, this.MakeHeaders = function(e) {
                      var t = '';
                      if (e.Headers)
                          for (var n in e.Headers) n && (t += n + ': ' + e.Headers[n] + o);
                      return t;
                    }, this.ParseHeaders = function(e) {
                      var t = {};
                      if (e) {
                          var n = e.match(/[^\r\n]+/g);
                          if (t)
                              for (var r = 0, o = n; r < o.length; r++) {
                                  var i = o[r];
                                  if (i) {
                                      var s = i.indexOf(':'),
                                          a = s > 0 ? i.substr(0, s).trim().toLowerCase() : i,
                                          c = s > 0 && i.length > s + 1 ? i.substr(s + 1).trim() : '';
                                      t[a] = c;
                                    }
                                }
                        }
                      return t;
                    };
                }
              return e;
            }();
      t.WebsocketMessageFormatter = i;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(54),
          s = n(229),
          a = n(230),
          c = function(e) {
              var t = e.attachments,
                  n = e.attachmentLayout,
                  a = r.__rest(e, ['attachments', 'attachmentLayout']);
              return t && 0 !== t.length ? 'carousel' === n ? o.createElement(s.Carousel, r.__assign({
                  attachments: t,
                }, a)) : o.createElement('div', {
                  className: 'wc-list',
                }, t.map(function(e, t) {
                  return o.createElement(i.AttachmentView, r.__assign({
                      key: t,
                      attachment: e,
                    }, a));
                })) : null;
            },
          u = function(e) {
              function t(t) {
                  return e.call(this, t) || this;
                }
              return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                  return this.props.activity !== e.activity || this.props.format !== e.format || 'message' === this.props.activity.type && 'carousel' === this.props.activity.attachmentLayout && this.props.size !== e.size;
                }, t.prototype.render = function() {
                  var e = this.props,
                      t = e.activity,
                      n = r.__rest(e, ['activity']);
                  switch (t.type) {
                    case 'message':
                      return o.createElement('div', null, o.createElement(a.FormattedText, {
                              text: t.text,
                              format: t.textFormat,
                              onImageLoad: n.onImageLoad,
                            }), o.createElement(c, r.__assign({
                              attachments: t.attachments,
                              attachmentLayout: t.attachmentLayout,
                            }, n)));
                    case 'typing':
                      return o.createElement('div', {
                              className: 'wc-typing',
                            });
                    }
                }, t;
            }(o.Component);
      t.ActivityView = u;
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(185);
      t.App = r.App;
      var o = n(16);
      t.Chat = o.Chat,
            function(e) {
              for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
            }(n(56));
      var i = n(54);
      t.queryParams = i.queryParams;
      var s = n(40);
      t.SpeechRecognition = s.SpeechRecognition;
      var a = n(55);
      t.SpeechSynthesis = a.SpeechSynthesis;
      var c = n(186);
      t.SpeechOptions = c.SpeechOptions, n(189), n(188), n(187);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(54),
          s = n(103),
          a = n(16),
          c = function(e) {
              function t(t) {
                  return e.call(this, t) || this;
                }
              return r.__extends(t, e), t.prototype.updateContentWidth = function() {
                  var e = this.props.size.width - this.props.format.carouselMargin;
                  this.root.style.width = '', this.root.offsetWidth > e && (this.root.style.width = e.toString() + 'px', this.hscroll.updateScrollButtons());
                }, t.prototype.componentDidMount = function() {
                  this.updateContentWidth();
                }, t.prototype.componentDidUpdate = function() {
                  this.updateContentWidth();
                }, t.prototype.render = function() {
                  var e = this;
                  return o.createElement('div', {
                      className: 'wc-carousel',
                      ref: function(t) {
                          return e.root = t;
                        },
                    }, o.createElement(s.HScroll, {
                      ref: function(t) {
                          return e.hscroll = t;
                        },
                      prevSvgPathData: 'M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z',
                      nextSvgPathData: 'M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z',
                      scrollUnit: 'item',
                    }, o.createElement(u, r.__assign({}, this.props))));
                }, t;
            }(o.PureComponent);
      t.Carousel = c;
      var u = function(e) {
          function t() {
              return null !== e && e.apply(this, arguments) || this;
            }
          return r.__extends(t, e), t.prototype.render = function() {
              a.konsole.log('rendering CarouselAttachments');
              var e = this.props,
                  t = (e.attachments, r.__rest(e, ['attachments']));
              return o.createElement('ul', null, this.props.attachments.map(function(e, n) {
                  return o.createElement('li', {
                      key: n,
                      className: 'wc-carousel-item',
                    }, o.createElement(i.AttachmentView, r.__assign({
                      attachment: e,
                    }, t)));
                }));
            }, t;
        }(o.PureComponent);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(281),
          o = n(12);
      t.FormattedText = function(e) {
          if (!e.text || '' === e.text) return null;
          switch (e.format) {
            case 'plain':
              return i(e.text);
            default:
              return a(e.text, e.onImageLoad);
            }
        };
      var i = function(e) {
            var t = e.replace('\r', '').split('\n'),
                  n = t.map(function(e, t) {
                      return o.createElement('span', {
                          key: t,
                        }, e, o.createElement('br', null));
                    });
            return o.createElement('span', {
                  className: 'format-plain',
                }, n);
          },
          s = new r({
              html: !0,
              linkify: !0,
              typographer: !0,
            }),
          a = function(e, t) {
              var n = e.replace(/<br\s*\/?>/gi, '\r\n\r\n'),
                  r = s.render(n);
              return o.createElement('div', {
                  className: 'format-markdown',
                  dangerouslySetInnerHTML: {
                      __html: r,
                    },
                });
            };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(49),
          s = n(227),
          a = n(16),
          c = function(e) {
              function t(t) {
                  var n = e.call(this, t) || this;
                  return n.scrollToBottom = !0, n.measurableCarousel = function() {
                      return o.createElement(h, {
                          ref: function(e) {
                              return n.carouselActivity = e;
                            },
                          activity: {
                              type: 'message',
                              id: '',
                              from: {
                                  id: '',
                                },
                              attachmentLayout: 'carousel',
                            },
                          format: null,
                          fromMe: !1,
                          onClickActivity: null,
                          onClickRetry: null,
                          selected: !1,
                          showTimestamp: !1,
                        }, o.createElement('div', {
                          style: {
                              width: n.largeWidth,
                            },
                        }, ' '));
                    }, n;
                }
              return r.__extends(t, e), t.prototype.componentWillUpdate = function() {
                  this.scrollToBottom = Math.abs(this.scrollMe.scrollHeight - this.scrollMe.scrollTop - this.scrollMe.offsetHeight) <= 1;
                }, t.prototype.componentDidUpdate = function() {
                  if (void 0 == this.props.format.carouselMargin) {
                      var e = p(this.carouselActivity.messageDiv) - this.largeWidth,
                          t = this.carouselActivity.messageDiv.offsetParent.offsetWidth - e,
                          n = this.props.size.width - t;
                      a.konsole.log('history measureMessage ' + n), this.props.setMeasurements(n), this.carouselActivity = null;
                    }
                  this.autoscroll();
                }, t.prototype.autoscroll = function() {
                  var e = Math.max(0, l(this.scrollMe) - this.scrollContent.offsetHeight);
                  this.scrollContent.style.marginTop = e + 'px', this.scrollToBottom && (this.scrollMe.scrollTop = this.scrollMe.scrollHeight - this.scrollMe.offsetHeight);
                }, t.prototype.doCardAction = function(e, t) {
                  return this.props.setFocus(), this.props.doCardAction(e, t);
                }, t.prototype.render = function() {
                  var e = this;
                  a.konsole.log('History props', this);
                  var t;
                  return void 0 !== this.props.size.width && (void 0 === this.props.format.carouselMargin ? (this.largeWidth = 2 * this.props.size.width, t = o.createElement(this.measurableCarousel, null)) : t = this.props.activities.map(function(t, n) {
                      return o.createElement(h, {
                          format: e.props.format,
                          key: 'message' + n,
                          activity: t,
                          showTimestamp: n === e.props.activities.length - 1 || n + 1 < e.props.activities.length && f(t, e.props.activities[n + 1]),
                          selected: e.props.isSelected(t),
                          fromMe: e.props.isFromMe(t),
                          onClickActivity: e.props.onClickActivity(t),
                          onClickRetry: function(n) {
                              n.preventDefault(), n.stopPropagation(), e.props.onClickRetry(t);
                            },
                        }, o.createElement(s.ActivityView, {
                          format: e.props.format,
                          size: e.props.size,
                          activity: t,
                          onCardAction: function(t, n) {
                              return e.doCardAction(t, n);
                            },
                          onImageLoad: function() {
                              return e.autoscroll();
                            },
                        }));
                    })), o.createElement('div', {
                      className: 'wc-message-groups',
                      ref: function(t) {
                          return e.scrollMe = t || e.scrollMe;
                        },
                    }, o.createElement('div', {
                      className: 'wc-message-group-content',
                      ref: function(t) {
                          return e.scrollContent = t;
                        },
                    }, t));
                }, t;
            }(o.Component);
      t.HistoryView = c, t.History = i.connect(function(e) {
          return {
              format: e.format,
              size: e.size,
              activities: e.history.activities,
              connectionSelectedActivity: e.connection.selectedActivity,
              selectedActivity: e.history.selectedActivity,
              botConnection: e.connection.botConnection,
              user: e.connection.user,
            };
        }, {
          setMeasurements: function(e) {
              return {
                  type: 'Set_Measurements',
                  carouselMargin: e,
                };
            },
          onClickRetry: function(e) {
              return {
                  type: 'Send_Message_Retry',
                  clientActivityId: e.channelData.clientActivityId,
                };
            },
          sendMessage: a.sendMessage,
        }, function(e, t, n) {
          return {
              format: e.format,
              size: e.size,
              activities: e.activities,
              setMeasurements: t.setMeasurements,
              onClickRetry: t.onClickRetry,
              setFocus: n.setFocus,
              doCardAction: a.doCardAction(e.botConnection, e.user, e.format.locale, t.sendMessage),
              isFromMe: function(t) {
                  return t.from.id === e.user.id;
                },
              isSelected: function(t) {
                  return t === e.selectedActivity;
                },
              onClickActivity: function(t) {
                  return e.connectionSelectedActivity && function() {
                      return e.connectionSelectedActivity.next({
                          activity: t,
                        });
                    };
                },
            };
        })(c);
      var u = function(e, t) {
            var n = window.getComputedStyle(e),
                  r = {};
            return t.forEach(function(e) {
                  return r[e] = parseInt(n.getPropertyValue(e));
                }), r;
          },
          l = function(e) {
              var t = u(e, ['padding-top', 'padding-bottom']);
              return e.offsetHeight - t['padding-top'] - t['padding-bottom'];
            },
          p = function(e) {
              var t = u(e, ['padding-left', 'padding-right']);
              return e.offsetWidth + t['padding-left'] + t['padding-right'];
            },
          f = function(e, t) {
              return Date.parse(t.timestamp) - Date.parse(e.timestamp) > 3e5;
            },
          h = function(e) {
              function t(t) {
                  return e.call(this, t) || this;
                }
              return r.__extends(t, e), t.prototype.render = function() {
                  var e, t = this;
                  switch (this.props.activity.id) {
                    case void 0:
                      e = o.createElement('span', null, this.props.format.strings.messageSending);
                      break;
                    case null:
                      e = o.createElement('span', null, this.props.format.strings.messageFailed);
                      break;
                    case 'retry':
                      e = o.createElement('span', null, this.props.format.strings.messageFailed, ' ', o.createElement('a', {
                              href: '.',
                              onClick: this.props.onClickRetry,
                            }, this.props.format.strings.messageRetry));
                      break;
                    default:
                      var n = void 0;
                      this.props.showTimestamp && (n = this.props.format.strings.timeSent.replace('%1', new Date(this.props.activity.timestamp).toLocaleTimeString())), e = o.createElement('span', null, this.props.activity.from.name || this.props.activity.from.id, n);
                    }
                  var r = this.props.fromMe ? 'me' : 'bot',
                      i = a.classList('wc-message-wrapper', this.props.activity.attachmentLayout || 'list', this.props.onClickActivity && 'clickable'),
                      s = a.classList('wc-message-content', this.props.selected && 'selected');
                  return o.createElement('div', {
                      'data-activity-id': this.props.activity.id,
                      className: i,
                      onClick: this.props.onClickActivity,
                    }, o.createElement('div', {
                      className: 'wc-message wc-message-from-' + r,
                      ref: function(e) {
                          return t.messageDiv = e;
                        },
                    }, o.createElement('div', {
                      className: s,
                    }, o.createElement('svg', {
                      className: 'wc-message-callout',
                    }, o.createElement('path', {
                      className: 'point-left',
                      d: 'm0,6 l6 6 v-12 z',
                    }), o.createElement('path', {
                      className: 'point-right',
                      d: 'm6,6 l-6 6 v-12 z',
                    })), this.props.children)), o.createElement('div', {
                      className: 'wc-message-from wc-message-from-' + r,
                    }, e));
                }, t;
            }(o.Component);
      t.WrappedActivity = h;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (e && 0 !== e.length) {
              var t = e[e.length - 1];
              return 'message' === t.type && t.suggestedActions && t.suggestedActions.actions.length > 0 ? t : void 0;
            }
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var o = n(8),
          i = n(12),
          s = n(49),
          a = n(103),
          c = n(16),
          u = function(e) {
              return i.createElement('div', {
                  className: c.classList('wc-message-pane', e.activityWithSuggestedActions && 'show-actions'),
                }, e.children, i.createElement('div', {
                  className: 'wc-suggested-actions',
                }, i.createElement(l, o.__assign({}, e))));
            },
          l = function(e) {
              function t(t) {
                  return e.call(this, t) || this;
                }
              return o.__extends(t, e), t.prototype.actionClick = function(e, t) {
                  this.props.activityWithSuggestedActions && (this.props.takeSuggestedAction(this.props.activityWithSuggestedActions), this.props.doCardAction(t.type, t.value), this.props.setFocus(), e.stopPropagation());
                }, t.prototype.shouldComponentUpdate = function(e) {
                  return !!e.activityWithSuggestedActions;
                }, t.prototype.render = function() {
                  var e = this;
                  return this.props.activityWithSuggestedActions ? i.createElement(a.HScroll, {
                      prevSvgPathData: 'M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z',
                      nextSvgPathData: 'M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z',
                      scrollUnit: 'page',
                    }, i.createElement('ul', null, this.props.activityWithSuggestedActions.suggestedActions.actions.map(function(t, n) {
                      return i.createElement('li', {
                          key: n,
                        }, i.createElement('button', {
                          onClick: function(n) {
                              return e.actionClick(n, t);
                            },
                          title: t.title,
                        }, t.title));
                    }))) : null;
                }, t;
            }(i.Component);
      t.MessagePane = s.connect(function(e) {
          return {
              activityWithSuggestedActions: r(e.history.activities),
              botConnection: e.connection.botConnection,
              user: e.connection.user,
              locale: e.format.locale,
            };
        }, {
          takeSuggestedAction: function(e) {
              return {
                  type: 'Take_SuggestedAction',
                  message: e,
                };
            },
          sendMessage: c.sendMessage,
        }, function(e, t, n) {
          return {
              activityWithSuggestedActions: e.activityWithSuggestedActions,
              takeSuggestedAction: t.takeSuggestedAction,
              children: n.children,
              setFocus: n.setFocus,
              doCardAction: c.doCardAction(e.botConnection, e.user, e.locale, t.sendMessage),
            };
        })(u);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(12),
          i = n(16),
          s = n(49),
          a = n(40),
          c = function(e) {
              function t(t) {
                  return e.call(this, t) || this;
                }
              return r.__extends(t, e), t.prototype.sendMessage = function() {
                  this.props.inputText.trim().length > 0 && this.props.sendMessage(this.props.inputText);
                }, t.prototype.onKeyPress = function(e) {
                  'Enter' === e.key && this.sendMessage();
                }, t.prototype.onClickSend = function() {
                  this.textInput.focus(), this.sendMessage();
                }, t.prototype.onChangeFile = function() {
                  this.textInput.focus(), this.props.sendFiles(this.fileInput.files), this.fileInput.value = null;
                }, t.prototype.onTextInputFocus = function() {
                  this.props.listening && this.props.stopListening();
                }, t.prototype.onClickMic = function() {
                  this.props.listening ? this.props.stopListening() : this.props.startListening();
                }, t.prototype.render = function() {
                  var e = this,
                      t = 'wc-console';
                  this.props.inputText.length > 0 && (t += ' has-text');
                  var n = this.props.listening || a.SpeechRecognizer.speechIsAvailable() && !this.props.inputText.length,
                      r = i.classList('wc-send', n && 'hidden'),
                      s = i.classList('wc-mic', !n && 'hidden', this.props.listening && 'active', !this.props.listening && 'inactive');
                  return o.createElement('div', {
                      className: t,
                    }, o.createElement('input', {
                      id: 'wc-upload-input',
                      type: 'file',
                      ref: function(t) {
                          return e.fileInput = t;
                        },
                      multiple: !0,
                      onChange: function() {
                          return e.onChangeFile();
                        },
                    }), o.createElement('label', {
                      className: 'wc-upload',
                      htmlFor: 'wc-upload-input',
                    }, o.createElement('svg', null, o.createElement('path', {
                      d: 'M19.96 4.79m-2 0a2 2 0 0 1 4 0 2 2 0 0 1-4 0zM8.32 4.19L2.5 15.53 22.45 15.53 17.46 8.56 14.42 11.18 8.32 4.19ZM1.04 1L1.04 17 24.96 17 24.96 1 1.04 1ZM1.03 0L24.96 0C25.54 0 26 0.45 26 0.99L26 17.01C26 17.55 25.53 18 24.96 18L1.03 18C0.46 18 0 17.55 0 17.01L0 0.99C0 0.45 0.47 0 1.03 0Z',
                    }))), o.createElement('div', {
                      className: 'wc-textbox',
                    }, o.createElement('input', {
                      type: 'text',
                      className: 'wc-shellinput',
                      ref: function(t) {
                          return e.textInput = t;
                        },
                      autoFocus: !0,
                      value: this.props.inputText,
                      onChange: function(t) {
                          return e.props.onChangeText(e.textInput.value);
                        },
                      onKeyPress: function(t) {
                          return e.onKeyPress(t);
                        },
                      onFocus: function() {
                          return e.onTextInputFocus();
                        },
                      placeholder: this.props.listening ? this.props.strings.listeningIndicator : this.props.strings.consolePlaceholder,
                    })), o.createElement('label', {
                      className: r,
                      onClick: function() {
                          return e.onClickSend();
                        },
                    }, o.createElement('svg', null, o.createElement('path', {
                      d: 'M26.79 9.38A0.31 0.31 0 0 0 26.79 8.79L0.41 0.02C0.36 0 0.34 0 0.32 0 0.14 0 0 0.13 0 0.29 0 0.33 0.01 0.37 0.03 0.41L3.44 9.08 0.03 17.76A0.29 0.29 0 0 0 0.01 17.8 0.28 0.28 0 0 0 0.01 17.86C0.01 18.02 0.14 18.16 0.3 18.16A0.3 0.3 0 0 0 0.41 18.14L26.79 9.38ZM0.81 0.79L24.84 8.79 3.98 8.79 0.81 0.79ZM3.98 9.37L24.84 9.37 0.81 17.37 3.98 9.37Z',
                    }))), o.createElement('label', {
                      className: s,
                      onClick: function() {
                          return e.onClickMic();
                        },
                    }, o.createElement('svg', {
                      width: '28',
                      height: '22',
                      viewBox: '0 0 58 58',
                    }, o.createElement('path', {
                      d: 'M 44 28 C 43.448 28 43 28.447 43 29 L 43 35 C 43 42.72 36.72 49 29 49 C 21.28 49 15 42.72 15 35 L 15 29 C 15 28.447 14.552 28 14 28 C 13.448 28 13 28.447 13 29 L 13 35 C 13 43.485 19.644 50.429 28 50.949 L 28 56 L 23 56 C 22.448 56 22 56.447 22 57 C 22 57.553 22.448 58 23 58 L 35 58 C 35.552 58 36 57.553 36 57 C 36 56.447 35.552 56 35 56 L 30 56 L 30 50.949 C 38.356 50.429 45 43.484 45 35 L 45 29 C 45 28.447 44.552 28 44 28 Z',
                    }), o.createElement('path', {
                      id: 'micFilling',
                      d: 'M 28.97 44.438 L 28.97 44.438 C 23.773 44.438 19.521 40.033 19.521 34.649 L 19.521 11.156 C 19.521 5.772 23.773 1.368 28.97 1.368 L 28.97 1.368 C 34.166 1.368 38.418 5.772 38.418 11.156 L 38.418 34.649 C 38.418 40.033 34.166 44.438 28.97 44.438 Z',
                    }), o.createElement('path', {
                      d: 'M 29 46 C 35.065 46 40 41.065 40 35 L 40 11 C 40 4.935 35.065 0 29 0 C 22.935 0 18 4.935 18 11 L 18 35 C 18 41.065 22.935 46 29 46 Z M 20 11 C 20 6.037 24.038 2 29 2 C 33.962 2 38 6.037 38 11 L 38 35 C 38 39.963 33.962 44 29 44 C 24.038 44 20 39.963 20 35 L 20 11 Z',
                    }))));
                }, t;
            }(o.Component);
      t.Shell = s.connect(function(e) {
          return {
              inputText: e.shell.input,
              strings: e.format.strings,
              locale: e.format.locale,
              user: e.connection.user,
              listening: e.shell.listening,
            };
        }, {
          onChangeText: function(e) {
              return {
                  type: 'Update_Input',
                  input: e,
                  source: 'text',
                };
            },
          stopListening: function() {
              return {
                  type: 'Listening_Stop',
                };
            },
          startListening: function() {
              return {
                  type: 'Listening_Starting',
                };
            },
          sendMessage: i.sendMessage,
          sendFiles: i.sendFiles,
        }, function(e, t, n) {
          return {
              inputText: e.inputText,
              strings: e.strings,
              listening: e.listening,
              onChangeText: t.onChangeText,
              sendMessage: function(n) {
                  return t.sendMessage(n, e.user, e.locale);
                },
              sendFiles: function(n) {
                  return t.sendFiles(n, e.user, e.locale);
                },
              startListening: function() {
                  return t.startListening();
                },
              stopListening: function() {
                  return t.stopListening();
                },
            };
        })(c);
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(8),
          o = n(56),
          i = n(16),
          s = n(235),
          a = n(40),
          c = n(55);
      t.shell = function(e, t) {
          switch (void 0 === e && (e = {
              input: '',
              sendTyping: !1,
              listening: !1,
              lastInputViaSpeech: !1,
            }), t.type) {
            case 'Update_Input':
              return r.__assign({}, e, {
                      input: t.input,
                      lastInputViaSpeech: 'speech' == t.source,
                    });
            case 'Listening_Start':
              return r.__assign({}, e, {
                      listening: !0,
                    });
            case 'Listening_Stop':
              return r.__assign({}, e, {
                      listening: !1,
                    });
            case 'Send_Message':
              return r.__assign({}, e, {
                      input: '',
                    });
            case 'Set_Send_Typing':
              return r.__assign({}, e, {
                      sendTyping: t.sendTyping,
                    });
            case 'Card_Action_Clicked':
              return r.__assign({}, e, {
                      lastInputViaSpeech: !1,
                    });
            default:
            case 'Listening_Starting':
              return e;
            }
        }, t.format = function(e, t) {
          switch (void 0 === e && (e = {
              locale: 'en-us',
              options: {
                  showHeader: !0,
                },
              strings: s.defaultStrings,
              carouselMargin: void 0,
            }), t.type) {
            case 'Set_Format_Options':
              return r.__assign({}, e, {
                      options: t.options,
                    });
            case 'Set_Locale':
              return r.__assign({}, e, {
                      locale: t.locale,
                      strings: s.strings(t.locale),
                    });
            case 'Set_Measurements':
              return r.__assign({}, e, {
                      carouselMargin: t.carouselMargin,
                    });
            default:
              return e;
            }
        }, t.size = function(e, t) {
          switch (void 0 === e && (e = {
              width: void 0,
              height: void 0,
            }), t.type) {
            case 'Set_Size':
              return r.__assign({}, e, {
                      width: t.width,
                      height: t.height,
                    });
            default:
              return e;
            }
        }, t.connection = function(e, t) {
          switch (void 0 === e && (e = {
              connectionStatus: o.ConnectionStatus.Uninitialized,
              botConnection: void 0,
              selectedActivity: void 0,
              user: void 0,
              bot: void 0,
            }), t.type) {
            case 'Start_Connection':
              return r.__assign({}, e, {
                      botConnection: t.botConnection,
                      user: t.user,
                      bot: t.bot,
                      selectedActivity: t.selectedActivity,
                    });
            case 'Connection_Change':
              return r.__assign({}, e, {
                      connectionStatus: t.connectionStatus,
                    });
            default:
              return e;
            }
        };
      var u = function(e, t, n) {
          return e.slice(0, t).concat([n], e.slice(t + 1));
        };
      t.history = function(e, t) {
          switch (void 0 === e && (e = {
              activities: [],
              clientActivityBase: Date.now().toString() + Math.random().toString().substr(1) + '.',
              clientActivityCounter: 0,
              selectedActivity: null,
            }), i.konsole.log('history action', t), t.type) {
            case 'Receive_Sent_Message':
              if (!t.activity.channelData || !t.activity.channelData.clientActivityId) return e;
              var n = e.activities.findIndex(function(e) {
                      return e.channelData && e.channelData.clientActivityId === t.activity.channelData.clientActivityId;
                    });
              if (-1 !== n) {
                      var o = e.activities[n];
                      return r.__assign({}, e, {
                          activities: u(e.activities, n, o),
                          selectedActivity: e.selectedActivity === o ? t.activity : e.selectedActivity,
                        });
                    }
            case 'Receive_Message':
              return e.activities.find(function(e) {
                      return e.id === t.activity.id;
                    }) ? e : r.__assign({}, e, {
                      activities: e.activities.filter(function(e) {
                          return 'typing' !== e.type;
                        }).concat([t.activity], e.activities.filter(function(e) {
                          return e.from.id !== t.activity.from.id && 'typing' === e.type;
                        })),
                    });
            case 'Send_Message':
              return r.__assign({}, e, {
                      activities: e.activities.filter(function(e) {
                          return 'typing' !== e.type;
                        }).concat([r.__assign({}, t.activity, {
                          timestamp: (new Date).toISOString(),
                          channelData: {
                              clientActivityId: e.clientActivityBase + e.clientActivityCounter,
                            },
                        })], e.activities.filter(function(e) {
                          return 'typing' === e.type;
                        })),
                      clientActivityCounter: e.clientActivityCounter + 1,
                    });
            case 'Send_Message_Retry':
              var s = e.activities.find(function(e) {
                        return e.channelData && e.channelData.clientActivityId === t.clientActivityId;
                      }),
                      a = void 0 === s.id ? s : r.__assign({}, s, {
                          id: void 0,
                        });
              return r.__assign({}, e, {
                      activities: e.activities.filter(function(e) {
                          return 'typing' !== e.type && e !== s;
                        }).concat([a], e.activities.filter(function(e) {
                          return 'typing' === e.type;
                        })),
                      selectedActivity: e.selectedActivity === s ? a : e.selectedActivity,
                    });
            case 'Send_Message_Succeed':
            case 'Send_Message_Fail':
              var c = e.activities.findIndex(function(e) {
                      return e.channelData && e.channelData.clientActivityId === t.clientActivityId;
                    });
              if (-1 === c) return e;
              var l = e.activities[c];
              if (l.id && 'retry' != l.id) return e;
              var p = r.__assign({}, l, {
                      id: 'Send_Message_Succeed' === t.type ? t.id : null,
                    });
              return r.__assign({}, e, {
                      activities: u(e.activities, c, p),
                      clientActivityCounter: e.clientActivityCounter + 1,
                      selectedActivity: e.selectedActivity === l ? p : e.selectedActivity,
                    });
            case 'Show_Typing':
              return r.__assign({}, e, {
                      activities: e.activities.filter(function(e) {
                          return 'typing' !== e.type;
                        }).concat(e.activities.filter(function(e) {
                          return e.from.id !== t.activity.from.id && 'typing' === e.type;
                        }), [t.activity]),
                    });
            case 'Clear_Typing':
              return r.__assign({}, e, {
                      activities: e.activities.filter(function(e) {
                          return e.id !== t.id;
                        }),
                      selectedActivity: e.selectedActivity && e.selectedActivity.id === t.id ? null : e.selectedActivity,
                    });
            case 'Select_Activity':
              return t.selectedActivity === e.selectedActivity ? e : r.__assign({}, e, {
                      selectedActivity: t.selectedActivity,
                    });
            case 'Take_SuggestedAction':
              var f = e.activities.findIndex(function(e) {
                        return e === t.message;
                      }),
                      h = e.activities[f],
                      d = r.__assign({}, h, {
                          suggestedActions: void 0,
                        });
              return r.__assign({}, e, {
                      activities: u(e.activities, f, d),
                      selectedActivity: e.selectedActivity === h ? d : e.selectedActivity,
                    });
            default:
              return e;
            }
        };
      var l = {
            type: null,
          },
          p = function(e, t) {
              var n = e.speak;
              if ((!n && null == e.textFormat || 'plain' == e.textFormat) && (n = e.text), !n && e.channelData && e.channelData.speechOutput && e.channelData.speechOutput.speakText && (n = e.channelData.speechOutput.speakText), !n && e.attachments && e.attachments.length > 0)
                  for (var r = 0; r < e.attachments.length; r++) {
                      var o = e;
                      if (o.attachments[r].content && o.attachments[r].content.speak) {
                          n = o.attachments[r].content.speak;
                          break;
                        }
                    }
              return {
                  type: 'Speak_SSML',
                  ssml: n,
                  locale: e.locale || t,
                  autoListenAfterSpeak: 'expectingInput' == e.inputHint || e.channelData && 'WaitingForAnswerToQuestion' == e.channelData.botState,
                };
            },
          f = n(86),
          h = n(0);
      n(164), n(165), n(166), n(167), n(168), n(439), n(169), n(444), n(443), n(430), n(162), n(163);
      var d = function(e, t) {
            return e.ofType('Send_Message').map(function(e) {
                  var n = t.getState();
                  return {
                      type: 'Send_Message_Try',
                      clientActivityId: n.history.clientActivityBase + (n.history.clientActivityCounter - 1),
                    };
                });
          },
          v = function(e, t) {
              return e.ofType('Send_Message_Try').flatMap(function(e) {
                  var n = t.getState(),
                      r = e.clientActivityId,
                      o = n.history.activities.find(function(e) {
                          return e.channelData && e.channelData.clientActivityId === r;
                        });
                  if (!o) return i.konsole.log('trySendMessage: activity not found'), h.Observable.empty();
                  if (1 == n.history.clientActivityCounter) {
                      var s = {
                          type: 'ClientCapabilities',
                          requiresBotState: !0,
                          supportsTts: !0,
                          supportsListening: !0,
                        };
                      o.entities = null == o.entities ? [s] : o.entities.concat([s]);
                    }
                  return n.connection.botConnection.postActivity(o).map(function(e) {
                      return {
                          type: 'Send_Message_Succeed',
                          clientActivityId: r,
                          id: e,
                        };
                    }).catch(function(e) {
                      return h.Observable.of({
                          type: 'Send_Message_Fail',
                          clientActivityId: r,
                        });
                    });
                });
            },
          m = h.Observable.bindCallback(c.SpeechSynthesizer.speak),
          g = function(e, t) {
              return e.ofType('Speak_SSML').filter(function(e) {
                  return e.ssml;
                }).mergeMap(function(e) {
                  var t = null,
                      n = function() {
                          return l;
                        };
                  return e.autoListenAfterSpeak && (t = function() {
                      return a.SpeechRecognizer.warmup();
                    }, n = function() {
                      return {
                          type: 'Listening_Starting',
                        };
                    }), m(e.ssml, e.locale, t).map(n).catch(function(e) {
                      return h.Observable.of(l);
                    });
                }).merge(e.ofType('Speak_SSML').map(function(e) {
                  return {
                      type: 'Listening_Stop',
                    };
                }));
            },
          y = function(e, t) {
              return e.ofType('Receive_Message').filter(function(e) {
                  return e.activity && t.getState().shell.lastInputViaSpeech;
                }).map(function(e) {
                  return p(e.activity, t.getState().format.locale);
                });
            },
          b = function(e) {
              return e.ofType('Update_Input', 'Listening_Starting', 'Send_Message', 'Card_Action_Clicked', 'Stop_Speaking').do(c.SpeechSynthesizer.stopSpeaking).map(function(e) {
                  return l;
                });
            },
          _ = function(e) {
              return e.ofType('Listening_Stop', 'Card_Action_Clicked').do(a.SpeechRecognizer.stopRecognizing).map(function(e) {
                  return l;
                });
            },
          w = function(e, t) {
              return e.ofType('Listening_Starting').do(function(e) {
                  var n = t.getState().format.locale,
                      r = function(e) {
                          t.dispatch({
                              type: 'Update_Input',
                              input: e,
                              source: 'speech',
                            });
                        },
                      o = function(e) {
                          e = e.replace(/^[.\s]+|[.\s]+$/g, ''), r(e), t.dispatch({
                              type: 'Listening_Stop',
                            }), t.dispatch(i.sendMessage(e, t.getState().connection.user, n));
                        },
                      s = function() {
                          t.dispatch({
                              type: 'Listening_Start',
                            });
                        };
                  a.SpeechRecognizer.startRecognizing(n, r, o, s);
                }).map(function(e) {
                  return l;
                });
            },
          C = function(e, t) {
              var n = e.ofType('Update_Input', 'Listening_Stop');
              return e.ofType('Listening_Start').mergeMap(function(e) {
                  return h.Observable.of({
                      type: 'Listening_Stop',
                    }).delay(5e3).takeUntil(n);
                });
            },
          S = function(e) {
              return e.ofType('Send_Message_Retry').map(function(e) {
                  return {
                      type: 'Send_Message_Try',
                      clientActivityId: e.clientActivityId,
                    };
                });
            },
          E = function(e, t) {
              return e.ofType('Send_Message_Succeed', 'Send_Message_Fail', 'Show_Typing', 'Clear_Typing').map(function(e) {
                  var n = t.getState();
                  return n.connection.selectedActivity && n.connection.selectedActivity.next({
                      activity: n.history.selectedActivity,
                    }), l;
                });
            },
          x = function(e) {
              return e.ofType('Show_Typing').delay(3e3).map(function(e) {
                  return {
                      type: 'Clear_Typing',
                      id: e.activity.id,
                    };
                });
            },
          k = function(e, t) {
              return e.ofType('Update_Input').map(function(e) {
                  return t.getState();
                }).filter(function(e) {
                  return e.shell.sendTyping;
                }).throttleTime(3e3).do(function(e) {
                  return i.konsole.log('sending typing');
                }).flatMap(function(e) {
                  return e.connection.botConnection.postActivity({
                      type: 'typing',
                      from: e.connection.user,
                    }).map(function(e) {
                      return l;
                    }).catch(function(e) {
                      return h.Observable.of(l);
                    });
                });
            },
          O = n(86),
          T = n(421);
      t.createStore = function() {
          return O.createStore(O.combineReducers({
              shell: t.shell,
              format: t.format,
              size: t.size,
              connection: t.connection,
              history: t.history,
            }), f.applyMiddleware(T.createEpicMiddleware(T.combineEpics(E, d, v, S, x, k, g, y, w, _, b, C))));
        };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = {
          'en-us': {
              title: 'Chat',
              send: 'Send',
              unknownFile: '[File of type \'%1\']',
              unknownCard: '[Unknown Card \'%1\']',
              receiptTax: 'Tax',
              receiptTotal: 'Total',
              messageRetry: 'retry',
              messageFailed: 'couldn\'t send',
              messageSending: 'sending',
              timeSent: ' at %1',
              consolePlaceholder: 'Type your message...',
              listeningIndicator: 'Listening...',
            },
          'de-de': {
              title: 'Chat',
              send: 'Senden',
              unknownFile: '[Datei vom Typ \'%1\']',
              unknownCard: '[Unbekannte Card \'%1\']',
              receiptTax: 'MwSt.',
              receiptTotal: 'Gesamtbetrag',
              messageRetry: 'wiederholen',
              messageFailed: 'konnte nicht senden',
              messageSending: 'sendet',
              timeSent: ' am %1',
              consolePlaceholder: 'Verfasse eine Nachricht...',
              listeningIndicator: 'Listening...',
            },
          'pl-pl': {
              title: 'Chat',
              send: 'Wyślij',
              unknownFile: '[Plik typu \'%1\']',
              unknownCard: '[Nieznana karta \'%1\']',
              receiptTax: 'Podatek',
              receiptTotal: 'Razem',
              messageRetry: 'wyślij ponownie',
              messageFailed: 'wysłanie nieudane',
              messageSending: 'wysyłanie',
              timeSent: ' o %1',
              consolePlaceholder: 'Wpisz swoją wiadomość...',
              listeningIndicator: 'Listening...',
            },
          'ru-ru': {
              title: 'Чат',
              send: 'Отправить',
              unknownFile: '[Неизвестный тип \'%1\']',
              unknownCard: '[Неизвестная карта \'%1\']',
              receiptTax: 'Налог',
              receiptTotal: 'Итого',
              messageRetry: 'повторить',
              messageFailed: 'не удалось отправить',
              messageSending: 'отправка',
              timeSent: ' в %1',
              consolePlaceholder: 'Введите ваше сообщение...',
              listeningIndicator: 'Listening...',
            },
          'nl-nl': {
              title: 'Chat',
              send: 'Verstuur',
              unknownFile: '[Bestand van het type \'%1\']',
              unknownCard: '[Onbekende kaart \'%1\']',
              receiptTax: 'BTW',
              receiptTotal: 'Totaal',
              messageRetry: 'opnieuw',
              messageFailed: 'versturen mislukt',
              messageSending: 'versturen',
              timeSent: ' om %1',
              consolePlaceholder: 'Typ je bericht...',
              listeningIndicator: 'Listening...',
            },
          'lv-lv': {
              title: 'Tērzēšana',
              send: 'Sūtīt',
              unknownFile: '[Nezināms tips \'%1\']',
              unknownCard: '[Nezināma kartīte \'%1\']',
              receiptTax: 'Nodoklis',
              receiptTotal: 'Kopsumma',
              messageRetry: 'Mēģināt vēlreiz',
              messageFailed: 'Neizdevās nosūtīt',
              messageSending: 'Nosūtīšana',
              timeSent: ' %1',
              consolePlaceholder: 'Ierakstiet savu ziņu...',
              listeningIndicator: 'Listening...',
            },
          'pt-br': {
              title: 'Bate-papo',
              send: 'Enviar',
              unknownFile: '[Arquivo do tipo \'%1\']',
              unknownCard: '[Cartão desconhecido \'%1\']',
              receiptTax: 'Imposto',
              receiptTotal: 'Total',
              messageRetry: 'repedit',
              messageFailed: 'não pude enviar',
              messageSending: 'enviando',
              timeSent: ' às %1',
              consolePlaceholder: 'Digite sua mensagem...',
              listeningIndicator: 'Listening...',
            },
          'fr-fr': {
              title: 'Chat',
              send: 'Envoyer',
              unknownFile: '[Fichier de type \'%1\']',
              unknownCard: '[Carte inconnue \'%1\']',
              receiptTax: 'Taxe',
              receiptTotal: 'Total',
              messageRetry: 'reéssayer',
              messageFailed: 'envoi impossible',
              messageSending: 'envoi',
              timeSent: ' à %1',
              consolePlaceholder: 'Écrivez votre message...',
              listeningIndicator: 'Listening...',
            },
          'es-es': {
              title: 'Chat',
              send: 'Enviar',
              unknownFile: '[Archivo de tipo \'%1\']',
              unknownCard: '[Tarjeta desconocida \'%1\']',
              receiptTax: 'Impuestos',
              receiptTotal: 'Total',
              messageRetry: 'reintentar',
              messageFailed: 'no enviado',
              messageSending: 'enviando',
              timeSent: ' a las %1',
              consolePlaceholder: 'Escribe tu mensaje...',
              listeningIndicator: 'Listening...',
            },
        };
      t.defaultStrings = r['en-us'], t.strings = function(e) {
          return e = e.startsWith('de') ? 'de-de' : e.startsWith('pl') ? 'pl-pl' : e.startsWith('ru') ? 'ru-ru' : e.startsWith('nl') ? 'nl-nl' : e.startsWith('lv') ? 'lv-lv' : e.startsWith('pt') ? 'pt-br' : e.startsWith('fr') ? 'fr-fr' : e.startsWith('es') ? 'es-es' : 'en-us', r[e];
        };
    }, function(e, t) {
      e.exports = {
          Aacute: 'Á',
          aacute: 'á',
          Abreve: 'Ă',
          abreve: 'ă',
          ac: '∾',
          acd: '∿',
          acE: '∾̳',
          Acirc: 'Â',
          acirc: 'â',
          acute: '´',
          Acy: 'А',
          acy: 'а',
          AElig: 'Æ',
          aelig: 'æ',
          af: '⁡',
          Afr: '𝔄',
          afr: '𝔞',
          Agrave: 'À',
          agrave: 'à',
          alefsym: 'ℵ',
          aleph: 'ℵ',
          Alpha: 'Α',
          alpha: 'α',
          Amacr: 'Ā',
          amacr: 'ā',
          amalg: '⨿',
          amp: '&',
          AMP: '&',
          andand: '⩕',
          And: '⩓',
          and: '∧',
          andd: '⩜',
          andslope: '⩘',
          andv: '⩚',
          ang: '∠',
          ange: '⦤',
          angle: '∠',
          angmsdaa: '⦨',
          angmsdab: '⦩',
          angmsdac: '⦪',
          angmsdad: '⦫',
          angmsdae: '⦬',
          angmsdaf: '⦭',
          angmsdag: '⦮',
          angmsdah: '⦯',
          angmsd: '∡',
          angrt: '∟',
          angrtvb: '⊾',
          angrtvbd: '⦝',
          angsph: '∢',
          angst: 'Å',
          angzarr: '⍼',
          Aogon: 'Ą',
          aogon: 'ą',
          Aopf: '𝔸',
          aopf: '𝕒',
          apacir: '⩯',
          ap: '≈',
          apE: '⩰',
          ape: '≊',
          apid: '≋',
          apos: '\'',
          ApplyFunction: '⁡',
          approx: '≈',
          approxeq: '≊',
          Aring: 'Å',
          aring: 'å',
          Ascr: '𝒜',
          ascr: '𝒶',
          Assign: '≔',
          ast: '*',
          asymp: '≈',
          asympeq: '≍',
          Atilde: 'Ã',
          atilde: 'ã',
          Auml: 'Ä',
          auml: 'ä',
          awconint: '∳',
          awint: '⨑',
          backcong: '≌',
          backepsilon: '϶',
          backprime: '‵',
          backsim: '∽',
          backsimeq: '⋍',
          Backslash: '∖',
          Barv: '⫧',
          barvee: '⊽',
          barwed: '⌅',
          Barwed: '⌆',
          barwedge: '⌅',
          bbrk: '⎵',
          bbrktbrk: '⎶',
          bcong: '≌',
          Bcy: 'Б',
          bcy: 'б',
          bdquo: '„',
          becaus: '∵',
          because: '∵',
          Because: '∵',
          bemptyv: '⦰',
          bepsi: '϶',
          bernou: 'ℬ',
          Bernoullis: 'ℬ',
          Beta: 'Β',
          beta: 'β',
          beth: 'ℶ',
          between: '≬',
          Bfr: '𝔅',
          bfr: '𝔟',
          bigcap: '⋂',
          bigcirc: '◯',
          bigcup: '⋃',
          bigodot: '⨀',
          bigoplus: '⨁',
          bigotimes: '⨂',
          bigsqcup: '⨆',
          bigstar: '★',
          bigtriangledown: '▽',
          bigtriangleup: '△',
          biguplus: '⨄',
          bigvee: '⋁',
          bigwedge: '⋀',
          bkarow: '⤍',
          blacklozenge: '⧫',
          blacksquare: '▪',
          blacktriangle: '▴',
          blacktriangledown: '▾',
          blacktriangleleft: '◂',
          blacktriangleright: '▸',
          blank: '␣',
          blk12: '▒',
          blk14: '░',
          blk34: '▓',
          block: '█',
          bne: '=⃥',
          bnequiv: '≡⃥',
          bNot: '⫭',
          bnot: '⌐',
          Bopf: '𝔹',
          bopf: '𝕓',
          bot: '⊥',
          bottom: '⊥',
          bowtie: '⋈',
          boxbox: '⧉',
          boxdl: '┐',
          boxdL: '╕',
          boxDl: '╖',
          boxDL: '╗',
          boxdr: '┌',
          boxdR: '╒',
          boxDr: '╓',
          boxDR: '╔',
          boxh: '─',
          boxH: '═',
          boxhd: '┬',
          boxHd: '╤',
          boxhD: '╥',
          boxHD: '╦',
          boxhu: '┴',
          boxHu: '╧',
          boxhU: '╨',
          boxHU: '╩',
          boxminus: '⊟',
          boxplus: '⊞',
          boxtimes: '⊠',
          boxul: '┘',
          boxuL: '╛',
          boxUl: '╜',
          boxUL: '╝',
          boxur: '└',
          boxuR: '╘',
          boxUr: '╙',
          boxUR: '╚',
          boxv: '│',
          boxV: '║',
          boxvh: '┼',
          boxvH: '╪',
          boxVh: '╫',
          boxVH: '╬',
          boxvl: '┤',
          boxvL: '╡',
          boxVl: '╢',
          boxVL: '╣',
          boxvr: '├',
          boxvR: '╞',
          boxVr: '╟',
          boxVR: '╠',
          bprime: '‵',
          breve: '˘',
          Breve: '˘',
          brvbar: '¦',
          bscr: '𝒷',
          Bscr: 'ℬ',
          bsemi: '⁏',
          bsim: '∽',
          bsime: '⋍',
          bsolb: '⧅',
          bsol: '\\',
          bsolhsub: '⟈',
          bull: '•',
          bullet: '•',
          bump: '≎',
          bumpE: '⪮',
          bumpe: '≏',
          Bumpeq: '≎',
          bumpeq: '≏',
          Cacute: 'Ć',
          cacute: 'ć',
          capand: '⩄',
          capbrcup: '⩉',
          capcap: '⩋',
          cap: '∩',
          Cap: '⋒',
          capcup: '⩇',
          capdot: '⩀',
          CapitalDifferentialD: 'ⅅ',
          caps: '∩︀',
          caret: '⁁',
          caron: 'ˇ',
          Cayleys: 'ℭ',
          ccaps: '⩍',
          Ccaron: 'Č',
          ccaron: 'č',
          Ccedil: 'Ç',
          ccedil: 'ç',
          Ccirc: 'Ĉ',
          ccirc: 'ĉ',
          Cconint: '∰',
          ccups: '⩌',
          ccupssm: '⩐',
          Cdot: 'Ċ',
          cdot: 'ċ',
          cedil: '¸',
          Cedilla: '¸',
          cemptyv: '⦲',
          cent: '¢',
          centerdot: '·',
          CenterDot: '·',
          cfr: '𝔠',
          Cfr: 'ℭ',
          CHcy: 'Ч',
          chcy: 'ч',
          check: '✓',
          checkmark: '✓',
          Chi: 'Χ',
          chi: 'χ',
          circ: 'ˆ',
          circeq: '≗',
          circlearrowleft: '↺',
          circlearrowright: '↻',
          circledast: '⊛',
          circledcirc: '⊚',
          circleddash: '⊝',
          CircleDot: '⊙',
          circledR: '®',
          circledS: 'Ⓢ',
          CircleMinus: '⊖',
          CirclePlus: '⊕',
          CircleTimes: '⊗',
          cir: '○',
          cirE: '⧃',
          cire: '≗',
          cirfnint: '⨐',
          cirmid: '⫯',
          cirscir: '⧂',
          ClockwiseContourIntegral: '∲',
          CloseCurlyDoubleQuote: '”',
          CloseCurlyQuote: '’',
          clubs: '♣',
          clubsuit: '♣',
          colon: ':',
          Colon: '∷',
          Colone: '⩴',
          colone: '≔',
          coloneq: '≔',
          comma: ',',
          commat: '@',
          comp: '∁',
          compfn: '∘',
          complement: '∁',
          complexes: 'ℂ',
          cong: '≅',
          congdot: '⩭',
          Congruent: '≡',
          conint: '∮',
          Conint: '∯',
          ContourIntegral: '∮',
          copf: '𝕔',
          Copf: 'ℂ',
          coprod: '∐',
          Coproduct: '∐',
          copy: '©',
          COPY: '©',
          copysr: '℗',
          CounterClockwiseContourIntegral: '∳',
          crarr: '↵',
          cross: '✗',
          Cross: '⨯',
          Cscr: '𝒞',
          cscr: '𝒸',
          csub: '⫏',
          csube: '⫑',
          csup: '⫐',
          csupe: '⫒',
          ctdot: '⋯',
          cudarrl: '⤸',
          cudarrr: '⤵',
          cuepr: '⋞',
          cuesc: '⋟',
          cularr: '↶',
          cularrp: '⤽',
          cupbrcap: '⩈',
          cupcap: '⩆',
          CupCap: '≍',
          cup: '∪',
          Cup: '⋓',
          cupcup: '⩊',
          cupdot: '⊍',
          cupor: '⩅',
          cups: '∪︀',
          curarr: '↷',
          curarrm: '⤼',
          curlyeqprec: '⋞',
          curlyeqsucc: '⋟',
          curlyvee: '⋎',
          curlywedge: '⋏',
          curren: '¤',
          curvearrowleft: '↶',
          curvearrowright: '↷',
          cuvee: '⋎',
          cuwed: '⋏',
          cwconint: '∲',
          cwint: '∱',
          cylcty: '⌭',
          dagger: '†',
          Dagger: '‡',
          daleth: 'ℸ',
          darr: '↓',
          Darr: '↡',
          dArr: '⇓',
          dash: '‐',
          Dashv: '⫤',
          dashv: '⊣',
          dbkarow: '⤏',
          dblac: '˝',
          Dcaron: 'Ď',
          dcaron: 'ď',
          Dcy: 'Д',
          dcy: 'д',
          ddagger: '‡',
          ddarr: '⇊',
          DD: 'ⅅ',
          dd: 'ⅆ',
          DDotrahd: '⤑',
          ddotseq: '⩷',
          deg: '°',
          Del: '∇',
          Delta: 'Δ',
          delta: 'δ',
          demptyv: '⦱',
          dfisht: '⥿',
          Dfr: '𝔇',
          dfr: '𝔡',
          dHar: '⥥',
          dharl: '⇃',
          dharr: '⇂',
          DiacriticalAcute: '´',
          DiacriticalDot: '˙',
          DiacriticalDoubleAcute: '˝',
          DiacriticalGrave: '`',
          DiacriticalTilde: '˜',
          diam: '⋄',
          diamond: '⋄',
          Diamond: '⋄',
          diamondsuit: '♦',
          diams: '♦',
          die: '¨',
          DifferentialD: 'ⅆ',
          digamma: 'ϝ',
          disin: '⋲',
          div: '÷',
          divide: '÷',
          divideontimes: '⋇',
          divonx: '⋇',
          DJcy: 'Ђ',
          djcy: 'ђ',
          dlcorn: '⌞',
          dlcrop: '⌍',
          dollar: '$',
          Dopf: '𝔻',
          dopf: '𝕕',
          Dot: '¨',
          dot: '˙',
          DotDot: '⃜',
          doteq: '≐',
          doteqdot: '≑',
          DotEqual: '≐',
          dotminus: '∸',
          dotplus: '∔',
          dotsquare: '⊡',
          doublebarwedge: '⌆',
          DoubleContourIntegral: '∯',
          DoubleDot: '¨',
          DoubleDownArrow: '⇓',
          DoubleLeftArrow: '⇐',
          DoubleLeftRightArrow: '⇔',
          DoubleLeftTee: '⫤',
          DoubleLongLeftArrow: '⟸',
          DoubleLongLeftRightArrow: '⟺',
          DoubleLongRightArrow: '⟹',
          DoubleRightArrow: '⇒',
          DoubleRightTee: '⊨',
          DoubleUpArrow: '⇑',
          DoubleUpDownArrow: '⇕',
          DoubleVerticalBar: '∥',
          DownArrowBar: '⤓',
          downarrow: '↓',
          DownArrow: '↓',
          Downarrow: '⇓',
          DownArrowUpArrow: '⇵',
          DownBreve: '̑',
          downdownarrows: '⇊',
          downharpoonleft: '⇃',
          downharpoonright: '⇂',
          DownLeftRightVector: '⥐',
          DownLeftTeeVector: '⥞',
          DownLeftVectorBar: '⥖',
          DownLeftVector: '↽',
          DownRightTeeVector: '⥟',
          DownRightVectorBar: '⥗',
          DownRightVector: '⇁',
          DownTeeArrow: '↧',
          DownTee: '⊤',
          drbkarow: '⤐',
          drcorn: '⌟',
          drcrop: '⌌',
          Dscr: '𝒟',
          dscr: '𝒹',
          DScy: 'Ѕ',
          dscy: 'ѕ',
          dsol: '⧶',
          Dstrok: 'Đ',
          dstrok: 'đ',
          dtdot: '⋱',
          dtri: '▿',
          dtrif: '▾',
          duarr: '⇵',
          duhar: '⥯',
          dwangle: '⦦',
          DZcy: 'Џ',
          dzcy: 'џ',
          dzigrarr: '⟿',
          Eacute: 'É',
          eacute: 'é',
          easter: '⩮',
          Ecaron: 'Ě',
          ecaron: 'ě',
          Ecirc: 'Ê',
          ecirc: 'ê',
          ecir: '≖',
          ecolon: '≕',
          Ecy: 'Э',
          ecy: 'э',
          eDDot: '⩷',
          Edot: 'Ė',
          edot: 'ė',
          eDot: '≑',
          ee: 'ⅇ',
          efDot: '≒',
          Efr: '𝔈',
          efr: '𝔢',
          eg: '⪚',
          Egrave: 'È',
          egrave: 'è',
          egs: '⪖',
          egsdot: '⪘',
          el: '⪙',
          Element: '∈',
          elinters: '⏧',
          ell: 'ℓ',
          els: '⪕',
          elsdot: '⪗',
          Emacr: 'Ē',
          emacr: 'ē',
          empty: '∅',
          emptyset: '∅',
          EmptySmallSquare: '◻',
          emptyv: '∅',
          EmptyVerySmallSquare: '▫',
          emsp13: ' ',
          emsp14: ' ',
          emsp: ' ',
          ENG: 'Ŋ',
          eng: 'ŋ',
          ensp: ' ',
          Eogon: 'Ę',
          eogon: 'ę',
          Eopf: '𝔼',
          eopf: '𝕖',
          epar: '⋕',
          eparsl: '⧣',
          eplus: '⩱',
          epsi: 'ε',
          Epsilon: 'Ε',
          epsilon: 'ε',
          epsiv: 'ϵ',
          eqcirc: '≖',
          eqcolon: '≕',
          eqsim: '≂',
          eqslantgtr: '⪖',
          eqslantless: '⪕',
          Equal: '⩵',
          equals: '=',
          EqualTilde: '≂',
          equest: '≟',
          Equilibrium: '⇌',
          equiv: '≡',
          equivDD: '⩸',
          eqvparsl: '⧥',
          erarr: '⥱',
          erDot: '≓',
          escr: 'ℯ',
          Escr: 'ℰ',
          esdot: '≐',
          Esim: '⩳',
          esim: '≂',
          Eta: 'Η',
          eta: 'η',
          ETH: 'Ð',
          eth: 'ð',
          Euml: 'Ë',
          euml: 'ë',
          euro: '€',
          excl: '!',
          exist: '∃',
          Exists: '∃',
          expectation: 'ℰ',
          exponentiale: 'ⅇ',
          ExponentialE: 'ⅇ',
          fallingdotseq: '≒',
          Fcy: 'Ф',
          fcy: 'ф',
          female: '♀',
          ffilig: 'ﬃ',
          fflig: 'ﬀ',
          ffllig: 'ﬄ',
          Ffr: '𝔉',
          ffr: '𝔣',
          filig: 'ﬁ',
          FilledSmallSquare: '◼',
          FilledVerySmallSquare: '▪',
          fjlig: 'fj',
          flat: '♭',
          fllig: 'ﬂ',
          fltns: '▱',
          fnof: 'ƒ',
          Fopf: '𝔽',
          fopf: '𝕗',
          forall: '∀',
          ForAll: '∀',
          fork: '⋔',
          forkv: '⫙',
          Fouriertrf: 'ℱ',
          fpartint: '⨍',
          frac12: '½',
          frac13: '⅓',
          frac14: '¼',
          frac15: '⅕',
          frac16: '⅙',
          frac18: '⅛',
          frac23: '⅔',
          frac25: '⅖',
          frac34: '¾',
          frac35: '⅗',
          frac38: '⅜',
          frac45: '⅘',
          frac56: '⅚',
          frac58: '⅝',
          frac78: '⅞',
          frasl: '⁄',
          frown: '⌢',
          fscr: '𝒻',
          Fscr: 'ℱ',
          gacute: 'ǵ',
          Gamma: 'Γ',
          gamma: 'γ',
          Gammad: 'Ϝ',
          gammad: 'ϝ',
          gap: '⪆',
          Gbreve: 'Ğ',
          gbreve: 'ğ',
          Gcedil: 'Ģ',
          Gcirc: 'Ĝ',
          gcirc: 'ĝ',
          Gcy: 'Г',
          gcy: 'г',
          Gdot: 'Ġ',
          gdot: 'ġ',
          ge: '≥',
          gE: '≧',
          gEl: '⪌',
          gel: '⋛',
          geq: '≥',
          geqq: '≧',
          geqslant: '⩾',
          gescc: '⪩',
          ges: '⩾',
          gesdot: '⪀',
          gesdoto: '⪂',
          gesdotol: '⪄',
          gesl: '⋛︀',
          gesles: '⪔',
          Gfr: '𝔊',
          gfr: '𝔤',
          gg: '≫',
          Gg: '⋙',
          ggg: '⋙',
          gimel: 'ℷ',
          GJcy: 'Ѓ',
          gjcy: 'ѓ',
          gla: '⪥',
          gl: '≷',
          glE: '⪒',
          glj: '⪤',
          gnap: '⪊',
          gnapprox: '⪊',
          gne: '⪈',
          gnE: '≩',
          gneq: '⪈',
          gneqq: '≩',
          gnsim: '⋧',
          Gopf: '𝔾',
          gopf: '𝕘',
          grave: '`',
          GreaterEqual: '≥',
          GreaterEqualLess: '⋛',
          GreaterFullEqual: '≧',
          GreaterGreater: '⪢',
          GreaterLess: '≷',
          GreaterSlantEqual: '⩾',
          GreaterTilde: '≳',
          Gscr: '𝒢',
          gscr: 'ℊ',
          gsim: '≳',
          gsime: '⪎',
          gsiml: '⪐',
          gtcc: '⪧',
          gtcir: '⩺',
          gt: '>',
          GT: '>',
          Gt: '≫',
          gtdot: '⋗',
          gtlPar: '⦕',
          gtquest: '⩼',
          gtrapprox: '⪆',
          gtrarr: '⥸',
          gtrdot: '⋗',
          gtreqless: '⋛',
          gtreqqless: '⪌',
          gtrless: '≷',
          gtrsim: '≳',
          gvertneqq: '≩︀',
          gvnE: '≩︀',
          Hacek: 'ˇ',
          hairsp: ' ',
          half: '½',
          hamilt: 'ℋ',
          HARDcy: 'Ъ',
          hardcy: 'ъ',
          harrcir: '⥈',
          harr: '↔',
          hArr: '⇔',
          harrw: '↭',
          Hat: '^',
          hbar: 'ℏ',
          Hcirc: 'Ĥ',
          hcirc: 'ĥ',
          hearts: '♥',
          heartsuit: '♥',
          hellip: '…',
          hercon: '⊹',
          hfr: '𝔥',
          Hfr: 'ℌ',
          HilbertSpace: 'ℋ',
          hksearow: '⤥',
          hkswarow: '⤦',
          hoarr: '⇿',
          homtht: '∻',
          hookleftarrow: '↩',
          hookrightarrow: '↪',
          hopf: '𝕙',
          Hopf: 'ℍ',
          horbar: '―',
          HorizontalLine: '─',
          hscr: '𝒽',
          Hscr: 'ℋ',
          hslash: 'ℏ',
          Hstrok: 'Ħ',
          hstrok: 'ħ',
          HumpDownHump: '≎',
          HumpEqual: '≏',
          hybull: '⁃',
          hyphen: '‐',
          Iacute: 'Í',
          iacute: 'í',
          ic: '⁣',
          Icirc: 'Î',
          icirc: 'î',
          Icy: 'И',
          icy: 'и',
          Idot: 'İ',
          IEcy: 'Е',
          iecy: 'е',
          iexcl: '¡',
          iff: '⇔',
          ifr: '𝔦',
          Ifr: 'ℑ',
          Igrave: 'Ì',
          igrave: 'ì',
          ii: 'ⅈ',
          iiiint: '⨌',
          iiint: '∭',
          iinfin: '⧜',
          iiota: '℩',
          IJlig: 'Ĳ',
          ijlig: 'ĳ',
          Imacr: 'Ī',
          imacr: 'ī',
          image: 'ℑ',
          ImaginaryI: 'ⅈ',
          imagline: 'ℐ',
          imagpart: 'ℑ',
          imath: 'ı',
          Im: 'ℑ',
          imof: '⊷',
          imped: 'Ƶ',
          Implies: '⇒',
          incare: '℅',
          in: '∈',
          infin: '∞',
          infintie: '⧝',
          inodot: 'ı',
          intcal: '⊺',
          int: '∫',
          Int: '∬',
          integers: 'ℤ',
          Integral: '∫',
          intercal: '⊺',
          Intersection: '⋂',
          intlarhk: '⨗',
          intprod: '⨼',
          InvisibleComma: '⁣',
          InvisibleTimes: '⁢',
          IOcy: 'Ё',
          iocy: 'ё',
          Iogon: 'Į',
          iogon: 'į',
          Iopf: '𝕀',
          iopf: '𝕚',
          Iota: 'Ι',
          iota: 'ι',
          iprod: '⨼',
          iquest: '¿',
          iscr: '𝒾',
          Iscr: 'ℐ',
          isin: '∈',
          isindot: '⋵',
          isinE: '⋹',
          isins: '⋴',
          isinsv: '⋳',
          isinv: '∈',
          it: '⁢',
          Itilde: 'Ĩ',
          itilde: 'ĩ',
          Iukcy: 'І',
          iukcy: 'і',
          Iuml: 'Ï',
          iuml: 'ï',
          Jcirc: 'Ĵ',
          jcirc: 'ĵ',
          Jcy: 'Й',
          jcy: 'й',
          Jfr: '𝔍',
          jfr: '𝔧',
          jmath: 'ȷ',
          Jopf: '𝕁',
          jopf: '𝕛',
          Jscr: '𝒥',
          jscr: '𝒿',
          Jsercy: 'Ј',
          jsercy: 'ј',
          Jukcy: 'Є',
          jukcy: 'є',
          Kappa: 'Κ',
          kappa: 'κ',
          kappav: 'ϰ',
          Kcedil: 'Ķ',
          kcedil: 'ķ',
          Kcy: 'К',
          kcy: 'к',
          Kfr: '𝔎',
          kfr: '𝔨',
          kgreen: 'ĸ',
          KHcy: 'Х',
          khcy: 'х',
          KJcy: 'Ќ',
          kjcy: 'ќ',
          Kopf: '𝕂',
          kopf: '𝕜',
          Kscr: '𝒦',
          kscr: '𝓀',
          lAarr: '⇚',
          Lacute: 'Ĺ',
          lacute: 'ĺ',
          laemptyv: '⦴',
          lagran: 'ℒ',
          Lambda: 'Λ',
          lambda: 'λ',
          lang: '⟨',
          Lang: '⟪',
          langd: '⦑',
          langle: '⟨',
          lap: '⪅',
          Laplacetrf: 'ℒ',
          laquo: '«',
          larrb: '⇤',
          larrbfs: '⤟',
          larr: '←',
          Larr: '↞',
          lArr: '⇐',
          larrfs: '⤝',
          larrhk: '↩',
          larrlp: '↫',
          larrpl: '⤹',
          larrsim: '⥳',
          larrtl: '↢',
          latail: '⤙',
          lAtail: '⤛',
          lat: '⪫',
          late: '⪭',
          lates: '⪭︀',
          lbarr: '⤌',
          lBarr: '⤎',
          lbbrk: '❲',
          lbrace: '{',
          lbrack: '[',
          lbrke: '⦋',
          lbrksld: '⦏',
          lbrkslu: '⦍',
          Lcaron: 'Ľ',
          lcaron: 'ľ',
          Lcedil: 'Ļ',
          lcedil: 'ļ',
          lceil: '⌈',
          lcub: '{',
          Lcy: 'Л',
          lcy: 'л',
          ldca: '⤶',
          ldquo: '“',
          ldquor: '„',
          ldrdhar: '⥧',
          ldrushar: '⥋',
          ldsh: '↲',
          le: '≤',
          lE: '≦',
          LeftAngleBracket: '⟨',
          LeftArrowBar: '⇤',
          leftarrow: '←',
          LeftArrow: '←',
          Leftarrow: '⇐',
          LeftArrowRightArrow: '⇆',
          leftarrowtail: '↢',
          LeftCeiling: '⌈',
          LeftDoubleBracket: '⟦',
          LeftDownTeeVector: '⥡',
          LeftDownVectorBar: '⥙',
          LeftDownVector: '⇃',
          LeftFloor: '⌊',
          leftharpoondown: '↽',
          leftharpoonup: '↼',
          leftleftarrows: '⇇',
          leftrightarrow: '↔',
          LeftRightArrow: '↔',
          Leftrightarrow: '⇔',
          leftrightarrows: '⇆',
          leftrightharpoons: '⇋',
          leftrightsquigarrow: '↭',
          LeftRightVector: '⥎',
          LeftTeeArrow: '↤',
          LeftTee: '⊣',
          LeftTeeVector: '⥚',
          leftthreetimes: '⋋',
          LeftTriangleBar: '⧏',
          LeftTriangle: '⊲',
          LeftTriangleEqual: '⊴',
          LeftUpDownVector: '⥑',
          LeftUpTeeVector: '⥠',
          LeftUpVectorBar: '⥘',
          LeftUpVector: '↿',
          LeftVectorBar: '⥒',
          LeftVector: '↼',
          lEg: '⪋',
          leg: '⋚',
          leq: '≤',
          leqq: '≦',
          leqslant: '⩽',
          lescc: '⪨',
          les: '⩽',
          lesdot: '⩿',
          lesdoto: '⪁',
          lesdotor: '⪃',
          lesg: '⋚︀',
          lesges: '⪓',
          lessapprox: '⪅',
          lessdot: '⋖',
          lesseqgtr: '⋚',
          lesseqqgtr: '⪋',
          LessEqualGreater: '⋚',
          LessFullEqual: '≦',
          LessGreater: '≶',
          lessgtr: '≶',
          LessLess: '⪡',
          lesssim: '≲',
          LessSlantEqual: '⩽',
          LessTilde: '≲',
          lfisht: '⥼',
          lfloor: '⌊',
          Lfr: '𝔏',
          lfr: '𝔩',
          lg: '≶',
          lgE: '⪑',
          lHar: '⥢',
          lhard: '↽',
          lharu: '↼',
          lharul: '⥪',
          lhblk: '▄',
          LJcy: 'Љ',
          ljcy: 'љ',
          llarr: '⇇',
          ll: '≪',
          Ll: '⋘',
          llcorner: '⌞',
          Lleftarrow: '⇚',
          llhard: '⥫',
          lltri: '◺',
          Lmidot: 'Ŀ',
          lmidot: 'ŀ',
          lmoustache: '⎰',
          lmoust: '⎰',
          lnap: '⪉',
          lnapprox: '⪉',
          lne: '⪇',
          lnE: '≨',
          lneq: '⪇',
          lneqq: '≨',
          lnsim: '⋦',
          loang: '⟬',
          loarr: '⇽',
          lobrk: '⟦',
          longleftarrow: '⟵',
          LongLeftArrow: '⟵',
          Longleftarrow: '⟸',
          longleftrightarrow: '⟷',
          LongLeftRightArrow: '⟷',
          Longleftrightarrow: '⟺',
          longmapsto: '⟼',
          longrightarrow: '⟶',
          LongRightArrow: '⟶',
          Longrightarrow: '⟹',
          looparrowleft: '↫',
          looparrowright: '↬',
          lopar: '⦅',
          Lopf: '𝕃',
          lopf: '𝕝',
          loplus: '⨭',
          lotimes: '⨴',
          lowast: '∗',
          lowbar: '_',
          LowerLeftArrow: '↙',
          LowerRightArrow: '↘',
          loz: '◊',
          lozenge: '◊',
          lozf: '⧫',
          lpar: '(',
          lparlt: '⦓',
          lrarr: '⇆',
          lrcorner: '⌟',
          lrhar: '⇋',
          lrhard: '⥭',
          lrm: '‎',
          lrtri: '⊿',
          lsaquo: '‹',
          lscr: '𝓁',
          Lscr: 'ℒ',
          lsh: '↰',
          Lsh: '↰',
          lsim: '≲',
          lsime: '⪍',
          lsimg: '⪏',
          lsqb: '[',
          lsquo: '‘',
          lsquor: '‚',
          Lstrok: 'Ł',
          lstrok: 'ł',
          ltcc: '⪦',
          ltcir: '⩹',
          lt: '<',
          LT: '<',
          Lt: '≪',
          ltdot: '⋖',
          lthree: '⋋',
          ltimes: '⋉',
          ltlarr: '⥶',
          ltquest: '⩻',
          ltri: '◃',
          ltrie: '⊴',
          ltrif: '◂',
          ltrPar: '⦖',
          lurdshar: '⥊',
          luruhar: '⥦',
          lvertneqq: '≨︀',
          lvnE: '≨︀',
          macr: '¯',
          male: '♂',
          malt: '✠',
          maltese: '✠',
          Map: '⤅',
          map: '↦',
          mapsto: '↦',
          mapstodown: '↧',
          mapstoleft: '↤',
          mapstoup: '↥',
          marker: '▮',
          mcomma: '⨩',
          Mcy: 'М',
          mcy: 'м',
          mdash: '—',
          mDDot: '∺',
          measuredangle: '∡',
          MediumSpace: ' ',
          Mellintrf: 'ℳ',
          Mfr: '𝔐',
          mfr: '𝔪',
          mho: '℧',
          micro: 'µ',
          midast: '*',
          midcir: '⫰',
          mid: '∣',
          middot: '·',
          minusb: '⊟',
          minus: '−',
          minusd: '∸',
          minusdu: '⨪',
          MinusPlus: '∓',
          mlcp: '⫛',
          mldr: '…',
          mnplus: '∓',
          models: '⊧',
          Mopf: '𝕄',
          mopf: '𝕞',
          mp: '∓',
          mscr: '𝓂',
          Mscr: 'ℳ',
          mstpos: '∾',
          Mu: 'Μ',
          mu: 'μ',
          multimap: '⊸',
          mumap: '⊸',
          nabla: '∇',
          Nacute: 'Ń',
          nacute: 'ń',
          nang: '∠⃒',
          nap: '≉',
          napE: '⩰̸',
          napid: '≋̸',
          napos: 'ŉ',
          napprox: '≉',
          natural: '♮',
          naturals: 'ℕ',
          natur: '♮',
          nbsp: ' ',
          nbump: '≎̸',
          nbumpe: '≏̸',
          ncap: '⩃',
          Ncaron: 'Ň',
          ncaron: 'ň',
          Ncedil: 'Ņ',
          ncedil: 'ņ',
          ncong: '≇',
          ncongdot: '⩭̸',
          ncup: '⩂',
          Ncy: 'Н',
          ncy: 'н',
          ndash: '–',
          nearhk: '⤤',
          nearr: '↗',
          neArr: '⇗',
          nearrow: '↗',
          ne: '≠',
          nedot: '≐̸',
          NegativeMediumSpace: '​',
          NegativeThickSpace: '​',
          NegativeThinSpace: '​',
          NegativeVeryThinSpace: '​',
          nequiv: '≢',
          nesear: '⤨',
          nesim: '≂̸',
          NestedGreaterGreater: '≫',
          NestedLessLess: '≪',
          NewLine: '\n',
          nexist: '∄',
          nexists: '∄',
          Nfr: '𝔑',
          nfr: '𝔫',
          ngE: '≧̸',
          nge: '≱',
          ngeq: '≱',
          ngeqq: '≧̸',
          ngeqslant: '⩾̸',
          nges: '⩾̸',
          nGg: '⋙̸',
          ngsim: '≵',
          nGt: '≫⃒',
          ngt: '≯',
          ngtr: '≯',
          nGtv: '≫̸',
          nharr: '↮',
          nhArr: '⇎',
          nhpar: '⫲',
          ni: '∋',
          nis: '⋼',
          nisd: '⋺',
          niv: '∋',
          NJcy: 'Њ',
          njcy: 'њ',
          nlarr: '↚',
          nlArr: '⇍',
          nldr: '‥',
          nlE: '≦̸',
          nle: '≰',
          nleftarrow: '↚',
          nLeftarrow: '⇍',
          nleftrightarrow: '↮',
          nLeftrightarrow: '⇎',
          nleq: '≰',
          nleqq: '≦̸',
          nleqslant: '⩽̸',
          nles: '⩽̸',
          nless: '≮',
          nLl: '⋘̸',
          nlsim: '≴',
          nLt: '≪⃒',
          nlt: '≮',
          nltri: '⋪',
          nltrie: '⋬',
          nLtv: '≪̸',
          nmid: '∤',
          NoBreak: '⁠',
          NonBreakingSpace: ' ',
          nopf: '𝕟',
          Nopf: 'ℕ',
          Not: '⫬',
          not: '¬',
          NotCongruent: '≢',
          NotCupCap: '≭',
          NotDoubleVerticalBar: '∦',
          NotElement: '∉',
          NotEqual: '≠',
          NotEqualTilde: '≂̸',
          NotExists: '∄',
          NotGreater: '≯',
          NotGreaterEqual: '≱',
          NotGreaterFullEqual: '≧̸',
          NotGreaterGreater: '≫̸',
          NotGreaterLess: '≹',
          NotGreaterSlantEqual: '⩾̸',
          NotGreaterTilde: '≵',
          NotHumpDownHump: '≎̸',
          NotHumpEqual: '≏̸',
          notin: '∉',
          notindot: '⋵̸',
          notinE: '⋹̸',
          notinva: '∉',
          notinvb: '⋷',
          notinvc: '⋶',
          NotLeftTriangleBar: '⧏̸',
          NotLeftTriangle: '⋪',
          NotLeftTriangleEqual: '⋬',
          NotLess: '≮',
          NotLessEqual: '≰',
          NotLessGreater: '≸',
          NotLessLess: '≪̸',
          NotLessSlantEqual: '⩽̸',
          NotLessTilde: '≴',
          NotNestedGreaterGreater: '⪢̸',
          NotNestedLessLess: '⪡̸',
          notni: '∌',
          notniva: '∌',
          notnivb: '⋾',
          notnivc: '⋽',
          NotPrecedes: '⊀',
          NotPrecedesEqual: '⪯̸',
          NotPrecedesSlantEqual: '⋠',
          NotReverseElement: '∌',
          NotRightTriangleBar: '⧐̸',
          NotRightTriangle: '⋫',
          NotRightTriangleEqual: '⋭',
          NotSquareSubset: '⊏̸',
          NotSquareSubsetEqual: '⋢',
          NotSquareSuperset: '⊐̸',
          NotSquareSupersetEqual: '⋣',
          NotSubset: '⊂⃒',
          NotSubsetEqual: '⊈',
          NotSucceeds: '⊁',
          NotSucceedsEqual: '⪰̸',
          NotSucceedsSlantEqual: '⋡',
          NotSucceedsTilde: '≿̸',
          NotSuperset: '⊃⃒',
          NotSupersetEqual: '⊉',
          NotTilde: '≁',
          NotTildeEqual: '≄',
          NotTildeFullEqual: '≇',
          NotTildeTilde: '≉',
          NotVerticalBar: '∤',
          nparallel: '∦',
          npar: '∦',
          nparsl: '⫽⃥',
          npart: '∂̸',
          npolint: '⨔',
          npr: '⊀',
          nprcue: '⋠',
          nprec: '⊀',
          npreceq: '⪯̸',
          npre: '⪯̸',
          nrarrc: '⤳̸',
          nrarr: '↛',
          nrArr: '⇏',
          nrarrw: '↝̸',
          nrightarrow: '↛',
          nRightarrow: '⇏',
          nrtri: '⋫',
          nrtrie: '⋭',
          nsc: '⊁',
          nsccue: '⋡',
          nsce: '⪰̸',
          Nscr: '𝒩',
          nscr: '𝓃',
          nshortmid: '∤',
          nshortparallel: '∦',
          nsim: '≁',
          nsime: '≄',
          nsimeq: '≄',
          nsmid: '∤',
          nspar: '∦',
          nsqsube: '⋢',
          nsqsupe: '⋣',
          nsub: '⊄',
          nsubE: '⫅̸',
          nsube: '⊈',
          nsubset: '⊂⃒',
          nsubseteq: '⊈',
          nsubseteqq: '⫅̸',
          nsucc: '⊁',
          nsucceq: '⪰̸',
          nsup: '⊅',
          nsupE: '⫆̸',
          nsupe: '⊉',
          nsupset: '⊃⃒',
          nsupseteq: '⊉',
          nsupseteqq: '⫆̸',
          ntgl: '≹',
          Ntilde: 'Ñ',
          ntilde: 'ñ',
          ntlg: '≸',
          ntriangleleft: '⋪',
          ntrianglelefteq: '⋬',
          ntriangleright: '⋫',
          ntrianglerighteq: '⋭',
          Nu: 'Ν',
          nu: 'ν',
          num: '#',
          numero: '№',
          numsp: ' ',
          nvap: '≍⃒',
          nvdash: '⊬',
          nvDash: '⊭',
          nVdash: '⊮',
          nVDash: '⊯',
          nvge: '≥⃒',
          nvgt: '>⃒',
          nvHarr: '⤄',
          nvinfin: '⧞',
          nvlArr: '⤂',
          nvle: '≤⃒',
          nvlt: '<⃒',
          nvltrie: '⊴⃒',
          nvrArr: '⤃',
          nvrtrie: '⊵⃒',
          nvsim: '∼⃒',
          nwarhk: '⤣',
          nwarr: '↖',
          nwArr: '⇖',
          nwarrow: '↖',
          nwnear: '⤧',
          Oacute: 'Ó',
          oacute: 'ó',
          oast: '⊛',
          Ocirc: 'Ô',
          ocirc: 'ô',
          ocir: '⊚',
          Ocy: 'О',
          ocy: 'о',
          odash: '⊝',
          Odblac: 'Ő',
          odblac: 'ő',
          odiv: '⨸',
          odot: '⊙',
          odsold: '⦼',
          OElig: 'Œ',
          oelig: 'œ',
          ofcir: '⦿',
          Ofr: '𝔒',
          ofr: '𝔬',
          ogon: '˛',
          Ograve: 'Ò',
          ograve: 'ò',
          ogt: '⧁',
          ohbar: '⦵',
          ohm: 'Ω',
          oint: '∮',
          olarr: '↺',
          olcir: '⦾',
          olcross: '⦻',
          oline: '‾',
          olt: '⧀',
          Omacr: 'Ō',
          omacr: 'ō',
          Omega: 'Ω',
          omega: 'ω',
          Omicron: 'Ο',
          omicron: 'ο',
          omid: '⦶',
          ominus: '⊖',
          Oopf: '𝕆',
          oopf: '𝕠',
          opar: '⦷',
          OpenCurlyDoubleQuote: '“',
          OpenCurlyQuote: '‘',
          operp: '⦹',
          oplus: '⊕',
          orarr: '↻',
          Or: '⩔',
          or: '∨',
          ord: '⩝',
          order: 'ℴ',
          orderof: 'ℴ',
          ordf: 'ª',
          ordm: 'º',
          origof: '⊶',
          oror: '⩖',
          orslope: '⩗',
          orv: '⩛',
          oS: 'Ⓢ',
          Oscr: '𝒪',
          oscr: 'ℴ',
          Oslash: 'Ø',
          oslash: 'ø',
          osol: '⊘',
          Otilde: 'Õ',
          otilde: 'õ',
          otimesas: '⨶',
          Otimes: '⨷',
          otimes: '⊗',
          Ouml: 'Ö',
          ouml: 'ö',
          ovbar: '⌽',
          OverBar: '‾',
          OverBrace: '⏞',
          OverBracket: '⎴',
          OverParenthesis: '⏜',
          para: '¶',
          parallel: '∥',
          par: '∥',
          parsim: '⫳',
          parsl: '⫽',
          part: '∂',
          PartialD: '∂',
          Pcy: 'П',
          pcy: 'п',
          percnt: '%',
          period: '.',
          permil: '‰',
          perp: '⊥',
          pertenk: '‱',
          Pfr: '𝔓',
          pfr: '𝔭',
          Phi: 'Φ',
          phi: 'φ',
          phiv: 'ϕ',
          phmmat: 'ℳ',
          phone: '☎',
          Pi: 'Π',
          pi: 'π',
          pitchfork: '⋔',
          piv: 'ϖ',
          planck: 'ℏ',
          planckh: 'ℎ',
          plankv: 'ℏ',
          plusacir: '⨣',
          plusb: '⊞',
          pluscir: '⨢',
          plus: '+',
          plusdo: '∔',
          plusdu: '⨥',
          pluse: '⩲',
          PlusMinus: '±',
          plusmn: '±',
          plussim: '⨦',
          plustwo: '⨧',
          pm: '±',
          Poincareplane: 'ℌ',
          pointint: '⨕',
          popf: '𝕡',
          Popf: 'ℙ',
          pound: '£',
          prap: '⪷',
          Pr: '⪻',
          pr: '≺',
          prcue: '≼',
          precapprox: '⪷',
          prec: '≺',
          preccurlyeq: '≼',
          Precedes: '≺',
          PrecedesEqual: '⪯',
          PrecedesSlantEqual: '≼',
          PrecedesTilde: '≾',
          preceq: '⪯',
          precnapprox: '⪹',
          precneqq: '⪵',
          precnsim: '⋨',
          pre: '⪯',
          prE: '⪳',
          precsim: '≾',
          prime: '′',
          Prime: '″',
          primes: 'ℙ',
          prnap: '⪹',
          prnE: '⪵',
          prnsim: '⋨',
          prod: '∏',
          Product: '∏',
          profalar: '⌮',
          profline: '⌒',
          profsurf: '⌓',
          prop: '∝',
          Proportional: '∝',
          Proportion: '∷',
          propto: '∝',
          prsim: '≾',
          prurel: '⊰',
          Pscr: '𝒫',
          pscr: '𝓅',
          Psi: 'Ψ',
          psi: 'ψ',
          puncsp: ' ',
          Qfr: '𝔔',
          qfr: '𝔮',
          qint: '⨌',
          qopf: '𝕢',
          Qopf: 'ℚ',
          qprime: '⁗',
          Qscr: '𝒬',
          qscr: '𝓆',
          quaternions: 'ℍ',
          quatint: '⨖',
          quest: '?',
          questeq: '≟',
          quot: '"',
          QUOT: '"',
          rAarr: '⇛',
          race: '∽̱',
          Racute: 'Ŕ',
          racute: 'ŕ',
          radic: '√',
          raemptyv: '⦳',
          rang: '⟩',
          Rang: '⟫',
          rangd: '⦒',
          range: '⦥',
          rangle: '⟩',
          raquo: '»',
          rarrap: '⥵',
          rarrb: '⇥',
          rarrbfs: '⤠',
          rarrc: '⤳',
          rarr: '→',
          Rarr: '↠',
          rArr: '⇒',
          rarrfs: '⤞',
          rarrhk: '↪',
          rarrlp: '↬',
          rarrpl: '⥅',
          rarrsim: '⥴',
          Rarrtl: '⤖',
          rarrtl: '↣',
          rarrw: '↝',
          ratail: '⤚',
          rAtail: '⤜',
          ratio: '∶',
          rationals: 'ℚ',
          rbarr: '⤍',
          rBarr: '⤏',
          RBarr: '⤐',
          rbbrk: '❳',
          rbrace: '}',
          rbrack: ']',
          rbrke: '⦌',
          rbrksld: '⦎',
          rbrkslu: '⦐',
          Rcaron: 'Ř',
          rcaron: 'ř',
          Rcedil: 'Ŗ',
          rcedil: 'ŗ',
          rceil: '⌉',
          rcub: '}',
          Rcy: 'Р',
          rcy: 'р',
          rdca: '⤷',
          rdldhar: '⥩',
          rdquo: '”',
          rdquor: '”',
          rdsh: '↳',
          real: 'ℜ',
          realine: 'ℛ',
          realpart: 'ℜ',
          reals: 'ℝ',
          Re: 'ℜ',
          rect: '▭',
          reg: '®',
          REG: '®',
          ReverseElement: '∋',
          ReverseEquilibrium: '⇋',
          ReverseUpEquilibrium: '⥯',
          rfisht: '⥽',
          rfloor: '⌋',
          rfr: '𝔯',
          Rfr: 'ℜ',
          rHar: '⥤',
          rhard: '⇁',
          rharu: '⇀',
          rharul: '⥬',
          Rho: 'Ρ',
          rho: 'ρ',
          rhov: 'ϱ',
          RightAngleBracket: '⟩',
          RightArrowBar: '⇥',
          rightarrow: '→',
          RightArrow: '→',
          Rightarrow: '⇒',
          RightArrowLeftArrow: '⇄',
          rightarrowtail: '↣',
          RightCeiling: '⌉',
          RightDoubleBracket: '⟧',
          RightDownTeeVector: '⥝',
          RightDownVectorBar: '⥕',
          RightDownVector: '⇂',
          RightFloor: '⌋',
          rightharpoondown: '⇁',
          rightharpoonup: '⇀',
          rightleftarrows: '⇄',
          rightleftharpoons: '⇌',
          rightrightarrows: '⇉',
          rightsquigarrow: '↝',
          RightTeeArrow: '↦',
          RightTee: '⊢',
          RightTeeVector: '⥛',
          rightthreetimes: '⋌',
          RightTriangleBar: '⧐',
          RightTriangle: '⊳',
          RightTriangleEqual: '⊵',
          RightUpDownVector: '⥏',
          RightUpTeeVector: '⥜',
          RightUpVectorBar: '⥔',
          RightUpVector: '↾',
          RightVectorBar: '⥓',
          RightVector: '⇀',
          ring: '˚',
          risingdotseq: '≓',
          rlarr: '⇄',
          rlhar: '⇌',
          rlm: '‏',
          rmoustache: '⎱',
          rmoust: '⎱',
          rnmid: '⫮',
          roang: '⟭',
          roarr: '⇾',
          robrk: '⟧',
          ropar: '⦆',
          ropf: '𝕣',
          Ropf: 'ℝ',
          roplus: '⨮',
          rotimes: '⨵',
          RoundImplies: '⥰',
          rpar: ')',
          rpargt: '⦔',
          rppolint: '⨒',
          rrarr: '⇉',
          Rrightarrow: '⇛',
          rsaquo: '›',
          rscr: '𝓇',
          Rscr: 'ℛ',
          rsh: '↱',
          Rsh: '↱',
          rsqb: ']',
          rsquo: '’',
          rsquor: '’',
          rthree: '⋌',
          rtimes: '⋊',
          rtri: '▹',
          rtrie: '⊵',
          rtrif: '▸',
          rtriltri: '⧎',
          RuleDelayed: '⧴',
          ruluhar: '⥨',
          rx: '℞',
          Sacute: 'Ś',
          sacute: 'ś',
          sbquo: '‚',
          scap: '⪸',
          Scaron: 'Š',
          scaron: 'š',
          Sc: '⪼',
          sc: '≻',
          sccue: '≽',
          sce: '⪰',
          scE: '⪴',
          Scedil: 'Ş',
          scedil: 'ş',
          Scirc: 'Ŝ',
          scirc: 'ŝ',
          scnap: '⪺',
          scnE: '⪶',
          scnsim: '⋩',
          scpolint: '⨓',
          scsim: '≿',
          Scy: 'С',
          scy: 'с',
          sdotb: '⊡',
          sdot: '⋅',
          sdote: '⩦',
          searhk: '⤥',
          searr: '↘',
          seArr: '⇘',
          searrow: '↘',
          sect: '§',
          semi: ';',
          seswar: '⤩',
          setminus: '∖',
          setmn: '∖',
          sext: '✶',
          Sfr: '𝔖',
          sfr: '𝔰',
          sfrown: '⌢',
          sharp: '♯',
          SHCHcy: 'Щ',
          shchcy: 'щ',
          SHcy: 'Ш',
          shcy: 'ш',
          ShortDownArrow: '↓',
          ShortLeftArrow: '←',
          shortmid: '∣',
          shortparallel: '∥',
          ShortRightArrow: '→',
          ShortUpArrow: '↑',
          shy: '­',
          Sigma: 'Σ',
          sigma: 'σ',
          sigmaf: 'ς',
          sigmav: 'ς',
          sim: '∼',
          simdot: '⩪',
          sime: '≃',
          simeq: '≃',
          simg: '⪞',
          simgE: '⪠',
          siml: '⪝',
          simlE: '⪟',
          simne: '≆',
          simplus: '⨤',
          simrarr: '⥲',
          slarr: '←',
          SmallCircle: '∘',
          smallsetminus: '∖',
          smashp: '⨳',
          smeparsl: '⧤',
          smid: '∣',
          smile: '⌣',
          smt: '⪪',
          smte: '⪬',
          smtes: '⪬︀',
          SOFTcy: 'Ь',
          softcy: 'ь',
          solbar: '⌿',
          solb: '⧄',
          sol: '/',
          Sopf: '𝕊',
          sopf: '𝕤',
          spades: '♠',
          spadesuit: '♠',
          spar: '∥',
          sqcap: '⊓',
          sqcaps: '⊓︀',
          sqcup: '⊔',
          sqcups: '⊔︀',
          Sqrt: '√',
          sqsub: '⊏',
          sqsube: '⊑',
          sqsubset: '⊏',
          sqsubseteq: '⊑',
          sqsup: '⊐',
          sqsupe: '⊒',
          sqsupset: '⊐',
          sqsupseteq: '⊒',
          square: '□',
          Square: '□',
          SquareIntersection: '⊓',
          SquareSubset: '⊏',
          SquareSubsetEqual: '⊑',
          SquareSuperset: '⊐',
          SquareSupersetEqual: '⊒',
          SquareUnion: '⊔',
          squarf: '▪',
          squ: '□',
          squf: '▪',
          srarr: '→',
          Sscr: '𝒮',
          sscr: '𝓈',
          ssetmn: '∖',
          ssmile: '⌣',
          sstarf: '⋆',
          Star: '⋆',
          star: '☆',
          starf: '★',
          straightepsilon: 'ϵ',
          straightphi: 'ϕ',
          strns: '¯',
          sub: '⊂',
          Sub: '⋐',
          subdot: '⪽',
          subE: '⫅',
          sube: '⊆',
          subedot: '⫃',
          submult: '⫁',
          subnE: '⫋',
          subne: '⊊',
          subplus: '⪿',
          subrarr: '⥹',
          subset: '⊂',
          Subset: '⋐',
          subseteq: '⊆',
          subseteqq: '⫅',
          SubsetEqual: '⊆',
          subsetneq: '⊊',
          subsetneqq: '⫋',
          subsim: '⫇',
          subsub: '⫕',
          subsup: '⫓',
          succapprox: '⪸',
          succ: '≻',
          succcurlyeq: '≽',
          Succeeds: '≻',
          SucceedsEqual: '⪰',
          SucceedsSlantEqual: '≽',
          SucceedsTilde: '≿',
          succeq: '⪰',
          succnapprox: '⪺',
          succneqq: '⪶',
          succnsim: '⋩',
          succsim: '≿',
          SuchThat: '∋',
          sum: '∑',
          Sum: '∑',
          sung: '♪',
          sup1: '¹',
          sup2: '²',
          sup3: '³',
          sup: '⊃',
          Sup: '⋑',
          supdot: '⪾',
          supdsub: '⫘',
          supE: '⫆',
          supe: '⊇',
          supedot: '⫄',
          Superset: '⊃',
          SupersetEqual: '⊇',
          suphsol: '⟉',
          suphsub: '⫗',
          suplarr: '⥻',
          supmult: '⫂',
          supnE: '⫌',
          supne: '⊋',
          supplus: '⫀',
          supset: '⊃',
          Supset: '⋑',
          supseteq: '⊇',
          supseteqq: '⫆',
          supsetneq: '⊋',
          supsetneqq: '⫌',
          supsim: '⫈',
          supsub: '⫔',
          supsup: '⫖',
          swarhk: '⤦',
          swarr: '↙',
          swArr: '⇙',
          swarrow: '↙',
          swnwar: '⤪',
          szlig: 'ß',
          Tab: '\t',
          target: '⌖',
          Tau: 'Τ',
          tau: 'τ',
          tbrk: '⎴',
          Tcaron: 'Ť',
          tcaron: 'ť',
          Tcedil: 'Ţ',
          tcedil: 'ţ',
          Tcy: 'Т',
          tcy: 'т',
          tdot: '⃛',
          telrec: '⌕',
          Tfr: '𝔗',
          tfr: '𝔱',
          there4: '∴',
          therefore: '∴',
          Therefore: '∴',
          Theta: 'Θ',
          theta: 'θ',
          thetasym: 'ϑ',
          thetav: 'ϑ',
          thickapprox: '≈',
          thicksim: '∼',
          ThickSpace: '  ',
          ThinSpace: ' ',
          thinsp: ' ',
          thkap: '≈',
          thksim: '∼',
          THORN: 'Þ',
          thorn: 'þ',
          tilde: '˜',
          Tilde: '∼',
          TildeEqual: '≃',
          TildeFullEqual: '≅',
          TildeTilde: '≈',
          timesbar: '⨱',
          timesb: '⊠',
          times: '×',
          timesd: '⨰',
          tint: '∭',
          toea: '⤨',
          topbot: '⌶',
          topcir: '⫱',
          top: '⊤',
          Topf: '𝕋',
          topf: '𝕥',
          topfork: '⫚',
          tosa: '⤩',
          tprime: '‴',
          trade: '™',
          TRADE: '™',
          triangle: '▵',
          triangledown: '▿',
          triangleleft: '◃',
          trianglelefteq: '⊴',
          triangleq: '≜',
          triangleright: '▹',
          trianglerighteq: '⊵',
          tridot: '◬',
          trie: '≜',
          triminus: '⨺',
          TripleDot: '⃛',
          triplus: '⨹',
          trisb: '⧍',
          tritime: '⨻',
          trpezium: '⏢',
          Tscr: '𝒯',
          tscr: '𝓉',
          TScy: 'Ц',
          tscy: 'ц',
          TSHcy: 'Ћ',
          tshcy: 'ћ',
          Tstrok: 'Ŧ',
          tstrok: 'ŧ',
          twixt: '≬',
          twoheadleftarrow: '↞',
          twoheadrightarrow: '↠',
          Uacute: 'Ú',
          uacute: 'ú',
          uarr: '↑',
          Uarr: '↟',
          uArr: '⇑',
          Uarrocir: '⥉',
          Ubrcy: 'Ў',
          ubrcy: 'ў',
          Ubreve: 'Ŭ',
          ubreve: 'ŭ',
          Ucirc: 'Û',
          ucirc: 'û',
          Ucy: 'У',
          ucy: 'у',
          udarr: '⇅',
          Udblac: 'Ű',
          udblac: 'ű',
          udhar: '⥮',
          ufisht: '⥾',
          Ufr: '𝔘',
          ufr: '𝔲',
          Ugrave: 'Ù',
          ugrave: 'ù',
          uHar: '⥣',
          uharl: '↿',
          uharr: '↾',
          uhblk: '▀',
          ulcorn: '⌜',
          ulcorner: '⌜',
          ulcrop: '⌏',
          ultri: '◸',
          Umacr: 'Ū',
          umacr: 'ū',
          uml: '¨',
          UnderBar: '_',
          UnderBrace: '⏟',
          UnderBracket: '⎵',
          UnderParenthesis: '⏝',
          Union: '⋃',
          UnionPlus: '⊎',
          Uogon: 'Ų',
          uogon: 'ų',
          Uopf: '𝕌',
          uopf: '𝕦',
          UpArrowBar: '⤒',
          uparrow: '↑',
          UpArrow: '↑',
          Uparrow: '⇑',
          UpArrowDownArrow: '⇅',
          updownarrow: '↕',
          UpDownArrow: '↕',
          Updownarrow: '⇕',
          UpEquilibrium: '⥮',
          upharpoonleft: '↿',
          upharpoonright: '↾',
          uplus: '⊎',
          UpperLeftArrow: '↖',
          UpperRightArrow: '↗',
          upsi: 'υ',
          Upsi: 'ϒ',
          upsih: 'ϒ',
          Upsilon: 'Υ',
          upsilon: 'υ',
          UpTeeArrow: '↥',
          UpTee: '⊥',
          upuparrows: '⇈',
          urcorn: '⌝',
          urcorner: '⌝',
          urcrop: '⌎',
          Uring: 'Ů',
          uring: 'ů',
          urtri: '◹',
          Uscr: '𝒰',
          uscr: '𝓊',
          utdot: '⋰',
          Utilde: 'Ũ',
          utilde: 'ũ',
          utri: '▵',
          utrif: '▴',
          uuarr: '⇈',
          Uuml: 'Ü',
          uuml: 'ü',
          uwangle: '⦧',
          vangrt: '⦜',
          varepsilon: 'ϵ',
          varkappa: 'ϰ',
          varnothing: '∅',
          varphi: 'ϕ',
          varpi: 'ϖ',
          varpropto: '∝',
          varr: '↕',
          vArr: '⇕',
          varrho: 'ϱ',
          varsigma: 'ς',
          varsubsetneq: '⊊︀',
          varsubsetneqq: '⫋︀',
          varsupsetneq: '⊋︀',
          varsupsetneqq: '⫌︀',
          vartheta: 'ϑ',
          vartriangleleft: '⊲',
          vartriangleright: '⊳',
          vBar: '⫨',
          Vbar: '⫫',
          vBarv: '⫩',
          Vcy: 'В',
          vcy: 'в',
          vdash: '⊢',
          vDash: '⊨',
          Vdash: '⊩',
          VDash: '⊫',
          Vdashl: '⫦',
          veebar: '⊻',
          vee: '∨',
          Vee: '⋁',
          veeeq: '≚',
          vellip: '⋮',
          verbar: '|',
          Verbar: '‖',
          vert: '|',
          Vert: '‖',
          VerticalBar: '∣',
          VerticalLine: '|',
          VerticalSeparator: '❘',
          VerticalTilde: '≀',
          VeryThinSpace: ' ',
          Vfr: '𝔙',
          vfr: '𝔳',
          vltri: '⊲',
          vnsub: '⊂⃒',
          vnsup: '⊃⃒',
          Vopf: '𝕍',
          vopf: '𝕧',
          vprop: '∝',
          vrtri: '⊳',
          Vscr: '𝒱',
          vscr: '𝓋',
          vsubnE: '⫋︀',
          vsubne: '⊊︀',
          vsupnE: '⫌︀',
          vsupne: '⊋︀',
          Vvdash: '⊪',
          vzigzag: '⦚',
          Wcirc: 'Ŵ',
          wcirc: 'ŵ',
          wedbar: '⩟',
          wedge: '∧',
          Wedge: '⋀',
          wedgeq: '≙',
          weierp: '℘',
          Wfr: '𝔚',
          wfr: '𝔴',
          Wopf: '𝕎',
          wopf: '𝕨',
          wp: '℘',
          wr: '≀',
          wreath: '≀',
          Wscr: '𝒲',
          wscr: '𝓌',
          xcap: '⋂',
          xcirc: '◯',
          xcup: '⋃',
          xdtri: '▽',
          Xfr: '𝔛',
          xfr: '𝔵',
          xharr: '⟷',
          xhArr: '⟺',
          Xi: 'Ξ',
          xi: 'ξ',
          xlarr: '⟵',
          xlArr: '⟸',
          xmap: '⟼',
          xnis: '⋻',
          xodot: '⨀',
          Xopf: '𝕏',
          xopf: '𝕩',
          xoplus: '⨁',
          xotime: '⨂',
          xrarr: '⟶',
          xrArr: '⟹',
          Xscr: '𝒳',
          xscr: '𝓍',
          xsqcup: '⨆',
          xuplus: '⨄',
          xutri: '△',
          xvee: '⋁',
          xwedge: '⋀',
          Yacute: 'Ý',
          yacute: 'ý',
          YAcy: 'Я',
          yacy: 'я',
          Ycirc: 'Ŷ',
          ycirc: 'ŷ',
          Ycy: 'Ы',
          ycy: 'ы',
          yen: '¥',
          Yfr: '𝔜',
          yfr: '𝔶',
          YIcy: 'Ї',
          yicy: 'ї',
          Yopf: '𝕐',
          yopf: '𝕪',
          Yscr: '𝒴',
          yscr: '𝓎',
          YUcy: 'Ю',
          yucy: 'ю',
          yuml: 'ÿ',
          Yuml: 'Ÿ',
          Zacute: 'Ź',
          zacute: 'ź',
          Zcaron: 'Ž',
          zcaron: 'ž',
          Zcy: 'З',
          zcy: 'з',
          Zdot: 'Ż',
          zdot: 'ż',
          zeetrf: 'ℨ',
          ZeroWidthSpace: '​',
          Zeta: 'Ζ',
          zeta: 'ζ',
          zfr: '𝔷',
          Zfr: 'ℨ',
          ZHcy: 'Ж',
          zhcy: 'ж',
          zigrarr: '⇝',
          zopf: '𝕫',
          Zopf: 'ℤ',
          Zscr: '𝒵',
          zscr: '𝓏',
          zwj: '‍',
          zwnj: '‌',
        };
    }, function(e, t) {
      e.exports = function(e) {
          if ('function' != typeof e) throw TypeError(e + ' is not a function!');
          return e;
        };
    }, function(e, t, n) {
      var r = n(33);
      e.exports = function(e) {
          if (!r(e)) throw TypeError(e + ' is not an object!');
          return e;
        };
    }, function(e, t, n) {
      var r = n(33),
          o = n(246),
          i = n(42)('species');
      e.exports = function(e) {
          var t;
          return o(e) && (t = e.constructor, 'function' != typeof t || t !== Array && !o(t.prototype) || (t = void 0), r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t;
        };
    }, function(e, t, n) {
      var r = n(239);
      e.exports = function(e, t) {
          return new(r(e))(t);
        };
    }, function(e, t, n) {
      var r = n(33),
          o = n(32).document,
          i = r(o) && r(o.createElement);
      e.exports = function(e) {
          return i ? o.createElement(e) : {};
        };
    }, function(e, t, n) {
      var r = n(42)('match');
      e.exports = function(e) {
          var t = /./;
          try {
              '/./' [e](t);
            } catch (n) {
              try {
                  return t[r] = !1, !'/./' [e](t);
                } catch (e) {}
            }
          return !0;
        };
    }, function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
          return n.call(e, t);
        };
    }, function(e, t, n) {
      e.exports = !n(62) && !n(109)(function() {
          return 7 != Object.defineProperty(n(241)('div'), 'a', {
              get: function() {
                  return 7;
                },
            }).a;
        });
    }, function(e, t, n) {
      var r = n(61);
      e.exports = Object('z').propertyIsEnumerable(0) ? Object : function(e) {
          return 'String' == r(e) ? e.split('') : Object(e);
        };
    }, function(e, t, n) {
      var r = n(61);
      e.exports = Array.isArray || function(e) {
          return 'Array' == r(e);
        };
    }, function(e, t, n) {
      var r = n(33),
          o = n(61),
          i = n(42)('match');
      e.exports = function(e) {
          var t;
          return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
        };
    }, function(e, t, n) {
      var r = n(238),
          o = n(244),
          i = n(255),
          s = Object.defineProperty;
      t.f = n(62) ? Object.defineProperty : function(e, t, n) {
          if (r(e), t = i(t, !0), r(n), o) try {
              return s(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
          return 'value' in n && (e[t] = n.value), e;
        };
    }, function(e, t) {
      e.exports = function(e, t) {
          return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
        };
    }, function(e, t, n) {
      var r = n(32),
          o = n(64),
          i = n(243),
          s = n(111)('src'),
          a = Function.toString,
          c = ('' + a).split('toString');
      n(106).inspectSource = function(e) {
          return a.call(e);
        }, (e.exports = function(e, t, n, a) {
          var u = 'function' == typeof n;
          u && (i(n, 'name') || o(n, 'name', t)), e[t] !== n && (u && (i(n, s) || o(n, s, e[t] ? '' + e[t] : c.join(String(t)))), e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)));
        })(Function.prototype, 'toString', function() {
          return 'function' == typeof this && this[s] || a.call(this);
        });
    }, function(e, t, n) {
      var r = n(32),
          o = r['__core-js_shared__'] || (r['__core-js_shared__'] = {});
      e.exports = function(e) {
          return o[e] || (o[e] = {});
        };
    }, function(e, t, n) {
      var r = n(247),
          o = n(108);
      e.exports = function(e, t, n) {
          if (r(t)) throw TypeError('String#' + n + ' doesn\'t accept regex!');
          return String(o(e));
        };
    }, function(e, t) {
      var n = Math.ceil,
          r = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
        };
    }, function(e, t, n) {
      var r = n(108);
      e.exports = function(e) {
          return Object(r(e));
        };
    }, function(e, t, n) {
      var r = n(33);
      e.exports = function(e, t) {
          if (!r(e)) return e;
          var n, o;
          if (t && 'function' == typeof(n = e.toString) && !r(o = n.call(e))) return o;
          if ('function' == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
          if (!t && 'function' == typeof(n = e.toString) && !r(o = n.call(e))) return o;
          throw TypeError('Can\'t convert object to primitive value');
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e;
        }

      function o(e, t, n) {
          function o(e, t) {
              var n = y.hasOwnProperty(t) ? y[t] : null;
              w.hasOwnProperty(t) && a('OVERRIDE_BASE' === n, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', t), e && a('DEFINE_MANY' === n || 'DEFINE_MANY_MERGED' === n, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', t);
            }

          function u(e, n) {
              if (n) {
                  a('function' != typeof n, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'), a(!t(n), 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.');
                  var r = e.prototype,
                      i = r.__reactAutoBindPairs;
                  n.hasOwnProperty(c) && b.mixins(e, n.mixins);
                  for (var s in n)
                      if (n.hasOwnProperty(s) && s !== c) {
                          var u = n[s],
                              l = r.hasOwnProperty(s);
                          if (o(l, s), b.hasOwnProperty(s)) b[s](e, u);
                          else {
                              var p = y.hasOwnProperty(s),
                                  d = 'function' == typeof u,
                                  v = d && !p && !l && !1 !== n.autobind;
                              if (v) i.push(s, u), r[s] = u;
                              else if (l) {
                                  var m = y[s];
                                  a(p && ('DEFINE_MANY_MERGED' === m || 'DEFINE_MANY' === m), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', m, s), 'DEFINE_MANY_MERGED' === m ? r[s] = f(r[s], u) : 'DEFINE_MANY' === m && (r[s] = h(r[s], u));
                                } else r[s] = u;
                            }
                        }
                } else;
            }

          function l(e, t) {
              if (t)
                  for (var n in t) {
                      var r = t[n];
                      if (t.hasOwnProperty(n)) {
                          var o = n in b;
                          a(!o, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                          var i = n in e;
                          a(!i, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', n), e[n] = r;
                        }
                    }
            }

          function p(e, t) {
              a(e && t && 'object' == typeof e && 'object' == typeof t, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');
              for (var n in t) t.hasOwnProperty(n) && (a(void 0 === e[n], 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', n), e[n] = t[n]);
              return e;
            }

          function f(e, t) {
              return function() {
                  var n = e.apply(this, arguments),
                      r = t.apply(this, arguments);
                  if (null == n) return r;
                  if (null == r) return n;
                  var o = {};
                  return p(o, n), p(o, r), o;
                };
            }

          function h(e, t) {
              return function() {
                  e.apply(this, arguments), t.apply(this, arguments);
                };
            }

          function d(e, t) {
              var n = t.bind(e);
              return n;
            }

          function v(e) {
              for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                  var r = t[n],
                      o = t[n + 1];
                  e[r] = d(e, o);
                }
            }

          function m(e) {
              var t = r(function(e, r, o) {
                  this.__reactAutoBindPairs.length && v(this), this.props = e, this.context = r, this.refs = s, this.updater = o || n, this.state = null;
                  var i = this.getInitialState ? this.getInitialState() : null;
                  a('object' == typeof i && !Array.isArray(i), '%s.getInitialState(): must return an object or null', t.displayName || 'ReactCompositeComponent'), this.state = i;
                });
              t.prototype = new C, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], g.forEach(u.bind(null, t)), u(t, _), u(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), a(t.prototype.render, 'createClass(...): Class specification must implement a `render` method.');
              for (var o in y) t.prototype[o] || (t.prototype[o] = null);
              return t;
            }
          var g = [],
              y = {
                  mixins: 'DEFINE_MANY',
                  statics: 'DEFINE_MANY',
                  propTypes: 'DEFINE_MANY',
                  contextTypes: 'DEFINE_MANY',
                  childContextTypes: 'DEFINE_MANY',
                  getDefaultProps: 'DEFINE_MANY_MERGED',
                  getInitialState: 'DEFINE_MANY_MERGED',
                  getChildContext: 'DEFINE_MANY_MERGED',
                  render: 'DEFINE_ONCE',
                  componentWillMount: 'DEFINE_MANY',
                  componentDidMount: 'DEFINE_MANY',
                  componentWillReceiveProps: 'DEFINE_MANY',
                  shouldComponentUpdate: 'DEFINE_ONCE',
                  componentWillUpdate: 'DEFINE_MANY',
                  componentDidUpdate: 'DEFINE_MANY',
                  componentWillUnmount: 'DEFINE_MANY',
                  updateComponent: 'OVERRIDE_BASE',
                },
              b = {
                  displayName: function(e, t) {
                      e.displayName = t;
                    },
                  mixins: function(e, t) {
                      if (t)
                          for (var n = 0; n < t.length; n++) u(e, t[n]);
                    },
                  childContextTypes: function(e, t) {
                      e.childContextTypes = i({}, e.childContextTypes, t);
                    },
                  contextTypes: function(e, t) {
                      e.contextTypes = i({}, e.contextTypes, t);
                    },
                  getDefaultProps: function(e, t) {
                      e.getDefaultProps ? e.getDefaultProps = f(e.getDefaultProps, t) : e.getDefaultProps = t;
                    },
                  propTypes: function(e, t) {
                      e.propTypes = i({}, e.propTypes, t);
                    },
                  statics: function(e, t) {
                      l(e, t);
                    },
                  autobind: function() {},
                },
              _ = {
                  componentDidMount: function() {
                      this.__isMounted = !0;
                    },
                  componentWillUnmount: function() {
                      this.__isMounted = !1;
                    },
                },
              w = {
                  replaceState: function(e, t) {
                      this.updater.enqueueReplaceState(this, e, t);
                    },
                  isMounted: function() {
                      return !!this.__isMounted;
                    },
                },
              C = function() {};
          return i(C.prototype, e.prototype, w), m;
        }
      var i = n(5),
          s = n(43),
          a = n(1),
          c = 'mixins';
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e.replace(o, function(e, t) {
              return t.toUpperCase();
            });
        }
      var o = /-(.)/g;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return o(e.replace(i, 'ms-'));
        }
      var o = n(257),
          i = /^-ms-/;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : 'contains' in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
        }
      var o = n(267);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.length;
          if ((Array.isArray(e) || 'object' != typeof e && 'function' != typeof e) && s(!1), 'number' != typeof t && s(!1), 0 === t || t - 1 in e || s(!1), 'function' == typeof e.callee && s(!1), e.hasOwnProperty) try {
              return Array.prototype.slice.call(e);
            } catch (e) {}
          for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
          return n;
        }

      function o(e) {
          return !!e && ('object' == typeof e || 'function' == typeof e) && 'length' in e && !('setInterval' in e) && 'number' != typeof e.nodeType && (Array.isArray(e) || 'callee' in e || 'item' in e);
        }

      function i(e) {
          return o(e) ? Array.isArray(e) ? e.slice() : r(e) : [e];
        }
      var s = n(1);
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.match(l);
          return t && t[1].toLowerCase();
        }

      function o(e, t) {
          var n = u;
          u || c(!1);
          var o = r(e),
              i = o && a(o);
          if (i) {
              n.innerHTML = i[1] + e + i[2];
              for (var l = i[0]; l--;) n = n.lastChild;
            } else n.innerHTML = e;
          var p = n.getElementsByTagName('script');
          p.length && (t || c(!1), s(p).forEach(t));
          for (var f = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
          return f;
        }
      var i = n(9),
          s = n(260),
          a = n(262),
          c = n(1),
          u = i.canUseDOM ? document.createElement('div') : null,
          l = /^\s*<(\w+)/;
      e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return s || i(!1), f.hasOwnProperty(e) || (e = '*'), a.hasOwnProperty(e) || (s.innerHTML = '*' === e ? '<link />' : '<' + e + '></' + e + '>', a[e] = !s.firstChild), a[e] ? f[e] : null;
        }
      var o = n(9),
          i = n(1),
          s = o.canUseDOM ? document.createElement('div') : null,
          a = {},
          c = [1, '<select multiple="true">', '</select>'],
          u = [1, '<table>', '</table>'],
          l = [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'],
          f = {
              '*': [1, '?<div>', '</div>'],
              area: [1, '<map>', '</map>'],
              col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
              legend: [1, '<fieldset>', '</fieldset>'],
              param: [1, '<object>', '</object>'],
              tr: [2, '<table><tbody>', '</tbody></table>'],
              optgroup: c,
              option: c,
              caption: u,
              colgroup: u,
              tbody: u,
              tfoot: u,
              thead: u,
              td: l,
              th: l,
            };
      ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'].forEach(function(e) {
          f[e] = p, a[e] = !0;
        }), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e.Window && e instanceof e.Window ? {
              x: e.pageXOffset || e.document.documentElement.scrollLeft,
              y: e.pageYOffset || e.document.documentElement.scrollTop,
            } : {
              x: e.scrollLeft,
              y: e.scrollTop,
            };
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e.replace(o, '-$1').toLowerCase();
        }
      var o = /([A-Z])/g;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return o(e).replace(i, '-ms-');
        }
      var o = n(264),
          i = /^ms-/;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e ? e.ownerDocument || e : document,
              n = t.defaultView || window;
          return !(!e || !('function' == typeof n.Node ? e instanceof n.Node : 'object' == typeof e && 'number' == typeof e.nodeType && 'string' == typeof e.nodeName));
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return o(e) && 3 == e.nodeType;
        }
      var o = n(266);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = {};
          return function(n) {
              return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n];
            };
        }
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              arguments: !0,
              arity: !0,
            },
          i = 'function' == typeof Object.getOwnPropertySymbols;
      e.exports = function(e, t, n) {
          if ('string' != typeof t) {
              var s = Object.getOwnPropertyNames(t);
              i && (s = s.concat(Object.getOwnPropertySymbols(t)));
              for (var a = 0; a < s.length; ++a)
                  if (!(r[s[a]] || o[s[a]] || n && n[s[a]])) try {
                      e[s[a]] = t[s[a]];
                    } catch (e) {}
            }
          return e;
        };
    }, function(e, t, n) {
      'use strict';
      var r = function(e, t, n, r, o, i, s, a) {
          if (!e) {
              var c;
              if (void 0 === t) c = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
              else {
                  var u = [n, r, o, i, s, a],
                      l = 0;
                  c = new Error(t.replace(/%s/g, function() {
                      return u[l++];
                    })), c.name = 'Invariant Violation';
                }
              throw c.framesToPop = 1, c;
            }
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
              t && Object.keys(t).forEach(function(n) {
                  e[n] = t[n];
                });
            }), e;
        }

      function o(e) {
          return Object.prototype.toString.call(e);
        }

      function i(e) {
          return '[object String]' === o(e);
        }

      function s(e) {
          return '[object Object]' === o(e);
        }

      function a(e) {
          return '[object RegExp]' === o(e);
        }

      function c(e) {
          return '[object Function]' === o(e);
        }

      function u(e) {
          return e.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
        }

      function l(e) {
          return Object.keys(e || {}).reduce(function(e, t) {
              return e || y.hasOwnProperty(t);
            }, !1);
        }

      function p(e) {
          e.__index__ = -1, e.__text_cache__ = '';
        }

      function f(e) {
          return function(t, n) {
              var r = t.slice(n);
              return e.test(r) ? r.match(e)[0].length : 0;
            };
        }

      function h() {
          return function(e, t) {
              t.normalize(e);
            };
        }

      function d(e) {
          function t(e) {
              return e.replace('%TLDS%', o.src_tlds);
            }

          function r(e, t) {
              throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
            }
          var o = e.re = n(272)(e.__opts__),
              l = e.__tlds__.slice();
          e.onCompile(), e.__tlds_replaced__ || l.push(_), l.push(o.src_xn), o.src_tlds = l.join('|'), o.email_fuzzy = RegExp(t(o.tpl_email_fuzzy), 'i'), o.link_fuzzy = RegExp(t(o.tpl_link_fuzzy), 'i'), o.link_no_ip_fuzzy = RegExp(t(o.tpl_link_no_ip_fuzzy), 'i'), o.host_fuzzy_test = RegExp(t(o.tpl_host_fuzzy_test), 'i');
          var d = [];
          e.__compiled__ = {}, Object.keys(e.__schemas__).forEach(function(t) {
              var n = e.__schemas__[t];
              if (null !== n) {
                  var o = {
                      validate: null,
                      link: null,
                    };
                  return e.__compiled__[t] = o, s(n) ? (a(n.validate) ? o.validate = f(n.validate) : c(n.validate) ? o.validate = n.validate : r(t, n), void(c(n.normalize) ? o.normalize = n.normalize : n.normalize ? r(t, n) : o.normalize = h())) : i(n) ? void d.push(t) : void r(t, n);
                }
            }), d.forEach(function(t) {
              e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize);
            }), e.__compiled__[''] = {
              validate: null,
              normalize: h(),
            };
          var v = Object.keys(e.__compiled__).filter(function(t) {
              return t.length > 0 && e.__compiled__[t];
            }).map(u).join('|');
          e.re.schema_test = RegExp('(^|(?!_)(?:[><｜]|' + o.src_ZPCc + '))(' + v + ')', 'i'), e.re.schema_search = RegExp('(^|(?!_)(?:[><｜]|' + o.src_ZPCc + '))(' + v + ')', 'ig'), e.re.pretest = RegExp('(' + e.re.schema_test.source + ')|(' + e.re.host_fuzzy_test.source + ')|@', 'i'), p(e);
        }

      function v(e, t) {
          var n = e.__index__,
              r = e.__last_index__,
              o = e.__text_cache__.slice(n, r);
          this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = o, this.text = o, this.url = o;
        }

      function m(e, t) {
          var n = new v(e, t);
          return e.__compiled__[n.schema].normalize(n, e), n;
        }

      function g(e, t) {
          if (!(this instanceof g)) return new g(e, t);
          t || l(e) && (t = e, e = {}), this.__opts__ = r({}, y, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = '', this.__text_cache__ = '', this.__schemas__ = r({}, b, e), this.__compiled__ = {}, this.__tlds__ = w, this.__tlds_replaced__ = !1, this.re = {}, d(this);
        }
      var y = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1,
          },
          b = {
              'http:': {
                  validate: function(e, t, n) {
                      var r = e.slice(t);
                      return n.re.http || (n.re.http = new RegExp('^\\/\\/' + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, 'i')), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
                    },
                },
              'https:': 'http:',
              'ftp:': 'http:',
              '//': {
                  validate: function(e, t, n) {
                      var r = e.slice(t);
                      return n.re.no_http || (n.re.no_http = new RegExp('^' + n.re.src_auth + '(?:localhost|(?:(?:' + n.re.src_domain + ')\\.)+' + n.re.src_domain_root + ')' + n.re.src_port + n.re.src_host_terminator + n.re.src_path, 'i')), n.re.no_http.test(r) ? t >= 3 && ':' === e[t - 3] ? 0 : t >= 3 && '/' === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0;
                    },
                },
              'mailto:': {
                  validate: function(e, t, n) {
                      var r = e.slice(t);
                      return n.re.mailto || (n.re.mailto = new RegExp('^' + n.re.src_email_name + '@' + n.re.src_host_strict, 'i')), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
                    },
                },
            },
          _ = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]',
          w = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
      g.prototype.add = function(e, t) {
          return this.__schemas__[e] = t, d(this), this;
        }, g.prototype.set = function(e) {
          return this.__opts__ = r(this.__opts__, e), this;
        }, g.prototype.test = function(e) {
          if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
          var t, n, r, o, i, s, a, c;
          if (this.re.schema_test.test(e))
              for (a = this.re.schema_search, a.lastIndex = 0; null !== (t = a.exec(e));)
                  if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
                      this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
                      break;
                    }
          return this.__opts__.fuzzyLink && this.__compiled__['http:'] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = '', this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__['mailto:'] && e.indexOf('@') >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = 'mailto:', this.__index__ = i, this.__last_index__ = s)), this.__index__ >= 0;
        }, g.prototype.pretest = function(e) {
          return this.re.pretest.test(e);
        }, g.prototype.testSchemaAt = function(e, t, n) {
          return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0;
        }, g.prototype.match = function(e) {
          var t = 0,
              n = [];
          this.__index__ >= 0 && this.__text_cache__ === e && (n.push(m(this, t)), t = this.__last_index__);
          for (var r = t ? e.slice(t) : e; this.test(r);) n.push(m(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
          return n.length ? n : null;
        }, g.prototype.tlds = function(e, t) {
          return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, t, n) {
              return e !== n[t - 1];
            }).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this);
        }, g.prototype.normalize = function(e) {
          e.schema || (e.url = 'http://' + e.url), 'mailto:' !== e.schema || /^mailto:/i.test(e.url) || (e.url = 'mailto:' + e.url);
        }, g.prototype.onCompile = function() {}, e.exports = g;
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t = {};
          t.src_Any = n(183).source, t.src_Cc = n(181).source, t.src_Z = n(182).source, t.src_P = n(93).source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join('|'), t.src_ZCc = [t.src_Z, t.src_Cc].join('|');
          return t.src_pseudo_letter = '(?:(?![><｜]|' + t.src_ZPCc + ')' + t.src_Any + ')', t.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)', t.src_auth = '(?:(?:(?!' + t.src_ZCc + '|[@/\\[\\]()]).)+@)?', t.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?', t.src_host_terminator = '(?=$|[><｜]|' + t.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + t.src_ZPCc + '))', t.src_path = '(?:[/?#](?:(?!' + t.src_ZCc + '|[><｜]|[()[\\]{}.,"\'?!\\-]).|\\[(?:(?!' + t.src_ZCc + '|\\]).)*\\]|\\((?:(?!' + t.src_ZCc + '|[)]).)*\\)|\\{(?:(?!' + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + '|[\']).)+\\\'|\\\'(?=' + t.src_pseudo_letter + '|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!' + t.src_ZCc + '|[.]).|' + (e && e['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') + '\\,(?!' + t.src_ZCc + ').|\\!(?!' + t.src_ZCc + '|[!]).|\\?(?!' + t.src_ZCc + '|[?]).)+|\\/)?', t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = 'xn--[a-z0-9\\-]{1,59}', t.src_domain_root = '(?:' + t.src_xn + '|' + t.src_pseudo_letter + '{1,63})', t.src_domain = '(?:' + t.src_xn + '|(?:' + t.src_pseudo_letter + ')|(?:' + t.src_pseudo_letter + '(?:-(?!-)|' + t.src_pseudo_letter + '){0,61}' + t.src_pseudo_letter + '))', t.src_host = '(?:(?:(?:(?:' + t.src_domain + ')\\.)*' + t.src_domain + '))', t.tpl_host_fuzzy = '(?:' + t.src_ip4 + '|(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%)))', t.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%))', t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + t.src_ZPCc + '|>|$))', t.tpl_email_fuzzy = '(^|[><｜]|\\(|' + t.src_ZCc + ')(' + t.src_email_name + '@' + t.tpl_host_fuzzy_strict + ')', t.tpl_link_fuzzy = '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' + t.src_ZPCc + '))((?![$+<=>^`|｜])' + t.tpl_host_port_fuzzy_strict + t.src_path + ')', t.tpl_link_no_ip_fuzzy = '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' + t.src_ZPCc + '))((?![$+<=>^`|｜])' + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ')', t;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return null == e ? void 0 === e ? c : a : u && u in Object(e) ? n.i(i.a)(e) : n.i(s.a)(e);
        }
      var o = n(115),
          i = n(276),
          s = n(277),
          a = '[object Null]',
          c = '[object Undefined]',
          u = o.a ? o.a.toStringTag : void 0;
      t.a = r;
    }, function(e, t, n) {
      'use strict';
      (function(e) {
          var n = 'object' == typeof e && e && e.Object === Object && e;
          t.a = n;
        }).call(t, n(53));
    }, function(e, t, n) {
      'use strict';
      var r = n(278),
          o = n.i(r.a)(Object.getPrototypeOf, Object);
      t.a = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = s.call(e, c),
              n = e[c];
          try {
              e[c] = void 0;
              var r = !0;
            } catch (e) {}
          var o = a.call(e);
          return r && (t ? e[c] = n : delete e[c]), o;
        }
      var o = n(115),
          i = Object.prototype,
          s = i.hasOwnProperty,
          a = i.toString,
          c = o.a ? o.a.toStringTag : void 0;
      t.a = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return i.call(e);
        }
      var o = Object.prototype,
          i = o.toString;
      t.a = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return function(n) {
              return e(t(n));
            };
        }
      t.a = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(274),
          o = 'object' == typeof self && self && self.Object === Object && self,
          i = r.a || o || Function('return this')();
      t.a = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return null != e && 'object' == typeof e;
        }
      t.a = r;
    }, function(e, t, n) {
      'use strict';
      e.exports = n(287);
    }, function(e, t, n) {
      'use strict';
      e.exports = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'meta', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'section', 'source', 'title', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
    }, function(e, t, n) {
      'use strict';
      t.parseLinkLabel = n(285), t.parseLinkDestination = n(284), t.parseLinkTitle = n(286);
    }, function(e, t, n) {
      'use strict';
      var r = n(2).isSpace,
          o = n(2).unescapeAll;
      e.exports = function(e, t, n) {
          var i, s, a = t,
              c = {
                  ok: !1,
                  pos: 0,
                  lines: 0,
                  str: '',
                };
          if (60 === e.charCodeAt(t)) {
              for (t++; t < n;) {
                  if (10 === (i = e.charCodeAt(t)) || r(i)) return c;
                  if (62 === i) return c.pos = t + 1, c.str = o(e.slice(a + 1, t)), c.ok = !0, c;
                  92 === i && t + 1 < n ? t += 2 : t++;
                }
              return c;
            }
          for (s = 0; t < n && 32 !== (i = e.charCodeAt(t)) && !(i < 32 || 127 === i);)
              if (92 === i && t + 1 < n) t += 2;
              else {
                  if (40 === i && ++s > 1) break;
                  if (41 === i && --s < 0) break;
                  t++;
                }
          return a === t ? c : (c.str = o(e.slice(a, t)), c.lines = 0, c.pos = t, c.ok = !0, c);
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
          var r, o, i, s, a = -1,
              c = e.posMax,
              u = e.pos;
          for (e.pos = t + 1, r = 1; e.pos < c;) {
              if (93 === (i = e.src.charCodeAt(e.pos)) && 0 === --r) {
                  o = !0;
                  break;
                }
              if (s = e.pos, e.md.inline.skipToken(e), 91 === i)
                  if (s === e.pos - 1) r++;
                  else if (n) return e.pos = u, -1;
            }
          return o && (a = e.pos), e.pos = u, a;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).unescapeAll;
      e.exports = function(e, t, n) {
          var o, i, s = 0,
              a = t,
              c = {
                  ok: !1,
                  pos: 0,
                  lines: 0,
                  str: '',
                };
          if (t >= n) return c;
          if (34 !== (i = e.charCodeAt(t)) && 39 !== i && 40 !== i) return c;
          for (t++, 40 === i && (i = 41); t < n;) {
              if ((o = e.charCodeAt(t)) === i) return c.pos = t + 1, c.lines = s, c.str = r(e.slice(a + 1, t)), c.ok = !0, c;
              10 === o ? s++ : 92 === o && t + 1 < n && (t++, 10 === e.charCodeAt(t) && s++), t++;
            }
          return c;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.trim().toLowerCase();
          return !g.test(t) || !!y.test(t);
        }

      function o(e) {
          var t = d.parse(e, !0);
          if (t.hostname && (!t.protocol || b.indexOf(t.protocol) >= 0)) try {
              t.hostname = v.toASCII(t.hostname);
            } catch (e) {}
          return d.encode(d.format(t));
        }

      function i(e) {
          var t = d.parse(e, !0);
          if (t.hostname && (!t.protocol || b.indexOf(t.protocol) >= 0)) try {
              t.hostname = v.toUnicode(t.hostname);
            } catch (e) {}
          return d.decode(d.format(t));
        }

      function s(e, t) {
          if (!(this instanceof s)) return new s(e, t);
          t || a.isString(e) || (t = e || {}, e = 'default'), this.inline = new f, this.block = new p, this.core = new l, this.renderer = new u, this.linkify = new h, this.validateLink = r, this.normalizeLink = o, this.normalizeLinkText = i, this.utils = a, this.helpers = a.assign({}, c), this.options = {}, this.configure(e), t && this.set(t);
        }
      var a = n(2),
          c = n(283),
          u = n(294),
          l = n(289),
          p = n(288),
          f = n(290),
          h = n(271),
          d = n(120),
          v = n(333),
          m = {
              default: n(292),
              zero: n(293),
              commonmark: n(291),
            },
          g = /^(vbscript|javascript|file|data):/,
          y = /^data:image\/(gif|png|jpeg|webp);/,
          b = ['http:', 'https:', 'mailto:'];
      s.prototype.set = function(e) {
          return a.assign(this.options, e), this;
        }, s.prototype.configure = function(e) {
          var t, n = this;
          if (a.isString(e) && (t = e, !(e = m[t]))) throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
          if (!e) throw new Error('Wrong `markdown-it` preset, can\'t be empty');
          return e.options && n.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
              e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2);
            }), this;
        }, s.prototype.enable = function(e, t) {
          var n = [];
          Array.isArray(e) || (e = [e]), ['core', 'block', 'inline'].forEach(function(t) {
              n = n.concat(this[t].ruler.enable(e, !0));
            }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
          var r = e.filter(function(e) {
              return n.indexOf(e) < 0;
            });
          if (r.length && !t) throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + r);
          return this;
        }, s.prototype.disable = function(e, t) {
          var n = [];
          Array.isArray(e) || (e = [e]), ['core', 'block', 'inline'].forEach(function(t) {
              n = n.concat(this[t].ruler.disable(e, !0));
            }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
          var r = e.filter(function(e) {
              return n.indexOf(e) < 0;
            });
          if (r.length && !t) throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + r);
          return this;
        }, s.prototype.use = function(e) {
          var t = [this].concat(Array.prototype.slice.call(arguments, 1));
          return e.apply(e, t), this;
        }, s.prototype.parse = function(e, t) {
          if ('string' != typeof e) throw new Error('Input data should be a String');
          var n = new this.core.State(e, this, t);
          return this.core.process(n), n.tokens;
        }, s.prototype.render = function(e, t) {
          return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
        }, s.prototype.parseInline = function(e, t) {
          var n = new this.core.State(e, this, t);
          return n.inlineMode = !0, this.core.process(n), n.tokens;
        }, s.prototype.renderInline = function(e, t) {
          return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
        }, e.exports = s;
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.ruler = new o;
          for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], {
              alt: (i[e][2] || []).slice(),
            });
        }
      var o = n(67),
          i = [
                ['table', n(306), ['paragraph', 'reference']],
                ['code', n(296)],
                ['fence', n(297), ['paragraph', 'reference', 'blockquote', 'list']],
                ['blockquote', n(295), ['paragraph', 'reference', 'list']],
                ['hr', n(299), ['paragraph', 'reference', 'blockquote', 'list']],
                ['list', n(302), ['paragraph', 'reference', 'blockquote']],
                ['reference', n(304)],
                ['heading', n(298), ['paragraph', 'reference', 'blockquote']],
                ['lheading', n(301)],
                ['html_block', n(300), ['paragraph', 'reference', 'blockquote']],
                ['paragraph', n(303)],
            ];
      r.prototype.tokenize = function(e, t, n) {
          for (var r, o = this.ruler.getRules(''), i = o.length, s = t, a = !1, c = e.md.options.maxNesting; s < n && (e.line = s = e.skipEmptyLines(s), !(s >= n)) && !(e.sCount[s] < e.blkIndent);) {
              if (e.level >= c) {
                  e.line = n;
                  break;
                }
              for (r = 0; r < i && !o[r](e, s, n, !1); r++);
              e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), (s = e.line) < n && e.isEmpty(s) && (a = !0, s++, e.line = s);
            }
        }, r.prototype.parse = function(e, t, n, r) {
          var o;
          e && (o = new this.State(e, t, n, r), this.tokenize(o, o.line, o.lineMax));
        }, r.prototype.State = n(305), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.ruler = new o;
          for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1]);
        }
      var o = n(67),
          i = [
                ['normalize', n(310)],
                ['block', n(307)],
                ['inline', n(308)],
                ['linkify', n(309)],
                ['replacements', n(311)],
                ['smartquotes', n(312)],
            ];
      r.prototype.process = function(e) {
          var t, n, r;
          for (r = this.ruler.getRules(''), t = 0, n = r.length; t < n; t++) r[t](e);
        }, r.prototype.State = n(313), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          var e;
          for (this.ruler = new o, e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1]);
          for (this.ruler2 = new o, e = 0; e < s.length; e++) this.ruler2.push(s[e][0], s[e][1]);
        }
      var o = n(67),
          i = [
                ['text', n(324)],
                ['newline', n(322)],
                ['escape', n(318)],
                ['backticks', n(315)],
                ['strikethrough', n(119).tokenize],
                ['emphasis', n(118).tokenize],
                ['link', n(321)],
                ['image', n(320)],
                ['autolink', n(314)],
                ['html_inline', n(319)],
                ['entity', n(317)],
            ],
          s = [
                ['balance_pairs', n(316)],
                ['strikethrough', n(119).postProcess],
                ['emphasis', n(118).postProcess],
                ['text_collapse', n(325)],
            ];
      r.prototype.skipToken = function(e) {
          var t, n, r = e.pos,
              o = this.ruler.getRules(''),
              i = o.length,
              s = e.md.options.maxNesting,
              a = e.cache;
          if (void 0 !== a[r]) return void(e.pos = a[r]);
          if (e.level < s)
              for (n = 0; n < i && (e.level++, t = o[n](e, !0), e.level--, !t); n++);
          else e.pos = e.posMax;
          t || e.pos++, a[r] = e.pos;
        }, r.prototype.tokenize = function(e) {
          for (var t, n, r = this.ruler.getRules(''), o = r.length, i = e.posMax, s = e.md.options.maxNesting; e.pos < i;) {
              if (e.level < s)
                  for (n = 0; n < o && !(t = r[n](e, !1)); n++);
              if (t) {
                  if (e.pos >= i) break;
                } else e.pending += e.src[e.pos++];
            }
          e.pending && e.pushPending();
        }, r.prototype.parse = function(e, t, n, r) {
          var o, i, s, a = new this.State(e, t, n, r);
          for (this.tokenize(a), i = this.ruler2.getRules(''), s = i.length, o = 0; o < s; o++) i[o](a);
        }, r.prototype.State = n(323), e.exports = r;
    }, function(e, t, n) {
      'use strict';
      e.exports = {
          options: {
              html: !0,
              xhtmlOut: !0,
              breaks: !1,
              langPrefix: 'language-',
              linkify: !1,
              typographer: !1,
              quotes: '“”‘’',
              highlight: null,
              maxNesting: 20,
            },
          components: {
              core: {
                  rules: ['normalize', 'block', 'inline'],
                },
              block: {
                  rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph'],
                },
              inline: {
                  rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text'],
                  rules2: ['balance_pairs', 'emphasis', 'text_collapse'],
                },
            },
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = {
          options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: 'language-',
              linkify: !1,
              typographer: !1,
              quotes: '“”‘’',
              highlight: null,
              maxNesting: 100,
            },
          components: {
              core: {},
              block: {},
              inline: {},
            },
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = {
          options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: 'language-',
              linkify: !1,
              typographer: !1,
              quotes: '“”‘’',
              highlight: null,
              maxNesting: 20,
            },
          components: {
              core: {
                  rules: ['normalize', 'block', 'inline'],
                },
              block: {
                  rules: ['paragraph'],
                },
              inline: {
                  rules: ['text'],
                  rules2: ['balance_pairs', 'text_collapse'],
                },
            },
        };
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.rules = o({}, a);
        }
      var o = n(2).assign,
          i = n(2).unescapeAll,
          s = n(2).escapeHtml,
          a = {};
      a.code_inline = function(e, t, n, r, o) {
          var i = e[t];
          return '<code' + o.renderAttrs(i) + '>' + s(e[t].content) + '</code>';
        }, a.code_block = function(e, t, n, r, o) {
          var i = e[t];
          return '<pre' + o.renderAttrs(i) + '><code>' + s(e[t].content) + '</code></pre>\n';
        }, a.fence = function(e, t, n, r, o) {
          var a, c, u, l, p = e[t],
              f = p.info ? i(p.info).trim() : '',
              h = '';
          return f && (h = f.split(/\s+/g)[0]), a = n.highlight ? n.highlight(p.content, h) || s(p.content) : s(p.content), 0 === a.indexOf('<pre') ? a + '\n' : f ? (c = p.attrIndex('class'), u = p.attrs ? p.attrs.slice() : [], c < 0 ? u.push(['class', n.langPrefix + h]) : u[c][1] += ' ' + n.langPrefix + h, l = {
              attrs: u,
            }, '<pre><code' + o.renderAttrs(l) + '>' + a + '</code></pre>\n') : '<pre><code' + o.renderAttrs(p) + '>' + a + '</code></pre>\n';
        }, a.image = function(e, t, n, r, o) {
          var i = e[t];
          return i.attrs[i.attrIndex('alt')][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(e, t, n);
        }, a.hardbreak = function(e, t, n) {
          return n.xhtmlOut ? '<br />\n' : '<br>\n';
        }, a.softbreak = function(e, t, n) {
          return n.breaks ? n.xhtmlOut ? '<br />\n' : '<br>\n' : '\n';
        }, a.text = function(e, t) {
          return s(e[t].content);
        }, a.html_block = function(e, t) {
          return e[t].content;
        }, a.html_inline = function(e, t) {
          return e[t].content;
        }, r.prototype.renderAttrs = function(e) {
          var t, n, r;
          if (!e.attrs) return '';
          for (r = '', t = 0, n = e.attrs.length; t < n; t++) r += ' ' + s(e.attrs[t][0]) + '="' + s(e.attrs[t][1]) + '"';
          return r;
        }, r.prototype.renderToken = function(e, t, n) {
          var r, o = '',
              i = !1,
              s = e[t];
          return s.hidden ? '' : (s.block && -1 !== s.nesting && t && e[t - 1].hidden && (o += '\n'), o += (-1 === s.nesting ? '</' : '<') + s.tag, o += this.renderAttrs(s), 0 === s.nesting && n.xhtmlOut && (o += ' /'), s.block && (i = !0, 1 === s.nesting && t + 1 < e.length && (r = e[t + 1], 'inline' === r.type || r.hidden ? i = !1 : -1 === r.nesting && r.tag === s.tag && (i = !1))), o += i ? '>\n' : '>');
        }, r.prototype.renderInline = function(e, t, n) {
          for (var r, o = '', i = this.rules, s = 0, a = e.length; s < a; s++) r = e[s].type, void 0 !== i[r] ? o += i[r](e, s, t, n, this) : o += this.renderToken(e, s, t);
          return o;
        }, r.prototype.renderInlineAsText = function(e, t, n) {
          for (var r = '', o = 0, i = e.length; o < i; o++) 'text' === e[o].type ? r += e[o].content : 'image' === e[o].type && (r += this.renderInlineAsText(e[o].children, t, n));
          return r;
        }, r.prototype.render = function(e, t, n) {
          var r, o, i, s = '',
              a = this.rules;
          for (r = 0, o = e.length; r < o; r++) i = e[r].type, 'inline' === i ? s += this.renderInline(e[r].children, t, n) : void 0 !== a[i] ? s += a[e[r].type](e, r, t, n, this) : s += this.renderToken(e, r, t, n);
          return s;
        }, e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(2).isSpace;
      e.exports = function(e, t, n, o) {
          var i, s, a, c, u, l, p, f, h, d, v, m, g, y, b, _, w, C, S, E, x = e.lineMax,
              k = e.bMarks[t] + e.tShift[t],
              O = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (62 !== e.src.charCodeAt(k++)) return !1;
          if (o) return !0;
          for (c = d = e.sCount[t] + k - (e.bMarks[t] + e.tShift[t]), 32 === e.src.charCodeAt(k) ? (k++, c++, d++, i = !1, w = !0) : 9 === e.src.charCodeAt(k) ? (w = !0, (e.bsCount[t] + d) % 4 == 3 ? (k++, c++, d++, i = !1) : i = !0) : w = !1, v = [e.bMarks[t]], e.bMarks[t] = k; k < O && (s = e.src.charCodeAt(k), r(s));) 9 === s ? d += 4 - (d + e.bsCount[t] + (i ? 1 : 0)) % 4 : d++, k++;
          for (m = [e.bsCount[t]], e.bsCount[t] = e.sCount[t] + 1 + (w ? 1 : 0), p = k >= O, b = [e.sCount[t]], e.sCount[t] = d - c, _ = [e.tShift[t]], e.tShift[t] = k - e.bMarks[t], S = e.md.block.ruler.getRules('blockquote'), y = e.parentType, e.parentType = 'blockquote', h = t + 1; h < n && (u = e.sCount[h] < e.blkIndent, k = e.bMarks[h] + e.tShift[h], O = e.eMarks[h], !(k >= O)); h++)
              if (62 !== e.src.charCodeAt(k++) || u) {
                  if (p) break;
                  for (C = !1, a = 0, l = S.length; a < l; a++)
                      if (S[a](e, h, n, !0)) {
                          C = !0;
                          break;
                        }
                  if (C) {
                      e.lineMax = h, 0 !== e.blkIndent && (v.push(e.bMarks[h]), m.push(e.bsCount[h]), _.push(e.tShift[h]), b.push(e.sCount[h]), e.sCount[h] -= e.blkIndent);
                      break;
                    }
                  if (u) break;
                  v.push(e.bMarks[h]), m.push(e.bsCount[h]), _.push(e.tShift[h]), b.push(e.sCount[h]), e.sCount[h] = -1;
                } else {
                  for (c = d = e.sCount[h] + k - (e.bMarks[h] + e.tShift[h]), 32 === e.src.charCodeAt(k) ? (k++, c++, d++, i = !1, w = !0) : 9 === e.src.charCodeAt(k) ? (w = !0, (e.bsCount[h] + d) % 4 == 3 ? (k++, c++, d++, i = !1) : i = !0) : w = !1, v.push(e.bMarks[h]), e.bMarks[h] = k; k < O && (s = e.src.charCodeAt(k), r(s));) 9 === s ? d += 4 - (d + e.bsCount[h] + (i ? 1 : 0)) % 4 : d++, k++;
                  p = k >= O, m.push(e.bsCount[h]), e.bsCount[h] = e.sCount[h] + 1 + (w ? 1 : 0), b.push(e.sCount[h]), e.sCount[h] = d - c, _.push(e.tShift[h]), e.tShift[h] = k - e.bMarks[h];
                }
          for (g = e.blkIndent, e.blkIndent = 0, E = e.push('blockquote_open', 'blockquote', 1), E.markup = '>', E.map = f = [t, 0], e.md.block.tokenize(e, t, h), E = e.push('blockquote_close', 'blockquote', -1), E.markup = '>', e.lineMax = x, e.parentType = y, f[1] = e.line, a = 0; a < _.length; a++) e.bMarks[a + t] = v[a], e.tShift[a + t] = _[a], e.sCount[a + t] = b[a], e.bsCount[a + t] = m[a];
          return e.blkIndent = g, !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
          var r, o, i;
          if (e.sCount[t] - e.blkIndent < 4) return !1;
          for (o = r = t + 1; r < n;)
              if (e.isEmpty(r)) r++;
              else {
                  if (!(e.sCount[r] - e.blkIndent >= 4)) break;
                  r++, o = r;
                }
          return e.line = o, i = e.push('code_block', 'code', 0), i.content = e.getLines(t, o, 4 + e.blkIndent, !0), i.map = [t, e.line], !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n, r) {
          var o, i, s, a, c, u, l, p = !1,
              f = e.bMarks[t] + e.tShift[t],
              h = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (f + 3 > h) return !1;
          if (126 !== (o = e.src.charCodeAt(f)) && 96 !== o) return !1;
          if (c = f, f = e.skipChars(f, o), (i = f - c) < 3) return !1;
          if (l = e.src.slice(c, f), s = e.src.slice(f, h), s.indexOf(String.fromCharCode(o)) >= 0) return !1;
          if (r) return !0;
          for (a = t; !(++a >= n) && (f = c = e.bMarks[a] + e.tShift[a], h = e.eMarks[a], !(f < h && e.sCount[a] < e.blkIndent));)
              if (e.src.charCodeAt(f) === o && !(e.sCount[a] - e.blkIndent >= 4 || (f = e.skipChars(f, o)) - c < i || (f = e.skipSpaces(f)) < h)) {
                  p = !0;
                  break;
                }
          return i = e.sCount[t], e.line = a + (p ? 1 : 0), u = e.push('fence', 'code', 0), u.info = s, u.content = e.getLines(t + 1, a, i, !0), u.markup = l, u.map = [t, e.line], !0;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).isSpace;
      e.exports = function(e, t, n, o) {
          var i, s, a, c, u = e.bMarks[t] + e.tShift[t],
              l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (35 !== (i = e.src.charCodeAt(u)) || u >= l) return !1;
          for (s = 1, i = e.src.charCodeAt(++u); 35 === i && u < l && s <= 6;) s++, i = e.src.charCodeAt(++u);
          return !(s > 6 || u < l && !r(i)) && (!!o || (l = e.skipSpacesBack(l, u), a = e.skipCharsBack(l, 35, u), a > u && r(e.src.charCodeAt(a - 1)) && (l = a), e.line = t + 1, c = e.push('heading_open', 'h' + String(s), 1), c.markup = '########'.slice(0, s), c.map = [t, e.line], c = e.push('inline', '', 0), c.content = e.src.slice(u, l).trim(), c.map = [t, e.line], c.children = [], c = e.push('heading_close', 'h' + String(s), -1), c.markup = '########'.slice(0, s), !0));
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).isSpace;
      e.exports = function(e, t, n, o) {
          var i, s, a, c, u = e.bMarks[t] + e.tShift[t],
              l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (42 !== (i = e.src.charCodeAt(u++)) && 45 !== i && 95 !== i) return !1;
          for (s = 1; u < l;) {
              if ((a = e.src.charCodeAt(u++)) !== i && !r(a)) return !1;
              a === i && s++;
            }
          return !(s < 3) && (!!o || (e.line = t + 1, c = e.push('hr', 'hr', 0), c.map = [t, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i)), !0));
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(282),
          o = n(117).HTML_OPEN_CLOSE_TAG_RE,
          i = [
                [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
                [/^<!--/, /-->/, !0],
                [/^<\?/, /\?>/, !0],
                [/^<![A-Z]/, />/, !0],
                [/^<!\[CDATA\[/, /\]\]>/, !0],
                [new RegExp('^</?(' + r.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, !0],
                [new RegExp(o.source + '\\s*$'), /^$/, !1],
            ];
      e.exports = function(e, t, n, r) {
          var o, s, a, c, u = e.bMarks[t] + e.tShift[t],
              l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (!e.md.options.html) return !1;
          if (60 !== e.src.charCodeAt(u)) return !1;
          for (c = e.src.slice(u, l), o = 0; o < i.length && !i[o][0].test(c); o++);
          if (o === i.length) return !1;
          if (r) return i[o][2];
          if (s = t + 1, !i[o][1].test(c))
              for (; s < n && !(e.sCount[s] < e.blkIndent); s++)
                  if (u = e.bMarks[s] + e.tShift[s], l = e.eMarks[s], c = e.src.slice(u, l), i[o][1].test(c)) {
                      0 !== c.length && s++;
                      break;
                    }
          return e.line = s, a = e.push('html_block', '', 0), a.map = [t, s], a.content = e.getLines(t, s, e.blkIndent, !0), !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
          var r, o, i, s, a, c, u, l, p, f, h = t + 1,
              d = e.md.block.ruler.getRules('paragraph');
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          for (f = e.parentType, e.parentType = 'paragraph'; h < n && !e.isEmpty(h); h++)
              if (!(e.sCount[h] - e.blkIndent > 3)) {
                  if (e.sCount[h] >= e.blkIndent && (c = e.bMarks[h] + e.tShift[h], u = e.eMarks[h], c < u && (45 === (p = e.src.charCodeAt(c)) || 61 === p) && (c = e.skipChars(c, p), (c = e.skipSpaces(c)) >= u))) {
                      l = 61 === p ? 1 : 2;
                      break;
                    }
                  if (!(e.sCount[h] < 0)) {
                      for (o = !1, i = 0, s = d.length; i < s; i++)
                          if (d[i](e, h, n, !0)) {
                              o = !0;
                              break;
                            }
                      if (o) break;
                    }
                }
          return !!l && (r = e.getLines(t, h, e.blkIndent, !1).trim(), e.line = h + 1, a = e.push('heading_open', 'h' + String(l), 1), a.markup = String.fromCharCode(p), a.map = [t, e.line], a = e.push('inline', '', 0), a.content = r, a.map = [t, e.line - 1], a.children = [], a = e.push('heading_close', 'h' + String(l), -1), a.markup = String.fromCharCode(p), e.parentType = f, !0);
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n, r, o, i;
          return r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], n = e.src.charCodeAt(r++), 42 !== n && 45 !== n && 43 !== n ? -1 : r < o && (i = e.src.charCodeAt(r), !s(i)) ? -1 : r;
        }

      function o(e, t) {
          var n, r = e.bMarks[t] + e.tShift[t],
              o = r,
              i = e.eMarks[t];
          if (o + 1 >= i) return -1;
          if ((n = e.src.charCodeAt(o++)) < 48 || n > 57) return -1;
          for (;;) {
              if (o >= i) return -1;
              n = e.src.charCodeAt(o++); {
                  if (!(n >= 48 && n <= 57)) {
                      if (41 === n || 46 === n) break;
                      return -1;
                    }
                  if (o - r >= 10) return -1;
                }
            }
          return o < i && (n = e.src.charCodeAt(o), !s(n)) ? -1 : o;
        }

      function i(e, t) {
          var n, r, o = e.level + 2;
          for (n = t + 2, r = e.tokens.length - 2; n < r; n++) e.tokens[n].level === o && 'paragraph_open' === e.tokens[n].type && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
        }
      var s = n(2).isSpace;
      e.exports = function(e, t, n, a) {
          var c, u, l, p, f, h, d, v, m, g, y, b, _, w, C, S, E, x, k, O, T, A, P, I, M, R, D, N, j = !1,
              L = !0;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (a && 'paragraph' === e.parentType && e.tShift[t] >= e.blkIndent && (j = !0), (P = o(e, t)) >= 0) {
              if (d = !0, M = e.bMarks[t] + e.tShift[t], _ = Number(e.src.substr(M, P - M - 1)), j && 1 !== _) return !1;
            } else {
              if (!((P = r(e, t)) >= 0)) return !1;
              d = !1;
            }
          if (j && e.skipSpaces(P) >= e.eMarks[t]) return !1;
          if (b = e.src.charCodeAt(P - 1), a) return !0;
          for (y = e.tokens.length, d ? (N = e.push('ordered_list_open', 'ol', 1), 1 !== _ && (N.attrs = [
                    ['start', _],
            ])) : N = e.push('bullet_list_open', 'ul', 1), N.map = g = [t, 0], N.markup = String.fromCharCode(b), C = t, I = !1, D = e.md.block.ruler.getRules('list'), k = e.parentType, e.parentType = 'list'; C < n;) {
              for (A = P, w = e.eMarks[C], h = S = e.sCount[C] + P - (e.bMarks[t] + e.tShift[t]); A < w && (c = e.src.charCodeAt(A), s(c));) 9 === c ? S += 4 - (S + e.bsCount[C]) % 4 : S++, A++;
              if (u = A, f = u >= w ? 1 : S - h, f > 4 && (f = 1), p = h + f, N = e.push('list_item_open', 'li', 1), N.markup = String.fromCharCode(b), N.map = v = [t, 0], E = e.blkIndent, T = e.tight, O = e.tShift[t], x = e.sCount[t], e.blkIndent = p, e.tight = !0, e.tShift[t] = u - e.bMarks[t], e.sCount[t] = S, u >= w && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, t, n, !0), e.tight && !I || (L = !1), I = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = E, e.tShift[t] = O, e.sCount[t] = x, e.tight = T, N = e.push('list_item_close', 'li', -1), N.markup = String.fromCharCode(b), C = t = e.line, v[1] = C, u = e.bMarks[t], C >= n) break;
              if (e.sCount[C] < e.blkIndent) break;
              for (R = !1, l = 0, m = D.length; l < m; l++)
                  if (D[l](e, C, n, !0)) {
                      R = !0;
                      break;
                    }
              if (R) break;
              if (d) {
                  if ((P = o(e, C)) < 0) break;
                } else if ((P = r(e, C)) < 0) break;
              if (b !== e.src.charCodeAt(P - 1)) break;
            }
          return N = d ? e.push('ordered_list_close', 'ol', -1) : e.push('bullet_list_close', 'ul', -1), N.markup = String.fromCharCode(b), g[1] = C, e.line = C, e.parentType = k, L && i(e, y), !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t) {
          var n, r, o, i, s, a, c = t + 1,
              u = e.md.block.ruler.getRules('paragraph'),
              l = e.lineMax;
          for (a = e.parentType, e.parentType = 'paragraph'; c < l && !e.isEmpty(c); c++)
              if (!(e.sCount[c] - e.blkIndent > 3 || e.sCount[c] < 0)) {
                  for (r = !1, o = 0, i = u.length; o < i; o++)
                      if (u[o](e, c, l, !0)) {
                          r = !0;
                          break;
                        }
                  if (r) break;
                }
          return n = e.getLines(t, c, e.blkIndent, !1).trim(), e.line = c, s = e.push('paragraph_open', 'p', 1), s.map = [t, e.line], s = e.push('inline', '', 0), s.content = n, s.map = [t, e.line], s.children = [], s = e.push('paragraph_close', 'p', -1), e.parentType = a, !0;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).normalizeReference,
          o = n(2).isSpace;
      e.exports = function(e, t, n, i) {
          var s, a, c, u, l, p, f, h, d, v, m, g, y, b, _, w, C = 0,
              S = e.bMarks[t] + e.tShift[t],
              E = e.eMarks[t],
              x = t + 1;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (91 !== e.src.charCodeAt(S)) return !1;
          for (; ++S < E;)
              if (93 === e.src.charCodeAt(S) && 92 !== e.src.charCodeAt(S - 1)) {
                  if (S + 1 === E) return !1;
                  if (58 !== e.src.charCodeAt(S + 1)) return !1;
                  break;
                }
          for (u = e.lineMax, _ = e.md.block.ruler.getRules('reference'), v = e.parentType, e.parentType = 'reference'; x < u && !e.isEmpty(x); x++)
              if (!(e.sCount[x] - e.blkIndent > 3 || e.sCount[x] < 0)) {
                  for (b = !1, p = 0, f = _.length; p < f; p++)
                      if (_[p](e, x, u, !0)) {
                          b = !0;
                          break;
                        }
                  if (b) break;
                }
          for (y = e.getLines(t, x, e.blkIndent, !1).trim(), E = y.length, S = 1; S < E; S++) {
              if (91 === (s = y.charCodeAt(S))) return !1;
              if (93 === s) {
                  d = S;
                  break;
                }
              10 === s ? C++ : 92 === s && ++S < E && 10 === y.charCodeAt(S) && C++;
            }
          if (d < 0 || 58 !== y.charCodeAt(d + 1)) return !1;
          for (S = d + 2; S < E; S++)
              if (10 === (s = y.charCodeAt(S))) C++;
              else if (!o(s)) break;
          if (m = e.md.helpers.parseLinkDestination(y, S, E), !m.ok) return !1;
          if (l = e.md.normalizeLink(m.str), !e.md.validateLink(l)) return !1;
          for (S = m.pos, C += m.lines, a = S, c = C, g = S; S < E; S++)
              if (10 === (s = y.charCodeAt(S))) C++;
              else if (!o(s)) break;
          for (m = e.md.helpers.parseLinkTitle(y, S, E), S < E && g !== S && m.ok ? (w = m.str, S = m.pos, C += m.lines) : (w = '', S = a, C = c); S < E && (s = y.charCodeAt(S), o(s));) S++;
          if (S < E && 10 !== y.charCodeAt(S) && w)
              for (w = '', S = a, C = c; S < E && (s = y.charCodeAt(S), o(s));) S++;
          return !(S < E && 10 !== y.charCodeAt(S)) && (!!(h = r(y.slice(1, d))) && (!!i || (void 0 === e.env.references && (e.env.references = {}), void 0 === e.env.references[h] && (e.env.references[h] = {
              title: w,
              href: l,
            }), e.parentType = v, e.line = t + C + 1, !0)));
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          var o, s, a, c, u, l, p, f;
          for (this.src = e, this.md = t, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.parentType = 'root', this.level = 0, this.result = '', s = this.src, f = !1, a = c = l = p = 0, u = s.length; c < u; c++) {
              if (o = s.charCodeAt(c), !f) {
                  if (i(o)) {
                      l++, 9 === o ? p += 4 - p % 4 : p++;
                      continue;
                    }
                  f = !0;
                }
              10 !== o && c !== u - 1 || (10 !== o && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(l), this.sCount.push(p), this.bsCount.push(0), f = !1, l = 0, p = 0, a = c + 1);
            }
          this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
        }
      var o = n(68),
          i = n(2).isSpace;
      r.prototype.push = function(e, t, n) {
          var r = new o(e, t, n);
          return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
        }, r.prototype.isEmpty = function(e) {
          return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
        }, r.prototype.skipEmptyLines = function(e) {
          for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
          return e;
        }, r.prototype.skipSpaces = function(e) {
          for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), i(t)); e++);
          return e;
        }, r.prototype.skipSpacesBack = function(e, t) {
          if (e <= t) return e;
          for (; e > t;)
              if (!i(this.src.charCodeAt(--e))) return e + 1;
          return e;
        }, r.prototype.skipChars = function(e, t) {
          for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
          return e;
        }, r.prototype.skipCharsBack = function(e, t, n) {
          if (e <= n) return e;
          for (; e > n;)
              if (t !== this.src.charCodeAt(--e)) return e + 1;
          return e;
        }, r.prototype.getLines = function(e, t, n, r) {
          var o, s, a, c, u, l, p, f = e;
          if (e >= t) return '';
          for (l = new Array(t - e), o = 0; f < t; f++, o++) {
              for (s = 0, p = c = this.bMarks[f], u = f + 1 < t || r ? this.eMarks[f] + 1 : this.eMarks[f]; c < u && s < n;) {
                  if (a = this.src.charCodeAt(c), i(a)) 9 === a ? s += 4 - (s + this.bsCount[f]) % 4 : s++;
                  else {
                      if (!(c - p < this.tShift[f])) break;
                      s++;
                    }
                  c++;
                }
              l[o] = s > n ? new Array(s - n + 1).join(' ') + this.src.slice(c, u) : this.src.slice(c, u);
            }
          return l.join('');
        }, r.prototype.Token = o, e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = e.bMarks[t] + e.blkIndent,
              r = e.eMarks[t];
          return e.src.substr(n, r - n);
        }

      function o(e) {
          var t, n = [],
              r = 0,
              o = e.length,
              i = 0,
              s = 0,
              a = !1,
              c = 0;
          for (t = e.charCodeAt(r); r < o;) 96 === t ? a ? (a = !1, c = r) : i % 2 == 0 && (a = !0, c = r) : 124 !== t || i % 2 != 0 || a || (n.push(e.substring(s, r)), s = r + 1), 92 === t ? i++ : i = 0, r++, r === o && a && (a = !1, r = c + 1), t = e.charCodeAt(r);
          return n.push(e.substring(s)), n;
        }
      var i = n(2).isSpace;
      e.exports = function(e, t, n, s) {
          var a, c, u, l, p, f, h, d, v, m, g, y;
          if (t + 2 > n) return !1;
          if (p = t + 1, e.sCount[p] < e.blkIndent) return !1;
          if (e.sCount[p] - e.blkIndent >= 4) return !1;
          if ((u = e.bMarks[p] + e.tShift[p]) >= e.eMarks[p]) return !1;
          if (124 !== (a = e.src.charCodeAt(u++)) && 45 !== a && 58 !== a) return !1;
          for (; u < e.eMarks[p];) {
              if (124 !== (a = e.src.charCodeAt(u)) && 45 !== a && 58 !== a && !i(a)) return !1;
              u++;
            }
          for (c = r(e, t + 1), f = c.split('|'), v = [], l = 0; l < f.length; l++) {
              if (!(m = f[l].trim())) {
                  if (0 === l || l === f.length - 1) continue;
                  return !1;
                }
              if (!/^:?-+:?$/.test(m)) return !1;
              58 === m.charCodeAt(m.length - 1) ? v.push(58 === m.charCodeAt(0) ? 'center' : 'right') : 58 === m.charCodeAt(0) ? v.push('left') : v.push('');
            }
          if (c = r(e, t).trim(), -1 === c.indexOf('|')) return !1;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (f = o(c.replace(/^\||\|$/g, '')), (h = f.length) > v.length) return !1;
          if (s) return !0;
          for (d = e.push('table_open', 'table', 1), d.map = g = [t, 0], d = e.push('thead_open', 'thead', 1), d.map = [t, t + 1], d = e.push('tr_open', 'tr', 1), d.map = [t, t + 1], l = 0; l < f.length; l++) d = e.push('th_open', 'th', 1), d.map = [t, t + 1], v[l] && (d.attrs = [
                ['style', 'text-align:' + v[l]],
            ]), d = e.push('inline', '', 0), d.content = f[l].trim(), d.map = [t, t + 1], d.children = [], d = e.push('th_close', 'th', -1);
          for (d = e.push('tr_close', 'tr', -1), d = e.push('thead_close', 'thead', -1), d = e.push('tbody_open', 'tbody', 1), d.map = y = [t + 2, 0], p = t + 2; p < n && !(e.sCount[p] < e.blkIndent) && (c = r(e, p).trim(), -1 !== c.indexOf('|')) && !(e.sCount[p] - e.blkIndent >= 4); p++) {
              for (f = o(c.replace(/^\||\|$/g, '')), d = e.push('tr_open', 'tr', 1), l = 0; l < h; l++) d = e.push('td_open', 'td', 1), v[l] && (d.attrs = [
                    ['style', 'text-align:' + v[l]],
                ]), d = e.push('inline', '', 0), d.content = f[l] ? f[l].trim() : '', d.children = [], d = e.push('td_close', 'td', -1);
              d = e.push('tr_close', 'tr', -1);
            }
          return d = e.push('tbody_close', 'tbody', -1), d = e.push('table_close', 'table', -1), g[1] = y[1] = p, e.line = p, !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t;
          e.inlineMode ? (t = new e.Token('inline', '', 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t, n, r, o = e.tokens;
          for (n = 0, r = o.length; n < r; n++) t = o[n], 'inline' === t.type && e.md.inline.parse(t.content, e.md, e.env, t.children);
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return /^<a[>\s]/i.test(e);
        }

      function o(e) {
          return /^<\/a\s*>/i.test(e);
        }
      var i = n(2).arrayReplaceAt;
      e.exports = function(e) {
          var t, n, s, a, c, u, l, p, f, h, d, v, m, g, y, b, _, w = e.tokens;
          if (e.md.options.linkify)
              for (n = 0, s = w.length; n < s; n++)
                  if ('inline' === w[n].type && e.md.linkify.pretest(w[n].content))
                      for (a = w[n].children, m = 0, t = a.length - 1; t >= 0; t--)
                          if (u = a[t], 'link_close' !== u.type) {
                              if ('html_inline' === u.type && (r(u.content) && m > 0 && m--, o(u.content) && m++), !(m > 0) && 'text' === u.type && e.md.linkify.test(u.content)) {
                                  for (f = u.content, _ = e.md.linkify.match(f), l = [], v = u.level, d = 0, p = 0; p < _.length; p++) g = _[p].url, y = e.md.normalizeLink(g), e.md.validateLink(y) && (b = _[p].text, b = _[p].schema ? 'mailto:' !== _[p].schema || /^mailto:/i.test(b) ? e.md.normalizeLinkText(b) : e.md.normalizeLinkText('mailto:' + b).replace(/^mailto:/, '') : e.md.normalizeLinkText('http://' + b).replace(/^http:\/\//, ''), h = _[p].index, h > d && (c = new e.Token('text', '', 0), c.content = f.slice(d, h), c.level = v, l.push(c)), c = new e.Token('link_open', 'a', 1), c.attrs = [
                                        ['href', y],
                                    ], c.level = v++, c.markup = 'linkify', c.info = 'auto', l.push(c), c = new e.Token('text', '', 0), c.content = b, c.level = v, l.push(c), c = new e.Token('link_close', 'a', -1), c.level = --v, c.markup = 'linkify', c.info = 'auto', l.push(c), d = _[p].lastIndex);
                                  d < f.length && (c = new e.Token('text', '', 0), c.content = f.slice(d), c.level = v, l.push(c)), w[n].children = a = i(a, t, l);
                                }
                            } else
                                for (t--; a[t].level !== u.level && 'link_open' !== a[t].type;) t--;
        };
    }, function(e, t, n) {
      'use strict';
      var r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
          o = /\u0000/g;
      e.exports = function(e) {
          var t;
          t = e.src.replace(r, '\n'), t = t.replace(o, '�'), e.src = t;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return u[t.toLowerCase()];
        }

      function o(e) {
          var t, n, o = 0;
          for (t = e.length - 1; t >= 0; t--) n = e[t], 'text' !== n.type || o || (n.content = n.content.replace(c, r)), 'link_open' === n.type && 'auto' === n.info && o--, 'link_close' === n.type && 'auto' === n.info && o++;
        }

      function i(e) {
          var t, n, r = 0;
          for (t = e.length - 1; t >= 0; t--) n = e[t], 'text' !== n.type || r || s.test(n.content) && (n.content = n.content.replace(/\+-/g, '±').replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',').replace(/(^|[^-])---([^-]|$)/gm, '$1—$2').replace(/(^|\s)--(\s|$)/gm, '$1–$2').replace(/(^|[^-\s])--([^-\s]|$)/gm, '$1–$2')), 'link_open' === n.type && 'auto' === n.info && r--, 'link_close' === n.type && 'auto' === n.info && r++;
        }
      var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
          a = /\((c|tm|r|p)\)/i,
          c = /\((c|tm|r|p)\)/gi,
          u = {
              c: '©',
              r: '®',
              p: '§',
              tm: '™',
            };
      e.exports = function(e) {
          var t;
          if (e.md.options.typographer)
              for (t = e.tokens.length - 1; t >= 0; t--) 'inline' === e.tokens[t].type && (a.test(e.tokens[t].content) && o(e.tokens[t].children), s.test(e.tokens[t].content) && i(e.tokens[t].children));
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return e.substr(0, t) + n + e.substr(t + 1);
        }

      function o(e, t) {
          var n, o, c, p, f, h, d, v, m, g, y, b, _, w, C, S, E, x, k, O, T;
          for (k = [], n = 0; n < e.length; n++) {
              for (o = e[n], d = e[n].level, E = k.length - 1; E >= 0 && !(k[E].level <= d); E--);
              if (k.length = E + 1, 'text' === o.type) {
                  c = o.content, f = 0, h = c.length;
                  e: for (; f < h && (u.lastIndex = f, p = u.exec(c));) {
                      if (C = S = !0, f = p.index + 1, x = '\'' === p[0], m = 32, p.index - 1 >= 0) m = c.charCodeAt(p.index - 1);
                      else
                            for (E = n - 1; E >= 0; E--)
                              if ('text' === e[E].type) {
                                  m = e[E].content.charCodeAt(e[E].content.length - 1);
                                  break;
                                } if (g = 32, f < h) g = c.charCodeAt(f);
                      else
                            for (E = n + 1; E < e.length; E++)
                              if ('text' === e[E].type) {
                                  g = e[E].content.charCodeAt(0);
                                  break;
                                } if (y = a(m) || s(String.fromCharCode(m)), b = a(g) || s(String.fromCharCode(g)), _ = i(m), w = i(g), w ? C = !1 : b && (_ || y || (C = !1)), _ ? S = !1 : y && (w || b || (S = !1)), 34 === g && '"' === p[0] && m >= 48 && m <= 57 && (S = C = !1), C && S && (C = !1, S = b), C || S) {
                                  if (S)
                              for (E = k.length - 1; E >= 0 && (v = k[E], !(k[E].level < d)); E--)
                                  if (v.single === x && k[E].level === d) {
                                      v = k[E], x ? (O = t.md.options.quotes[2], T = t.md.options.quotes[3]) : (O = t.md.options.quotes[0], T = t.md.options.quotes[1]), o.content = r(o.content, p.index, T), e[v.token].content = r(e[v.token].content, v.pos, O), f += T.length - 1, v.token === n && (f += O.length - 1), c = o.content, h = c.length, k.length = E;
                                      continue e;
                                    }
                                  C ? k.push({
                              token: n,
                              pos: p.index,
                              single: x,
                              level: d,
                            }) : S && x && (o.content = r(o.content, p.index, l));
                                } else x && (o.content = r(o.content, p.index, l));
                    }
                }
            }
        }
      var i = n(2).isWhiteSpace,
          s = n(2).isPunctChar,
          a = n(2).isMdAsciiPunct,
          c = /['"]/,
          u = /['"]/g,
          l = '’';
      e.exports = function(e) {
          var t;
          if (e.md.options.typographer)
              for (t = e.tokens.length - 1; t >= 0; t--) 'inline' === e.tokens[t].type && c.test(e.tokens[t].content) && o(e.tokens[t].children, e);
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
        }
      var o = n(68);
      r.prototype.Token = o, e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
          o = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
      e.exports = function(e, t) {
          var n, i, s, a, c, u, l = e.pos;
          return 60 === e.src.charCodeAt(l) && (n = e.src.slice(l), !(n.indexOf('>') < 0) && (o.test(n) ? (i = n.match(o), a = i[0].slice(1, -1), c = e.md.normalizeLink(a), !!e.md.validateLink(c) && (t || (u = e.push('link_open', 'a', 1), u.attrs = [
                ['href', c],
            ], u.markup = 'autolink', u.info = 'auto', u = e.push('text', '', 0), u.content = e.md.normalizeLinkText(a), u = e.push('link_close', 'a', -1), u.markup = 'autolink', u.info = 'auto'), e.pos += i[0].length, !0)) : !!r.test(n) && (s = n.match(r), a = s[0].slice(1, -1), c = e.md.normalizeLink('mailto:' + a), !!e.md.validateLink(c) && (t || (u = e.push('link_open', 'a', 1), u.attrs = [
                ['href', c],
            ], u.markup = 'autolink', u.info = 'auto', u = e.push('text', '', 0), u.content = e.md.normalizeLinkText(a), u = e.push('link_close', 'a', -1), u.markup = 'autolink', u.info = 'auto'), e.pos += s[0].length, !0))));
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e, t) {
          var n, r, o, i, s, a, c = e.pos;
          if (96 !== e.src.charCodeAt(c)) return !1;
          for (n = c, c++, r = e.posMax; c < r && 96 === e.src.charCodeAt(c);) c++;
          for (o = e.src.slice(n, c), i = s = c; - 1 !== (i = e.src.indexOf('`', s));) {
              for (s = i + 1; s < r && 96 === e.src.charCodeAt(s);) s++;
              if (s - i === o.length) return t || (a = e.push('code_inline', 'code', 0), a.markup = o, a.content = e.src.slice(c, i).replace(/[ \n]+/g, ' ').trim()), e.pos = s, !0;
            }
          return t || (e.pending += o), e.pos += o.length, !0;
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t, n, r, o, i = e.delimiters,
              s = e.delimiters.length;
          for (t = 0; t < s; t++)
              if (r = i[t], r.close)
                  for (n = t - r.jump - 1; n >= 0;) {
                      if (o = i[n], o.open && o.marker === r.marker && o.end < 0 && o.level === r.level) {
                          var a = (o.close || r.open) && void 0 !== o.length && void 0 !== r.length && (o.length + r.length) % 3 == 0;
                          if (!a) {
                              r.jump = t - n, r.open = !1, o.end = t, o.jump = 0;
                              break;
                            }
                        }
                      n -= o.jump + 1;
                    }
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(116),
          o = n(2).has,
          i = n(2).isValidEntityCode,
          s = n(2).fromCodePoint,
          a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
          c = /^&([a-z][a-z0-9]{1,31});/i;
      e.exports = function(e, t) {
          var n, u, l = e.pos,
              p = e.posMax;
          if (38 !== e.src.charCodeAt(l)) return !1;
          if (l + 1 < p)
              if (35 === e.src.charCodeAt(l + 1)) {
                  if (u = e.src.slice(l).match(a)) return t || (n = 'x' === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), e.pending += s(i(n) ? n : 65533)), e.pos += u[0].length, !0;
                } else if ((u = e.src.slice(l).match(c)) && o(r, u[1])) return t || (e.pending += r[u[1]]), e.pos += u[0].length, !0;
          return t || (e.pending += '&'), e.pos++, !0;
        };
    }, function(e, t, n) {
      'use strict';
      for (var r = n(2).isSpace, o = [], i = 0; i < 256; i++) o.push(0);
      '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function(e) {
          o[e.charCodeAt(0)] = 1;
        }), e.exports = function(e, t) {
          var n, i = e.pos,
              s = e.posMax;
          if (92 !== e.src.charCodeAt(i)) return !1;
          if (++i < s) {
              if ((n = e.src.charCodeAt(i)) < 256 && 0 !== o[n]) return t || (e.pending += e.src[i]), e.pos += 2, !0;
              if (10 === n) {
                  for (t || e.push('hardbreak', 'br', 0), i++; i < s && (n = e.src.charCodeAt(i), r(n));) i++;
                  return e.pos = i, !0;
                }
            }
          return t || (e.pending += '\\'), e.pos++, !0;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = 32 | e;
          return t >= 97 && t <= 122;
        }
      var o = n(117).HTML_TAG_RE;
      e.exports = function(e, t) {
          var n, i, s, a, c = e.pos;
          return !!e.md.options.html && (s = e.posMax, !(60 !== e.src.charCodeAt(c) || c + 2 >= s) && (!(33 !== (n = e.src.charCodeAt(c + 1)) && 63 !== n && 47 !== n && !r(n)) && (!!(i = e.src.slice(c).match(o)) && (t || (a = e.push('html_inline', '', 0), a.content = e.src.slice(c, c + i[0].length)), e.pos += i[0].length, !0))));
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).normalizeReference,
          o = n(2).isSpace;
      e.exports = function(e, t) {
          var n, i, s, a, c, u, l, p, f, h, d, v, m, g = '',
              y = e.pos,
              b = e.posMax;
          if (33 !== e.src.charCodeAt(e.pos)) return !1;
          if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
          if (u = e.pos + 2, (c = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0) return !1;
          if ((l = c + 1) < b && 40 === e.src.charCodeAt(l)) {
              for (l++; l < b && (i = e.src.charCodeAt(l), o(i) || 10 === i); l++);
              if (l >= b) return !1;
              for (m = l, f = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), f.ok && (g = e.md.normalizeLink(f.str), e.md.validateLink(g) ? l = f.pos : g = ''), m = l; l < b && (i = e.src.charCodeAt(l), o(i) || 10 === i); l++);
              if (f = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < b && m !== l && f.ok)
                  for (h = f.str, l = f.pos; l < b && (i = e.src.charCodeAt(l), o(i) || 10 === i); l++);
              else h = '';
              if (l >= b || 41 !== e.src.charCodeAt(l)) return e.pos = y, !1;
              l++;
            } else {
              if (void 0 === e.env.references) return !1;
              if (l < b && 91 === e.src.charCodeAt(l) ? (m = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? a = e.src.slice(m, l++) : l = c + 1) : l = c + 1, a || (a = e.src.slice(u, c)), !(p = e.env.references[r(a)])) return e.pos = y, !1;
              g = p.href, h = p.title;
            }
          return t || (s = e.src.slice(u, c), e.md.inline.parse(s, e.md, e.env, v = []), d = e.push('image', 'img', 0), d.attrs = n = [
                ['src', g],
                ['alt', ''],
            ], d.children = v, d.content = s, h && n.push(['title', h])), e.pos = l, e.posMax = b, !0;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).normalizeReference,
          o = n(2).isSpace;
      e.exports = function(e, t) {
          var n, i, s, a, c, u, l, p, f, h, d = '',
              v = e.pos,
              m = e.posMax,
              g = e.pos,
              y = !0;
          if (91 !== e.src.charCodeAt(e.pos)) return !1;
          if (c = e.pos + 1, (a = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0) return !1;
          if ((u = a + 1) < m && 40 === e.src.charCodeAt(u)) {
              for (y = !1, u++; u < m && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++);
              if (u >= m) return !1;
              for (g = u, l = e.md.helpers.parseLinkDestination(e.src, u, e.posMax), l.ok && (d = e.md.normalizeLink(l.str), e.md.validateLink(d) ? u = l.pos : d = ''), g = u; u < m && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++);
              if (l = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < m && g !== u && l.ok)
                  for (f = l.str, u = l.pos; u < m && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++);
              else f = '';
              (u >= m || 41 !== e.src.charCodeAt(u)) && (y = !0), u++;
            }
          if (y) {
              if (void 0 === e.env.references) return !1;
              if (u < m && 91 === e.src.charCodeAt(u) ? (g = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? s = e.src.slice(g, u++) : u = a + 1) : u = a + 1, s || (s = e.src.slice(c, a)), !(p = e.env.references[r(s)])) return e.pos = v, !1;
              d = p.href, f = p.title;
            }
          return t || (e.pos = c, e.posMax = a, h = e.push('link_open', 'a', 1), h.attrs = n = [
                ['href', d],
            ], f && n.push(['title', f]), e.md.inline.tokenize(e), h = e.push('link_close', 'a', -1)), e.pos = u, e.posMax = m, !0;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(2).isSpace;
      e.exports = function(e, t) {
          var n, o, i = e.pos;
          if (10 !== e.src.charCodeAt(i)) return !1;
          for (n = e.pending.length - 1, o = e.posMax, t || (n >= 0 && 32 === e.pending.charCodeAt(n) ? n >= 1 && 32 === e.pending.charCodeAt(n - 1) ? (e.pending = e.pending.replace(/ +$/, ''), e.push('hardbreak', 'br', 0)) : (e.pending = e.pending.slice(0, -1), e.push('softbreak', 'br', 0)) : e.push('softbreak', 'br', 0)), i++; i < o && r(e.src.charCodeAt(i));) i++;
          return e.pos = i, !0;
        };
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          this.src = e, this.env = n, this.md = t, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = '', this.pendingLevel = 0, this.cache = {}, this.delimiters = [];
        }
      var o = n(68),
          i = n(2).isWhiteSpace,
          s = n(2).isPunctChar,
          a = n(2).isMdAsciiPunct;
      r.prototype.pushPending = function() {
          var e = new o('text', '', 0);
          return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = '', e;
        }, r.prototype.push = function(e, t, n) {
          this.pending && this.pushPending();
          var r = new o(e, t, n);
          return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r;
        }, r.prototype.scanDelims = function(e, t) {
          var n, r, o, c, u, l, p, f, h, d = e,
              v = !0,
              m = !0,
              g = this.posMax,
              y = this.src.charCodeAt(e);
          for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; d < g && this.src.charCodeAt(d) === y;) d++;
          return o = d - e, r = d < g ? this.src.charCodeAt(d) : 32, p = a(n) || s(String.fromCharCode(n)), h = a(r) || s(String.fromCharCode(r)), l = i(n), f = i(r), f ? v = !1 : h && (l || p || (v = !1)), l ? m = !1 : p && (f || h || (m = !1)), t ? (c = v, u = m) : (c = v && (!m || p), u = m && (!v || h)), {
              can_open: c,
              can_close: u,
              length: o,
            };
        }, r.prototype.Token = o, e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          switch (e) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
              return !0;
            default:
              return !1;
            }
        }
      e.exports = function(e, t) {
          for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n));) n++;
          return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
        };
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t, n, r = 0,
              o = e.tokens,
              i = e.tokens.length;
          for (t = n = 0; t < i; t++) r += o[t].nesting, o[t].level = r, 'text' === o[t].type && t + 1 < i && 'text' === o[t + 1].type ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== n && (o[n] = o[t]), n++);
          t !== n && (o.length = n);
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t, n, r = i[e];
          if (r) return r;
          for (r = i[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), r.push(n);
          for (t = 0; t < e.length; t++) n = e.charCodeAt(t), r[n] = '%' + ('0' + n.toString(16).toUpperCase()).slice(-2);
          return r;
        }

      function o(e, t) {
          var n;
          return 'string' != typeof t && (t = o.defaultChars), n = r(t), e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
              var t, r, o, i, s, a, c, u = '';
              for (t = 0, r = e.length; t < r; t += 3) o = parseInt(e.slice(t + 1, t + 3), 16), o < 128 ? u += n[o] : 192 == (224 & o) && t + 3 < r && 128 == (192 & (i = parseInt(e.slice(t + 4, t + 6), 16))) ? (c = o << 6 & 1984 | 63 & i, u += c < 128 ? '��' : String.fromCharCode(c), t += 3) : 224 == (240 & o) && t + 6 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), s = parseInt(e.slice(t + 7, t + 9), 16), 128 == (192 & i) && 128 == (192 & s)) ? (c = o << 12 & 61440 | i << 6 & 4032 | 63 & s, u += c < 2048 || c >= 55296 && c <= 57343 ? '���' : String.fromCharCode(c), t += 6) : 240 == (248 & o) && t + 9 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), s = parseInt(e.slice(t + 7, t + 9), 16), a = parseInt(e.slice(t + 10, t + 12), 16), 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a)) ? (c = o << 18 & 1835008 | i << 12 & 258048 | s << 6 & 4032 | 63 & a, c < 65536 || c > 1114111 ? u += '����' : (c -= 65536, u += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), t += 9) : u += '�';
              return u;
            });
        }
      var i = {};
      o.defaultChars = ';/?:@&=+$,#', o.componentChars = '', e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t, n, r = i[e];
          if (r) return r;
          for (r = i[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push('%' + ('0' + t.toString(16).toUpperCase()).slice(-2));
          for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
          return r;
        }

      function o(e, t, n) {
          var i, s, a, c, u, l = '';
          for ('string' != typeof t && (n = t, t = o.defaultChars), void 0 === n && (n = !0), u = r(t), i = 0, s = e.length; i < s; i++)
              if (a = e.charCodeAt(i), n && 37 === a && i + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) l += e.slice(i, i + 3), i += 2;
              else if (a < 128) l += u[a];
              else if (a >= 55296 && a <= 57343) {
              if (a >= 55296 && a <= 56319 && i + 1 < s && (c = e.charCodeAt(i + 1)) >= 56320 && c <= 57343) {
                  l += encodeURIComponent(e[i] + e[i + 1]), i++;
                  continue;
                }
              l += '%EF%BF%BD';
            } else l += encodeURIComponent(e[i]);
          return l;
        }
      var i = {};
      o.defaultChars = ';/?:@&=+$,-_.!~*\'()#', o.componentChars = '-_.!~*\'()', e.exports = o;
    }, function(e, t, n) {
      'use strict';
      e.exports = function(e) {
          var t = '';
          return t += e.protocol || '', t += e.slashes ? '//' : '', t += e.auth ? e.auth + '@' : '', e.hostname && -1 !== e.hostname.indexOf(':') ? t += '[' + e.hostname + ']' : t += e.hostname || '', t += e.port ? ':' + e.port : '', t += e.pathname || '', t += e.search || '', t += e.hash || '';
        };
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
        }

      function o(e, t) {
          if (e && e instanceof r) return e;
          var n = new r;
          return n.parse(e, t), n;
        }
      var i = /^([a-z0-9.+-]+:)/i,
          s = /:[0-9]*$/,
          a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          c = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
          u = ['{', '}', '|', '\\', '^', '`'].concat(c),
          l = ['\''].concat(u),
          p = ['%', '/', '?', ';', '#'].concat(l),
          f = ['/', '?', '#'],
          h = /^[+a-z0-9A-Z_-]{0,63}$/,
          d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          v = {
              javascript: !0,
              'javascript:': !0,
            },
          m = {
              http: !0,
              https: !0,
              ftp: !0,
              gopher: !0,
              file: !0,
              'http:': !0,
              'https:': !0,
              'ftp:': !0,
              'gopher:': !0,
              'file:': !0,
            };
      r.prototype.parse = function(e, t) {
          var n, r, o, s, c, u = e;
          if (u = u.trim(), !t && 1 === e.split('#').length) {
              var l = a.exec(u);
              if (l) return this.pathname = l[1], l[2] && (this.search = l[2]), this;
            }
          var g = i.exec(u);
          if (g && (g = g[0], o = g.toLowerCase(), this.protocol = g, u = u.substr(g.length)), (t || g || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(c = '//' === u.substr(0, 2)) || g && v[g] || (u = u.substr(2), this.slashes = !0)), !v[g] && (c || g && !m[g])) {
              var y = -1;
              for (n = 0; n < f.length; n++) - 1 !== (s = u.indexOf(f[n])) && (-1 === y || s < y) && (y = s);
              var b, _;
              for (_ = -1 === y ? u.lastIndexOf('@') : u.lastIndexOf('@', y), -1 !== _ && (b = u.slice(0, _), u = u.slice(_ + 1), this.auth = b), y = -1, n = 0; n < p.length; n++) - 1 !== (s = u.indexOf(p[n])) && (-1 === y || s < y) && (y = s); - 1 === y && (y = u.length), ':' === u[y - 1] && y--;
              var w = u.slice(0, y);
              u = u.slice(y), this.parseHost(w), this.hostname = this.hostname || '';
              var C = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
              if (!C) {
                  var S = this.hostname.split(/\./);
                  for (n = 0, r = S.length; n < r; n++) {
                      var E = S[n];
                      if (E && !E.match(h)) {
                          for (var x = '', k = 0, O = E.length; k < O; k++) E.charCodeAt(k) > 127 ? x += 'x' : x += E[k];
                          if (!x.match(h)) {
                              var T = S.slice(0, n),
                                  A = S.slice(n + 1),
                                  P = E.match(d);
                              P && (T.push(P[1]), A.unshift(P[2])), A.length && (u = A.join('.') + u), this.hostname = T.join('.');
                              break;
                            }
                        }
                    }
                }
              this.hostname.length > 255 && (this.hostname = ''), C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
            }
          var I = u.indexOf('#'); - 1 !== I && (this.hash = u.substr(I), u = u.slice(0, I));
          var M = u.indexOf('?');
          return -1 !== M && (this.search = u.substr(M), u = u.slice(0, M)), u && (this.pathname = u), m[o] && this.hostname && !this.pathname && (this.pathname = ''), this;
        }, r.prototype.parseHost = function(e) {
          var t = s.exec(e);
          t && (t = t[0], ':' !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
        }, e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r, o) {}
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(11),
          o = n(1),
          i = n(124);
      e.exports = function() {
          function e(e, t, n, r, s, a) {
              a !== i && o(!1, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
            }

          function t() {
              return e;
            }
          e.isRequired = e;
          var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
            };
          return n.checkPropTypes = r, n.PropTypes = n, n;
        };
    }, function(e, t, n) {
      'use strict';
      var r = n(11),
          o = n(1),
          i = n(3),
          s = n(124),
          a = n(330);
      e.exports = function(e, t) {
          function n(e) {
              var t = e && (E && e[E] || e[x]);
              if ('function' == typeof t) return t;
            }

          function c(e, t) {
              return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
            }

          function u(e) {
              this.message = e, this.stack = '';
            }

          function l(e) {
              function n(n, r, i, a, c, l, p) {
                  if (a = a || k, l = l || i, p !== s)
                      if (t) o(!1, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types');
                      else;
                  return null == r[i] ? n ? new u(null === r[i] ? 'The ' + c + ' `' + l + '` is marked as required in `' + a + '`, but its value is `null`.' : 'The ' + c + ' `' + l + '` is marked as required in `' + a + '`, but its value is `undefined`.') : null : e(r, i, a, c, l);
                }
              var r = n.bind(null, !1);
              return r.isRequired = n.bind(null, !0), r;
            }

          function p(e) {
              function t(t, n, r, o, i, s) {
                  var a = t[n];
                  if (_(a) !== e) return new u('Invalid ' + o + ' `' + i + '` of type `' + w(a) + '` supplied to `' + r + '`, expected `' + e + '`.');
                  return null;
                }
              return l(t);
            }

          function f(e) {
              function t(t, n, r, o, i) {
                  if ('function' != typeof e) return new u('Property `' + i + '` of component `' + r + '` has invalid PropType notation inside arrayOf.');
                  var a = t[n];
                  if (!Array.isArray(a)) {
                      return new u('Invalid ' + o + ' `' + i + '` of type `' + _(a) + '` supplied to `' + r + '`, expected an array.');
                    }
                  for (var c = 0; c < a.length; c++) {
                      var l = e(a, c, r, o, i + '[' + c + ']', s);
                      if (l instanceof Error) return l;
                    }
                  return null;
                }
              return l(t);
            }

          function h(e) {
              function t(t, n, r, o, i) {
                  if (!(t[n] instanceof e)) {
                      var s = e.name || k;
                      return new u('Invalid ' + o + ' `' + i + '` of type `' + S(t[n]) + '` supplied to `' + r + '`, expected instance of `' + s + '`.');
                    }
                  return null;
                }
              return l(t);
            }

          function d(e) {
              function t(t, n, r, o, i) {
                  for (var s = t[n], a = 0; a < e.length; a++)
                      if (c(s, e[a])) return null;
                  return new u('Invalid ' + o + ' `' + i + '` of value `' + s + '` supplied to `' + r + '`, expected one of ' + JSON.stringify(e) + '.');
                }
              return Array.isArray(e) ? l(t) : r.thatReturnsNull;
            }

          function v(e) {
              function t(t, n, r, o, i) {
                  if ('function' != typeof e) return new u('Property `' + i + '` of component `' + r + '` has invalid PropType notation inside objectOf.');
                  var a = t[n],
                      c = _(a);
                  if ('object' !== c) return new u('Invalid ' + o + ' `' + i + '` of type `' + c + '` supplied to `' + r + '`, expected an object.');
                  for (var l in a)
                      if (a.hasOwnProperty(l)) {
                          var p = e(a, l, r, o, i + '.' + l, s);
                          if (p instanceof Error) return p;
                        }
                  return null;
                }
              return l(t);
            }

          function m(e) {
              function t(t, n, r, o, i) {
                  for (var a = 0; a < e.length; a++) {
                      if (null == (0, e[a])(t, n, r, o, i, s)) return null;
                    }
                  return new u('Invalid ' + o + ' `' + i + '` supplied to `' + r + '`.');
                }
              if (!Array.isArray(e)) return r.thatReturnsNull;
              for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  if ('function' != typeof o) return i(!1, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.', C(o), n), r.thatReturnsNull;
                }
              return l(t);
            }

          function g(e) {
              function t(t, n, r, o, i) {
                  var a = t[n],
                      c = _(a);
                  if ('object' !== c) return new u('Invalid ' + o + ' `' + i + '` of type `' + c + '` supplied to `' + r + '`, expected `object`.');
                  for (var l in e) {
                      var p = e[l];
                      if (p) {
                          var f = p(a, l, r, o, i + '.' + l, s);
                          if (f) return f;
                        }
                    }
                  return null;
                }
              return l(t);
            }

          function y(t) {
              switch (typeof t) {
                case 'number':
                case 'string':
                case 'undefined':
                  return !0;
                case 'boolean':
                  return !t;
                case 'object':
                  if (Array.isArray(t)) return t.every(y);
                  if (null === t || e(t)) return !0;
                  var r = n(t);
                  if (!r) return !1;
                  var o, i = r.call(t);
                  if (r !== t.entries) {
                          for (; !(o = i.next()).done;)
                              if (!y(o.value)) return !1;
                        } else
                            for (; !(o = i.next()).done;) {
                              var s = o.value;
                              if (s && !y(s[1])) return !1;
                            }
                  return !0;
                default:
                  return !1;
                }
            }

          function b(e, t) {
              return 'symbol' === e || ('Symbol' === t['@@toStringTag'] || 'function' == typeof Symbol && t instanceof Symbol);
            }

          function _(e) {
              var t = typeof e;
              return Array.isArray(e) ? 'array' : e instanceof RegExp ? 'object' : b(t, e) ? 'symbol' : t;
            }

          function w(e) {
              if (void 0 === e || null === e) return '' + e;
              var t = _(e);
              if ('object' === t) {
                  if (e instanceof Date) return 'date';
                  if (e instanceof RegExp) return 'regexp';
                }
              return t;
            }

          function C(e) {
              var t = w(e);
              switch (t) {
                case 'array':
                case 'object':
                  return 'an ' + t;
                case 'boolean':
                case 'date':
                case 'regexp':
                  return 'a ' + t;
                default:
                  return t;
                }
            }

          function S(e) {
              return e.constructor && e.constructor.name ? e.constructor.name : k;
            }
          var E = 'function' == typeof Symbol && Symbol.iterator,
              x = '@@iterator',
              k = '<<anonymous>>',
              O = {
                  array: p('array'),
                  bool: p('boolean'),
                  func: p('function'),
                  number: p('number'),
                  object: p('object'),
                  string: p('string'),
                  symbol: p('symbol'),
                  any: function() {
                      return l(r.thatReturnsNull);
                    }(),
                  arrayOf: f,
                  element: function() {
                      function t(t, n, r, o, i) {
                          var s = t[n];
                          if (!e(s)) {
                              return new u('Invalid ' + o + ' `' + i + '` of type `' + _(s) + '` supplied to `' + r + '`, expected a single ReactElement.');
                            }
                          return null;
                        }
                      return l(t);
                    }(),
                  instanceOf: h,
                  node: function() {
                      function e(e, t, n, r, o) {
                          return y(e[t]) ? null : new u('Invalid ' + r + ' `' + o + '` supplied to `' + n + '`, expected a ReactNode.');
                        }
                      return l(e);
                    }(),
                  objectOf: v,
                  oneOf: d,
                  oneOfType: m,
                  shape: g,
                };
          return u.prototype = Error.prototype, O.checkPropTypes = a, O.PropTypes = O, O;
        };
    }, function(e, t, n) {
      (function(e, r) {
          var o;
          ! function(i) {
              function s(e) {
                  throw new RangeError(M[e]);
                }

              function a(e, t) {
                  for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                  return r;
                }

              function c(e, t) {
                  var n = e.split('@'),
                      r = '';
                  return n.length > 1 && (r = n[0] + '@', e = n[1]), e = e.replace(I, '.'), r + a(e.split('.'), t).join('.');
                }

              function u(e) {
                  for (var t, n, r = [], o = 0, i = e.length; o < i;) t = e.charCodeAt(o++), t >= 55296 && t <= 56319 && o < i ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                  return r;
                }

              function l(e) {
                  return a(e, function(e) {
                      var t = '';
                      return e > 65535 && (e -= 65536, t += N(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += N(e);
                    }).join('');
                }

              function p(e) {
                  return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : w;
                }

              function f(e, t) {
                  return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                }

              function h(e, t, n) {
                  var r = 0;
                  for (e = n ? D(e / x) : e >> 1, e += D(e / t); e > R * S >> 1; r += w) e = D(e / R);
                  return D(r + (R + 1) * e / (e + E));
                }

              function d(e) {
                  var t, n, r, o, i, a, c, u, f, d, v = [],
                      m = e.length,
                      g = 0,
                      y = O,
                      b = k;
                  for (n = e.lastIndexOf(T), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && s('not-basic'), v.push(e.charCodeAt(r));
                  for (o = n > 0 ? n + 1 : 0; o < m;) {
                      for (i = g, a = 1, c = w; o >= m && s('invalid-input'), u = p(e.charCodeAt(o++)), (u >= w || u > D((_ - g) / a)) && s('overflow'), g += u * a, f = c <= b ? C : c >= b + S ? S : c - b, !(u < f); c += w) d = w - f, a > D(_ / d) && s('overflow'), a *= d;
                      t = v.length + 1, b = h(g - i, t, 0 == i), D(g / t) > _ - y && s('overflow'), y += D(g / t), g %= t, v.splice(g++, 0, y);
                    }
                  return l(v);
                }

              function v(e) {
                  var t, n, r, o, i, a, c, l, p, d, v, m, g, y, b, E = [];
                  for (e = u(e), m = e.length, t = O, n = 0, i = k, a = 0; a < m; ++a)(v = e[a]) < 128 && E.push(N(v));
                  for (r = o = E.length, o && E.push(T); r < m;) {
                      for (c = _, a = 0; a < m; ++a)(v = e[a]) >= t && v < c && (c = v);
                      for (g = r + 1, c - t > D((_ - n) / g) && s('overflow'), n += (c - t) * g, t = c, a = 0; a < m; ++a)
                          if (v = e[a], v < t && ++n > _ && s('overflow'), v == t) {
                              for (l = n, p = w; d = p <= i ? C : p >= i + S ? S : p - i, !(l < d); p += w) b = l - d, y = w - d, E.push(N(f(d + b % y, 0))), l = D(b / y);
                              E.push(N(f(l, 0))), i = h(n, g, r == o), n = 0, ++r;
                            }++n, ++t;
                    }
                  return E.join('');
                }

              function m(e) {
                  return c(e, function(e) {
                      return A.test(e) ? d(e.slice(4).toLowerCase()) : e;
                    });
                }

              function g(e) {
                  return c(e, function(e) {
                      return P.test(e) ? 'xn--' + v(e) : e;
                    });
                }
              var y = ('object' == typeof t && t && t.nodeType, 'object' == typeof e && e && e.nodeType, 'object' == typeof r && r);
              var b, _ = 2147483647,
                  w = 36,
                  C = 1,
                  S = 26,
                  E = 38,
                  x = 700,
                  k = 72,
                  O = 128,
                  T = '-',
                  A = /^xn--/,
                  P = /[^\x20-\x7E]/,
                  I = /[\x2E\u3002\uFF0E\uFF61]/g,
                  M = {
                      overflow: 'Overflow: input needs wider integers to process',
                      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                      'invalid-input': 'Invalid input',
                    },
                  R = w - C,
                  D = Math.floor,
                  N = String.fromCharCode;
              b = {
                  version: '1.4.1',
                  ucs2: {
                      decode: u,
                      encode: l,
                    },
                  decode: d,
                  encode: v,
                  toASCII: g,
                  toUnicode: m,
                }, void 0 !== (o = function() {
                  return b;
                }.call(t, n, t, e)) && (e.exports = o);
            }();
        }).call(t, n(184)(e), n(53));
    }, function(e, t, n) {
      'use strict';
      e.exports = n(348);
    }, function(e, t, n) {
      'use strict';
      var r = {
          Properties: {
              'aria-current': 0,
              'aria-details': 0,
              'aria-disabled': 0,
              'aria-hidden': 0,
              'aria-invalid': 0,
              'aria-keyshortcuts': 0,
              'aria-label': 0,
              'aria-roledescription': 0,
              'aria-autocomplete': 0,
              'aria-checked': 0,
              'aria-expanded': 0,
              'aria-haspopup': 0,
              'aria-level': 0,
              'aria-modal': 0,
              'aria-multiline': 0,
              'aria-multiselectable': 0,
              'aria-orientation': 0,
              'aria-placeholder': 0,
              'aria-pressed': 0,
              'aria-readonly': 0,
              'aria-required': 0,
              'aria-selected': 0,
              'aria-sort': 0,
              'aria-valuemax': 0,
              'aria-valuemin': 0,
              'aria-valuenow': 0,
              'aria-valuetext': 0,
              'aria-atomic': 0,
              'aria-busy': 0,
              'aria-live': 0,
              'aria-relevant': 0,
              'aria-dropeffect': 0,
              'aria-grabbed': 0,
              'aria-activedescendant': 0,
              'aria-colcount': 0,
              'aria-colindex': 0,
              'aria-colspan': 0,
              'aria-controls': 0,
              'aria-describedby': 0,
              'aria-errormessage': 0,
              'aria-flowto': 0,
              'aria-labelledby': 0,
              'aria-owns': 0,
              'aria-posinset': 0,
              'aria-rowcount': 0,
              'aria-rowindex': 0,
              'aria-rowspan': 0,
              'aria-setsize': 0,
            },
          DOMAttributeNames: {},
          DOMPropertyNames: {},
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(6),
          o = n(113),
          i = {
              focusDOMComponent: function() {
                  o(r.getNodeFromInstance(this));
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
        }

      function o(e) {
          switch (e) {
            case 'topCompositionStart':
              return x.compositionStart;
            case 'topCompositionEnd':
              return x.compositionEnd;
            case 'topCompositionUpdate':
              return x.compositionUpdate;
            }
        }

      function i(e, t) {
          return 'topKeyDown' === e && t.keyCode === y;
        }

      function s(e, t) {
          switch (e) {
            case 'topKeyUp':
              return -1 !== g.indexOf(t.keyCode);
            case 'topKeyDown':
              return t.keyCode !== y;
            case 'topKeyPress':
            case 'topMouseDown':
            case 'topBlur':
              return !0;
            default:
              return !1;
            }
        }

      function a(e) {
          var t = e.detail;
          return 'object' == typeof t && 'data' in t ? t.data : null;
        }

      function c(e, t, n, r) {
          var c, u;
          if (b ? c = o(e) : O ? s(e, n) && (c = x.compositionEnd) : i(e, n) && (c = x.compositionStart), !c) return null;
          C && (O || c !== x.compositionStart ? c === x.compositionEnd && O && (u = O.getData()) : O = d.getPooled(r));
          var l = v.getPooled(c, t, n, r);
          if (u) l.data = u;
          else {
              var p = a(n);
              null !== p && (l.data = p);
            }
          return f.accumulateTwoPhaseDispatches(l), l;
        }

      function u(e, t) {
          switch (e) {
            case 'topCompositionEnd':
              return a(t);
            case 'topKeyPress':
              return t.which !== S ? null : (k = !0, E);
            case 'topTextInput':
              var n = t.data;
              return n === E && k ? null : n;
            default:
              return null;
            }
        }

      function l(e, t) {
          if (O) {
              if ('topCompositionEnd' === e || !b && s(e, t)) {
                  var n = O.getData();
                  return d.release(O), O = null, n;
                }
              return null;
            }
          switch (e) {
            case 'topPaste':
              return null;
            case 'topKeyPress':
              return t.which && !r(t) ? String.fromCharCode(t.which) : null;
            case 'topCompositionEnd':
              return C ? null : t.data;
            default:
              return null;
            }
        }

      function p(e, t, n, r) {
          var o;
          if (!(o = w ? u(e, n) : l(e, n))) return null;
          var i = m.getPooled(x.beforeInput, t, n, r);
          return i.data = o, f.accumulateTwoPhaseDispatches(i), i;
        }
      var f = n(35),
          h = n(9),
          d = n(343),
          v = n(380),
          m = n(383),
          g = [9, 13, 27, 32],
          y = 229,
          b = h.canUseDOM && 'CompositionEvent' in window,
          _ = null;
      h.canUseDOM && 'documentMode' in document && (_ = document.documentMode);
      var w = h.canUseDOM && 'TextEvent' in window && !_ && ! function() {
            var e = window.opera;
            return 'object' == typeof e && 'function' == typeof e.version && parseInt(e.version(), 10) <= 12;
          }(),
          C = h.canUseDOM && (!b || _ && _ > 8 && _ <= 11),
          S = 32,
          E = String.fromCharCode(S),
          x = {
              beforeInput: {
                  phasedRegistrationNames: {
                      bubbled: 'onBeforeInput',
                      captured: 'onBeforeInputCapture',
                    },
                  dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste'],
                },
              compositionEnd: {
                  phasedRegistrationNames: {
                      bubbled: 'onCompositionEnd',
                      captured: 'onCompositionEndCapture',
                    },
                  dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown'],
                },
              compositionStart: {
                  phasedRegistrationNames: {
                      bubbled: 'onCompositionStart',
                      captured: 'onCompositionStartCapture',
                    },
                  dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown'],
                },
              compositionUpdate: {
                  phasedRegistrationNames: {
                      bubbled: 'onCompositionUpdate',
                      captured: 'onCompositionUpdateCapture',
                    },
                  dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown'],
                },
            },
          k = !1,
          O = null,
          T = {
              eventTypes: x,
              extractEvents: function(e, t, n, r) {
                  return [c(e, t, n, r), p(e, t, n, r)];
                },
            };
      e.exports = T;
    }, function(e, t, n) {
      'use strict';
      var r = n(125),
          o = n(9),
          i = (n(14), n(258), n(389)),
          s = n(265),
          a = n(268),
          c = (n(3), a(function(e) {
              return s(e);
            })),
          u = !1,
          l = 'cssFloat';
      if (o.canUseDOM) {
          var p = document.createElement('div').style;
          try {
              p.font = '';
            } catch (e) {
              u = !0;
            }
          void 0 === document.documentElement.style.cssFloat && (l = 'styleFloat');
        }
      var f = {
          createMarkupForStyles: function(e, t) {
              var n = '';
              for (var r in e)
                  if (e.hasOwnProperty(r)) {
                      var o = e[r];
                      null != o && (n += c(r) + ':', n += i(r, o, t) + ';');
                    }
              return n || null;
            },
          setValueForStyles: function(e, t, n) {
              var o = e.style;
              for (var s in t)
                  if (t.hasOwnProperty(s)) {
                      var a = i(s, t[s], n);
                      if ('float' !== s && 'cssFloat' !== s || (s = l), 0 === s.indexOf('--')) o.setProperty(s, a);
                      else if (a) o[s] = a;
                      else {
                          var c = u && r.shorthandPropertyExpansions[s];
                          if (c)
                              for (var p in c) o[p] = '';
                          else o[s] = '';
                        }
                    }
            },
        };
      e.exports = f;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          var r = k.getPooled(I.change, e, t, n);
          return r.type = 'change', C.accumulateTwoPhaseDispatches(r), r;
        }

      function o(e) {
          var t = e.nodeName && e.nodeName.toLowerCase();
          return 'select' === t || 'input' === t && 'file' === e.type;
        }

      function i(e) {
          var t = r(R, e, T(e));
          x.batchedUpdates(s, t);
        }

      function s(e) {
          w.enqueueEvents(e), w.processEventQueue(!1);
        }

      function a(e, t) {
          M = e, R = t, M.attachEvent('onchange', i);
        }

      function c() {
          M && (M.detachEvent('onchange', i), M = null, R = null);
        }

      function u(e, t) {
          var n = O.updateValueIfChanged(e),
              r = !0 === t.simulated && j._allowSimulatedPassThrough;
          if (n || r) return e;
        }

      function l(e, t) {
          if ('topChange' === e) return t;
        }

      function p(e, t, n) {
          'topFocus' === e ? (c(), a(t, n)) : 'topBlur' === e && c();
        }

      function f(e, t) {
          M = e, R = t, M.attachEvent('onpropertychange', d);
        }

      function h() {
          M && (M.detachEvent('onpropertychange', d), M = null, R = null);
        }

      function d(e) {
          'value' === e.propertyName && u(R, e) && i(e);
        }

      function v(e, t, n) {
          'topFocus' === e ? (h(), f(t, n)) : 'topBlur' === e && h();
        }

      function m(e, t, n) {
          if ('topSelectionChange' === e || 'topKeyUp' === e || 'topKeyDown' === e) return u(R, n);
        }

      function g(e) {
          var t = e.nodeName;
          return t && 'input' === t.toLowerCase() && ('checkbox' === e.type || 'radio' === e.type);
        }

      function y(e, t, n) {
          if ('topClick' === e) return u(t, n);
        }

      function b(e, t, n) {
          if ('topInput' === e || 'topChange' === e) return u(t, n);
        }

      function _(e, t) {
          if (null != e) {
              var n = e._wrapperState || t._wrapperState;
              if (n && n.controlled && 'number' === t.type) {
                  var r = '' + t.value;
                  t.getAttribute('value') !== r && t.setAttribute('value', r);
                }
            }
        }
      var w = n(34),
          C = n(35),
          S = n(9),
          E = n(6),
          x = n(15),
          k = n(17),
          O = n(141),
          T = n(81),
          A = n(82),
          P = n(143),
          I = {
              change: {
                  phasedRegistrationNames: {
                      bubbled: 'onChange',
                      captured: 'onChangeCapture',
                    },
                  dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange'],
                },
            },
          M = null,
          R = null,
          D = !1;
      S.canUseDOM && (D = A('change') && (!document.documentMode || document.documentMode > 8));
      var N = !1;
      S.canUseDOM && (N = A('input') && (!('documentMode' in document) || document.documentMode > 9));
      var j = {
          eventTypes: I,
          _allowSimulatedPassThrough: !0,
          _isInputEventSupported: N,
          extractEvents: function(e, t, n, i) {
              var s, a, c = t ? E.getNodeFromInstance(t) : window;
              if (o(c) ? D ? s = l : a = p : P(c) ? N ? s = b : (s = m, a = v) : g(c) && (s = y), s) {
                  var u = s(e, t, n);
                  if (u) {
                      return r(u, n, i);
                    }
                }
              a && a(e, c, t), 'topBlur' === e && _(t, c);
            },
        };
      e.exports = j;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = n(25),
          i = n(9),
          s = n(261),
          a = n(11),
          c = (n(1), {
              dangerouslyReplaceNodeWithMarkup: function(e, t) {
                  if (i.canUseDOM || r('56'), t || r('57'), 'HTML' === e.nodeName && r('58'), 'string' == typeof t) {
                      var n = s(t, a)[0];
                      e.parentNode.replaceChild(n, e);
                    } else o.replaceChildWithTree(e, t);
                },
            });
      e.exports = c;
    }, function(e, t, n) {
      'use strict';
      var r = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(35),
          o = n(6),
          i = n(45),
          s = {
              mouseEnter: {
                  registrationName: 'onMouseEnter',
                  dependencies: ['topMouseOut', 'topMouseOver'],
                },
              mouseLeave: {
                  registrationName: 'onMouseLeave',
                  dependencies: ['topMouseOut', 'topMouseOver'],
                },
            },
          a = {
              eventTypes: s,
              extractEvents: function(e, t, n, a) {
                  if ('topMouseOver' === e && (n.relatedTarget || n.fromElement)) return null;
                  if ('topMouseOut' !== e && 'topMouseOver' !== e) return null;
                  var c;
                  if (a.window === a) c = a;
                  else {
                      var u = a.ownerDocument;
                      c = u ? u.defaultView || u.parentWindow : window;
                    }
                  var l, p;
                  if ('topMouseOut' === e) {
                      l = t;
                      var f = n.relatedTarget || n.toElement;
                      p = f ? o.getClosestInstanceFromNode(f) : null;
                    } else l = null, p = t;
                  if (l === p) return null;
                  var h = null == l ? c : o.getNodeFromInstance(l),
                      d = null == p ? c : o.getNodeFromInstance(p),
                      v = i.getPooled(s.mouseLeave, l, n, a);
                  v.type = 'mouseleave', v.target = h, v.relatedTarget = d;
                  var m = i.getPooled(s.mouseEnter, p, n, a);
                  return m.type = 'mouseenter', m.target = d, m.relatedTarget = h, r.accumulateEnterLeaveDispatches(v, m, l, p), [v, m];
                },
            };
      e.exports = a;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          this._root = e, this._startText = this.getText(), this._fallbackText = null;
        }
      var o = n(5),
          i = n(22),
          s = n(140);
      o(r.prototype, {
          destructor: function() {
              this._root = null, this._startText = null, this._fallbackText = null;
            },
          getText: function() {
              return 'value' in this._root ? this._root.value : this._root[s()];
            },
          getData: function() {
              if (this._fallbackText) return this._fallbackText;
              var e, t, n = this._startText,
                  r = n.length,
                  o = this.getText(),
                  i = o.length;
              for (e = 0; e < r && n[e] === o[e]; e++);
              var s = r - e;
              for (t = 1; t <= s && n[r - t] === o[i - t]; t++);
              var a = t > 1 ? 1 - t : void 0;
              return this._fallbackText = o.slice(e, a), this._fallbackText;
            },
        }), i.addPoolingTo(r), e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(26),
          o = r.injection.MUST_USE_PROPERTY,
          i = r.injection.HAS_BOOLEAN_VALUE,
          s = r.injection.HAS_NUMERIC_VALUE,
          a = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
          c = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
          u = {
              isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + r.ATTRIBUTE_NAME_CHAR + ']*$')),
              Properties: {
                  accept: 0,
                  acceptCharset: 0,
                  accessKey: 0,
                  action: 0,
                  allowFullScreen: i,
                  allowTransparency: 0,
                  alt: 0,
                  as: 0,
                  async: i,
                  autoComplete: 0,
                  autoPlay: i,
                  capture: i,
                  cellPadding: 0,
                  cellSpacing: 0,
                  charSet: 0,
                  challenge: 0,
                  checked: o | i,
                  cite: 0,
                  classID: 0,
                  className: 0,
                  cols: a,
                  colSpan: 0,
                  content: 0,
                  contentEditable: 0,
                  contextMenu: 0,
                  controls: i,
                  coords: 0,
                  crossOrigin: 0,
                  data: 0,
                  dateTime: 0,
                  default: i,
                  defer: i,
                  dir: 0,
                  disabled: i,
                  download: c,
                  draggable: 0,
                  encType: 0,
                  form: 0,
                  formAction: 0,
                  formEncType: 0,
                  formMethod: 0,
                  formNoValidate: i,
                  formTarget: 0,
                  frameBorder: 0,
                  headers: 0,
                  height: 0,
                  hidden: i,
                  high: 0,
                  href: 0,
                  hrefLang: 0,
                  htmlFor: 0,
                  httpEquiv: 0,
                  icon: 0,
                  id: 0,
                  inputMode: 0,
                  integrity: 0,
                  is: 0,
                  keyParams: 0,
                  keyType: 0,
                  kind: 0,
                  label: 0,
                  lang: 0,
                  list: 0,
                  loop: i,
                  low: 0,
                  manifest: 0,
                  marginHeight: 0,
                  marginWidth: 0,
                  max: 0,
                  maxLength: 0,
                  media: 0,
                  mediaGroup: 0,
                  method: 0,
                  min: 0,
                  minLength: 0,
                  multiple: o | i,
                  muted: o | i,
                  name: 0,
                  nonce: 0,
                  noValidate: i,
                  open: i,
                  optimum: 0,
                  pattern: 0,
                  placeholder: 0,
                  playsInline: i,
                  poster: 0,
                  preload: 0,
                  profile: 0,
                  radioGroup: 0,
                  readOnly: i,
                  referrerPolicy: 0,
                  rel: 0,
                  required: i,
                  reversed: i,
                  role: 0,
                  rows: a,
                  rowSpan: s,
                  sandbox: 0,
                  scope: 0,
                  scoped: i,
                  scrolling: 0,
                  seamless: i,
                  selected: o | i,
                  shape: 0,
                  size: a,
                  sizes: 0,
                  span: a,
                  spellCheck: 0,
                  src: 0,
                  srcDoc: 0,
                  srcLang: 0,
                  srcSet: 0,
                  start: s,
                  step: 0,
                  style: 0,
                  summary: 0,
                  tabIndex: 0,
                  target: 0,
                  title: 0,
                  type: 0,
                  useMap: 0,
                  value: 0,
                  width: 0,
                  wmode: 0,
                  wrap: 0,
                  about: 0,
                  datatype: 0,
                  inlist: 0,
                  prefix: 0,
                  property: 0,
                  resource: 0,
                  typeof: 0,
                  vocab: 0,
                  autoCapitalize: 0,
                  autoCorrect: 0,
                  autoSave: 0,
                  color: 0,
                  itemProp: 0,
                  itemScope: i,
                  itemType: 0,
                  itemID: 0,
                  itemRef: 0,
                  results: 0,
                  security: 0,
                  unselectable: 0,
                },
              DOMAttributeNames: {
                  acceptCharset: 'accept-charset',
                  className: 'class',
                  htmlFor: 'for',
                  httpEquiv: 'http-equiv',
                },
              DOMPropertyNames: {},
              DOMMutationMethods: {
                  value: function(e, t) {
                      if (null == t) return e.removeAttribute('value');
                      'number' !== e.type || !1 === e.hasAttribute('value') ? e.setAttribute('value', '' + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute('value', '' + t);
                    },
                },
            };
      e.exports = u;
    }, function(e, t, n) {
      'use strict';
      (function(t) {
          function r(e, t, n, r) {
              var o = void 0 === e[n];
              null != t && o && (e[n] = i(t, !0));
            }
          var o = n(27),
              i = n(142),
              s = (n(73), n(83)),
              a = n(145);
          n(3);
          void 0 !== t && n.i({
              NODE_ENV: 'production',
            });
          var c = {
              instantiateChildren: function(e, t, n, o) {
                  if (null == e) return null;
                  var i = {};
                  return a(e, r, i), i;
                },
              updateChildren: function(e, t, n, r, a, c, u, l, p) {
                  if (t || e) {
                      var f, h;
                      for (f in t)
                          if (t.hasOwnProperty(f)) {
                              h = e && e[f];
                              var d = h && h._currentElement,
                                  v = t[f];
                              if (null != h && s(d, v)) o.receiveComponent(h, v, a, l), t[f] = h;
                              else {
                                  h && (r[f] = o.getHostNode(h), o.unmountComponent(h, !1));
                                  var m = i(v, !0);
                                  t[f] = m;
                                  var g = o.mountComponent(m, a, c, u, l, p);
                                  n.push(g);
                                }
                            }
                      for (f in e) !e.hasOwnProperty(f) || t && t.hasOwnProperty(f) || (h = e[f], r[f] = o.getHostNode(h), o.unmountComponent(h, !1));
                    }
                },
              unmountChildren: function(e, t) {
                  for (var n in e)
                      if (e.hasOwnProperty(n)) {
                          var r = e[n];
                          o.unmountComponent(r, t);
                        }
                },
            };
          e.exports = c;
        }).call(t, n(121));
    }, function(e, t, n) {
      'use strict';
      var r = n(69),
          o = n(353),
          i = {
              processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
              replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup,
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {}

      function o(e) {
          return !(!e.prototype || !e.prototype.isReactComponent);
        }

      function i(e) {
          return !(!e.prototype || !e.prototype.isPureReactComponent);
        }
      var s = n(4),
          a = n(5),
          c = n(28),
          u = n(75),
          l = n(18),
          p = n(76),
          f = n(36),
          h = (n(14), n(135)),
          d = n(27),
          v = n(43),
          m = (n(1), n(65)),
          g = n(83),
          y = (n(3), {
              ImpureClass: 0,
              PureClass: 1,
              StatelessFunctional: 2,
            });
      r.prototype.render = function() {
          var e = f.get(this)._currentElement.type,
              t = e(this.props, this.context, this.updater);
          return t;
        };
      var b = 1,
          _ = {
              construct: function(e) {
                  this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1;
                },
              mountComponent: function(e, t, n, a) {
                  this._context = a, this._mountOrder = b++, this._hostParent = t, this._hostContainerInfo = n;
                  var u, l = this._currentElement.props,
                      p = this._processContext(a),
                      h = this._currentElement.type,
                      d = e.getUpdateQueue(),
                      m = o(h),
                      g = this._constructComponent(m, l, p, d);
                  m || null != g && null != g.render ? i(h) ? this._compositeType = y.PureClass : this._compositeType = y.ImpureClass : (u = g, null === g || !1 === g || c.isValidElement(g) || s('105', h.displayName || h.name || 'Component'), g = new r(h), this._compositeType = y.StatelessFunctional);
                  g.props = l, g.context = p, g.refs = v, g.updater = d, this._instance = g, f.set(g, this);
                  var _ = g.state;
                  void 0 === _ && (g.state = _ = null), ('object' != typeof _ || Array.isArray(_)) && s('106', this.getName() || 'ReactCompositeComponent'), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                  var w;
                  return w = g.unstable_handleError ? this.performInitialMountWithErrorHandling(u, t, n, e, a) : this.performInitialMount(u, t, n, e, a), g.componentDidMount && e.getReactMountReady().enqueue(g.componentDidMount, g), w;
                },
              _constructComponent: function(e, t, n, r) {
                  return this._constructComponentWithoutOwner(e, t, n, r);
                },
              _constructComponentWithoutOwner: function(e, t, n, r) {
                  var o = this._currentElement.type;
                  return e ? new o(t, n, r) : o(t, n, r);
                },
              performInitialMountWithErrorHandling: function(e, t, n, r, o) {
                  var i, s = r.checkpoint();
                  try {
                      i = this.performInitialMount(e, t, n, r, o);
                    } catch (a) {
                      r.rollback(s), this._instance.unstable_handleError(a), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), s = r.checkpoint(), this._renderedComponent.unmountComponent(!0), r.rollback(s), i = this.performInitialMount(e, t, n, r, o);
                    }
                  return i;
                },
              performInitialMount: function(e, t, n, r, o) {
                  var i = this._instance,
                      s = 0;
                  i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === e && (e = this._renderValidatedComponent());
                  var a = h.getType(e);
                  this._renderedNodeType = a;
                  var c = this._instantiateReactComponent(e, a !== h.EMPTY);
                  this._renderedComponent = c;
                  var u = d.mountComponent(c, r, t, n, this._processChildContext(o), s);
                  return u;
                },
              getHostNode: function() {
                  return d.getHostNode(this._renderedComponent);
                },
              unmountComponent: function(e) {
                  if (this._renderedComponent) {
                      var t = this._instance;
                      if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                          if (t._calledComponentWillUnmount = !0, e) {
                              var n = this.getName() + '.componentWillUnmount()';
                              p.invokeGuardedCallback(n, t.componentWillUnmount.bind(t));
                            } else t.componentWillUnmount();
                      this._renderedComponent && (d.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, f.remove(t);
                    }
                },
              _maskContext: function(e) {
                  var t = this._currentElement.type,
                      n = t.contextTypes;
                  if (!n) return v;
                  var r = {};
                  for (var o in n) r[o] = e[o];
                  return r;
                },
              _processContext: function(e) {
                  var t = this._maskContext(e);
                  return t;
                },
              _processChildContext: function(e) {
                  var t, n = this._currentElement.type,
                      r = this._instance;
                  if (r.getChildContext && (t = r.getChildContext()), t) {
                      'object' != typeof n.childContextTypes && s('107', this.getName() || 'ReactCompositeComponent');
                      for (var o in t) o in n.childContextTypes || s('108', this.getName() || 'ReactCompositeComponent', o);
                      return a({}, e, t);
                    }
                  return e;
                },
              _checkContextTypes: function(e, t, n) {},
              receiveComponent: function(e, t, n) {
                  var r = this._currentElement,
                      o = this._context;
                  this._pendingElement = null, this.updateComponent(t, r, e, o, n);
                },
              performUpdateIfNecessary: function(e) {
                  null != this._pendingElement ? d.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null;
                },
              updateComponent: function(e, t, n, r, o) {
                  var i = this._instance;
                  null == i && s('136', this.getName() || 'ReactCompositeComponent');
                  var a, c = !1;
                  this._context === o ? a = i.context : (a = this._processContext(o), c = !0);
                  var u = t.props,
                      l = n.props;
                  t !== n && (c = !0), c && i.componentWillReceiveProps && i.componentWillReceiveProps(l, a);
                  var p = this._processPendingState(l, a),
                      f = !0;
                  this._pendingForceUpdate || (i.shouldComponentUpdate ? f = i.shouldComponentUpdate(l, p, a) : this._compositeType === y.PureClass && (f = !m(u, l) || !m(i.state, p))), this._updateBatchNumber = null, f ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, l, p, a, e, o)) : (this._currentElement = n, this._context = o, i.props = l, i.state = p, i.context = a);
                },
              _processPendingState: function(e, t) {
                  var n = this._instance,
                      r = this._pendingStateQueue,
                      o = this._pendingReplaceState;
                  if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                  if (o && 1 === r.length) return r[0];
                  for (var i = a({}, o ? r[0] : n.state), s = o ? 1 : 0; s < r.length; s++) {
                      var c = r[s];
                      a(i, 'function' == typeof c ? c.call(n, i, e, t) : c);
                    }
                  return i;
                },
              _performComponentUpdate: function(e, t, n, r, o, i) {
                  var s, a, c, u = this._instance,
                      l = Boolean(u.componentDidUpdate);
                  l && (s = u.props, a = u.state, c = u.context), u.componentWillUpdate && u.componentWillUpdate(t, n, r), this._currentElement = e, this._context = i, u.props = t, u.state = n, u.context = r, this._updateRenderedComponent(o, i), l && o.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, s, a, c), u);
                },
              _updateRenderedComponent: function(e, t) {
                  var n = this._renderedComponent,
                      r = n._currentElement,
                      o = this._renderValidatedComponent(),
                      i = 0;
                  if (g(r, o)) d.receiveComponent(n, o, e, this._processChildContext(t));
                  else {
                      var s = d.getHostNode(n);
                      d.unmountComponent(n, !1);
                      var a = h.getType(o);
                      this._renderedNodeType = a;
                      var c = this._instantiateReactComponent(o, a !== h.EMPTY);
                      this._renderedComponent = c;
                      var u = d.mountComponent(c, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), i);
                      this._replaceNodeWithMarkup(s, u, n);
                    }
                },
              _replaceNodeWithMarkup: function(e, t, n) {
                  u.replaceNodeWithMarkup(e, t, n);
                },
              _renderValidatedComponentWithoutOwnerOrContext: function() {
                  var e = this._instance;
                  return e.render();
                },
              _renderValidatedComponent: function() {
                  var e;
                  if (this._compositeType !== y.StatelessFunctional) {
                      l.current = this;
                      try {
                          e = this._renderValidatedComponentWithoutOwnerOrContext();
                        } finally {
                          l.current = null;
                        }
                    } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                  return null === e || !1 === e || c.isValidElement(e) || s('109', this.getName() || 'ReactCompositeComponent'), e;
                },
              attachRef: function(e, t) {
                  var n = this.getPublicInstance();
                  null == n && s('110');
                  var r = t.getPublicInstance();
                  (n.refs === v ? n.refs = {} : n.refs)[e] = r;
                },
              detachRef: function(e) {
                  delete this.getPublicInstance().refs[e];
                },
              getName: function() {
                  var e = this._currentElement.type,
                      t = this._instance && this._instance.constructor;
                  return e.displayName || t && t.displayName || e.name || t && t.name || null;
                },
              getPublicInstance: function() {
                  var e = this._instance;
                  return this._compositeType === y.StatelessFunctional ? null : e;
                },
              _instantiateReactComponent: null,
            };
      e.exports = _;
    }, function(e, t, n) {
      'use strict';
      var r = n(6),
          o = n(361),
          i = n(134),
          s = n(27),
          a = n(15),
          c = n(374),
          u = n(390),
          l = n(139),
          p = n(397);
      n(3);
      o.inject();
      var f = {
          findDOMNode: u,
          render: i.render,
          unmountComponentAtNode: i.unmountComponentAtNode,
          version: c,
          unstable_batchedUpdates: a.batchedUpdates,
          unstable_renderSubtreeIntoContainer: p,
        };
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && 'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
          ComponentTree: {
              getClosestInstanceFromNode: r.getClosestInstanceFromNode,
              getNodeFromInstance: function(e) {
                  return e._renderedComponent && (e = l(e)), e ? r.getNodeFromInstance(e) : null;
                },
            },
          Mount: i,
          Reconciler: s,
        });
      e.exports = f;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (e) {
              var t = e._currentElement._owner || null;
              if (t) {
                  var n = t.getName();
                  if (n) return ' This DOM node was rendered by `' + n + '`.';
                }
            }
          return '';
        }

      function o(e, t) {
          t && (Y[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML) && m('137', e._tag, e._currentElement._owner ? ' Check the render method of ' + e._currentElement._owner.getName() + '.' : ''), null != t.dangerouslySetInnerHTML && (null != t.children && m('60'), 'object' == typeof t.dangerouslySetInnerHTML && V in t.dangerouslySetInnerHTML || m('61')), null != t.style && 'object' != typeof t.style && m('62', r(e)));
        }

      function i(e, t, n, r) {
          if (!(r instanceof D)) {
              var o = e._hostContainerInfo,
                  i = o._node && o._node.nodeType === W,
                  a = i ? o._node : o._ownerDocument;
              q(t, a), r.getReactMountReady().enqueue(s, {
                  inst: e,
                  registrationName: t,
                  listener: n,
                });
            }
        }

      function s() {
          var e = this;
          E.putListener(e.inst, e.registrationName, e.listener);
        }

      function a() {
          var e = this;
          A.postMountWrapper(e);
        }

      function c() {
          var e = this;
          M.postMountWrapper(e);
        }

      function u() {
          var e = this;
          P.postMountWrapper(e);
        }

      function l() {
          j.track(this);
        }

      function p() {
          var e = this;
          e._rootNodeID || m('63');
          var t = U(e);
          switch (t || m('64'), e._tag) {
            case 'iframe':
            case 'object':
              e._wrapperState.listeners = [k.trapBubbledEvent('topLoad', 'load', t)];
              break;
            case 'video':
            case 'audio':
              e._wrapperState.listeners = [];
              for (var n in G) G.hasOwnProperty(n) && e._wrapperState.listeners.push(k.trapBubbledEvent(n, G[n], t));
              break;
            case 'source':
              e._wrapperState.listeners = [k.trapBubbledEvent('topError', 'error', t)];
              break;
            case 'img':
              e._wrapperState.listeners = [k.trapBubbledEvent('topError', 'error', t), k.trapBubbledEvent('topLoad', 'load', t)];
              break;
            case 'form':
              e._wrapperState.listeners = [k.trapBubbledEvent('topReset', 'reset', t), k.trapBubbledEvent('topSubmit', 'submit', t)];
              break;
            case 'input':
            case 'select':
            case 'textarea':
              e._wrapperState.listeners = [k.trapBubbledEvent('topInvalid', 'invalid', t)];
            }
        }

      function f() {
          I.postUpdateWrapper(this);
        }

      function h(e) {
          X.call(Q, e) || (Z.test(e) || m('65', e), Q[e] = !0);
        }

      function d(e, t) {
          return e.indexOf('-') >= 0 || null != t.is;
        }

      function v(e) {
          var t = e.type;
          h(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0;
        }
      var m = n(4),
          g = n(5),
          y = n(336),
          b = n(338),
          _ = n(25),
          w = n(70),
          C = n(26),
          S = n(127),
          E = n(34),
          x = n(71),
          k = n(44),
          O = n(128),
          T = n(6),
          A = n(354),
          P = n(355),
          I = n(129),
          M = n(358),
          R = (n(14), n(367)),
          D = n(372),
          N = (n(11), n(47)),
          j = (n(1), n(82), n(65), n(141)),
          L = (n(84), n(3), O),
          F = E.deleteListener,
          U = T.getNodeFromInstance,
          q = k.listenTo,
          z = x.registrationNameModules,
          B = {
              string: !0,
              number: !0,
            },
          V = '__html',
          H = {
              children: null,
              dangerouslySetInnerHTML: null,
              suppressContentEditableWarning: null,
            },
          W = 11,
          G = {
              topAbort: 'abort',
              topCanPlay: 'canplay',
              topCanPlayThrough: 'canplaythrough',
              topDurationChange: 'durationchange',
              topEmptied: 'emptied',
              topEncrypted: 'encrypted',
              topEnded: 'ended',
              topError: 'error',
              topLoadedData: 'loadeddata',
              topLoadedMetadata: 'loadedmetadata',
              topLoadStart: 'loadstart',
              topPause: 'pause',
              topPlay: 'play',
              topPlaying: 'playing',
              topProgress: 'progress',
              topRateChange: 'ratechange',
              topSeeked: 'seeked',
              topSeeking: 'seeking',
              topStalled: 'stalled',
              topSuspend: 'suspend',
              topTimeUpdate: 'timeupdate',
              topVolumeChange: 'volumechange',
              topWaiting: 'waiting',
            },
          $ = {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
            },
          K = {
              listing: !0,
              pre: !0,
              textarea: !0,
            },
          Y = g({
              menuitem: !0,
            }, $),
          Z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          Q = {},
          X = {}.hasOwnProperty,
          J = 1;
      v.displayName = 'ReactDOMComponent', v.Mixin = {
          mountComponent: function(e, t, n, r) {
              this._rootNodeID = J++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
              var i = this._currentElement.props;
              switch (this._tag) {
                case 'audio':
                case 'form':
                case 'iframe':
                case 'img':
                case 'link':
                case 'object':
                case 'source':
                case 'video':
                  this._wrapperState = {
                          listeners: null,
                        }, e.getReactMountReady().enqueue(p, this);
                  break;
                case 'input':
                  A.mountWrapper(this, i, t), i = A.getHostProps(this, i), e.getReactMountReady().enqueue(l, this), e.getReactMountReady().enqueue(p, this);
                  break;
                case 'option':
                  P.mountWrapper(this, i, t), i = P.getHostProps(this, i);
                  break;
                case 'select':
                  I.mountWrapper(this, i, t), i = I.getHostProps(this, i), e.getReactMountReady().enqueue(p, this);
                  break;
                case 'textarea':
                  M.mountWrapper(this, i, t), i = M.getHostProps(this, i), e.getReactMountReady().enqueue(l, this), e.getReactMountReady().enqueue(p, this);
                }
              o(this, i);
              var s, f;
              null != t ? (s = t._namespaceURI, f = t._tag) : n._tag && (s = n._namespaceURI, f = n._tag), (null == s || s === w.svg && 'foreignobject' === f) && (s = w.html), s === w.html && ('svg' === this._tag ? s = w.svg : 'math' === this._tag && (s = w.mathml)), this._namespaceURI = s;
              var h;
              if (e.useCreateElement) {
                  var d, v = n._ownerDocument;
                  if (s === w.html)
                      if ('script' === this._tag) {
                          var m = v.createElement('div'),
                              g = this._currentElement.type;
                          m.innerHTML = '<' + g + '></' + g + '>', d = m.removeChild(m.firstChild);
                        } else d = i.is ? v.createElement(this._currentElement.type, i.is) : v.createElement(this._currentElement.type);
                  else d = v.createElementNS(s, this._currentElement.type);
                  T.precacheNode(this, d), this._flags |= L.hasCachedChildNodes, this._hostParent || S.setAttributeForRoot(d), this._updateDOMProperties(null, i, e);
                  var b = _(d);
                  this._createInitialChildren(e, i, r, b), h = b;
                } else {
                  var C = this._createOpenTagMarkupAndPutListeners(e, i),
                      E = this._createContentMarkup(e, i, r);
                  h = !E && $[this._tag] ? C + '/>' : C + '>' + E + '</' + this._currentElement.type + '>';
                }
              switch (this._tag) {
                case 'input':
                  e.getReactMountReady().enqueue(a, this), i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                  break;
                case 'textarea':
                  e.getReactMountReady().enqueue(c, this), i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                  break;
                case 'select':
                case 'button':
                  i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                  break;
                case 'option':
                  e.getReactMountReady().enqueue(u, this);
                }
              return h;
            },
          _createOpenTagMarkupAndPutListeners: function(e, t) {
              var n = '<' + this._currentElement.type;
              for (var r in t)
                  if (t.hasOwnProperty(r)) {
                      var o = t[r];
                      if (null != o)
                          if (z.hasOwnProperty(r)) o && i(this, r, o, e);
                          else {
                              'style' === r && (o && (o = this._previousStyleCopy = g({}, t.style)), o = b.createMarkupForStyles(o, this));
                              var s = null;
                              null != this._tag && d(this._tag, t) ? H.hasOwnProperty(r) || (s = S.createMarkupForCustomAttribute(r, o)) : s = S.createMarkupForProperty(r, o), s && (n += ' ' + s);
                            }
                    }
              return e.renderToStaticMarkup ? n : (this._hostParent || (n += ' ' + S.createMarkupForRoot()), n += ' ' + S.createMarkupForID(this._domID));
            },
          _createContentMarkup: function(e, t, n) {
              var r = '',
                  o = t.dangerouslySetInnerHTML;
              if (null != o) null != o.__html && (r = o.__html);
              else {
                  var i = B[typeof t.children] ? t.children : null,
                      s = null != i ? null : t.children;
                  if (null != i) r = N(i);
                  else if (null != s) {
                      var a = this.mountChildren(s, e, n);
                      r = a.join('');
                    }
                }
              return K[this._tag] && '\n' === r.charAt(0) ? '\n' + r : r;
            },
          _createInitialChildren: function(e, t, n, r) {
              var o = t.dangerouslySetInnerHTML;
              if (null != o) null != o.__html && _.queueHTML(r, o.__html);
              else {
                  var i = B[typeof t.children] ? t.children : null,
                      s = null != i ? null : t.children;
                  if (null != i) '' !== i && _.queueText(r, i);
                  else if (null != s)
                      for (var a = this.mountChildren(s, e, n), c = 0; c < a.length; c++) _.queueChild(r, a[c]);
                }
            },
          receiveComponent: function(e, t, n) {
              var r = this._currentElement;
              this._currentElement = e, this.updateComponent(t, r, e, n);
            },
          updateComponent: function(e, t, n, r) {
              var i = t.props,
                  s = this._currentElement.props;
              switch (this._tag) {
                case 'input':
                  i = A.getHostProps(this, i), s = A.getHostProps(this, s);
                  break;
                case 'option':
                  i = P.getHostProps(this, i), s = P.getHostProps(this, s);
                  break;
                case 'select':
                  i = I.getHostProps(this, i), s = I.getHostProps(this, s);
                  break;
                case 'textarea':
                  i = M.getHostProps(this, i), s = M.getHostProps(this, s);
                }
              switch (o(this, s), this._updateDOMProperties(i, s, e), this._updateDOMChildren(i, s, e, r), this._tag) {
                case 'input':
                  A.updateWrapper(this);
                  break;
                case 'textarea':
                  M.updateWrapper(this);
                  break;
                case 'select':
                  e.getReactMountReady().enqueue(f, this);
                }
            },
          _updateDOMProperties: function(e, t, n) {
              var r, o, s;
              for (r in e)
                  if (!t.hasOwnProperty(r) && e.hasOwnProperty(r) && null != e[r])
                      if ('style' === r) {
                          var a = this._previousStyleCopy;
                          for (o in a) a.hasOwnProperty(o) && (s = s || {}, s[o] = '');
                          this._previousStyleCopy = null;
                        } else z.hasOwnProperty(r) ? e[r] && F(this, r) : d(this._tag, e) ? H.hasOwnProperty(r) || S.deleteValueForAttribute(U(this), r) : (C.properties[r] || C.isCustomAttribute(r)) && S.deleteValueForProperty(U(this), r);
              for (r in t) {
                  var c = t[r],
                      u = 'style' === r ? this._previousStyleCopy : null != e ? e[r] : void 0;
                  if (t.hasOwnProperty(r) && c !== u && (null != c || null != u))
                      if ('style' === r)
                          if (c ? c = this._previousStyleCopy = g({}, c) : this._previousStyleCopy = null, u) {
                              for (o in u) !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (s = s || {}, s[o] = '');
                              for (o in c) c.hasOwnProperty(o) && u[o] !== c[o] && (s = s || {}, s[o] = c[o]);
                            } else s = c;
                      else if (z.hasOwnProperty(r)) c ? i(this, r, c, n) : u && F(this, r);
                      else if (d(this._tag, t)) H.hasOwnProperty(r) || S.setValueForAttribute(U(this), r, c);
                      else if (C.properties[r] || C.isCustomAttribute(r)) {
                      var l = U(this);
                      null != c ? S.setValueForProperty(l, r, c) : S.deleteValueForProperty(l, r);
                    }
                }
              s && b.setValueForStyles(U(this), s, this);
            },
          _updateDOMChildren: function(e, t, n, r) {
              var o = B[typeof e.children] ? e.children : null,
                  i = B[typeof t.children] ? t.children : null,
                  s = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                  a = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                  c = null != o ? null : e.children,
                  u = null != i ? null : t.children,
                  l = null != o || null != s,
                  p = null != i || null != a;
              null != c && null == u ? this.updateChildren(null, n, r) : l && !p && this.updateTextContent(''), null != i ? o !== i && this.updateTextContent('' + i) : null != a ? s !== a && this.updateMarkup('' + a) : null != u && this.updateChildren(u, n, r);
            },
          getHostNode: function() {
              return U(this);
            },
          unmountComponent: function(e) {
              switch (this._tag) {
                case 'audio':
                case 'form':
                case 'iframe':
                case 'img':
                case 'link':
                case 'object':
                case 'source':
                case 'video':
                  var t = this._wrapperState.listeners;
                  if (t)
                          for (var n = 0; n < t.length; n++) t[n].remove();
                  break;
                case 'input':
                case 'textarea':
                  j.stopTracking(this);
                  break;
                case 'html':
                case 'head':
                case 'body':
                  m('66', this._tag);
                }
              this.unmountChildren(e), T.uncacheNode(this), E.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null;
            },
          getPublicInstance: function() {
              return U(this);
            },
        }, g(v.prototype, v.Mixin, R.Mixin), e.exports = v;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = {
              _topLevelWrapper: e,
              _idCounter: 1,
              _ownerDocument: t ? t.nodeType === o ? t : t.ownerDocument : null,
              _node: t,
              _tag: t ? t.nodeName.toLowerCase() : null,
              _namespaceURI: t ? t.namespaceURI : null,
            };
          return n;
        }
      var o = (n(84), 9);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(5),
          o = n(25),
          i = n(6),
          s = function(e) {
              this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0;
            };
      r(s.prototype, {
          mountComponent: function(e, t, n, r) {
              var s = n._idCounter++;
              this._domID = s, this._hostParent = t, this._hostContainerInfo = n;
              var a = ' react-empty: ' + this._domID + ' ';
              if (e.useCreateElement) {
                  var c = n._ownerDocument,
                      u = c.createComment(a);
                  return i.precacheNode(this, u), o(u);
                }
              return e.renderToStaticMarkup ? '' : '\x3c!--' + a + '--\x3e';
            },
          receiveComponent: function() {},
          getHostNode: function() {
              return i.getNodeFromInstance(this);
            },
          unmountComponent: function() {
              i.uncacheNode(this);
            },
        }), e.exports = s;
    }, function(e, t, n) {
      'use strict';
      var r = {
          useCreateElement: !0,
          useFiber: !1,
        };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(69),
          o = n(6),
          i = {
              dangerouslyProcessChildrenUpdates: function(e, t) {
                  var n = o.getNodeFromInstance(e);
                  r.processUpdates(n, t);
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r() {
          this._rootNodeID && f.updateWrapper(this);
        }

      function o(e) {
          return 'checkbox' === e.type || 'radio' === e.type ? null != e.checked : null != e.value;
        }

      function i(e) {
          var t = this._currentElement.props,
              n = u.executeOnChange(t, e);
          p.asap(r, this);
          var o = t.name;
          if ('radio' === t.type && null != o) {
              for (var i = l.getNodeFromInstance(this), a = i; a.parentNode;) a = a.parentNode;
              for (var c = a.querySelectorAll('input[name=' + JSON.stringify('' + o) + '][type="radio"]'), f = 0; f < c.length; f++) {
                  var h = c[f];
                  if (h !== i && h.form === i.form) {
                      var d = l.getInstanceFromNode(h);
                      d || s('90'), p.asap(r, d);
                    }
                }
            }
          return n;
        }
      var s = n(4),
          a = n(5),
          c = n(127),
          u = n(74),
          l = n(6),
          p = n(15),
          f = (n(1), n(3), {
              getHostProps: function(e, t) {
                  var n = u.getValue(t),
                      r = u.getChecked(t);
                  return a({
                      type: void 0,
                      step: void 0,
                      min: void 0,
                      max: void 0,
                    }, t, {
                      defaultChecked: void 0,
                      defaultValue: void 0,
                      value: null != n ? n : e._wrapperState.initialValue,
                      checked: null != r ? r : e._wrapperState.initialChecked,
                      onChange: e._wrapperState.onChange,
                    });
                },
              mountWrapper: function(e, t) {
                  var n = t.defaultValue;
                  e._wrapperState = {
                      initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                      initialValue: null != t.value ? t.value : n,
                      listeners: null,
                      onChange: i.bind(e),
                      controlled: o(t),
                    };
                },
              updateWrapper: function(e) {
                  var t = e._currentElement.props,
                      n = t.checked;
                  null != n && c.setValueForProperty(l.getNodeFromInstance(e), 'checked', n || !1);
                  var r = l.getNodeFromInstance(e),
                      o = u.getValue(t);
                  if (null != o)
                      if (0 === o && '' === r.value) r.value = '0';
                      else if ('number' === t.type) {
                          var i = parseFloat(r.value, 10) || 0;
                          (o != i || o == i && r.value != o) && (r.value = '' + o);
                        } else r.value !== '' + o && (r.value = '' + o);
                  else null == t.value && null != t.defaultValue && r.defaultValue !== '' + t.defaultValue && (r.defaultValue = '' + t.defaultValue), null == t.checked && null != t.defaultChecked && (r.defaultChecked = !!t.defaultChecked);
                },
              postMountWrapper: function(e) {
                  var t = e._currentElement.props,
                      n = l.getNodeFromInstance(e);
                  switch (t.type) {
                    case 'submit':
                    case 'reset':
                      break;
                    case 'color':
                    case 'date':
                    case 'datetime':
                    case 'datetime-local':
                    case 'month':
                    case 'time':
                    case 'week':
                      n.value = '', n.value = n.defaultValue;
                      break;
                    default:
                      n.value = n.value;
                    }
                  var r = n.name;
                  '' !== r && (n.name = ''), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, '' !== r && (n.name = r);
                },
            });
      e.exports = f;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = '';
          return i.Children.forEach(e, function(e) {
              null != e && ('string' == typeof e || 'number' == typeof e ? t += e : c || (c = !0));
            }), t;
        }
      var o = n(5),
          i = n(28),
          s = n(6),
          a = n(129),
          c = (n(3), !1),
          u = {
              mountWrapper: function(e, t, n) {
                  var o = null;
                  if (null != n) {
                      var i = n;
                      'optgroup' === i._tag && (i = i._hostParent), null != i && 'select' === i._tag && (o = a.getSelectValueContext(i));
                    }
                  var s = null;
                  if (null != o) {
                      var c;
                      if (c = null != t.value ? t.value + '' : r(t.children), s = !1, Array.isArray(o)) {
                          for (var u = 0; u < o.length; u++)
                              if ('' + o[u] === c) {
                                  s = !0;
                                  break;
                                }
                        } else s = '' + o === c;
                    }
                  e._wrapperState = {
                      selected: s,
                    };
                },
              postMountWrapper: function(e) {
                  var t = e._currentElement.props;
                  if (null != t.value) {
                      s.getNodeFromInstance(e).setAttribute('value', t.value);
                    }
                },
              getHostProps: function(e, t) {
                  var n = o({
                      selected: void 0,
                      children: void 0,
                    }, t);
                  null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
                  var i = r(t.children);
                  return i && (n.children = i), n;
                },
            };
      e.exports = u;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return e === n && t === r;
        }

      function o(e) {
          var t = document.selection,
              n = t.createRange(),
              r = n.text.length,
              o = n.duplicate();
          o.moveToElementText(e), o.setEndPoint('EndToStart', n);
          var i = o.text.length;
          return {
              start: i,
              end: i + r,
            };
        }

      function i(e) {
          var t = window.getSelection && window.getSelection();
          if (!t || 0 === t.rangeCount) return null;
          var n = t.anchorNode,
              o = t.anchorOffset,
              i = t.focusNode,
              s = t.focusOffset,
              a = t.getRangeAt(0);
          try {
              a.startContainer.nodeType, a.endContainer.nodeType;
            } catch (e) {
              return null;
            }
          var c = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
              u = c ? 0 : a.toString().length,
              l = a.cloneRange();
          l.selectNodeContents(e), l.setEnd(a.startContainer, a.startOffset);
          var p = r(l.startContainer, l.startOffset, l.endContainer, l.endOffset),
              f = p ? 0 : l.toString().length,
              h = f + u,
              d = document.createRange();
          d.setStart(n, o), d.setEnd(i, s);
          var v = d.collapsed;
          return {
              start: v ? h : f,
              end: v ? f : h,
            };
        }

      function s(e, t) {
          var n, r, o = document.selection.createRange().duplicate();
          void 0 === t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart('character', n), o.setEndPoint('EndToStart', o), o.moveEnd('character', r - n), o.select();
        }

      function a(e, t) {
          if (window.getSelection) {
              var n = window.getSelection(),
                  r = e[l()].length,
                  o = Math.min(t.start, r),
                  i = void 0 === t.end ? o : Math.min(t.end, r);
              if (!n.extend && o > i) {
                  var s = i;
                  i = o, o = s;
                }
              var a = u(e, o),
                  c = u(e, i);
              if (a && c) {
                  var p = document.createRange();
                  p.setStart(a.node, a.offset), n.removeAllRanges(), o > i ? (n.addRange(p), n.extend(c.node, c.offset)) : (p.setEnd(c.node, c.offset), n.addRange(p));
                }
            }
        }
      var c = n(9),
          u = n(394),
          l = n(140),
          p = c.canUseDOM && 'selection' in document && !('getSelection' in window),
          f = {
              getOffsets: p ? o : i,
              setOffsets: p ? s : a,
            };
      e.exports = f;
    }, function(e, t, n) {
      'use strict';
      var r = n(4),
          o = n(5),
          i = n(69),
          s = n(25),
          a = n(6),
          c = n(47),
          u = (n(1), n(84), function(e) {
              this._currentElement = e, this._stringText = '' + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null;
            });
      o(u.prototype, {
          mountComponent: function(e, t, n, r) {
              var o = n._idCounter++,
                  i = ' react-text: ' + o + ' ';
              if (this._domID = o, this._hostParent = t, e.useCreateElement) {
                  var u = n._ownerDocument,
                      l = u.createComment(i),
                      p = u.createComment(' /react-text '),
                      f = s(u.createDocumentFragment());
                  return s.queueChild(f, s(l)), this._stringText && s.queueChild(f, s(u.createTextNode(this._stringText))), s.queueChild(f, s(p)), a.precacheNode(this, l), this._closingComment = p, f;
                }
              var h = c(this._stringText);
              return e.renderToStaticMarkup ? h : '\x3c!--' + i + '--\x3e' + h + '\x3c!-- /react-text --\x3e';
            },
          receiveComponent: function(e, t) {
              if (e !== this._currentElement) {
                  this._currentElement = e;
                  var n = '' + e;
                  if (n !== this._stringText) {
                      this._stringText = n;
                      var r = this.getHostNode();
                      i.replaceDelimitedText(r[0], r[1], n);
                    }
                }
            },
          getHostNode: function() {
              var e = this._commentNodes;
              if (e) return e;
              if (!this._closingComment)
                  for (var t = a.getNodeFromInstance(this), n = t.nextSibling;;) {
                      if (null == n && r('67', this._domID), 8 === n.nodeType && ' /react-text ' === n.nodeValue) {
                          this._closingComment = n;
                          break;
                        }
                      n = n.nextSibling;
                    }
              return e = [this._hostNode, this._closingComment], this._commentNodes = e, e;
            },
          unmountComponent: function() {
              this._closingComment = null, this._commentNodes = null, a.uncacheNode(this);
            },
        }), e.exports = u;
    }, function(e, t, n) {
      'use strict';

      function r() {
          this._rootNodeID && l.updateWrapper(this);
        }

      function o(e) {
          var t = this._currentElement.props,
              n = a.executeOnChange(t, e);
          return u.asap(r, this), n;
        }
      var i = n(4),
          s = n(5),
          a = n(74),
          c = n(6),
          u = n(15),
          l = (n(1), n(3), {
              getHostProps: function(e, t) {
                  return null != t.dangerouslySetInnerHTML && i('91'), s({}, t, {
                      value: void 0,
                      defaultValue: void 0,
                      children: '' + e._wrapperState.initialValue,
                      onChange: e._wrapperState.onChange,
                    });
                },
              mountWrapper: function(e, t) {
                  var n = a.getValue(t),
                      r = n;
                  if (null == n) {
                      var s = t.defaultValue,
                          c = t.children;
                      null != c && (null != s && i('92'), Array.isArray(c) && (c.length <= 1 || i('93'), c = c[0]), s = '' + c), null == s && (s = ''), r = s;
                    }
                  e._wrapperState = {
                      initialValue: '' + r,
                      listeners: null,
                      onChange: o.bind(e),
                    };
                },
              updateWrapper: function(e) {
                  var t = e._currentElement.props,
                      n = c.getNodeFromInstance(e),
                      r = a.getValue(t);
                  if (null != r) {
                      var o = '' + r;
                      o !== n.value && (n.value = o), null == t.defaultValue && (n.defaultValue = o);
                    }
                  null != t.defaultValue && (n.defaultValue = t.defaultValue);
                },
              postMountWrapper: function(e) {
                  var t = c.getNodeFromInstance(e),
                      n = t.textContent;
                  n === e._wrapperState.initialValue && (t.value = n);
                },
            });
      e.exports = l;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          '_hostNode' in e || c('33'), '_hostNode' in t || c('33');
          for (var n = 0, r = e; r; r = r._hostParent) n++;
          for (var o = 0, i = t; i; i = i._hostParent) o++;
          for (; n - o > 0;) e = e._hostParent, n--;
          for (; o - n > 0;) t = t._hostParent, o--;
          for (var s = n; s--;) {
              if (e === t) return e;
              e = e._hostParent, t = t._hostParent;
            }
          return null;
        }

      function o(e, t) {
          '_hostNode' in e || c('35'), '_hostNode' in t || c('35');
          for (; t;) {
              if (t === e) return !0;
              t = t._hostParent;
            }
          return !1;
        }

      function i(e) {
          return '_hostNode' in e || c('36'), e._hostParent;
        }

      function s(e, t, n) {
          for (var r = []; e;) r.push(e), e = e._hostParent;
          var o;
          for (o = r.length; o-- > 0;) t(r[o], 'captured', n);
          for (o = 0; o < r.length; o++) t(r[o], 'bubbled', n);
        }

      function a(e, t, n, o, i) {
          for (var s = e && t ? r(e, t) : null, a = []; e && e !== s;) a.push(e), e = e._hostParent;
          for (var c = []; t && t !== s;) c.push(t), t = t._hostParent;
          var u;
          for (u = 0; u < a.length; u++) n(a[u], 'bubbled', o);
          for (u = c.length; u-- > 0;) n(c[u], 'captured', i);
        }
      var c = n(4);
      n(1);
      e.exports = {
          isAncestor: o,
          getLowestCommonAncestor: r,
          getParentInstance: i,
          traverseTwoPhase: s,
          traverseEnterLeave: a,
        };
    }, function(e, t, n) {
      'use strict';

      function r() {
          this.reinitializeTransaction();
        }
      var o = n(5),
          i = n(15),
          s = n(46),
          a = n(11),
          c = {
              initialize: a,
              close: function() {
                  f.isBatchingUpdates = !1;
                },
            },
          u = {
              initialize: a,
              close: i.flushBatchedUpdates.bind(i),
            },
          l = [u, c];
      o(r.prototype, s, {
          getTransactionWrappers: function() {
              return l;
            },
        });
      var p = new r,
          f = {
              isBatchingUpdates: !1,
              batchedUpdates: function(e, t, n, r, o, i) {
                  var s = f.isBatchingUpdates;
                  return f.isBatchingUpdates = !0, s ? e(t, n, r, o, i) : p.perform(e, null, t, n, r, o, i);
                },
            };
      e.exports = f;
    }, function(e, t, n) {
      'use strict';

      function r() {
          S || (S = !0, y.EventEmitter.injectReactEventListener(g), y.EventPluginHub.injectEventPluginOrder(a), y.EventPluginUtils.injectComponentTree(f), y.EventPluginUtils.injectTreeTraversal(d), y.EventPluginHub.injectEventPluginsByName({
              SimpleEventPlugin: C,
              EnterLeaveEventPlugin: c,
              ChangeEventPlugin: s,
              SelectEventPlugin: w,
              BeforeInputEventPlugin: i,
            }), y.HostComponent.injectGenericComponentClass(p), y.HostComponent.injectTextComponentClass(v), y.DOMProperty.injectDOMPropertyConfig(o), y.DOMProperty.injectDOMPropertyConfig(u), y.DOMProperty.injectDOMPropertyConfig(_), y.EmptyComponent.injectEmptyComponentFactory(function(e) {
              return new h(e);
            }), y.Updates.injectReconcileTransaction(b), y.Updates.injectBatchingStrategy(m), y.Component.injectEnvironment(l));
        }
      var o = n(335),
          i = n(337),
          s = n(339),
          a = n(341),
          c = n(342),
          u = n(344),
          l = n(346),
          p = n(349),
          f = n(6),
          h = n(351),
          d = n(359),
          v = n(357),
          m = n(360),
          g = n(364),
          y = n(365),
          b = n(370),
          _ = n(375),
          w = n(376),
          C = n(377),
          S = !1;
      e.exports = {
          inject: r,
        };
    }, function(e, t, n) {
      'use strict';
      var r = 'function' == typeof Symbol && Symbol.for && Symbol.for('react.element') || 60103;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          o.enqueueEvents(e), o.processEventQueue(!1);
        }
      var o = n(34),
          i = {
              handleTopLevel: function(e, t, n, i) {
                  r(o.extractEvents(e, t, n, i));
                },
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (; e._hostParent;) e = e._hostParent;
          var t = p.getNodeFromInstance(e),
              n = t.parentNode;
          return p.getClosestInstanceFromNode(n);
        }

      function o(e, t) {
          this.topLevelType = e, this.nativeEvent = t, this.ancestors = [];
        }

      function i(e) {
          var t = h(e.nativeEvent),
              n = p.getClosestInstanceFromNode(t),
              o = n;
          do {
              e.ancestors.push(o), o = o && r(o);
            } while (o);
          for (var i = 0; i < e.ancestors.length; i++) n = e.ancestors[i], v._handleTopLevel(e.topLevelType, n, e.nativeEvent, h(e.nativeEvent));
        }

      function s(e) {
          e(d(window));
        }
      var a = n(5),
          c = n(112),
          u = n(9),
          l = n(22),
          p = n(6),
          f = n(15),
          h = n(81),
          d = n(263);
      a(o.prototype, {
          destructor: function() {
              this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0;
            },
        }), l.addPoolingTo(o, l.twoArgumentPooler);
      var v = {
          _enabled: !0,
          _handleTopLevel: null,
          WINDOW_HANDLE: u.canUseDOM ? window : null,
          setHandleTopLevel: function(e) {
              v._handleTopLevel = e;
            },
          setEnabled: function(e) {
              v._enabled = !!e;
            },
          isEnabled: function() {
              return v._enabled;
            },
          trapBubbledEvent: function(e, t, n) {
              return n ? c.listen(n, t, v.dispatchEvent.bind(null, e)) : null;
            },
          trapCapturedEvent: function(e, t, n) {
              return n ? c.capture(n, t, v.dispatchEvent.bind(null, e)) : null;
            },
          monitorScrollValue: function(e) {
              var t = s.bind(null, e);
              c.listen(window, 'scroll', t);
            },
          dispatchEvent: function(e, t) {
              if (v._enabled) {
                  var n = o.getPooled(e, t);
                  try {
                      f.batchedUpdates(i, n);
                    } finally {
                      o.release(n);
                    }
                }
            },
        };
      e.exports = v;
    }, function(e, t, n) {
      'use strict';
      var r = n(26),
          o = n(34),
          i = n(72),
          s = n(75),
          a = n(130),
          c = n(44),
          u = n(132),
          l = n(15),
          p = {
              Component: s.injection,
              DOMProperty: r.injection,
              EmptyComponent: a.injection,
              EventPluginHub: o.injection,
              EventPluginUtils: i.injection,
              EventEmitter: c.injection,
              HostComponent: u.injection,
              Updates: l.injection,
            };
      e.exports = p;
    }, function(e, t, n) {
      'use strict';
      var r = n(388),
          o = /\/?>/,
          i = /^<\!\-\-/,
          s = {
              CHECKSUM_ATTR_NAME: 'data-react-checksum',
              addChecksumToMarkup: function(e) {
                  var t = r(e);
                  return i.test(e) ? e : e.replace(o, ' ' + s.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
                },
              canReuseMarkup: function(e, t) {
                  var n = t.getAttribute(s.CHECKSUM_ATTR_NAME);
                  return n = n && parseInt(n, 10), r(e) === n;
                },
            };
      e.exports = s;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return {
              type: 'INSERT_MARKUP',
              content: e,
              fromIndex: null,
              fromNode: null,
              toIndex: n,
              afterNode: t,
            };
        }

      function o(e, t, n) {
          return {
              type: 'MOVE_EXISTING',
              content: null,
              fromIndex: e._mountIndex,
              fromNode: f.getHostNode(e),
              toIndex: n,
              afterNode: t,
            };
        }

      function i(e, t) {
          return {
              type: 'REMOVE_NODE',
              content: null,
              fromIndex: e._mountIndex,
              fromNode: t,
              toIndex: null,
              afterNode: null,
            };
        }

      function s(e) {
          return {
              type: 'SET_MARKUP',
              content: e,
              fromIndex: null,
              fromNode: null,
              toIndex: null,
              afterNode: null,
            };
        }

      function a(e) {
          return {
              type: 'TEXT_CONTENT',
              content: e,
              fromIndex: null,
              fromNode: null,
              toIndex: null,
              afterNode: null,
            };
        }

      function c(e, t) {
          return t && (e = e || [], e.push(t)), e;
        }

      function u(e, t) {
          p.processChildrenUpdates(e, t);
        }
      var l = n(4),
          p = n(75),
          f = (n(36), n(14), n(18), n(27)),
          h = n(345),
          d = (n(11), n(391)),
          v = (n(1), {
              Mixin: {
                  _reconcilerInstantiateChildren: function(e, t, n) {
                      return h.instantiateChildren(e, t, n);
                    },
                  _reconcilerUpdateChildren: function(e, t, n, r, o, i) {
                      var s, a = 0;
                      return s = d(t, a), h.updateChildren(e, s, n, r, o, this, this._hostContainerInfo, i, a), s;
                    },
                  mountChildren: function(e, t, n) {
                      var r = this._reconcilerInstantiateChildren(e, t, n);
                      this._renderedChildren = r;
                      var o = [],
                          i = 0;
                      for (var s in r)
                          if (r.hasOwnProperty(s)) {
                              var a = r[s],
                                  c = 0,
                                  u = f.mountComponent(a, t, this, this._hostContainerInfo, n, c);
                              a._mountIndex = i++, o.push(u);
                            }
                      return o;
                    },
                  updateTextContent: function(e) {
                      var t = this._renderedChildren;
                      h.unmountChildren(t, !1);
                      for (var n in t) t.hasOwnProperty(n) && l('118');
                      u(this, [a(e)]);
                    },
                  updateMarkup: function(e) {
                      var t = this._renderedChildren;
                      h.unmountChildren(t, !1);
                      for (var n in t) t.hasOwnProperty(n) && l('118');
                      u(this, [s(e)]);
                    },
                  updateChildren: function(e, t, n) {
                      this._updateChildren(e, t, n);
                    },
                  _updateChildren: function(e, t, n) {
                      var r = this._renderedChildren,
                          o = {},
                          i = [],
                          s = this._reconcilerUpdateChildren(r, e, i, o, t, n);
                      if (s || r) {
                          var a, l = null,
                              p = 0,
                              h = 0,
                              d = 0,
                              v = null;
                          for (a in s)
                              if (s.hasOwnProperty(a)) {
                                  var m = r && r[a],
                                      g = s[a];
                                  m === g ? (l = c(l, this.moveChild(m, v, p, h)), h = Math.max(m._mountIndex, h), m._mountIndex = p) : (m && (h = Math.max(m._mountIndex, h)), l = c(l, this._mountChildAtIndex(g, i[d], v, p, t, n)), d++), p++, v = f.getHostNode(g);
                                }
                          for (a in o) o.hasOwnProperty(a) && (l = c(l, this._unmountChild(r[a], o[a])));
                          l && u(this, l), this._renderedChildren = s;
                        }
                    },
                  unmountChildren: function(e) {
                      var t = this._renderedChildren;
                      h.unmountChildren(t, e), this._renderedChildren = null;
                    },
                  moveChild: function(e, t, n, r) {
                      if (e._mountIndex < r) return o(e, t, n);
                    },
                  createChild: function(e, t, n) {
                      return r(n, t, e._mountIndex);
                    },
                  removeChild: function(e, t) {
                      return i(e, t);
                    },
                  _mountChildAtIndex: function(e, t, n, r, o, i) {
                      return e._mountIndex = r, this.createChild(e, n, t);
                    },
                  _unmountChild: function(e, t) {
                      var n = this.removeChild(e, t);
                      return e._mountIndex = null, n;
                    },
                },
            });
      e.exports = v;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return !(!e || 'function' != typeof e.attachRef || 'function' != typeof e.detachRef);
        }
      var o = n(4),
          i = (n(1), {
              addComponentAsRefTo: function(e, t, n) {
                  r(n) || o('119'), n.attachRef(t, e);
                },
              removeComponentAsRefFrom: function(e, t, n) {
                  r(n) || o('120');
                  var i = n.getPublicInstance();
                  i && i.refs[t] === e.getPublicInstance() && n.detachRef(t);
                },
            });
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = e;
        }
      var o = n(5),
          i = n(126),
          s = n(22),
          a = n(44),
          c = n(133),
          u = (n(14), n(46)),
          l = n(77),
          p = {
              initialize: c.getSelectionInformation,
              close: c.restoreSelection,
            },
          f = {
              initialize: function() {
                  var e = a.isEnabled();
                  return a.setEnabled(!1), e;
                },
              close: function(e) {
                  a.setEnabled(e);
                },
            },
          h = {
              initialize: function() {
                  this.reactMountReady.reset();
                },
              close: function() {
                  this.reactMountReady.notifyAll();
                },
            },
          d = [p, f, h],
          v = {
              getTransactionWrappers: function() {
                  return d;
                },
              getReactMountReady: function() {
                  return this.reactMountReady;
                },
              getUpdateQueue: function() {
                  return l;
                },
              checkpoint: function() {
                  return this.reactMountReady.checkpoint();
                },
              rollback: function(e) {
                  this.reactMountReady.rollback(e);
                },
              destructor: function() {
                  i.release(this.reactMountReady), this.reactMountReady = null;
                },
            };
      o(r.prototype, u, v), s.addPoolingTo(r), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          'function' == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n);
        }

      function o(e, t, n) {
          'function' == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n);
        }
      var i = n(368),
          s = {};
      s.attachRefs = function(e, t) {
          if (null !== t && 'object' == typeof t) {
              var n = t.ref;
              null != n && r(n, e, t._owner);
            }
        }, s.shouldUpdateRefs = function(e, t) {
          var n = null,
              r = null;
          null !== e && 'object' == typeof e && (n = e.ref, r = e._owner);
          var o = null,
              i = null;
          return null !== t && 'object' == typeof t && (o = t.ref, i = t._owner), n !== o || 'string' == typeof o && i !== r;
        }, s.detachRefs = function(e, t) {
          if (null !== t && 'object' == typeof t) {
              var n = t.ref;
              null != n && o(n, e, t._owner);
            }
        }, e.exports = s;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new a(this);
        }
      var o = n(5),
          i = n(22),
          s = n(46),
          a = (n(14), n(373)),
          c = [],
          u = {
              enqueue: function() {},
            },
          l = {
              getTransactionWrappers: function() {
                  return c;
                },
              getReactMountReady: function() {
                  return u;
                },
              getUpdateQueue: function() {
                  return this.updateQueue;
                },
              destructor: function() {},
              checkpoint: function() {},
              rollback: function() {},
            };
      o(r.prototype, s, l), i.addPoolingTo(r), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
      var o = n(77),
          i = (n(3), function() {
              function e(t) {
                  r(this, e), this.transaction = t;
                }
              return e.prototype.isMounted = function(e) {
                  return !1;
                }, e.prototype.enqueueCallback = function(e, t, n) {
                  this.transaction.isInTransaction() && o.enqueueCallback(e, t, n);
                }, e.prototype.enqueueForceUpdate = function(e) {
                  this.transaction.isInTransaction() && o.enqueueForceUpdate(e);
                }, e.prototype.enqueueReplaceState = function(e, t) {
                  this.transaction.isInTransaction() && o.enqueueReplaceState(e, t);
                }, e.prototype.enqueueSetState = function(e, t) {
                  this.transaction.isInTransaction() && o.enqueueSetState(e, t);
                }, e;
            }());
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      e.exports = '15.6.0';
    }, function(e, t, n) {
      'use strict';
      var r = {
            xlink: 'http://www.w3.org/1999/xlink',
            xml: 'http://www.w3.org/XML/1998/namespace',
          },
          o = {
              accentHeight: 'accent-height',
              accumulate: 0,
              additive: 0,
              alignmentBaseline: 'alignment-baseline',
              allowReorder: 'allowReorder',
              alphabetic: 0,
              amplitude: 0,
              arabicForm: 'arabic-form',
              ascent: 0,
              attributeName: 'attributeName',
              attributeType: 'attributeType',
              autoReverse: 'autoReverse',
              azimuth: 0,
              baseFrequency: 'baseFrequency',
              baseProfile: 'baseProfile',
              baselineShift: 'baseline-shift',
              bbox: 0,
              begin: 0,
              bias: 0,
              by: 0,
              calcMode: 'calcMode',
              capHeight: 'cap-height',
              clip: 0,
              clipPath: 'clip-path',
              clipRule: 'clip-rule',
              clipPathUnits: 'clipPathUnits',
              colorInterpolation: 'color-interpolation',
              colorInterpolationFilters: 'color-interpolation-filters',
              colorProfile: 'color-profile',
              colorRendering: 'color-rendering',
              contentScriptType: 'contentScriptType',
              contentStyleType: 'contentStyleType',
              cursor: 0,
              cx: 0,
              cy: 0,
              d: 0,
              decelerate: 0,
              descent: 0,
              diffuseConstant: 'diffuseConstant',
              direction: 0,
              display: 0,
              divisor: 0,
              dominantBaseline: 'dominant-baseline',
              dur: 0,
              dx: 0,
              dy: 0,
              edgeMode: 'edgeMode',
              elevation: 0,
              enableBackground: 'enable-background',
              end: 0,
              exponent: 0,
              externalResourcesRequired: 'externalResourcesRequired',
              fill: 0,
              fillOpacity: 'fill-opacity',
              fillRule: 'fill-rule',
              filter: 0,
              filterRes: 'filterRes',
              filterUnits: 'filterUnits',
              floodColor: 'flood-color',
              floodOpacity: 'flood-opacity',
              focusable: 0,
              fontFamily: 'font-family',
              fontSize: 'font-size',
              fontSizeAdjust: 'font-size-adjust',
              fontStretch: 'font-stretch',
              fontStyle: 'font-style',
              fontVariant: 'font-variant',
              fontWeight: 'font-weight',
              format: 0,
              from: 0,
              fx: 0,
              fy: 0,
              g1: 0,
              g2: 0,
              glyphName: 'glyph-name',
              glyphOrientationHorizontal: 'glyph-orientation-horizontal',
              glyphOrientationVertical: 'glyph-orientation-vertical',
              glyphRef: 'glyphRef',
              gradientTransform: 'gradientTransform',
              gradientUnits: 'gradientUnits',
              hanging: 0,
              horizAdvX: 'horiz-adv-x',
              horizOriginX: 'horiz-origin-x',
              ideographic: 0,
              imageRendering: 'image-rendering',
              in: 0,
              in2: 0,
              intercept: 0,
              k: 0,
              k1: 0,
              k2: 0,
              k3: 0,
              k4: 0,
              kernelMatrix: 'kernelMatrix',
              kernelUnitLength: 'kernelUnitLength',
              kerning: 0,
              keyPoints: 'keyPoints',
              keySplines: 'keySplines',
              keyTimes: 'keyTimes',
              lengthAdjust: 'lengthAdjust',
              letterSpacing: 'letter-spacing',
              lightingColor: 'lighting-color',
              limitingConeAngle: 'limitingConeAngle',
              local: 0,
              markerEnd: 'marker-end',
              markerMid: 'marker-mid',
              markerStart: 'marker-start',
              markerHeight: 'markerHeight',
              markerUnits: 'markerUnits',
              markerWidth: 'markerWidth',
              mask: 0,
              maskContentUnits: 'maskContentUnits',
              maskUnits: 'maskUnits',
              mathematical: 0,
              mode: 0,
              numOctaves: 'numOctaves',
              offset: 0,
              opacity: 0,
              operator: 0,
              order: 0,
              orient: 0,
              orientation: 0,
              origin: 0,
              overflow: 0,
              overlinePosition: 'overline-position',
              overlineThickness: 'overline-thickness',
              paintOrder: 'paint-order',
              panose1: 'panose-1',
              pathLength: 'pathLength',
              patternContentUnits: 'patternContentUnits',
              patternTransform: 'patternTransform',
              patternUnits: 'patternUnits',
              pointerEvents: 'pointer-events',
              points: 0,
              pointsAtX: 'pointsAtX',
              pointsAtY: 'pointsAtY',
              pointsAtZ: 'pointsAtZ',
              preserveAlpha: 'preserveAlpha',
              preserveAspectRatio: 'preserveAspectRatio',
              primitiveUnits: 'primitiveUnits',
              r: 0,
              radius: 0,
              refX: 'refX',
              refY: 'refY',
              renderingIntent: 'rendering-intent',
              repeatCount: 'repeatCount',
              repeatDur: 'repeatDur',
              requiredExtensions: 'requiredExtensions',
              requiredFeatures: 'requiredFeatures',
              restart: 0,
              result: 0,
              rotate: 0,
              rx: 0,
              ry: 0,
              scale: 0,
              seed: 0,
              shapeRendering: 'shape-rendering',
              slope: 0,
              spacing: 0,
              specularConstant: 'specularConstant',
              specularExponent: 'specularExponent',
              speed: 0,
              spreadMethod: 'spreadMethod',
              startOffset: 'startOffset',
              stdDeviation: 'stdDeviation',
              stemh: 0,
              stemv: 0,
              stitchTiles: 'stitchTiles',
              stopColor: 'stop-color',
              stopOpacity: 'stop-opacity',
              strikethroughPosition: 'strikethrough-position',
              strikethroughThickness: 'strikethrough-thickness',
              string: 0,
              stroke: 0,
              strokeDasharray: 'stroke-dasharray',
              strokeDashoffset: 'stroke-dashoffset',
              strokeLinecap: 'stroke-linecap',
              strokeLinejoin: 'stroke-linejoin',
              strokeMiterlimit: 'stroke-miterlimit',
              strokeOpacity: 'stroke-opacity',
              strokeWidth: 'stroke-width',
              surfaceScale: 'surfaceScale',
              systemLanguage: 'systemLanguage',
              tableValues: 'tableValues',
              targetX: 'targetX',
              targetY: 'targetY',
              textAnchor: 'text-anchor',
              textDecoration: 'text-decoration',
              textRendering: 'text-rendering',
              textLength: 'textLength',
              to: 0,
              transform: 0,
              u1: 0,
              u2: 0,
              underlinePosition: 'underline-position',
              underlineThickness: 'underline-thickness',
              unicode: 0,
              unicodeBidi: 'unicode-bidi',
              unicodeRange: 'unicode-range',
              unitsPerEm: 'units-per-em',
              vAlphabetic: 'v-alphabetic',
              vHanging: 'v-hanging',
              vIdeographic: 'v-ideographic',
              vMathematical: 'v-mathematical',
              values: 0,
              vectorEffect: 'vector-effect',
              version: 0,
              vertAdvY: 'vert-adv-y',
              vertOriginX: 'vert-origin-x',
              vertOriginY: 'vert-origin-y',
              viewBox: 'viewBox',
              viewTarget: 'viewTarget',
              visibility: 0,
              widths: 0,
              wordSpacing: 'word-spacing',
              writingMode: 'writing-mode',
              x: 0,
              xHeight: 'x-height',
              x1: 0,
              x2: 0,
              xChannelSelector: 'xChannelSelector',
              xlinkActuate: 'xlink:actuate',
              xlinkArcrole: 'xlink:arcrole',
              xlinkHref: 'xlink:href',
              xlinkRole: 'xlink:role',
              xlinkShow: 'xlink:show',
              xlinkTitle: 'xlink:title',
              xlinkType: 'xlink:type',
              xmlBase: 'xml:base',
              xmlns: 0,
              xmlnsXlink: 'xmlns:xlink',
              xmlLang: 'xml:lang',
              xmlSpace: 'xml:space',
              y: 0,
              y1: 0,
              y2: 0,
              yChannelSelector: 'yChannelSelector',
              z: 0,
              zoomAndPan: 'zoomAndPan',
            },
          i = {
              Properties: {},
              DOMAttributeNamespaces: {
                  xlinkActuate: r.xlink,
                  xlinkArcrole: r.xlink,
                  xlinkHref: r.xlink,
                  xlinkRole: r.xlink,
                  xlinkShow: r.xlink,
                  xlinkTitle: r.xlink,
                  xlinkType: r.xlink,
                  xmlBase: r.xml,
                  xmlLang: r.xml,
                  xmlSpace: r.xml,
                },
              DOMAttributeNames: {},
            };
      Object.keys(o).forEach(function(e) {
          i.Properties[e] = 0, o[e] && (i.DOMAttributeNames[e] = o[e]);
        }), e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if ('selectionStart' in e && c.hasSelectionCapabilities(e)) return {
              start: e.selectionStart,
              end: e.selectionEnd,
            };
          if (window.getSelection) {
              var t = window.getSelection();
              return {
                  anchorNode: t.anchorNode,
                  anchorOffset: t.anchorOffset,
                  focusNode: t.focusNode,
                  focusOffset: t.focusOffset,
                };
            }
          if (document.selection) {
              var n = document.selection.createRange();
              return {
                  parentElement: n.parentElement(),
                  text: n.text,
                  top: n.boundingTop,
                  left: n.boundingLeft,
                };
            }
        }

      function o(e, t) {
          if (y || null == v || v !== l()) return null;
          var n = r(v);
          if (!g || !f(g, n)) {
              g = n;
              var o = u.getPooled(d.select, m, e, t);
              return o.type = 'select', o.target = v, i.accumulateTwoPhaseDispatches(o), o;
            }
          return null;
        }
      var i = n(35),
          s = n(9),
          a = n(6),
          c = n(133),
          u = n(17),
          l = n(114),
          p = n(143),
          f = n(65),
          h = s.canUseDOM && 'documentMode' in document && document.documentMode <= 11,
          d = {
              select: {
                  phasedRegistrationNames: {
                      bubbled: 'onSelect',
                      captured: 'onSelectCapture',
                    },
                  dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange'],
                },
            },
          v = null,
          m = null,
          g = null,
          y = !1,
          b = !1,
          _ = {
              eventTypes: d,
              extractEvents: function(e, t, n, r) {
                  if (!b) return null;
                  var i = t ? a.getNodeFromInstance(t) : window;
                  switch (e) {
                    case 'topFocus':
                      (p(i) || 'true' === i.contentEditable) && (v = i, m = t, g = null);
                      break;
                    case 'topBlur':
                      v = null, m = null, g = null;
                      break;
                    case 'topMouseDown':
                      y = !0;
                      break;
                    case 'topContextMenu':
                    case 'topMouseUp':
                      return y = !1, o(n, r);
                    case 'topSelectionChange':
                      if (h) break;
                    case 'topKeyDown':
                    case 'topKeyUp':
                      return o(n, r);
                    }
                  return null;
                },
              didPutListener: function(e, t, n) {
                  'onSelect' === t && (b = !0);
                },
            };
      e.exports = _;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return '.' + e._rootNodeID;
        }

      function o(e) {
          return 'button' === e || 'input' === e || 'select' === e || 'textarea' === e;
        }
      var i = n(4),
          s = n(112),
          a = n(35),
          c = n(6),
          u = n(378),
          l = n(379),
          p = n(17),
          f = n(382),
          h = n(384),
          d = n(45),
          v = n(381),
          m = n(385),
          g = n(386),
          y = n(37),
          b = n(387),
          _ = n(11),
          w = n(79),
          C = (n(1), {}),
          S = {};
      ['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'canPlay', 'canPlayThrough', 'click', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function(e) {
          var t = e[0].toUpperCase() + e.slice(1),
              n = 'on' + t,
              r = 'top' + t,
              o = {
                  phasedRegistrationNames: {
                      bubbled: n,
                      captured: n + 'Capture',
                    },
                  dependencies: [r],
                };
          C[e] = o, S[r] = o;
        });
      var E = {},
          x = {
              eventTypes: C,
              extractEvents: function(e, t, n, r) {
                  var o = S[e];
                  if (!o) return null;
                  var s;
                  switch (e) {
                    case 'topAbort':
                    case 'topCanPlay':
                    case 'topCanPlayThrough':
                    case 'topDurationChange':
                    case 'topEmptied':
                    case 'topEncrypted':
                    case 'topEnded':
                    case 'topError':
                    case 'topInput':
                    case 'topInvalid':
                    case 'topLoad':
                    case 'topLoadedData':
                    case 'topLoadedMetadata':
                    case 'topLoadStart':
                    case 'topPause':
                    case 'topPlay':
                    case 'topPlaying':
                    case 'topProgress':
                    case 'topRateChange':
                    case 'topReset':
                    case 'topSeeked':
                    case 'topSeeking':
                    case 'topStalled':
                    case 'topSubmit':
                    case 'topSuspend':
                    case 'topTimeUpdate':
                    case 'topVolumeChange':
                    case 'topWaiting':
                      s = p;
                      break;
                    case 'topKeyPress':
                      if (0 === w(n)) return null;
                    case 'topKeyDown':
                    case 'topKeyUp':
                      s = h;
                      break;
                    case 'topBlur':
                    case 'topFocus':
                      s = f;
                      break;
                    case 'topClick':
                      if (2 === n.button) return null;
                    case 'topDoubleClick':
                    case 'topMouseDown':
                    case 'topMouseMove':
                    case 'topMouseUp':
                    case 'topMouseOut':
                    case 'topMouseOver':
                    case 'topContextMenu':
                      s = d;
                      break;
                    case 'topDrag':
                    case 'topDragEnd':
                    case 'topDragEnter':
                    case 'topDragExit':
                    case 'topDragLeave':
                    case 'topDragOver':
                    case 'topDragStart':
                    case 'topDrop':
                      s = v;
                      break;
                    case 'topTouchCancel':
                    case 'topTouchEnd':
                    case 'topTouchMove':
                    case 'topTouchStart':
                      s = m;
                      break;
                    case 'topAnimationEnd':
                    case 'topAnimationIteration':
                    case 'topAnimationStart':
                      s = u;
                      break;
                    case 'topTransitionEnd':
                      s = g;
                      break;
                    case 'topScroll':
                      s = y;
                      break;
                    case 'topWheel':
                      s = b;
                      break;
                    case 'topCopy':
                    case 'topCut':
                    case 'topPaste':
                      s = l;
                    }
                  s || i('86', e);
                  var c = s.getPooled(o, t, n, r);
                  return a.accumulateTwoPhaseDispatches(c), c;
                },
              didPutListener: function(e, t, n) {
                  if ('onClick' === t && !o(e._tag)) {
                      var i = r(e),
                          a = c.getNodeFromInstance(e);
                      E[i] || (E[i] = s.listen(a, 'click', _));
                    }
                },
              willDeleteListener: function(e, t) {
                  if ('onClick' === t && !o(e._tag)) {
                      var n = r(e);
                      E[n].remove(), delete E[n];
                    }
                },
            };
      e.exports = x;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = {
              animationName: null,
              elapsedTime: null,
              pseudoElement: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = {
              clipboardData: function(e) {
                  return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
                },
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = {
              data: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(45),
          i = {
              dataTransfer: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(37),
          i = {
              relatedTarget: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = {
              data: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(37),
          i = n(79),
          s = n(392),
          a = n(80),
          c = {
              key: s,
              location: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              repeat: null,
              locale: null,
              getModifierState: a,
              charCode: function(e) {
                  return 'keypress' === e.type ? i(e) : 0;
                },
              keyCode: function(e) {
                  return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
                },
              which: function(e) {
                  return 'keypress' === e.type ? i(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
                },
            };
      o.augmentClass(r, c), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(37),
          i = n(80),
          s = {
              touches: null,
              targetTouches: null,
              changedTouches: null,
              altKey: null,
              metaKey: null,
              ctrlKey: null,
              shiftKey: null,
              getModifierState: i,
            };
      o.augmentClass(r, s), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(17),
          i = {
              propertyName: null,
              elapsedTime: null,
              pseudoElement: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n, r) {
          return o.call(this, e, t, n, r);
        }
      var o = n(45),
          i = {
              deltaX: function(e) {
                  return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
                },
              deltaY: function(e) {
                  return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
                },
              deltaZ: null,
              deltaMode: null,
            };
      o.augmentClass(r, i), e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (var t = 1, n = 0, r = 0, i = e.length, s = -4 & i; r < s;) {
              for (var a = Math.min(r + 4096, s); r < a; r += 4) n += (t += e.charCodeAt(r)) + (t += e.charCodeAt(r + 1)) + (t += e.charCodeAt(r + 2)) + (t += e.charCodeAt(r + 3));
              t %= o, n %= o;
            }
          for (; r < i; r++) n += t += e.charCodeAt(r);
          return t %= o, n %= o, t | n << 16;
        }
      var o = 65521;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          if (null == t || 'boolean' == typeof t || '' === t) return '';
          if (isNaN(t) || 0 === t || i.hasOwnProperty(e) && i[e]) return '' + t;
          if ('string' == typeof t) {
              t = t.trim();
            }
          return t + 'px';
        }
      var o = n(125),
          i = (n(3), o.isUnitlessNumber);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = s.get(e);
          if (t) return t = a(t), t ? i.getNodeFromInstance(t) : null;
          'function' == typeof e.render ? o('44') : o('45', Object.keys(e));
        }
      var o = n(4),
          i = (n(18), n(6)),
          s = n(36),
          a = n(139);
      n(1), n(3);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      (function(t) {
          function r(e, t, n, r) {
              if (e && 'object' == typeof e) {
                  var o = e,
                      i = void 0 === o[n];
                  i && null != t && (o[n] = t);
                }
            }

          function o(e, t) {
              if (null == e) return e;
              var n = {};
              return i(e, r, n), n;
            }
          var i = (n(73), n(145));
          n(3);
          void 0 !== t && n.i({
              NODE_ENV: 'production',
            }), e.exports = o;
        }).call(t, n(121));
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (e.key) {
              var t = i[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
          if ('keypress' === e.type) {
              var n = o(e);
              return 13 === n ? 'Enter' : String.fromCharCode(n);
            }
          return 'keydown' === e.type || 'keyup' === e.type ? s[e.keyCode] || 'Unidentified' : '';
        }
      var o = n(79),
          i = {
              Esc: 'Escape',
              Spacebar: ' ',
              Left: 'ArrowLeft',
              Up: 'ArrowUp',
              Right: 'ArrowRight',
              Down: 'ArrowDown',
              Del: 'Delete',
              Win: 'OS',
              Menu: 'ContextMenu',
              Apps: 'ContextMenu',
              Scroll: 'ScrollLock',
              MozPrintableKey: 'Unidentified',
            },
          s = {
              8: 'Backspace',
              9: 'Tab',
              12: 'Clear',
              13: 'Enter',
              16: 'Shift',
              17: 'Control',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Escape',
              32: ' ',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'ArrowLeft',
              38: 'ArrowUp',
              39: 'ArrowRight',
              40: 'ArrowDown',
              45: 'Insert',
              46: 'Delete',
              112: 'F1',
              113: 'F2',
              114: 'F3',
              115: 'F4',
              116: 'F5',
              117: 'F6',
              118: 'F7',
              119: 'F8',
              120: 'F9',
              121: 'F10',
              122: 'F11',
              123: 'F12',
              144: 'NumLock',
              145: 'ScrollLock',
              224: 'Meta',
            };
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e && (o && e[o] || e[i]);
          if ('function' == typeof t) return t;
        }
      var o = 'function' == typeof Symbol && Symbol.iterator,
          i = '@@iterator';
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          for (; e && e.firstChild;) e = e.firstChild;
          return e;
        }

      function o(e) {
          for (; e;) {
              if (e.nextSibling) return e.nextSibling;
              e = e.parentNode;
            }
        }

      function i(e, t) {
          for (var n = r(e), i = 0, s = 0; n;) {
              if (3 === n.nodeType) {
                  if (s = i + n.textContent.length, i <= t && s >= t) return {
                      node: n,
                      offset: t - i,
                    };
                  i = s;
                }
              n = r(o(n));
            }
        }
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n['Webkit' + e] = 'webkit' + t, n['Moz' + e] = 'moz' + t, n['ms' + e] = 'MS' + t, n['O' + e] = 'o' + t.toLowerCase(), n;
        }

      function o(e) {
          if (a[e]) return a[e];
          if (!s[e]) return e;
          var t = s[e];
          for (var n in t)
              if (t.hasOwnProperty(n) && n in c) return a[e] = t[n];
          return '';
        }
      var i = n(9),
          s = {
              animationend: r('Animation', 'AnimationEnd'),
              animationiteration: r('Animation', 'AnimationIteration'),
              animationstart: r('Animation', 'AnimationStart'),
              transitionend: r('Transition', 'TransitionEnd'),
            },
          a = {},
          c = {};
      i.canUseDOM && (c = document.createElement('div').style, 'AnimationEvent' in window || (delete s.animationend.animation, delete s.animationiteration.animation, delete s.animationstart.animation), 'TransitionEvent' in window || delete s.transitionend.transition), e.exports = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return '"' + o(e) + '"';
        }
      var o = n(47);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = n(134);
      e.exports = r.renderSubtreeIntoContainer;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }

      function o(e, t) {
          if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }

      function i(e, t) {
          if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }

      function s() {
          var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'store',
              n = arguments[1],
              s = n || t + 'Subscription',
              c = function(e) {
                  function n(i, s) {
                      r(this, n);
                      var a = o(this, e.call(this, i, s));
                      return a[t] = i.store, a;
                    }
                  return i(n, e), n.prototype.getChildContext = function() {
                      var e;
                      return e = {}, e[t] = this[t], e[s] = null, e;
                    }, n.prototype.render = function() {
                      return a.Children.only(this.props.children);
                    }, n;
                }(a.Component);
          return c.propTypes = {
              store: l.a.isRequired,
              children: u.a.element.isRequired,
            }, c.childContextTypes = (e = {}, e[t] = l.a.isRequired, e[s] = l.b, e), c.displayName = 'Provider', c;
        }
      t.b = s;
      var a = n(12),
          c = (n.n(a), n(123)),
          u = n.n(c),
          l = n(148);
      n(85);
      t.a = s();
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n;
        }

      function o(e, t, n) {
          for (var r = t.length - 1; r >= 0; r--) {
              var o = t[r](e);
              if (o) return o;
            }
          return function(t, r) {
              throw new Error('Invalid value of type ' + typeof e + ' for ' + n + ' argument when connecting component ' + r.wrappedComponentName + '.');
            };
        }

      function i(e, t) {
          return e === t;
        }
      var s = n(146),
          a = n(406),
          c = n(400),
          u = n(401),
          l = n(402),
          p = n(403),
          f = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
              return e;
            };
      t.a = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.connectHOC,
              n = void 0 === t ? s.a : t,
              h = e.mapStateToPropsFactories,
              d = void 0 === h ? u.a : h,
              v = e.mapDispatchToPropsFactories,
              m = void 0 === v ? c.a : v,
              g = e.mergePropsFactories,
              y = void 0 === g ? l.a : g,
              b = e.selectorFactory,
              _ = void 0 === b ? p.a : b;
          return function(e, t, s) {
              var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  u = c.pure,
                  l = void 0 === u || u,
                  p = c.areStatesEqual,
                  h = void 0 === p ? i : p,
                  v = c.areOwnPropsEqual,
                  g = void 0 === v ? a.a : v,
                  b = c.areStatePropsEqual,
                  w = void 0 === b ? a.a : b,
                  C = c.areMergedPropsEqual,
                  S = void 0 === C ? a.a : C,
                  E = r(c, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
                  x = o(e, d, 'mapStateToProps'),
                  k = o(t, m, 'mapDispatchToProps'),
                  O = o(s, y, 'mergeProps');
              return n(_, f({
                  methodName: 'connect',
                  getDisplayName: function(e) {
                      return 'Connect(' + e + ')';
                    },
                  shouldHandleStateChanges: Boolean(e),
                  initMapStateToProps: x,
                  initMapDispatchToProps: k,
                  initMergeProps: O,
                  pure: l,
                  areStatesEqual: h,
                  areOwnPropsEqual: g,
                  areStatePropsEqual: w,
                  areMergedPropsEqual: S,
                }, E));
            };
        }();
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 'function' == typeof e ? n.i(a.a)(e, 'mapDispatchToProps') : void 0;
        }

      function o(e) {
          return e ? void 0 : n.i(a.b)(function(e) {
              return {
                  dispatch: e,
                };
            });
        }

      function i(e) {
          return e && 'object' == typeof e ? n.i(a.b)(function(t) {
              return n.i(s.bindActionCreators)(e, t);
            }) : void 0;
        }
      var s = n(86),
          a = n(147);
      t.a = [r, o, i];
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 'function' == typeof e ? n.i(i.a)(e, 'mapStateToProps') : void 0;
        }

      function o(e) {
          return e ? void 0 : n.i(i.b)(function() {
              return {};
            });
        }
      var i = n(147);
      t.a = [r, o];
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return a({}, n, e, t);
        }

      function o(e) {
          return function(t, n) {
              var r = (n.displayName, n.pure),
                  o = n.areMergedPropsEqual,
                  i = !1,
                  s = void 0;
              return function(t, n, a) {
                  var c = e(t, n, a);
                  return i ? r && o(c, s) || (s = c) : (i = !0, s = c), s;
                };
            };
        }

      function i(e) {
          return 'function' == typeof e ? o(e) : void 0;
        }

      function s(e) {
          return e ? void 0 : function() {
              return r;
            };
        }
      var a = (n(149), Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
          return e;
        });
      t.a = [i, s];
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n;
        }

      function o(e, t, n, r) {
          return function(o, i) {
              return n(e(o, i), t(r, i), i);
            };
        }

      function i(e, t, n, r, o) {
          function i(o, i) {
              return d = o, v = i, m = e(d, v), g = t(r, v), y = n(m, g, v), h = !0, y;
            }

          function s() {
              return m = e(d, v), t.dependsOnOwnProps && (g = t(r, v)), y = n(m, g, v);
            }

          function a() {
              return e.dependsOnOwnProps && (m = e(d, v)), t.dependsOnOwnProps && (g = t(r, v)), y = n(m, g, v);
            }

          function c() {
              var t = e(d, v),
                  r = !f(t, m);
              return m = t, r && (y = n(m, g, v)), y;
            }

          function u(e, t) {
              var n = !p(t, v),
                  r = !l(e, d);
              return d = e, v = t, n && r ? s() : n ? a() : r ? c() : y;
            }
          var l = o.areStatesEqual,
              p = o.areOwnPropsEqual,
              f = o.areStatePropsEqual,
              h = !1,
              d = void 0,
              v = void 0,
              m = void 0,
              g = void 0,
              y = void 0;
          return function(e, t) {
              return h ? u(e, t) : i(e, t);
            };
        }

      function s(e, t) {
          var n = t.initMapStateToProps,
              s = t.initMapDispatchToProps,
              a = t.initMergeProps,
              c = r(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
              u = n(e, c),
              l = s(e, c),
              p = a(e, c);
          return (c.pure ? i : o)(u, l, p, e, c);
        }
      t.a = s;
      n(404);
    }, function(e, t, n) {
      'use strict';
      n(85);
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }

      function o() {
          var e = [],
              t = [];
          return {
              clear: function() {
                  t = i, e = i;
                },
              notify: function() {
                  for (var n = e = t, r = 0; r < n.length; r++) n[r]();
                },
              subscribe: function(n) {
                  var r = !0;
                  return t === e && (t = e.slice()), t.push(n),
                        function() {
                          r && e !== i && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1));
                        };
                },
            };
        }
      n.d(t, 'a', function() {
          return a;
        });
      var i = null,
          s = {
              notify: function() {},
            },
          a = function() {
              function e(t, n, o) {
                  r(this, e), this.store = t, this.parentSub = n, this.onStateChange = o, this.unsubscribe = null, this.listeners = s;
                }
              return e.prototype.addNestedSub = function(e) {
                  return this.trySubscribe(), this.listeners.subscribe(e);
                }, e.prototype.notifyNestedSubs = function() {
                  this.listeners.notify();
                }, e.prototype.isSubscribed = function() {
                  return Boolean(this.unsubscribe);
                }, e.prototype.trySubscribe = function() {
                  this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = o());
                }, e.prototype.tryUnsubscribe = function() {
                  this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = s);
                }, e;
            }();
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t;
        }

      function o(e, t) {
          if (r(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
          var n = Object.keys(e),
              o = Object.keys(t);
          if (n.length !== o.length) return !1;
          for (var s = 0; s < n.length; s++)
              if (!i.call(t, n[s]) || !r(e[n[s]], t[n[s]])) return !1;
          return !0;
        }
      t.a = o;
      var i = Object.prototype.hasOwnProperty;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = {
              '=': '=0',
              ':': '=2',
            };
          return '$' + ('' + e).replace(/[=:]/g, function(e) {
              return t[e];
            });
        }

      function o(e) {
          var t = /(=0|=2)/g,
              n = {
                  '=0': '=',
                  '=2': ':',
                };
          return ('' + ('.' === e[0] && '$' === e[1] ? e.substring(2) : e.substring(1))).replace(t, function(e) {
              return n[e];
            });
        }
      var i = {
          escape: r,
          unescape: o,
        };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      var r = n(38),
          o = (n(1), function(e) {
              var t = this;
              if (t.instancePool.length) {
                  var n = t.instancePool.pop();
                  return t.call(n, e), n;
                }
              return new t(e);
            }),
          i = function(e, t) {
              var n = this;
              if (n.instancePool.length) {
                  var r = n.instancePool.pop();
                  return n.call(r, e, t), r;
                }
              return new n(e, t);
            },
          s = function(e, t, n) {
              var r = this;
              if (r.instancePool.length) {
                  var o = r.instancePool.pop();
                  return r.call(o, e, t, n), o;
                }
              return new r(e, t, n);
            },
          a = function(e, t, n, r) {
              var o = this;
              if (o.instancePool.length) {
                  var i = o.instancePool.pop();
                  return o.call(i, e, t, n, r), i;
                }
              return new o(e, t, n, r);
            },
          c = function(e) {
              var t = this;
              e instanceof t || r('25'), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
            },
          u = o,
          l = function(e, t) {
              var n = e;
              return n.instancePool = [], n.getPooled = t || u, n.poolSize || (n.poolSize = 10), n.release = c, n;
            },
          p = {
              addPoolingTo: l,
              oneArgumentPooler: o,
              twoArgumentPooler: i,
              threeArgumentPooler: s,
              fourArgumentPooler: a,
            };
      e.exports = p;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return ('' + e).replace(_, '$&/');
        }

      function o(e, t) {
          this.func = e, this.context = t, this.count = 0;
        }

      function i(e, t, n) {
          var r = e.func,
              o = e.context;
          r.call(o, t, e.count++);
        }

      function s(e, t, n) {
          if (null == e) return e;
          var r = o.getPooled(t, n);
          g(e, i, r), o.release(r);
        }

      function a(e, t, n, r) {
          this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0;
        }

      function c(e, t, n) {
          var o = e.result,
              i = e.keyPrefix,
              s = e.func,
              a = e.context,
              c = s.call(a, t, e.count++);
          Array.isArray(c) ? u(c, o, n, m.thatReturnsArgument) : null != c && (v.isValidElement(c) && (c = v.cloneAndReplaceKey(c, i + (!c.key || t && t.key === c.key ? '' : r(c.key) + '/') + n)), o.push(c));
        }

      function u(e, t, n, o, i) {
          var s = '';
          null != n && (s = r(n) + '/');
          var u = a.getPooled(t, s, o, i);
          g(e, c, u), a.release(u);
        }

      function l(e, t, n) {
          if (null == e) return e;
          var r = [];
          return u(e, r, null, t, n), r;
        }

      function p(e, t, n) {
          return null;
        }

      function f(e, t) {
          return g(e, p, null);
        }

      function h(e) {
          var t = [];
          return u(e, t, null, m.thatReturnsArgument), t;
        }
      var d = n(408),
          v = n(29),
          m = n(11),
          g = n(418),
          y = d.twoArgumentPooler,
          b = d.fourArgumentPooler,
          _ = /\/+/g;
      o.prototype.destructor = function() {
          this.func = null, this.context = null, this.count = 0;
        }, d.addPoolingTo(o, y), a.prototype.destructor = function() {
          this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
        }, d.addPoolingTo(a, b);
      var w = {
          forEach: s,
          map: l,
          mapIntoWithKeyPrefixInternal: u,
          count: f,
          toArray: h,
        };
      e.exports = w;
    }, function(e, t, n) {
      'use strict';
      var r = n(29),
          o = r.createFactory,
          i = {
              a: o('a'),
              abbr: o('abbr'),
              address: o('address'),
              area: o('area'),
              article: o('article'),
              aside: o('aside'),
              audio: o('audio'),
              b: o('b'),
              base: o('base'),
              bdi: o('bdi'),
              bdo: o('bdo'),
              big: o('big'),
              blockquote: o('blockquote'),
              body: o('body'),
              br: o('br'),
              button: o('button'),
              canvas: o('canvas'),
              caption: o('caption'),
              cite: o('cite'),
              code: o('code'),
              col: o('col'),
              colgroup: o('colgroup'),
              data: o('data'),
              datalist: o('datalist'),
              dd: o('dd'),
              del: o('del'),
              details: o('details'),
              dfn: o('dfn'),
              dialog: o('dialog'),
              div: o('div'),
              dl: o('dl'),
              dt: o('dt'),
              em: o('em'),
              embed: o('embed'),
              fieldset: o('fieldset'),
              figcaption: o('figcaption'),
              figure: o('figure'),
              footer: o('footer'),
              form: o('form'),
              h1: o('h1'),
              h2: o('h2'),
              h3: o('h3'),
              h4: o('h4'),
              h5: o('h5'),
              h6: o('h6'),
              head: o('head'),
              header: o('header'),
              hgroup: o('hgroup'),
              hr: o('hr'),
              html: o('html'),
              i: o('i'),
              iframe: o('iframe'),
              img: o('img'),
              input: o('input'),
              ins: o('ins'),
              kbd: o('kbd'),
              keygen: o('keygen'),
              label: o('label'),
              legend: o('legend'),
              li: o('li'),
              link: o('link'),
              main: o('main'),
              map: o('map'),
              mark: o('mark'),
              menu: o('menu'),
              menuitem: o('menuitem'),
              meta: o('meta'),
              meter: o('meter'),
              nav: o('nav'),
              noscript: o('noscript'),
              object: o('object'),
              ol: o('ol'),
              optgroup: o('optgroup'),
              option: o('option'),
              output: o('output'),
              p: o('p'),
              param: o('param'),
              picture: o('picture'),
              pre: o('pre'),
              progress: o('progress'),
              q: o('q'),
              rp: o('rp'),
              rt: o('rt'),
              ruby: o('ruby'),
              s: o('s'),
              samp: o('samp'),
              script: o('script'),
              section: o('section'),
              select: o('select'),
              small: o('small'),
              source: o('source'),
              span: o('span'),
              strong: o('strong'),
              style: o('style'),
              sub: o('sub'),
              summary: o('summary'),
              sup: o('sup'),
              table: o('table'),
              tbody: o('tbody'),
              td: o('td'),
              textarea: o('textarea'),
              tfoot: o('tfoot'),
              th: o('th'),
              thead: o('thead'),
              time: o('time'),
              title: o('title'),
              tr: o('tr'),
              track: o('track'),
              u: o('u'),
              ul: o('ul'),
              var: o('var'),
              video: o('video'),
              wbr: o('wbr'),
              circle: o('circle'),
              clipPath: o('clipPath'),
              defs: o('defs'),
              ellipse: o('ellipse'),
              g: o('g'),
              image: o('image'),
              line: o('line'),
              linearGradient: o('linearGradient'),
              mask: o('mask'),
              path: o('path'),
              pattern: o('pattern'),
              polygon: o('polygon'),
              polyline: o('polyline'),
              radialGradient: o('radialGradient'),
              rect: o('rect'),
              stop: o('stop'),
              svg: o('svg'),
              text: o('text'),
              tspan: o('tspan'),
            };
      e.exports = i;
    }, function(e, t, n) {
      'use strict';
      var r = n(29),
          o = r.isValidElement,
          i = n(122);
      e.exports = i(o);
    }, function(e, t, n) {
      'use strict';
      e.exports = '15.6.0';
    }, function(e, t, n) {
      'use strict';
      var r = n(150),
          o = r.Component,
          i = n(29),
          s = i.isValidElement,
          a = n(153),
          c = n(256);
      e.exports = c(o, s, a);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e && (o && e[o] || e[i]);
          if ('function' == typeof t) return t;
        }
      var o = 'function' == typeof Symbol && Symbol.iterator,
          i = '@@iterator';
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r() {
          return o++;
        }
      var o = 1;
      e.exports = r;
    }, function(e, t, n) {
      'use strict';
      var r = function() {};
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return i.isValidElement(e) || o('143'), e;
        }
      var o = n(38),
          i = n(29);
      n(1);
      e.exports = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return e && 'object' == typeof e && null != e.key ? u.escape(e.key) : t.toString(36);
        }

      function o(e, t, n, i) {
          var f = typeof e;
          if ('undefined' !== f && 'boolean' !== f || (e = null), null === e || 'string' === f || 'number' === f || 'object' === f && e.$$typeof === a) return n(i, e, '' === t ? l + r(e, 0) : t), 1;
          var h, d, v = 0,
              m = '' === t ? l : t + p;
          if (Array.isArray(e))
              for (var g = 0; g < e.length; g++) h = e[g], d = m + r(h, g), v += o(h, d, n, i);
          else {
              var y = c(e);
              if (y) {
                  var b, _ = y.call(e);
                  if (y !== e.entries)
                      for (var w = 0; !(b = _.next()).done;) h = b.value, d = m + r(h, w++), v += o(h, d, n, i);
                  else
                        for (; !(b = _.next()).done;) {
                          var C = b.value;
                          C && (h = C[1], d = m + u.escape(C[0]) + p + r(h, 0), v += o(h, d, n, i));
                        }
                } else if ('object' === f) {
                  var S = '',
                      E = String(e);
                  s('31', '[object Object]' === E ? 'object with keys {' + Object.keys(e).join(', ') + '}' : E, S);
                }
            }
          return v;
        }

      function i(e, t, n) {
          return null == e ? 0 : o(e, '', t, n);
        }
      var s = n(38),
          a = (n(18), n(152)),
          c = n(414),
          u = (n(1), n(407)),
          l = (n(3), '.'),
          p = ':';
      e.exports = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          return Array.from(e);
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), t.combineEpics = void 0;
      var o = n(172);
      t.combineEpics = function() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function() {
              for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
              return o.merge.apply(void 0, r(t.map(function(e) {
                  var t = e.apply(void 0, n);
                  if (!t) throw new TypeError('combineEpics: one of the provided Epics "' + (e.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
                  return t;
                })));
            };
        };
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
              n = t.adapter,
              r = void 0 === n ? u : n;
          if ('function' != typeof e) throw new TypeError('You must provide a root Epic to createEpicMiddleware');
          var p = new o.Subject,
              f = r.input(new a.ActionsObservable(p)),
              h = new o.Subject,
              d = void 0,
              v = function(t) {
                  return d = t,
                        function(t) {
                          var n;
                          return (n = i.map.call(h, function(e) {
                              var t = e(f, d);
                              if (!t) throw new TypeError('Your root Epic "' + (e.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
                              return t;
                            }), s.switchMap).call(n, function(e) {
                                  return r.output(e);
                                }).subscribe(d.dispatch), h.next(e),
                                function(e) {
                                  var n = t(e);
                                  return p.next(e), n;
                                };
                        };
                };
          return v.replaceEpic = function(e) {
              d.dispatch({
                  type: c.EPIC_END,
                }), h.next(e);
            }, v;
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), t.createEpicMiddleware = r;
      var o = n(30),
          i = n(87),
          s = n(472),
          a = n(155),
          c = n(156),
          u = {
              input: function(e) {
                  return e;
                },
              output: function(e) {
                  return e;
                },
            },
          l = {
              adapter: u,
            };
    }, function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
          value: !0,
        });
      var r = n(420);
      Object.defineProperty(t, 'createEpicMiddleware', {
          enumerable: !0,
          get: function() {
              return r.createEpicMiddleware;
            },
        });
      var o = n(155);
      Object.defineProperty(t, 'ActionsObservable', {
          enumerable: !0,
          get: function() {
              return o.ActionsObservable;
            },
        });
      var i = n(419);
      Object.defineProperty(t, 'combineEpics', {
          enumerable: !0,
          get: function() {
              return i.combineEpics;
            },
        });
      var s = n(156);
      Object.defineProperty(t, 'EPIC_END', {
          enumerable: !0,
          get: function() {
              return s.EPIC_END;
            },
        });
    }, function(e, t, n) {
      'use strict';

      function r() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function(e) {
              return function(n, r, s) {
                  var a = e(n, r, s),
                      c = a.dispatch,
                      u = [],
                      l = {
                          getState: a.getState,
                          dispatch: function(e) {
                              return c(e);
                            },
                        };
                  return u = t.map(function(e) {
                      return e(l);
                    }), c = o.a.apply(void 0, u)(a.dispatch), i({}, a, {
                      dispatch: c,
                    });
                };
            };
        }
      t.a = r;
      var o = n(157),
          i = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
              return e;
            };
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return function() {
              return t(e.apply(void 0, arguments));
            };
        }

      function o(e, t) {
          if ('function' == typeof e) return r(e, t);
          if ('object' != typeof e || null === e) throw new Error('bindActionCreators expected an object or a function, instead received ' + (null === e ? 'null' : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var n = Object.keys(e), o = {}, i = 0; i < n.length; i++) {
              var s = n[i],
                  a = e[s];
              'function' == typeof a && (o[s] = r(a, t));
            }
          return o;
        }
      t.a = o;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n = t && t.type;
          return 'Given action ' + (n && '"' + n.toString() + '"' || 'an action') + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }

      function o(e) {
          Object.keys(e).forEach(function(t) {
              var n = e[t];
              if (void 0 === n(void 0, {
                  type: s.a.INIT,
                })) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              if (void 0 === n(void 0, {
                  type: '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.'),
                })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. Don\'t try to handle ' + s.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.');
            });
        }

      function i(e) {
          for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
              var s = t[i];
              'function' == typeof e[s] && (n[s] = e[s]);
            }
          var a, c = Object.keys(n);
          try {
              o(n);
            } catch (e) {
              a = e;
            }
          return function() {
              var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                  t = arguments[1];
              if (a) throw a;
              for (var o = !1, i = {}, s = 0; s < c.length; s++) {
                  var u = c[s],
                      l = n[u],
                      p = e[u],
                      f = l(p, t);
                  if (void 0 === f) {
                      var h = r(u, t);
                      throw new Error(h);
                    }
                  i[u] = f, o = o || f !== p;
                }
              return o ? i : e;
            };
        }
      t.a = i;
      var s = n(158);
      n(66), n(159);
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(30),
          i = n(23),
          s = function(e) {
              function t() {
                  e.apply(this, arguments), this.value = null, this.hasNext = !1, this.hasCompleted = !1;
                }
              return r(t, e), t.prototype._subscribe = function(t) {
                  return this.hasError ? (t.error(this.thrownError), i.Subscription.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), i.Subscription.EMPTY) : e.prototype._subscribe.call(this, t);
                }, t.prototype.next = function(e) {
                  this.hasCompleted || (this.value = e, this.hasNext = !0);
                }, t.prototype.error = function(t) {
                  this.hasCompleted || e.prototype.error.call(this, t);
                }, t.prototype.complete = function() {
                  this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this);
                }, t;
            }(o.Subject);
      t.AsyncSubject = s;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(30),
          i = n(176),
          s = function(e) {
              function t(t) {
                  e.call(this), this._value = t;
                }
              return r(t, e), Object.defineProperty(t.prototype, 'value', {
                  get: function() {
                      return this.getValue();
                    },
                  enumerable: !0,
                  configurable: !0,
                }), t.prototype._subscribe = function(t) {
                  var n = e.prototype._subscribe.call(this, t);
                  return n && !n.closed && t.next(this._value), n;
                }, t.prototype.getValue = function() {
                  if (this.hasError) throw this.thrownError;
                  if (this.closed) throw new i.ObjectUnsubscribedError;
                  return this._value;
                }, t.prototype.next = function(t) {
                  e.prototype.next.call(this, this._value = t);
                }, t;
            }(o.Subject);
      t.BehaviorSubject = s;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(10),
          i = function(e) {
              function t(t, n, r) {
                  e.call(this), this.parent = t, this.outerValue = n, this.outerIndex = r, this.index = 0;
                }
              return r(t, e), t.prototype._next = function(e) {
                  this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
                }, t.prototype._error = function(e) {
                  this.parent.notifyError(e, this), this.unsubscribe();
                }, t.prototype._complete = function() {
                  this.parent.notifyComplete(this), this.unsubscribe();
                }, t;
            }(o.Subscriber);
      t.InnerSubscriber = i;
    }, function(e, t, n) {
      'use strict';
      var r = function() {
          function e(t, n) {
              void 0 === n && (n = e.now), this.SchedulerAction = t, this.now = n;
            }
          return e.prototype.schedule = function(e, t, n) {
              return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t);
            }, e.now = Date.now ? Date.now : function() {
              return +new Date;
            }, e;
        }();
      t.Scheduler = r;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(23),
          i = function(e) {
              function t(t, n) {
                  e.call(this), this.subject = t, this.subscriber = n, this.closed = !1;
                }
              return r(t, e), t.prototype.unsubscribe = function() {
                  if (!this.closed) {
                      this.closed = !0;
                      var e = this.subject,
                          t = e.observers;
                      if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                          var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1);
                        }
                    }
                }, t;
            }(o.Subscription);
      t.SubjectSubscription = i;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(454);
      r.Observable.bindCallback = o.bindCallback;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(456);
      r.Observable.ajax = o.ajax;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(171);
      r.Observable.from = o.from;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(458);
      r.Observable.fromEvent = o.fromEvent;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(459);
      r.Observable.interval = o.interval;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(172);
      r.Observable.merge = o.merge;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(460);
      r.Observable.throw = o._throw;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(462);
      r.Observable.prototype.combineLatest = o.combineLatest;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(463);
      r.Observable.prototype.count = o.count;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(175);
      r.Observable.prototype.merge = o.merge;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(470);
      r.Observable.prototype.retryWhen = o.retryWhen;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(471);
      r.Observable.prototype.share = o.share;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(473);
      r.Observable.prototype.take = o.take;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(474);
      r.Observable.prototype.takeUntil = o.takeUntil;
    }, function(e, t, n) {
      'use strict';
      var r = n(0),
          o = n(476);
      r.Observable.prototype.throttleTime = o.throttleTime;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = n(170),
          s = n(51),
          a = function(e) {
              function t(t, n) {
                  e.call(this), this.arrayLike = t, this.scheduler = n, n || 1 !== t.length || (this._isScalar = !0, this.value = t[0]);
                }
              return r(t, e), t.create = function(e, n) {
                  var r = e.length;
                  return 0 === r ? new s.EmptyObservable : 1 === r ? new i.ScalarObservable(e[0], n) : new t(e, n);
                }, t.dispatch = function(e) {
                  var t = e.arrayLike,
                      n = e.index,
                      r = e.length,
                      o = e.subscriber;
                  if (!o.closed) {
                      if (n >= r) return void o.complete();
                      o.next(t[n]), e.index = n + 1, this.schedule(e);
                    }
                }, t.prototype._subscribe = function(e) {
                  var n = this,
                      r = n.arrayLike,
                      o = n.scheduler,
                      i = r.length;
                  if (o) return o.schedule(t.dispatch, 0, {
                      arrayLike: r,
                      index: 0,
                      length: i,
                      subscriber: e,
                    });
                  for (var s = 0; s < i && !e.closed; s++) e.next(r[s]);
                  e.complete();
                }, t;
            }(o.Observable);
      t.ArrayLikeObservable = a;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.value,
              n = e.subject;
          n.next(t), n.complete();
        }

      function o(e) {
          var t = e.err;
          e.subject.error(t);
        }
      var i = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          s = n(0),
          a = n(39),
          c = n(31),
          u = n(425),
          l = function(e) {
              function t(t, n, r, o, i) {
                  e.call(this), this.callbackFunc = t, this.selector = n, this.args = r, this.context = o, this.scheduler = i;
                }
              return i(t, e), t.create = function(e, n, r) {
                  return void 0 === n && (n = void 0),
                        function() {
                          for (var o = [], i = 0; i < arguments.length; i++) o[i - 0] = arguments[i];
                          return new t(e, n, o, this, r);
                        };
                }, t.prototype._subscribe = function(e) {
                  var n = this.callbackFunc,
                      r = this.args,
                      o = this.scheduler,
                      i = this.subject;
                  if (o) return o.schedule(t.dispatch, 0, {
                      source: this,
                      subscriber: e,
                      context: this.context,
                    });
                  if (!i) {
                      i = this.subject = new u.AsyncSubject;
                      var s = function e() {
                          for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
                          var r = e.source,
                              o = r.selector,
                              i = r.subject;
                          if (o) {
                              var s = a.tryCatch(o).apply(this, t);
                              s === c.errorObject ? i.error(c.errorObject.e) : (i.next(s), i.complete());
                            } else i.next(t.length <= 1 ? t[0] : t), i.complete();
                        };
                      s.source = this;
                      a.tryCatch(n).apply(this.context, r.concat(s)) === c.errorObject && i.error(c.errorObject.e);
                    }
                  return i.subscribe(e);
                }, t.dispatch = function(e) {
                  var t = this,
                      n = e.source,
                      i = e.subscriber,
                      s = e.context,
                      l = n.callbackFunc,
                      p = n.args,
                      f = n.scheduler,
                      h = n.subject;
                  if (!h) {
                      h = n.subject = new u.AsyncSubject;
                      var d = function e() {
                          for (var n = [], i = 0; i < arguments.length; i++) n[i - 0] = arguments[i];
                          var s = e.source,
                              u = s.selector,
                              l = s.subject;
                          if (u) {
                              var p = a.tryCatch(u).apply(this, n);
                              p === c.errorObject ? t.add(f.schedule(o, 0, {
                                  err: c.errorObject.e,
                                  subject: l,
                                })) : t.add(f.schedule(r, 0, {
                                  value: p,
                                  subject: l,
                                }));
                            } else {
                              var h = n.length <= 1 ? n[0] : n;
                              t.add(f.schedule(r, 0, {
                                  value: h,
                                  subject: l,
                                }));
                            }
                        };
                      d.source = n;
                      a.tryCatch(l).apply(s, p.concat(d)) === c.errorObject && h.error(c.errorObject.e);
                    }
                  t.add(h.subscribe(i));
                }, t;
            }(s.Observable);
      t.BoundCallbackObservable = l;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(30),
          i = n(0),
          s = n(10),
          a = n(23),
          c = function(e) {
              function t(t, n) {
                  e.call(this), this.source = t, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1;
                }
              return r(t, e), t.prototype._subscribe = function(e) {
                  return this.getSubject().subscribe(e);
                }, t.prototype.getSubject = function() {
                  var e = this._subject;
                  return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject;
                }, t.prototype.connect = function() {
                  var e = this._connection;
                  return e || (this._isComplete = !1, e = this._connection = new a.Subscription, e.add(this.source.subscribe(new l(this.getSubject(), this))), e.closed ? (this._connection = null, e = a.Subscription.EMPTY) : this._connection = e), e;
                }, t.prototype.refCount = function() {
                  return this.lift(new p(this));
                }, t;
            }(i.Observable);
      t.ConnectableObservable = c;
      var u = c.prototype;
      t.connectableObservableDescriptor = {
          operator: {
              value: null,
            },
          _refCount: {
              value: 0,
              writable: !0,
            },
          _subject: {
              value: null,
              writable: !0,
            },
          _connection: {
              value: null,
              writable: !0,
            },
          _subscribe: {
              value: u._subscribe,
            },
          _isComplete: {
              value: u._isComplete,
              writable: !0,
            },
          getSubject: {
              value: u.getSubject,
            },
          connect: {
              value: u.connect,
            },
          refCount: {
              value: u.refCount,
            },
        };
      var l = function(e) {
            function t(t, n) {
                  e.call(this, t), this.connectable = n;
                }
            return r(t, e), t.prototype._error = function(t) {
                  this._unsubscribe(), e.prototype._error.call(this, t);
                }, t.prototype._complete = function() {
                  this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this);
                }, t.prototype._unsubscribe = function() {
                  var e = this.connectable;
                  if (e) {
                      this.connectable = null;
                      var t = e._connection;
                      e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe();
                    }
                }, t;
          }(o.SubjectSubscriber),
          p = function() {
              function e(e) {
                  this.connectable = e;
                }
              return e.prototype.call = function(e, t) {
                  var n = this.connectable;
                  n._refCount++;
                  var r = new f(e, n),
                      o = t.subscribe(r);
                  return r.closed || (r.connection = n.connect()), o;
                }, e;
            }(),
          f = function(e) {
              function t(t, n) {
                  e.call(this, t), this.connectable = n;
                }
              return r(t, e), t.prototype._unsubscribe = function() {
                  var e = this.connectable;
                  if (!e) return void(this.connection = null);
                  this.connectable = null;
                  var t = e._refCount;
                  if (t <= 0) return void(this.connection = null);
                  if (e._refCount = t - 1, t > 1) return void(this.connection = null);
                  var n = this.connection,
                      r = e._connection;
                  this.connection = null, !r || n && r !== n || r.unsubscribe();
                }, t;
            }(s.Subscriber);
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(0),
          i = function(e) {
              function t(t, n) {
                  e.call(this), this.error = t, this.scheduler = n;
                }
              return r(t, e), t.create = function(e, n) {
                  return new t(e, n);
                }, t.dispatch = function(e) {
                  var t = e.error;
                  e.subscriber.error(t);
                }, t.prototype._subscribe = function(e) {
                  var n = this.error,
                      r = this.scheduler;
                  if (r) return r.schedule(t.dispatch, 0, {
                      error: n,
                      subscriber: e,
                    });
                  e.error(n);
                }, t;
            }(o.Observable);
      t.ErrorObservable = i;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return !!e && 'function' == typeof e.addListener && 'function' == typeof e.removeListener;
        }

      function o(e) {
          return !!e && 'function' == typeof e.on && 'function' == typeof e.off;
        }

      function i(e) {
          return !!e && '[object NodeList]' === d.call(e);
        }

      function s(e) {
          return !!e && '[object HTMLCollection]' === d.call(e);
        }

      function a(e) {
          return !!e && 'function' == typeof e.addEventListener && 'function' == typeof e.removeEventListener;
        }
      var c = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          u = n(0),
          l = n(39),
          p = n(92),
          f = n(31),
          h = n(23),
          d = Object.prototype.toString,
          v = function(e) {
              function t(t, n, r, o) {
                  e.call(this), this.sourceObj = t, this.eventName = n, this.selector = r, this.options = o;
                }
              return c(t, e), t.create = function(e, n, r, o) {
                  return p.isFunction(r) && (o = r, r = void 0), new t(e, n, o, r);
                }, t.setupSubscription = function(e, n, c, u, l) {
                  var p;
                  if (i(e) || s(e))
                      for (var f = 0, d = e.length; f < d; f++) t.setupSubscription(e[f], n, c, u, l);
                  else if (a(e)) {
                      var v = e;
                      e.addEventListener(n, c, l), p = function() {
                          return v.removeEventListener(n, c);
                        };
                    } else if (o(e)) {
                      var m = e;
                      e.on(n, c), p = function() {
                          return m.off(n, c);
                        };
                    } else {
                      if (!r(e)) throw new TypeError('Invalid event target');
                      var g = e;
                      e.addListener(n, c), p = function() {
                          return g.removeListener(n, c);
                        };
                    }
                  u.add(new h.Subscription(p));
                }, t.prototype._subscribe = function(e) {
                  var n = this.sourceObj,
                      r = this.eventName,
                      o = this.options,
                      i = this.selector,
                      s = i ? function() {
                          for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
                          var r = l.tryCatch(i).apply(void 0, t);
                          r === f.errorObject ? e.error(f.errorObject.e) : e.next(r);
                        } : function(t) {
                          return e.next(t);
                        };
                  t.setupSubscription(n, r, s, e, o);
                }, t;
            }(u.Observable);
      t.FromEventObservable = v;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(52),
          i = n(177),
          s = n(179),
          a = n(453),
          c = n(452),
          u = n(50),
          l = n(445),
          p = n(89),
          f = n(0),
          h = n(469),
          d = n(90),
          v = function(e) {
              function t(t, n) {
                  e.call(this, null), this.ish = t, this.scheduler = n;
                }
              return r(t, e), t.create = function(e, n) {
                  if (null != e) {
                      if ('function' == typeof e[d.observable]) return e instanceof f.Observable && !n ? e : new t(e, n);
                      if (o.isArray(e)) return new u.ArrayObservable(e, n);
                      if (s.isPromise(e)) return new a.PromiseObservable(e, n);
                      if ('function' == typeof e[p.iterator] || 'string' == typeof e) return new c.IteratorObservable(e, n);
                      if (i.isArrayLike(e)) return new l.ArrayLikeObservable(e, n);
                    }
                  throw new TypeError((null !== e && typeof e || e) + ' is not observable');
                }, t.prototype._subscribe = function(e) {
                  var t = this.ish,
                      n = this.scheduler;
                  return null == n ? t[d.observable]().subscribe(e) : t[d.observable]().subscribe(new h.ObserveOnSubscriber(e, n, 0));
                }, t;
            }(f.Observable);
      t.FromObservable = v;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(483),
          i = n(0),
          s = n(88),
          a = function(e) {
              function t(t, n) {
                  void 0 === t && (t = 0), void 0 === n && (n = s.async), e.call(this), this.period = t, this.scheduler = n, (!o.isNumeric(t) || t < 0) && (this.period = 0), n && 'function' == typeof n.schedule || (this.scheduler = s.async);
                }
              return r(t, e), t.create = function(e, n) {
                  return void 0 === e && (e = 0), void 0 === n && (n = s.async), new t(e, n);
                }, t.dispatch = function(e) {
                  var t = e.index,
                      n = e.subscriber,
                      r = e.period;
                  n.next(t), n.closed || (e.index += 1, this.schedule(e, r));
                }, t.prototype._subscribe = function(e) {
                  var n = this.period,
                      r = this.scheduler;
                  e.add(r.schedule(t.dispatch, n, {
                      index: 0,
                      subscriber: e,
                      period: n,
                    }));
                }, t;
            }(i.Observable);
      t.IntervalObservable = a;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e[l.iterator];
          if (!t && 'string' == typeof e) return new f(e);
          if (!t && void 0 !== e.length) return new h(e);
          if (!t) throw new TypeError('object is not iterable');
          return e[l.iterator]();
        }

      function o(e) {
          var t = +e.length;
          return isNaN(t) ? 0 : 0 !== t && i(t) ? (t = s(t) * Math.floor(Math.abs(t)), t <= 0 ? 0 : t > d ? d : t) : t;
        }

      function i(e) {
          return 'number' == typeof e && c.root.isFinite(e);
        }

      function s(e) {
          var t = +e;
          return 0 === t ? t : isNaN(t) ? t : t < 0 ? -1 : 1;
        }
      var a = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          c = n(19),
          u = n(0),
          l = n(89),
          p = function(e) {
              function t(t, n) {
                  if (e.call(this), this.scheduler = n, null == t) throw new Error('iterator cannot be null.');
                  this.iterator = r(t);
                }
              return a(t, e), t.create = function(e, n) {
                  return new t(e, n);
                }, t.dispatch = function(e) {
                  var t = e.index,
                      n = e.hasError,
                      r = e.iterator,
                      o = e.subscriber;
                  if (n) return void o.error(e.error);
                  var i = r.next();
                  return i.done ? void o.complete() : (o.next(i.value), e.index = t + 1, o.closed ? void('function' == typeof r.return && r.return()) : void this.schedule(e));
                }, t.prototype._subscribe = function(e) {
                  var n = this,
                      r = n.iterator,
                      o = n.scheduler;
                  if (o) return o.schedule(t.dispatch, 0, {
                      index: 0,
                      iterator: r,
                      subscriber: e,
                    });
                  for (;;) {
                      var i = r.next();
                      if (i.done) {
                          e.complete();
                          break;
                        }
                      if (e.next(i.value), e.closed) {
                          'function' == typeof r.return && r.return();
                          break;
                        }
                    }
                }, t;
            }(u.Observable);
      t.IteratorObservable = p;
      var f = function() {
            function e(e, t, n) {
                  void 0 === t && (t = 0), void 0 === n && (n = e.length), this.str = e, this.idx = t, this.len = n;
                }
            return e.prototype[l.iterator] = function() {
                  return this;
                }, e.prototype.next = function() {
                  return this.idx < this.len ? {
                      done: !1,
                      value: this.str.charAt(this.idx++),
                    } : {
                      done: !0,
                      value: void 0,
                    };
                }, e;
          }(),
          h = function() {
              function e(e, t, n) {
                  void 0 === t && (t = 0), void 0 === n && (n = o(e)), this.arr = e, this.idx = t, this.len = n;
                }
              return e.prototype[l.iterator] = function() {
                  return this;
                }, e.prototype.next = function() {
                  return this.idx < this.len ? {
                      done: !1,
                      value: this.arr[this.idx++],
                    } : {
                      done: !0,
                      value: void 0,
                    };
                }, e;
            }(),
          d = Math.pow(2, 53) - 1;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = e.value,
              n = e.subscriber;
          n.closed || (n.next(t), n.complete());
        }

      function o(e) {
          var t = e.err,
              n = e.subscriber;
          n.closed || n.error(t);
        }
      var i = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          s = n(19),
          a = n(0),
          c = function(e) {
              function t(t, n) {
                  e.call(this), this.promise = t, this.scheduler = n;
                }
              return i(t, e), t.create = function(e, n) {
                  return new t(e, n);
                }, t.prototype._subscribe = function(e) {
                  var t = this,
                      n = this.promise,
                      i = this.scheduler;
                  if (null == i) this._isScalar ? e.closed || (e.next(this.value), e.complete()) : n.then(function(n) {
                      t.value = n, t._isScalar = !0, e.closed || (e.next(n), e.complete());
                    }, function(t) {
                      e.closed || e.error(t);
                    }).then(null, function(e) {
                      s.root.setTimeout(function() {
                          throw e;
                        });
                    });
                  else if (this._isScalar) {
                      if (!e.closed) return i.schedule(r, 0, {
                          value: this.value,
                          subscriber: e,
                        });
                    } else n.then(function(n) {
                      t.value = n, t._isScalar = !0, e.closed || e.add(i.schedule(r, 0, {
                          value: n,
                          subscriber: e,
                        }));
                    }, function(t) {
                      e.closed || e.add(i.schedule(o, 0, {
                          err: t,
                          subscriber: e,
                        }));
                    }).then(null, function(e) {
                      s.root.setTimeout(function() {
                          throw e;
                        });
                    });
                }, t;
            }(a.Observable);
      t.PromiseObservable = c;
    }, function(e, t, n) {
      'use strict';
      var r = n(446);
      t.bindCallback = r.BoundCallbackObservable.create;
    }, function(e, t, n) {
      'use strict';

      function r() {
          if (f.root.XMLHttpRequest) return new f.root.XMLHttpRequest;
          if (f.root.XDomainRequest) return new f.root.XDomainRequest;
          throw new Error('CORS is not supported by your browser');
        }

      function o() {
          if (f.root.XMLHttpRequest) return new f.root.XMLHttpRequest;
          var e = void 0;
          try {
              for (var t = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'], n = 0; n < 3; n++) try {
                  if (e = t[n], new f.root.ActiveXObject(e)) break;
                } catch (e) {}
              return new f.root.ActiveXObject(e);
            } catch (e) {
              throw new Error('XMLHttpRequest is not supported by your browser');
            }
        }

      function i(e, t) {
          return void 0 === t && (t = null), new y({
              method: 'GET',
              url: e,
              headers: t,
            });
        }

      function s(e, t, n) {
          return new y({
              method: 'POST',
              url: e,
              body: t,
              headers: n,
            });
        }

      function a(e, t) {
          return new y({
              method: 'DELETE',
              url: e,
              headers: t,
            });
        }

      function c(e, t, n) {
          return new y({
              method: 'PUT',
              url: e,
              body: t,
              headers: n,
            });
        }

      function u(e, t, n) {
          return new y({
              method: 'PATCH',
              url: e,
              body: t,
              headers: n,
            });
        }

      function l(e, t) {
          return new y({
              method: 'GET',
              url: e,
              responseType: 'json',
              headers: t,
            }).lift(new g.MapOperator(function(e, t) {
              return e.response;
            }, null));
        }
      var p = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          f = n(19),
          h = n(39),
          d = n(31),
          v = n(0),
          m = n(10),
          g = n(87);
      t.ajaxGet = i, t.ajaxPost = s, t.ajaxDelete = a, t.ajaxPut = c, t.ajaxPatch = u, t.ajaxGetJSON = l;
      var y = function(e) {
          function t(t) {
              e.call(this);
              var n = {
                  async: !0,
                  createXHR: function() {
                      return this.crossDomain ? r.call(this) : o();
                    },
                  crossDomain: !1,
                  withCredentials: !1,
                  headers: {},
                  method: 'GET',
                  responseType: 'json',
                  timeout: 0,
                };
              if ('string' == typeof t) n.url = t;
              else
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
              this.request = n;
            }
          return p(t, e), t.prototype._subscribe = function(e) {
              return new b(e, this.request);
            }, t.create = function() {
              var e = function(e) {
                  return new t(e);
                };
              return e.get = i, e.post = s, e.delete = a, e.put = c, e.patch = u, e.getJSON = l, e;
            }(), t;
        }(v.Observable);
      t.AjaxObservable = y;
      var b = function(e) {
          function t(t, n) {
              e.call(this, t), this.request = n, this.done = !1;
              var r = n.headers = n.headers || {};
              n.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest'), 'Content-Type' in r || f.root.FormData && n.body instanceof f.root.FormData || void 0 === n.body || (r['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'), n.body = this.serializeBody(n.body, n.headers['Content-Type']), this.send();
            }
          return p(t, e), t.prototype.next = function(e) {
              this.done = !0;
              var t = this,
                  n = t.xhr,
                  r = t.request,
                  o = t.destination,
                  i = new _(e, n, r);
              o.next(i);
            }, t.prototype.send = function() {
              var e = this,
                  t = e.request,
                  n = e.request,
                  r = n.user,
                  o = n.method,
                  i = n.url,
                  s = n.async,
                  a = n.password,
                  c = n.headers,
                  u = n.body,
                  l = t.createXHR,
                  p = h.tryCatch(l).call(t);
              if (p === d.errorObject) this.error(d.errorObject.e);
              else {
                  this.xhr = p, this.setupEvents(p, t);
                  if ((r ? h.tryCatch(p.open).call(p, o, i, s, r, a) : h.tryCatch(p.open).call(p, o, i, s)) === d.errorObject) return this.error(d.errorObject.e), null;
                  if (p.timeout = t.timeout, p.responseType = t.responseType, 'withCredentials' in p && (p.withCredentials = !!t.withCredentials), this.setHeaders(p, c), (u ? h.tryCatch(p.send).call(p, u) : h.tryCatch(p.send).call(p)) === d.errorObject) return this.error(d.errorObject.e), null;
                }
              return p;
            }, t.prototype.serializeBody = function(e, t) {
              if (!e || 'string' == typeof e) return e;
              if (f.root.FormData && e instanceof f.root.FormData) return e;
              if (t) {
                  var n = t.indexOf(';'); - 1 !== n && (t = t.substring(0, n));
                }
              switch (t) {
                case 'application/x-www-form-urlencoded':
                  return Object.keys(e).map(function(t) {
                          return encodeURI(t) + '=' + encodeURI(e[t]);
                        }).join('&');
                case 'application/json':
                  return JSON.stringify(e);
                default:
                  return e;
                }
            }, t.prototype.setHeaders = function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && e.setRequestHeader(n, t[n]);
            }, t.prototype.setupEvents = function(e, t) {
              function n(e) {
                  var t = n,
                      r = t.subscriber,
                      o = t.progressSubscriber,
                      i = t.request;
                  o && o.error(e), r.error(new C(this, i));
                }

              function r(e) {
                  var t = r,
                      n = t.subscriber,
                      o = t.progressSubscriber,
                      i = t.request;
                  if (4 === this.readyState) {
                      var s = 1223 === this.status ? 204 : this.status,
                          a = 'text' === this.responseType ? this.response || this.responseText : this.response;
                      0 === s && (s = a ? 200 : 0), 200 <= s && s < 300 ? (o && o.complete(), n.next(e), n.complete()) : (o && o.error(e), n.error(new w('ajax error ' + s, this, i)));
                    }
                }
              var o = t.progressSubscriber;
              if (e.ontimeout = n, n.request = t, n.subscriber = this, n.progressSubscriber = o, e.upload && 'withCredentials' in e) {
                  if (o) {
                      var i;
                      i = function(e) {
                          i.progressSubscriber.next(e);
                        }, f.root.XDomainRequest ? e.onprogress = i : e.upload.onprogress = i, i.progressSubscriber = o;
                    }
                  var s;
                  s = function(e) {
                      var t = s,
                          n = t.progressSubscriber,
                          r = t.subscriber,
                          o = t.request;
                      n && n.error(e), r.error(new w('ajax error', this, o));
                    }, e.onerror = s, s.request = t, s.subscriber = this, s.progressSubscriber = o;
                }
              e.onreadystatechange = r, r.subscriber = this, r.progressSubscriber = o, r.request = t;
            }, t.prototype.unsubscribe = function() {
              var t = this,
                  n = t.done,
                  r = t.xhr;
              !n && r && 4 !== r.readyState && 'function' == typeof r.abort && r.abort(), e.prototype.unsubscribe.call(this);
            }, t;
        }(m.Subscriber);
      t.AjaxSubscriber = b;
      var _ = function() {
          function e(e, t, n) {
              switch (this.originalEvent = e, this.xhr = t, this.request = n, this.status = t.status, this.responseType = t.responseType || n.responseType, this.responseType) {
                case 'json':
                  this.response = 'response' in t ? t.responseType ? t.response : JSON.parse(t.response || t.responseText || 'null') : JSON.parse(t.responseText || 'null');
                  break;
                case 'xml':
                  this.response = t.responseXML;
                  break;
                case 'text':
                default:
                  this.response = 'response' in t ? t.response : t.responseText;
                }
            }
          return e;
        }();
      t.AjaxResponse = _;
      var w = function(e) {
          function t(t, n, r) {
              e.call(this, t), this.message = t, this.xhr = n, this.request = r, this.status = n.status;
            }
          return p(t, e), t;
        }(Error);
      t.AjaxError = w;
      var C = function(e) {
          function t(t, n) {
              e.call(this, 'ajax timeout', t, n);
            }
          return p(t, e), t;
        }(w);
      t.AjaxTimeoutError = C;
    }, function(e, t, n) {
      'use strict';
      var r = n(455);
      t.ajax = r.AjaxObservable.create;
    }, function(e, t, n) {
      'use strict';
      var r = n(51);
      t.empty = r.EmptyObservable.create;
    }, function(e, t, n) {
      'use strict';
      var r = n(449);
      t.fromEvent = r.FromEventObservable.create;
    }, function(e, t, n) {
      'use strict';
      var r = n(451);
      t.interval = r.IntervalObservable.create;
    }, function(e, t, n) {
      'use strict';
      var r = n(448);
      t._throw = r.ErrorObservable.create;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t = new a(e),
              n = this.lift(t);
          return t.caught = n;
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(20),
          s = n(21);
      t._catch = r;
      var a = function() {
            function e(e) {
                  this.selector = e;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new c(e, this.selector, this.caught));
                }, e;
          }(),
          c = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.selector = n, this.caught = r;
                }
              return o(t, e), t.prototype.error = function(t) {
                  if (!this.isStopped) {
                      var n = void 0;
                      try {
                          n = this.selector(t, this.caught);
                        } catch (t) {
                          return void e.prototype.error.call(this, t);
                        }
                      this._unsubscribeAndRecycle(), this.add(s.subscribeToResult(this, n));
                    }
                }, t;
            }(i.OuterSubscriber);
    }, function(e, t, n) {
      'use strict';

      function r() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
          var n = null;
          return 'function' == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length && s.isArray(e[0]) && (e = e[0].slice()), e.unshift(this), this.lift.call(new i.ArrayObservable(e), new l(n));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(50),
          s = n(52),
          a = n(20),
          c = n(21),
          u = {};
      t.combineLatest = r;
      var l = function() {
          function e(e) {
              this.project = e;
            }
          return e.prototype.call = function(e, t) {
              return t.subscribe(new p(e, this.project));
            }, e;
        }();
      t.CombineLatestOperator = l;
      var p = function(e) {
          function t(t, n) {
              e.call(this, t), this.project = n, this.active = 0, this.values = [], this.observables = [];
            }
          return o(t, e), t.prototype._next = function(e) {
              this.values.push(u), this.observables.push(e);
            }, t.prototype._complete = function() {
              var e = this.observables,
                  t = e.length;
              if (0 === t) this.destination.complete();
              else {
                  this.active = t, this.toRespond = t;
                  for (var n = 0; n < t; n++) {
                      var r = e[n];
                      this.add(c.subscribeToResult(this, r, r, n));
                    }
                }
            }, t.prototype.notifyComplete = function(e) {
              0 == (this.active -= 1) && this.destination.complete();
            }, t.prototype.notifyNext = function(e, t, n, r, o) {
              var i = this.values,
                  s = i[n],
                  a = this.toRespond ? s === u ? --this.toRespond : this.toRespond : 0;
              i[n] = t, 0 === a && (this.project ? this._tryProject(i) : this.destination.next(i.slice()));
            }, t.prototype._tryProject = function(e) {
              var t;
              try {
                  t = this.project.apply(this, e);
                } catch (e) {
                  return void this.destination.error(e);
                }
              this.destination.next(t);
            }, t;
        }(a.OuterSubscriber);
      t.CombineLatestSubscriber = p;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return this.lift(new s(e, this));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10);
      t.count = r;
      var s = function() {
            function e(e, t) {
                  this.predicate = e, this.source = t;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new a(e, this.predicate, this.source));
                }, e;
          }(),
          a = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.predicate = n, this.source = r, this.count = 0, this.index = 0;
                }
              return o(t, e), t.prototype._next = function(e) {
                  this.predicate ? this._tryPredicate(e) : this.count++;
                }, t.prototype._tryPredicate = function(e) {
                  var t;
                  try {
                      t = this.predicate(e, this.index++, this.source);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                  t && this.count++;
                }, t.prototype._complete = function() {
                  this.destination.next(this.count), this.destination.complete();
                }, t;
            }(i.Subscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          void 0 === t && (t = i.async);
          var n = s.isDate(e),
              r = n ? +e - t.now() : Math.abs(e);
          return this.lift(new u(r, t));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(88),
          s = n(482),
          a = n(10),
          c = n(160);
      t.delay = r;
      var u = function() {
            function e(e, t) {
                  this.delay = e, this.scheduler = t;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new l(e, this.delay, this.scheduler));
                }, e;
          }(),
          l = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.delay = n, this.scheduler = r, this.queue = [], this.active = !1, this.errored = !1;
                }
              return o(t, e), t.dispatch = function(e) {
                  for (var t = e.source, n = t.queue, r = e.scheduler, o = e.destination; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(o);
                  if (n.length > 0) {
                      var i = Math.max(0, n[0].time - r.now());
                      this.schedule(e, i);
                    } else t.active = !1;
                }, t.prototype._schedule = function(e) {
                  this.active = !0, this.add(e.schedule(t.dispatch, this.delay, {
                      source: this,
                      destination: this.destination,
                      scheduler: e,
                    }));
                }, t.prototype.scheduleNotification = function(e) {
                  if (!0 !== this.errored) {
                      var t = this.scheduler,
                          n = new p(t.now() + this.delay, e);
                      this.queue.push(n), !1 === this.active && this._schedule(t);
                    }
                }, t.prototype._next = function(e) {
                  this.scheduleNotification(c.Notification.createNext(e));
                }, t.prototype._error = function(e) {
                  this.errored = !0, this.queue = [], this.destination.error(e);
                }, t.prototype._complete = function() {
                  this.scheduleNotification(c.Notification.createComplete());
                }, t;
            }(a.Subscriber),
          p = function() {
              function e(e, t) {
                  this.time = e, this.notification = t;
                }
              return e;
            }();
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return this.lift(new s(e, t, n));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10);
      t._do = r;
      var s = function() {
            function e(e, t, n) {
                  this.nextOrObserver = e, this.error = t, this.complete = n;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new a(e, this.nextOrObserver, this.error, this.complete));
                }, e;
          }(),
          a = function(e) {
              function t(t, n, r, o) {
                  e.call(this, t);
                  var s = new i.Subscriber(n, r, o);
                  s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s;
                }
              return o(t, e), t.prototype._next = function(e) {
                  var t = this.safeSubscriber;
                  t.next(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.next(e);
                }, t.prototype._error = function(e) {
                  var t = this.safeSubscriber;
                  t.error(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.error(e);
                }, t.prototype._complete = function() {
                  var e = this.safeSubscriber;
                  e.complete(), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.complete();
                }, t;
            }(i.Subscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return void 0 === e && (e = Number.POSITIVE_INFINITY), this.lift(new a(e));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(20),
          s = n(21);
      t.mergeAll = r;
      var a = function() {
          function e(e) {
              this.concurrent = e;
            }
          return e.prototype.call = function(e, t) {
              return t.subscribe(new c(e, this.concurrent));
            }, e;
        }();
      t.MergeAllOperator = a;
      var c = function(e) {
          function t(t, n) {
              e.call(this, t), this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0;
            }
          return o(t, e), t.prototype._next = function(e) {
              this.active < this.concurrent ? (this.active++, this.add(s.subscribeToResult(this, e))) : this.buffer.push(e);
            }, t.prototype._complete = function() {
              this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete();
            }, t.prototype.notifyComplete = function(e) {
              var t = this.buffer;
              this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
            }, t;
        }(i.OuterSubscriber);
      t.MergeAllSubscriber = c;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return void 0 === n && (n = Number.POSITIVE_INFINITY), 'number' == typeof t && (n = t, t = null), this.lift(new a(e, t, n));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(21),
          s = n(20);
      t.mergeMap = r;
      var a = function() {
          function e(e, t, n) {
              void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = e, this.resultSelector = t, this.concurrent = n;
            }
          return e.prototype.call = function(e, t) {
              return t.subscribe(new c(e, this.project, this.resultSelector, this.concurrent));
            }, e;
        }();
      t.MergeMapOperator = a;
      var c = function(e) {
          function t(t, n, r, o) {
              void 0 === o && (o = Number.POSITIVE_INFINITY), e.call(this, t), this.project = n, this.resultSelector = r, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0;
            }
          return o(t, e), t.prototype._next = function(e) {
              this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
            }, t.prototype._tryNext = function(e) {
              var t, n = this.index++;
              try {
                  t = this.project(e, n);
                } catch (e) {
                  return void this.destination.error(e);
                }
              this.active++, this._innerSub(t, e, n);
            }, t.prototype._innerSub = function(e, t, n) {
              this.add(i.subscribeToResult(this, e, t, n));
            }, t.prototype._complete = function() {
              this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete();
            }, t.prototype.notifyNext = function(e, t, n, r, o) {
              this.resultSelector ? this._notifyResultSelector(e, t, n, r) : this.destination.next(t);
            }, t.prototype._notifyResultSelector = function(e, t, n, r) {
              var o;
              try {
                  o = this.resultSelector(e, t, n, r);
                } catch (e) {
                  return void this.destination.error(e);
                }
              this.destination.next(o);
            }, t.prototype.notifyComplete = function(e) {
              var t = this.buffer;
              this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
            }, t;
        }(s.OuterSubscriber);
      t.MergeMapSubscriber = c;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          var n;
          if (n = 'function' == typeof e ? e : function() {
              return e;
            }, 'function' == typeof t) return this.lift(new i(n, t));
          var r = Object.create(this, o.connectableObservableDescriptor);
          return r.source = this, r.subjectFactory = n, r;
        }
      var o = n(447);
      t.multicast = r;
      var i = function() {
          function e(e, t) {
              this.subjectFactory = e, this.selector = t;
            }
          return e.prototype.call = function(e, t) {
              var n = this.selector,
                  r = this.subjectFactory(),
                  o = n(r).subscribe(e);
              return o.add(t.subscribe(r)), o;
            }, e;
        }();
      t.MulticastOperator = i;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return void 0 === t && (t = 0), this.lift(new a(e, t));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10),
          s = n(160);
      t.observeOn = r;
      var a = function() {
          function e(e, t) {
              void 0 === t && (t = 0), this.scheduler = e, this.delay = t;
            }
          return e.prototype.call = function(e, t) {
              return t.subscribe(new c(e, this.scheduler, this.delay));
            }, e;
        }();
      t.ObserveOnOperator = a;
      var c = function(e) {
          function t(t, n, r) {
              void 0 === r && (r = 0), e.call(this, t), this.scheduler = n, this.delay = r;
            }
          return o(t, e), t.dispatch = function(e) {
              var t = e.notification,
                  n = e.destination;
              t.observe(n), this.unsubscribe();
            }, t.prototype.scheduleMessage = function(e) {
              this.add(this.scheduler.schedule(t.dispatch, this.delay, new u(e, this.destination)));
            }, t.prototype._next = function(e) {
              this.scheduleMessage(s.Notification.createNext(e));
            }, t.prototype._error = function(e) {
              this.scheduleMessage(s.Notification.createError(e));
            }, t.prototype._complete = function() {
              this.scheduleMessage(s.Notification.createComplete());
            }, t;
        }(i.Subscriber);
      t.ObserveOnSubscriber = c;
      var u = function() {
          function e(e, t) {
              this.notification = e, this.destination = t;
            }
          return e;
        }();
      t.ObserveOnMessage = u;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return this.lift(new l(e, this));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(30),
          s = n(39),
          a = n(31),
          c = n(20),
          u = n(21);
      t.retryWhen = r;
      var l = function() {
            function e(e, t) {
                  this.notifier = e, this.source = t;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new p(e, this.notifier, this.source));
                }, e;
          }(),
          p = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.notifier = n, this.source = r;
                }
              return o(t, e), t.prototype.error = function(t) {
                  if (!this.isStopped) {
                      var n = this.errors,
                          r = this.retries,
                          o = this.retriesSubscription;
                      if (r) this.errors = null, this.retriesSubscription = null;
                      else {
                          if (n = new i.Subject, (r = s.tryCatch(this.notifier)(n)) === a.errorObject) return e.prototype.error.call(this, a.errorObject.e);
                          o = u.subscribeToResult(this, r);
                        }
                      this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = o, n.next(t);
                    }
                }, t.prototype._unsubscribe = function() {
                  var e = this,
                      t = e.errors,
                      n = e.retriesSubscription;
                  t && (t.unsubscribe(), this.errors = null), n && (n.unsubscribe(), this.retriesSubscription = null), this.retries = null;
                }, t.prototype.notifyNext = function(e, t, n, r, o) {
                  var i = this,
                      s = i.errors,
                      a = i.retries,
                      c = i.retriesSubscription;
                  this.errors = null, this.retries = null, this.retriesSubscription = null, this._unsubscribeAndRecycle(), this.errors = s, this.retries = a, this.retriesSubscription = c, this.source.subscribe(this);
                }, t;
            }(c.OuterSubscriber);
    }, function(e, t, n) {
      'use strict';

      function r() {
          return new s.Subject;
        }

      function o() {
          return i.multicast.call(this, r).refCount();
        }
      var i = n(468),
          s = n(30);
      t.share = o;
    }, function(e, t, n) {
      'use strict';

      function r(e, t) {
          return this.lift(new a(e, t));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(20),
          s = n(21);
      t.switchMap = r;
      var a = function() {
            function e(e, t) {
                  this.project = e, this.resultSelector = t;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new c(e, this.project, this.resultSelector));
                }, e;
          }(),
          c = function(e) {
              function t(t, n, r) {
                  e.call(this, t), this.project = n, this.resultSelector = r, this.index = 0;
                }
              return o(t, e), t.prototype._next = function(e) {
                  var t, n = this.index++;
                  try {
                      t = this.project(e, n);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                  this._innerSub(t, e, n);
                }, t.prototype._innerSub = function(e, t, n) {
                  var r = this.innerSubscription;
                  r && r.unsubscribe(), this.add(this.innerSubscription = s.subscribeToResult(this, e, t, n));
                }, t.prototype._complete = function() {
                  var t = this.innerSubscription;
                  t && !t.closed || e.prototype._complete.call(this);
                }, t.prototype._unsubscribe = function() {
                  this.innerSubscription = null;
                }, t.prototype.notifyComplete = function(t) {
                  this.remove(t), this.innerSubscription = null, this.isStopped && e.prototype._complete.call(this);
                }, t.prototype.notifyNext = function(e, t, n, r, o) {
                  this.resultSelector ? this._tryNotifyNext(e, t, n, r) : this.destination.next(t);
                }, t.prototype._tryNotifyNext = function(e, t, n, r) {
                  var o;
                  try {
                      o = this.resultSelector(e, t, n, r);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                  this.destination.next(o);
                }, t;
            }(i.OuterSubscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return 0 === e ? new a.EmptyObservable : this.lift(new c(e));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(10),
          s = n(480),
          a = n(51);
      t.take = r;
      var c = function() {
            function e(e) {
                  if (this.total = e, this.total < 0) throw new s.ArgumentOutOfRangeError;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new u(e, this.total));
                }, e;
          }(),
          u = function(e) {
              function t(t, n) {
                  e.call(this, t), this.total = n, this.count = 0;
                }
              return o(t, e), t.prototype._next = function(e) {
                  var t = this.total,
                      n = ++this.count;
                  n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()));
                }, t;
            }(i.Subscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return this.lift(new a(e));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(20),
          s = n(21);
      t.takeUntil = r;
      var a = function() {
            function e(e) {
                  this.notifier = e;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new c(e, this.notifier));
                }, e;
          }(),
          c = function(e) {
              function t(t, n) {
                  e.call(this, t), this.notifier = n, this.add(s.subscribeToResult(this, n));
                }
              return o(t, e), t.prototype.notifyNext = function(e, t, n, r, o) {
                  this.complete();
                }, t.prototype.notifyComplete = function() {}, t;
            }(i.OuterSubscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e, n) {
          return void 0 === n && (n = t.defaultThrottleConfig), this.lift(new a(e, n.leading, n.trailing));
        }
      var o = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          i = n(20),
          s = n(21);
      t.defaultThrottleConfig = {
          leading: !0,
          trailing: !1,
        }, t.throttle = r;
      var a = function() {
            function e(e, t, n) {
                  this.durationSelector = e, this.leading = t, this.trailing = n;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new c(e, this.durationSelector, this.leading, this.trailing));
                }, e;
          }(),
          c = function(e) {
              function t(t, n, r, o) {
                  e.call(this, t), this.destination = t, this.durationSelector = n, this._leading = r, this._trailing = o, this._hasTrailingValue = !1;
                }
              return o(t, e), t.prototype._next = function(e) {
                  if (this.throttled) this._trailing && (this._hasTrailingValue = !0, this._trailingValue = e);
                  else {
                      var t = this.tryDurationSelector(e);
                      t && this.add(this.throttled = s.subscribeToResult(this, t)), this._leading && (this.destination.next(e), this._trailing && (this._hasTrailingValue = !0, this._trailingValue = e));
                    }
                }, t.prototype.tryDurationSelector = function(e) {
                  try {
                      return this.durationSelector(e);
                    } catch (e) {
                      return this.destination.error(e), null;
                    }
                }, t.prototype._unsubscribe = function() {
                  var e = this,
                      t = e.throttled;
                  e._trailingValue, e._hasTrailingValue, e._trailing;
                  this._trailingValue = null, this._hasTrailingValue = !1, t && (this.remove(t), this.throttled = null, t.unsubscribe());
                }, t.prototype._sendTrailing = function() {
                  var e = this,
                      t = e.destination,
                      n = e.throttled,
                      r = e._trailing,
                      o = e._trailingValue,
                      i = e._hasTrailingValue;
                  n && r && i && (t.next(o), this._trailingValue = null, this._hasTrailingValue = !1);
                }, t.prototype.notifyNext = function(e, t, n, r, o) {
                  this._sendTrailing(), this._unsubscribe();
                }, t.prototype.notifyComplete = function() {
                  this._sendTrailing(), this._unsubscribe();
                }, t;
            }(i.OuterSubscriber);
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          return void 0 === t && (t = a.async), void 0 === n && (n = c.defaultThrottleConfig), this.lift(new u(e, t, n.leading, n.trailing));
        }

      function o(e) {
          e.subscriber.clearThrottle();
        }
      var i = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          s = n(10),
          a = n(88),
          c = n(475);
      t.throttleTime = r;
      var u = function() {
            function e(e, t, n, r) {
                  this.duration = e, this.scheduler = t, this.leading = n, this.trailing = r;
                }
            return e.prototype.call = function(e, t) {
                  return t.subscribe(new l(e, this.duration, this.scheduler, this.leading, this.trailing));
                }, e;
          }(),
          l = function(e) {
              function t(t, n, r, o, i) {
                  e.call(this, t), this.duration = n, this.scheduler = r, this.leading = o, this.trailing = i, this._hasTrailingValue = !1, this._trailingValue = null;
                }
              return i(t, e), t.prototype._next = function(e) {
                  this.throttled ? this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(o, this.duration, {
                      subscriber: this,
                    })), this.leading && this.destination.next(e));
                }, t.prototype.clearThrottle = function() {
                  var e = this.throttled;
                  e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), e.unsubscribe(), this.remove(e), this.throttled = null);
                }, t;
            }(s.Subscriber);
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(23),
          i = function(e) {
              function t(t, n) {
                  e.call(this);
                }
              return r(t, e), t.prototype.schedule = function(e, t) {
                  return void 0 === t && (t = 0), this;
                }, t;
            }(o.Subscription);
      t.Action = i;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(19),
          i = n(477),
          s = function(e) {
              function t(t, n) {
                  e.call(this, t, n), this.scheduler = t, this.work = n, this.pending = !1;
                }
              return r(t, e), t.prototype.schedule = function(e, t) {
                  if (void 0 === t && (t = 0), this.closed) return this;
                  this.state = e, this.pending = !0;
                  var n = this.id,
                      r = this.scheduler;
                  return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.delay = t, this.id = this.id || this.requestAsyncId(r, this.id, t), this;
                }, t.prototype.requestAsyncId = function(e, t, n) {
                  return void 0 === n && (n = 0), o.root.setInterval(e.flush.bind(e, this), n);
                }, t.prototype.recycleAsyncId = function(e, t, n) {
                  return void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending ? t : o.root.clearInterval(t) && void 0 || void 0;
                }, t.prototype.execute = function(e, t) {
                  if (this.closed) return new Error('executing a cancelled action');
                  this.pending = !1;
                  var n = this._execute(e, t);
                  if (n) return n;
                  !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
                }, t.prototype._execute = function(e, t) {
                  var n = !1,
                      r = void 0;
                  try {
                      this.work(e);
                    } catch (e) {
                      n = !0, r = !!e && e || new Error(e);
                    }
                  if (n) return this.unsubscribe(), r;
                }, t.prototype._unsubscribe = function() {
                  var e = this.id,
                      t = this.scheduler,
                      n = t.actions,
                      r = n.indexOf(this);
                  this.work = null, this.delay = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != e && (this.id = this.recycleAsyncId(t, e, null));
                }, t;
            }(i.Action);
      t.AsyncAction = s;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = n(428),
          i = function(e) {
              function t() {
                  e.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0;
                }
              return r(t, e), t.prototype.flush = function(e) {
                  var t = this.actions;
                  if (this.active) return void t.push(e);
                  var n;
                  this.active = !0;
                  do {
                      if (n = e.execute(e.state, e.delay)) break;
                    } while (e = t.shift());
                  if (this.active = !1, n) {
                      for (; e = t.shift();) e.unsubscribe();
                      throw n;
                    }
                }, t;
            }(o.Scheduler);
      t.AsyncScheduler = i;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = function(e) {
              function t() {
                  var t = e.call(this, 'argument out of range');
                  this.name = t.name = 'ArgumentOutOfRangeError', this.stack = t.stack, this.message = t.message;
                }
              return r(t, e), t;
            }(Error);
      t.ArgumentOutOfRangeError = o;
    }, function(e, t, n) {
      'use strict';
      var r = this && this.__extends || function(e, t) {
            function n() {
                  this.constructor = e;
                }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
          },
          o = function(e) {
              function t(t) {
                  e.call(this), this.errors = t;
                  var n = Error.call(this, t ? t.length + ' errors occurred during unsubscription:\n  ' + t.map(function(e, t) {
                      return t + 1 + ') ' + e.toString();
                    }).join('\n  ') : '');
                  this.name = n.name = 'UnsubscriptionError', this.stack = n.stack, this.message = n.message;
                }
              return r(t, e), t;
            }(Error);
      t.UnsubscriptionError = o;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return e instanceof Date && !isNaN(+e);
        }
      t.isDate = r;
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          return !o.isArray(e) && e - parseFloat(e) + 1 >= 0;
        }
      var o = n(52);
      t.isNumeric = r;
    }, function(e, t, n) {
      'use strict';

      function r(e, t, n) {
          if (e) {
              if (e instanceof o.Subscriber) return e;
              if (e[i.rxSubscriber]) return e[i.rxSubscriber]();
            }
          return e || t || n ? new o.Subscriber(e, t, n) : new o.Subscriber(s.empty);
        }
      var o = n(10),
          i = n(91),
          s = n(161);
      t.toSubscriber = r;
    }, function(e, t, n) {
      e.exports = n(486);
    }, function(e, t, n) {
      'use strict';
      (function(e, r) {
          Object.defineProperty(t, '__esModule', {
              value: !0,
            });
          var o, i = n(487),
              s = function(e) {
                  return e && e.__esModule ? e : {
                      default: e,
                    };
                }(i);
          o = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== e ? e : r;
          var a = (0, s.default)(o);
          t.default = a;
        }).call(t, n(53), n(184)(e));
    }, function(e, t, n) {
      'use strict';

      function r(e) {
          var t, n = e.Symbol;
          return 'function' == typeof n ? n.observable ? t = n.observable : (t = n('observable'), n.observable = t) : t = '@@observable', t;
        }
      Object.defineProperty(t, '__esModule', {
          value: !0,
        }), t.default = r;
    }, function(e, t) {
      e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }, function(e, t, n) {
      'use strict';
      t.Any = n(183), t.Cc = n(181), t.Cf = n(488), t.P = n(93), t.Z = n(182);
    }]);
});