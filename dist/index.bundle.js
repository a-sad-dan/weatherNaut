"use strict";
(self["webpackChunkweathernaut"] = self["webpackChunkweathernaut"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root {
    font-size: 18px;
    --white: #f0f0f0;
    --off-white: #E5E95E5;
    --grey: #cfcfcf;
    --dark-green: #0A2E25;
    --border-color: #80DFEC66;

    --dark-green: #0E2D44;
    font-weight: 600;
}

@media (prefers-color-scheme:light) {
    body {
        filter: invert(0.9);
        background: antiquewhite !important;
    }

    #weather-icon {
        filter: invert(0.9);
    }

}

html {
    overflow: clip;
}

body {
    color: var(--white);
    font-family: 'Nunito', sans-serif;

    background: linear-gradient(-10deg, #16003C 4.92%, #044B71 90.38%);
    /* dark-light mode transition */
    transition: 0.4s ease-in-out;
}

.page-wrapper {
    height: 100vh;
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;

}




#top-bar {
    font-family: "Nunito", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    position: sticky;
    top: 0;
}

#top-bar>* {
    display: inherit;
    align-items: center;
}

#logo p {
    font-size: 1.5rem;
    font-weight: 700;
}

#logo img {
    width: 48px;
}

#query {
    align-self: stretch;
    background: var(--dark-green);
    color: var(--white);
    padding: 0 1em;
    border-radius: 32px 0 0 32px;
    /* border: 4px solid var(--border-color); */
    border: unset;
    border-right: unset;
    min-width: 320px;
    font-size: 1.33rem;
    font-weight: 600;
    padding: 0.45em 1.25em;
    outline: none;
}

button {
    cursor: pointer;
}

form:focus-within {
    outline: 4px solid var(--border-color);
    border-radius: 32px;
}

button#search:focus {
    border-left: 4px solid var(--border-color);
}

button#search {
    background: var(--dark-green);
    /* border: 2px solid var(--white); */
    /* border: 4px solid var(--border-color); */
    border: unset;

    border-radius: 0 32px 32px 0;
    border-left: 0;
    display: flex;
    padding: 0.45em 1.25em;
    outline: none;
}

button#search img {
    width: 32px;
    padding: 0.3em 0;
}

button#unit {
    border-radius: 32px;
    background: var(--dark-green);
    border: unset;
    color: var(--white);
    padding: 0.45em 1.25em;
    font-size: 1.2rem;
    font-weight: 600;
    font-size: 1.33rem;
    outline: unset;
}


button#unit:focus {
    outline: 4px solid var(--border-color);
}

button#unit:active {
    outline-style: inset;
}

footer {
    padding: 1rem 0;
    text-align: center;

    color: var(--off-white);
    font-size: 1.2rem;
    font-weight: 600;
}

footer a {
    color: unset;
    text-decoration: unset;
}

a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}

footer {
    font-size: 1.1rem;
}

.greyed-text {
    color: var(--grey);
}

/* ----------PseudoElements----------- */
#city-name:after {
    content: ',';
}

#date::after {
    content: ' |';
    position: relative;
    top: -2px;
}


/* -----------Main Styles------------ */
.metric.temp::after {
    content: " ℃";
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);
}

.metric.distance::after {
    content: " km";
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);
}

.imperial.distance::after {
    content: " miles";
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);

}

.imperial.temp::after {
    content: ' ℉';
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);
}

.metric.speed::after {
    content: ' km/h';
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);
}

.imperial.speed::after {
    content: ' mph';
    font-size: 0.8em;
    font-weight: 700;
    color: var(--grey);
}


#main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    overflow-y: scroll;
    scrollbar-width: none;
}

#main-content::-webkit-scrollbar {
    width: 0px;
}

#result-name {
    font-size: 2.4rem;
    font-weight: 700;
}


#date-info {
    text-align: center;
    font-size: 1.1rem;
}

#result-name,
#date-info {
    display: flex;
    gap: 8px;
    justify-content: center;
}

#weather-info {
    font-weight: 700;
}

#weather-icon {
    width: 5rem;
}

#temp-description {
    font-size: 1.6rem;
    color: var(--white);
}



section#current-info {
    display: flex;
    gap: 1rem;
}


#weather-info_primary {
    display: flex;
    align-items: end;
    font-weight: 800;

}

#temperature {
    font-size: 3rem;
    font-weight: 800;
}


section#secondary-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em 1em
}

.secondary-info_heading {
    font-size: 1rem;
    color: var(--grey);
}

#forecast-info h2 {
    margin: 1em 0;
    text-align: center;
}

.secondary-info_detail {
    font-size: 1.29rem;
    font-weight: 700;
}

#forecasts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 1em;
    padding: 0.5rem 0;
    justify-items: center;
}

#forecasts .day {
    justify-self: baseline;
    font-size: 1.25rem;
}


/* quick fixes for wind div */
#wind-direction {
    display: inline;
}

#wind {
    display: inline;
}



/* ------------Media Queries------------ */
@media screen and (max-width : 768px) {
    :root {
        font-size: 16px;
    }

    #logo {
        display: none;
    }

    #current-info {
        flex-direction: column;
        align-items: center;
    }


    section#secondary-info,
    section#forecast-info {
        padding: 1rem 2.5rem;
    }

    .secondary-info_detail {
        font-size: 1.19rem;
        font-weight: 600;
    }

    #top-bar {
        padding: 1.25rem 1rem;
        gap: 1rem;
    }

    #logo img {
        width: 36px;
    }

    input#query {
        width: 100%;
        min-width: unset;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.2em 0.6em;
        padding-left: 1em;
    }

    button#unit {
        padding: 0 1rem;
        font-size: 1.1rem;
        white-space: nowrap;
        height: 95%;
    }

    #weather-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        align-self: stretch;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 0.5rem 0.8rem;
    }

    #temp-description {
        font-size: 1.25rem;
    }

    button#search {
        padding: 0.2em 0.5em;
        margin: 0;
    }

    button#search img {
        width: 32px;
        padding: 0.3em 0.1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');\n\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    font-size: 18px;\n    --white: #f0f0f0;\n    --off-white: #E5E95E5;\n    --grey: #cfcfcf;\n    --dark-green: #0A2E25;\n    --border-color: #80DFEC66;\n\n    --dark-green: #0E2D44;\n    font-weight: 600;\n}\n\n@media (prefers-color-scheme:light) {\n    body {\n        filter: invert(0.9);\n        background: antiquewhite !important;\n    }\n\n    #weather-icon {\n        filter: invert(0.9);\n    }\n\n}\n\nhtml {\n    overflow: clip;\n}\n\nbody {\n    color: var(--white);\n    font-family: 'Nunito', sans-serif;\n\n    background: linear-gradient(-10deg, #16003C 4.92%, #044B71 90.38%);\n    /* dark-light mode transition */\n    transition: 0.4s ease-in-out;\n}\n\n.page-wrapper {\n    height: 100vh;\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: scroll;\n    overflow-x: hidden;\n\n}\n\n\n\n\n#top-bar {\n    font-family: \"Nunito\", sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2rem 1.5rem;\n    position: sticky;\n    top: 0;\n}\n\n#top-bar>* {\n    display: inherit;\n    align-items: center;\n}\n\n#logo p {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#logo img {\n    width: 48px;\n}\n\n#query {\n    align-self: stretch;\n    background: var(--dark-green);\n    color: var(--white);\n    padding: 0 1em;\n    border-radius: 32px 0 0 32px;\n    /* border: 4px solid var(--border-color); */\n    border: unset;\n    border-right: unset;\n    min-width: 320px;\n    font-size: 1.33rem;\n    font-weight: 600;\n    padding: 0.45em 1.25em;\n    outline: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nform:focus-within {\n    outline: 4px solid var(--border-color);\n    border-radius: 32px;\n}\n\nbutton#search:focus {\n    border-left: 4px solid var(--border-color);\n}\n\nbutton#search {\n    background: var(--dark-green);\n    /* border: 2px solid var(--white); */\n    /* border: 4px solid var(--border-color); */\n    border: unset;\n\n    border-radius: 0 32px 32px 0;\n    border-left: 0;\n    display: flex;\n    padding: 0.45em 1.25em;\n    outline: none;\n}\n\nbutton#search img {\n    width: 32px;\n    padding: 0.3em 0;\n}\n\nbutton#unit {\n    border-radius: 32px;\n    background: var(--dark-green);\n    border: unset;\n    color: var(--white);\n    padding: 0.45em 1.25em;\n    font-size: 1.2rem;\n    font-weight: 600;\n    font-size: 1.33rem;\n    outline: unset;\n}\n\n\nbutton#unit:focus {\n    outline: 4px solid var(--border-color);\n}\n\nbutton#unit:active {\n    outline-style: inset;\n}\n\nfooter {\n    padding: 1rem 0;\n    text-align: center;\n\n    color: var(--off-white);\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\nfooter a {\n    color: unset;\n    text-decoration: unset;\n}\n\na:hover {\n    text-decoration: underline;\n    text-underline-offset: 4px;\n}\n\nfooter {\n    font-size: 1.1rem;\n}\n\n.greyed-text {\n    color: var(--grey);\n}\n\n/* ----------PseudoElements----------- */\n#city-name:after {\n    content: ',';\n}\n\n#date::after {\n    content: ' |';\n    position: relative;\n    top: -2px;\n}\n\n\n/* -----------Main Styles------------ */\n.metric.temp::after {\n    content: \" ℃\";\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n}\n\n.metric.distance::after {\n    content: \" km\";\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n}\n\n.imperial.distance::after {\n    content: \" miles\";\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n\n}\n\n.imperial.temp::after {\n    content: ' ℉';\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n}\n\n.metric.speed::after {\n    content: ' km/h';\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n}\n\n.imperial.speed::after {\n    content: ' mph';\n    font-size: 0.8em;\n    font-weight: 700;\n    color: var(--grey);\n}\n\n\n#main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1em;\n    overflow-y: scroll;\n    scrollbar-width: none;\n}\n\n#main-content::-webkit-scrollbar {\n    width: 0px;\n}\n\n#result-name {\n    font-size: 2.4rem;\n    font-weight: 700;\n}\n\n\n#date-info {\n    text-align: center;\n    font-size: 1.1rem;\n}\n\n#result-name,\n#date-info {\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n}\n\n#weather-info {\n    font-weight: 700;\n}\n\n#weather-icon {\n    width: 5rem;\n}\n\n#temp-description {\n    font-size: 1.6rem;\n    color: var(--white);\n}\n\n\n\nsection#current-info {\n    display: flex;\n    gap: 1rem;\n}\n\n\n#weather-info_primary {\n    display: flex;\n    align-items: end;\n    font-weight: 800;\n\n}\n\n#temperature {\n    font-size: 3rem;\n    font-weight: 800;\n}\n\n\nsection#secondary-info {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 0.5em 1em\n}\n\n.secondary-info_heading {\n    font-size: 1rem;\n    color: var(--grey);\n}\n\n#forecast-info h2 {\n    margin: 1em 0;\n    text-align: center;\n}\n\n.secondary-info_detail {\n    font-size: 1.29rem;\n    font-weight: 700;\n}\n\n#forecasts {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n\n    gap: 1em;\n    padding: 0.5rem 0;\n    justify-items: center;\n}\n\n#forecasts .day {\n    justify-self: baseline;\n    font-size: 1.25rem;\n}\n\n\n/* quick fixes for wind div */\n#wind-direction {\n    display: inline;\n}\n\n#wind {\n    display: inline;\n}\n\n\n\n/* ------------Media Queries------------ */\n@media screen and (max-width : 768px) {\n    :root {\n        font-size: 16px;\n    }\n\n    #logo {\n        display: none;\n    }\n\n    #current-info {\n        flex-direction: column;\n        align-items: center;\n    }\n\n\n    section#secondary-info,\n    section#forecast-info {\n        padding: 1rem 2.5rem;\n    }\n\n    .secondary-info_detail {\n        font-size: 1.19rem;\n        font-weight: 600;\n    }\n\n    #top-bar {\n        padding: 1.25rem 1rem;\n        gap: 1rem;\n    }\n\n    #logo img {\n        width: 36px;\n    }\n\n    input#query {\n        width: 100%;\n        min-width: unset;\n        font-size: 1.1rem;\n        font-weight: 500;\n        padding: 0.2em 0.6em;\n        padding-left: 1em;\n    }\n\n    button#unit {\n        padding: 0 1rem;\n        font-size: 1.1rem;\n        white-space: nowrap;\n        height: 95%;\n    }\n\n    #weather-info {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        align-self: stretch;\n        gap: 1rem;\n        flex-wrap: wrap;\n        padding: 0.5rem 0.8rem;\n    }\n\n    #temp-description {\n        font-size: 1.25rem;\n    }\n\n    button#search {\n        padding: 0.2em 0.5em;\n        margin: 0;\n    }\n\n    button#search img {\n        width: 32px;\n        padding: 0.3em 0.1rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchForecastData(query) {
    // Starting an api Call here
    const API_KEY = "f06fbaa0fe1945cca9771323231811";
    const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=yes`;

    const response = await fetch(queryURL, { mode: "cors" });
    console.log(response);
    const data = await response.json();
    console.log("data is ", data);
    return data;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchForecastData);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable no-param-reassign */



function convertEpochTime(epochTime) {
	// Create a new Date object with the epoch time
	const date = new Date(epochTime * 1000); // Multiply by 1000 to convert seconds to milliseconds
	// 1) Convert epoch time to day
	const day = date.toLocaleString("en-us", { weekday: "long" });
	// 2) Convert epoch time to date in format ddmmyy
	const dayOfMonth = `0${date.getDate()}`.slice(-2);
	const monthName = date.toLocaleString("en-us", { month: "long" });
	const year = date.getFullYear().toString().slice(-2);
	const dateFormatted = `${dayOfMonth} ${monthName} ${year}`;
	// 3) Convert epoch time to time in AM/PM format
	let hours = date.getHours();
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const ampm = hours >= 12 ? "PM" : "AM";
	hours %= 12;
	hours = hours || 12; // Handle midnight (0:00) as 12 AM
	const timeFormatted = `${hours}:${minutes} ${ampm}`;
	return {
		day,
		date: dateFormatted,
		time: timeFormatted,
	};
}

function updateContent(forecastData) {
	const cityName = document.getElementById("city-name");
	const countryName = document.getElementById("country-name");

	const day = document.getElementById("day");
	const date = document.getElementById("date");
	const time = document.getElementById("time");

	const weatherIcon = document.getElementById("weather-icon");
	const temperature = document.getElementById("temperature");
	const tempDesc = document.getElementById("temp-description");
	const feelsLike = document.getElementById("feels-like");

	cityName.textContent = forecastData.location.name;
	countryName.textContent = forecastData.location.country;

	const formattedDate = convertEpochTime(forecastData.location.localtime_epoch);
	// console.log(formattedDate);

	day.textContent = formattedDate.day;
	date.textContent = formattedDate.date;
	time.textContent = formattedDate.time;

	console.table(forecastData);

	weatherIcon.src = forecastData.current.condition.icon;
	temperature.textContent = forecastData.current.temp_c;
	tempDesc.textContent = forecastData.current.condition.text;
	feelsLike.textContent = forecastData.current.feelslike_c;

	console.log(forecastData.current.feelslike_c);

	const wind = document.getElementById("wind");
	const windDirection = document.getElementById("wind-direction")
	const humidity = document.getElementById("humidity");
	const uvIndex = document.getElementById("uv-index");
	const visibility = document.getElementById("visibility");
	const cloudiness = document.getElementById("cloudiness");
	const chanceOfRain = document.getElementById("chance-of-rain");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
	const moonPhase = document.getElementById("moon-phase");

	wind.textContent = `${forecastData.current.wind_kph}`;
	windDirection.textContent = `${forecastData.current.wind_dir}`
	humidity.textContent = forecastData.current.humidity;
	uvIndex.textContent = forecastData.current.uv;
	visibility.textContent = forecastData.current.vis_km;
	cloudiness.textContent = forecastData.current.cloud;

	chanceOfRain.textContent =
		forecastData.forecast.forecastday[0].day.daily_chance_of_rain;

	sunrise.textContent = forecastData.forecast.forecastday[0].astro.sunrise;
	sunset.textContent = forecastData.forecast.forecastday[0].astro.sunset;

	moonPhase.textContent = forecastData.forecast.forecastday[0].astro.moon_phase;


	// Rendering the forecast info
	const forecastsDiv = document.getElementById("forecasts");


	for (let i = 0; i < 3; i += 1) {
		const row = forecastsDiv.querySelectorAll(`[data-day = "${i}"]`);
		const dateData = convertEpochTime(forecastData.forecast.forecastday[i].date_epoch);
		row[0].textContent = dateData.day// dayName
		row[1].textContent = forecastData.forecast.forecastday[i].day.maxtemp_c // max temp
		row[2].textContent = forecastData.forecast.forecastday[i].day.mintemp_c // min temp
		row[3].textContent = forecastData.forecast.forecastday[i].day.maxwind_kph // wind
	}
}


// function to handle form submit
async function handleFormSubmit(e) {
	e.preventDefault();
	const searchQuery = document.getElementById("query").value;

	localStorage.setItem("default", searchQuery);
	console.log("saved query", localStorage.getItem("default"))
	// console.log(searchQuery);

	const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(searchQuery);

	updateContent(data);
}


let defaultData;
if (localStorage.getItem("default")) {
	const query = localStorage.getItem("default");
	console.log(query);
	defaultData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
	updateContent(defaultData);
}
else {
	// Setting default as new Delhi if nothing in local storage
	defaultData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])("new delhi");
	updateContent(defaultData);
}

// Initially everything is metric
function toggleUnits() {
	const data = Array.from(document.querySelectorAll(".unit"));
	const metricSpeed = Array.from(document.querySelectorAll(".metric.speed"));
	const metricTemp = Array.from(document.querySelectorAll(".metric.temp"));

	const imperialSpeed = Array.from(document.querySelectorAll(".imperial.speed"));
	const imperialTemp = Array.from(document.querySelectorAll(".imperial.temp"));

	const visibility = document.getElementById("visibility");

	if (metricSpeed.length || metricTemp.length) {
		metricSpeed.forEach(element => {
			const value = element.textContent;
			const converted = Math.round(value * 6.21371192) / 10;
			element.textContent = converted;
		})

		metricTemp.forEach(element => {
			const value = element.textContent;
			const converted = Math.round(((value * 9 / 5) + 32) * 10) / 10;
			element.textContent = converted;
		});

		visibility.textContent = Math.round(visibility.textContent * 6.21371) / 10;
	}
	if (imperialSpeed.length || imperialTemp.length) {
		imperialSpeed.forEach(element => {
			const value = element.textContent;
			const converted = Math.round(value * 16.0934) / 10;
			element.textContent = converted;
		});
		// f to c
		imperialTemp.forEach(element => {
			const value = element.textContent;
			const converted = Math.round(((value - 32) * 5 / 9) * 10) / 10;
			element.textContent = converted;
		})

		visibility.textContent = Math.round(visibility.textContent * 16.0934) / 10
	}



	// console.log("data", data);
	data.forEach(element => {
		element.classList.toggle("metric");
		element.classList.toggle("imperial");
	});

}


const unitBtn = document.getElementById("unit");
unitBtn.addEventListener("click", toggleUnits)

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsU0FBUyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSwrRkFBK0YsSUFBSSxJQUFJLG1CQUFtQixTQUFTLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEdBQUcsV0FBVyxzQkFBc0IsdUJBQXVCLDRCQUE0QixzQkFBc0IsNEJBQTRCLGdDQUFnQyw4QkFBOEIsdUJBQXVCLEdBQUcseUNBQXlDLFlBQVksOEJBQThCLDhDQUE4QyxPQUFPLHVCQUF1Qiw4QkFBOEIsT0FBTyxLQUFLLFVBQVUscUJBQXFCLEdBQUcsVUFBVSwwQkFBMEIsd0NBQXdDLDJFQUEyRSx5RUFBeUUsR0FBRyxtQkFBbUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsNkJBQTZCLHFDQUFxQyx5QkFBeUIseUJBQXlCLEtBQUssb0JBQW9CLDBDQUEwQyxvQkFBb0IsMEJBQTBCLHFDQUFxQywyQkFBMkIsdUJBQXVCLGFBQWEsR0FBRyxnQkFBZ0IsdUJBQXVCLDBCQUEwQixHQUFHLGFBQWEsd0JBQXdCLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLEdBQUcsWUFBWSwwQkFBMEIsb0NBQW9DLDBCQUEwQixxQkFBcUIsbUNBQW1DLGdEQUFnRCxzQkFBc0IsMEJBQTBCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLDZCQUE2QixvQkFBb0IsR0FBRyxZQUFZLHNCQUFzQixHQUFHLHVCQUF1Qiw2Q0FBNkMsMEJBQTBCLEdBQUcseUJBQXlCLGlEQUFpRCxHQUFHLG1CQUFtQixvQ0FBb0MseUNBQXlDLGtEQUFrRCxzQkFBc0IscUNBQXFDLHFCQUFxQixvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsdUJBQXVCLEdBQUcsaUJBQWlCLDBCQUEwQixvQ0FBb0Msb0JBQW9CLDBCQUEwQiw2QkFBNkIsd0JBQXdCLHVCQUF1Qix5QkFBeUIscUJBQXFCLEdBQUcseUJBQXlCLDZDQUE2QyxHQUFHLHdCQUF3QiwyQkFBMkIsR0FBRyxZQUFZLHNCQUFzQix5QkFBeUIsZ0NBQWdDLHdCQUF3Qix1QkFBdUIsR0FBRyxjQUFjLG1CQUFtQiw2QkFBNkIsR0FBRyxhQUFhLGlDQUFpQyxpQ0FBaUMsR0FBRyxZQUFZLHdCQUF3QixHQUFHLGtCQUFrQix5QkFBeUIsR0FBRyxpRUFBaUUsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLEdBQUcscUVBQXFFLHNCQUFzQix1QkFBdUIsdUJBQXVCLHlCQUF5QixHQUFHLDZCQUE2Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsR0FBRywrQkFBK0IsMEJBQTBCLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssMkJBQTJCLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5QixHQUFHLDBCQUEwQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsR0FBRyw0QkFBNEIsc0JBQXNCLHVCQUF1Qix1QkFBdUIseUJBQXlCLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGVBQWUseUJBQXlCLDRCQUE0QixHQUFHLHNDQUFzQyxpQkFBaUIsR0FBRyxrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLGtCQUFrQix5QkFBeUIsd0JBQXdCLEdBQUcsK0JBQStCLG9CQUFvQixlQUFlLDhCQUE4QixHQUFHLG1CQUFtQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLHdCQUF3QiwwQkFBMEIsR0FBRyw4QkFBOEIsb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixvQkFBb0IsdUJBQXVCLHVCQUF1QixLQUFLLGtCQUFrQixzQkFBc0IsdUJBQXVCLEdBQUcsOEJBQThCLG9CQUFvQiw0Q0FBNEMsdUJBQXVCLDZCQUE2QixzQkFBc0IseUJBQXlCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsR0FBRyw0QkFBNEIseUJBQXlCLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsNENBQTRDLGlCQUFpQix3QkFBd0IsNEJBQTRCLEdBQUcscUJBQXFCLDZCQUE2Qix5QkFBeUIsR0FBRyx1REFBdUQsc0JBQXNCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyw0RkFBNEYsYUFBYSwwQkFBMEIsT0FBTyxlQUFlLHdCQUF3QixPQUFPLHVCQUF1QixpQ0FBaUMsOEJBQThCLE9BQU8sOERBQThELCtCQUErQixPQUFPLGdDQUFnQyw2QkFBNkIsMkJBQTJCLE9BQU8sa0JBQWtCLGdDQUFnQyxvQkFBb0IsT0FBTyxtQkFBbUIsc0JBQXNCLE9BQU8scUJBQXFCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDJCQUEyQiwrQkFBK0IsNEJBQTRCLE9BQU8scUJBQXFCLDBCQUEwQiw0QkFBNEIsOEJBQThCLHNCQUFzQixPQUFPLHVCQUF1Qix3QkFBd0IsOEJBQThCLHdDQUF3Qyw4QkFBOEIsb0JBQW9CLDBCQUEwQixpQ0FBaUMsT0FBTywyQkFBMkIsNkJBQTZCLE9BQU8sdUJBQXVCLCtCQUErQixvQkFBb0IsT0FBTywyQkFBMkIsc0JBQXNCLGdDQUFnQyxPQUFPLEdBQUcsbUJBQW1CO0FBQ2hqVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNhMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFFBQVEsS0FBSyxNQUFNOztBQUUzRiw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNaaEM7QUFDc0M7QUFDakI7O0FBRXJCO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkMsa0RBQWtELGVBQWU7QUFDakU7QUFDQSwwQkFBMEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLO0FBQzFEO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsMEJBQTBCLE1BQU0sR0FBRyxTQUFTLEVBQUUsS0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw4QkFBOEI7QUFDckQsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBLGlCQUFpQixPQUFPO0FBQ3hCLDREQUE0RCxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdEQUFpQjs7QUFFckM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAtLXdoaXRlOiAjZjBmMGYwO1xuICAgIC0tb2ZmLXdoaXRlOiAjRTVFOTVFNTtcbiAgICAtLWdyZXk6ICNjZmNmY2Y7XG4gICAgLS1kYXJrLWdyZWVuOiAjMEEyRTI1O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjODBERkVDNjY7XG5cbiAgICAtLWRhcmstZ3JlZW46ICMwRTJENDQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpsaWdodCkge1xuICAgIGJvZHkge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgwLjkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjd2VhdGhlci1pY29uIHtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC45KTtcbiAgICB9XG5cbn1cblxuaHRtbCB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbmJvZHkge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMGRlZywgIzE2MDAzQyA0LjkyJSwgIzA0NEI3MSA5MC4zOCUpO1xuICAgIC8qIGRhcmstbGlnaHQgbW9kZSB0cmFuc2l0aW9uICovXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbn1cblxuXG5cblxuI3RvcC1iYXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG59XG5cbiN0b3AtYmFyPioge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28gcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2xvZ28gaW1nIHtcbiAgICB3aWR0aDogNDhweDtcbn1cblxuI3F1ZXJ5IHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JlZW4pO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMzJweCAwIDAgMzJweDtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm06Zm9jdXMtd2l0aGluIHtcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xufVxuXG5idXR0b24jc2VhcmNoOmZvY3VzIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbmJ1dHRvbiNzZWFyY2gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JlZW4pO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTsgKi9cbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIGJvcmRlcjogdW5zZXQ7XG5cbiAgICBib3JkZXItcmFkaXVzOiAwIDMycHggMzJweCAwO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMC40NWVtIDEuMjVlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24jc2VhcmNoIGltZyB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgcGFkZGluZzogMC4zZW0gMDtcbn1cblxuYnV0dG9uI3VuaXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmVlbik7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuMzNyZW07XG4gICAgb3V0bGluZTogdW5zZXQ7XG59XG5cblxuYnV0dG9uI3VuaXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5idXR0b24jdW5pdDphY3RpdmUge1xuICAgIG91dGxpbmUtc3R5bGU6IGluc2V0O1xufVxuXG5mb290ZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5mb290ZXIgYSB7XG4gICAgY29sb3I6IHVuc2V0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNHB4O1xufVxuXG5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZ3JleWVkLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLyogLS0tLS0tLS0tLVBzZXVkb0VsZW1lbnRzLS0tLS0tLS0tLS0gKi9cbiNjaXR5LW5hbWU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcsJztcbn1cblxuI2RhdGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnIHwnO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG59XG5cblxuLyogLS0tLS0tLS0tLS1NYWluIFN0eWxlcy0tLS0tLS0tLS0tLSAqL1xuLm1ldHJpYy50ZW1wOjphZnRlciB7XG4gICAgY29udGVudDogXCIg4oSDXCI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLm1ldHJpYy5kaXN0YW5jZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIGttXCI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLmltcGVyaWFsLmRpc3RhbmNlOjphZnRlciB7XG4gICAgY29udGVudDogXCIgbWlsZXNcIjtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xuXG59XG5cbi5pbXBlcmlhbC50ZW1wOjphZnRlciB7XG4gICAgY29udGVudDogJyDihIknO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbi5tZXRyaWMuc3BlZWQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnIGttL2gnO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbi5pbXBlcmlhbC5zcGVlZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgbXBoJztcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG5cbiNtYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbiNtYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4O1xufVxuXG4jcmVzdWx0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuI2RhdGUtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4jcmVzdWx0LW5hbWUsXG4jZGF0ZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jd2VhdGhlci1pbmZvIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jd2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogNXJlbTtcbn1cblxuI3RlbXAtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cblxuXG5zZWN0aW9uI2N1cnJlbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cblxuI3dlYXRoZXItaW5mb19wcmltYXJ5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcblxufVxuXG4jdGVtcGVyYXR1cmUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5cbnNlY3Rpb24jc2Vjb25kYXJ5LWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDAuNWVtIDFlbVxufVxuXG4uc2Vjb25kYXJ5LWluZm9faGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuI2ZvcmVjYXN0LWluZm8gaDIge1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5LWluZm9fZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEuMjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2ZvcmVjYXN0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuXG4gICAgZ2FwOiAxZW07XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jZm9yZWNhc3RzIC5kYXkge1xuICAgIGp1c3RpZnktc2VsZjogYmFzZWxpbmU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG5cbi8qIHF1aWNrIGZpeGVzIGZvciB3aW5kIGRpdiAqL1xuI3dpbmQtZGlyZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiN3aW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS1NZWRpYSBRdWVyaWVzLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAjbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2N1cnJlbnQtaW5mbyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG5cbiAgICBzZWN0aW9uI3NlY29uZGFyeS1pbmZvLFxuICAgIHNlY3Rpb24jZm9yZWNhc3QtaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICAgIH1cblxuICAgIC5zZWNvbmRhcnktaW5mb19kZXRhaWwge1xuICAgICAgICBmb250LXNpemU6IDEuMTlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgI3RvcC1iYXIge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDFyZW07XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICB9XG5cbiAgICAjbG9nbyBpbWcge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICB9XG5cbiAgICBpbnB1dCNxdWVyeSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC42ZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiN1bml0IHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgfVxuXG4gICAgI3dlYXRoZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgICB9XG5cbiAgICAjdGVtcC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICBidXR0b24jc2VhcmNoIHtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBidXR0b24jc2VhcmNoIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAwLjNlbSAwLjFyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7O0lBRXpCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUo7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQzs7SUFFakMsa0VBQWtFO0lBQ2xFLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FB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QUFxQjtJQUN6QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgLS13aGl0ZTogI2YwZjBmMDtcXG4gICAgLS1vZmYtd2hpdGU6ICNFNUU5NUU1O1xcbiAgICAtLWdyZXk6ICNjZmNmY2Y7XFxuICAgIC0tZGFyay1ncmVlbjogIzBBMkUyNTtcXG4gICAgLS1ib3JkZXItY29sb3I6ICM4MERGRUM2NjtcXG5cXG4gICAgLS1kYXJrLWdyZWVuOiAjMEUyRDQ0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmxpZ2h0KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC45KTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgICN3ZWF0aGVyLWljb24ge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC45KTtcXG4gICAgfVxcblxcbn1cXG5cXG5odG1sIHtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTBkZWcsICMxNjAwM0MgNC45MiUsICMwNDRCNzEgOTAuMzglKTtcXG4gICAgLyogZGFyay1saWdodCBtb2RlIHRyYW5zaXRpb24gKi9cXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbn1cXG5cXG5cXG5cXG5cXG4jdG9wLWJhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4jdG9wLWJhcj4qIHtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jbG9nbyBpbWcge1xcbiAgICB3aWR0aDogNDhweDtcXG59XFxuXFxuI3F1ZXJ5IHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4IDAgMCAzMnB4O1xcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBib3JkZXItcmlnaHQ6IHVuc2V0O1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMzNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybTpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG59XFxuXFxuYnV0dG9uI3NlYXJjaDpmb2N1cyB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uI3NlYXJjaCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7ICovXFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMzJweCAzMnB4IDA7XFxuICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMS4yNWVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24jc2VhcmNoIGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xcbn1cXG5cXG5idXR0b24jdW5pdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMS4yNWVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjMzcmVtO1xcbiAgICBvdXRsaW5lOiB1bnNldDtcXG59XFxuXFxuXFxuYnV0dG9uI3VuaXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uI3VuaXQ6YWN0aXZlIHtcXG4gICAgb3V0bGluZS1zdHlsZTogaW5zZXQ7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgY29sb3I6IHVuc2V0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmdyZXllZC10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tUHNldWRvRWxlbWVudHMtLS0tLS0tLS0tLSAqL1xcbiNjaXR5LW5hbWU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnLCc7XFxufVxcblxcbiNkYXRlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgfCc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMnB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLU1haW4gU3R5bGVzLS0tLS0tLS0tLS0tICovXFxuLm1ldHJpYy50ZW1wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIg4oSDXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4ubWV0cmljLmRpc3RhbmNlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIga21cXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5pbXBlcmlhbC5kaXN0YW5jZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIG1pbGVzXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcblxcbn1cXG5cXG4uaW1wZXJpYWwudGVtcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIOKEiSc7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLm1ldHJpYy5zcGVlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIGttL2gnO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5pbXBlcmlhbC5zcGVlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIG1waCc7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG59XFxuXFxuI21haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMHB4O1xcbn1cXG5cXG4jcmVzdWx0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuXFxuI2RhdGUtaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNyZXN1bHQtbmFtZSxcXG4jZGF0ZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1pbmZvIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3dlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4jdGVtcC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5cXG5zZWN0aW9uI2N1cnJlbnQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuI3dlYXRoZXItaW5mb19wcmltYXJ5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG5cXG59XFxuXFxuI3RlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG5cXG5zZWN0aW9uI3NlY29uZGFyeS1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAwLjVlbSAxZW1cXG59XFxuXFxuLnNlY29uZGFyeS1pbmZvX2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI2ZvcmVjYXN0LWluZm8gaDIge1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWNvbmRhcnktaW5mb19kZXRhaWwge1xcbiAgICBmb250LXNpemU6IDEuMjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNmb3JlY2FzdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcbiAgICBnYXA6IDFlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2ZvcmVjYXN0cyAuZGF5IHtcXG4gICAganVzdGlmeS1zZWxmOiBiYXNlbGluZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG4vKiBxdWljayBmaXhlcyBmb3Igd2luZCBkaXYgKi9cXG4jd2luZC1kaXJlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbiN3aW5kIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS1NZWRpYSBRdWVyaWVzLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAjbG9nbyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNjdXJyZW50LWluZm8ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG5cXG4gICAgc2VjdGlvbiNzZWNvbmRhcnktaW5mbyxcXG4gICAgc2VjdGlvbiNmb3JlY2FzdC1pbmZvIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zZWNvbmRhcnktaW5mb19kZXRhaWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjE5cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcblxcbiAgICAjdG9wLWJhciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDFyZW07XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI2xvZ28gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICB9XFxuXFxuICAgIGlucHV0I3F1ZXJ5IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uI3VuaXQge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgaGVpZ2h0OiA5NSU7XFxuICAgIH1cXG5cXG4gICAgI3dlYXRoZXItaW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgI3RlbXAtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiNzZWFyY2gge1xcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uI3NlYXJjaCBpbWcge1xcbiAgICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjNlbSAwLjFyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImFzeW5jIGZ1bmN0aW9uIGZldGNoRm9yZWNhc3REYXRhKHF1ZXJ5KSB7XG4gICAgLy8gU3RhcnRpbmcgYW4gYXBpIENhbGwgaGVyZVxuICAgIGNvbnN0IEFQSV9LRVkgPSBcImYwNmZiYWEwZmUxOTQ1Y2NhOTc3MTMyMzIzMTgxMVwiO1xuICAgIGNvbnN0IHF1ZXJ5VVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5fSZkYXlzPTMmYXFpPXllcyZhbGVydHM9eWVzYDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIGlzIFwiLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hGb3JlY2FzdERhdGE7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBmZXRjaEZvcmVjYXN0RGF0YSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNvbnZlcnRFcG9jaFRpbWUoZXBvY2hUaW1lKSB7XG5cdC8vIENyZWF0ZSBhIG5ldyBEYXRlIG9iamVjdCB3aXRoIHRoZSBlcG9jaCB0aW1lXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShlcG9jaFRpbWUgKiAxMDAwKTsgLy8gTXVsdGlwbHkgYnkgMTAwMCB0byBjb252ZXJ0IHNlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG5cdC8vIDEpIENvbnZlcnQgZXBvY2ggdGltZSB0byBkYXlcblx0Y29uc3QgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG5cdC8vIDIpIENvbnZlcnQgZXBvY2ggdGltZSB0byBkYXRlIGluIGZvcm1hdCBkZG1teXlcblx0Y29uc3QgZGF5T2ZNb250aCA9IGAwJHtkYXRlLmdldERhdGUoKX1gLnNsaWNlKC0yKTtcblx0Y29uc3QgbW9udGhOYW1lID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pO1xuXHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpO1xuXHRjb25zdCBkYXRlRm9ybWF0dGVkID0gYCR7ZGF5T2ZNb250aH0gJHttb250aE5hbWV9ICR7eWVhcn1gO1xuXHQvLyAzKSBDb252ZXJ0IGVwb2NoIHRpbWUgdG8gdGltZSBpbiBBTS9QTSBmb3JtYXRcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRjb25zdCBtaW51dGVzID0gYDAke2RhdGUuZ2V0TWludXRlcygpfWAuc2xpY2UoLTIpO1xuXHRjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG5cdGhvdXJzICU9IDEyO1xuXHRob3VycyA9IGhvdXJzIHx8IDEyOyAvLyBIYW5kbGUgbWlkbmlnaHQgKDA6MDApIGFzIDEyIEFNXG5cdGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSBgJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcblx0cmV0dXJuIHtcblx0XHRkYXksXG5cdFx0ZGF0ZTogZGF0ZUZvcm1hdHRlZCxcblx0XHR0aW1lOiB0aW1lRm9ybWF0dGVkLFxuXHR9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KGZvcmVjYXN0RGF0YSkge1xuXHRjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpO1xuXHRjb25zdCBjb3VudHJ5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRyeS1uYW1lXCIpO1xuXG5cdGNvbnN0IGRheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5XCIpO1xuXHRjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuXHRjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuXG5cdGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWljb25cIik7XG5cdGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcblx0Y29uc3QgdGVtcERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtZGVzY3JpcHRpb25cIik7XG5cdGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKTtcblxuXHRjaXR5TmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5sb2NhdGlvbi5uYW1lO1xuXHRjb3VudHJ5TmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuXG5cdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjb252ZXJ0RXBvY2hUaW1lKGZvcmVjYXN0RGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gpO1xuXHQvLyBjb25zb2xlLmxvZyhmb3JtYXR0ZWREYXRlKTtcblxuXHRkYXkudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlLmRheTtcblx0ZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGUuZGF0ZTtcblx0dGltZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGUudGltZTtcblxuXHRjb25zb2xlLnRhYmxlKGZvcmVjYXN0RGF0YSk7XG5cblx0d2VhdGhlckljb24uc3JjID0gZm9yZWNhc3REYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cdHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQudGVtcF9jO1xuXHR0ZW1wRGVzYy50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXHRmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcblxuXHRjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEuY3VycmVudC5mZWVsc2xpa2VfYyk7XG5cblx0Y29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcblx0Y29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1kaXJlY3Rpb25cIilcblx0Y29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuXHRjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1di1pbmRleFwiKTtcblx0Y29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJpbGl0eVwiKTtcblx0Y29uc3QgY2xvdWRpbmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvdWRpbmVzc1wiKTtcblx0Y29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuY2Utb2YtcmFpblwiKTtcblx0Y29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VucmlzZVwiKTtcblx0Y29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRcIik7XG5cdGNvbnN0IG1vb25QaGFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbi1waGFzZVwiKTtcblxuXHR3aW5kLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmN1cnJlbnQud2luZF9rcGh9YDtcblx0d2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0RGF0YS5jdXJyZW50LndpbmRfZGlyfWBcblx0aHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC5odW1pZGl0eTtcblx0dXZJbmRleC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LnV2O1xuXHR2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQudmlzX2ttO1xuXHRjbG91ZGluZXNzLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQuY2xvdWQ7XG5cblx0Y2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID1cblx0XHRmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG5cdHN1bnJpc2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcblx0c3Vuc2V0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcblxuXHRtb29uUGhhc2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcblxuXG5cdC8vIFJlbmRlcmluZyB0aGUgZm9yZWNhc3QgaW5mb1xuXHRjb25zdCBmb3JlY2FzdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0c1wiKTtcblxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgcm93ID0gZm9yZWNhc3RzRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWRheSA9IFwiJHtpfVwiXWApO1xuXHRcdGNvbnN0IGRhdGVEYXRhID0gY29udmVydEVwb2NoVGltZShmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZV9lcG9jaCk7XG5cdFx0cm93WzBdLnRleHRDb250ZW50ID0gZGF0ZURhdGEuZGF5Ly8gZGF5TmFtZVxuXHRcdHJvd1sxXS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jIC8vIG1heCB0ZW1wXG5cdFx0cm93WzJdLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2MgLy8gbWluIHRlbXBcblx0XHRyb3dbM10udGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHdpbmRfa3BoIC8vIHdpbmRcblx0fVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pdFxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc2VhcmNoUXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpLnZhbHVlO1xuXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVmYXVsdFwiLCBzZWFyY2hRdWVyeSk7XG5cdGNvbnNvbGUubG9nKFwic2F2ZWQgcXVlcnlcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZWZhdWx0XCIpKVxuXHQvLyBjb25zb2xlLmxvZyhzZWFyY2hRdWVyeSk7XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRm9yZWNhc3REYXRhKHNlYXJjaFF1ZXJ5KTtcblxuXHR1cGRhdGVDb250ZW50KGRhdGEpO1xufVxuXG5cbmxldCBkZWZhdWx0RGF0YTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmF1bHRcIikpIHtcblx0Y29uc3QgcXVlcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmF1bHRcIik7XG5cdGNvbnNvbGUubG9nKHF1ZXJ5KTtcblx0ZGVmYXVsdERhdGEgPSBhd2FpdCBmZXRjaEZvcmVjYXN0RGF0YShxdWVyeSk7XG5cdHVwZGF0ZUNvbnRlbnQoZGVmYXVsdERhdGEpO1xufVxuZWxzZSB7XG5cdC8vIFNldHRpbmcgZGVmYXVsdCBhcyBuZXcgRGVsaGkgaWYgbm90aGluZyBpbiBsb2NhbCBzdG9yYWdlXG5cdGRlZmF1bHREYXRhID0gYXdhaXQgZmV0Y2hGb3JlY2FzdERhdGEoXCJuZXcgZGVsaGlcIik7XG5cdHVwZGF0ZUNvbnRlbnQoZGVmYXVsdERhdGEpO1xufVxuXG4vLyBJbml0aWFsbHkgZXZlcnl0aGluZyBpcyBtZXRyaWNcbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuXHRjb25zdCBkYXRhID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVuaXRcIikpO1xuXHRjb25zdCBtZXRyaWNTcGVlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMuc3BlZWRcIikpO1xuXHRjb25zdCBtZXRyaWNUZW1wID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy50ZW1wXCIpKTtcblxuXHRjb25zdCBpbXBlcmlhbFNwZWVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltcGVyaWFsLnNwZWVkXCIpKTtcblx0Y29uc3QgaW1wZXJpYWxUZW1wID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltcGVyaWFsLnRlbXBcIikpO1xuXG5cdGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2liaWxpdHlcIik7XG5cblx0aWYgKG1ldHJpY1NwZWVkLmxlbmd0aCB8fCBtZXRyaWNUZW1wLmxlbmd0aCkge1xuXHRcdG1ldHJpY1NwZWVkLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWQgPSBNYXRoLnJvdW5kKHZhbHVlICogNi4yMTM3MTE5MikgLyAxMDtcblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XG5cdFx0fSlcblxuXHRcdG1ldHJpY1RlbXAuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdGNvbnN0IGNvbnZlcnRlZCA9IE1hdGgucm91bmQoKCh2YWx1ZSAqIDkgLyA1KSArIDMyKSAqIDEwKSAvIDEwO1xuXHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnZlcnRlZDtcblx0XHR9KTtcblxuXHRcdHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHZpc2liaWxpdHkudGV4dENvbnRlbnQgKiA2LjIxMzcxKSAvIDEwO1xuXHR9XG5cdGlmIChpbXBlcmlhbFNwZWVkLmxlbmd0aCB8fCBpbXBlcmlhbFRlbXAubGVuZ3RoKSB7XG5cdFx0aW1wZXJpYWxTcGVlZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDE2LjA5MzQpIC8gMTA7XG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY29udmVydGVkO1xuXHRcdH0pO1xuXHRcdC8vIGYgdG8gY1xuXHRcdGltcGVyaWFsVGVtcC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gTWF0aC5yb3VuZCgoKHZhbHVlIC0gMzIpICogNSAvIDkpICogMTApIC8gMTA7XG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY29udmVydGVkO1xuXHRcdH0pXG5cblx0XHR2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh2aXNpYmlsaXR5LnRleHRDb250ZW50ICogMTYuMDkzNCkgLyAxMFxuXHR9XG5cblxuXG5cdC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblx0ZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm1ldHJpY1wiKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpbXBlcmlhbFwiKTtcblx0fSk7XG5cbn1cblxuXG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0XCIpO1xudW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVW5pdHMpXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9