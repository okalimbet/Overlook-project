/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/night-city.jpg */ "./src/images/night-city.jpg"));

// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  outline: none; }\n\nhtml {\n  margin: 0;\n  height: 100%;\n  font-size: 100%; }\n  @media only screen and (max-width: 400px) {\n    html {\n      font-size: 55%; } }\n  @media only screen and (max-width: 1200px) {\n    html {\n      font-size: 75%; } }\n  @media only screen and (max-width: 900px) {\n    html {\n      font-size: 80%; } }\n  @media only screen and (min-width: 1800px) {\n    html {\n      font-size: 100%; } }\n  html body {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: inherit;\n    font-family: 'Quicksand';\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover; }\n\n#welcome-title {\n  float: left; }\n\n#login__background {\n  width: 100%;\n  filter: blur(5px); }\n\na {\n  text-decoration: none; }\n\nul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  margin: auto 2em; }\n\n.greeting {\n  background: #01161E;\n  height: 3em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: auto;\n  margin-left: 1em;\n  margin-right: 1em;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.greeting__nav {\n  display: flex;\n  flex-direction: row;\n  margin: auto 0em; }\n\n.login-page {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #124559; }\n  .login-page__box {\n    width: 380px;\n    height: 350px;\n    padding: 25px;\n    box-shadow: 0 0 8px black;\n    background: #124559;\n    opacity: 1;\n    text-align: center; }\n\nh2 {\n  color: #EFF6E0;\n  text-align: center;\n  margin-bottom: 25px; }\n\nh2:before {\n  position: absolute;\n  width: 80%;\n  height: 2px;\n  background: #EFF6E0;\n  top: 70px;\n  left: 10%; }\n\nh3 {\n  color: #EFF6E0;\n  text-align: center;\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto; }\n\n#login-form {\n  margin-top: 80px; }\n\n#login-error {\n  animation: fadeIn 2s;\n  font-size: 1em;\n  width: 90%;\n  margin: 0 auto; }\n\n.input-border {\n  width: 100%;\n  height: 40px;\n  position: relative;\n  margin-bottom: 30px; }\n\n.text {\n  width: 95%;\n  height: 100%;\n  padding: 0 10px;\n  padding: 0 10px;\n  border: none;\n  border-bottom: 2px solid #AEC3B0;\n  background: none;\n  color: #EFF6E0; }\n\n.border {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: #EFF6E0; }\n\n.text:focus ~ .border,\n.text:valid ~ .border {\n  width: 100%; }\n\n.login-label {\n  position: absolute;\n  top: 8px;\n  left: 14px;\n  color: #AEC3B0;\n  pointer-events: none;\n  transition: .5s; }\n\n.text:focus ~ label,\n.text:valid ~ label {\n  top: -12px;\n  left: 0;\n  color: #EFF6E0; }\n\n.btn {\n  width: 100%;\n  height: 50px;\n  border-radius: 8px;\n  background: none;\n  border: 2px solid #AEC3B0;\n  color: #AEC3B0;\n  transition: .4s; }\n\n.btn:hover {\n  border: 2px solid #EFF6E0;\n  color: #EFF6E0; }\n\n.btn:focus {\n  border: 2px solid #124559;\n  color: #124559;\n  background: #EFF6E0; }\n\n.light-btn {\n  width: 6em;\n  height: 2em;\n  margin: auto 1em; }\n\n.navigation__item__title-light {\n  color: #EFF6E0;\n  margin-left: 1em; }\n\n.navigation__item__title-light:hover {\n  border-bottom: 1px solid #EFF6E0; }\n\n.navigation__item__title-light:focus {\n  border-bottom: 1px solid #EFF6E0; }\n\n.manager-view__information {\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin-left: 1em;\n  margin-right: 1em;\n  background-color: rgba(255, 255, 255, 0.92); }\n\n.view-headers-dark {\n  color: #01161E;\n  height: 2em;\n  margin: 1.5em 0 1em 0; }\n\ndiv.info-cards {\n  height: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 1em auto; }\n\n.card {\n  margin: 1em;\n  border: 2px solid #124559;\n  width: 20em;\n  height: 30em;\n  display: flex;\n  flex-direction: column; }\n  .card__title {\n    height: 2em;\n    background: #124559;\n    width: 20em;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap; }\n  .card__info {\n    height: 30px;\n    color: #124559;\n    float: left;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center; }\n\n.card:focus {\n  box-shadow: 4px 3px 4px #124559; }\n\n#today-date {\n  margin-top: 6em;\n  margin-bottom: 2em;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.5em; }\n\n#today-revenue {\n  font-size: 1.5em; }\n\n#available-rooms {\n  font-size: 10em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n\n.circular-chart {\n  color: #124559;\n  display: block;\n  margin: auto;\n  max-width: 80%;\n  max-height: 250px; }\n  .circular-chart__circle {\n    stroke: #4CC790;\n    fill: none;\n    stroke-width: 2.8;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards; }\n\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100; } }\n\n#percentage {\n  color: #124559;\n  font-family: sans-serif;\n  font-size: 0.4em;\n  text-anchor: middle; }\n\n.manager-view__user-info {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: auto;\n  margin: 1em;\n  background: #124559;\n  color: #EFF6E0; }\n\n.user-info-form {\n  display: flex;\n  flex-direction: row;\n  margin: 2em 1em 0 1em;\n  align-items: center;\n  width: 90%; }\n\n.user-info-details {\n  display: flex;\n  flex-direction: row;\n  margin: 2em 1em 0 1em; }\n\n.manager-form-titles {\n  margin: 0em 1em 0 0; }\n\n#findBookingId {\n  margin: 0em 1em 0 1em; }\n\n#user-name {\n  margin-left: 0.3em; }\n\n#user-total {\n  margin-left: 0.3em; }\n\n.input-id {\n  width: 9em;\n  height: 1.5em;\n  padding: 0 10px;\n  border: none;\n  border-bottom: 2px solid #AEC3B0;\n  background: none;\n  color: #EFF6E0; }\n\n.input-id:focus {\n  border-bottom: 3px solid #EFF6E0; }\n\n#manager-date-choice:focus,\n#manager-user-id-input:focus,\n#manager-room-types:focus,\n#user-date-input:focus,\n#user-room-data:focus {\n  border-bottom: 3px solid #01161E; }\n\n.input-dark {\n  color: #124559; }\n\n.bookings-container {\n  margin: 3em 1em;\n  height: 30em;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll; }\n\n.room-img {\n  height: 100px; }\n\n.booking-card {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center; }\n\n.card-container {\n  display: flex;\n  flex-direction: row;\n  padding: 1em;\n  background-color: rgba(255, 255, 255, 0.92);\n  color: #124559;\n  font-size: 0.8em;\n  margin: 1em 0;\n  width: auto;\n  height: 10em; }\n\n.card-container:hover {\n  box-shadow: 2px 2px 8px #EFF6E0; }\n\n.card-details {\n  margin: auto 1em; }\n\n.room-detail {\n  margin: 0.4em; }\n\n#price-booking {\n  font-size: 2em; }\n\n@media only screen and (max-width: 400px) {\n  #delete-button {\n    width: 8em;\n    height: 2.2em;\n    margin: auto 1em;\n    font-size: 0.9em; } }\n\n.card-left-side {\n  display: flex;\n  flex-direction: row; }\n\n.manager-view__book-room {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: auto;\n  margin: 1em;\n  background: rgba(255, 255, 255, 0.92);\n  color: #124559; }\n\n.user-info-details {\n  display: flex;\n  flex-direction: row; }\n\n.dark-input {\n  color: #124559;\n  margin-bottom: 1em;\n  width: 15em; }\n\n#no-rooms-message {\n  margin: auto 3em; }\n\n#no-rooms-message-1 {\n  margin: auto 0.5em; }\n\n#no-rooms-message-customer {\n  margin: 1em; }\n\n#manager-data-input {\n  margin: 1em 1em 0em 0em; }\n\n#manager-room-input {\n  margin: 0em 1em 0em 0em; }\n\n.left-side-container {\n  display: flex;\n  flex-direction: column; }\n\n.available-rooms-container {\n  height: 40em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 3em auto;\n  overflow: scroll; }\n\n.book-room-card {\n  margin: 1em;\n  width: 14em;\n  height: 20em;\n  display: flex;\n  flex-direction: column;\n  color: #EFF6E0;\n  background-color: #124559;\n  padding: 1em;\n  justify-content: space-between; }\n\n.book-room-card:hover {\n  box-shadow: 2px 2px 8px #124559; }\n\n.book-room-img {\n  width: 100%;\n  height: 8em;\n  margin-bottom: 1em;\n  border: 1px solid #EFF6E0; }\n\n.book-card-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.room-btn {\n  height: 2em; }\n\n.room-btn-manager {\n  height: 2em; }\n\n.book-room-detail {\n  margin: 1em auto; }\n\n#customer-page {\n  background-image: none !important;\n  background: none !important;\n  background-size: 0 !important;\n  background-color: #124559;\n  height: 100%; }\n\n.user-view__reservations {\n  background-color: #124559;\n  height: auto;\n  padding: 3em 0 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: auto;\n  margin: 0em 1em 1em 1em; }\n\n.user-header-light {\n  margin: auto;\n  background-color: #124559;\n  color: #EFF6E0; }\n\n.user-view__book-room {\n  background-color: rgba(255, 255, 255, 0.92);\n  margin: 1em;\n  padding: 1em;\n  width: auto;\n  height: auto; }\n\n.user-book-room-title {\n  margin-top: 4em; }\n\n#user-room-input {\n  margin: 1em 1em 0em 0em; }\n\n#total-spent {\n  font-size: 1.5em;\n  float: left;\n  position: absolute;\n  top: 6em;\n  left: 1em;\n  margin-left: 0.3em; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.hidden {\n  display: none; }\n\n#blockColorblindContent {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Booking.js":
/*!************************!*\
  !*** ./src/Booking.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Booking {
  constructor(id = 'unknown', userId, bookingDate, roomNumber, roomServiceCharges = []) {
    this.id = id,
    this.userId = userId,
    this.bookingDate = bookingDate,
    this.roomNumber = roomNumber,
    this.roomServiceCharges = roomServiceCharges
  }

  getTotalServiceCharges() {
    const totalAmount = this.roomServiceCharges.reduce((total, charge) => {
      return total += charge.price;
    }, 0)
    return totalAmount.toFixed(2);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Booking);


/***/ }),

/***/ "./src/BookingRepo.js":
/*!****************************!*\
  !*** ./src/BookingRepo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");


class BookingRepo extends _Hotel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(bookingRepo = []) {
    super(bookingRepo, [], []);
  }

  getBookingsId(id) {
    return this.bookingRepo.reduce((idResult, booking) => {
      if (booking.id === id) {
        idResult.id = booking.id;
      }
      return idResult;
    }, {})
  }

  getBookingsByUserIdAndDate(userId, date) {
    return this.bookingRepo.filter(booking => {
      return (booking.userId === userId && booking.bookingDate === date);
    })
  }

  getTotalOfAllRoomCharges(rooms) {
    const totalAmount = rooms.reduce((total, booking) => {
      return total += parseFloat(booking.getTotalServiceCharges());
    }, 0)
    return totalAmount.toFixed(2);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BookingRepo);


/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");


class Customer extends _Hotel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(id, name) {
    super([], [], [])
    this.id = id,
    this.name = name
  }

  getFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Customer);


/***/ }),

/***/ "./src/CustomerRepo.js":
/*!*****************************!*\
  !*** ./src/CustomerRepo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hotel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hotel.js */ "./src/Hotel.js");


class CustomerRepo extends _Hotel_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(customerRepo = []) {
    super( [], [], customerRepo);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CustomerRepo);


/***/ }),

/***/ "./src/Hotel.js":
/*!**********************!*\
  !*** ./src/Hotel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hotel {
  constructor(bookingRepo = [], roomRepo = [], customerRepo = []) {
    this.bookingRepo = bookingRepo,
    this.roomRepo = roomRepo,
    this.customerRepo = customerRepo
  }

  getInformationByValue(value, data, property) {
    return data.filter(dataPiece => {
      return property === null ? value === dataPiece : value === dataPiece[property];
    })
  }

  determineUpcomingBookings(booking) {
    let todayDate = new Date().getTime();
    let bookingDate = new Date(booking.bookingDate).getTime();
    if (bookingDate > todayDate) {
      return 'Upcoming';
    }
    return 'Completed';
  }

  getTodayDate() {
    let todayDate = new Date();
    let date = ("0" + todayDate.getDate()).slice(-2);
    let month = ("0" + (todayDate.getMonth() + 1)).slice(-2);
    let year = todayDate.getFullYear();
    return `${year}/${month}/${date}`;
  }

  filterBookingByDate(bookings) {
    return bookings.sort((a, b) => {
      return a.bookingDate > b.bookingDate ? -1 : 1;
    })
  }

  getAvailableRooms(bookingRepo, roomRepo, date) {
    let bookingByDate = this.getInformationByValue(date, bookingRepo, 'bookingDate');
    let availableRooms = roomRepo
      .filter(room => !bookingByDate
        .some(booking => room.number === booking.roomNumber));
    return availableRooms;
  }

  getTotalAmountSpendByUser(customerBookings) {
    return customerBookings.reduce((totalAmount, room) => {
      return totalAmount += room.price;
    }, 0);
  }

  getUserCardsRoomCards(bookings, roomRepo) {
    return bookings.reduce((cards, booking) => {
      let bookingStatus = this.determineUpcomingBookings(booking);
      let chosenRoom = roomRepo.roomRepo.find(room => {
        return room.number === booking.roomNumber;
      });
      cards.push({
        bookingId: booking.id,
        roomType: chosenRoom.roomType,
        bookingDate: booking.bookingDate,
        price: chosenRoom.costPerNight,
        status: bookingStatus
      });
      return cards;
    }, [])
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hotel);


/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");


class Manager extends _Hotel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(roomRepo = [], bookingRepo = [], customerRepo = []) {
    super(bookingRepo, roomRepo, customerRepo),
    this.roomRepo = roomRepo,
    this.bookingRepo = bookingRepo,
    this.customerRepo = customerRepo
  }

  getAvailabilityOfRoomsPercentage(bookingRepo, roomRepo, date) {
    const bookedRooms = this.getAvailableRooms(bookingRepo, roomRepo, date);
    const percentage = Math.ceil(bookedRooms.length / roomRepo.length * 100);
    return percentage;
  }

  getRevenueOnDate(bookingRepo, roomRepo, date) {
    let bookingByDate = this.getInformationByValue(date, bookingRepo, 'bookingDate');
    return bookingByDate.reduce((revenue,  bookedRoom) => {
      roomRepo.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          revenue += parseFloat(room.costPerNight);
        }
      })
      return revenue;
    }, 0)
  }
}


//View their name, a list of all of their bookings, and the total amount they’ve spent
//Add a room booking for that user
//Delete any upcoming room bookings for that user (they cannot delete a booking from the past)
/* harmony default export */ __webpack_exports__["default"] = (Manager);


/***/ }),

/***/ "./src/Room.js":
/*!*********************!*\
  !*** ./src/Room.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Room {
  constructor(number = 0, roomType = '', bidet = false, bedSize = 'unknown', numBeds = 1, costPerNight = 1) {
    this.number = number,
    this.roomType = roomType,
    this.bidet = bidet,
    this.bedSize = bedSize,
    this.numBeds = numBeds,
    this.costPerNight = costPerNight
  }

  getPricePerMultipleNights(numberOfNights) {
    const totalPerNights = this.costPerNight * numberOfNights;
    return parseFloat(totalPerNights).toFixed(2);
  }

  getMainRoomInformation() {
    return {
      'Room number': this.number,
      'Room type': this.roomType,
      'Price': this.costPerNight
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Room);


/***/ }),

/***/ "./src/RoomRepo.js":
/*!*************************!*\
  !*** ./src/RoomRepo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");


class RoomRepo extends _Hotel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(roomRepo = []) {
    super([], roomRepo, []);
  }

  filterRoomsByCostPerNightDesc(roomData) {
    return roomData.sort((a, b) => {
      return b.costPerNight - a.costPerNight;
    })
  }

  filterRoomsByCostPerNightAsce(roomData) {
    return roomData.sort((a, b) => {
      return a.costPerNight - b.costPerNight;
    })
  }

  calculateTotalCostOfRooms(roomsData) {
    const totalAmount = roomsData.reduce((total, room) => {
      return total += room.costPerNight;
    }, 0)
    return totalAmount.toFixed(2);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RoomRepo);


/***/ }),

/***/ "./src/apiRequests.js":
/*!****************************!*\
  !*** ./src/apiRequests.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let apiRequest = {};

apiRequest.getHotelData = getHotelData;
apiRequest.makeAPostRequest = makeAPostRequest;
apiRequest.makeADeleteRequest = makeADeleteRequest;

function getHotelData(url, dataType) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data[dataType])
    .catch(error => console.log(error));
}

function makeAPostRequest(url, dataToPost) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToPost),
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

function makeADeleteRequest(url, dataToDelete) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToDelete),
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}
//-------Reference "POST"--------//
//  {
//     "userID": 48,
//     "date": "2019/09/23",
//     "roomNumber": 4
//  }
//-------Reference "DELETE"-----//
//  {
//    id: 12085397154
//  }

/* harmony default export */ __webpack_exports__["default"] = (apiRequest);


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domDisplay.js":
/*!***************************!*\
  !*** ./src/domDisplay.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domDisplay = {

  displayManagerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
    navBar.classList.remove('hidden');
    managerView.classList.remove('hidden');
    managerNavBar.classList.remove('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.add('hidden');
  },

  displayLoginView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
    navBar.classList.add('hidden');
    managerView.classList.add('hidden');
    managerNavBar.classList.add('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.remove('hidden');
  },

  displayCustomerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
    navBar.classList.remove('hidden');
    managerView.classList.add('hidden');
    managerNavBar.classList.add('hidden');
    customerView.classList.remove('hidden');
    customerNavBar.classList.remove('hidden');
    loginPageView.classList.add('hidden');
  },

  showErrorMessage(errorMessage, elementId, action) {
    let errorMessageElement = document.getElementById(elementId);
    errorMessageElement.classList[action]('hidden');
    errorMessageElement.innerText = errorMessage;
  },

  hideLoginError() {
    let errorMessageElement = document.getElementById('login-error');
    errorMessageElement.classList.add('hidden');
    errorMessageElement.innerText = '';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domDisplay);


/***/ }),

/***/ "./src/images/night-city.jpg":
/*!***********************************!*\
  !*** ./src/images/night-city.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/night-city.jpg";

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiRequests */ "./src/apiRequests.js");
/* harmony import */ var _domDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domDisplay */ "./src/domDisplay.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _CustomerRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomerRepo */ "./src/CustomerRepo.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Room */ "./src/Room.js");
/* harmony import */ var _RoomRepo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RoomRepo */ "./src/RoomRepo.js");
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Booking */ "./src/Booking.js");
/* harmony import */ var _BookingRepo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BookingRepo */ "./src/BookingRepo.js");
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");
















let usersData;
let bookingsData;
let roomsData;

let customerRepo;
let bookingRepo;
let roomRepo;
let currentManager = {};
let currentUser = {};
let availableRooms = [];
let hotelOverlook;

let receivedUsersData = _apiRequests__WEBPACK_IMPORTED_MODULE_2__["default"].getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'users');
let receivedBookingsData = _apiRequests__WEBPACK_IMPORTED_MODULE_2__["default"].getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings');
let receivedRoomsData = _apiRequests__WEBPACK_IMPORTED_MODULE_2__["default"].getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'rooms');

let loginBtn = document.getElementById('login-button');
let logOutBtn = document.getElementById('log-out');
let deleteBtn = document.getElementById('delete-button');

let loginPageView = document.getElementById('login-view');
let navBar = document.getElementById('nav-bar');
let managerView = document.getElementById('manager-page');
let managerNavBar = document.getElementById('manager-nav');
let customerView = document.getElementById('customer-page');
let customerNavBar = document.getElementById('user-nav');
let managerUserIdInput = document.getElementById('manager-user-id');
let listOfAvailabelRooms = document.getElementById('available-rooms-wrapper');
let customerAvailableRooms = document.getElementById('user-available-rooms');
let listOfBookings = document.getElementById('manager-bookings-container');
let customerDateInput = document.getElementById('user-date-input');
let customerRoomTypeInput = document.getElementById('user-room-data');
let managerRoomTypeInput = document.getElementById('manager-room-types');
let managerDateInput = document.getElementById('manager-date-choice');
let customerReserveUserId = document.getElementById('manager-user-id-input');
let dropDownMenu = document.querySelectorAll('select');
let today;

let infoMessages = {
  errorSearch: `We apologize for the inconvinience,
                there are no available rooms matching your search criterias.
                Please, try another date or room type!`,
  errorCancel: 'Reservation was canceled',
  errorData: 'Please, check User ID and Date to book a room',
  errorDataCustomer: 'Please, check your Date and Type to book a room',
  errorLogin: 'You have entered an invalid username or password',
  confirmMessage: 'You successfully booked room #',
  confirmDelete: 'You successfully deleted booking #',
  errorDelete: 'Check ID or status of the booking',
}

managerRoomTypeInput.addEventListener('change', filterAvailableRoomsTypeCustomer);
managerDateInput.addEventListener('change', filterAvailableRoomsByDate);
customerRoomTypeInput.addEventListener('change', filterAvailableRoomsTypeCustomer);
customerDateInput.addEventListener('change', filterAvailableRoomsByDateCustomer);
loginBtn.addEventListener('click', checkUserLoginInfo);
logOutBtn.addEventListener('click', logOutUsers);
deleteBtn.addEventListener('click', deleteBooking);
managerUserIdInput.addEventListener('keyup', getUserInfo);

Promise.all([receivedUsersData, receivedBookingsData, receivedRoomsData])
  .then(value => {
    usersData = value[0];
    bookingsData = value[1];
    roomsData = value[2];
    createHotelData()
  })
  .catch(error => console.log(error))

function createHotelData() {
  const customers = usersData.map(user => new _Customer__WEBPACK_IMPORTED_MODULE_4__["default"](user.id, user.name));
  const rooms = roomsData.map(room => new _Room__WEBPACK_IMPORTED_MODULE_7__["default"](room.number, room.roomType, room.bidet, room.bedSize, room.numBeds, room.costPerNight));
  const bookings = bookingsData.map(booking => new _Booking__WEBPACK_IMPORTED_MODULE_9__["default"](booking.id, booking.userID, booking.date, booking.roomNumber, booking.roomServiceCharges));
  customerRepo = new _CustomerRepo__WEBPACK_IMPORTED_MODULE_5__["default"](customers);
  bookingRepo = new _BookingRepo__WEBPACK_IMPORTED_MODULE_10__["default"](bookings);
  roomRepo = new _RoomRepo__WEBPACK_IMPORTED_MODULE_8__["default"](rooms);
  hotelOverlook = new _Hotel__WEBPACK_IMPORTED_MODULE_11__["default"](bookingRepo, roomRepo, customerRepo);
  today = hotelOverlook.getTodayDate();
}

function logOutUsers() {
  let allTextInputs = document.querySelectorAll('input');
  allTextInputs.forEach(textInput => {
    textInput.value = "";
  })
  dropDownMenu.forEach(menu => {
    menu.options[0].selected = 'selected';
  })
  currentUser = {};
  currentManager = {};
  _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].hideLoginError();
  _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].displayLoginView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
}

function validateCustomerId(customerId) {
  if (customerId.length > 0 && customerId.length <= 2) {
    let userId = parseInt(customerId);
    return (customerRepo.customerRepo.find(customer => customer.id === userId)) ? true : false;
  } else {
    return false;
  }
}

function handleManagerLogin() {
  currentManager = new _Manager__WEBPACK_IMPORTED_MODULE_6__["default"](roomRepo, bookingRepo, customerRepo);
  _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].displayManagerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
  displayTotalRevenue(today);
  displayTotayDate();
  displayTotalAvailableRooms(today);
  displayPercentageAvailableRooms(today);
  availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, today);
  displayAvailbeRooms(availableRooms);
}

function handleCustomerLogin(providedId) {
  currentUser = hotelOverlook.getInformationByValue(parseInt(providedId), customerRepo.customerRepo, 'id')[0];
  _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].displayCustomerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
  displayCustomerNameUserPage(providedId);
  let customerInfo = hotelOverlook.getInformationByValue(currentUser.id, bookingRepo.bookingRepo, 'userId');
  displayCustomerBookings(customerInfo, roomRepo);
  availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, today);
  displayAvailbeCustomerRooms(availableRooms);
}

function checkUserLoginInfo(event) {
  event.preventDefault();
  let usernameValue = document.getElementById('username-value').value;
  let passwordValue = document.getElementById('password-value').value;
  if (passwordValue !== 'overlook2020') {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorLogin, 'login-error', 'remove');
    return;
  }
  if (usernameValue === "manager") {
    handleManagerLogin();
  }
  let customerUsername = usernameValue.split('').splice(0, 8).join('').toLowerCase();
  let customerId = usernameValue.split('').splice(8).join('');
  if (customerUsername === 'customer' && validateCustomerId(customerId)) {
    handleCustomerLogin(customerId);
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorLogin, 'login-error', 'remove');
    return;
  }
}

function displayTotalRevenue(date) {
  let todayRevenue = currentManager.getRevenueOnDate(bookingRepo.bookingRepo, roomRepo.roomRepo, date);
  document.getElementById('today-revenue').innerText = `$ ${todayRevenue.toFixed(2)}`;
}

function displayTotayDate() {
  document.getElementById('today-date').innerText = `${hotelOverlook.getTodayDate()}`;
}

function displayTotalAvailableRooms(date) {
  document.getElementById('available-rooms').innerText = `${hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, date).length}`;
}

function displayPercentageAvailableRooms(date) {
  let availabilityPercentage = currentManager.getAvailabilityOfRoomsPercentage(bookingRepo.bookingRepo, roomRepo.roomRepo, date);
  document.querySelector('.circular-chart').innerHTML =
      `
        <path class="circular-chart__circle"
          stroke-dasharray="${availabilityPercentage}, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" id="percentage">${availabilityPercentage}%</text>
      `
}

function displayBookings(bookings, roomRepo, userId, customerRepo) {
  listOfBookings.innerHTML = '';
  let cards = hotelOverlook.filterBookingByDate(hotelOverlook.getUserCardsRoomCards(bookings, roomRepo));
  displayCustomerTotalAmount(cards);
  displayCustomerName(userId, customerRepo);
  cards.forEach(card => {
    appendCard(listOfBookings, card);
  });
}

function displayCustomerBookings(bookings, roomRepo) {
  let cards = hotelOverlook.filterBookingByDate(hotelOverlook.getUserCardsRoomCards(bookings, roomRepo));
  let customerBookingsContainer = document.getElementById('user-bookings-container');
  displayCustomerTotalUserPage(cards);
  cards.forEach(card => {
    appendCard(customerBookingsContainer, card);
  });
}

function appendCard(container, card) {
  let miniBookingCard =

    `<div id="booking-${card.bookingId}" class="card-container">
      <div class="booking-card">
        <div class="card-left-side">
          <img class="room-img" src="./images/night-city.jpg" alt="building-image">
          <div class="card-details">
            <p class="room-detail">Reservation ID: "${card.bookingId}"</p>
            <p class="room-detail">Room Type: ${card.roomType}</p>
            <p class="room-detail">Date: <span id="date-booking">${card.bookingDate}</span></p>
            <p class="room-detail">${card.status}</p>
          </div>
        </div>
        <div class="card-right-side">
          <div class="cr-price">$ <span id="price-booking">${card.price}</span></div>
        </div>
       </div>
    </div>
    `
  container.innerHTML  += miniBookingCard;
}

function deleteBooking() {
  event.preventDefault();
  const bookingId = document.getElementById('manager-booking-id').value;
  const parseBookingId = parseInt(bookingId) == bookingId ? parseInt(bookingId) : bookingId;
  const bookingToBeDeleted = hotelOverlook.getInformationByValue(parseBookingId, bookingRepo.bookingRepo, 'id');
  if (bookingToBeDeleted.length > 0 && hotelOverlook.determineUpcomingBookings(bookingToBeDeleted[0]) === "Upcoming") {
    let foundBooking = {"id": parseBookingId};
    _apiRequests__WEBPACK_IMPORTED_MODULE_2__["default"].makeADeleteRequest('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', foundBooking)
      .then(deletedBooking => {
        const bookingIndex = bookingRepo.bookingRepo.findIndex(booking => booking.id === parseBookingId);
        bookingRepo.bookingRepo.splice(bookingIndex, 1);
        getUserInfo();
        _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.confirmDelete + ' ' + bookingId, 'no-rooms-message-1', 'remove')
        document.getElementById('manager-booking-id').value = '';
      });
  } else if (bookingToBeDeleted.length === 0 || hotelOverlook.determineUpcomingBookings(bookingToBeDeleted[0]) === "Completed") {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorDelete, 'no-rooms-message-1', 'remove');
  }
}

function displayCustomerTotalAmount(customerBookings) {
  let amount = hotelOverlook.getTotalAmountSpendByUser(customerBookings).toFixed(2);
  document.getElementById('user-total').innerText = amount;
}

function displayCustomerName(userId, customerRepo) {
  let customerName = customerRepo.customerRepo[parseInt(userId) - 1];
  if (customerName) {
    document.getElementById('user-name').innerText = customerName.name;
  } else {
    document.getElementById('user-name').innerText = 'Enter Valid User ID';
  }
}

function getUserInfo() {
  if (Object.keys(currentUser).length > 0) {
    let customerInfo = hotelOverlook.getInformationByValue(currentUser.id, bookingRepo.bookingRepo, 'userId');
    displayCustomerBookings(customerInfo, roomRepo);
  } else if (Object.keys(currentUser).length === 0) {
    let userIdInput = parseInt(managerUserIdInput.value);
    if (!userIdInput) {
      document.getElementById('user-name').innerText = 'Enter Valid User ID';
      return;
    }
    let customerInfo = hotelOverlook.getInformationByValue(parseInt(userIdInput), bookingRepo.bookingRepo, 'userId');
    displayBookings(customerInfo, roomRepo, userIdInput, customerRepo, listOfBookings);
  }
}

function filterAvailableRoomsByDate() {
  if (this.value) {
    let newDate = this.value.replaceAll('-', '/');
    validateTheUserInputDate(newDate, listOfAvailabelRooms, displayAvailbeRooms, 'no-rooms-message')
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(
      infoMessages.errorSearch, 'no-rooms-message', 'remove');
  }
}

function filterAvailableRoomsByDateCustomer() {
  if (this.value) {
    let newDate = this.value.replaceAll('-', '/');
    validateTheUserInputDate(newDate, customerAvailableRooms, displayAvailbeCustomerRooms, 'no-rooms-message-customer')
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(
      infoMessages.errorSearch, 'no-rooms-message-customer', 'remove');
  }
}

function validateTheUserInputDate(newDate, container, method, errorContainer) {
  let userDateChoice = new Date(newDate + ' ').getTime();
  if (userDateChoice < new Date(today).getTime()) {
    container.innerHTML = '';
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorSearch, errorContainer, 'add');
    container.innerText = "There are no available rooms for this date. Please choose the correct date"
  }  else {
    availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, newDate);
    method(availableRooms);
    document.querySelectorAll('select').forEach(menu => {
      menu.options[0].selected = 'selected'
    });
  }
}

function displayAvailbeRooms(availableRooms) {
  listOfAvailabelRooms.innerHTML = '';
  if (!availableRooms.length) {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorSearch, 'no-rooms-message', 'remove');
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorSearch, 'no-rooms-message', 'add');
  }
  availableRooms.forEach(card => {
    let miniRoomCard =

      `<div id="${card.number}" class="book-room-card">
        <img class="book-room-img" src="./images/night-city.jpg" alt="building-image">
        <div class="book-card-details">
          <p class="book-room-detail">Room #<span id="room-number">${card.number}</p>
          <p class="book-room-detail">1 night $<span id="room-per-night">${card.costPerNight}</span></p>
          <button id="btn-${card.number}"class='btn room-btn-manager'>BOOK</button>
        </div>
      </div>
      `
    listOfAvailabelRooms.innerHTML += miniRoomCard;
  });
  addEventListenersToBook('.room-btn-manager', confirmReservation);
}

function addEventListenersToBook(buttonElement, method) {
  document.querySelectorAll(buttonElement).forEach(button => {
    button.addEventListener('click', method);
  });
}

function displayAvailbeCustomerRooms(availableRooms) {
  customerAvailableRooms.innerHTML = '';
  if (!availableRooms.length) {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorSearch, 'no-rooms-message-customer', 'remove');
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorSearch, 'no-rooms-message-customer', 'add');
  }
  availableRooms.forEach(card => {
    let miniRoomCard =

      `<div id="${card.number}" class="book-room-card">
        <img class="book-room-img" src="./images/night-city.jpg" alt="building-image">
        <div class="book-card-details">
          <p class="book-room-detail">Room #<span id="room-number">${card.number}</p>
          <p class="book-room-detail">1 night $<span id="room-per-night">${card.costPerNight}</span></p>
          <button id="btn-${card.number}"class='btn room-btn'>BOOK</button>
        </div>
      </div>
      `
    customerAvailableRooms.innerHTML += miniRoomCard;
  });
  addEventListenersToBook('.room-btn', confirmReservationCustomer);
}

function postAReservation(roomNumber, reservation, errorMessage) {
  _apiRequests__WEBPACK_IMPORTED_MODULE_2__["default"].makeAPostRequest('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', reservation)
    .then(postedBooking => {
      bookingRepo.bookingRepo.push(new _Booking__WEBPACK_IMPORTED_MODULE_9__["default"](postedBooking.id, postedBooking.userID, postedBooking.date, postedBooking.roomNumber));
      getUserInfo();
      _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.confirmMessage + '' + roomNumber, errorMessage, 'remove');
    })
}

function bookARoom(roomNumber) {
  let currentReservaton = {
    "userID": parseInt(customerReserveUserId.value),
    "date": managerDateInput.value.replaceAll('-', '/'),
    "roomNumber": parseInt(roomNumber)
  }
  postAReservation(roomNumber, currentReservaton, 'no-rooms-message');
}

function bookARoomCustomer(roomNumber) {
  let currentReservaton = {
    "userID": currentUser.id,
    "date": customerDateInput.value.replaceAll('-', '/'),
    "roomNumber": parseInt(roomNumber)
  }
  postAReservation(roomNumber, currentReservaton, 'no-rooms-message-customer');
}

function confirmReservation() {
  if (validateCustomerId(customerReserveUserId.value) && managerDateInput.value) {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage('', 'no-rooms-message', 'add');
    let customerID = customerReserveUserId.value;
    let bookingDetails = this.id.replace('btn-', '');
    var result = confirm(`Would you like to book Room ${bookingDetails} for a Customer#${customerID}`);
    if (result) {
      bookARoom(bookingDetails)
    } else {
      _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorCancel, 'no-rooms-message', 'remove');
    }
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorData, 'no-rooms-message', 'remove');
  }
}

function confirmReservationCustomer() {
  if (customerDateInput.value) {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage('', 'no-rooms-message-customer', 'add');
    let customerName = currentUser.name;
    let bookingDetails = this.id.replace('btn-', '');
    var result = confirm(`Would you like to book Room ${bookingDetails}, ${customerName}`);
    if (result) {
      bookARoomCustomer(bookingDetails)
    } else {
      _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorCancel, 'no-rooms-message-customer', 'remove');
    }
  } else {
    _domDisplay__WEBPACK_IMPORTED_MODULE_3__["default"].showErrorMessage(infoMessages.errorDataCustomer, 'no-rooms-message-customer', 'remove');
  }
}

function displayCustomerTotalUserPage(customerBookings) {
  let amount = hotelOverlook.getTotalAmountSpendByUser(customerBookings).toFixed(2);
  document.getElementById('all-bookings-amount').innerText = amount;
}

function displayCustomerNameUserPage(userId) {
  let customerName = customerRepo.customerRepo[parseInt(userId) - 1];
  document.getElementById('user-title').innerText = customerName.name;
}

function filterAvailableRoomsTypeCustomer() {
  let filteredRooms = [];
  if (this.value === 'residential suite') {
    filteredRooms = hotelOverlook.getInformationByValue('residential suite', availableRooms, 'roomType');
  } else if (this.value === 'suite') {
    filteredRooms = hotelOverlook.getInformationByValue('suite', availableRooms, 'roomType');
  } else if (this.value === 'single room') {
    filteredRooms = hotelOverlook.getInformationByValue('single room', availableRooms, 'roomType');
  } else if (this.value === 'junior suite') {
    filteredRooms = hotelOverlook.getInformationByValue('junior suite', availableRooms, 'roomType');
  } else if (this.value === 'show all') {
    filteredRooms = availableRooms
  }
  if (Object.keys(currentUser).length > 0) {
    displayAvailbeCustomerRooms(filteredRooms);
  } else if (Object.keys(currentUser).length === 0) {
    displayAvailbeRooms(filteredRooms);
  }
  return this.value;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb29raW5nUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0N1c3RvbWVyUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb21SZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlSZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzEzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9uaWdodC1jaXR5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3R1cmluZy1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNG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QU0sbURBQVU7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQSx3REFBd0QsZUFBZSxrQkFBa0IsV0FBVztBQUNwRztBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU0sbURBQVU7QUFDaEI7QUFDQSxHQUFHO0FBQ0gsSUFBSSxtREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBO0FBQ0Esd0RBQXdELGVBQWUsSUFBSSxhQUFhO0FBQ3hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTSxtREFBVTtBQUNoQjtBQUNBLEdBQUc7QUFDSCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9uaWdodC1jaXR5LmpwZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMDAlOyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtc2l6ZTogNTUlOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtc2l6ZTogNzUlOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA4MCU7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiAxMDAlOyB9IH1cXG4gIGh0bWwgYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4jd2VsY29tZS10aXRsZSB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbiNsb2dpbl9fYmFja2dyb3VuZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZpbHRlcjogYmx1cig1cHgpOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbjogYXV0byAyZW07IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgYmFja2dyb3VuZDogIzAxMTYxRTtcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5ncmVldGluZ19fbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luOiBhdXRvIDBlbTsgfVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMTI0NTU5OyB9XFxuICAubG9naW4tcGFnZV9fYm94IHtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjMTI0NTU5O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogI0VGRjZFMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cXG5cXG5oMjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogI0VGRjZFMDtcXG4gIHRvcDogNzBweDtcXG4gIGxlZnQ6IDEwJTsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjRUZGNkUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG5cXG4jbG9naW4tZm9ybSB7XFxuICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuXFxuI2xvZ2luLWVycm9yIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDJzO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4uaW5wdXQtYm9yZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcblxcbi50ZXh0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0FFQzNCMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogI0VGRjZFMDsgfVxcblxcbi5ib3JkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjRUZGNkUwOyB9XFxuXFxuLnRleHQ6Zm9jdXMgfiAuYm9yZGVyLFxcbi50ZXh0OnZhbGlkIH4gLmJvcmRlciB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5sb2dpbi1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDE0cHg7XFxuICBjb2xvcjogI0FFQzNCMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnRleHQ6Zm9jdXMgfiBsYWJlbCxcXG4udGV4dDp2YWxpZCB+IGxhYmVsIHtcXG4gIHRvcDogLTEycHg7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6ICNFRkY2RTA7IH1cXG5cXG4uYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRUMzQjA7XFxuICBjb2xvcjogI0FFQzNCMDtcXG4gIHRyYW5zaXRpb246IC40czsgfVxcblxcbi5idG46aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI0VGRjZFMDtcXG4gIGNvbG9yOiAjRUZGNkUwOyB9XFxuXFxuLmJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTI0NTU5O1xcbiAgY29sb3I6ICMxMjQ1NTk7XFxuICBiYWNrZ3JvdW5kOiAjRUZGNkUwOyB9XFxuXFxuLmxpZ2h0LWJ0biB7XFxuICB3aWR0aDogNmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBtYXJnaW46IGF1dG8gMWVtOyB9XFxuXFxuLm5hdmlnYXRpb25fX2l0ZW1fX3RpdGxlLWxpZ2h0IHtcXG4gIGNvbG9yOiAjRUZGNkUwO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5uYXZpZ2F0aW9uX19pdGVtX190aXRsZS1saWdodDpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjZFMDsgfVxcblxcbi5uYXZpZ2F0aW9uX19pdGVtX190aXRsZS1saWdodDpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjZFMDsgfVxcblxcbi5tYW5hZ2VyLXZpZXdfX2luZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpOyB9XFxuXFxuLnZpZXctaGVhZGVycy1kYXJrIHtcXG4gIGNvbG9yOiAjMDExNjFFO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBtYXJnaW46IDEuNWVtIDAgMWVtIDA7IH1cXG5cXG5kaXYuaW5mby1jYXJkcyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDFlbSBhdXRvOyB9XFxuXFxuLmNhcmQge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTI0NTU5O1xcbiAgd2lkdGg6IDIwZW07XFxuICBoZWlnaHQ6IDMwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNhcmRfX3RpdGxlIHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGJhY2tncm91bmQ6ICMxMjQ1NTk7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuY2FyZF9faW5mbyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY29sb3I6ICMxMjQ1NTk7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZDpmb2N1cyB7XFxuICBib3gtc2hhZG93OiA0cHggM3B4IDRweCAjMTI0NTU5OyB9XFxuXFxuI3RvZGF5LWRhdGUge1xcbiAgbWFyZ2luLXRvcDogNmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuI3RvZGF5LXJldmVudWUge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbiNhdmFpbGFibGUtcm9vbXMge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGNvbG9yOiAjMTI0NTU5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDI1MHB4OyB9XFxuICAuY2lyY3VsYXItY2hhcnRfX2NpcmNsZSB7XFxuICAgIHN0cm9rZTogIzRDQzc5MDtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAyLjg7XFxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcblxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDsgfSB9XFxuXFxuI3BlcmNlbnRhZ2Uge1xcbiAgY29sb3I6ICMxMjQ1NTk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC40ZW07XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlOyB9XFxuXFxuLm1hbmFnZXItdmlld19fdXNlci1pbmZvIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMWVtO1xcbiAgYmFja2dyb3VuZDogIzEyNDU1OTtcXG4gIGNvbG9yOiAjRUZGNkUwOyB9XFxuXFxuLnVzZXItaW5mby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luOiAyZW0gMWVtIDAgMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7IH1cXG5cXG4udXNlci1pbmZvLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW46IDJlbSAxZW0gMCAxZW07IH1cXG5cXG4ubWFuYWdlci1mb3JtLXRpdGxlcyB7XFxuICBtYXJnaW46IDBlbSAxZW0gMCAwOyB9XFxuXFxuI2ZpbmRCb29raW5nSWQge1xcbiAgbWFyZ2luOiAwZW0gMWVtIDAgMWVtOyB9XFxuXFxuI3VzZXItbmFtZSB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07IH1cXG5cXG4jdXNlci10b3RhbCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07IH1cXG5cXG4uaW5wdXQtaWQge1xcbiAgd2lkdGg6IDllbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0FFQzNCMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogI0VGRjZFMDsgfVxcblxcbi5pbnB1dC1pZDpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0VGRjZFMDsgfVxcblxcbiNtYW5hZ2VyLWRhdGUtY2hvaWNlOmZvY3VzLFxcbiNtYW5hZ2VyLXVzZXItaWQtaW5wdXQ6Zm9jdXMsXFxuI21hbmFnZXItcm9vbS10eXBlczpmb2N1cyxcXG4jdXNlci1kYXRlLWlucHV0OmZvY3VzLFxcbiN1c2VyLXJvb20tZGF0YTpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAxMTYxRTsgfVxcblxcbi5pbnB1dC1kYXJrIHtcXG4gIGNvbG9yOiAjMTI0NTU5OyB9XFxuXFxuLmJvb2tpbmdzLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDNlbSAxZW07XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5yb29tLWltZyB7XFxuICBoZWlnaHQ6IDEwMHB4OyB9XFxuXFxuLmJvb2tpbmctY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XFxuICBjb2xvcjogIzEyNDU1OTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwZW07IH1cXG5cXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggI0VGRjZFMDsgfVxcblxcbi5jYXJkLWRldGFpbHMge1xcbiAgbWFyZ2luOiBhdXRvIDFlbTsgfVxcblxcbi5yb29tLWRldGFpbCB7XFxuICBtYXJnaW46IDAuNGVtOyB9XFxuXFxuI3ByaWNlLWJvb2tpbmcge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAjZGVsZXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGhlaWdodDogMi4yZW07XFxuICAgIG1hcmdpbjogYXV0byAxZW07XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07IH0gfVxcblxcbi5jYXJkLWxlZnQtc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5tYW5hZ2VyLXZpZXdfX2Jvb2stcm9vbSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDFlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XFxuICBjb2xvcjogIzEyNDU1OTsgfVxcblxcbi51c2VyLWluZm8tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5kYXJrLWlucHV0IHtcXG4gIGNvbG9yOiAjMTI0NTU5O1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgd2lkdGg6IDE1ZW07IH1cXG5cXG4jbm8tcm9vbXMtbWVzc2FnZSB7XFxuICBtYXJnaW46IGF1dG8gM2VtOyB9XFxuXFxuI25vLXJvb21zLW1lc3NhZ2UtMSB7XFxuICBtYXJnaW46IGF1dG8gMC41ZW07IH1cXG5cXG4jbm8tcm9vbXMtbWVzc2FnZS1jdXN0b21lciB7XFxuICBtYXJnaW46IDFlbTsgfVxcblxcbiNtYW5hZ2VyLWRhdGEtaW5wdXQge1xcbiAgbWFyZ2luOiAxZW0gMWVtIDBlbSAwZW07IH1cXG5cXG4jbWFuYWdlci1yb29tLWlucHV0IHtcXG4gIG1hcmdpbjogMGVtIDFlbSAwZW0gMGVtOyB9XFxuXFxuLmxlZnQtc2lkZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uYXZhaWxhYmxlLXJvb21zLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDQwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDNlbSBhdXRvO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5ib29rLXJvb20tY2FyZCB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiAxNGVtO1xcbiAgaGVpZ2h0OiAyMGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI0VGRjZFMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjQ1NTk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uYm9vay1yb29tLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggIzEyNDU1OTsgfVxcblxcbi5ib29rLXJvb20taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4ZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRUZGNkUwOyB9XFxuXFxuLmJvb2stY2FyZC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5yb29tLWJ0biB7XFxuICBoZWlnaHQ6IDJlbTsgfVxcblxcbi5yb29tLWJ0bi1tYW5hZ2VyIHtcXG4gIGhlaWdodDogMmVtOyB9XFxuXFxuLmJvb2stcm9vbS1kZXRhaWwge1xcbiAgbWFyZ2luOiAxZW0gYXV0bzsgfVxcblxcbiNjdXN0b21lci1wYWdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyNDU1OTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi51c2VyLXZpZXdfX3Jlc2VydmF0aW9ucyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI0NTU5O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogM2VtIDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwZW0gMWVtIDFlbSAxZW07IH1cXG5cXG4udXNlci1oZWFkZXItbGlnaHQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyNDU1OTtcXG4gIGNvbG9yOiAjRUZGNkUwOyB9XFxuXFxuLnVzZXItdmlld19fYm9vay1yb29tIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XFxuICBtYXJnaW46IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLnVzZXItYm9vay1yb29tLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDRlbTsgfVxcblxcbiN1c2VyLXJvb20taW5wdXQge1xcbiAgbWFyZ2luOiAxZW0gMWVtIDBlbSAwZW07IH1cXG5cXG4jdG90YWwtc3BlbnQge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2ZW07XFxuICBsZWZ0OiAxZW07XFxuICBtYXJnaW4tbGVmdDogMC4zZW07IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3RvcihpZCA9ICd1bmtub3duJywgdXNlcklkLCBib29raW5nRGF0ZSwgcm9vbU51bWJlciwgcm9vbVNlcnZpY2VDaGFyZ2VzID0gW10pIHtcbiAgICB0aGlzLmlkID0gaWQsXG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQsXG4gICAgdGhpcy5ib29raW5nRGF0ZSA9IGJvb2tpbmdEYXRlLFxuICAgIHRoaXMucm9vbU51bWJlciA9IHJvb21OdW1iZXIsXG4gICAgdGhpcy5yb29tU2VydmljZUNoYXJnZXMgPSByb29tU2VydmljZUNoYXJnZXNcbiAgfVxuXG4gIGdldFRvdGFsU2VydmljZUNoYXJnZXMoKSB7XG4gICAgY29uc3QgdG90YWxBbW91bnQgPSB0aGlzLnJvb21TZXJ2aWNlQ2hhcmdlcy5yZWR1Y2UoKHRvdGFsLCBjaGFyZ2UpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbCArPSBjaGFyZ2UucHJpY2U7XG4gICAgfSwgMClcbiAgICByZXR1cm4gdG90YWxBbW91bnQudG9GaXhlZCgyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nO1xuIiwiaW1wb3J0IEhvdGVsIGZyb20gJy4vSG90ZWwnO1xuXG5jbGFzcyBCb29raW5nUmVwbyBleHRlbmRzIEhvdGVsIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ1JlcG8gPSBbXSkge1xuICAgIHN1cGVyKGJvb2tpbmdSZXBvLCBbXSwgW10pO1xuICB9XG5cbiAgZ2V0Qm9va2luZ3NJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tpbmdSZXBvLnJlZHVjZSgoaWRSZXN1bHQsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmlkID09PSBpZCkge1xuICAgICAgICBpZFJlc3VsdC5pZCA9IGJvb2tpbmcuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWRSZXN1bHQ7XG4gICAgfSwge30pXG4gIH1cblxuICBnZXRCb29raW5nc0J5VXNlcklkQW5kRGF0ZSh1c2VySWQsIGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5nUmVwby5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gKGJvb2tpbmcudXNlcklkID09PSB1c2VySWQgJiYgYm9va2luZy5ib29raW5nRGF0ZSA9PT0gZGF0ZSk7XG4gICAgfSlcbiAgfVxuXG4gIGdldFRvdGFsT2ZBbGxSb29tQ2hhcmdlcyhyb29tcykge1xuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gcm9vbXMucmVkdWNlKCh0b3RhbCwgYm9va2luZykgPT4ge1xuICAgICAgcmV0dXJuIHRvdGFsICs9IHBhcnNlRmxvYXQoYm9va2luZy5nZXRUb3RhbFNlcnZpY2VDaGFyZ2VzKCkpO1xuICAgIH0sIDApXG4gICAgcmV0dXJuIHRvdGFsQW1vdW50LnRvRml4ZWQoMik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ1JlcG87XG4iLCJpbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCdcblxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgc3VwZXIoW10sIFtdLCBbXSlcbiAgICB0aGlzLmlkID0gaWQsXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0Rmlyc3ROYW1lKCkge1xuICAgIGxldCBmaXJzdE5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4gZmlyc3ROYW1lWzBdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyO1xuIiwiaW1wb3J0IEhvdGVsIGZyb20gJy4vSG90ZWwuanMnXG5cbmNsYXNzIEN1c3RvbWVyUmVwbyBleHRlbmRzIEhvdGVsIHtcbiAgY29uc3RydWN0b3IoY3VzdG9tZXJSZXBvID0gW10pIHtcbiAgICBzdXBlciggW10sIFtdLCBjdXN0b21lclJlcG8pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyUmVwbztcbiIsImNsYXNzIEhvdGVsIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ1JlcG8gPSBbXSwgcm9vbVJlcG8gPSBbXSwgY3VzdG9tZXJSZXBvID0gW10pIHtcbiAgICB0aGlzLmJvb2tpbmdSZXBvID0gYm9va2luZ1JlcG8sXG4gICAgdGhpcy5yb29tUmVwbyA9IHJvb21SZXBvLFxuICAgIHRoaXMuY3VzdG9tZXJSZXBvID0gY3VzdG9tZXJSZXBvXG4gIH1cblxuICBnZXRJbmZvcm1hdGlvbkJ5VmFsdWUodmFsdWUsIGRhdGEsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKGRhdGFQaWVjZSA9PiB7XG4gICAgICByZXR1cm4gcHJvcGVydHkgPT09IG51bGwgPyB2YWx1ZSA9PT0gZGF0YVBpZWNlIDogdmFsdWUgPT09IGRhdGFQaWVjZVtwcm9wZXJ0eV07XG4gICAgfSlcbiAgfVxuXG4gIGRldGVybWluZVVwY29taW5nQm9va2luZ3MoYm9va2luZykge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgYm9va2luZ0RhdGUgPSBuZXcgRGF0ZShib29raW5nLmJvb2tpbmdEYXRlKS5nZXRUaW1lKCk7XG4gICAgaWYgKGJvb2tpbmdEYXRlID4gdG9kYXlEYXRlKSB7XG4gICAgICByZXR1cm4gJ1VwY29taW5nJztcbiAgICB9XG4gICAgcmV0dXJuICdDb21wbGV0ZWQnO1xuICB9XG5cbiAgZ2V0VG9kYXlEYXRlKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXRlID0gKFwiMFwiICsgdG9kYXlEYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgIGxldCBtb250aCA9IChcIjBcIiArICh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XG4gICAgbGV0IHllYXIgPSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYCR7eWVhcn0vJHttb250aH0vJHtkYXRlfWA7XG4gIH1cblxuICBmaWx0ZXJCb29raW5nQnlEYXRlKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmJvb2tpbmdEYXRlID4gYi5ib29raW5nRGF0ZSA/IC0xIDogMTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXZhaWxhYmxlUm9vbXMoYm9va2luZ1JlcG8sIHJvb21SZXBvLCBkYXRlKSB7XG4gICAgbGV0IGJvb2tpbmdCeURhdGUgPSB0aGlzLmdldEluZm9ybWF0aW9uQnlWYWx1ZShkYXRlLCBib29raW5nUmVwbywgJ2Jvb2tpbmdEYXRlJyk7XG4gICAgbGV0IGF2YWlsYWJsZVJvb21zID0gcm9vbVJlcG9cbiAgICAgIC5maWx0ZXIocm9vbSA9PiAhYm9va2luZ0J5RGF0ZVxuICAgICAgICAuc29tZShib29raW5nID0+IHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpKTtcbiAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXM7XG4gIH1cblxuICBnZXRUb3RhbEFtb3VudFNwZW5kQnlVc2VyKGN1c3RvbWVyQm9va2luZ3MpIHtcbiAgICByZXR1cm4gY3VzdG9tZXJCb29raW5ncy5yZWR1Y2UoKHRvdGFsQW1vdW50LCByb29tKSA9PiB7XG4gICAgICByZXR1cm4gdG90YWxBbW91bnQgKz0gcm9vbS5wcmljZTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGdldFVzZXJDYXJkc1Jvb21DYXJkcyhib29raW5ncywgcm9vbVJlcG8pIHtcbiAgICByZXR1cm4gYm9va2luZ3MucmVkdWNlKChjYXJkcywgYm9va2luZykgPT4ge1xuICAgICAgbGV0IGJvb2tpbmdTdGF0dXMgPSB0aGlzLmRldGVybWluZVVwY29taW5nQm9va2luZ3MoYm9va2luZyk7XG4gICAgICBsZXQgY2hvc2VuUm9vbSA9IHJvb21SZXBvLnJvb21SZXBvLmZpbmQocm9vbSA9PiB7XG4gICAgICAgIHJldHVybiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyO1xuICAgICAgfSk7XG4gICAgICBjYXJkcy5wdXNoKHtcbiAgICAgICAgYm9va2luZ0lkOiBib29raW5nLmlkLFxuICAgICAgICByb29tVHlwZTogY2hvc2VuUm9vbS5yb29tVHlwZSxcbiAgICAgICAgYm9va2luZ0RhdGU6IGJvb2tpbmcuYm9va2luZ0RhdGUsXG4gICAgICAgIHByaWNlOiBjaG9zZW5Sb29tLmNvc3RQZXJOaWdodCxcbiAgICAgICAgc3RhdHVzOiBib29raW5nU3RhdHVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYXJkcztcbiAgICB9LCBbXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbDtcbiIsImltcG9ydCBIb3RlbCBmcm9tICcuL0hvdGVsJ1xuXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgSG90ZWwge1xuICBjb25zdHJ1Y3Rvcihyb29tUmVwbyA9IFtdLCBib29raW5nUmVwbyA9IFtdLCBjdXN0b21lclJlcG8gPSBbXSkge1xuICAgIHN1cGVyKGJvb2tpbmdSZXBvLCByb29tUmVwbywgY3VzdG9tZXJSZXBvKSxcbiAgICB0aGlzLnJvb21SZXBvID0gcm9vbVJlcG8sXG4gICAgdGhpcy5ib29raW5nUmVwbyA9IGJvb2tpbmdSZXBvLFxuICAgIHRoaXMuY3VzdG9tZXJSZXBvID0gY3VzdG9tZXJSZXBvXG4gIH1cblxuICBnZXRBdmFpbGFiaWxpdHlPZlJvb21zUGVyY2VudGFnZShib29raW5nUmVwbywgcm9vbVJlcG8sIGRhdGUpIHtcbiAgICBjb25zdCBib29rZWRSb29tcyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm9vbXMoYm9va2luZ1JlcG8sIHJvb21SZXBvLCBkYXRlKTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5jZWlsKGJvb2tlZFJvb21zLmxlbmd0aCAvIHJvb21SZXBvLmxlbmd0aCAqIDEwMCk7XG4gICAgcmV0dXJuIHBlcmNlbnRhZ2U7XG4gIH1cblxuICBnZXRSZXZlbnVlT25EYXRlKGJvb2tpbmdSZXBvLCByb29tUmVwbywgZGF0ZSkge1xuICAgIGxldCBib29raW5nQnlEYXRlID0gdGhpcy5nZXRJbmZvcm1hdGlvbkJ5VmFsdWUoZGF0ZSwgYm9va2luZ1JlcG8sICdib29raW5nRGF0ZScpO1xuICAgIHJldHVybiBib29raW5nQnlEYXRlLnJlZHVjZSgocmV2ZW51ZSwgIGJvb2tlZFJvb20pID0+IHtcbiAgICAgIHJvb21SZXBvLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmIChyb29tLm51bWJlciA9PT0gYm9va2VkUm9vbS5yb29tTnVtYmVyKSB7XG4gICAgICAgICAgcmV2ZW51ZSArPSBwYXJzZUZsb2F0KHJvb20uY29zdFBlck5pZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXZlbnVlO1xuICAgIH0sIDApXG4gIH1cbn1cblxuXG4vL1ZpZXcgdGhlaXIgbmFtZSwgYSBsaXN0IG9mIGFsbCBvZiB0aGVpciBib29raW5ncywgYW5kIHRoZSB0b3RhbCBhbW91bnQgdGhleeKAmXZlIHNwZW50XG4vL0FkZCBhIHJvb20gYm9va2luZyBmb3IgdGhhdCB1c2VyXG4vL0RlbGV0ZSBhbnkgdXBjb21pbmcgcm9vbSBib29raW5ncyBmb3IgdGhhdCB1c2VyICh0aGV5IGNhbm5vdCBkZWxldGUgYSBib29raW5nIGZyb20gdGhlIHBhc3QpXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiY2xhc3MgUm9vbSB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciA9IDAsIHJvb21UeXBlID0gJycsIGJpZGV0ID0gZmFsc2UsIGJlZFNpemUgPSAndW5rbm93bicsIG51bUJlZHMgPSAxLCBjb3N0UGVyTmlnaHQgPSAxKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXIsXG4gICAgdGhpcy5yb29tVHlwZSA9IHJvb21UeXBlLFxuICAgIHRoaXMuYmlkZXQgPSBiaWRldCxcbiAgICB0aGlzLmJlZFNpemUgPSBiZWRTaXplLFxuICAgIHRoaXMubnVtQmVkcyA9IG51bUJlZHMsXG4gICAgdGhpcy5jb3N0UGVyTmlnaHQgPSBjb3N0UGVyTmlnaHRcbiAgfVxuXG4gIGdldFByaWNlUGVyTXVsdGlwbGVOaWdodHMobnVtYmVyT2ZOaWdodHMpIHtcbiAgICBjb25zdCB0b3RhbFBlck5pZ2h0cyA9IHRoaXMuY29zdFBlck5pZ2h0ICogbnVtYmVyT2ZOaWdodHM7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodG90YWxQZXJOaWdodHMpLnRvRml4ZWQoMik7XG4gIH1cblxuICBnZXRNYWluUm9vbUluZm9ybWF0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnUm9vbSBudW1iZXInOiB0aGlzLm51bWJlcixcbiAgICAgICdSb29tIHR5cGUnOiB0aGlzLnJvb21UeXBlLFxuICAgICAgJ1ByaWNlJzogdGhpcy5jb3N0UGVyTmlnaHRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcbiIsImltcG9ydCBIb3RlbCBmcm9tICcuL0hvdGVsJztcblxuY2xhc3MgUm9vbVJlcG8gZXh0ZW5kcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKHJvb21SZXBvID0gW10pIHtcbiAgICBzdXBlcihbXSwgcm9vbVJlcG8sIFtdKTtcbiAgfVxuXG4gIGZpbHRlclJvb21zQnlDb3N0UGVyTmlnaHREZXNjKHJvb21EYXRhKSB7XG4gICAgcmV0dXJuIHJvb21EYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBiLmNvc3RQZXJOaWdodCAtIGEuY29zdFBlck5pZ2h0O1xuICAgIH0pXG4gIH1cblxuICBmaWx0ZXJSb29tc0J5Q29zdFBlck5pZ2h0QXNjZShyb29tRGF0YSkge1xuICAgIHJldHVybiByb29tRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5jb3N0UGVyTmlnaHQgLSBiLmNvc3RQZXJOaWdodDtcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxDb3N0T2ZSb29tcyhyb29tc0RhdGEpIHtcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHJvb21zRGF0YS5yZWR1Y2UoKHRvdGFsLCByb29tKSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgfSwgMClcbiAgICByZXR1cm4gdG90YWxBbW91bnQudG9GaXhlZCgyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tUmVwbztcbiIsImxldCBhcGlSZXF1ZXN0ID0ge307XG5cbmFwaVJlcXVlc3QuZ2V0SG90ZWxEYXRhID0gZ2V0SG90ZWxEYXRhO1xuYXBpUmVxdWVzdC5tYWtlQVBvc3RSZXF1ZXN0ID0gbWFrZUFQb3N0UmVxdWVzdDtcbmFwaVJlcXVlc3QubWFrZUFEZWxldGVSZXF1ZXN0ID0gbWFrZUFEZWxldGVSZXF1ZXN0O1xuXG5mdW5jdGlvbiBnZXRIb3RlbERhdGEodXJsLCBkYXRhVHlwZSkge1xuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGFbZGF0YVR5cGVdKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBtYWtlQVBvc3RSZXF1ZXN0KHVybCwgZGF0YVRvUG9zdCkge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvUG9zdCksXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIG1ha2VBRGVsZXRlUmVxdWVzdCh1cmwsIGRhdGFUb0RlbGV0ZSkge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9EZWxldGUpLFxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufVxuLy8tLS0tLS0tUmVmZXJlbmNlIFwiUE9TVFwiLS0tLS0tLS0vL1xuLy8gIHtcbi8vICAgICBcInVzZXJJRFwiOiA0OCxcbi8vICAgICBcImRhdGVcIjogXCIyMDE5LzA5LzIzXCIsXG4vLyAgICAgXCJyb29tTnVtYmVyXCI6IDRcbi8vICB9XG4vLy0tLS0tLS1SZWZlcmVuY2UgXCJERUxFVEVcIi0tLS0tLy9cbi8vICB7XG4vLyAgICBpZDogMTIwODUzOTcxNTRcbi8vICB9XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVJlcXVlc3Q7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJsZXQgZG9tRGlzcGxheSA9IHtcblxuICBkaXNwbGF5TWFuYWdlclZpZXcobmF2QmFyLCBtYW5hZ2VyVmlldywgbWFuYWdlck5hdkJhciwgY3VzdG9tZXJWaWV3LCBjdXN0b21lck5hdkJhciwgbG9naW5QYWdlVmlldykge1xuICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyTmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGN1c3RvbWVyVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjdXN0b21lck5hdkJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBsb2dpblBhZ2VWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGRpc3BsYXlMb2dpblZpZXcobmF2QmFyLCBtYW5hZ2VyVmlldywgbWFuYWdlck5hdkJhciwgY3VzdG9tZXJWaWV3LCBjdXN0b21lck5hdkJhciwgbG9naW5QYWdlVmlldykge1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyTmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGN1c3RvbWVyVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjdXN0b21lck5hdkJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBsb2dpblBhZ2VWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGRpc3BsYXlDdXN0b21lclZpZXcobmF2QmFyLCBtYW5hZ2VyVmlldywgbWFuYWdlck5hdkJhciwgY3VzdG9tZXJWaWV3LCBjdXN0b21lck5hdkJhciwgbG9naW5QYWdlVmlldykge1xuICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyTmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGN1c3RvbWVyVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjdXN0b21lck5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBsb2dpblBhZ2VWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuXG4gIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlLCBlbGVtZW50SWQsIGFjdGlvbikge1xuICAgIGxldCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdFthY3Rpb25dKCdoaWRkZW4nKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgfSxcblxuICBoaWRlTG9naW5FcnJvcigpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1lcnJvcicpO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21EaXNwbGF5O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9uaWdodC1jaXR5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvdHVyaW5nLWxvZ28ucG5nXCI7IiwiXG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nJ1xuXG5pbXBvcnQgYXBpUmVxdWVzdCBmcm9tICcuL2FwaVJlcXVlc3RzJztcbmltcG9ydCBkb21EaXNwbGF5IGZyb20gJy4vZG9tRGlzcGxheSc7XG5cbmltcG9ydCBDdXN0b21lciBmcm9tICcuL0N1c3RvbWVyJztcbmltcG9ydCBDdXN0b21lclJlcG8gZnJvbSAnLi9DdXN0b21lclJlcG8nO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgUm9vbVJlcG8gZnJvbSAnLi9Sb29tUmVwbyc7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuL0Jvb2tpbmcnO1xuaW1wb3J0IEJvb2tpbmdSZXBvIGZyb20gJy4vQm9va2luZ1JlcG8nO1xuaW1wb3J0IEhvdGVsIGZyb20gJy4vSG90ZWwnO1xuXG5sZXQgdXNlcnNEYXRhO1xubGV0IGJvb2tpbmdzRGF0YTtcbmxldCByb29tc0RhdGE7XG5cbmxldCBjdXN0b21lclJlcG87XG5sZXQgYm9va2luZ1JlcG87XG5sZXQgcm9vbVJlcG87XG5sZXQgY3VycmVudE1hbmFnZXIgPSB7fTtcbmxldCBjdXJyZW50VXNlciA9IHt9O1xubGV0IGF2YWlsYWJsZVJvb21zID0gW107XG5sZXQgaG90ZWxPdmVybG9vaztcblxubGV0IHJlY2VpdmVkVXNlcnNEYXRhID0gYXBpUmVxdWVzdC5nZXRIb3RlbERhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJywgJ3VzZXJzJyk7XG5sZXQgcmVjZWl2ZWRCb29raW5nc0RhdGEgPSBhcGlSZXF1ZXN0LmdldEhvdGVsRGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCAnYm9va2luZ3MnKTtcbmxldCByZWNlaXZlZFJvb21zRGF0YSA9IGFwaVJlcXVlc3QuZ2V0SG90ZWxEYXRhKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tcycsICdyb29tcycpO1xuXG5sZXQgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYnV0dG9uJyk7XG5sZXQgbG9nT3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1vdXQnKTtcbmxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWJ1dHRvbicpO1xuXG5sZXQgbG9naW5QYWdlVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi12aWV3Jyk7XG5sZXQgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1iYXInKTtcbmxldCBtYW5hZ2VyVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyLXBhZ2UnKTtcbmxldCBtYW5hZ2VyTmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXItbmF2Jyk7XG5sZXQgY3VzdG9tZXJWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWVyLXBhZ2UnKTtcbmxldCBjdXN0b21lck5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hdicpO1xubGV0IG1hbmFnZXJVc2VySWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyLXVzZXItaWQnKTtcbmxldCBsaXN0T2ZBdmFpbGFiZWxSb29tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmFpbGFibGUtcm9vbXMtd3JhcHBlcicpO1xubGV0IGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1hdmFpbGFibGUtcm9vbXMnKTtcbmxldCBsaXN0T2ZCb29raW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyLWJvb2tpbmdzLWNvbnRhaW5lcicpO1xubGV0IGN1c3RvbWVyRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZGF0ZS1pbnB1dCcpO1xubGV0IGN1c3RvbWVyUm9vbVR5cGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXJvb20tZGF0YScpO1xubGV0IG1hbmFnZXJSb29tVHlwZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXItcm9vbS10eXBlcycpO1xubGV0IG1hbmFnZXJEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlci1kYXRlLWNob2ljZScpO1xubGV0IGN1c3RvbWVyUmVzZXJ2ZVVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyLXVzZXItaWQtaW5wdXQnKTtcbmxldCBkcm9wRG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbmxldCB0b2RheTtcblxubGV0IGluZm9NZXNzYWdlcyA9IHtcbiAgZXJyb3JTZWFyY2g6IGBXZSBhcG9sb2dpemUgZm9yIHRoZSBpbmNvbnZpbmllbmNlLFxuICAgICAgICAgICAgICAgIHRoZXJlIGFyZSBubyBhdmFpbGFibGUgcm9vbXMgbWF0Y2hpbmcgeW91ciBzZWFyY2ggY3JpdGVyaWFzLlxuICAgICAgICAgICAgICAgIFBsZWFzZSwgdHJ5IGFub3RoZXIgZGF0ZSBvciByb29tIHR5cGUhYCxcbiAgZXJyb3JDYW5jZWw6ICdSZXNlcnZhdGlvbiB3YXMgY2FuY2VsZWQnLFxuICBlcnJvckRhdGE6ICdQbGVhc2UsIGNoZWNrIFVzZXIgSUQgYW5kIERhdGUgdG8gYm9vayBhIHJvb20nLFxuICBlcnJvckRhdGFDdXN0b21lcjogJ1BsZWFzZSwgY2hlY2sgeW91ciBEYXRlIGFuZCBUeXBlIHRvIGJvb2sgYSByb29tJyxcbiAgZXJyb3JMb2dpbjogJ1lvdSBoYXZlIGVudGVyZWQgYW4gaW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcsXG4gIGNvbmZpcm1NZXNzYWdlOiAnWW91IHN1Y2Nlc3NmdWxseSBib29rZWQgcm9vbSAjJyxcbiAgY29uZmlybURlbGV0ZTogJ1lvdSBzdWNjZXNzZnVsbHkgZGVsZXRlZCBib29raW5nICMnLFxuICBlcnJvckRlbGV0ZTogJ0NoZWNrIElEIG9yIHN0YXR1cyBvZiB0aGUgYm9va2luZycsXG59XG5cbm1hbmFnZXJSb29tVHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlckF2YWlsYWJsZVJvb21zVHlwZUN1c3RvbWVyKTtcbm1hbmFnZXJEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsdGVyQXZhaWxhYmxlUm9vbXNCeURhdGUpO1xuY3VzdG9tZXJSb29tVHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlckF2YWlsYWJsZVJvb21zVHlwZUN1c3RvbWVyKTtcbmN1c3RvbWVyRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlckF2YWlsYWJsZVJvb21zQnlEYXRlQ3VzdG9tZXIpO1xubG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1VzZXJMb2dpbkluZm8pO1xubG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nT3V0VXNlcnMpO1xuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQm9va2luZyk7XG5tYW5hZ2VyVXNlcklkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBnZXRVc2VySW5mbyk7XG5cblByb21pc2UuYWxsKFtyZWNlaXZlZFVzZXJzRGF0YSwgcmVjZWl2ZWRCb29raW5nc0RhdGEsIHJlY2VpdmVkUm9vbXNEYXRhXSlcbiAgLnRoZW4odmFsdWUgPT4ge1xuICAgIHVzZXJzRGF0YSA9IHZhbHVlWzBdO1xuICAgIGJvb2tpbmdzRGF0YSA9IHZhbHVlWzFdO1xuICAgIHJvb21zRGF0YSA9IHZhbHVlWzJdO1xuICAgIGNyZWF0ZUhvdGVsRGF0YSgpXG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdGVsRGF0YSgpIHtcbiAgY29uc3QgY3VzdG9tZXJzID0gdXNlcnNEYXRhLm1hcCh1c2VyID0+IG5ldyBDdXN0b21lcih1c2VyLmlkLCB1c2VyLm5hbWUpKTtcbiAgY29uc3Qgcm9vbXMgPSByb29tc0RhdGEubWFwKHJvb20gPT4gbmV3IFJvb20ocm9vbS5udW1iZXIsIHJvb20ucm9vbVR5cGUsIHJvb20uYmlkZXQsIHJvb20uYmVkU2l6ZSwgcm9vbS5udW1CZWRzLCByb29tLmNvc3RQZXJOaWdodCkpO1xuICBjb25zdCBib29raW5ncyA9IGJvb2tpbmdzRGF0YS5tYXAoYm9va2luZyA9PiBuZXcgQm9va2luZyhib29raW5nLmlkLCBib29raW5nLnVzZXJJRCwgYm9va2luZy5kYXRlLCBib29raW5nLnJvb21OdW1iZXIsIGJvb2tpbmcucm9vbVNlcnZpY2VDaGFyZ2VzKSk7XG4gIGN1c3RvbWVyUmVwbyA9IG5ldyBDdXN0b21lclJlcG8oY3VzdG9tZXJzKTtcbiAgYm9va2luZ1JlcG8gPSBuZXcgQm9va2luZ1JlcG8oYm9va2luZ3MpO1xuICByb29tUmVwbyA9IG5ldyBSb29tUmVwbyhyb29tcyk7XG4gIGhvdGVsT3Zlcmxvb2sgPSBuZXcgSG90ZWwoYm9va2luZ1JlcG8sIHJvb21SZXBvLCBjdXN0b21lclJlcG8pO1xuICB0b2RheSA9IGhvdGVsT3Zlcmxvb2suZ2V0VG9kYXlEYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGxvZ091dFVzZXJzKCkge1xuICBsZXQgYWxsVGV4dElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gIGFsbFRleHRJbnB1dHMuZm9yRWFjaCh0ZXh0SW5wdXQgPT4ge1xuICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pXG4gIGRyb3BEb3duTWVudS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgIG1lbnUub3B0aW9uc1swXS5zZWxlY3RlZCA9ICdzZWxlY3RlZCc7XG4gIH0pXG4gIGN1cnJlbnRVc2VyID0ge307XG4gIGN1cnJlbnRNYW5hZ2VyID0ge307XG4gIGRvbURpc3BsYXkuaGlkZUxvZ2luRXJyb3IoKTtcbiAgZG9tRGlzcGxheS5kaXNwbGF5TG9naW5WaWV3KG5hdkJhciwgbWFuYWdlclZpZXcsIG1hbmFnZXJOYXZCYXIsIGN1c3RvbWVyVmlldywgY3VzdG9tZXJOYXZCYXIsIGxvZ2luUGFnZVZpZXcpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbWVySWQoY3VzdG9tZXJJZCkge1xuICBpZiAoY3VzdG9tZXJJZC5sZW5ndGggPiAwICYmIGN1c3RvbWVySWQubGVuZ3RoIDw9IDIpIHtcbiAgICBsZXQgdXNlcklkID0gcGFyc2VJbnQoY3VzdG9tZXJJZCk7XG4gICAgcmV0dXJuIChjdXN0b21lclJlcG8uY3VzdG9tZXJSZXBvLmZpbmQoY3VzdG9tZXIgPT4gY3VzdG9tZXIuaWQgPT09IHVzZXJJZCkpID8gdHJ1ZSA6IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYW5hZ2VyTG9naW4oKSB7XG4gIGN1cnJlbnRNYW5hZ2VyID0gbmV3IE1hbmFnZXIocm9vbVJlcG8sIGJvb2tpbmdSZXBvLCBjdXN0b21lclJlcG8pO1xuICBkb21EaXNwbGF5LmRpc3BsYXlNYW5hZ2VyVmlldyhuYXZCYXIsIG1hbmFnZXJWaWV3LCBtYW5hZ2VyTmF2QmFyLCBjdXN0b21lclZpZXcsIGN1c3RvbWVyTmF2QmFyLCBsb2dpblBhZ2VWaWV3KTtcbiAgZGlzcGxheVRvdGFsUmV2ZW51ZSh0b2RheSk7XG4gIGRpc3BsYXlUb3RheURhdGUoKTtcbiAgZGlzcGxheVRvdGFsQXZhaWxhYmxlUm9vbXModG9kYXkpO1xuICBkaXNwbGF5UGVyY2VudGFnZUF2YWlsYWJsZVJvb21zKHRvZGF5KTtcbiAgYXZhaWxhYmxlUm9vbXMgPSBob3RlbE92ZXJsb29rLmdldEF2YWlsYWJsZVJvb21zKGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCByb29tUmVwby5yb29tUmVwbywgdG9kYXkpO1xuICBkaXNwbGF5QXZhaWxiZVJvb21zKGF2YWlsYWJsZVJvb21zKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ3VzdG9tZXJMb2dpbihwcm92aWRlZElkKSB7XG4gIGN1cnJlbnRVc2VyID0gaG90ZWxPdmVybG9vay5nZXRJbmZvcm1hdGlvbkJ5VmFsdWUocGFyc2VJbnQocHJvdmlkZWRJZCksIGN1c3RvbWVyUmVwby5jdXN0b21lclJlcG8sICdpZCcpWzBdO1xuICBkb21EaXNwbGF5LmRpc3BsYXlDdXN0b21lclZpZXcobmF2QmFyLCBtYW5hZ2VyVmlldywgbWFuYWdlck5hdkJhciwgY3VzdG9tZXJWaWV3LCBjdXN0b21lck5hdkJhciwgbG9naW5QYWdlVmlldyk7XG4gIGRpc3BsYXlDdXN0b21lck5hbWVVc2VyUGFnZShwcm92aWRlZElkKTtcbiAgbGV0IGN1c3RvbWVySW5mbyA9IGhvdGVsT3Zlcmxvb2suZ2V0SW5mb3JtYXRpb25CeVZhbHVlKGN1cnJlbnRVc2VyLmlkLCBib29raW5nUmVwby5ib29raW5nUmVwbywgJ3VzZXJJZCcpO1xuICBkaXNwbGF5Q3VzdG9tZXJCb29raW5ncyhjdXN0b21lckluZm8sIHJvb21SZXBvKTtcbiAgYXZhaWxhYmxlUm9vbXMgPSBob3RlbE92ZXJsb29rLmdldEF2YWlsYWJsZVJvb21zKGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCByb29tUmVwby5yb29tUmVwbywgdG9kYXkpO1xuICBkaXNwbGF5QXZhaWxiZUN1c3RvbWVyUm9vbXMoYXZhaWxhYmxlUm9vbXMpO1xufVxuXG5mdW5jdGlvbiBjaGVja1VzZXJMb2dpbkluZm8oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHVzZXJuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtdmFsdWUnKS52YWx1ZTtcbiAgbGV0IHBhc3N3b3JkVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsdWUnKS52YWx1ZTtcbiAgaWYgKHBhc3N3b3JkVmFsdWUgIT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKGluZm9NZXNzYWdlcy5lcnJvckxvZ2luLCAnbG9naW4tZXJyb3InLCAncmVtb3ZlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh1c2VybmFtZVZhbHVlID09PSBcIm1hbmFnZXJcIikge1xuICAgIGhhbmRsZU1hbmFnZXJMb2dpbigpO1xuICB9XG4gIGxldCBjdXN0b21lclVzZXJuYW1lID0gdXNlcm5hbWVWYWx1ZS5zcGxpdCgnJykuc3BsaWNlKDAsIDgpLmpvaW4oJycpLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBjdXN0b21lcklkID0gdXNlcm5hbWVWYWx1ZS5zcGxpdCgnJykuc3BsaWNlKDgpLmpvaW4oJycpO1xuICBpZiAoY3VzdG9tZXJVc2VybmFtZSA9PT0gJ2N1c3RvbWVyJyAmJiB2YWxpZGF0ZUN1c3RvbWVySWQoY3VzdG9tZXJJZCkpIHtcbiAgICBoYW5kbGVDdXN0b21lckxvZ2luKGN1c3RvbWVySWQpO1xuICB9IGVsc2Uge1xuICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZShpbmZvTWVzc2FnZXMuZXJyb3JMb2dpbiwgJ2xvZ2luLWVycm9yJywgJ3JlbW92ZScpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxSZXZlbnVlKGRhdGUpIHtcbiAgbGV0IHRvZGF5UmV2ZW51ZSA9IGN1cnJlbnRNYW5hZ2VyLmdldFJldmVudWVPbkRhdGUoYm9va2luZ1JlcG8uYm9va2luZ1JlcG8sIHJvb21SZXBvLnJvb21SZXBvLCBkYXRlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXJldmVudWUnKS5pbm5lclRleHQgPSBgJCAke3RvZGF5UmV2ZW51ZS50b0ZpeGVkKDIpfWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb3RheURhdGUoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1kYXRlJykuaW5uZXJUZXh0ID0gYCR7aG90ZWxPdmVybG9vay5nZXRUb2RheURhdGUoKX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxBdmFpbGFibGVSb29tcyhkYXRlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmFpbGFibGUtcm9vbXMnKS5pbm5lclRleHQgPSBgJHtob3RlbE92ZXJsb29rLmdldEF2YWlsYWJsZVJvb21zKGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCByb29tUmVwby5yb29tUmVwbywgZGF0ZSkubGVuZ3RofWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQZXJjZW50YWdlQXZhaWxhYmxlUm9vbXMoZGF0ZSkge1xuICBsZXQgYXZhaWxhYmlsaXR5UGVyY2VudGFnZSA9IGN1cnJlbnRNYW5hZ2VyLmdldEF2YWlsYWJpbGl0eU9mUm9vbXNQZXJjZW50YWdlKGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCByb29tUmVwby5yb29tUmVwbywgZGF0ZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjdWxhci1jaGFydCcpLmlubmVySFRNTCA9XG4gICAgICBgXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiY2lyY3VsYXItY2hhcnRfX2NpcmNsZVwiXG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIiR7YXZhaWxhYmlsaXR5UGVyY2VudGFnZX0sIDEwMFwiXG4gICAgICAgICAgZD1cIk0xOCAyLjA4NDVcbiAgICAgICAgICAgIGEgMTUuOTE1NSAxNS45MTU1IDAgMCAxIDAgMzEuODMxXG4gICAgICAgICAgICBhIDE1LjkxNTUgMTUuOTE1NSAwIDAgMSAwIC0zMS44MzFcIlxuICAgICAgICAvPlxuICAgICAgICA8dGV4dCB4PVwiMThcIiB5PVwiMjAuMzVcIiBpZD1cInBlcmNlbnRhZ2VcIj4ke2F2YWlsYWJpbGl0eVBlcmNlbnRhZ2V9JTwvdGV4dD5cbiAgICAgIGBcbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvb2tpbmdzKGJvb2tpbmdzLCByb29tUmVwbywgdXNlcklkLCBjdXN0b21lclJlcG8pIHtcbiAgbGlzdE9mQm9va2luZ3MuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBjYXJkcyA9IGhvdGVsT3Zlcmxvb2suZmlsdGVyQm9va2luZ0J5RGF0ZShob3RlbE92ZXJsb29rLmdldFVzZXJDYXJkc1Jvb21DYXJkcyhib29raW5ncywgcm9vbVJlcG8pKTtcbiAgZGlzcGxheUN1c3RvbWVyVG90YWxBbW91bnQoY2FyZHMpO1xuICBkaXNwbGF5Q3VzdG9tZXJOYW1lKHVzZXJJZCwgY3VzdG9tZXJSZXBvKTtcbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBhcHBlbmRDYXJkKGxpc3RPZkJvb2tpbmdzLCBjYXJkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKGJvb2tpbmdzLCByb29tUmVwbykge1xuICBsZXQgY2FyZHMgPSBob3RlbE92ZXJsb29rLmZpbHRlckJvb2tpbmdCeURhdGUoaG90ZWxPdmVybG9vay5nZXRVc2VyQ2FyZHNSb29tQ2FyZHMoYm9va2luZ3MsIHJvb21SZXBvKSk7XG4gIGxldCBjdXN0b21lckJvb2tpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItYm9va2luZ3MtY29udGFpbmVyJyk7XG4gIGRpc3BsYXlDdXN0b21lclRvdGFsVXNlclBhZ2UoY2FyZHMpO1xuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGFwcGVuZENhcmQoY3VzdG9tZXJCb29raW5nc0NvbnRhaW5lciwgY2FyZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDYXJkKGNvbnRhaW5lciwgY2FyZCkge1xuICBsZXQgbWluaUJvb2tpbmdDYXJkID1cblxuICAgIGA8ZGl2IGlkPVwiYm9va2luZy0ke2NhcmQuYm9va2luZ0lkfVwiIGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nLWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdC1zaWRlXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInJvb20taW1nXCIgc3JjPVwiLi9pbWFnZXMvbmlnaHQtY2l0eS5qcGdcIiBhbHQ9XCJidWlsZGluZy1pbWFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS1kZXRhaWxcIj5SZXNlcnZhdGlvbiBJRDogXCIke2NhcmQuYm9va2luZ0lkfVwiPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyb29tLWRldGFpbFwiPlJvb20gVHlwZTogJHtjYXJkLnJvb21UeXBlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS1kZXRhaWxcIj5EYXRlOiA8c3BhbiBpZD1cImRhdGUtYm9va2luZ1wiPiR7Y2FyZC5ib29raW5nRGF0ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyb29tLWRldGFpbFwiPiR7Y2FyZC5zdGF0dXN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcmlnaHQtc2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjci1wcmljZVwiPiQgPHNwYW4gaWQ9XCJwcmljZS1ib29raW5nXCI+JHtjYXJkLnByaWNlfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICBjb250YWluZXIuaW5uZXJIVE1MICArPSBtaW5pQm9va2luZ0NhcmQ7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvb2tpbmcoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGJvb2tpbmdJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyLWJvb2tpbmctaWQnKS52YWx1ZTtcbiAgY29uc3QgcGFyc2VCb29raW5nSWQgPSBwYXJzZUludChib29raW5nSWQpID09IGJvb2tpbmdJZCA/IHBhcnNlSW50KGJvb2tpbmdJZCkgOiBib29raW5nSWQ7XG4gIGNvbnN0IGJvb2tpbmdUb0JlRGVsZXRlZCA9IGhvdGVsT3Zlcmxvb2suZ2V0SW5mb3JtYXRpb25CeVZhbHVlKHBhcnNlQm9va2luZ0lkLCBib29raW5nUmVwby5ib29raW5nUmVwbywgJ2lkJyk7XG4gIGlmIChib29raW5nVG9CZURlbGV0ZWQubGVuZ3RoID4gMCAmJiBob3RlbE92ZXJsb29rLmRldGVybWluZVVwY29taW5nQm9va2luZ3MoYm9va2luZ1RvQmVEZWxldGVkWzBdKSA9PT0gXCJVcGNvbWluZ1wiKSB7XG4gICAgbGV0IGZvdW5kQm9va2luZyA9IHtcImlkXCI6IHBhcnNlQm9va2luZ0lkfTtcbiAgICBhcGlSZXF1ZXN0Lm1ha2VBRGVsZXRlUmVxdWVzdCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCBmb3VuZEJvb2tpbmcpXG4gICAgICAudGhlbihkZWxldGVkQm9va2luZyA9PiB7XG4gICAgICAgIGNvbnN0IGJvb2tpbmdJbmRleCA9IGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLmZpbmRJbmRleChib29raW5nID0+IGJvb2tpbmcuaWQgPT09IHBhcnNlQm9va2luZ0lkKTtcbiAgICAgICAgYm9va2luZ1JlcG8uYm9va2luZ1JlcG8uc3BsaWNlKGJvb2tpbmdJbmRleCwgMSk7XG4gICAgICAgIGdldFVzZXJJbmZvKCk7XG4gICAgICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZShpbmZvTWVzc2FnZXMuY29uZmlybURlbGV0ZSArICcgJyArIGJvb2tpbmdJZCwgJ25vLXJvb21zLW1lc3NhZ2UtMScsICdyZW1vdmUnKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlci1ib29raW5nLWlkJykudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuICB9IGVsc2UgaWYgKGJvb2tpbmdUb0JlRGVsZXRlZC5sZW5ndGggPT09IDAgfHwgaG90ZWxPdmVybG9vay5kZXRlcm1pbmVVcGNvbWluZ0Jvb2tpbmdzKGJvb2tpbmdUb0JlRGVsZXRlZFswXSkgPT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICBkb21EaXNwbGF5LnNob3dFcnJvck1lc3NhZ2UoaW5mb01lc3NhZ2VzLmVycm9yRGVsZXRlLCAnbm8tcm9vbXMtbWVzc2FnZS0xJywgJ3JlbW92ZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclRvdGFsQW1vdW50KGN1c3RvbWVyQm9va2luZ3MpIHtcbiAgbGV0IGFtb3VudCA9IGhvdGVsT3Zlcmxvb2suZ2V0VG90YWxBbW91bnRTcGVuZEJ5VXNlcihjdXN0b21lckJvb2tpbmdzKS50b0ZpeGVkKDIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci10b3RhbCcpLmlubmVyVGV4dCA9IGFtb3VudDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyTmFtZSh1c2VySWQsIGN1c3RvbWVyUmVwbykge1xuICBsZXQgY3VzdG9tZXJOYW1lID0gY3VzdG9tZXJSZXBvLmN1c3RvbWVyUmVwb1twYXJzZUludCh1c2VySWQpIC0gMV07XG4gIGlmIChjdXN0b21lck5hbWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykuaW5uZXJUZXh0ID0gY3VzdG9tZXJOYW1lLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpLmlubmVyVGV4dCA9ICdFbnRlciBWYWxpZCBVc2VyIElEJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVc2VySW5mbygpIHtcbiAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRVc2VyKS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGN1c3RvbWVySW5mbyA9IGhvdGVsT3Zlcmxvb2suZ2V0SW5mb3JtYXRpb25CeVZhbHVlKGN1cnJlbnRVc2VyLmlkLCBib29raW5nUmVwby5ib29raW5nUmVwbywgJ3VzZXJJZCcpO1xuICAgIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKGN1c3RvbWVySW5mbywgcm9vbVJlcG8pO1xuICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRVc2VyKS5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgdXNlcklkSW5wdXQgPSBwYXJzZUludChtYW5hZ2VyVXNlcklkSW5wdXQudmFsdWUpO1xuICAgIGlmICghdXNlcklkSW5wdXQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKS5pbm5lclRleHQgPSAnRW50ZXIgVmFsaWQgVXNlciBJRCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjdXN0b21lckluZm8gPSBob3RlbE92ZXJsb29rLmdldEluZm9ybWF0aW9uQnlWYWx1ZShwYXJzZUludCh1c2VySWRJbnB1dCksIGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCAndXNlcklkJyk7XG4gICAgZGlzcGxheUJvb2tpbmdzKGN1c3RvbWVySW5mbywgcm9vbVJlcG8sIHVzZXJJZElucHV0LCBjdXN0b21lclJlcG8sIGxpc3RPZkJvb2tpbmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJBdmFpbGFibGVSb29tc0J5RGF0ZSgpIHtcbiAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICBsZXQgbmV3RGF0ZSA9IHRoaXMudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJyk7XG4gICAgdmFsaWRhdGVUaGVVc2VySW5wdXREYXRlKG5ld0RhdGUsIGxpc3RPZkF2YWlsYWJlbFJvb21zLCBkaXNwbGF5QXZhaWxiZVJvb21zLCAnbm8tcm9vbXMtbWVzc2FnZScpXG4gIH0gZWxzZSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKFxuICAgICAgaW5mb01lc3NhZ2VzLmVycm9yU2VhcmNoLCAnbm8tcm9vbXMtbWVzc2FnZScsICdyZW1vdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJBdmFpbGFibGVSb29tc0J5RGF0ZUN1c3RvbWVyKCkge1xuICBpZiAodGhpcy52YWx1ZSkge1xuICAgIGxldCBuZXdEYXRlID0gdGhpcy52YWx1ZS5yZXBsYWNlQWxsKCctJywgJy8nKTtcbiAgICB2YWxpZGF0ZVRoZVVzZXJJbnB1dERhdGUobmV3RGF0ZSwgY3VzdG9tZXJBdmFpbGFibGVSb29tcywgZGlzcGxheUF2YWlsYmVDdXN0b21lclJvb21zLCAnbm8tcm9vbXMtbWVzc2FnZS1jdXN0b21lcicpXG4gIH0gZWxzZSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKFxuICAgICAgaW5mb01lc3NhZ2VzLmVycm9yU2VhcmNoLCAnbm8tcm9vbXMtbWVzc2FnZS1jdXN0b21lcicsICdyZW1vdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRoZVVzZXJJbnB1dERhdGUobmV3RGF0ZSwgY29udGFpbmVyLCBtZXRob2QsIGVycm9yQ29udGFpbmVyKSB7XG4gIGxldCB1c2VyRGF0ZUNob2ljZSA9IG5ldyBEYXRlKG5ld0RhdGUgKyAnICcpLmdldFRpbWUoKTtcbiAgaWYgKHVzZXJEYXRlQ2hvaWNlIDwgbmV3IERhdGUodG9kYXkpLmdldFRpbWUoKSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBkb21EaXNwbGF5LnNob3dFcnJvck1lc3NhZ2UoaW5mb01lc3NhZ2VzLmVycm9yU2VhcmNoLCBlcnJvckNvbnRhaW5lciwgJ2FkZCcpO1xuICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSBcIlRoZXJlIGFyZSBubyBhdmFpbGFibGUgcm9vbXMgZm9yIHRoaXMgZGF0ZS4gUGxlYXNlIGNob29zZSB0aGUgY29ycmVjdCBkYXRlXCJcbiAgfSAgZWxzZSB7XG4gICAgYXZhaWxhYmxlUm9vbXMgPSBob3RlbE92ZXJsb29rLmdldEF2YWlsYWJsZVJvb21zKGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLCByb29tUmVwby5yb29tUmVwbywgbmV3RGF0ZSk7XG4gICAgbWV0aG9kKGF2YWlsYWJsZVJvb21zKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgICAgbWVudS5vcHRpb25zWzBdLnNlbGVjdGVkID0gJ3NlbGVjdGVkJ1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGJlUm9vbXMoYXZhaWxhYmxlUm9vbXMpIHtcbiAgbGlzdE9mQXZhaWxhYmVsUm9vbXMuaW5uZXJIVE1MID0gJyc7XG4gIGlmICghYXZhaWxhYmxlUm9vbXMubGVuZ3RoKSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKGluZm9NZXNzYWdlcy5lcnJvclNlYXJjaCwgJ25vLXJvb21zLW1lc3NhZ2UnLCAncmVtb3ZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKGluZm9NZXNzYWdlcy5lcnJvclNlYXJjaCwgJ25vLXJvb21zLW1lc3NhZ2UnLCAnYWRkJyk7XG4gIH1cbiAgYXZhaWxhYmxlUm9vbXMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBsZXQgbWluaVJvb21DYXJkID1cblxuICAgICAgYDxkaXYgaWQ9XCIke2NhcmQubnVtYmVyfVwiIGNsYXNzPVwiYm9vay1yb29tLWNhcmRcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImJvb2stcm9vbS1pbWdcIiBzcmM9XCIuL2ltYWdlcy9uaWdodC1jaXR5LmpwZ1wiIGFsdD1cImJ1aWxkaW5nLWltYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib29rLWNhcmQtZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYm9vay1yb29tLWRldGFpbFwiPlJvb20gIzxzcGFuIGlkPVwicm9vbS1udW1iZXJcIj4ke2NhcmQubnVtYmVyfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImJvb2stcm9vbS1kZXRhaWxcIj4xIG5pZ2h0ICQ8c3BhbiBpZD1cInJvb20tcGVyLW5pZ2h0XCI+JHtjYXJkLmNvc3RQZXJOaWdodH08L3NwYW4+PC9wPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4tJHtjYXJkLm51bWJlcn1cImNsYXNzPSdidG4gcm9vbS1idG4tbWFuYWdlcic+Qk9PSzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgIGxpc3RPZkF2YWlsYWJlbFJvb21zLmlubmVySFRNTCArPSBtaW5pUm9vbUNhcmQ7XG4gIH0pO1xuICBhZGRFdmVudExpc3RlbmVyc1RvQm9vaygnLnJvb20tYnRuLW1hbmFnZXInLCBjb25maXJtUmVzZXJ2YXRpb24pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyc1RvQm9vayhidXR0b25FbGVtZW50LCBtZXRob2QpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChidXR0b25FbGVtZW50KS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWV0aG9kKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGJlQ3VzdG9tZXJSb29tcyhhdmFpbGFibGVSb29tcykge1xuICBjdXN0b21lckF2YWlsYWJsZVJvb21zLmlubmVySFRNTCA9ICcnO1xuICBpZiAoIWF2YWlsYWJsZVJvb21zLmxlbmd0aCkge1xuICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZShpbmZvTWVzc2FnZXMuZXJyb3JTZWFyY2gsICduby1yb29tcy1tZXNzYWdlLWN1c3RvbWVyJywgJ3JlbW92ZScpO1xuICB9IGVsc2Uge1xuICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZShpbmZvTWVzc2FnZXMuZXJyb3JTZWFyY2gsICduby1yb29tcy1tZXNzYWdlLWN1c3RvbWVyJywgJ2FkZCcpO1xuICB9XG4gIGF2YWlsYWJsZVJvb21zLmZvckVhY2goY2FyZCA9PiB7XG4gICAgbGV0IG1pbmlSb29tQ2FyZCA9XG5cbiAgICAgIGA8ZGl2IGlkPVwiJHtjYXJkLm51bWJlcn1cIiBjbGFzcz1cImJvb2stcm9vbS1jYXJkXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJib29rLXJvb20taW1nXCIgc3JjPVwiLi9pbWFnZXMvbmlnaHQtY2l0eS5qcGdcIiBhbHQ9XCJidWlsZGluZy1pbWFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1jYXJkLWRldGFpbHNcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImJvb2stcm9vbS1kZXRhaWxcIj5Sb29tICM8c3BhbiBpZD1cInJvb20tbnVtYmVyXCI+JHtjYXJkLm51bWJlcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJib29rLXJvb20tZGV0YWlsXCI+MSBuaWdodCAkPHNwYW4gaWQ9XCJyb29tLXBlci1uaWdodFwiPiR7Y2FyZC5jb3N0UGVyTmlnaHR9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLSR7Y2FyZC5udW1iZXJ9XCJjbGFzcz0nYnRuIHJvb20tYnRuJz5CT09LPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbm5lckhUTUwgKz0gbWluaVJvb21DYXJkO1xuICB9KTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnNUb0Jvb2soJy5yb29tLWJ0bicsIGNvbmZpcm1SZXNlcnZhdGlvbkN1c3RvbWVyKTtcbn1cblxuZnVuY3Rpb24gcG9zdEFSZXNlcnZhdGlvbihyb29tTnVtYmVyLCByZXNlcnZhdGlvbiwgZXJyb3JNZXNzYWdlKSB7XG4gIGFwaVJlcXVlc3QubWFrZUFQb3N0UmVxdWVzdCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCByZXNlcnZhdGlvbilcbiAgICAudGhlbihwb3N0ZWRCb29raW5nID0+IHtcbiAgICAgIGJvb2tpbmdSZXBvLmJvb2tpbmdSZXBvLnB1c2gobmV3IEJvb2tpbmcocG9zdGVkQm9va2luZy5pZCwgcG9zdGVkQm9va2luZy51c2VySUQsIHBvc3RlZEJvb2tpbmcuZGF0ZSwgcG9zdGVkQm9va2luZy5yb29tTnVtYmVyKSk7XG4gICAgICBnZXRVc2VySW5mbygpO1xuICAgICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKGluZm9NZXNzYWdlcy5jb25maXJtTWVzc2FnZSArICcnICsgcm9vbU51bWJlciwgZXJyb3JNZXNzYWdlLCAncmVtb3ZlJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYm9va0FSb29tKHJvb21OdW1iZXIpIHtcbiAgbGV0IGN1cnJlbnRSZXNlcnZhdG9uID0ge1xuICAgIFwidXNlcklEXCI6IHBhcnNlSW50KGN1c3RvbWVyUmVzZXJ2ZVVzZXJJZC52YWx1ZSksXG4gICAgXCJkYXRlXCI6IG1hbmFnZXJEYXRlSW5wdXQudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJyksXG4gICAgXCJyb29tTnVtYmVyXCI6IHBhcnNlSW50KHJvb21OdW1iZXIpXG4gIH1cbiAgcG9zdEFSZXNlcnZhdGlvbihyb29tTnVtYmVyLCBjdXJyZW50UmVzZXJ2YXRvbiwgJ25vLXJvb21zLW1lc3NhZ2UnKTtcbn1cblxuZnVuY3Rpb24gYm9va0FSb29tQ3VzdG9tZXIocm9vbU51bWJlcikge1xuICBsZXQgY3VycmVudFJlc2VydmF0b24gPSB7XG4gICAgXCJ1c2VySURcIjogY3VycmVudFVzZXIuaWQsXG4gICAgXCJkYXRlXCI6IGN1c3RvbWVyRGF0ZUlucHV0LnZhbHVlLnJlcGxhY2VBbGwoJy0nLCAnLycpLFxuICAgIFwicm9vbU51bWJlclwiOiBwYXJzZUludChyb29tTnVtYmVyKVxuICB9XG4gIHBvc3RBUmVzZXJ2YXRpb24ocm9vbU51bWJlciwgY3VycmVudFJlc2VydmF0b24sICduby1yb29tcy1tZXNzYWdlLWN1c3RvbWVyJyk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1SZXNlcnZhdGlvbigpIHtcbiAgaWYgKHZhbGlkYXRlQ3VzdG9tZXJJZChjdXN0b21lclJlc2VydmVVc2VySWQudmFsdWUpICYmIG1hbmFnZXJEYXRlSW5wdXQudmFsdWUpIHtcbiAgICBkb21EaXNwbGF5LnNob3dFcnJvck1lc3NhZ2UoJycsICduby1yb29tcy1tZXNzYWdlJywgJ2FkZCcpO1xuICAgIGxldCBjdXN0b21lcklEID0gY3VzdG9tZXJSZXNlcnZlVXNlcklkLnZhbHVlO1xuICAgIGxldCBib29raW5nRGV0YWlscyA9IHRoaXMuaWQucmVwbGFjZSgnYnRuLScsICcnKTtcbiAgICB2YXIgcmVzdWx0ID0gY29uZmlybShgV291bGQgeW91IGxpa2UgdG8gYm9vayBSb29tICR7Ym9va2luZ0RldGFpbHN9IGZvciBhIEN1c3RvbWVyIyR7Y3VzdG9tZXJJRH1gKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBib29rQVJvb20oYm9va2luZ0RldGFpbHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZShpbmZvTWVzc2FnZXMuZXJyb3JDYW5jZWwsICduby1yb29tcy1tZXNzYWdlJywgJ3JlbW92ZScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb21EaXNwbGF5LnNob3dFcnJvck1lc3NhZ2UoaW5mb01lc3NhZ2VzLmVycm9yRGF0YSwgJ25vLXJvb21zLW1lc3NhZ2UnLCAncmVtb3ZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybVJlc2VydmF0aW9uQ3VzdG9tZXIoKSB7XG4gIGlmIChjdXN0b21lckRhdGVJbnB1dC52YWx1ZSkge1xuICAgIGRvbURpc3BsYXkuc2hvd0Vycm9yTWVzc2FnZSgnJywgJ25vLXJvb21zLW1lc3NhZ2UtY3VzdG9tZXInLCAnYWRkJyk7XG4gICAgbGV0IGN1c3RvbWVyTmFtZSA9IGN1cnJlbnRVc2VyLm5hbWU7XG4gICAgbGV0IGJvb2tpbmdEZXRhaWxzID0gdGhpcy5pZC5yZXBsYWNlKCdidG4tJywgJycpO1xuICAgIHZhciByZXN1bHQgPSBjb25maXJtKGBXb3VsZCB5b3UgbGlrZSB0byBib29rIFJvb20gJHtib29raW5nRGV0YWlsc30sICR7Y3VzdG9tZXJOYW1lfWApO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJvb2tBUm9vbUN1c3RvbWVyKGJvb2tpbmdEZXRhaWxzKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb21EaXNwbGF5LnNob3dFcnJvck1lc3NhZ2UoaW5mb01lc3NhZ2VzLmVycm9yQ2FuY2VsLCAnbm8tcm9vbXMtbWVzc2FnZS1jdXN0b21lcicsICdyZW1vdmUnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9tRGlzcGxheS5zaG93RXJyb3JNZXNzYWdlKGluZm9NZXNzYWdlcy5lcnJvckRhdGFDdXN0b21lciwgJ25vLXJvb21zLW1lc3NhZ2UtY3VzdG9tZXInLCAncmVtb3ZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyVG90YWxVc2VyUGFnZShjdXN0b21lckJvb2tpbmdzKSB7XG4gIGxldCBhbW91bnQgPSBob3RlbE92ZXJsb29rLmdldFRvdGFsQW1vdW50U3BlbmRCeVVzZXIoY3VzdG9tZXJCb29raW5ncykudG9GaXhlZCgyKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1ib29raW5ncy1hbW91bnQnKS5pbm5lclRleHQgPSBhbW91bnQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lck5hbWVVc2VyUGFnZSh1c2VySWQpIHtcbiAgbGV0IGN1c3RvbWVyTmFtZSA9IGN1c3RvbWVyUmVwby5jdXN0b21lclJlcG9bcGFyc2VJbnQodXNlcklkKSAtIDFdO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci10aXRsZScpLmlubmVyVGV4dCA9IGN1c3RvbWVyTmFtZS5uYW1lO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBdmFpbGFibGVSb29tc1R5cGVDdXN0b21lcigpIHtcbiAgbGV0IGZpbHRlcmVkUm9vbXMgPSBbXTtcbiAgaWYgKHRoaXMudmFsdWUgPT09ICdyZXNpZGVudGlhbCBzdWl0ZScpIHtcbiAgICBmaWx0ZXJlZFJvb21zID0gaG90ZWxPdmVybG9vay5nZXRJbmZvcm1hdGlvbkJ5VmFsdWUoJ3Jlc2lkZW50aWFsIHN1aXRlJywgYXZhaWxhYmxlUm9vbXMsICdyb29tVHlwZScpO1xuICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICdzdWl0ZScpIHtcbiAgICBmaWx0ZXJlZFJvb21zID0gaG90ZWxPdmVybG9vay5nZXRJbmZvcm1hdGlvbkJ5VmFsdWUoJ3N1aXRlJywgYXZhaWxhYmxlUm9vbXMsICdyb29tVHlwZScpO1xuICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICdzaW5nbGUgcm9vbScpIHtcbiAgICBmaWx0ZXJlZFJvb21zID0gaG90ZWxPdmVybG9vay5nZXRJbmZvcm1hdGlvbkJ5VmFsdWUoJ3NpbmdsZSByb29tJywgYXZhaWxhYmxlUm9vbXMsICdyb29tVHlwZScpO1xuICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICdqdW5pb3Igc3VpdGUnKSB7XG4gICAgZmlsdGVyZWRSb29tcyA9IGhvdGVsT3Zlcmxvb2suZ2V0SW5mb3JtYXRpb25CeVZhbHVlKCdqdW5pb3Igc3VpdGUnLCBhdmFpbGFibGVSb29tcywgJ3Jvb21UeXBlJyk7XG4gIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJ3Nob3cgYWxsJykge1xuICAgIGZpbHRlcmVkUm9vbXMgPSBhdmFpbGFibGVSb29tc1xuICB9XG4gIGlmIChPYmplY3Qua2V5cyhjdXJyZW50VXNlcikubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlBdmFpbGJlQ3VzdG9tZXJSb29tcyhmaWx0ZXJlZFJvb21zKTtcbiAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhjdXJyZW50VXNlcikubGVuZ3RoID09PSAwKSB7XG4gICAgZGlzcGxheUF2YWlsYmVSb29tcyhmaWx0ZXJlZFJvb21zKTtcbiAgfVxuICByZXR1cm4gdGhpcy52YWx1ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=