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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source/less/index.less */ \"./source/less/index.less\");\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_source_less_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _source_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source/js/script.js */ \"./source/js/script.js\");\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js!./source/less/index.less ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./source/less/index.less?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/js/collection-page.js":
/*!**************************************!*\
  !*** ./source/js/collection-page.js ***!
  \**************************************/
/*! exports provided: initCollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCollectionPage\", function() { return initCollectionPage; });\nconst initCollectionPage = () => {\n  let filtersForm = $('#catalog-filter');\n\n  if (!filtersForm.length) {\n    return;\n  }\n\n  const mainContainer = $('#MainContent');\n\n  function renderCatalog(data) {\n    const catalogId = $('#section-id').val();\n    const catalogContainer = $('#shopify-section-' + catalogId);\n    catalogContainer.empty();\n    catalogContainer.html(data);\n    setHandler();\n    mainContainer.removeClass('loading');\n  }\n\n  function getProducts(url) {\n    mainContainer.addClass('loading');\n    fetch(url).then(response => {\n      if (!response.ok) {\n        throw new Error('Network response was not ok ' + response.statusText);\n      }\n\n      return response.text();\n    }).then(data => {\n      renderCatalog(data);\n    }).catch(error => {\n      console.error('There was a problem with the fetch operation:', error);\n    });\n  }\n\n  function setHandler() {\n    let filtersForm = $('#catalog-filter');\n    filtersForm.find('input, select').on('change', function () {\n      const collectionHandle = filtersForm.find('#collection-handle').val();\n      const sectionId = filtersForm.find('#section-id').val();\n      let selectedTag = filtersForm.find(\"input[name='tag']:checked\").val();\n      const selectedSorting = filtersForm.find(\"#SortBy\").val();\n      let filter = selectedTag == 'all' ? '' : '&filter.p.tag=' + selectedTag.replace(/ /g, '+');\n      const url = `/collections/${collectionHandle}?section_id=${sectionId}${filter}&sort_by=${selectedSorting}`;\n      getProducts(url);\n    });\n  }\n\n  setHandler(); // sorting\n\n  $('body').on('click', function (event) {\n    if ($(event.target).hasClass('olio-catalog-filters-sorting-selected')) {\n      $('.olio-catalog-filters-sorting-options').toggle();\n    }\n\n    if (!$(event.target).closest('.olio-catalog-filters-sorting-wrapper').length) {\n      $('.olio-catalog-filters-sorting-options').hide();\n    }\n\n    if ($(event.target).hasClass('olio-catalog-filters-sorting-option')) {\n      const value = $(event.target).attr('data-value');\n      $(\".olio-catalog-filters-sorting-wrapper\").find('select').val(value).change();\n    }\n  }); // Находим элемент с классом olio-catalog-categories__item_active\n\n  var activeItem = document.querySelector('.olio-catalog-categories__item_active'); // Проверяем, существует ли этот элемент\n\n  if (activeItem) {\n    // Прокручиваем контейнер до активного элемента\n    activeItem.scrollIntoView({\n      block: 'nearest'\n    });\n  }\n};\n\n//# sourceURL=webpack:///./source/js/collection-page.js?");

/***/ }),

/***/ "./source/js/productPage.js":
/*!**********************************!*\
  !*** ./source/js/productPage.js ***!
  \**********************************/
/*! exports provided: initProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initProductPage\", function() { return initProductPage; });\nconst initProductPage = () => {\n  setTimeout(function () {\n    $('.olio-related-carousel').slick({\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      autoplay: false,\n      autoplaySpeed: 2000,\n      mobileFirst: true,\n      dots: true,\n      arrows: false,\n      responsive: [{\n        breakpoint: 959,\n        settings: \"unslick\"\n      }]\n    });\n  }, 3000);\n};\n\n//# sourceURL=webpack:///./source/js/productPage.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-page */ \"./source/js/collection-page.js\");\n/* harmony import */ var _productPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productPage */ \"./source/js/productPage.js\");\n\n\n$(document).ready(function () {\n  Object(_collection_page__WEBPACK_IMPORTED_MODULE_0__[\"initCollectionPage\"])();\n  Object(_productPage__WEBPACK_IMPORTED_MODULE_1__[\"initProductPage\"])();\n  const burger = $('#burger');\n  const mobileMenu = $('#mobile-menu');\n  const mobileMenuClose = mobileMenu.find('.olio-header-menu-mobile__close');\n  burger.click(function () {\n    mobileMenu.show(\"fast\");\n  });\n  mobileMenuClose.click(function () {\n    mobileMenu.hide('fast');\n  });\n});\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ }),

/***/ "./source/less/index.less":
/*!********************************!*\
  !*** ./source/less/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./source/less/index.less?");

/***/ })

/******/ });