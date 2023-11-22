/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    font-size: 18px;\n    --white: #f0f0f0;\n    --off-white: #E5E95E5;\n    --grey: #cfcfcf;\n    --dark-green: #0A2E25;\n    --border-color: #80DFEC66;\n\n    --dark-green: #0E2D44;\n    font-weight: 600;\n}\n\n@media (prefers-color-scheme:light) {\n    body {\n        filter: invert(0.9);\n        background: antiquewhite !important;\n    }\n\n    #weather-icon {\n        filter: invert(0.9);\n    }\n\n}\n\nhtml {\n    overflow: clip;\n}\n\nbody {\n    color: var(--white);\n    font-family: 'Nunito', sans-serif;\n\n    background: linear-gradient(-10deg, #16003C 4.92%, #044B71 90.38%);\n    /* dark-light mode transition */\n    transition: 0.4s ease-in-out;\n}\n\n.page-wrapper {\n    height: 100vh;\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: scroll;\n    overflow-x: hidden;\n\n}\n\n\n\n\n#top-bar {\n    font-family: \"Nunito\", sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2rem 1.5rem;\n    position: sticky;\n    top: 0;\n}\n\n#top-bar>* {\n    display: inherit;\n    align-items: center;\n}\n\n#logo p {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#logo img {\n    width: 48px;\n}\n\n#query {\n    align-self: stretch;\n    background: var(--dark-green);\n    color: var(--white);\n    padding: 0 1em;\n    border-radius: 32px 0 0 32px;\n    /* border: 4px solid var(--border-color); */\n    border: unset;\n    border-right: unset;\n    min-width: 320px;\n    font-size: 1.33rem;\n    font-weight: 600;\n    padding: 0.45em 1.25em;\n    outline: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nform:focus-within {\n    outline: 4px solid var(--border-color);\n    border-radius: 32px;\n}\n\nbutton#search:focus {\n    border-left: 4px solid var(--border-color);\n}\n\nbutton#search {\n    background: var(--dark-green);\n    /* border: 2px solid var(--white); */\n    /* border: 4px solid var(--border-color); */\n    border: unset;\n\n    border-radius: 0 32px 32px 0;\n    border-left: 0;\n    display: flex;\n    padding: 0.45em 1.25em;\n    outline: none;\n}\n\nbutton#search img {\n    width: 32px;\n    padding: 0.3em 0;\n}\n\nbutton#unit {\n    border-radius: 32px;\n    background: var(--dark-green);\n    border: unset;\n    color: var(--white);\n    padding: 0.45em 1.25em;\n    font-size: 1.2rem;\n    font-weight: 600;\n    font-size: 1.33rem;\n    outline: unset;\n}\n\n\nbutton#unit:focus {\n    outline: 4px solid var(--border-color);\n}\n\nbutton#unit:active {\n    outline-style: inset;\n}\n\nfooter {\n    padding: 1rem 0;\n    text-align: center;\n\n    color: var(--off-white);\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\nfooter a {\n    color: unset;\n    text-decoration: unset;\n}\n\na:hover {\n    text-decoration: underline;\n    text-underline-offset: 4px;\n}\n\nfooter {\n    font-size: 1.1rem;\n}\n\n.greyed-text {\n    color: var(--grey);\n}\n\n/* ----------PseudoElements----------- */\n#city-name:after {\n    content: ',';\n}\n\n#date::after {\n    content: ' |';\n    position: relative;\n    top: -2px;\n}\n\n\n/* -----------Main Styles------------ */\n\n\n#main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1em;\n    overflow-y: scroll;\n    scrollbar-width: none;\n}\n\n#main-content::-webkit-scrollbar {\n    width: 0px;\n}\n\n#result-name {\n    font-size: 2.4rem;\n    font-weight: 700;\n}\n\n\n#date-info {\n    text-align: center;\n    font-size: 1.1rem;\n}\n\n#result-name,\n#date-info {\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n}\n\n#weather-info {\n    font-weight: 700;\n}\n\n#weather-icon {\n    width: 5rem;\n}\n\n#temp-description {\n    font-size: 1.6rem;\n    color: var(--white);\n}\n\n\n\nsection#current-info {\n    display: flex;\n    gap: 1rem;\n}\n\n\n#weather-info_primary {\n    display: flex;\n    align-items: end;\n    font-weight: 800;\n\n}\n\n#temperature {\n    font-size: 3rem;\n    font-weight: 800;\n}\n\n\nsection#secondary-info {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 0.5em 1em\n}\n\n.secondary-info_heading {\n    font-size: 1rem;\n    color: var(--grey);\n}\n\n#forecast-info h2 {\n    margin: 1em 0;\n    text-align: center;\n}\n\n.secondary-info_detail {\n    font-size: 1.29rem;\n    font-weight: 700;\n}\n\n#forecasts {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n\n    gap: 1em;\n    padding: 0.5rem 0;\n    justify-items: center;\n}\n\n#forecasts .day {\n    justify-self: baseline;\n    font-size: 1.25rem;\n}\n\n\n\n/* ------------Media Queries------------ */\n@media screen and (max-width : 768px) {\n    :root {\n        font-size: 16px;\n    }\n\n    #logo {\n        display: none;\n    }\n\n    #current-info {\n        flex-direction: column;\n        align-items: center;\n    }\n\n\n    section#secondary-info,\n    section#forecast-info {\n        padding: 1rem 2.5rem;\n    }\n\n    .secondary-info_detail {\n        font-size: 1.19rem;\n        font-weight: 600;\n    }\n\n    #top-bar {\n        padding: 1.5rem 1rem;\n        gap: 1rem;\n    }\n\n    #logo img {\n        width: 36px;\n    }\n\n    button#search {\n        padding: 0.5em 0.8em;\n    }\n\n    input#query {\n        width: 100%;\n        min-width: unset;\n        font-size: 1.1rem;\n        font-weight: 500;\n        padding: 0.2em 0.6em;\n        padding-left: 1em;\n    }\n\n    button#unit {\n        height: 98%;\n        padding: 0 1rem;\n        font-size: 1.1rem;\n        white-space: nowrap;\n    }\n\n    #weather-info {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        align-self: stretch;\n        padding: 0rem 2.5rem;\n        gap: 1rem;\n        flex-wrap: wrap;\n    }\n\n\n    #temp-description {\n        font-size: 1.25rem;\n    }\n\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weathernaut/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weathernaut/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weathernaut/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weathernaut/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weathernaut/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n// function to handle form submit\nconst form = document.querySelector('form');\nform.addEventListener('submit', handleFormSubmit);\n\nfunction handleFormSubmit(e) {\n    e.preventDefault();\n    const searchQuery = document.getElementById('query').value;\n    console.log(searchQuery);\n\n    const forecastData = fetchForecastData(searchQuery);\n\n\n}\n\nasync function fetchForecastData(query) {\n    // Starting an api Call here\n    const API_KEY = `f06fbaa0fe1945cca9771323231811`\n    const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=yes`;\n\n    const response = await fetch(queryURL, { mode: \"cors\" });\n    console.log(response)\n    const data = await response.json();\n    // console.trace(data);\n\n    updateContent(data);\n\n    return data;\n\n\n}\n\n\nfetchForecastData('New Delhi')\n\n// const forecastData = await fetchForecastData('New Delhi');\n\n\n\nfunction updateContent(forecastData) {\n\n    const cityName = document.getElementById('city-name');\n    const countryName = document.getElementById('country-name');\n\n    const day = document.getElementById('day');\n    const date = document.getElementById('date');\n    const time = document.getElementById('time');\n\n\n    const weatherIcon = document.getElementById('weather-icon');\n    const temperature = document.getElementById('temperature');\n    const tempDesc = document.getElementById('temp-description');\n    const feelsLike = document.getElementById('feels-like');\n\n\n    cityName.textContent = forecastData.location.name;\n    countryName.textContent = forecastData.location.country;\n\n    const formattedDate = convertEpochTime(forecastData.location.localtime_epoch);\n    // console.log(formattedDate);\n\n    day.textContent = formattedDate.day\n    date.textContent = formattedDate.date\n    time.textContent = formattedDate.time\n\n    console.table(forecastData)\n\n    weatherIcon.src = forecastData.current.condition.icon;\n    temperature.textContent = forecastData.current.temp_c;\n    tempDesc.textContent = forecastData.current.condition.text;\n    feelsLike.textContent = forecastData.current.feelslike_c;\n\n    console.log(forecastData.current.feelslike_c)\n\n\n    const wind = document.getElementById('wind');\n    const humidity = document.getElementById('humidity');\n    const uvIndex = document.getElementById('uv-index');\n    const visibility = document.getElementById('visibility');\n    const cloudiness = document.getElementById('cloudiness');\n    const chanceOfRain = document.getElementById('chance-of-rain');\n    const sunrise = document.getElementById('sunrise');\n    const sunset = document.getElementById('sunset');\n    const moonPhase = document.getElementById('moon-phase');\n\n\n    wind.textContent = (forecastData.current.wind_kph + \" \" + forecastData.current.wind_dir);\n    humidity.textContent = forecastData.current.humidity;\n    uvIndex.textContent = forecastData.current.uv;\n    visibility.textContent = forecastData.current.vis_km;\n    cloudiness.textContent = forecastData.current.cloud;\n\n    chanceOfRain.textContent = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;\n\n    sunrise.textContent = forecastData.forecast.forecastday[0].astro.sunrise;\n    sunset.textContent = forecastData.forecast.forecastday[0].astro.sunset;\n\n    moonPhase.textContent = forecastData.forecast.forecastday[0].astro.moon_phase;\n\n}\n\n\n\n\nfunction convertEpochTime(epochTime) {\n    // Create a new Date object with the epoch time\n    var date = new Date(epochTime * 1000); // Multiply by 1000 to convert seconds to milliseconds\n    // 1) Convert epoch time to day\n    var day = date.toLocaleString('en-us', { weekday: 'long' });\n    // 2) Convert epoch time to date in format ddmmyy\n    var dayOfMonth = ('0' + date.getDate()).slice(-2);\n    var monthName = date.toLocaleString('en-us', { month: 'long' });\n    var year = date.getFullYear().toString().slice(-2);\n    var dateFormatted = dayOfMonth + ' ' + monthName + ' ' + year;\n    // 3) Convert epoch time to time in AM/PM format\n    var hours = date.getHours();\n    var minutes = ('0' + date.getMinutes()).slice(-2);\n    var ampm = hours >= 12 ? 'PM' : 'AM';\n    hours = hours % 12;\n    hours = hours ? hours : 12; // Handle midnight (0:00) as 12 AM\n    var timeFormatted = hours + ':' + minutes + ' ' + ampm;\n    return {\n        day: day,\n        date: dateFormatted,\n        time: timeFormatted\n    };\n}\n\n\n//# sourceURL=webpack://weathernaut/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;