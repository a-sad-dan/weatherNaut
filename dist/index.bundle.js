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
	--dark-green: #0a2e25;
	--border-color: #80dfec66;

	--dark-green: #0e2d44;
	font-weight: 600;
}

@media (prefers-color-scheme: light) {
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

	background: linear-gradient(-10deg, #16003c 4.92%, #044b71 90.38%);
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
	font-family: 'Nunito', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 1.5rem;
	position: sticky;
	top: 0;
}

#top-bar > * {
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

/* ---------- Loader ----------- */
#loader {
	border: 4px solid rgba(255, 255, 255, 0.3); /* White with some transparency */
	border-radius: 50%;
	border-top: 4px solid #ffffff; /* White */
	width: 40px;
	height: 40px;
	animation: spin 1s linear infinite; /* Animation for spinning */
	margin: auto;
	margin-top: 20px;
}

.hidden
{
    display: none;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
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
	content: ' ℃';
	font-size: 0.8em;
	font-weight: 700;
	color: var(--grey);
}

.metric.distance::after {
	content: ' km';
	font-size: 0.8em;
	font-weight: 700;
	color: var(--grey);
}

.imperial.distance::after {
	content: ' miles';
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
	gap: 0.5em 1em;
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
@media screen and (max-width: 768px) {
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
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');\n\n* {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n:root {\n\tfont-size: 18px;\n\t--white: #f0f0f0;\n\t--off-white: #E5E95E5;\n\t--grey: #cfcfcf;\n\t--dark-green: #0a2e25;\n\t--border-color: #80dfec66;\n\n\t--dark-green: #0e2d44;\n\tfont-weight: 600;\n}\n\n@media (prefers-color-scheme: light) {\n\tbody {\n\t\tfilter: invert(0.9);\n\t\tbackground: antiquewhite !important;\n\t}\n\n\t#weather-icon {\n\t\tfilter: invert(0.9);\n\t}\n}\n\nhtml {\n\toverflow: clip;\n}\n\nbody {\n\tcolor: var(--white);\n\tfont-family: 'Nunito', sans-serif;\n\n\tbackground: linear-gradient(-10deg, #16003c 4.92%, #044b71 90.38%);\n\t/* dark-light mode transition */\n\ttransition: 0.4s ease-in-out;\n}\n\n.page-wrapper {\n\theight: 100vh;\n\theight: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n}\n\n#top-bar {\n\tfont-family: 'Nunito', sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 2rem 1.5rem;\n\tposition: sticky;\n\ttop: 0;\n}\n\n#top-bar > * {\n\tdisplay: inherit;\n\talign-items: center;\n}\n\n#logo p {\n\tfont-size: 1.5rem;\n\tfont-weight: 700;\n}\n\n#logo img {\n\twidth: 48px;\n}\n\n#query {\n\talign-self: stretch;\n\tbackground: var(--dark-green);\n\tcolor: var(--white);\n\tpadding: 0 1em;\n\tborder-radius: 32px 0 0 32px;\n\t/* border: 4px solid var(--border-color); */\n\tborder: unset;\n\tborder-right: unset;\n\tmin-width: 320px;\n\tfont-size: 1.33rem;\n\tfont-weight: 600;\n\tpadding: 0.45em 1.25em;\n\toutline: none;\n}\n\nbutton {\n\tcursor: pointer;\n}\n\nform:focus-within {\n\toutline: 4px solid var(--border-color);\n\tborder-radius: 32px;\n}\n\nbutton#search:focus {\n\tborder-left: 4px solid var(--border-color);\n}\n\nbutton#search {\n\tbackground: var(--dark-green);\n\t/* border: 2px solid var(--white); */\n\t/* border: 4px solid var(--border-color); */\n\tborder: unset;\n\n\tborder-radius: 0 32px 32px 0;\n\tborder-left: 0;\n\tdisplay: flex;\n\tpadding: 0.45em 1.25em;\n\toutline: none;\n}\n\nbutton#search img {\n\twidth: 32px;\n\tpadding: 0.3em 0;\n}\n\nbutton#unit {\n\tborder-radius: 32px;\n\tbackground: var(--dark-green);\n\tborder: unset;\n\tcolor: var(--white);\n\tpadding: 0.45em 1.25em;\n\tfont-size: 1.2rem;\n\tfont-weight: 600;\n\tfont-size: 1.33rem;\n\toutline: unset;\n}\n\nbutton#unit:focus {\n\toutline: 4px solid var(--border-color);\n}\n\nbutton#unit:active {\n\toutline-style: inset;\n}\n\nfooter {\n\tpadding: 1rem 0;\n\ttext-align: center;\n\n\tcolor: var(--off-white);\n\tfont-size: 1.2rem;\n\tfont-weight: 600;\n}\n\nfooter a {\n\tcolor: unset;\n\ttext-decoration: unset;\n}\n\na:hover {\n\ttext-decoration: underline;\n\ttext-underline-offset: 4px;\n}\n\nfooter {\n\tfont-size: 1.1rem;\n}\n\n.greyed-text {\n\tcolor: var(--grey);\n}\n\n/* ---------- Loader ----------- */\n#loader {\n\tborder: 4px solid rgba(255, 255, 255, 0.3); /* White with some transparency */\n\tborder-radius: 50%;\n\tborder-top: 4px solid #ffffff; /* White */\n\twidth: 40px;\n\theight: 40px;\n\tanimation: spin 1s linear infinite; /* Animation for spinning */\n\tmargin: auto;\n\tmargin-top: 20px;\n}\n\n.hidden\n{\n    display: none;\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* ----------PseudoElements----------- */\n#city-name:after {\n\tcontent: ',';\n}\n\n#date::after {\n\tcontent: ' |';\n\tposition: relative;\n\ttop: -2px;\n}\n\n/* -----------Main Styles------------ */\n.metric.temp::after {\n\tcontent: ' ℃';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n.metric.distance::after {\n\tcontent: ' km';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n.imperial.distance::after {\n\tcontent: ' miles';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n.imperial.temp::after {\n\tcontent: ' ℉';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n.metric.speed::after {\n\tcontent: ' km/h';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n.imperial.speed::after {\n\tcontent: ' mph';\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tcolor: var(--grey);\n}\n\n#main-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1em;\n\toverflow-y: scroll;\n\tscrollbar-width: none;\n}\n\n#main-content::-webkit-scrollbar {\n\twidth: 0px;\n}\n\n#result-name {\n\tfont-size: 2.4rem;\n\tfont-weight: 700;\n}\n\n#date-info {\n\ttext-align: center;\n\tfont-size: 1.1rem;\n}\n\n#result-name,\n#date-info {\n\tdisplay: flex;\n\tgap: 8px;\n\tjustify-content: center;\n}\n\n#weather-info {\n\tfont-weight: 700;\n}\n\n#weather-icon {\n\twidth: 5rem;\n}\n\n#temp-description {\n\tfont-size: 1.6rem;\n\tcolor: var(--white);\n}\n\nsection#current-info {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n#weather-info_primary {\n\tdisplay: flex;\n\talign-items: end;\n\tfont-weight: 800;\n}\n\n#temperature {\n\tfont-size: 3rem;\n\tfont-weight: 800;\n}\n\nsection#secondary-info {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgap: 0.5em 1em;\n}\n\n.secondary-info_heading {\n\tfont-size: 1rem;\n\tcolor: var(--grey);\n}\n\n#forecast-info h2 {\n\tmargin: 1em 0;\n\ttext-align: center;\n}\n\n.secondary-info_detail {\n\tfont-size: 1.29rem;\n\tfont-weight: 700;\n}\n\n#forecasts {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\n\tgap: 1em;\n\tpadding: 0.5rem 0;\n\tjustify-items: center;\n}\n\n#forecasts .day {\n\tjustify-self: baseline;\n\tfont-size: 1.25rem;\n}\n\n/* quick fixes for wind div */\n#wind-direction {\n\tdisplay: inline;\n}\n\n#wind {\n\tdisplay: inline;\n}\n\n/* ------------Media Queries------------ */\n@media screen and (max-width: 768px) {\n\t:root {\n\t\tfont-size: 16px;\n\t}\n\n\t#logo {\n\t\tdisplay: none;\n\t}\n\n\t#current-info {\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\n\tsection#secondary-info,\n\tsection#forecast-info {\n\t\tpadding: 1rem 2.5rem;\n\t}\n\n\t.secondary-info_detail {\n\t\tfont-size: 1.19rem;\n\t\tfont-weight: 600;\n\t}\n\n\t#top-bar {\n\t\tpadding: 1.25rem 1rem;\n\t\tgap: 1rem;\n\t}\n\n\t#logo img {\n\t\twidth: 36px;\n\t}\n\n\tinput#query {\n\t\twidth: 100%;\n\t\tmin-width: unset;\n\t\tfont-size: 1.1rem;\n\t\tfont-weight: 500;\n\t\tpadding: 0.2em 0.6em;\n\t\tpadding-left: 1em;\n\t}\n\n\tbutton#unit {\n\t\tpadding: 0 1rem;\n\t\tfont-size: 1.1rem;\n\t\twhite-space: nowrap;\n\t\theight: 95%;\n\t}\n\n\t#weather-info {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t\talign-self: stretch;\n\t\tgap: 1rem;\n\t\tflex-wrap: wrap;\n\t\tpadding: 0.5rem 0.8rem;\n\t}\n\n\t#temp-description {\n\t\tfont-size: 1.25rem;\n\t}\n\n\tbutton#search {\n\t\tpadding: 0.2em 0.5em;\n\t\tmargin: 0;\n\t}\n\n\tbutton#search img {\n\t\twidth: 32px;\n\t\tpadding: 0.3em 0.1rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
	// console.log(response);
	const data = await response.json();
	// console.log("data is ", data);
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

function showLoader(show) {
	const loader = document.querySelector("#loader");
	const mainContent = document.querySelector("#main-content");
	/* eslint-disable */console.log(...oo_oo(`2276781209_32_1_32_25_4`,mainContent))
	if (show) {
		loader.classList.remove("hidden");
		mainContent.classList.add("hidden");
	} else {
		loader.classList.add("hidden");
		mainContent.classList.remove("hidden");
	}
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

	// console.log(forecastData.current.feelslike_c);

	const wind = document.getElementById("wind");
	const windDirection = document.getElementById("wind-direction");
	const humidity = document.getElementById("humidity");
	const uvIndex = document.getElementById("uv-index");
	const visibility = document.getElementById("visibility");
	const cloudiness = document.getElementById("cloudiness");
	const chanceOfRain = document.getElementById("chance-of-rain");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
	const moonPhase = document.getElementById("moon-phase");

	wind.textContent = `${forecastData.current.wind_kph}`;
	windDirection.textContent = `${forecastData.current.wind_dir}`;
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
		const dateData = convertEpochTime(
			forecastData.forecast.forecastday[i].date_epoch
		);
		row[0].textContent = dateData.day; // dayName
		row[1].textContent = forecastData.forecast.forecastday[i].day.maxtemp_c; // max temp
		row[2].textContent = forecastData.forecast.forecastday[i].day.mintemp_c; // min temp
		row[3].textContent = forecastData.forecast.forecastday[i].day.maxwind_kph; // wind
	}
}

// function to handle form submit
async function handleFormSubmit(e) {
	e.preventDefault();
	const searchQuery = document.getElementById("query").value;
	showLoader(true);
	localStorage.setItem("default", searchQuery);
	const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(searchQuery);
	showLoader(false);
	updateContent(data);
}

let defaultData;
if (localStorage.getItem("default")) {
	const query = localStorage.getItem("default");
	// console.log(query);
	defaultData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
	updateContent(defaultData);
} else {
	// Setting default as new Delhi if nothing in local storage
	defaultData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])("new delhi");
	updateContent(defaultData);
}

// Initially everything is metric
function toggleUnits() {
	const data = Array.from(document.querySelectorAll(".unit"));
	const metricSpeed = Array.from(document.querySelectorAll(".metric.speed"));
	const metricTemp = Array.from(document.querySelectorAll(".metric.temp"));

	const imperialSpeed = Array.from(
		document.querySelectorAll(".imperial.speed")
	);
	const imperialTemp = Array.from(document.querySelectorAll(".imperial.temp"));

	const visibility = document.getElementById("visibility");

	if (metricSpeed.length || metricTemp.length) {
		metricSpeed.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(value * 6.21371192) / 10;
			element.textContent = converted;
		});

		metricTemp.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(((value * 9) / 5 + 32) * 10) / 10;
			element.textContent = converted;
		});

		visibility.textContent = Math.round(visibility.textContent * 6.21371) / 10;
	}
	if (imperialSpeed.length || imperialTemp.length) {
		imperialSpeed.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(value * 16.0934) / 10;
			element.textContent = converted;
		});
		// f to c
		imperialTemp.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round((((value - 32) * 5) / 9) * 10) / 10;
			element.textContent = converted;
		});

		visibility.textContent = Math.round(visibility.textContent * 16.0934) / 10;
	}

	// console.log("data", data);
	data.forEach((element) => {
		element.classList.toggle("metric");
		element.classList.toggle("imperial");
	});
}

const unitBtn = document.getElementById("unit");
unitBtn.addEventListener("click", toggleUnits);

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2e24ba=_0xee6b;(function(_0x291420,_0x3309cc){var _0x1fe65b=_0xee6b,_0x411fd0=_0x291420();while(!![]){try{var _0x171908=parseInt(_0x1fe65b(0x10b))/0x1*(-parseInt(_0x1fe65b(0x1ce))/0x2)+-parseInt(_0x1fe65b(0xf6))/0x3+-parseInt(_0x1fe65b(0x1c9))/0x4+-parseInt(_0x1fe65b(0x148))/0x5*(parseInt(_0x1fe65b(0x1b4))/0x6)+-parseInt(_0x1fe65b(0x19b))/0x7+parseInt(_0x1fe65b(0x1c3))/0x8*(-parseInt(_0x1fe65b(0x1af))/0x9)+parseInt(_0x1fe65b(0x199))/0xa;if(_0x171908===_0x3309cc)break;else _0x411fd0['push'](_0x411fd0['shift']());}catch(_0x1aead5){_0x411fd0['push'](_0x411fd0['shift']());}}}(_0x4901,0xcf2a9));var j=Object[_0x2e24ba(0x16b)],H=Object[_0x2e24ba(0x133)],G=Object['getOwnPropertyDescriptor'],ee=Object['getOwnPropertyNames'],te=Object[_0x2e24ba(0x1b7)],ne=Object[_0x2e24ba(0x12b)]['hasOwnProperty'],re=(_0x34cacc,_0x183fea,_0x26fbe8,_0x17bc14)=>{var _0x19ba86=_0x2e24ba;if(_0x183fea&&typeof _0x183fea==_0x19ba86(0x132)||typeof _0x183fea==_0x19ba86(0xeb)){for(let _0x4378ad of ee(_0x183fea))!ne['call'](_0x34cacc,_0x4378ad)&&_0x4378ad!==_0x26fbe8&&H(_0x34cacc,_0x4378ad,{'get':()=>_0x183fea[_0x4378ad],'enumerable':!(_0x17bc14=G(_0x183fea,_0x4378ad))||_0x17bc14['enumerable']});}return _0x34cacc;},x=(_0x45ace7,_0x5e9687,_0x27c883)=>(_0x27c883=_0x45ace7!=null?j(te(_0x45ace7)):{},re(_0x5e9687||!_0x45ace7||!_0x45ace7[_0x2e24ba(0x1c4)]?H(_0x27c883,_0x2e24ba(0x15e),{'value':_0x45ace7,'enumerable':!0x0}):_0x27c883,_0x45ace7)),X=class{constructor(_0x347f8e,_0x5188e9,_0x3a2bdc,_0x2d5934,_0x4985cf){var _0x2f1a91=_0x2e24ba;this[_0x2f1a91(0x187)]=_0x347f8e,this[_0x2f1a91(0x12c)]=_0x5188e9,this[_0x2f1a91(0x168)]=_0x3a2bdc,this[_0x2f1a91(0x10d)]=_0x2d5934,this[_0x2f1a91(0x191)]=_0x4985cf,this['_allowedToSend']=!0x0,this[_0x2f1a91(0x1a8)]=!0x0,this[_0x2f1a91(0x1d5)]=!0x1,this[_0x2f1a91(0x159)]=!0x1,this[_0x2f1a91(0x1d6)]=_0x347f8e[_0x2f1a91(0x11e)]?.['env']?.[_0x2f1a91(0x17f)]===_0x2f1a91(0x192),this[_0x2f1a91(0x149)]=!this[_0x2f1a91(0x187)][_0x2f1a91(0x11e)]?.[_0x2f1a91(0x12e)]?.['node']&&!this['_inNextEdge'],this[_0x2f1a91(0x141)]=null,this[_0x2f1a91(0x179)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x2f1a91(0x12f),this[_0x2f1a91(0xec)]=(this[_0x2f1a91(0x149)]?_0x2f1a91(0x1b1):_0x2f1a91(0xf3))+this[_0x2f1a91(0xef)];}async['getWebSocketClass'](){var _0x363037=_0x2e24ba;if(this[_0x363037(0x141)])return this[_0x363037(0x141)];let _0x35a1ae;if(this[_0x363037(0x149)]||this['_inNextEdge'])_0x35a1ae=this['global'][_0x363037(0x161)];else{if(this[_0x363037(0x187)]['process']?.[_0x363037(0x10f)])_0x35a1ae=this[_0x363037(0x187)][_0x363037(0x11e)]?.[_0x363037(0x10f)];else try{let _0x82e496=await import(_0x363037(0x1bf));_0x35a1ae=(await import((await import(_0x363037(0x183)))[_0x363037(0x167)](_0x82e496['join'](this[_0x363037(0x10d)],_0x363037(0x107)))[_0x363037(0x11c)]()))['default'];}catch{try{_0x35a1ae=require(require(_0x363037(0x1bf))['join'](this[_0x363037(0x10d)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x363037(0x141)]=_0x35a1ae,_0x35a1ae;}[_0x2e24ba(0x16f)](){var _0x2aa3e0=_0x2e24ba;this[_0x2aa3e0(0x159)]||this[_0x2aa3e0(0x1d5)]||this['_connectAttemptCount']>=this[_0x2aa3e0(0x156)]||(this[_0x2aa3e0(0x1a8)]=!0x1,this[_0x2aa3e0(0x159)]=!0x0,this[_0x2aa3e0(0x179)]++,this[_0x2aa3e0(0x1cb)]=new Promise((_0x2ec6dd,_0x2cd7ce)=>{var _0x3abe6a=_0x2aa3e0;this[_0x3abe6a(0x1a9)]()[_0x3abe6a(0x15b)](_0x5be9fa=>{var _0x4f149b=_0x3abe6a;let _0x517bd4=new _0x5be9fa(_0x4f149b(0x19f)+(!this[_0x4f149b(0x149)]&&this[_0x4f149b(0x191)]?'gateway.docker.internal':this[_0x4f149b(0x12c)])+':'+this[_0x4f149b(0x168)]);_0x517bd4[_0x4f149b(0x1c8)]=()=>{var _0x3f42dc=_0x4f149b;this[_0x3f42dc(0x110)]=!0x1,this[_0x3f42dc(0x1bc)](_0x517bd4),this[_0x3f42dc(0x1ab)](),_0x2cd7ce(new Error('logger\\x20websocket\\x20error'));},_0x517bd4[_0x4f149b(0x13e)]=()=>{var _0x39de52=_0x4f149b;this[_0x39de52(0x149)]||_0x517bd4[_0x39de52(0x194)]&&_0x517bd4['_socket'][_0x39de52(0x157)]&&_0x517bd4[_0x39de52(0x194)]['unref'](),_0x2ec6dd(_0x517bd4);},_0x517bd4[_0x4f149b(0x16d)]=()=>{var _0x16e540=_0x4f149b;this[_0x16e540(0x1a8)]=!0x0,this[_0x16e540(0x1bc)](_0x517bd4),this['_attemptToReconnectShortly']();},_0x517bd4[_0x4f149b(0x1b3)]=_0x2a5496=>{var _0x12cb02=_0x4f149b;try{_0x2a5496&&_0x2a5496[_0x12cb02(0x106)]&&this['_inBrowser']&&JSON[_0x12cb02(0x181)](_0x2a5496[_0x12cb02(0x106)])[_0x12cb02(0x1cc)]===_0x12cb02(0x163)&&this['global']['location']['reload']();}catch{}};})['then'](_0x3ed227=>(this[_0x3abe6a(0x1d5)]=!0x0,this[_0x3abe6a(0x159)]=!0x1,this[_0x3abe6a(0x1a8)]=!0x1,this[_0x3abe6a(0x110)]=!0x0,this[_0x3abe6a(0x179)]=0x0,_0x3ed227))[_0x3abe6a(0x1a3)](_0x1080d3=>(this[_0x3abe6a(0x1d5)]=!0x1,this[_0x3abe6a(0x159)]=!0x1,console[_0x3abe6a(0x129)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x3abe6a(0xef)]),_0x2cd7ce(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x1080d3&&_0x1080d3[_0x3abe6a(0xf8)])))));}));}['_disposeWebsocket'](_0x22ae79){var _0x8a229=_0x2e24ba;this['_connected']=!0x1,this[_0x8a229(0x159)]=!0x1;try{_0x22ae79['onclose']=null,_0x22ae79[_0x8a229(0x1c8)]=null,_0x22ae79['onopen']=null;}catch{}try{_0x22ae79['readyState']<0x2&&_0x22ae79[_0x8a229(0x13b)]();}catch{}}[_0x2e24ba(0x1ab)](){var _0x47a306=_0x2e24ba;clearTimeout(this[_0x47a306(0x1b8)]),!(this[_0x47a306(0x179)]>=this[_0x47a306(0x156)])&&(this[_0x47a306(0x1b8)]=setTimeout(()=>{var _0x354400=_0x47a306;this['_connected']||this[_0x354400(0x159)]||(this[_0x354400(0x16f)](),this[_0x354400(0x1cb)]?.[_0x354400(0x1a3)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this['_reconnectTimeout'][_0x47a306(0x157)]&&this[_0x47a306(0x1b8)][_0x47a306(0x157)]());}async[_0x2e24ba(0x1a1)](_0x5e5bc2){var _0x19ec6a=_0x2e24ba;try{if(!this[_0x19ec6a(0x110)])return;this[_0x19ec6a(0x1a8)]&&this[_0x19ec6a(0x16f)](),(await this[_0x19ec6a(0x1cb)])['send'](JSON['stringify'](_0x5e5bc2));}catch(_0x5694f1){console[_0x19ec6a(0x129)](this[_0x19ec6a(0xec)]+':\\x20'+(_0x5694f1&&_0x5694f1['message'])),this[_0x19ec6a(0x110)]=!0x1,this[_0x19ec6a(0x1ab)]();}}};function _0x4901(){var _0x1e4f10=['3065520uGpnsr','_sortProps','_ws','method','strLength','1492082ChbPjd','','elapsed','serialize','next.js','','Symbol','_connected','_inNextEdge','Map','_HTMLAllCollection','function','_sendErrorMessage','array','getOwnPropertySymbols','_webSocketErrorDocsLink','time','replace','totalStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','count','_console_ninja','1519746hoJGsM','location','message','_isSet','type','get','noFunctions','_hasSymbolPropertyOnItsPath','webpack','_property','call','string','_propertyName','_setNodeLabel','getOwnPropertyNames','angular','data','ws/index.js','stackTraceLimit','_consoleNinjaAllowedToStart','length','1sWrLui','constructor','nodeModules','name','_WebSocket','_allowedToSend','_getOwnPropertyDescriptor','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_hasSetOnItsPath','timeStamp','_p_name','_blacklistedProperty','\\x20server','level','log','127.0.0.1','autoExpandMaxDepth','toString','hostname','process','[object\\x20Map]','Boolean','_addFunctionsNode','_setNodeExpandableState','cappedProps','41261','trace','node','_addProperty','expressionsToEvaluate','warn','reduceLimits','prototype','host','_isPrimitiveType','versions','https://tinyurl.com/37x8b79t','sortProps','_undefined','object','defineProperty','concat','cappedElements','value','bind','Buffer','toLowerCase','hits','close','boolean','number','onopen','performance','set','_WebSocketClass','negativeZero','disabledLog','autoExpandPreviousObjects','date','_console_ninja_session','slice','25DWzLAi','_inBrowser','_regExpToString','_isMap','astro','_setNodeId','[object\\x20Array]','funcName','_type','_addObjectProperty','valueOf','substr','console','_additionalMetadata','_maxConnectAttemptCount','unref','_cleanNode','_connecting','resolveGetters','then','disabledTrace','elements','default','_getOwnPropertyNames','_isUndefined','WebSocket','_numberRegExp','reload','unshift',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Hecker\",\"192.168.1.8\"],'isExpressionToEvaluate','pathToFileURL','port','_getOwnPropertySymbols','bigint','create','index','onclose','_processTreeNodeResult','_connectToHostNow','unknown','current','1711122906978','props','isArray','forEach','_setNodeExpressionPath','_p_','push','_connectAttemptCount','[object\\x20Date]','_isNegativeZero','test','_keyStrRegExp','_isArray','NEXT_RUNTIME','root_exp','parse','RegExp','url','\\x20browser','remix','parent','global','HTMLAllCollection','_quotedRegExp','_setNodePermissions','split','_Symbol','Error','expId','error','now','dockerizedApp','edge','_objectToString','_socket','nan','null','nuxt','timeEnd','65242850vxtNyG','_p_length','7997346RsfJyD','includes','match','autoExpandPropertyCount','ws://','_capIfString','send','autoExpand','catch','_addLoadNode','1.0.0',\"/home/dan/.vscode/extensions/wallabyjs.console-ninja-1.0.294/node_modules\",'Number','_allowedToConnectOnSend','getWebSocketClass','_treeNodePropertiesAfterFullValue','_attemptToReconnectShortly','_isPrimitiveWrapperType','hrtime','depth','201321asifbp','allStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_treeNodePropertiesBeforeFullValue','onmessage','1030734WLbPGD','_dateToString','capped','getPrototypeOf','_reconnectTimeout','_setNodeQueryPath','positiveInfinity','Set','_disposeWebsocket','undefined','setter','path','POSITIVE_INFINITY','autoExpandLimit','pop','592FQDstf','__es'+'Module','coverage','symbol','stringify','onerror'];_0x4901=function(){return _0x1e4f10;};return _0x4901();}function b(_0x2df425,_0x5d6bfb,_0x2d5268,_0x58abd3,_0x3c1d55,_0x2f6a2c){var _0x4766aa=_0x2e24ba;let _0x3a50a4=_0x2d5268['split'](',')['map'](_0x2ae089=>{var _0x5e91ba=_0xee6b;try{_0x2df425['_console_ninja_session']||((_0x3c1d55===_0x5e91ba(0x1d2)||_0x3c1d55===_0x5e91ba(0x185)||_0x3c1d55===_0x5e91ba(0x14c)||_0x3c1d55===_0x5e91ba(0x105))&&(_0x3c1d55+=!_0x2df425[_0x5e91ba(0x11e)]?.[_0x5e91ba(0x12e)]?.[_0x5e91ba(0x126)]&&_0x2df425[_0x5e91ba(0x11e)]?.['env']?.['NEXT_RUNTIME']!==_0x5e91ba(0x192)?_0x5e91ba(0x184):_0x5e91ba(0x117)),_0x2df425['_console_ninja_session']={'id':+new Date(),'tool':_0x3c1d55});let _0x33c8d2=new X(_0x2df425,_0x5d6bfb,_0x2ae089,_0x58abd3,_0x2f6a2c);return _0x33c8d2[_0x5e91ba(0x1a1)][_0x5e91ba(0x137)](_0x33c8d2);}catch(_0x3e1c86){return console[_0x5e91ba(0x129)](_0x5e91ba(0x112),_0x3e1c86&&_0x3e1c86[_0x5e91ba(0xf8)]),()=>{};}});return _0x4dece3=>_0x3a50a4[_0x4766aa(0x175)](_0x19522a=>_0x19522a(_0x4dece3));}function W(_0x39fa15){var _0x56ff98=_0x2e24ba;let _0x1d5635=function(_0x5b2e8e,_0x17da4d){return _0x17da4d-_0x5b2e8e;},_0x1967d2;if(_0x39fa15[_0x56ff98(0x13f)])_0x1967d2=function(){var _0x5b9982=_0x56ff98;return _0x39fa15[_0x5b9982(0x13f)][_0x5b9982(0x190)]();};else{if(_0x39fa15[_0x56ff98(0x11e)]&&_0x39fa15['process'][_0x56ff98(0x1ad)]&&_0x39fa15[_0x56ff98(0x11e)]?.['env']?.[_0x56ff98(0x17f)]!==_0x56ff98(0x192))_0x1967d2=function(){var _0x13fd6c=_0x56ff98;return _0x39fa15[_0x13fd6c(0x11e)]['hrtime']();},_0x1d5635=function(_0x691495,_0x16c68a){return 0x3e8*(_0x16c68a[0x0]-_0x691495[0x0])+(_0x16c68a[0x1]-_0x691495[0x1])/0xf4240;};else try{let {performance:_0x4d943e}=require('perf_hooks');_0x1967d2=function(){return _0x4d943e['now']();};}catch{_0x1967d2=function(){return+new Date();};}}return{'elapsed':_0x1d5635,'timeStamp':_0x1967d2,'now':()=>Date[_0x56ff98(0x190)]()};}function J(_0xa734b3,_0x2423b0,_0x532058){var _0x4cd007=_0x2e24ba;if(_0xa734b3[_0x4cd007(0x109)]!==void 0x0)return _0xa734b3['_consoleNinjaAllowedToStart'];let _0x17e52a=_0xa734b3[_0x4cd007(0x11e)]?.['versions']?.['node']||_0xa734b3[_0x4cd007(0x11e)]?.['env']?.[_0x4cd007(0x17f)]===_0x4cd007(0x192);return _0x17e52a&&_0x532058===_0x4cd007(0x197)?_0xa734b3[_0x4cd007(0x109)]=!0x1:_0xa734b3[_0x4cd007(0x109)]=_0x17e52a||!_0x2423b0||_0xa734b3[_0x4cd007(0xf7)]?.[_0x4cd007(0x11d)]&&_0x2423b0[_0x4cd007(0x19c)](_0xa734b3['location'][_0x4cd007(0x11d)]),_0xa734b3[_0x4cd007(0x109)];}function _0xee6b(_0x6fef8b,_0x2619fb){var _0x4901a=_0x4901();return _0xee6b=function(_0xee6b27,_0x3f29f2){_0xee6b27=_0xee6b27-0xea;var _0x47a327=_0x4901a[_0xee6b27];return _0x47a327;},_0xee6b(_0x6fef8b,_0x2619fb);}function Y(_0x461137,_0x2d3424,_0x14e307,_0x523118){var _0x3cc829=_0x2e24ba;_0x461137=_0x461137,_0x2d3424=_0x2d3424,_0x14e307=_0x14e307,_0x523118=_0x523118;let _0x38792b=W(_0x461137),_0x47dc2a=_0x38792b[_0x3cc829(0x1d0)],_0x302909=_0x38792b[_0x3cc829(0x114)];class _0x4f36eb{constructor(){var _0xccb24e=_0x3cc829;this[_0xccb24e(0x17d)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0xccb24e(0x162)]=/^(0|[1-9][0-9]*)$/,this[_0xccb24e(0x189)]=/'([^\\\\']|\\\\')*'/,this[_0xccb24e(0x131)]=_0x461137[_0xccb24e(0x1bd)],this[_0xccb24e(0xea)]=_0x461137[_0xccb24e(0x188)],this[_0xccb24e(0x111)]=Object['getOwnPropertyDescriptor'],this[_0xccb24e(0x15f)]=Object[_0xccb24e(0x104)],this[_0xccb24e(0x18c)]=_0x461137[_0xccb24e(0x1d4)],this[_0xccb24e(0x14a)]=RegExp['prototype'][_0xccb24e(0x11c)],this[_0xccb24e(0x1b5)]=Date[_0xccb24e(0x12b)][_0xccb24e(0x11c)];}[_0x3cc829(0x1d1)](_0x2f5e4c,_0x31cbba,_0x51fe4d,_0x559a9e){var _0x127775=_0x3cc829,_0x552cca=this,_0x1d4b9f=_0x51fe4d[_0x127775(0x1a2)];function _0x4ee347(_0x17afef,_0x324933,_0x470e3c){var _0x2b979c=_0x127775;_0x324933['type']=_0x2b979c(0x170),_0x324933['error']=_0x17afef[_0x2b979c(0xf8)],_0x3ec831=_0x470e3c[_0x2b979c(0x126)]['current'],_0x470e3c['node'][_0x2b979c(0x171)]=_0x324933,_0x552cca[_0x2b979c(0x1b2)](_0x324933,_0x470e3c);}try{_0x51fe4d[_0x127775(0x118)]++,_0x51fe4d['autoExpand']&&_0x51fe4d[_0x127775(0x144)][_0x127775(0x178)](_0x31cbba);var _0x35d448,_0x25330e,_0x57199d,_0x349cb8,_0x27b808=[],_0x36e963=[],_0x12c143,_0x502b2d=this['_type'](_0x31cbba),_0x2468d8=_0x502b2d===_0x127775(0xed),_0x231f3c=!0x1,_0x540b57=_0x502b2d===_0x127775(0xeb),_0xa5d0ca=this[_0x127775(0x12d)](_0x502b2d),_0x1f7b23=this[_0x127775(0x1ac)](_0x502b2d),_0x590bc0=_0xa5d0ca||_0x1f7b23,_0x5d228c={},_0x1676a7=0x0,_0x4384bf=!0x1,_0x3ec831,_0x2f31c7=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x51fe4d[_0x127775(0x1ae)]){if(_0x2468d8){if(_0x25330e=_0x31cbba[_0x127775(0x10a)],_0x25330e>_0x51fe4d['elements']){for(_0x57199d=0x0,_0x349cb8=_0x51fe4d['elements'],_0x35d448=_0x57199d;_0x35d448<_0x349cb8;_0x35d448++)_0x36e963[_0x127775(0x178)](_0x552cca[_0x127775(0x127)](_0x27b808,_0x31cbba,_0x502b2d,_0x35d448,_0x51fe4d));_0x2f5e4c[_0x127775(0x135)]=!0x0;}else{for(_0x57199d=0x0,_0x349cb8=_0x25330e,_0x35d448=_0x57199d;_0x35d448<_0x349cb8;_0x35d448++)_0x36e963[_0x127775(0x178)](_0x552cca['_addProperty'](_0x27b808,_0x31cbba,_0x502b2d,_0x35d448,_0x51fe4d));}_0x51fe4d[_0x127775(0x19e)]+=_0x36e963['length'];}if(!(_0x502b2d==='null'||_0x502b2d==='undefined')&&!_0xa5d0ca&&_0x502b2d!=='String'&&_0x502b2d!==_0x127775(0x138)&&_0x502b2d!=='bigint'){var _0x3b8006=_0x559a9e[_0x127775(0x173)]||_0x51fe4d[_0x127775(0x173)];if(this[_0x127775(0xf9)](_0x31cbba)?(_0x35d448=0x0,_0x31cbba[_0x127775(0x175)](function(_0x4207f4){var _0x54f7c3=_0x127775;if(_0x1676a7++,_0x51fe4d[_0x54f7c3(0x19e)]++,_0x1676a7>_0x3b8006){_0x4384bf=!0x0;return;}if(!_0x51fe4d[_0x54f7c3(0x166)]&&_0x51fe4d['autoExpand']&&_0x51fe4d[_0x54f7c3(0x19e)]>_0x51fe4d['autoExpandLimit']){_0x4384bf=!0x0;return;}_0x36e963[_0x54f7c3(0x178)](_0x552cca[_0x54f7c3(0x127)](_0x27b808,_0x31cbba,_0x54f7c3(0x1bb),_0x35d448++,_0x51fe4d,function(_0x4b3ee6){return function(){return _0x4b3ee6;};}(_0x4207f4)));})):this[_0x127775(0x14b)](_0x31cbba)&&_0x31cbba['forEach'](function(_0x254acc,_0x5ce972){var _0x122111=_0x127775;if(_0x1676a7++,_0x51fe4d['autoExpandPropertyCount']++,_0x1676a7>_0x3b8006){_0x4384bf=!0x0;return;}if(!_0x51fe4d['isExpressionToEvaluate']&&_0x51fe4d[_0x122111(0x1a2)]&&_0x51fe4d['autoExpandPropertyCount']>_0x51fe4d[_0x122111(0x1c1)]){_0x4384bf=!0x0;return;}var _0x507f63=_0x5ce972[_0x122111(0x11c)]();_0x507f63['length']>0x64&&(_0x507f63=_0x507f63[_0x122111(0x147)](0x0,0x64)+'...'),_0x36e963['push'](_0x552cca[_0x122111(0x127)](_0x27b808,_0x31cbba,_0x122111(0x1d7),_0x507f63,_0x51fe4d,function(_0x489c80){return function(){return _0x489c80;};}(_0x254acc)));}),!_0x231f3c){try{for(_0x12c143 in _0x31cbba)if(!(_0x2468d8&&_0x2f31c7[_0x127775(0x17c)](_0x12c143))&&!this['_blacklistedProperty'](_0x31cbba,_0x12c143,_0x51fe4d)){if(_0x1676a7++,_0x51fe4d[_0x127775(0x19e)]++,_0x1676a7>_0x3b8006){_0x4384bf=!0x0;break;}if(!_0x51fe4d['isExpressionToEvaluate']&&_0x51fe4d['autoExpand']&&_0x51fe4d['autoExpandPropertyCount']>_0x51fe4d[_0x127775(0x1c1)]){_0x4384bf=!0x0;break;}_0x36e963[_0x127775(0x178)](_0x552cca[_0x127775(0x151)](_0x27b808,_0x5d228c,_0x31cbba,_0x502b2d,_0x12c143,_0x51fe4d));}}catch{}if(_0x5d228c[_0x127775(0x19a)]=!0x0,_0x540b57&&(_0x5d228c[_0x127775(0x115)]=!0x0),!_0x4384bf){var _0xd14c5c=[][_0x127775(0x134)](this['_getOwnPropertyNames'](_0x31cbba))[_0x127775(0x134)](this[_0x127775(0x169)](_0x31cbba));for(_0x35d448=0x0,_0x25330e=_0xd14c5c[_0x127775(0x10a)];_0x35d448<_0x25330e;_0x35d448++)if(_0x12c143=_0xd14c5c[_0x35d448],!(_0x2468d8&&_0x2f31c7[_0x127775(0x17c)](_0x12c143[_0x127775(0x11c)]()))&&!this['_blacklistedProperty'](_0x31cbba,_0x12c143,_0x51fe4d)&&!_0x5d228c[_0x127775(0x177)+_0x12c143['toString']()]){if(_0x1676a7++,_0x51fe4d['autoExpandPropertyCount']++,_0x1676a7>_0x3b8006){_0x4384bf=!0x0;break;}if(!_0x51fe4d[_0x127775(0x166)]&&_0x51fe4d[_0x127775(0x1a2)]&&_0x51fe4d[_0x127775(0x19e)]>_0x51fe4d[_0x127775(0x1c1)]){_0x4384bf=!0x0;break;}_0x36e963[_0x127775(0x178)](_0x552cca[_0x127775(0x151)](_0x27b808,_0x5d228c,_0x31cbba,_0x502b2d,_0x12c143,_0x51fe4d));}}}}}if(_0x2f5e4c['type']=_0x502b2d,_0x590bc0?(_0x2f5e4c[_0x127775(0x136)]=_0x31cbba[_0x127775(0x152)](),this[_0x127775(0x1a0)](_0x502b2d,_0x2f5e4c,_0x51fe4d,_0x559a9e)):_0x502b2d===_0x127775(0x145)?_0x2f5e4c['value']=this[_0x127775(0x1b5)]['call'](_0x31cbba):_0x502b2d===_0x127775(0x16a)?_0x2f5e4c[_0x127775(0x136)]=_0x31cbba[_0x127775(0x11c)]():_0x502b2d===_0x127775(0x182)?_0x2f5e4c['value']=this[_0x127775(0x14a)][_0x127775(0x100)](_0x31cbba):_0x502b2d===_0x127775(0x1c6)&&this['_Symbol']?_0x2f5e4c[_0x127775(0x136)]=this[_0x127775(0x18c)][_0x127775(0x12b)][_0x127775(0x11c)][_0x127775(0x100)](_0x31cbba):!_0x51fe4d[_0x127775(0x1ae)]&&!(_0x502b2d===_0x127775(0x196)||_0x502b2d==='undefined')&&(delete _0x2f5e4c[_0x127775(0x136)],_0x2f5e4c['capped']=!0x0),_0x4384bf&&(_0x2f5e4c[_0x127775(0x123)]=!0x0),_0x3ec831=_0x51fe4d[_0x127775(0x126)][_0x127775(0x171)],_0x51fe4d[_0x127775(0x126)][_0x127775(0x171)]=_0x2f5e4c,this[_0x127775(0x1b2)](_0x2f5e4c,_0x51fe4d),_0x36e963[_0x127775(0x10a)]){for(_0x35d448=0x0,_0x25330e=_0x36e963['length'];_0x35d448<_0x25330e;_0x35d448++)_0x36e963[_0x35d448](_0x35d448);}_0x27b808['length']&&(_0x2f5e4c[_0x127775(0x173)]=_0x27b808);}catch(_0x311d90){_0x4ee347(_0x311d90,_0x2f5e4c,_0x51fe4d);}return this[_0x127775(0x155)](_0x31cbba,_0x2f5e4c),this['_treeNodePropertiesAfterFullValue'](_0x2f5e4c,_0x51fe4d),_0x51fe4d['node'][_0x127775(0x171)]=_0x3ec831,_0x51fe4d[_0x127775(0x118)]--,_0x51fe4d[_0x127775(0x1a2)]=_0x1d4b9f,_0x51fe4d[_0x127775(0x1a2)]&&_0x51fe4d['autoExpandPreviousObjects'][_0x127775(0x1c2)](),_0x2f5e4c;}[_0x3cc829(0x169)](_0x1a3d65){var _0x2171e6=_0x3cc829;return Object[_0x2171e6(0xee)]?Object[_0x2171e6(0xee)](_0x1a3d65):[];}[_0x3cc829(0xf9)](_0xdeaa20){var _0x5a8d78=_0x3cc829;return!!(_0xdeaa20&&_0x461137['Set']&&this[_0x5a8d78(0x193)](_0xdeaa20)==='[object\\x20Set]'&&_0xdeaa20[_0x5a8d78(0x175)]);}[_0x3cc829(0x116)](_0x531384,_0x204c91,_0x546d6b){var _0x50dcae=_0x3cc829;return _0x546d6b[_0x50dcae(0xfc)]?typeof _0x531384[_0x204c91]==_0x50dcae(0xeb):!0x1;}[_0x3cc829(0x150)](_0x304788){var _0x57c874=_0x3cc829,_0x5efb9e='';return _0x5efb9e=typeof _0x304788,_0x5efb9e===_0x57c874(0x132)?this[_0x57c874(0x193)](_0x304788)==='[object\\x20Array]'?_0x5efb9e=_0x57c874(0xed):this[_0x57c874(0x193)](_0x304788)===_0x57c874(0x17a)?_0x5efb9e=_0x57c874(0x145):this[_0x57c874(0x193)](_0x304788)==='[object\\x20BigInt]'?_0x5efb9e='bigint':_0x304788===null?_0x5efb9e=_0x57c874(0x196):_0x304788[_0x57c874(0x10c)]&&(_0x5efb9e=_0x304788['constructor'][_0x57c874(0x10e)]||_0x5efb9e):_0x5efb9e===_0x57c874(0x1bd)&&this[_0x57c874(0xea)]&&_0x304788 instanceof this[_0x57c874(0xea)]&&(_0x5efb9e=_0x57c874(0x188)),_0x5efb9e;}[_0x3cc829(0x193)](_0x2616e3){var _0x168627=_0x3cc829;return Object[_0x168627(0x12b)][_0x168627(0x11c)][_0x168627(0x100)](_0x2616e3);}[_0x3cc829(0x12d)](_0x4f003b){var _0x47785a=_0x3cc829;return _0x4f003b===_0x47785a(0x13c)||_0x4f003b===_0x47785a(0x101)||_0x4f003b==='number';}[_0x3cc829(0x1ac)](_0x580da9){var _0x5681ba=_0x3cc829;return _0x580da9===_0x5681ba(0x120)||_0x580da9==='String'||_0x580da9===_0x5681ba(0x1a7);}[_0x3cc829(0x127)](_0x31f0da,_0x565503,_0x46f7f0,_0x56dfee,_0xe36748,_0x38444d){var _0x590a36=this;return function(_0x280d8e){var _0x1f71e3=_0xee6b,_0x57346c=_0xe36748[_0x1f71e3(0x126)][_0x1f71e3(0x171)],_0x22ec13=_0xe36748['node'][_0x1f71e3(0x16c)],_0x3b5481=_0xe36748[_0x1f71e3(0x126)]['parent'];_0xe36748['node'][_0x1f71e3(0x186)]=_0x57346c,_0xe36748['node'][_0x1f71e3(0x16c)]=typeof _0x56dfee==_0x1f71e3(0x13d)?_0x56dfee:_0x280d8e,_0x31f0da['push'](_0x590a36[_0x1f71e3(0xff)](_0x565503,_0x46f7f0,_0x56dfee,_0xe36748,_0x38444d)),_0xe36748[_0x1f71e3(0x126)]['parent']=_0x3b5481,_0xe36748[_0x1f71e3(0x126)][_0x1f71e3(0x16c)]=_0x22ec13;};}[_0x3cc829(0x151)](_0x325751,_0x1dbd8e,_0x657241,_0x18a4b8,_0x467719,_0xeb9a16,_0x592c7c){var _0x16836a=_0x3cc829,_0x4026c8=this;return _0x1dbd8e[_0x16836a(0x177)+_0x467719[_0x16836a(0x11c)]()]=!0x0,function(_0x2950dc){var _0x58ae19=_0x16836a,_0x989e8a=_0xeb9a16[_0x58ae19(0x126)][_0x58ae19(0x171)],_0x5474cc=_0xeb9a16['node'][_0x58ae19(0x16c)],_0xfc0a3=_0xeb9a16[_0x58ae19(0x126)][_0x58ae19(0x186)];_0xeb9a16['node'][_0x58ae19(0x186)]=_0x989e8a,_0xeb9a16[_0x58ae19(0x126)][_0x58ae19(0x16c)]=_0x2950dc,_0x325751[_0x58ae19(0x178)](_0x4026c8['_property'](_0x657241,_0x18a4b8,_0x467719,_0xeb9a16,_0x592c7c)),_0xeb9a16['node'][_0x58ae19(0x186)]=_0xfc0a3,_0xeb9a16['node'][_0x58ae19(0x16c)]=_0x5474cc;};}[_0x3cc829(0xff)](_0x349198,_0x48f314,_0x35f105,_0x78d7c8,_0x3e2099){var _0x4625c3=_0x3cc829,_0x195c63=this;_0x3e2099||(_0x3e2099=function(_0x11bf2d,_0x5e5d8d){return _0x11bf2d[_0x5e5d8d];});var _0x393576=_0x35f105['toString'](),_0x3946be=_0x78d7c8[_0x4625c3(0x128)]||{},_0x466335=_0x78d7c8[_0x4625c3(0x1ae)],_0x49c369=_0x78d7c8[_0x4625c3(0x166)];try{var _0x3faaec=this[_0x4625c3(0x14b)](_0x349198),_0x2180ed=_0x393576;_0x3faaec&&_0x2180ed[0x0]==='\\x27'&&(_0x2180ed=_0x2180ed['substr'](0x1,_0x2180ed['length']-0x2));var _0x4dddc3=_0x78d7c8[_0x4625c3(0x128)]=_0x3946be[_0x4625c3(0x177)+_0x2180ed];_0x4dddc3&&(_0x78d7c8['depth']=_0x78d7c8['depth']+0x1),_0x78d7c8[_0x4625c3(0x166)]=!!_0x4dddc3;var _0x5bf324=typeof _0x35f105==_0x4625c3(0x1c6),_0x59621f={'name':_0x5bf324||_0x3faaec?_0x393576:this[_0x4625c3(0x102)](_0x393576)};if(_0x5bf324&&(_0x59621f[_0x4625c3(0x1c6)]=!0x0),!(_0x48f314===_0x4625c3(0xed)||_0x48f314===_0x4625c3(0x18d))){var _0x26baac=this[_0x4625c3(0x111)](_0x349198,_0x35f105);if(_0x26baac&&(_0x26baac[_0x4625c3(0x140)]&&(_0x59621f[_0x4625c3(0x1be)]=!0x0),_0x26baac[_0x4625c3(0xfb)]&&!_0x4dddc3&&!_0x78d7c8['resolveGetters']))return _0x59621f['getter']=!0x0,this[_0x4625c3(0x16e)](_0x59621f,_0x78d7c8),_0x59621f;}var _0xd0955d;try{_0xd0955d=_0x3e2099(_0x349198,_0x35f105);}catch(_0x12e5cb){return _0x59621f={'name':_0x393576,'type':'unknown','error':_0x12e5cb['message']},this['_processTreeNodeResult'](_0x59621f,_0x78d7c8),_0x59621f;}var _0x1bdcaa=this[_0x4625c3(0x150)](_0xd0955d),_0x14de9b=this[_0x4625c3(0x12d)](_0x1bdcaa);if(_0x59621f[_0x4625c3(0xfa)]=_0x1bdcaa,_0x14de9b)this['_processTreeNodeResult'](_0x59621f,_0x78d7c8,_0xd0955d,function(){var _0x436805=_0x4625c3;_0x59621f[_0x436805(0x136)]=_0xd0955d[_0x436805(0x152)](),!_0x4dddc3&&_0x195c63[_0x436805(0x1a0)](_0x1bdcaa,_0x59621f,_0x78d7c8,{});});else{var _0x3b8df8=_0x78d7c8['autoExpand']&&_0x78d7c8[_0x4625c3(0x118)]<_0x78d7c8[_0x4625c3(0x11b)]&&_0x78d7c8[_0x4625c3(0x144)]['indexOf'](_0xd0955d)<0x0&&_0x1bdcaa!==_0x4625c3(0xeb)&&_0x78d7c8[_0x4625c3(0x19e)]<_0x78d7c8[_0x4625c3(0x1c1)];_0x3b8df8||_0x78d7c8['level']<_0x466335||_0x4dddc3?(this[_0x4625c3(0x1d1)](_0x59621f,_0xd0955d,_0x78d7c8,_0x4dddc3||{}),this[_0x4625c3(0x155)](_0xd0955d,_0x59621f)):this[_0x4625c3(0x16e)](_0x59621f,_0x78d7c8,_0xd0955d,function(){var _0x283a30=_0x4625c3;_0x1bdcaa===_0x283a30(0x196)||_0x1bdcaa===_0x283a30(0x1bd)||(delete _0x59621f[_0x283a30(0x136)],_0x59621f[_0x283a30(0x1b6)]=!0x0);});}return _0x59621f;}finally{_0x78d7c8[_0x4625c3(0x128)]=_0x3946be,_0x78d7c8['depth']=_0x466335,_0x78d7c8[_0x4625c3(0x166)]=_0x49c369;}}[_0x3cc829(0x1a0)](_0x1cf7cd,_0x6facc,_0x4d5e8f,_0x20f5b3){var _0x26d586=_0x3cc829,_0x26934c=_0x20f5b3['strLength']||_0x4d5e8f[_0x26d586(0x1cd)];if((_0x1cf7cd===_0x26d586(0x101)||_0x1cf7cd==='String')&&_0x6facc[_0x26d586(0x136)]){let _0x476118=_0x6facc[_0x26d586(0x136)][_0x26d586(0x10a)];_0x4d5e8f['allStrLength']+=_0x476118,_0x4d5e8f[_0x26d586(0x1b0)]>_0x4d5e8f[_0x26d586(0xf2)]?(_0x6facc[_0x26d586(0x1b6)]='',delete _0x6facc[_0x26d586(0x136)]):_0x476118>_0x26934c&&(_0x6facc['capped']=_0x6facc[_0x26d586(0x136)][_0x26d586(0x153)](0x0,_0x26934c),delete _0x6facc[_0x26d586(0x136)]);}}[_0x3cc829(0x14b)](_0x3d2daf){var _0x11b8cd=_0x3cc829;return!!(_0x3d2daf&&_0x461137[_0x11b8cd(0x1d7)]&&this[_0x11b8cd(0x193)](_0x3d2daf)===_0x11b8cd(0x11f)&&_0x3d2daf[_0x11b8cd(0x175)]);}[_0x3cc829(0x102)](_0x4ac0de){var _0x5abdee=_0x3cc829;if(_0x4ac0de[_0x5abdee(0x19d)](/^\\d+$/))return _0x4ac0de;var _0x58f195;try{_0x58f195=JSON[_0x5abdee(0x1c7)](''+_0x4ac0de);}catch{_0x58f195='\\x22'+this[_0x5abdee(0x193)](_0x4ac0de)+'\\x22';}return _0x58f195[_0x5abdee(0x19d)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x58f195=_0x58f195[_0x5abdee(0x153)](0x1,_0x58f195[_0x5abdee(0x10a)]-0x2):_0x58f195=_0x58f195[_0x5abdee(0xf1)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x5abdee(0xf1)](/(^\"|\"$)/g,'\\x27'),_0x58f195;}[_0x3cc829(0x16e)](_0x312f31,_0x137a5b,_0x517468,_0x40abbc){var _0x28a2a1=_0x3cc829;this[_0x28a2a1(0x1b2)](_0x312f31,_0x137a5b),_0x40abbc&&_0x40abbc(),this[_0x28a2a1(0x155)](_0x517468,_0x312f31),this[_0x28a2a1(0x1aa)](_0x312f31,_0x137a5b);}[_0x3cc829(0x1b2)](_0x5d8c8f,_0x1f2158){var _0x46e47d=_0x3cc829;this[_0x46e47d(0x14d)](_0x5d8c8f,_0x1f2158),this['_setNodeQueryPath'](_0x5d8c8f,_0x1f2158),this[_0x46e47d(0x176)](_0x5d8c8f,_0x1f2158),this[_0x46e47d(0x18a)](_0x5d8c8f,_0x1f2158);}[_0x3cc829(0x14d)](_0x2027dd,_0x2cb5fd){}[_0x3cc829(0x1b9)](_0x519dfb,_0x4f71d2){}[_0x3cc829(0x103)](_0x49cbab,_0x292d9d){}[_0x3cc829(0x160)](_0x10123e){var _0x499d1b=_0x3cc829;return _0x10123e===this[_0x499d1b(0x131)];}[_0x3cc829(0x1aa)](_0x268815,_0x6a8ac5){var _0x40060a=_0x3cc829;this[_0x40060a(0x103)](_0x268815,_0x6a8ac5),this['_setNodeExpandableState'](_0x268815),_0x6a8ac5[_0x40060a(0x130)]&&this[_0x40060a(0x1ca)](_0x268815),this['_addFunctionsNode'](_0x268815,_0x6a8ac5),this[_0x40060a(0x1a4)](_0x268815,_0x6a8ac5),this[_0x40060a(0x158)](_0x268815);}[_0x3cc829(0x155)](_0x5bb24b,_0x192dcf){var _0x441d1e=_0x3cc829;let _0x46c981;try{_0x461137[_0x441d1e(0x154)]&&(_0x46c981=_0x461137['console'][_0x441d1e(0x18f)],_0x461137[_0x441d1e(0x154)][_0x441d1e(0x18f)]=function(){}),_0x5bb24b&&typeof _0x5bb24b[_0x441d1e(0x10a)]==_0x441d1e(0x13d)&&(_0x192dcf[_0x441d1e(0x10a)]=_0x5bb24b[_0x441d1e(0x10a)]);}catch{}finally{_0x46c981&&(_0x461137[_0x441d1e(0x154)][_0x441d1e(0x18f)]=_0x46c981);}if(_0x192dcf[_0x441d1e(0xfa)]===_0x441d1e(0x13d)||_0x192dcf[_0x441d1e(0xfa)]==='Number'){if(isNaN(_0x192dcf['value']))_0x192dcf[_0x441d1e(0x195)]=!0x0,delete _0x192dcf['value'];else switch(_0x192dcf[_0x441d1e(0x136)]){case Number[_0x441d1e(0x1c0)]:_0x192dcf[_0x441d1e(0x1ba)]=!0x0,delete _0x192dcf[_0x441d1e(0x136)];break;case Number['NEGATIVE_INFINITY']:_0x192dcf['negativeInfinity']=!0x0,delete _0x192dcf[_0x441d1e(0x136)];break;case 0x0:this['_isNegativeZero'](_0x192dcf['value'])&&(_0x192dcf[_0x441d1e(0x142)]=!0x0);break;}}else _0x192dcf[_0x441d1e(0xfa)]===_0x441d1e(0xeb)&&typeof _0x5bb24b[_0x441d1e(0x10e)]==_0x441d1e(0x101)&&_0x5bb24b[_0x441d1e(0x10e)]&&_0x192dcf[_0x441d1e(0x10e)]&&_0x5bb24b['name']!==_0x192dcf[_0x441d1e(0x10e)]&&(_0x192dcf[_0x441d1e(0x14f)]=_0x5bb24b[_0x441d1e(0x10e)]);}[_0x3cc829(0x17b)](_0x2230bb){return 0x1/_0x2230bb===Number['NEGATIVE_INFINITY'];}[_0x3cc829(0x1ca)](_0x3cde4e){var _0x2c9f5b=_0x3cc829;!_0x3cde4e[_0x2c9f5b(0x173)]||!_0x3cde4e[_0x2c9f5b(0x173)][_0x2c9f5b(0x10a)]||_0x3cde4e[_0x2c9f5b(0xfa)]===_0x2c9f5b(0xed)||_0x3cde4e[_0x2c9f5b(0xfa)]===_0x2c9f5b(0x1d7)||_0x3cde4e['type']===_0x2c9f5b(0x1bb)||_0x3cde4e['props']['sort'](function(_0x469659,_0x26a1fc){var _0x52f84b=_0x2c9f5b,_0x5c605d=_0x469659[_0x52f84b(0x10e)][_0x52f84b(0x139)](),_0x4583a9=_0x26a1fc[_0x52f84b(0x10e)]['toLowerCase']();return _0x5c605d<_0x4583a9?-0x1:_0x5c605d>_0x4583a9?0x1:0x0;});}[_0x3cc829(0x121)](_0x5864d8,_0x52b29b){var _0x4e8533=_0x3cc829;if(!(_0x52b29b['noFunctions']||!_0x5864d8[_0x4e8533(0x173)]||!_0x5864d8['props'][_0x4e8533(0x10a)])){for(var _0x54f167=[],_0x53602f=[],_0x4f628e=0x0,_0x533166=_0x5864d8['props'][_0x4e8533(0x10a)];_0x4f628e<_0x533166;_0x4f628e++){var _0x5f4bfb=_0x5864d8['props'][_0x4f628e];_0x5f4bfb[_0x4e8533(0xfa)]===_0x4e8533(0xeb)?_0x54f167[_0x4e8533(0x178)](_0x5f4bfb):_0x53602f[_0x4e8533(0x178)](_0x5f4bfb);}if(!(!_0x53602f[_0x4e8533(0x10a)]||_0x54f167[_0x4e8533(0x10a)]<=0x1)){_0x5864d8[_0x4e8533(0x173)]=_0x53602f;var _0x115cbb={'functionsNode':!0x0,'props':_0x54f167};this['_setNodeId'](_0x115cbb,_0x52b29b),this[_0x4e8533(0x103)](_0x115cbb,_0x52b29b),this['_setNodeExpandableState'](_0x115cbb),this[_0x4e8533(0x18a)](_0x115cbb,_0x52b29b),_0x115cbb['id']+='\\x20f',_0x5864d8['props'][_0x4e8533(0x164)](_0x115cbb);}}}[_0x3cc829(0x1a4)](_0x28d964,_0x19ca82){}[_0x3cc829(0x122)](_0x5c11e4){}[_0x3cc829(0x17e)](_0x27c359){var _0x4425fd=_0x3cc829;return Array[_0x4425fd(0x174)](_0x27c359)||typeof _0x27c359==_0x4425fd(0x132)&&this['_objectToString'](_0x27c359)===_0x4425fd(0x14e);}[_0x3cc829(0x18a)](_0x525784,_0x406210){}[_0x3cc829(0x158)](_0x2fcb02){var _0x2c2fa9=_0x3cc829;delete _0x2fcb02[_0x2c2fa9(0xfd)],delete _0x2fcb02[_0x2c2fa9(0x113)],delete _0x2fcb02['_hasMapOnItsPath'];}[_0x3cc829(0x176)](_0x5bdee7,_0x2a4b0f){}}let _0x567005=new _0x4f36eb(),_0x5e2a3a={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x476a0a={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x36b903(_0x3c0d51,_0x3af336,_0x3fec6,_0x333c2e,_0x46872c,_0x4dce46){var _0x291723=_0x3cc829;let _0x3346b3,_0x1a48be;try{_0x1a48be=_0x302909(),_0x3346b3=_0x14e307[_0x3af336],!_0x3346b3||_0x1a48be-_0x3346b3['ts']>0x1f4&&_0x3346b3[_0x291723(0xf4)]&&_0x3346b3[_0x291723(0xf0)]/_0x3346b3['count']<0x64?(_0x14e307[_0x3af336]=_0x3346b3={'count':0x0,'time':0x0,'ts':_0x1a48be},_0x14e307[_0x291723(0x13a)]={}):_0x1a48be-_0x14e307[_0x291723(0x13a)]['ts']>0x32&&_0x14e307[_0x291723(0x13a)][_0x291723(0xf4)]&&_0x14e307['hits'][_0x291723(0xf0)]/_0x14e307['hits']['count']<0x64&&(_0x14e307['hits']={});let _0x73d3d7=[],_0xc83ca8=_0x3346b3['reduceLimits']||_0x14e307[_0x291723(0x13a)][_0x291723(0x12a)]?_0x476a0a:_0x5e2a3a,_0x4dbd7f=_0x3d0b50=>{var _0x91dadb=_0x291723;let _0x37d8d6={};return _0x37d8d6[_0x91dadb(0x173)]=_0x3d0b50[_0x91dadb(0x173)],_0x37d8d6['elements']=_0x3d0b50[_0x91dadb(0x15d)],_0x37d8d6[_0x91dadb(0x1cd)]=_0x3d0b50[_0x91dadb(0x1cd)],_0x37d8d6[_0x91dadb(0xf2)]=_0x3d0b50[_0x91dadb(0xf2)],_0x37d8d6[_0x91dadb(0x1c1)]=_0x3d0b50[_0x91dadb(0x1c1)],_0x37d8d6['autoExpandMaxDepth']=_0x3d0b50[_0x91dadb(0x11b)],_0x37d8d6[_0x91dadb(0x130)]=!0x1,_0x37d8d6['noFunctions']=!_0x2d3424,_0x37d8d6[_0x91dadb(0x1ae)]=0x1,_0x37d8d6[_0x91dadb(0x118)]=0x0,_0x37d8d6[_0x91dadb(0x18e)]='root_exp_id',_0x37d8d6['rootExpression']=_0x91dadb(0x180),_0x37d8d6['autoExpand']=!0x0,_0x37d8d6['autoExpandPreviousObjects']=[],_0x37d8d6[_0x91dadb(0x19e)]=0x0,_0x37d8d6[_0x91dadb(0x15a)]=!0x0,_0x37d8d6[_0x91dadb(0x1b0)]=0x0,_0x37d8d6[_0x91dadb(0x126)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x37d8d6;};for(var _0x155d69=0x0;_0x155d69<_0x46872c['length'];_0x155d69++)_0x73d3d7[_0x291723(0x178)](_0x567005[_0x291723(0x1d1)]({'timeNode':_0x3c0d51===_0x291723(0xf0)||void 0x0},_0x46872c[_0x155d69],_0x4dbd7f(_0xc83ca8),{}));if(_0x3c0d51===_0x291723(0x125)){let _0x13f79b=Error[_0x291723(0x108)];try{Error[_0x291723(0x108)]=0x1/0x0,_0x73d3d7['push'](_0x567005[_0x291723(0x1d1)]({'stackNode':!0x0},new Error()['stack'],_0x4dbd7f(_0xc83ca8),{'strLength':0x1/0x0}));}finally{Error[_0x291723(0x108)]=_0x13f79b;}}return{'method':'log','version':_0x523118,'args':[{'ts':_0x3fec6,'session':_0x333c2e,'args':_0x73d3d7,'id':_0x3af336,'context':_0x4dce46}]};}catch(_0x2468fb){return{'method':_0x291723(0x119),'version':_0x523118,'args':[{'ts':_0x3fec6,'session':_0x333c2e,'args':[{'type':_0x291723(0x170),'error':_0x2468fb&&_0x2468fb[_0x291723(0xf8)]}],'id':_0x3af336,'context':_0x4dce46}]};}finally{try{if(_0x3346b3&&_0x1a48be){let _0x4a38be=_0x302909();_0x3346b3[_0x291723(0xf4)]++,_0x3346b3[_0x291723(0xf0)]+=_0x47dc2a(_0x1a48be,_0x4a38be),_0x3346b3['ts']=_0x4a38be,_0x14e307[_0x291723(0x13a)][_0x291723(0xf4)]++,_0x14e307[_0x291723(0x13a)][_0x291723(0xf0)]+=_0x47dc2a(_0x1a48be,_0x4a38be),_0x14e307['hits']['ts']=_0x4a38be,(_0x3346b3[_0x291723(0xf4)]>0x32||_0x3346b3[_0x291723(0xf0)]>0x64)&&(_0x3346b3['reduceLimits']=!0x0),(_0x14e307[_0x291723(0x13a)][_0x291723(0xf4)]>0x3e8||_0x14e307['hits'][_0x291723(0xf0)]>0x12c)&&(_0x14e307[_0x291723(0x13a)]['reduceLimits']=!0x0);}}catch{}}}return _0x36b903;}((_0x1047c9,_0x5d185e,_0x2b0195,_0x1c1fd4,_0x39bda9,_0x33ffcb,_0x1c933b,_0x1cbb24,_0x5d836d,_0x5f8774)=>{var _0x457f57=_0x2e24ba;if(_0x1047c9[_0x457f57(0xf5)])return _0x1047c9[_0x457f57(0xf5)];if(!J(_0x1047c9,_0x1cbb24,_0x39bda9))return _0x1047c9['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1047c9[_0x457f57(0xf5)];let _0xc5f44f=W(_0x1047c9),_0x122f63=_0xc5f44f[_0x457f57(0x1d0)],_0xd4f231=_0xc5f44f[_0x457f57(0x114)],_0x570bdf=_0xc5f44f['now'],_0x2c8c53={'hits':{},'ts':{}},_0x9d4f87=Y(_0x1047c9,_0x5d836d,_0x2c8c53,_0x33ffcb),_0x3f827=_0x23f9c0=>{_0x2c8c53['ts'][_0x23f9c0]=_0xd4f231();},_0x14c7c4=(_0xb625a4,_0x5b98cb)=>{var _0x16fa38=_0x457f57;let _0x229763=_0x2c8c53['ts'][_0x5b98cb];if(delete _0x2c8c53['ts'][_0x5b98cb],_0x229763){let _0x2e2147=_0x122f63(_0x229763,_0xd4f231());_0x5f18e3(_0x9d4f87(_0x16fa38(0xf0),_0xb625a4,_0x570bdf(),_0x584fbc,[_0x2e2147],_0x5b98cb));}},_0x5cb24d=_0x3b849e=>_0x50a936=>{try{_0x3f827(_0x50a936),_0x3b849e(_0x50a936);}finally{_0x1047c9['console']['time']=_0x3b849e;}},_0x3b4846=_0x20dc8e=>_0x54b121=>{var _0x2b35b4=_0x457f57;try{let [_0x416120,_0x3cfe1c]=_0x54b121[_0x2b35b4(0x18b)](':logPointId:');_0x14c7c4(_0x3cfe1c,_0x416120),_0x20dc8e(_0x416120);}finally{_0x1047c9['console'][_0x2b35b4(0x198)]=_0x20dc8e;}};_0x1047c9[_0x457f57(0xf5)]={'consoleLog':(_0x42c67b,_0x121bea)=>{var _0x4a71ec=_0x457f57;_0x1047c9[_0x4a71ec(0x154)][_0x4a71ec(0x119)]['name']!==_0x4a71ec(0x143)&&_0x5f18e3(_0x9d4f87(_0x4a71ec(0x119),_0x42c67b,_0x570bdf(),_0x584fbc,_0x121bea));},'consoleTrace':(_0x2627b3,_0x57213a)=>{var _0x4916b6=_0x457f57;_0x1047c9['console'][_0x4916b6(0x119)][_0x4916b6(0x10e)]!==_0x4916b6(0x15c)&&_0x5f18e3(_0x9d4f87('trace',_0x2627b3,_0x570bdf(),_0x584fbc,_0x57213a));},'consoleTime':()=>{var _0x14d473=_0x457f57;_0x1047c9[_0x14d473(0x154)][_0x14d473(0xf0)]=_0x5cb24d(_0x1047c9['console']['time']);},'consoleTimeEnd':()=>{var _0x4e3e0a=_0x457f57;_0x1047c9[_0x4e3e0a(0x154)][_0x4e3e0a(0x198)]=_0x3b4846(_0x1047c9[_0x4e3e0a(0x154)][_0x4e3e0a(0x198)]);},'autoLog':(_0xb5e5ab,_0x2d450d)=>{var _0x536fd0=_0x457f57;_0x5f18e3(_0x9d4f87(_0x536fd0(0x119),_0x2d450d,_0x570bdf(),_0x584fbc,[_0xb5e5ab]));},'autoLogMany':(_0x435498,_0x14809f)=>{_0x5f18e3(_0x9d4f87('log',_0x435498,_0x570bdf(),_0x584fbc,_0x14809f));},'autoTrace':(_0x45455f,_0x4baf8e)=>{_0x5f18e3(_0x9d4f87('trace',_0x4baf8e,_0x570bdf(),_0x584fbc,[_0x45455f]));},'autoTraceMany':(_0x2a98a1,_0x589a24)=>{var _0x523188=_0x457f57;_0x5f18e3(_0x9d4f87(_0x523188(0x125),_0x2a98a1,_0x570bdf(),_0x584fbc,_0x589a24));},'autoTime':(_0x1c60c1,_0x25935b,_0x1d0eb5)=>{_0x3f827(_0x1d0eb5);},'autoTimeEnd':(_0x1bb886,_0x23d1c8,_0x4314f1)=>{_0x14c7c4(_0x23d1c8,_0x4314f1);},'coverage':_0x30f36e=>{var _0x309cf7=_0x457f57;_0x5f18e3({'method':_0x309cf7(0x1c5),'version':_0x33ffcb,'args':[{'id':_0x30f36e}]});}};let _0x5f18e3=b(_0x1047c9,_0x5d185e,_0x2b0195,_0x1c1fd4,_0x39bda9,_0x5f8774),_0x584fbc=_0x1047c9[_0x457f57(0x146)];return _0x1047c9['_console_ninja'];})(globalThis,_0x2e24ba(0x11a),_0x2e24ba(0x124),_0x2e24ba(0x1a6),_0x2e24ba(0xfe),_0x2e24ba(0x1a5),_0x2e24ba(0x172),_0x2e24ba(0x165),_0x2e24ba(0x1d3),_0x2e24ba(0x1cf));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsYUFBYSx1QkFBdUIsV0FBVyxVQUFVLHdCQUF3QixXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLCtGQUErRixJQUFJLElBQUksbUJBQW1CLE9BQU8sMkJBQTJCLGVBQWUsY0FBYyxHQUFHLFdBQVcsb0JBQW9CLHFCQUFxQiwwQkFBMEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsNEJBQTRCLHFCQUFxQixHQUFHLDBDQUEwQyxVQUFVLDBCQUEwQiwwQ0FBMEMsS0FBSyxxQkFBcUIsMEJBQTBCLEtBQUssR0FBRyxVQUFVLG1CQUFtQixHQUFHLFVBQVUsd0JBQXdCLHNDQUFzQyx5RUFBeUUscUVBQXFFLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsdUJBQXVCLHVCQUF1QixHQUFHLGNBQWMsc0NBQXNDLGtCQUFrQix3QkFBd0IsbUNBQW1DLHlCQUF5QixxQkFBcUIsV0FBVyxHQUFHLGtCQUFrQixxQkFBcUIsd0JBQXdCLEdBQUcsYUFBYSxzQkFBc0IscUJBQXFCLEdBQUcsZUFBZSxnQkFBZ0IsR0FBRyxZQUFZLHdCQUF3QixrQ0FBa0Msd0JBQXdCLG1CQUFtQixpQ0FBaUMsOENBQThDLG9CQUFvQix3QkFBd0IscUJBQXFCLHVCQUF1QixxQkFBcUIsMkJBQTJCLGtCQUFrQixHQUFHLFlBQVksb0JBQW9CLEdBQUcsdUJBQXVCLDJDQUEyQyx3QkFBd0IsR0FBRyx5QkFBeUIsK0NBQStDLEdBQUcsbUJBQW1CLGtDQUFrQyx1Q0FBdUMsZ0RBQWdELG9CQUFvQixtQ0FBbUMsbUJBQW1CLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsdUJBQXVCLGdCQUFnQixxQkFBcUIsR0FBRyxpQkFBaUIsd0JBQXdCLGtDQUFrQyxrQkFBa0Isd0JBQXdCLDJCQUEyQixzQkFBc0IscUJBQXFCLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsMkNBQTJDLEdBQUcsd0JBQXdCLHlCQUF5QixHQUFHLFlBQVksb0JBQW9CLHVCQUF1Qiw4QkFBOEIsc0JBQXNCLHFCQUFxQixHQUFHLGNBQWMsaUJBQWlCLDJCQUEyQixHQUFHLGFBQWEsK0JBQStCLCtCQUErQixHQUFHLFlBQVksc0JBQXNCLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGtEQUFrRCxnREFBZ0QseURBQXlELG1DQUFtQywyQkFBMkIsaUJBQWlCLHdDQUF3Qyw2Q0FBNkMscUJBQXFCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxxQkFBcUIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsaUVBQWlFLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsdUJBQXVCLGNBQWMsR0FBRyxtRUFBbUUsa0JBQWtCLHFCQUFxQixxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLG1CQUFtQixxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLCtCQUErQixzQkFBc0IscUJBQXFCLHFCQUFxQix1QkFBdUIsR0FBRywyQkFBMkIsa0JBQWtCLHFCQUFxQixxQkFBcUIsdUJBQXVCLEdBQUcsMEJBQTBCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLDRCQUE0QixvQkFBb0IscUJBQXFCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsYUFBYSx1QkFBdUIsMEJBQTBCLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyxrQkFBa0Isc0JBQXNCLHFCQUFxQixHQUFHLGdCQUFnQix1QkFBdUIsc0JBQXNCLEdBQUcsK0JBQStCLGtCQUFrQixhQUFhLDRCQUE0QixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUIsZ0JBQWdCLEdBQUcsdUJBQXVCLHNCQUFzQix3QkFBd0IsR0FBRywwQkFBMEIsa0JBQWtCLGNBQWMsR0FBRywyQkFBMkIsa0JBQWtCLHFCQUFxQixxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLHFCQUFxQixHQUFHLDRCQUE0QixrQkFBa0IsMENBQTBDLG1CQUFtQixHQUFHLDZCQUE2QixvQkFBb0IsdUJBQXVCLEdBQUcsdUJBQXVCLGtCQUFrQix1QkFBdUIsR0FBRyw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLGdCQUFnQixrQkFBa0IsMENBQTBDLGVBQWUsc0JBQXNCLDBCQUEwQixHQUFHLHFCQUFxQiwyQkFBMkIsdUJBQXVCLEdBQUcscURBQXFELG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsdUZBQXVGLFdBQVcsc0JBQXNCLEtBQUssYUFBYSxvQkFBb0IsS0FBSyxxQkFBcUIsNkJBQTZCLDBCQUEwQixLQUFLLHdEQUF3RCwyQkFBMkIsS0FBSyw4QkFBOEIseUJBQXlCLHVCQUF1QixLQUFLLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLLG1CQUFtQixrQkFBa0IsdUJBQXVCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLHdCQUF3QixLQUFLLG1CQUFtQixzQkFBc0Isd0JBQXdCLDBCQUEwQixrQkFBa0IsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixvQ0FBb0MsMEJBQTBCLGdCQUFnQixzQkFBc0IsNkJBQTZCLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLEtBQUsseUJBQXlCLGtCQUFrQiw0QkFBNEIsS0FBSyxHQUFHLHFCQUFxQjtBQUNuc1U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNuYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxRQUFRLEtBQUssTUFBTTs7QUFFeEYsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWmpDO0FBQ3NDO0FBQ2pCOztBQUVyQjtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsNENBQTRDLGlCQUFpQjtBQUM3RDtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDLGtEQUFrRCxlQUFlO0FBQ2pFO0FBQ0EsMEJBQTBCLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSztBQUMxRDtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLDBCQUEwQixNQUFNLEdBQUcsU0FBUyxFQUFFLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsOEJBQThCO0FBQ3JELGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEIsNERBQTRELEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLDJFQUEyRTtBQUMzRSwyRUFBMkU7QUFDM0UsNkVBQTZFO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFpQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWlCO0FBQ3RDO0FBQ0EsRUFBRTtBQUNGO0FBQ0EscUJBQXFCLGdEQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLGlCQUFpQixJQUFJLHdJQUF3SSxzQkFBc0IsK0JBQStCLDRDQUE0QyxZQUFZLElBQUksK1VBQStVLCtCQUErQiw4Q0FBOEMsaUJBQWlCLDJDQUEyQyxtQkFBbUIseVBBQXlQLHdCQUF3QixxRkFBcUYsbUhBQW1ILHlHQUF5RyxHQUFHLGtCQUFrQixrRkFBa0Ysc0ZBQXNGLG9DQUFvQyxnQ0FBZ0MsK0RBQStELHdCQUF3QixpdUJBQWl1Qiw2QkFBNkIsd0JBQXdCLHdEQUF3RCxjQUFjLDBGQUEwRixLQUFLLGdJQUFnSSxTQUFTLDZDQUE2Qyx5S0FBeUssTUFBTSxJQUFJLG1GQUFtRixNQUFNLDRFQUE0RSxtREFBbUQscUJBQXFCLHdCQUF3QixtUEFBbVAsd0JBQXdCLHVEQUF1RCx3QkFBd0IsNEtBQTRLLGlDQUFpQyx3QkFBd0IsK0lBQStJLGtDQUFrQyx3QkFBd0IsMEpBQTBKLGtDQUFrQyx3QkFBd0Isb0dBQW9HLHlDQUF5Qyx3QkFBd0IsSUFBSSw4TEFBOEwsVUFBVSw0ZUFBNGUsSUFBSSxpQ0FBaUMsdUJBQXVCLG1EQUFtRCxJQUFJLG9GQUFvRixPQUFPLElBQUksMkRBQTJELFFBQVEscUJBQXFCLHdCQUF3QixnSUFBZ0ksd0JBQXdCLDZKQUE2SixrR0FBa0csbUNBQW1DLHdCQUF3QixJQUFJLGtDQUFrQyx1SEFBdUgsaUJBQWlCLHFKQUFxSixtQkFBbUIsbWFBQW1hLGd4RkFBZ3hGLHVXQUF1VyxtQkFBbUIsbUJBQW1CLGtCQUFrQix3RUFBd0Usd0JBQXdCLHlEQUF5RCxzQkFBc0IsSUFBSSxvWUFBb1ksa0NBQWtDLEVBQUUsdUVBQXVFLGlFQUFpRSxpQkFBaUIsa0dBQWtHLEVBQUUsZ0ZBQWdGLHNCQUFzQix3QkFBd0IsNENBQTRDLDRCQUE0QixXQUFXLG9EQUFvRCx3QkFBd0IseURBQXlELEtBQUsseUtBQXlLLHdCQUF3QixnREFBZ0QseUNBQXlDLHVGQUF1RixTQUFTLEtBQUssc0JBQXNCLHVCQUF1QixxQkFBcUIsNkJBQTZCLE1BQU0scUJBQXFCLHNCQUFzQixPQUFPLCtFQUErRSwwQ0FBMEMsd0JBQXdCLDBGQUEwRiwrSUFBK0kscVJBQXFSLHNDQUFzQyx1QkFBdUIsNkNBQTZDLHlCQUF5QixrQ0FBa0Msa0JBQWtCLCtCQUErQixvREFBb0Qsd0JBQXdCLGdGQUFnRix1R0FBdUcsZ0JBQWdCLGNBQWMsd0JBQXdCLDYxQkFBNjFCLDREQUE0RCw2RUFBNkUsa0RBQWtELHdCQUF3QixrT0FBa08sSUFBSSxnSEFBZ0gsaVZBQWlWLDREQUE0RCxFQUFFLGFBQWEsZ0NBQWdDLGNBQWMsMEVBQTBFLHNFQUFzRSxvQkFBb0Isd0hBQXdILGtDQUFrQyxLQUFLLDBEQUEwRCxvQkFBb0IsdUhBQXVILGtEQUFrRCx5SUFBeUksdUVBQXVFLG1HQUFtRyx3QkFBd0Isa0VBQWtFLGVBQWUsUUFBUSxvSEFBb0gsZUFBZSxRQUFRLHVJQUF1SSxrQkFBa0Isb0JBQW9CLGVBQWUseUZBQXlGLHdCQUF3QiwyRUFBMkUsZUFBZSxRQUFRLHdJQUF3SSxlQUFlLFFBQVEsNENBQTRDLDZNQUE2TSxrQkFBa0Isb0JBQW9CLGVBQWUsY0FBYyxJQUFJLGtKQUFrSixrRUFBa0UsZUFBZSxPQUFPLG9JQUFvSSxlQUFlLE9BQU8sd0hBQXdILE9BQU8sOEZBQThGLGlJQUFpSSx3REFBd0Qsb0JBQW9CLDRPQUE0TywyRUFBMkUsZUFBZSxPQUFPLHVIQUF1SCxlQUFlLE9BQU8sMkhBQTJILHk5QkFBeTlCLGdEQUFnRCxvQkFBb0IsNkNBQTZDLDhEQUE4RCxpQkFBaUIsMENBQTBDLHVVQUF1VSw4QkFBOEIsd0JBQXdCLHNFQUFzRSw2QkFBNkIsd0JBQXdCLDRIQUE0SCxrREFBa0Qsd0JBQXdCLHFGQUFxRiw4QkFBOEIscUNBQXFDLG1rQkFBbWtCLDhCQUE4Qix3QkFBd0IsZ0ZBQWdGLDhCQUE4Qix3QkFBd0IseUZBQXlGLDhCQUE4Qix3QkFBd0IseUZBQXlGLGdGQUFnRixtQkFBbUIsMkJBQTJCLDRLQUE0SyxxVkFBcVYsMEZBQTBGLHVDQUF1QywwRkFBMEYscUxBQXFMLDJTQUEyUyxxRUFBcUUsdUNBQXVDLG9EQUFvRCw2QkFBNkIsRUFBRSwrRUFBK0UsNkVBQTZFLElBQUksb0VBQW9FLGtHQUFrRyxnRkFBZ0YsK0ZBQStGLDREQUE0RCx5RUFBeUUsK0dBQStHLDBEQUEwRCw0T0FBNE8sY0FBYyxJQUFJLDBDQUEwQyxpQkFBaUIsa0JBQWtCLCtEQUErRCxnRUFBZ0UsNEZBQTRGLDBIQUEwSCx3QkFBd0Isa0lBQWtJLEdBQUcsRUFBRSxLQUFLLDRPQUE0TyxzSEFBc0gsK0dBQStHLHdCQUF3QixtSUFBbUksR0FBRyxrQkFBa0IsUUFBUSwyR0FBMkcsMkRBQTJELHNGQUFzRixxRkFBcUYsMkRBQTJELHdTQUF3Uyw4QkFBOEIsd0JBQXdCLHFJQUFxSSw4QkFBOEIsd0JBQXdCLDBEQUEwRCxjQUFjLElBQUksZ0RBQWdELE1BQU0sNkRBQTZELHdSQUF3Uiw0REFBNEQsd0JBQXdCLDRKQUE0Six3Q0FBd0Msd0JBQXdCLG9MQUFvTCx5Q0FBeUMseUNBQXlDLHlDQUF5Qyw4QkFBOEIsd0JBQXdCLDJDQUEyQyx3Q0FBd0Msd0JBQXdCLG9SQUFvUix3Q0FBd0Msd0JBQXdCLGNBQWMsSUFBSSx5SUFBeUksOEhBQThILE9BQU8sUUFBUSxzRUFBc0UseUZBQXlGLHdGQUF3Rix5Q0FBeUMsa0dBQWtHLE1BQU0sdUdBQXVHLE1BQU0seUZBQXlGLFFBQVEsK1FBQStRLDhCQUE4QixvREFBb0QsOEJBQThCLHdCQUF3QiwwUUFBMFEseUlBQXlJLDZEQUE2RCxHQUFHLHdDQUF3Qyx3QkFBd0IscUdBQXFHLCtGQUErRixvQkFBb0IsYUFBYSw0Q0FBNEMsNEhBQTRILHNFQUFzRSxzQ0FBc0MsZUFBZSx3Q0FBd0Msd1BBQXdQLHlDQUF5QywrQkFBK0IsOEJBQThCLHdCQUF3QixzSUFBc0kseUNBQXlDLDhCQUE4Qix3QkFBd0IsMkdBQTJHLDBDQUEwQyx5Q0FBeUMsa0lBQWtJLFlBQVkseUhBQXlILCtFQUErRSx3QkFBd0Isd0JBQXdCLElBQUksa05BQWtOLHNDQUFzQywrQkFBK0IsMkxBQTJMLEVBQUUsOElBQThJLHdCQUF3QixpQkFBaUIsb3ZCQUFvdkIsaURBQWlELGFBQWEsc0JBQXNCLDhCQUE4QixxRUFBcUUsaURBQWlELDZDQUE2QyxHQUFHLGlDQUFpQyxzQ0FBc0MsSUFBSSwrRUFBK0UsaUJBQWlCLDRDQUE0QyxvQkFBb0IsSUFBSSxRQUFRLG9DQUFvQyxPQUFPLDRDQUE0QyxzRkFBc0YsSUFBSSxpQkFBaUIsT0FBTyx1REFBdUQsMkNBQTJDLHNFQUFzRSxxQ0FBcUMsSUFBSSxRQUFRLElBQUkseUJBQXlCLDBCQUEwQiwwZ0JBQTBnQixTQUFTLGtCQUFrQix5R0FBeUcsd0JBQXdCLGdFQUFnRSx5RUFBeUUsbUJBQW1CLHNCQUFzQixxQkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw0QkFBNEIsNklBQTZJLFNBQVMsU0FBUywyRUFBMkUsd0NBQXdDLG1DQUFtQyx3QkFBd0IseUNBQXlDLGdEQUFnRCwrQ0FBK0MsOEZBQThGLGtDQUFrQyxJQUFJLDBDQUEwQyxRQUFRLHlDQUF5QyxrQ0FBa0Msd0JBQXdCLElBQUksc0VBQXNFLHFEQUFxRCxRQUFRLG9EQUFvRCw0QkFBNEIscUNBQXFDLHdCQUF3Qiw0SkFBNEosd0NBQXdDLHdCQUF3QixzSkFBc0osb0JBQW9CLHdCQUF3QixzRkFBc0YsdUJBQXVCLHdCQUF3Qix3R0FBd0csbUNBQW1DLHdCQUF3QixvRkFBb0YsdUNBQXVDLHVFQUF1RSxxQ0FBcUMsMkVBQTJFLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxxQkFBcUIsaURBQWlELGdDQUFnQyx3QkFBd0Isd0JBQXdCLFdBQVcsdURBQXVELGVBQWUsRUFBRSxLQUFLLG1IQUFtSCxvQ0FBb0Msc0tBQXNLLElBQUksWUFBWSxpREFBaUQsSUFBSSwwQkFBMEIsV0FBVyxVQUFVLGlEQUFpRCxJQUFJLDRCQUE0QixXQUFXLFVBQVUsMkNBQTJDLElBQUksdUJBQXVCLFlBQVksMkNBQTJDLElBQUksMEJBQTBCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJuYXV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVybmF1dC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcm5hdXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG46cm9vdCB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0LS13aGl0ZTogI2YwZjBmMDtcblx0LS1vZmYtd2hpdGU6ICNFNUU5NUU1O1xuXHQtLWdyZXk6ICNjZmNmY2Y7XG5cdC0tZGFyay1ncmVlbjogIzBhMmUyNTtcblx0LS1ib3JkZXItY29sb3I6ICM4MGRmZWM2NjtcblxuXHQtLWRhcmstZ3JlZW46ICMwZTJkNDQ7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG5cdGJvZHkge1xuXHRcdGZpbHRlcjogaW52ZXJ0KDAuOSk7XG5cdFx0YmFja2dyb3VuZDogYW50aXF1ZXdoaXRlICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQjd2VhdGhlci1pY29uIHtcblx0XHRmaWx0ZXI6IGludmVydCgwLjkpO1xuXHR9XG59XG5cbmh0bWwge1xuXHRvdmVyZmxvdzogY2xpcDtcbn1cblxuYm9keSB7XG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcblxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEwZGVnLCAjMTYwMDNjIDQuOTIlLCAjMDQ0YjcxIDkwLjM4JSk7XG5cdC8qIGRhcmstbGlnaHQgbW9kZSB0cmFuc2l0aW9uICovXG5cdHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wYWdlLXdyYXBwZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRoZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI3RvcC1iYXIge1xuXHRmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMnJlbSAxLjVyZW07XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcbn1cblxuI3RvcC1iYXIgPiAqIHtcblx0ZGlzcGxheTogaW5oZXJpdDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28gcCB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4jbG9nbyBpbWcge1xuXHR3aWR0aDogNDhweDtcbn1cblxuI3F1ZXJ5IHtcblx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0YmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmVlbik7XG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdHBhZGRpbmc6IDAgMWVtO1xuXHRib3JkZXItcmFkaXVzOiAzMnB4IDAgMCAzMnB4O1xuXHQvKiBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuXHRib3JkZXI6IHVuc2V0O1xuXHRib3JkZXItcmlnaHQ6IHVuc2V0O1xuXHRtaW4td2lkdGg6IDMyMHB4O1xuXHRmb250LXNpemU6IDEuMzNyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9ybTpmb2N1cy13aXRoaW4ge1xuXHRvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcbn1cblxuYnV0dG9uI3NlYXJjaDpmb2N1cyB7XG5cdGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuYnV0dG9uI3NlYXJjaCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JlZW4pO1xuXHQvKiBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7ICovXG5cdC8qIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXG5cdGJvcmRlcjogdW5zZXQ7XG5cblx0Ym9yZGVyLXJhZGl1czogMCAzMnB4IDMycHggMDtcblx0Ym9yZGVyLWxlZnQ6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiNzZWFyY2ggaW1nIHtcblx0d2lkdGg6IDMycHg7XG5cdHBhZGRpbmc6IDAuM2VtIDA7XG59XG5cbmJ1dHRvbiN1bml0IHtcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcblx0YmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmVlbik7XG5cdGJvcmRlcjogdW5zZXQ7XG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdHBhZGRpbmc6IDAuNDVlbSAxLjI1ZW07XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDEuMzNyZW07XG5cdG91dGxpbmU6IHVuc2V0O1xufVxuXG5idXR0b24jdW5pdDpmb2N1cyB7XG5cdG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5idXR0b24jdW5pdDphY3RpdmUge1xuXHRvdXRsaW5lLXN0eWxlOiBpbnNldDtcbn1cblxuZm9vdGVyIHtcblx0cGFkZGluZzogMXJlbSAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0Y29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG5mb290ZXIgYSB7XG5cdGNvbG9yOiB1bnNldDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbn1cblxuYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcbn1cblxuZm9vdGVyIHtcblx0Zm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5ncmV5ZWQtdGV4dCB7XG5cdGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLyogLS0tLS0tLS0tLSBMb2FkZXIgLS0tLS0tLS0tLS0gKi9cbiNsb2FkZXIge1xuXHRib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IC8qIFdoaXRlIHdpdGggc29tZSB0cmFuc3BhcmVuY3kgKi9cblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3JkZXItdG9wOiA0cHggc29saWQgI2ZmZmZmZjsgLyogV2hpdGUgKi9cblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgLyogQW5pbWF0aW9uIGZvciBzcGlubmluZyAqL1xuXHRtYXJnaW46IGF1dG87XG5cdG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oaWRkZW5cbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tUHNldWRvRWxlbWVudHMtLS0tLS0tLS0tLSAqL1xuI2NpdHktbmFtZTphZnRlciB7XG5cdGNvbnRlbnQ6ICcsJztcbn1cblxuI2RhdGU6OmFmdGVyIHtcblx0Y29udGVudDogJyB8Jztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IC0ycHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tTWFpbiBTdHlsZXMtLS0tLS0tLS0tLS0gKi9cbi5tZXRyaWMudGVtcDo6YWZ0ZXIge1xuXHRjb250ZW50OiAnIOKEgyc7XG5cdGZvbnQtc2l6ZTogMC44ZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLm1ldHJpYy5kaXN0YW5jZTo6YWZ0ZXIge1xuXHRjb250ZW50OiAnIGttJztcblx0Zm9udC1zaXplOiAwLjhlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG4uaW1wZXJpYWwuZGlzdGFuY2U6OmFmdGVyIHtcblx0Y29udGVudDogJyBtaWxlcyc7XG5cdGZvbnQtc2l6ZTogMC44ZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuLmltcGVyaWFsLnRlbXA6OmFmdGVyIHtcblx0Y29udGVudDogJyDihIknO1xuXHRmb250LXNpemU6IDAuOGVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbi5tZXRyaWMuc3BlZWQ6OmFmdGVyIHtcblx0Y29udGVudDogJyBrbS9oJztcblx0Zm9udC1zaXplOiAwLjhlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG4uaW1wZXJpYWwuc3BlZWQ6OmFmdGVyIHtcblx0Y29udGVudDogJyBtcGgnO1xuXHRmb250LXNpemU6IDAuOGVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFlbTtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbiNtYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IDBweDtcbn1cblxuI3Jlc3VsdC1uYW1lIHtcblx0Zm9udC1zaXplOiAyLjRyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNkYXRlLWluZm8ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4jcmVzdWx0LW5hbWUsXG4jZGF0ZS1pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA4cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jd2VhdGhlci1pbmZvIHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3dlYXRoZXItaWNvbiB7XG5cdHdpZHRoOiA1cmVtO1xufVxuXG4jdGVtcC1kZXNjcmlwdGlvbiB7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5zZWN0aW9uI2N1cnJlbnQtaW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcbn1cblxuI3dlYXRoZXItaW5mb19wcmltYXJ5IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGVuZDtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI3RlbXBlcmF0dXJlIHtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRmb250LXdlaWdodDogODAwO1xufVxuXG5zZWN0aW9uI3NlY29uZGFyeS1pbmZvIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblx0Z2FwOiAwLjVlbSAxZW07XG59XG5cbi5zZWNvbmRhcnktaW5mb19oZWFkaW5nIHtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbiNmb3JlY2FzdC1pbmZvIGgyIHtcblx0bWFyZ2luOiAxZW0gMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5LWluZm9fZGV0YWlsIHtcblx0Zm9udC1zaXplOiAxLjI5cmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4jZm9yZWNhc3RzIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblxuXHRnYXA6IDFlbTtcblx0cGFkZGluZzogMC41cmVtIDA7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI2ZvcmVjYXN0cyAuZGF5IHtcblx0anVzdGlmeS1zZWxmOiBiYXNlbGluZTtcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4vKiBxdWljayBmaXhlcyBmb3Igd2luZCBkaXYgKi9cbiN3aW5kLWRpcmVjdGlvbiB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuI3dpbmQge1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLU1lZGlhIFF1ZXJpZXMtLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdDpyb290IHtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdH1cblxuXHQjbG9nbyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdCNjdXJyZW50LWluZm8ge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXG5cdHNlY3Rpb24jc2Vjb25kYXJ5LWluZm8sXG5cdHNlY3Rpb24jZm9yZWNhc3QtaW5mbyB7XG5cdFx0cGFkZGluZzogMXJlbSAyLjVyZW07XG5cdH1cblxuXHQuc2Vjb25kYXJ5LWluZm9fZGV0YWlsIHtcblx0XHRmb250LXNpemU6IDEuMTlyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXG5cdCN0b3AtYmFyIHtcblx0XHRwYWRkaW5nOiAxLjI1cmVtIDFyZW07XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0I2xvZ28gaW1nIHtcblx0XHR3aWR0aDogMzZweDtcblx0fVxuXG5cdGlucHV0I3F1ZXJ5IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtaW4td2lkdGg6IHVuc2V0O1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0cGFkZGluZzogMC4yZW0gMC42ZW07XG5cdFx0cGFkZGluZy1sZWZ0OiAxZW07XG5cdH1cblxuXHRidXR0b24jdW5pdCB7XG5cdFx0cGFkZGluZzogMCAxcmVtO1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0aGVpZ2h0OiA5NSU7XG5cdH1cblxuXHQjd2VhdGhlci1pbmZvIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRnYXA6IDFyZW07XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XG5cdH1cblxuXHQjdGVtcC1kZXNjcmlwdGlvbiB7XG5cdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHR9XG5cblx0YnV0dG9uI3NlYXJjaCB7XG5cdFx0cGFkZGluZzogMC4yZW0gMC41ZW07XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0YnV0dG9uI3NlYXJjaCBpbWcge1xuXHRcdHdpZHRoOiAzMnB4O1xuXHRcdHBhZGRpbmc6IDAuM2VtIDAuMXJlbTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLHlCQUF5Qjs7Q0FFekIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CLG1DQUFtQztDQUNwQzs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlDQUFpQzs7Q0FFakMsa0VBQWtFO0NBQ2xFLCtCQUErQjtDQUMvQiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixNQUFNO0FBQ1A7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsMkNBQTJDO0NBQzNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLG9DQUFvQztDQUNwQywyQ0FBMkM7Q0FDM0MsYUFBYTs7Q0FFYiw0QkFBNEI7Q0FDNUIsY0FBYztDQUNkLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBO0NBQ0Msc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjs7Q0FFbEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQSxrQ0FBa0M7QUFDbEM7Q0FDQywwQ0FBMEMsRUFBRSxpQ0FBaUM7Q0FDN0Usa0JBQWtCO0NBQ2xCLDZCQUE2QixFQUFFLFVBQVU7Q0FDekMsV0FBVztDQUNYLFlBQVk7Q0FDWixrQ0FBa0MsRUFBRSwyQkFBMkI7Q0FDL0QsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0NBQ0M7RUFDQyx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBLHdDQUF3QztBQUN4QztDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsU0FBUztBQUNWOztBQUVBLHVDQUF1QztBQUN2QztDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLFFBQVE7Q0FDUix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQzs7Q0FFckMsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBLDZCQUE2QjtBQUM3QjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBLDBDQUEwQztBQUMxQztDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEI7O0NBRUE7O0VBRUMsb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLHFCQUFxQjtFQUNyQixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLG9CQUFvQjtFQUNwQixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxXQUFXO0VBQ1gscUJBQXFCO0NBQ3RCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0LS13aGl0ZTogI2YwZjBmMDtcXG5cXHQtLW9mZi13aGl0ZTogI0U1RTk1RTU7XFxuXFx0LS1ncmV5OiAjY2ZjZmNmO1xcblxcdC0tZGFyay1ncmVlbjogIzBhMmUyNTtcXG5cXHQtLWJvcmRlci1jb2xvcjogIzgwZGZlYzY2O1xcblxcblxcdC0tZGFyay1ncmVlbjogIzBlMmQ0NDtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xcblxcdGJvZHkge1xcblxcdFxcdGZpbHRlcjogaW52ZXJ0KDAuOSk7XFxuXFx0XFx0YmFja2dyb3VuZDogYW50aXF1ZXdoaXRlICFpbXBvcnRhbnQ7XFxuXFx0fVxcblxcblxcdCN3ZWF0aGVyLWljb24ge1xcblxcdFxcdGZpbHRlcjogaW52ZXJ0KDAuOSk7XFxuXFx0fVxcbn1cXG5cXG5odG1sIHtcXG5cXHRvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMGRlZywgIzE2MDAzYyA0LjkyJSwgIzA0NGI3MSA5MC4zOCUpO1xcblxcdC8qIGRhcmstbGlnaHQgbW9kZSB0cmFuc2l0aW9uICovXFxuXFx0dHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRoZWlnaHQ6IDEwMHN2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiN0b3AtYmFyIHtcXG5cXHRmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwYWRkaW5nOiAycmVtIDEuNXJlbTtcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHRvcDogMDtcXG59XFxuXFxuI3RvcC1iYXIgPiAqIHtcXG5cXHRkaXNwbGF5OiBpbmhlcml0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHAge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNsb2dvIGltZyB7XFxuXFx0d2lkdGg6IDQ4cHg7XFxufVxcblxcbiNxdWVyeSB7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdHBhZGRpbmc6IDAgMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDMycHggMCAwIDMycHg7XFxuXFx0LyogYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG5cXHRib3JkZXI6IHVuc2V0O1xcblxcdGJvcmRlci1yaWdodDogdW5zZXQ7XFxuXFx0bWluLXdpZHRoOiAzMjBweDtcXG5cXHRmb250LXNpemU6IDEuMzNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRwYWRkaW5nOiAwLjQ1ZW0gMS4yNWVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtOmZvY3VzLXdpdGhpbiB7XFxuXFx0b3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXG59XFxuXFxuYnV0dG9uI3NlYXJjaDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24jc2VhcmNoIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG5cXHQvKiBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7ICovXFxuXFx0LyogYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG5cXHRib3JkZXI6IHVuc2V0O1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDAgMzJweCAzMnB4IDA7XFxuXFx0Ym9yZGVyLWxlZnQ6IDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAwLjQ1ZW0gMS4yNWVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiNzZWFyY2ggaW1nIHtcXG5cXHR3aWR0aDogMzJweDtcXG5cXHRwYWRkaW5nOiAwLjNlbSAwO1xcbn1cXG5cXG5idXR0b24jdW5pdCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG5cXHRib3JkZXI6IHVuc2V0O1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0cGFkZGluZzogMC40NWVtIDEuMjVlbTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc2l6ZTogMS4zM3JlbTtcXG5cXHRvdXRsaW5lOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uI3VuaXQ6Zm9jdXMge1xcblxcdG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24jdW5pdDphY3RpdmUge1xcblxcdG91dGxpbmUtc3R5bGU6IGluc2V0O1xcbn1cXG5cXG5mb290ZXIge1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0Y29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuZm9vdGVyIGEge1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmdyZXllZC10ZXh0IHtcXG5cXHRjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0gTG9hZGVyIC0tLS0tLS0tLS0tICovXFxuI2xvYWRlciB7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAvKiBXaGl0ZSB3aXRoIHNvbWUgdHJhbnNwYXJlbmN5ICovXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjZmZmZmZmOyAvKiBXaGl0ZSAqL1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBBbmltYXRpb24gZm9yIHNwaW5uaW5nICovXFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oaWRkZW5cXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLVBzZXVkb0VsZW1lbnRzLS0tLS0tLS0tLS0gKi9cXG4jY2l0eS1uYW1lOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnLCc7XFxufVxcblxcbiNkYXRlOjphZnRlciB7XFxuXFx0Y29udGVudDogJyB8JztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAtMnB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLU1haW4gU3R5bGVzLS0tLS0tLS0tLS0tICovXFxuLm1ldHJpYy50ZW1wOjphZnRlciB7XFxuXFx0Y29udGVudDogJyDihIMnO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5tZXRyaWMuZGlzdGFuY2U6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnIGttJztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uaW1wZXJpYWwuZGlzdGFuY2U6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnIG1pbGVzJztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uaW1wZXJpYWwudGVtcDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcg4oSJJztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4ubWV0cmljLnNwZWVkOjphZnRlciB7XFxuXFx0Y29udGVudDogJyBrbS9oJztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uaW1wZXJpYWwuc3BlZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnIG1waCc7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxZW07XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG59XFxuXFxuI21haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwcHg7XFxufVxcblxcbiNyZXN1bHQtbmFtZSB7XFxuXFx0Zm9udC1zaXplOiAyLjRyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2RhdGUtaW5mbyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jcmVzdWx0LW5hbWUsXFxuI2RhdGUtaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDhweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItaW5mbyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3dlYXRoZXItaWNvbiB7XFxuXFx0d2lkdGg6IDVyZW07XFxufVxcblxcbiN0ZW1wLWRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5zZWN0aW9uI2N1cnJlbnQtaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbiN3ZWF0aGVyLWluZm9fcHJpbWFyeSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbnNlY3Rpb24jc2Vjb25kYXJ5LWluZm8ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHRnYXA6IDAuNWVtIDFlbTtcXG59XFxuXFxuLnNlY29uZGFyeS1pbmZvX2hlYWRpbmcge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbiNmb3JlY2FzdC1pbmZvIGgyIHtcXG5cXHRtYXJnaW46IDFlbSAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY29uZGFyeS1pbmZvX2RldGFpbCB7XFxuXFx0Zm9udC1zaXplOiAxLjI5cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNmb3JlY2FzdHMge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXG5cXHRnYXA6IDFlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb3JlY2FzdHMgLmRheSB7XFxuXFx0anVzdGlmeS1zZWxmOiBiYXNlbGluZTtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi8qIHF1aWNrIGZpeGVzIGZvciB3aW5kIGRpdiAqL1xcbiN3aW5kLWRpcmVjdGlvbiB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jd2luZCB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS1NZWRpYSBRdWVyaWVzLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQ6cm9vdCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdH1cXG5cXG5cXHQjbG9nbyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I2N1cnJlbnQtaW5mbyB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdH1cXG5cXG5cXHRzZWN0aW9uI3NlY29uZGFyeS1pbmZvLFxcblxcdHNlY3Rpb24jZm9yZWNhc3QtaW5mbyB7XFxuXFx0XFx0cGFkZGluZzogMXJlbSAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5zZWNvbmRhcnktaW5mb19kZXRhaWwge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xOXJlbTtcXG5cXHRcXHRmb250LXdlaWdodDogNjAwO1xcblxcdH1cXG5cXG5cXHQjdG9wLWJhciB7XFxuXFx0XFx0cGFkZGluZzogMS4yNXJlbSAxcmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0I2xvZ28gaW1nIHtcXG5cXHRcXHR3aWR0aDogMzZweDtcXG5cXHR9XFxuXFxuXFx0aW5wdXQjcXVlcnkge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1pbi13aWR0aDogdW5zZXQ7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRcXHRwYWRkaW5nOiAwLjJlbSAwLjZlbTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDFlbTtcXG5cXHR9XFxuXFxuXFx0YnV0dG9uI3VuaXQge1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHRcXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdFxcdGhlaWdodDogOTUlO1xcblxcdH1cXG5cXG5cXHQjd2VhdGhlci1pbmZvIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0XFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuXFx0fVxcblxcblxcdCN0ZW1wLWRlc2NyaXB0aW9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdGJ1dHRvbiNzZWFyY2gge1xcblxcdFxcdHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0YnV0dG9uI3NlYXJjaCBpbWcge1xcblxcdFxcdHdpZHRoOiAzMnB4O1xcblxcdFxcdHBhZGRpbmc6IDAuM2VtIDAuMXJlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJhc3luYyBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0RGF0YShxdWVyeSkge1xuXHQvLyBTdGFydGluZyBhbiBhcGkgQ2FsbCBoZXJlXG5cdGNvbnN0IEFQSV9LRVkgPSBcImYwNmZiYWEwZmUxOTQ1Y2NhOTc3MTMyMzIzMTgxMVwiO1xuXHRjb25zdCBxdWVyeVVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeX0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPXllc2A7XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeVVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcblx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHQvLyBjb25zb2xlLmxvZyhcImRhdGEgaXMgXCIsIGRhdGEpO1xuXHRyZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hGb3JlY2FzdERhdGE7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGZldGNoRm9yZWNhc3REYXRhIGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gY29udmVydEVwb2NoVGltZShlcG9jaFRpbWUpIHtcblx0Ly8gQ3JlYXRlIGEgbmV3IERhdGUgb2JqZWN0IHdpdGggdGhlIGVwb2NoIHRpbWVcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVwb2NoVGltZSAqIDEwMDApOyAvLyBNdWx0aXBseSBieSAxMDAwIHRvIGNvbnZlcnQgc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcblx0Ly8gMSkgQ29udmVydCBlcG9jaCB0aW1lIHRvIGRheVxuXHRjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcblx0Ly8gMikgQ29udmVydCBlcG9jaCB0aW1lIHRvIGRhdGUgaW4gZm9ybWF0IGRkbW15eVxuXHRjb25zdCBkYXlPZk1vbnRoID0gYDAke2RhdGUuZ2V0RGF0ZSgpfWAuc2xpY2UoLTIpO1xuXHRjb25zdCBtb250aE5hbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJsb25nXCIgfSk7XG5cdGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zbGljZSgtMik7XG5cdGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBgJHtkYXlPZk1vbnRofSAke21vbnRoTmFtZX0gJHt5ZWFyfWA7XG5cdC8vIDMpIENvbnZlcnQgZXBvY2ggdGltZSB0byB0aW1lIGluIEFNL1BNIGZvcm1hdFxuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YC5zbGljZSgtMik7XG5cdGNvbnN0IGFtcG0gPSBob3VycyA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcblx0aG91cnMgJT0gMTI7XG5cdGhvdXJzID0gaG91cnMgfHwgMTI7IC8vIEhhbmRsZSBtaWRuaWdodCAoMDowMCkgYXMgMTIgQU1cblx0Y29uc3QgdGltZUZvcm1hdHRlZCA9IGAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1wbX1gO1xuXHRyZXR1cm4ge1xuXHRcdGRheSxcblx0XHRkYXRlOiBkYXRlRm9ybWF0dGVkLFxuXHRcdHRpbWU6IHRpbWVGb3JtYXR0ZWQsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHNob3dMb2FkZXIoc2hvdykge1xuXHRjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRlclwiKTtcblx0Y29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblx0LyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjI3Njc4MTIwOV8zMl8xXzMyXzI1XzRgLG1haW5Db250ZW50KSlcblx0aWYgKHNob3cpIHtcblx0XHRsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHRtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRcdG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGVudChmb3JlY2FzdERhdGEpIHtcblx0Y29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKTtcblx0Y29uc3QgY291bnRyeU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cnktbmFtZVwiKTtcblxuXHRjb25zdCBkYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheVwiKTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcblx0Y29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcblxuXHRjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xuXHRjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XG5cdGNvbnN0IHRlbXBEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWRlc2NyaXB0aW9uXCIpO1xuXHRjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2VcIik7XG5cblx0Y2l0eU5hbWUudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEubG9jYXRpb24ubmFtZTtcblx0Y291bnRyeU5hbWUudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEubG9jYXRpb24uY291bnRyeTtcblxuXHRjb25zdCBmb3JtYXR0ZWREYXRlID0gY29udmVydEVwb2NoVGltZShmb3JlY2FzdERhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoKTtcblx0Ly8gY29uc29sZS5sb2coZm9ybWF0dGVkRGF0ZSk7XG5cblx0ZGF5LnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZS5kYXk7XG5cdGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlLmRhdGU7XG5cdHRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlLnRpbWU7XG5cblx0Y29uc29sZS50YWJsZShmb3JlY2FzdERhdGEpO1xuXG5cdHdlYXRoZXJJY29uLnNyYyA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXHR0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LnRlbXBfYztcblx0dGVtcERlc2MudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcblx0ZmVlbHNMaWtlLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG5cblx0Ly8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpO1xuXG5cdGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG5cdGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtZGlyZWN0aW9uXCIpO1xuXHRjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG5cdGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInV2LWluZGV4XCIpO1xuXHRjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmlsaXR5XCIpO1xuXHRjb25zdCBjbG91ZGluZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG91ZGluZXNzXCIpO1xuXHRjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5jZS1vZi1yYWluXCIpO1xuXHRjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5yaXNlXCIpO1xuXHRjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bnNldFwiKTtcblx0Y29uc3QgbW9vblBoYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uLXBoYXNlXCIpO1xuXG5cdHdpbmQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdERhdGEuY3VycmVudC53aW5kX2twaH1gO1xuXHR3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmN1cnJlbnQud2luZF9kaXJ9YDtcblx0aHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC5odW1pZGl0eTtcblx0dXZJbmRleC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LnV2O1xuXHR2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQudmlzX2ttO1xuXHRjbG91ZGluZXNzLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQuY2xvdWQ7XG5cblx0Y2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID1cblx0XHRmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG5cdHN1bnJpc2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcblx0c3Vuc2V0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcblxuXHRtb29uUGhhc2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZTtcblxuXHQvLyBSZW5kZXJpbmcgdGhlIGZvcmVjYXN0IGluZm9cblx0Y29uc3QgZm9yZWNhc3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdHNcIik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcblx0XHRjb25zdCByb3cgPSBmb3JlY2FzdHNEaXYucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtZGF5ID0gXCIke2l9XCJdYCk7XG5cdFx0Y29uc3QgZGF0ZURhdGEgPSBjb252ZXJ0RXBvY2hUaW1lKFxuXHRcdFx0Zm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGVfZXBvY2hcblx0XHQpO1xuXHRcdHJvd1swXS50ZXh0Q29udGVudCA9IGRhdGVEYXRhLmRheTsgLy8gZGF5TmFtZVxuXHRcdHJvd1sxXS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jOyAvLyBtYXggdGVtcFxuXHRcdHJvd1syXS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jOyAvLyBtaW4gdGVtcFxuXHRcdHJvd1szXS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4d2luZF9rcGg7IC8vIHdpbmRcblx0fVxufVxuXG4vLyBmdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXRcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeVwiKS52YWx1ZTtcblx0c2hvd0xvYWRlcih0cnVlKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZhdWx0XCIsIHNlYXJjaFF1ZXJ5KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRm9yZWNhc3REYXRhKHNlYXJjaFF1ZXJ5KTtcblx0c2hvd0xvYWRlcihmYWxzZSk7XG5cdHVwZGF0ZUNvbnRlbnQoZGF0YSk7XG59XG5cbmxldCBkZWZhdWx0RGF0YTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmF1bHRcIikpIHtcblx0Y29uc3QgcXVlcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmF1bHRcIik7XG5cdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcblx0ZGVmYXVsdERhdGEgPSBhd2FpdCBmZXRjaEZvcmVjYXN0RGF0YShxdWVyeSk7XG5cdHVwZGF0ZUNvbnRlbnQoZGVmYXVsdERhdGEpO1xufSBlbHNlIHtcblx0Ly8gU2V0dGluZyBkZWZhdWx0IGFzIG5ldyBEZWxoaSBpZiBub3RoaW5nIGluIGxvY2FsIHN0b3JhZ2Vcblx0ZGVmYXVsdERhdGEgPSBhd2FpdCBmZXRjaEZvcmVjYXN0RGF0YShcIm5ldyBkZWxoaVwiKTtcblx0dXBkYXRlQ29udGVudChkZWZhdWx0RGF0YSk7XG59XG5cbi8vIEluaXRpYWxseSBldmVyeXRoaW5nIGlzIG1ldHJpY1xuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG5cdGNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudW5pdFwiKSk7XG5cdGNvbnN0IG1ldHJpY1NwZWVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy5zcGVlZFwiKSk7XG5cdGNvbnN0IG1ldHJpY1RlbXAgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLnRlbXBcIikpO1xuXG5cdGNvbnN0IGltcGVyaWFsU3BlZWQgPSBBcnJheS5mcm9tKFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1wZXJpYWwuc3BlZWRcIilcblx0KTtcblx0Y29uc3QgaW1wZXJpYWxUZW1wID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltcGVyaWFsLnRlbXBcIikpO1xuXG5cdGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2liaWxpdHlcIik7XG5cblx0aWYgKG1ldHJpY1NwZWVkLmxlbmd0aCB8fCBtZXRyaWNUZW1wLmxlbmd0aCkge1xuXHRcdG1ldHJpY1NwZWVkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdGNvbnN0IGNvbnZlcnRlZCA9IE1hdGgucm91bmQodmFsdWUgKiA2LjIxMzcxMTkyKSAvIDEwO1xuXHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnZlcnRlZDtcblx0XHR9KTtcblxuXHRcdG1ldHJpY1RlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gTWF0aC5yb3VuZCgoKHZhbHVlICogOSkgLyA1ICsgMzIpICogMTApIC8gMTA7XG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY29udmVydGVkO1xuXHRcdH0pO1xuXG5cdFx0dmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodmlzaWJpbGl0eS50ZXh0Q29udGVudCAqIDYuMjEzNzEpIC8gMTA7XG5cdH1cblx0aWYgKGltcGVyaWFsU3BlZWQubGVuZ3RoIHx8IGltcGVyaWFsVGVtcC5sZW5ndGgpIHtcblx0XHRpbXBlcmlhbFNwZWVkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdGNvbnN0IGNvbnZlcnRlZCA9IE1hdGgucm91bmQodmFsdWUgKiAxNi4wOTM0KSAvIDEwO1xuXHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnZlcnRlZDtcblx0XHR9KTtcblx0XHQvLyBmIHRvIGNcblx0XHRpbXBlcmlhbFRlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gTWF0aC5yb3VuZCgoKCh2YWx1ZSAtIDMyKSAqIDUpIC8gOSkgKiAxMCkgLyAxMDtcblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XG5cdFx0fSk7XG5cblx0XHR2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh2aXNpYmlsaXR5LnRleHRDb250ZW50ICogMTYuMDkzNCkgLyAxMDtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblx0ZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibWV0cmljXCIpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImltcGVyaWFsXCIpO1xuXHR9KTtcbn1cblxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdFwiKTtcbnVuaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVVuaXRzKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDJlMjRiYT1fMHhlZTZiOyhmdW5jdGlvbihfMHgyOTE0MjAsXzB4MzMwOWNjKXt2YXIgXzB4MWZlNjViPV8weGVlNmIsXzB4NDExZmQwPV8weDI5MTQyMCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MTcxOTA4PXBhcnNlSW50KF8weDFmZTY1YigweDEwYikpLzB4MSooLXBhcnNlSW50KF8weDFmZTY1YigweDFjZSkpLzB4MikrLXBhcnNlSW50KF8weDFmZTY1YigweGY2KSkvMHgzKy1wYXJzZUludChfMHgxZmU2NWIoMHgxYzkpKS8weDQrLXBhcnNlSW50KF8weDFmZTY1YigweDE0OCkpLzB4NSoocGFyc2VJbnQoXzB4MWZlNjViKDB4MWI0KSkvMHg2KSstcGFyc2VJbnQoXzB4MWZlNjViKDB4MTliKSkvMHg3K3BhcnNlSW50KF8weDFmZTY1YigweDFjMykpLzB4OCooLXBhcnNlSW50KF8weDFmZTY1YigweDFhZikpLzB4OSkrcGFyc2VJbnQoXzB4MWZlNjViKDB4MTk5KSkvMHhhO2lmKF8weDE3MTkwOD09PV8weDMzMDljYylicmVhaztlbHNlIF8weDQxMWZkMFsncHVzaCddKF8weDQxMWZkMFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MWFlYWQ1KXtfMHg0MTFmZDBbJ3B1c2gnXShfMHg0MTFmZDBbJ3NoaWZ0J10oKSk7fX19KF8weDQ5MDEsMHhjZjJhOSkpO3ZhciBqPU9iamVjdFtfMHgyZTI0YmEoMHgxNmIpXSxIPU9iamVjdFtfMHgyZTI0YmEoMHgxMzMpXSxHPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDJlMjRiYSgweDFiNyldLG5lPU9iamVjdFtfMHgyZTI0YmEoMHgxMmIpXVsnaGFzT3duUHJvcGVydHknXSxyZT0oXzB4MzRjYWNjLF8weDE4M2ZlYSxfMHgyNmZiZTgsXzB4MTdiYzE0KT0+e3ZhciBfMHgxOWJhODY9XzB4MmUyNGJhO2lmKF8weDE4M2ZlYSYmdHlwZW9mIF8weDE4M2ZlYT09XzB4MTliYTg2KDB4MTMyKXx8dHlwZW9mIF8weDE4M2ZlYT09XzB4MTliYTg2KDB4ZWIpKXtmb3IobGV0IF8weDQzNzhhZCBvZiBlZShfMHgxODNmZWEpKSFuZVsnY2FsbCddKF8weDM0Y2FjYyxfMHg0Mzc4YWQpJiZfMHg0Mzc4YWQhPT1fMHgyNmZiZTgmJkgoXzB4MzRjYWNjLF8weDQzNzhhZCx7J2dldCc6KCk9Pl8weDE4M2ZlYVtfMHg0Mzc4YWRdLCdlbnVtZXJhYmxlJzohKF8weDE3YmMxND1HKF8weDE4M2ZlYSxfMHg0Mzc4YWQpKXx8XzB4MTdiYzE0WydlbnVtZXJhYmxlJ119KTt9cmV0dXJuIF8weDM0Y2FjYzt9LHg9KF8weDQ1YWNlNyxfMHg1ZTk2ODcsXzB4MjdjODgzKT0+KF8weDI3Yzg4Mz1fMHg0NWFjZTchPW51bGw/aih0ZShfMHg0NWFjZTcpKTp7fSxyZShfMHg1ZTk2ODd8fCFfMHg0NWFjZTd8fCFfMHg0NWFjZTdbXzB4MmUyNGJhKDB4MWM0KV0/SChfMHgyN2M4ODMsXzB4MmUyNGJhKDB4MTVlKSx7J3ZhbHVlJzpfMHg0NWFjZTcsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgyN2M4ODMsXzB4NDVhY2U3KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgzNDdmOGUsXzB4NTE4OGU5LF8weDNhMmJkYyxfMHgyZDU5MzQsXzB4NDk4NWNmKXt2YXIgXzB4MmYxYTkxPV8weDJlMjRiYTt0aGlzW18weDJmMWE5MSgweDE4NyldPV8weDM0N2Y4ZSx0aGlzW18weDJmMWE5MSgweDEyYyldPV8weDUxODhlOSx0aGlzW18weDJmMWE5MSgweDE2OCldPV8weDNhMmJkYyx0aGlzW18weDJmMWE5MSgweDEwZCldPV8weDJkNTkzNCx0aGlzW18weDJmMWE5MSgweDE5MSldPV8weDQ5ODVjZix0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHgyZjFhOTEoMHgxYTgpXT0hMHgwLHRoaXNbXzB4MmYxYTkxKDB4MWQ1KV09ITB4MSx0aGlzW18weDJmMWE5MSgweDE1OSldPSEweDEsdGhpc1tfMHgyZjFhOTEoMHgxZDYpXT1fMHgzNDdmOGVbXzB4MmYxYTkxKDB4MTFlKV0/LlsnZW52J10/LltfMHgyZjFhOTEoMHgxN2YpXT09PV8weDJmMWE5MSgweDE5MiksdGhpc1tfMHgyZjFhOTEoMHgxNDkpXT0hdGhpc1tfMHgyZjFhOTEoMHgxODcpXVtfMHgyZjFhOTEoMHgxMWUpXT8uW18weDJmMWE5MSgweDEyZSldPy5bJ25vZGUnXSYmIXRoaXNbJ19pbk5leHRFZGdlJ10sdGhpc1tfMHgyZjFhOTEoMHgxNDEpXT1udWxsLHRoaXNbXzB4MmYxYTkxKDB4MTc5KV09MHgwLHRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J109MHgxNCx0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddPV8weDJmMWE5MSgweDEyZiksdGhpc1tfMHgyZjFhOTEoMHhlYyldPSh0aGlzW18weDJmMWE5MSgweDE0OSldP18weDJmMWE5MSgweDFiMSk6XzB4MmYxYTkxKDB4ZjMpKSt0aGlzW18weDJmMWE5MSgweGVmKV07fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDM2MzAzNz1fMHgyZTI0YmE7aWYodGhpc1tfMHgzNjMwMzcoMHgxNDEpXSlyZXR1cm4gdGhpc1tfMHgzNjMwMzcoMHgxNDEpXTtsZXQgXzB4MzVhMWFlO2lmKHRoaXNbXzB4MzYzMDM3KDB4MTQ5KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4MzVhMWFlPXRoaXNbJ2dsb2JhbCddW18weDM2MzAzNygweDE2MSldO2Vsc2V7aWYodGhpc1tfMHgzNjMwMzcoMHgxODcpXVsncHJvY2VzcyddPy5bXzB4MzYzMDM3KDB4MTBmKV0pXzB4MzVhMWFlPXRoaXNbXzB4MzYzMDM3KDB4MTg3KV1bXzB4MzYzMDM3KDB4MTFlKV0/LltfMHgzNjMwMzcoMHgxMGYpXTtlbHNlIHRyeXtsZXQgXzB4ODJlNDk2PWF3YWl0IGltcG9ydChfMHgzNjMwMzcoMHgxYmYpKTtfMHgzNWExYWU9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDM2MzAzNygweDE4MykpKVtfMHgzNjMwMzcoMHgxNjcpXShfMHg4MmU0OTZbJ2pvaW4nXSh0aGlzW18weDM2MzAzNygweDEwZCldLF8weDM2MzAzNygweDEwNykpKVtfMHgzNjMwMzcoMHgxMWMpXSgpKSlbJ2RlZmF1bHQnXTt9Y2F0Y2h7dHJ5e18weDM1YTFhZT1yZXF1aXJlKHJlcXVpcmUoXzB4MzYzMDM3KDB4MWJmKSlbJ2pvaW4nXSh0aGlzW18weDM2MzAzNygweDEwZCldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnKTt9fX1yZXR1cm4gdGhpc1tfMHgzNjMwMzcoMHgxNDEpXT1fMHgzNWExYWUsXzB4MzVhMWFlO31bXzB4MmUyNGJhKDB4MTZmKV0oKXt2YXIgXzB4MmFhM2UwPV8weDJlMjRiYTt0aGlzW18weDJhYTNlMCgweDE1OSldfHx0aGlzW18weDJhYTNlMCgweDFkNSldfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDJhYTNlMCgweDE1NildfHwodGhpc1tfMHgyYWEzZTAoMHgxYTgpXT0hMHgxLHRoaXNbXzB4MmFhM2UwKDB4MTU5KV09ITB4MCx0aGlzW18weDJhYTNlMCgweDE3OSldKyssdGhpc1tfMHgyYWEzZTAoMHgxY2IpXT1uZXcgUHJvbWlzZSgoXzB4MmVjNmRkLF8weDJjZDdjZSk9Pnt2YXIgXzB4M2FiZTZhPV8weDJhYTNlMDt0aGlzW18weDNhYmU2YSgweDFhOSldKClbXzB4M2FiZTZhKDB4MTViKV0oXzB4NWJlOWZhPT57dmFyIF8weDRmMTQ5Yj1fMHgzYWJlNmE7bGV0IF8weDUxN2JkND1uZXcgXzB4NWJlOWZhKF8weDRmMTQ5YigweDE5ZikrKCF0aGlzW18weDRmMTQ5YigweDE0OSldJiZ0aGlzW18weDRmMTQ5YigweDE5MSldPydnYXRld2F5LmRvY2tlci5pbnRlcm5hbCc6dGhpc1tfMHg0ZjE0OWIoMHgxMmMpXSkrJzonK3RoaXNbXzB4NGYxNDliKDB4MTY4KV0pO18weDUxN2JkNFtfMHg0ZjE0OWIoMHgxYzgpXT0oKT0+e3ZhciBfMHgzZjQyZGM9XzB4NGYxNDliO3RoaXNbXzB4M2Y0MmRjKDB4MTEwKV09ITB4MSx0aGlzW18weDNmNDJkYygweDFiYyldKF8weDUxN2JkNCksdGhpc1tfMHgzZjQyZGMoMHgxYWIpXSgpLF8weDJjZDdjZShuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHg1MTdiZDRbXzB4NGYxNDliKDB4MTNlKV09KCk9Pnt2YXIgXzB4MzlkZTUyPV8weDRmMTQ5Yjt0aGlzW18weDM5ZGU1MigweDE0OSldfHxfMHg1MTdiZDRbXzB4MzlkZTUyKDB4MTk0KV0mJl8weDUxN2JkNFsnX3NvY2tldCddW18weDM5ZGU1MigweDE1NyldJiZfMHg1MTdiZDRbXzB4MzlkZTUyKDB4MTk0KV1bJ3VucmVmJ10oKSxfMHgyZWM2ZGQoXzB4NTE3YmQ0KTt9LF8weDUxN2JkNFtfMHg0ZjE0OWIoMHgxNmQpXT0oKT0+e3ZhciBfMHgxNmU1NDA9XzB4NGYxNDliO3RoaXNbXzB4MTZlNTQwKDB4MWE4KV09ITB4MCx0aGlzW18weDE2ZTU0MCgweDFiYyldKF8weDUxN2JkNCksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4NTE3YmQ0W18weDRmMTQ5YigweDFiMyldPV8weDJhNTQ5Nj0+e3ZhciBfMHgxMmNiMDI9XzB4NGYxNDliO3RyeXtfMHgyYTU0OTYmJl8weDJhNTQ5NltfMHgxMmNiMDIoMHgxMDYpXSYmdGhpc1snX2luQnJvd3NlciddJiZKU09OW18weDEyY2IwMigweDE4MSldKF8weDJhNTQ5NltfMHgxMmNiMDIoMHgxMDYpXSlbXzB4MTJjYjAyKDB4MWNjKV09PT1fMHgxMmNiMDIoMHgxNjMpJiZ0aGlzWydnbG9iYWwnXVsnbG9jYXRpb24nXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbJ3RoZW4nXShfMHgzZWQyMjc9Pih0aGlzW18weDNhYmU2YSgweDFkNSldPSEweDAsdGhpc1tfMHgzYWJlNmEoMHgxNTkpXT0hMHgxLHRoaXNbXzB4M2FiZTZhKDB4MWE4KV09ITB4MSx0aGlzW18weDNhYmU2YSgweDExMCldPSEweDAsdGhpc1tfMHgzYWJlNmEoMHgxNzkpXT0weDAsXzB4M2VkMjI3KSlbXzB4M2FiZTZhKDB4MWEzKV0oXzB4MTA4MGQzPT4odGhpc1tfMHgzYWJlNmEoMHgxZDUpXT0hMHgxLHRoaXNbXzB4M2FiZTZhKDB4MTU5KV09ITB4MSxjb25zb2xlW18weDNhYmU2YSgweDEyOSldKCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcrdGhpc1tfMHgzYWJlNmEoMHhlZildKSxfMHgyY2Q3Y2UobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgxMDgwZDMmJl8weDEwODBkM1tfMHgzYWJlNmEoMHhmOCldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MjJhZTc5KXt2YXIgXzB4OGEyMjk9XzB4MmUyNGJhO3RoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4OGEyMjkoMHgxNTkpXT0hMHgxO3RyeXtfMHgyMmFlNzlbJ29uY2xvc2UnXT1udWxsLF8weDIyYWU3OVtfMHg4YTIyOSgweDFjOCldPW51bGwsXzB4MjJhZTc5Wydvbm9wZW4nXT1udWxsO31jYXRjaHt9dHJ5e18weDIyYWU3OVsncmVhZHlTdGF0ZSddPDB4MiYmXzB4MjJhZTc5W18weDhhMjI5KDB4MTNiKV0oKTt9Y2F0Y2h7fX1bXzB4MmUyNGJhKDB4MWFiKV0oKXt2YXIgXzB4NDdhMzA2PV8weDJlMjRiYTtjbGVhclRpbWVvdXQodGhpc1tfMHg0N2EzMDYoMHgxYjgpXSksISh0aGlzW18weDQ3YTMwNigweDE3OSldPj10aGlzW18weDQ3YTMwNigweDE1NildKSYmKHRoaXNbXzB4NDdhMzA2KDB4MWI4KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgzNTQ0MDA9XzB4NDdhMzA2O3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgzNTQ0MDAoMHgxNTkpXXx8KHRoaXNbXzB4MzU0NDAwKDB4MTZmKV0oKSx0aGlzW18weDM1NDQwMCgweDFjYildPy5bXzB4MzU0NDAwKDB4MWEzKV0oKCk9PnRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKSkpO30sMHgxZjQpLHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4NDdhMzA2KDB4MTU3KV0mJnRoaXNbXzB4NDdhMzA2KDB4MWI4KV1bXzB4NDdhMzA2KDB4MTU3KV0oKSk7fWFzeW5jW18weDJlMjRiYSgweDFhMSldKF8weDVlNWJjMil7dmFyIF8weDE5ZWM2YT1fMHgyZTI0YmE7dHJ5e2lmKCF0aGlzW18weDE5ZWM2YSgweDExMCldKXJldHVybjt0aGlzW18weDE5ZWM2YSgweDFhOCldJiZ0aGlzW18weDE5ZWM2YSgweDE2ZildKCksKGF3YWl0IHRoaXNbXzB4MTllYzZhKDB4MWNiKV0pWydzZW5kJ10oSlNPTlsnc3RyaW5naWZ5J10oXzB4NWU1YmMyKSk7fWNhdGNoKF8weDU2OTRmMSl7Y29uc29sZVtfMHgxOWVjNmEoMHgxMjkpXSh0aGlzW18weDE5ZWM2YSgweGVjKV0rJzpcXFxceDIwJysoXzB4NTY5NGYxJiZfMHg1Njk0ZjFbJ21lc3NhZ2UnXSkpLHRoaXNbXzB4MTllYzZhKDB4MTEwKV09ITB4MSx0aGlzW18weDE5ZWM2YSgweDFhYildKCk7fX19O2Z1bmN0aW9uIF8weDQ5MDEoKXt2YXIgXzB4MWU0ZjEwPVsnMzA2NTUyMHVHcG5zcicsJ19zb3J0UHJvcHMnLCdfd3MnLCdtZXRob2QnLCdzdHJMZW5ndGgnLCcxNDkyMDgyQ2hiUGpkJywnJywnZWxhcHNlZCcsJ3NlcmlhbGl6ZScsJ25leHQuanMnLCcnLCdTeW1ib2wnLCdfY29ubmVjdGVkJywnX2luTmV4dEVkZ2UnLCdNYXAnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdmdW5jdGlvbicsJ19zZW5kRXJyb3JNZXNzYWdlJywnYXJyYXknLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ3RpbWUnLCdyZXBsYWNlJywndG90YWxTdHJMZW5ndGgnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2NvdW50JywnX2NvbnNvbGVfbmluamEnLCcxNTE5NzQ2aG9KR3NNJywnbG9jYXRpb24nLCdtZXNzYWdlJywnX2lzU2V0JywndHlwZScsJ2dldCcsJ25vRnVuY3Rpb25zJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnd2VicGFjaycsJ19wcm9wZXJ0eScsJ2NhbGwnLCdzdHJpbmcnLCdfcHJvcGVydHlOYW1lJywnX3NldE5vZGVMYWJlbCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdhbmd1bGFyJywnZGF0YScsJ3dzL2luZGV4LmpzJywnc3RhY2tUcmFjZUxpbWl0JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnbGVuZ3RoJywnMXNXckx1aScsJ2NvbnN0cnVjdG9yJywnbm9kZU1vZHVsZXMnLCduYW1lJywnX1dlYlNvY2tldCcsJ19hbGxvd2VkVG9TZW5kJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnX2hhc1NldE9uSXRzUGF0aCcsJ3RpbWVTdGFtcCcsJ19wX25hbWUnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ1xcXFx4MjBzZXJ2ZXInLCdsZXZlbCcsJ2xvZycsJzEyNy4wLjAuMScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ3RvU3RyaW5nJywnaG9zdG5hbWUnLCdwcm9jZXNzJywnW29iamVjdFxcXFx4MjBNYXBdJywnQm9vbGVhbicsJ19hZGRGdW5jdGlvbnNOb2RlJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdjYXBwZWRQcm9wcycsJzQxMjYxJywndHJhY2UnLCdub2RlJywnX2FkZFByb3BlcnR5JywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd2FybicsJ3JlZHVjZUxpbWl0cycsJ3Byb3RvdHlwZScsJ2hvc3QnLCdfaXNQcmltaXRpdmVUeXBlJywndmVyc2lvbnMnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jywnc29ydFByb3BzJywnX3VuZGVmaW5lZCcsJ29iamVjdCcsJ2RlZmluZVByb3BlcnR5JywnY29uY2F0JywnY2FwcGVkRWxlbWVudHMnLCd2YWx1ZScsJ2JpbmQnLCdCdWZmZXInLCd0b0xvd2VyQ2FzZScsJ2hpdHMnLCdjbG9zZScsJ2Jvb2xlYW4nLCdudW1iZXInLCdvbm9wZW4nLCdwZXJmb3JtYW5jZScsJ3NldCcsJ19XZWJTb2NrZXRDbGFzcycsJ25lZ2F0aXZlWmVybycsJ2Rpc2FibGVkTG9nJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2RhdGUnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnc2xpY2UnLCcyNURXekxBaScsJ19pbkJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCdfaXNNYXAnLCdhc3RybycsJ19zZXROb2RlSWQnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ2Z1bmNOYW1lJywnX3R5cGUnLCdfYWRkT2JqZWN0UHJvcGVydHknLCd2YWx1ZU9mJywnc3Vic3RyJywnY29uc29sZScsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ3VucmVmJywnX2NsZWFuTm9kZScsJ19jb25uZWN0aW5nJywncmVzb2x2ZUdldHRlcnMnLCd0aGVuJywnZGlzYWJsZWRUcmFjZScsJ2VsZW1lbnRzJywnZGVmYXVsdCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnX2lzVW5kZWZpbmVkJywnV2ViU29ja2V0JywnX251bWJlclJlZ0V4cCcsJ3JlbG9hZCcsJ3Vuc2hpZnQnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiSGVja2VyXFxcIixcXFwiMTkyLjE2OC4xLjhcXFwiXSwnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ3BhdGhUb0ZpbGVVUkwnLCdwb3J0JywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ2JpZ2ludCcsJ2NyZWF0ZScsJ2luZGV4Jywnb25jbG9zZScsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3Vua25vd24nLCdjdXJyZW50JywnMTcxMTEyMjkwNjk3OCcsJ3Byb3BzJywnaXNBcnJheScsJ2ZvckVhY2gnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX3BfJywncHVzaCcsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnW29iamVjdFxcXFx4MjBEYXRlXScsJ19pc05lZ2F0aXZlWmVybycsJ3Rlc3QnLCdfa2V5U3RyUmVnRXhwJywnX2lzQXJyYXknLCdORVhUX1JVTlRJTUUnLCdyb290X2V4cCcsJ3BhcnNlJywnUmVnRXhwJywndXJsJywnXFxcXHgyMGJyb3dzZXInLCdyZW1peCcsJ3BhcmVudCcsJ2dsb2JhbCcsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX3F1b3RlZFJlZ0V4cCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdzcGxpdCcsJ19TeW1ib2wnLCdFcnJvcicsJ2V4cElkJywnZXJyb3InLCdub3cnLCdkb2NrZXJpemVkQXBwJywnZWRnZScsJ19vYmplY3RUb1N0cmluZycsJ19zb2NrZXQnLCduYW4nLCdudWxsJywnbnV4dCcsJ3RpbWVFbmQnLCc2NTI0Mjg1MHZ4dE55RycsJ19wX2xlbmd0aCcsJzc5OTczNDZSc2ZKeUQnLCdpbmNsdWRlcycsJ21hdGNoJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCd3czovLycsJ19jYXBJZlN0cmluZycsJ3NlbmQnLCdhdXRvRXhwYW5kJywnY2F0Y2gnLCdfYWRkTG9hZE5vZGUnLCcxLjAuMCcsXFxcIi9ob21lL2Rhbi8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI5NC9ub2RlX21vZHVsZXNcXFwiLCdOdW1iZXInLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ2dldFdlYlNvY2tldENsYXNzJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2hydGltZScsJ2RlcHRoJywnMjAxMzIxYXNpZmJwJywnYWxsU3RyTGVuZ3RoJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnb25tZXNzYWdlJywnMTAzMDczNFdMYlBHRCcsJ19kYXRlVG9TdHJpbmcnLCdjYXBwZWQnLCdnZXRQcm90b3R5cGVPZicsJ19yZWNvbm5lY3RUaW1lb3V0JywnX3NldE5vZGVRdWVyeVBhdGgnLCdwb3NpdGl2ZUluZmluaXR5JywnU2V0JywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCd1bmRlZmluZWQnLCdzZXR0ZXInLCdwYXRoJywnUE9TSVRJVkVfSU5GSU5JVFknLCdhdXRvRXhwYW5kTGltaXQnLCdwb3AnLCc1OTJGUURzdGYnLCdfX2VzJysnTW9kdWxlJywnY292ZXJhZ2UnLCdzeW1ib2wnLCdzdHJpbmdpZnknLCdvbmVycm9yJ107XzB4NDkwMT1mdW5jdGlvbigpe3JldHVybiBfMHgxZTRmMTA7fTtyZXR1cm4gXzB4NDkwMSgpO31mdW5jdGlvbiBiKF8weDJkZjQyNSxfMHg1ZDZiZmIsXzB4MmQ1MjY4LF8weDU4YWJkMyxfMHgzYzFkNTUsXzB4MmY2YTJjKXt2YXIgXzB4NDc2NmFhPV8weDJlMjRiYTtsZXQgXzB4M2E1MGE0PV8weDJkNTI2OFsnc3BsaXQnXSgnLCcpWydtYXAnXShfMHgyYWUwODk9Pnt2YXIgXzB4NWU5MWJhPV8weGVlNmI7dHJ5e18weDJkZjQyNVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddfHwoKF8weDNjMWQ1NT09PV8weDVlOTFiYSgweDFkMil8fF8weDNjMWQ1NT09PV8weDVlOTFiYSgweDE4NSl8fF8weDNjMWQ1NT09PV8weDVlOTFiYSgweDE0Yyl8fF8weDNjMWQ1NT09PV8weDVlOTFiYSgweDEwNSkpJiYoXzB4M2MxZDU1Kz0hXzB4MmRmNDI1W18weDVlOTFiYSgweDExZSldPy5bXzB4NWU5MWJhKDB4MTJlKV0/LltfMHg1ZTkxYmEoMHgxMjYpXSYmXzB4MmRmNDI1W18weDVlOTFiYSgweDExZSldPy5bJ2VudiddPy5bJ05FWFRfUlVOVElNRSddIT09XzB4NWU5MWJhKDB4MTkyKT9fMHg1ZTkxYmEoMHgxODQpOl8weDVlOTFiYSgweDExNykpLF8weDJkZjQyNVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgzYzFkNTV9KTtsZXQgXzB4MzNjOGQyPW5ldyBYKF8weDJkZjQyNSxfMHg1ZDZiZmIsXzB4MmFlMDg5LF8weDU4YWJkMyxfMHgyZjZhMmMpO3JldHVybiBfMHgzM2M4ZDJbXzB4NWU5MWJhKDB4MWExKV1bXzB4NWU5MWJhKDB4MTM3KV0oXzB4MzNjOGQyKTt9Y2F0Y2goXzB4M2UxYzg2KXtyZXR1cm4gY29uc29sZVtfMHg1ZTkxYmEoMHgxMjkpXShfMHg1ZTkxYmEoMHgxMTIpLF8weDNlMWM4NiYmXzB4M2UxYzg2W18weDVlOTFiYSgweGY4KV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDRkZWNlMz0+XzB4M2E1MGE0W18weDQ3NjZhYSgweDE3NSldKF8weDE5NTIyYT0+XzB4MTk1MjJhKF8weDRkZWNlMykpO31mdW5jdGlvbiBXKF8weDM5ZmExNSl7dmFyIF8weDU2ZmY5OD1fMHgyZTI0YmE7bGV0IF8weDFkNTYzNT1mdW5jdGlvbihfMHg1YjJlOGUsXzB4MTdkYTRkKXtyZXR1cm4gXzB4MTdkYTRkLV8weDViMmU4ZTt9LF8weDE5NjdkMjtpZihfMHgzOWZhMTVbXzB4NTZmZjk4KDB4MTNmKV0pXzB4MTk2N2QyPWZ1bmN0aW9uKCl7dmFyIF8weDViOTk4Mj1fMHg1NmZmOTg7cmV0dXJuIF8weDM5ZmExNVtfMHg1Yjk5ODIoMHgxM2YpXVtfMHg1Yjk5ODIoMHgxOTApXSgpO307ZWxzZXtpZihfMHgzOWZhMTVbXzB4NTZmZjk4KDB4MTFlKV0mJl8weDM5ZmExNVsncHJvY2VzcyddW18weDU2ZmY5OCgweDFhZCldJiZfMHgzOWZhMTVbXzB4NTZmZjk4KDB4MTFlKV0/LlsnZW52J10/LltfMHg1NmZmOTgoMHgxN2YpXSE9PV8weDU2ZmY5OCgweDE5MikpXzB4MTk2N2QyPWZ1bmN0aW9uKCl7dmFyIF8weDEzZmQ2Yz1fMHg1NmZmOTg7cmV0dXJuIF8weDM5ZmExNVtfMHgxM2ZkNmMoMHgxMWUpXVsnaHJ0aW1lJ10oKTt9LF8weDFkNTYzNT1mdW5jdGlvbihfMHg2OTE0OTUsXzB4MTZjNjhhKXtyZXR1cm4gMHgzZTgqKF8weDE2YzY4YVsweDBdLV8weDY5MTQ5NVsweDBdKSsoXzB4MTZjNjhhWzB4MV0tXzB4NjkxNDk1WzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDRkOTQzZX09cmVxdWlyZSgncGVyZl9ob29rcycpO18weDE5NjdkMj1mdW5jdGlvbigpe3JldHVybiBfMHg0ZDk0M2VbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4MTk2N2QyPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWQ1NjM1LCd0aW1lU3RhbXAnOl8weDE5NjdkMiwnbm93JzooKT0+RGF0ZVtfMHg1NmZmOTgoMHgxOTApXSgpfTt9ZnVuY3Rpb24gSihfMHhhNzM0YjMsXzB4MjQyM2IwLF8weDUzMjA1OCl7dmFyIF8weDRjZDAwNz1fMHgyZTI0YmE7aWYoXzB4YTczNGIzW18weDRjZDAwNygweDEwOSldIT09dm9pZCAweDApcmV0dXJuIF8weGE3MzRiM1snX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDE3ZTUyYT1fMHhhNzM0YjNbXzB4NGNkMDA3KDB4MTFlKV0/LlsndmVyc2lvbnMnXT8uWydub2RlJ118fF8weGE3MzRiM1tfMHg0Y2QwMDcoMHgxMWUpXT8uWydlbnYnXT8uW18weDRjZDAwNygweDE3ZildPT09XzB4NGNkMDA3KDB4MTkyKTtyZXR1cm4gXzB4MTdlNTJhJiZfMHg1MzIwNTg9PT1fMHg0Y2QwMDcoMHgxOTcpP18weGE3MzRiM1tfMHg0Y2QwMDcoMHgxMDkpXT0hMHgxOl8weGE3MzRiM1tfMHg0Y2QwMDcoMHgxMDkpXT1fMHgxN2U1MmF8fCFfMHgyNDIzYjB8fF8weGE3MzRiM1tfMHg0Y2QwMDcoMHhmNyldPy5bXzB4NGNkMDA3KDB4MTFkKV0mJl8weDI0MjNiMFtfMHg0Y2QwMDcoMHgxOWMpXShfMHhhNzM0YjNbJ2xvY2F0aW9uJ11bXzB4NGNkMDA3KDB4MTFkKV0pLF8weGE3MzRiM1tfMHg0Y2QwMDcoMHgxMDkpXTt9ZnVuY3Rpb24gXzB4ZWU2YihfMHg2ZmVmOGIsXzB4MjYxOWZiKXt2YXIgXzB4NDkwMWE9XzB4NDkwMSgpO3JldHVybiBfMHhlZTZiPWZ1bmN0aW9uKF8weGVlNmIyNyxfMHgzZjI5ZjIpe18weGVlNmIyNz1fMHhlZTZiMjctMHhlYTt2YXIgXzB4NDdhMzI3PV8weDQ5MDFhW18weGVlNmIyN107cmV0dXJuIF8weDQ3YTMyNzt9LF8weGVlNmIoXzB4NmZlZjhiLF8weDI2MTlmYik7fWZ1bmN0aW9uIFkoXzB4NDYxMTM3LF8weDJkMzQyNCxfMHgxNGUzMDcsXzB4NTIzMTE4KXt2YXIgXzB4M2NjODI5PV8weDJlMjRiYTtfMHg0NjExMzc9XzB4NDYxMTM3LF8weDJkMzQyND1fMHgyZDM0MjQsXzB4MTRlMzA3PV8weDE0ZTMwNyxfMHg1MjMxMTg9XzB4NTIzMTE4O2xldCBfMHgzODc5MmI9VyhfMHg0NjExMzcpLF8weDQ3ZGMyYT1fMHgzODc5MmJbXzB4M2NjODI5KDB4MWQwKV0sXzB4MzAyOTA5PV8weDM4NzkyYltfMHgzY2M4MjkoMHgxMTQpXTtjbGFzcyBfMHg0ZjM2ZWJ7Y29uc3RydWN0b3IoKXt2YXIgXzB4Y2NiMjRlPV8weDNjYzgyOTt0aGlzW18weGNjYjI0ZSgweDE3ZCldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHhjY2IyNGUoMHgxNjIpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4Y2NiMjRlKDB4MTg5KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHhjY2IyNGUoMHgxMzEpXT1fMHg0NjExMzdbXzB4Y2NiMjRlKDB4MWJkKV0sdGhpc1tfMHhjY2IyNGUoMHhlYSldPV8weDQ2MTEzN1tfMHhjY2IyNGUoMHgxODgpXSx0aGlzW18weGNjYjI0ZSgweDExMSldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHhjY2IyNGUoMHgxNWYpXT1PYmplY3RbXzB4Y2NiMjRlKDB4MTA0KV0sdGhpc1tfMHhjY2IyNGUoMHgxOGMpXT1fMHg0NjExMzdbXzB4Y2NiMjRlKDB4MWQ0KV0sdGhpc1tfMHhjY2IyNGUoMHgxNGEpXT1SZWdFeHBbJ3Byb3RvdHlwZSddW18weGNjYjI0ZSgweDExYyldLHRoaXNbXzB4Y2NiMjRlKDB4MWI1KV09RGF0ZVtfMHhjY2IyNGUoMHgxMmIpXVtfMHhjY2IyNGUoMHgxMWMpXTt9W18weDNjYzgyOSgweDFkMSldKF8weDJmNWU0YyxfMHgzMWNiYmEsXzB4NTFmZTRkLF8weDU1OWE5ZSl7dmFyIF8weDEyNzc3NT1fMHgzY2M4MjksXzB4NTUyY2NhPXRoaXMsXzB4MWQ0YjlmPV8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxYTIpXTtmdW5jdGlvbiBfMHg0ZWUzNDcoXzB4MTdhZmVmLF8weDMyNDkzMyxfMHg0NzBlM2Mpe3ZhciBfMHgyYjk3OWM9XzB4MTI3Nzc1O18weDMyNDkzM1sndHlwZSddPV8weDJiOTc5YygweDE3MCksXzB4MzI0OTMzWydlcnJvciddPV8weDE3YWZlZltfMHgyYjk3OWMoMHhmOCldLF8weDNlYzgzMT1fMHg0NzBlM2NbXzB4MmI5NzljKDB4MTI2KV1bJ2N1cnJlbnQnXSxfMHg0NzBlM2NbJ25vZGUnXVtfMHgyYjk3OWMoMHgxNzEpXT1fMHgzMjQ5MzMsXzB4NTUyY2NhW18weDJiOTc5YygweDFiMildKF8weDMyNDkzMyxfMHg0NzBlM2MpO310cnl7XzB4NTFmZTRkW18weDEyNzc3NSgweDExOCldKyssXzB4NTFmZTRkWydhdXRvRXhwYW5kJ10mJl8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxNDQpXVtfMHgxMjc3NzUoMHgxNzgpXShfMHgzMWNiYmEpO3ZhciBfMHgzNWQ0NDgsXzB4MjUzMzBlLF8weDU3MTk5ZCxfMHgzNDljYjgsXzB4MjdiODA4PVtdLF8weDM2ZTk2Mz1bXSxfMHgxMmMxNDMsXzB4NTAyYjJkPXRoaXNbJ190eXBlJ10oXzB4MzFjYmJhKSxfMHgyNDY4ZDg9XzB4NTAyYjJkPT09XzB4MTI3Nzc1KDB4ZWQpLF8weDIzMWYzYz0hMHgxLF8weDU0MGI1Nz1fMHg1MDJiMmQ9PT1fMHgxMjc3NzUoMHhlYiksXzB4YTVkMGNhPXRoaXNbXzB4MTI3Nzc1KDB4MTJkKV0oXzB4NTAyYjJkKSxfMHgxZjdiMjM9dGhpc1tfMHgxMjc3NzUoMHgxYWMpXShfMHg1MDJiMmQpLF8weDU5MGJjMD1fMHhhNWQwY2F8fF8weDFmN2IyMyxfMHg1ZDIyOGM9e30sXzB4MTY3NmE3PTB4MCxfMHg0Mzg0YmY9ITB4MSxfMHgzZWM4MzEsXzB4MmYzMWM3PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg1MWZlNGRbXzB4MTI3Nzc1KDB4MWFlKV0pe2lmKF8weDI0NjhkOCl7aWYoXzB4MjUzMzBlPV8weDMxY2JiYVtfMHgxMjc3NzUoMHgxMGEpXSxfMHgyNTMzMGU+XzB4NTFmZTRkWydlbGVtZW50cyddKXtmb3IoXzB4NTcxOTlkPTB4MCxfMHgzNDljYjg9XzB4NTFmZTRkWydlbGVtZW50cyddLF8weDM1ZDQ0OD1fMHg1NzE5OWQ7XzB4MzVkNDQ4PF8weDM0OWNiODtfMHgzNWQ0NDgrKylfMHgzNmU5NjNbXzB4MTI3Nzc1KDB4MTc4KV0oXzB4NTUyY2NhW18weDEyNzc3NSgweDEyNyldKF8weDI3YjgwOCxfMHgzMWNiYmEsXzB4NTAyYjJkLF8weDM1ZDQ0OCxfMHg1MWZlNGQpKTtfMHgyZjVlNGNbXzB4MTI3Nzc1KDB4MTM1KV09ITB4MDt9ZWxzZXtmb3IoXzB4NTcxOTlkPTB4MCxfMHgzNDljYjg9XzB4MjUzMzBlLF8weDM1ZDQ0OD1fMHg1NzE5OWQ7XzB4MzVkNDQ4PF8weDM0OWNiODtfMHgzNWQ0NDgrKylfMHgzNmU5NjNbXzB4MTI3Nzc1KDB4MTc4KV0oXzB4NTUyY2NhWydfYWRkUHJvcGVydHknXShfMHgyN2I4MDgsXzB4MzFjYmJhLF8weDUwMmIyZCxfMHgzNWQ0NDgsXzB4NTFmZTRkKSk7fV8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxOWUpXSs9XzB4MzZlOTYzWydsZW5ndGgnXTt9aWYoIShfMHg1MDJiMmQ9PT0nbnVsbCd8fF8weDUwMmIyZD09PSd1bmRlZmluZWQnKSYmIV8weGE1ZDBjYSYmXzB4NTAyYjJkIT09J1N0cmluZycmJl8weDUwMmIyZCE9PV8weDEyNzc3NSgweDEzOCkmJl8weDUwMmIyZCE9PSdiaWdpbnQnKXt2YXIgXzB4M2I4MDA2PV8weDU1OWE5ZVtfMHgxMjc3NzUoMHgxNzMpXXx8XzB4NTFmZTRkW18weDEyNzc3NSgweDE3MyldO2lmKHRoaXNbXzB4MTI3Nzc1KDB4ZjkpXShfMHgzMWNiYmEpPyhfMHgzNWQ0NDg9MHgwLF8weDMxY2JiYVtfMHgxMjc3NzUoMHgxNzUpXShmdW5jdGlvbihfMHg0MjA3ZjQpe3ZhciBfMHg1NGY3YzM9XzB4MTI3Nzc1O2lmKF8weDE2NzZhNysrLF8weDUxZmU0ZFtfMHg1NGY3YzMoMHgxOWUpXSsrLF8weDE2NzZhNz5fMHgzYjgwMDYpe18weDQzODRiZj0hMHgwO3JldHVybjt9aWYoIV8weDUxZmU0ZFtfMHg1NGY3YzMoMHgxNjYpXSYmXzB4NTFmZTRkWydhdXRvRXhwYW5kJ10mJl8weDUxZmU0ZFtfMHg1NGY3YzMoMHgxOWUpXT5fMHg1MWZlNGRbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHg0Mzg0YmY9ITB4MDtyZXR1cm47fV8weDM2ZTk2M1tfMHg1NGY3YzMoMHgxNzgpXShfMHg1NTJjY2FbXzB4NTRmN2MzKDB4MTI3KV0oXzB4MjdiODA4LF8weDMxY2JiYSxfMHg1NGY3YzMoMHgxYmIpLF8weDM1ZDQ0OCsrLF8weDUxZmU0ZCxmdW5jdGlvbihfMHg0YjNlZTYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg0YjNlZTY7fTt9KF8weDQyMDdmNCkpKTt9KSk6dGhpc1tfMHgxMjc3NzUoMHgxNGIpXShfMHgzMWNiYmEpJiZfMHgzMWNiYmFbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgyNTRhY2MsXzB4NWNlOTcyKXt2YXIgXzB4MTIyMTExPV8weDEyNzc3NTtpZihfMHgxNjc2YTcrKyxfMHg1MWZlNGRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgxNjc2YTc+XzB4M2I4MDA2KXtfMHg0Mzg0YmY9ITB4MDtyZXR1cm47fWlmKCFfMHg1MWZlNGRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4NTFmZTRkW18weDEyMjExMSgweDFhMildJiZfMHg1MWZlNGRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4NTFmZTRkW18weDEyMjExMSgweDFjMSldKXtfMHg0Mzg0YmY9ITB4MDtyZXR1cm47fXZhciBfMHg1MDdmNjM9XzB4NWNlOTcyW18weDEyMjExMSgweDExYyldKCk7XzB4NTA3ZjYzWydsZW5ndGgnXT4weDY0JiYoXzB4NTA3ZjYzPV8weDUwN2Y2M1tfMHgxMjIxMTEoMHgxNDcpXSgweDAsMHg2NCkrJy4uLicpLF8weDM2ZTk2M1sncHVzaCddKF8weDU1MmNjYVtfMHgxMjIxMTEoMHgxMjcpXShfMHgyN2I4MDgsXzB4MzFjYmJhLF8weDEyMjExMSgweDFkNyksXzB4NTA3ZjYzLF8weDUxZmU0ZCxmdW5jdGlvbihfMHg0ODljODApe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg0ODljODA7fTt9KF8weDI1NGFjYykpKTt9KSwhXzB4MjMxZjNjKXt0cnl7Zm9yKF8weDEyYzE0MyBpbiBfMHgzMWNiYmEpaWYoIShfMHgyNDY4ZDgmJl8weDJmMzFjN1tfMHgxMjc3NzUoMHgxN2MpXShfMHgxMmMxNDMpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MzFjYmJhLF8weDEyYzE0MyxfMHg1MWZlNGQpKXtpZihfMHgxNjc2YTcrKyxfMHg1MWZlNGRbXzB4MTI3Nzc1KDB4MTllKV0rKyxfMHgxNjc2YTc+XzB4M2I4MDA2KXtfMHg0Mzg0YmY9ITB4MDticmVhazt9aWYoIV8weDUxZmU0ZFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHg1MWZlNGRbJ2F1dG9FeHBhbmQnXSYmXzB4NTFmZTRkWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxYzEpXSl7XzB4NDM4NGJmPSEweDA7YnJlYWs7fV8weDM2ZTk2M1tfMHgxMjc3NzUoMHgxNzgpXShfMHg1NTJjY2FbXzB4MTI3Nzc1KDB4MTUxKV0oXzB4MjdiODA4LF8weDVkMjI4YyxfMHgzMWNiYmEsXzB4NTAyYjJkLF8weDEyYzE0MyxfMHg1MWZlNGQpKTt9fWNhdGNoe31pZihfMHg1ZDIyOGNbXzB4MTI3Nzc1KDB4MTlhKV09ITB4MCxfMHg1NDBiNTcmJihfMHg1ZDIyOGNbXzB4MTI3Nzc1KDB4MTE1KV09ITB4MCksIV8weDQzODRiZil7dmFyIF8weGQxNGM1Yz1bXVtfMHgxMjc3NzUoMHgxMzQpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weDMxY2JiYSkpW18weDEyNzc3NSgweDEzNCldKHRoaXNbXzB4MTI3Nzc1KDB4MTY5KV0oXzB4MzFjYmJhKSk7Zm9yKF8weDM1ZDQ0OD0weDAsXzB4MjUzMzBlPV8weGQxNGM1Y1tfMHgxMjc3NzUoMHgxMGEpXTtfMHgzNWQ0NDg8XzB4MjUzMzBlO18weDM1ZDQ0OCsrKWlmKF8weDEyYzE0Mz1fMHhkMTRjNWNbXzB4MzVkNDQ4XSwhKF8weDI0NjhkOCYmXzB4MmYzMWM3W18weDEyNzc3NSgweDE3YyldKF8weDEyYzE0M1tfMHgxMjc3NzUoMHgxMWMpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDMxY2JiYSxfMHgxMmMxNDMsXzB4NTFmZTRkKSYmIV8weDVkMjI4Y1tfMHgxMjc3NzUoMHgxNzcpK18weDEyYzE0M1sndG9TdHJpbmcnXSgpXSl7aWYoXzB4MTY3NmE3KyssXzB4NTFmZTRkWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MTY3NmE3Pl8weDNiODAwNil7XzB4NDM4NGJmPSEweDA7YnJlYWs7fWlmKCFfMHg1MWZlNGRbXzB4MTI3Nzc1KDB4MTY2KV0mJl8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxYTIpXSYmXzB4NTFmZTRkW18weDEyNzc3NSgweDE5ZSldPl8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxYzEpXSl7XzB4NDM4NGJmPSEweDA7YnJlYWs7fV8weDM2ZTk2M1tfMHgxMjc3NzUoMHgxNzgpXShfMHg1NTJjY2FbXzB4MTI3Nzc1KDB4MTUxKV0oXzB4MjdiODA4LF8weDVkMjI4YyxfMHgzMWNiYmEsXzB4NTAyYjJkLF8weDEyYzE0MyxfMHg1MWZlNGQpKTt9fX19fWlmKF8weDJmNWU0Y1sndHlwZSddPV8weDUwMmIyZCxfMHg1OTBiYzA/KF8weDJmNWU0Y1tfMHgxMjc3NzUoMHgxMzYpXT1fMHgzMWNiYmFbXzB4MTI3Nzc1KDB4MTUyKV0oKSx0aGlzW18weDEyNzc3NSgweDFhMCldKF8weDUwMmIyZCxfMHgyZjVlNGMsXzB4NTFmZTRkLF8weDU1OWE5ZSkpOl8weDUwMmIyZD09PV8weDEyNzc3NSgweDE0NSk/XzB4MmY1ZTRjWyd2YWx1ZSddPXRoaXNbXzB4MTI3Nzc1KDB4MWI1KV1bJ2NhbGwnXShfMHgzMWNiYmEpOl8weDUwMmIyZD09PV8weDEyNzc3NSgweDE2YSk/XzB4MmY1ZTRjW18weDEyNzc3NSgweDEzNildPV8weDMxY2JiYVtfMHgxMjc3NzUoMHgxMWMpXSgpOl8weDUwMmIyZD09PV8weDEyNzc3NSgweDE4Mik/XzB4MmY1ZTRjWyd2YWx1ZSddPXRoaXNbXzB4MTI3Nzc1KDB4MTRhKV1bXzB4MTI3Nzc1KDB4MTAwKV0oXzB4MzFjYmJhKTpfMHg1MDJiMmQ9PT1fMHgxMjc3NzUoMHgxYzYpJiZ0aGlzWydfU3ltYm9sJ10/XzB4MmY1ZTRjW18weDEyNzc3NSgweDEzNildPXRoaXNbXzB4MTI3Nzc1KDB4MThjKV1bXzB4MTI3Nzc1KDB4MTJiKV1bXzB4MTI3Nzc1KDB4MTFjKV1bXzB4MTI3Nzc1KDB4MTAwKV0oXzB4MzFjYmJhKTohXzB4NTFmZTRkW18weDEyNzc3NSgweDFhZSldJiYhKF8weDUwMmIyZD09PV8weDEyNzc3NSgweDE5Nil8fF8weDUwMmIyZD09PSd1bmRlZmluZWQnKSYmKGRlbGV0ZSBfMHgyZjVlNGNbXzB4MTI3Nzc1KDB4MTM2KV0sXzB4MmY1ZTRjWydjYXBwZWQnXT0hMHgwKSxfMHg0Mzg0YmYmJihfMHgyZjVlNGNbXzB4MTI3Nzc1KDB4MTIzKV09ITB4MCksXzB4M2VjODMxPV8weDUxZmU0ZFtfMHgxMjc3NzUoMHgxMjYpXVtfMHgxMjc3NzUoMHgxNzEpXSxfMHg1MWZlNGRbXzB4MTI3Nzc1KDB4MTI2KV1bXzB4MTI3Nzc1KDB4MTcxKV09XzB4MmY1ZTRjLHRoaXNbXzB4MTI3Nzc1KDB4MWIyKV0oXzB4MmY1ZTRjLF8weDUxZmU0ZCksXzB4MzZlOTYzW18weDEyNzc3NSgweDEwYSldKXtmb3IoXzB4MzVkNDQ4PTB4MCxfMHgyNTMzMGU9XzB4MzZlOTYzWydsZW5ndGgnXTtfMHgzNWQ0NDg8XzB4MjUzMzBlO18weDM1ZDQ0OCsrKV8weDM2ZTk2M1tfMHgzNWQ0NDhdKF8weDM1ZDQ0OCk7fV8weDI3YjgwOFsnbGVuZ3RoJ10mJihfMHgyZjVlNGNbXzB4MTI3Nzc1KDB4MTczKV09XzB4MjdiODA4KTt9Y2F0Y2goXzB4MzExZDkwKXtfMHg0ZWUzNDcoXzB4MzExZDkwLF8weDJmNWU0YyxfMHg1MWZlNGQpO31yZXR1cm4gdGhpc1tfMHgxMjc3NzUoMHgxNTUpXShfMHgzMWNiYmEsXzB4MmY1ZTRjKSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZjVlNGMsXzB4NTFmZTRkKSxfMHg1MWZlNGRbJ25vZGUnXVtfMHgxMjc3NzUoMHgxNzEpXT1fMHgzZWM4MzEsXzB4NTFmZTRkW18weDEyNzc3NSgweDExOCldLS0sXzB4NTFmZTRkW18weDEyNzc3NSgweDFhMildPV8weDFkNGI5ZixfMHg1MWZlNGRbXzB4MTI3Nzc1KDB4MWEyKV0mJl8weDUxZmU0ZFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDEyNzc3NSgweDFjMildKCksXzB4MmY1ZTRjO31bXzB4M2NjODI5KDB4MTY5KV0oXzB4MWEzZDY1KXt2YXIgXzB4MjE3MWU2PV8weDNjYzgyOTtyZXR1cm4gT2JqZWN0W18weDIxNzFlNigweGVlKV0/T2JqZWN0W18weDIxNzFlNigweGVlKV0oXzB4MWEzZDY1KTpbXTt9W18weDNjYzgyOSgweGY5KV0oXzB4ZGVhYTIwKXt2YXIgXzB4NWE4ZDc4PV8weDNjYzgyOTtyZXR1cm4hIShfMHhkZWFhMjAmJl8weDQ2MTEzN1snU2V0J10mJnRoaXNbXzB4NWE4ZDc4KDB4MTkzKV0oXzB4ZGVhYTIwKT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHhkZWFhMjBbXzB4NWE4ZDc4KDB4MTc1KV0pO31bXzB4M2NjODI5KDB4MTE2KV0oXzB4NTMxMzg0LF8weDIwNGM5MSxfMHg1NDZkNmIpe3ZhciBfMHg1MGRjYWU9XzB4M2NjODI5O3JldHVybiBfMHg1NDZkNmJbXzB4NTBkY2FlKDB4ZmMpXT90eXBlb2YgXzB4NTMxMzg0W18weDIwNGM5MV09PV8weDUwZGNhZSgweGViKTohMHgxO31bXzB4M2NjODI5KDB4MTUwKV0oXzB4MzA0Nzg4KXt2YXIgXzB4NTdjODc0PV8weDNjYzgyOSxfMHg1ZWZiOWU9Jyc7cmV0dXJuIF8weDVlZmI5ZT10eXBlb2YgXzB4MzA0Nzg4LF8weDVlZmI5ZT09PV8weDU3Yzg3NCgweDEzMik/dGhpc1tfMHg1N2M4NzQoMHgxOTMpXShfMHgzMDQ3ODgpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJz9fMHg1ZWZiOWU9XzB4NTdjODc0KDB4ZWQpOnRoaXNbXzB4NTdjODc0KDB4MTkzKV0oXzB4MzA0Nzg4KT09PV8weDU3Yzg3NCgweDE3YSk/XzB4NWVmYjllPV8weDU3Yzg3NCgweDE0NSk6dGhpc1tfMHg1N2M4NzQoMHgxOTMpXShfMHgzMDQ3ODgpPT09J1tvYmplY3RcXFxceDIwQmlnSW50XSc/XzB4NWVmYjllPSdiaWdpbnQnOl8weDMwNDc4OD09PW51bGw/XzB4NWVmYjllPV8weDU3Yzg3NCgweDE5Nik6XzB4MzA0Nzg4W18weDU3Yzg3NCgweDEwYyldJiYoXzB4NWVmYjllPV8weDMwNDc4OFsnY29uc3RydWN0b3InXVtfMHg1N2M4NzQoMHgxMGUpXXx8XzB4NWVmYjllKTpfMHg1ZWZiOWU9PT1fMHg1N2M4NzQoMHgxYmQpJiZ0aGlzW18weDU3Yzg3NCgweGVhKV0mJl8weDMwNDc4OCBpbnN0YW5jZW9mIHRoaXNbXzB4NTdjODc0KDB4ZWEpXSYmKF8weDVlZmI5ZT1fMHg1N2M4NzQoMHgxODgpKSxfMHg1ZWZiOWU7fVtfMHgzY2M4MjkoMHgxOTMpXShfMHgyNjE2ZTMpe3ZhciBfMHgxNjg2Mjc9XzB4M2NjODI5O3JldHVybiBPYmplY3RbXzB4MTY4NjI3KDB4MTJiKV1bXzB4MTY4NjI3KDB4MTFjKV1bXzB4MTY4NjI3KDB4MTAwKV0oXzB4MjYxNmUzKTt9W18weDNjYzgyOSgweDEyZCldKF8weDRmMDAzYil7dmFyIF8weDQ3Nzg1YT1fMHgzY2M4Mjk7cmV0dXJuIF8weDRmMDAzYj09PV8weDQ3Nzg1YSgweDEzYyl8fF8weDRmMDAzYj09PV8weDQ3Nzg1YSgweDEwMSl8fF8weDRmMDAzYj09PSdudW1iZXInO31bXzB4M2NjODI5KDB4MWFjKV0oXzB4NTgwZGE5KXt2YXIgXzB4NTY4MWJhPV8weDNjYzgyOTtyZXR1cm4gXzB4NTgwZGE5PT09XzB4NTY4MWJhKDB4MTIwKXx8XzB4NTgwZGE5PT09J1N0cmluZyd8fF8weDU4MGRhOT09PV8weDU2ODFiYSgweDFhNyk7fVtfMHgzY2M4MjkoMHgxMjcpXShfMHgzMWYwZGEsXzB4NTY1NTAzLF8weDQ2ZjdmMCxfMHg1NmRmZWUsXzB4ZTM2NzQ4LF8weDM4NDQ0ZCl7dmFyIF8weDU5MGEzNj10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyODBkOGUpe3ZhciBfMHgxZjcxZTM9XzB4ZWU2YixfMHg1NzM0NmM9XzB4ZTM2NzQ4W18weDFmNzFlMygweDEyNildW18weDFmNzFlMygweDE3MSldLF8weDIyZWMxMz1fMHhlMzY3NDhbJ25vZGUnXVtfMHgxZjcxZTMoMHgxNmMpXSxfMHgzYjU0ODE9XzB4ZTM2NzQ4W18weDFmNzFlMygweDEyNildWydwYXJlbnQnXTtfMHhlMzY3NDhbJ25vZGUnXVtfMHgxZjcxZTMoMHgxODYpXT1fMHg1NzM0NmMsXzB4ZTM2NzQ4Wydub2RlJ11bXzB4MWY3MWUzKDB4MTZjKV09dHlwZW9mIF8weDU2ZGZlZT09XzB4MWY3MWUzKDB4MTNkKT9fMHg1NmRmZWU6XzB4MjgwZDhlLF8weDMxZjBkYVsncHVzaCddKF8weDU5MGEzNltfMHgxZjcxZTMoMHhmZildKF8weDU2NTUwMyxfMHg0NmY3ZjAsXzB4NTZkZmVlLF8weGUzNjc0OCxfMHgzODQ0NGQpKSxfMHhlMzY3NDhbXzB4MWY3MWUzKDB4MTI2KV1bJ3BhcmVudCddPV8weDNiNTQ4MSxfMHhlMzY3NDhbXzB4MWY3MWUzKDB4MTI2KV1bXzB4MWY3MWUzKDB4MTZjKV09XzB4MjJlYzEzO307fVtfMHgzY2M4MjkoMHgxNTEpXShfMHgzMjU3NTEsXzB4MWRiZDhlLF8weDY1NzI0MSxfMHgxOGE0YjgsXzB4NDY3NzE5LF8weGViOWExNixfMHg1OTJjN2Mpe3ZhciBfMHgxNjgzNmE9XzB4M2NjODI5LF8weDQwMjZjOD10aGlzO3JldHVybiBfMHgxZGJkOGVbXzB4MTY4MzZhKDB4MTc3KStfMHg0Njc3MTlbXzB4MTY4MzZhKDB4MTFjKV0oKV09ITB4MCxmdW5jdGlvbihfMHgyOTUwZGMpe3ZhciBfMHg1OGFlMTk9XzB4MTY4MzZhLF8weDk4OWU4YT1fMHhlYjlhMTZbXzB4NThhZTE5KDB4MTI2KV1bXzB4NThhZTE5KDB4MTcxKV0sXzB4NTQ3NGNjPV8weGViOWExNlsnbm9kZSddW18weDU4YWUxOSgweDE2YyldLF8weGZjMGEzPV8weGViOWExNltfMHg1OGFlMTkoMHgxMjYpXVtfMHg1OGFlMTkoMHgxODYpXTtfMHhlYjlhMTZbJ25vZGUnXVtfMHg1OGFlMTkoMHgxODYpXT1fMHg5ODllOGEsXzB4ZWI5YTE2W18weDU4YWUxOSgweDEyNildW18weDU4YWUxOSgweDE2YyldPV8weDI5NTBkYyxfMHgzMjU3NTFbXzB4NThhZTE5KDB4MTc4KV0oXzB4NDAyNmM4WydfcHJvcGVydHknXShfMHg2NTcyNDEsXzB4MThhNGI4LF8weDQ2NzcxOSxfMHhlYjlhMTYsXzB4NTkyYzdjKSksXzB4ZWI5YTE2Wydub2RlJ11bXzB4NThhZTE5KDB4MTg2KV09XzB4ZmMwYTMsXzB4ZWI5YTE2Wydub2RlJ11bXzB4NThhZTE5KDB4MTZjKV09XzB4NTQ3NGNjO307fVtfMHgzY2M4MjkoMHhmZildKF8weDM0OTE5OCxfMHg0OGYzMTQsXzB4MzVmMTA1LF8weDc4ZDdjOCxfMHgzZTIwOTkpe3ZhciBfMHg0NjI1YzM9XzB4M2NjODI5LF8weDE5NWM2Mz10aGlzO18weDNlMjA5OXx8KF8weDNlMjA5OT1mdW5jdGlvbihfMHgxMWJmMmQsXzB4NWU1ZDhkKXtyZXR1cm4gXzB4MTFiZjJkW18weDVlNWQ4ZF07fSk7dmFyIF8weDM5MzU3Nj1fMHgzNWYxMDVbJ3RvU3RyaW5nJ10oKSxfMHgzOTQ2YmU9XzB4NzhkN2M4W18weDQ2MjVjMygweDEyOCldfHx7fSxfMHg0NjYzMzU9XzB4NzhkN2M4W18weDQ2MjVjMygweDFhZSldLF8weDQ5YzM2OT1fMHg3OGQ3YzhbXzB4NDYyNWMzKDB4MTY2KV07dHJ5e3ZhciBfMHgzZmFhZWM9dGhpc1tfMHg0NjI1YzMoMHgxNGIpXShfMHgzNDkxOTgpLF8weDIxODBlZD1fMHgzOTM1NzY7XzB4M2ZhYWVjJiZfMHgyMTgwZWRbMHgwXT09PSdcXFxceDI3JyYmKF8weDIxODBlZD1fMHgyMTgwZWRbJ3N1YnN0ciddKDB4MSxfMHgyMTgwZWRbJ2xlbmd0aCddLTB4MikpO3ZhciBfMHg0ZGRkYzM9XzB4NzhkN2M4W18weDQ2MjVjMygweDEyOCldPV8weDM5NDZiZVtfMHg0NjI1YzMoMHgxNzcpK18weDIxODBlZF07XzB4NGRkZGMzJiYoXzB4NzhkN2M4WydkZXB0aCddPV8weDc4ZDdjOFsnZGVwdGgnXSsweDEpLF8weDc4ZDdjOFtfMHg0NjI1YzMoMHgxNjYpXT0hIV8weDRkZGRjMzt2YXIgXzB4NWJmMzI0PXR5cGVvZiBfMHgzNWYxMDU9PV8weDQ2MjVjMygweDFjNiksXzB4NTk2MjFmPXsnbmFtZSc6XzB4NWJmMzI0fHxfMHgzZmFhZWM/XzB4MzkzNTc2OnRoaXNbXzB4NDYyNWMzKDB4MTAyKV0oXzB4MzkzNTc2KX07aWYoXzB4NWJmMzI0JiYoXzB4NTk2MjFmW18weDQ2MjVjMygweDFjNildPSEweDApLCEoXzB4NDhmMzE0PT09XzB4NDYyNWMzKDB4ZWQpfHxfMHg0OGYzMTQ9PT1fMHg0NjI1YzMoMHgxOGQpKSl7dmFyIF8weDI2YmFhYz10aGlzW18weDQ2MjVjMygweDExMSldKF8weDM0OTE5OCxfMHgzNWYxMDUpO2lmKF8weDI2YmFhYyYmKF8weDI2YmFhY1tfMHg0NjI1YzMoMHgxNDApXSYmKF8weDU5NjIxZltfMHg0NjI1YzMoMHgxYmUpXT0hMHgwKSxfMHgyNmJhYWNbXzB4NDYyNWMzKDB4ZmIpXSYmIV8weDRkZGRjMyYmIV8weDc4ZDdjOFsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDU5NjIxZlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDQ2MjVjMygweDE2ZSldKF8weDU5NjIxZixfMHg3OGQ3YzgpLF8weDU5NjIxZjt9dmFyIF8weGQwOTU1ZDt0cnl7XzB4ZDA5NTVkPV8weDNlMjA5OShfMHgzNDkxOTgsXzB4MzVmMTA1KTt9Y2F0Y2goXzB4MTJlNWNiKXtyZXR1cm4gXzB4NTk2MjFmPXsnbmFtZSc6XzB4MzkzNTc2LCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgxMmU1Y2JbJ21lc3NhZ2UnXX0sdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDU5NjIxZixfMHg3OGQ3YzgpLF8weDU5NjIxZjt9dmFyIF8weDFiZGNhYT10aGlzW18weDQ2MjVjMygweDE1MCldKF8weGQwOTU1ZCksXzB4MTRkZTliPXRoaXNbXzB4NDYyNWMzKDB4MTJkKV0oXzB4MWJkY2FhKTtpZihfMHg1OTYyMWZbXzB4NDYyNWMzKDB4ZmEpXT1fMHgxYmRjYWEsXzB4MTRkZTliKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHg1OTYyMWYsXzB4NzhkN2M4LF8weGQwOTU1ZCxmdW5jdGlvbigpe3ZhciBfMHg0MzY4MDU9XzB4NDYyNWMzO18weDU5NjIxZltfMHg0MzY4MDUoMHgxMzYpXT1fMHhkMDk1NWRbXzB4NDM2ODA1KDB4MTUyKV0oKSwhXzB4NGRkZGMzJiZfMHgxOTVjNjNbXzB4NDM2ODA1KDB4MWEwKV0oXzB4MWJkY2FhLF8weDU5NjIxZixfMHg3OGQ3Yzgse30pO30pO2Vsc2V7dmFyIF8weDNiOGRmOD1fMHg3OGQ3YzhbJ2F1dG9FeHBhbmQnXSYmXzB4NzhkN2M4W18weDQ2MjVjMygweDExOCldPF8weDc4ZDdjOFtfMHg0NjI1YzMoMHgxMWIpXSYmXzB4NzhkN2M4W18weDQ2MjVjMygweDE0NCldWydpbmRleE9mJ10oXzB4ZDA5NTVkKTwweDAmJl8weDFiZGNhYSE9PV8weDQ2MjVjMygweGViKSYmXzB4NzhkN2M4W18weDQ2MjVjMygweDE5ZSldPF8weDc4ZDdjOFtfMHg0NjI1YzMoMHgxYzEpXTtfMHgzYjhkZjh8fF8weDc4ZDdjOFsnbGV2ZWwnXTxfMHg0NjYzMzV8fF8weDRkZGRjMz8odGhpc1tfMHg0NjI1YzMoMHgxZDEpXShfMHg1OTYyMWYsXzB4ZDA5NTVkLF8weDc4ZDdjOCxfMHg0ZGRkYzN8fHt9KSx0aGlzW18weDQ2MjVjMygweDE1NSldKF8weGQwOTU1ZCxfMHg1OTYyMWYpKTp0aGlzW18weDQ2MjVjMygweDE2ZSldKF8weDU5NjIxZixfMHg3OGQ3YzgsXzB4ZDA5NTVkLGZ1bmN0aW9uKCl7dmFyIF8weDI4M2EzMD1fMHg0NjI1YzM7XzB4MWJkY2FhPT09XzB4MjgzYTMwKDB4MTk2KXx8XzB4MWJkY2FhPT09XzB4MjgzYTMwKDB4MWJkKXx8KGRlbGV0ZSBfMHg1OTYyMWZbXzB4MjgzYTMwKDB4MTM2KV0sXzB4NTk2MjFmW18weDI4M2EzMCgweDFiNildPSEweDApO30pO31yZXR1cm4gXzB4NTk2MjFmO31maW5hbGx5e18weDc4ZDdjOFtfMHg0NjI1YzMoMHgxMjgpXT1fMHgzOTQ2YmUsXzB4NzhkN2M4WydkZXB0aCddPV8weDQ2NjMzNSxfMHg3OGQ3YzhbXzB4NDYyNWMzKDB4MTY2KV09XzB4NDljMzY5O319W18weDNjYzgyOSgweDFhMCldKF8weDFjZjdjZCxfMHg2ZmFjYyxfMHg0ZDVlOGYsXzB4MjBmNWIzKXt2YXIgXzB4MjZkNTg2PV8weDNjYzgyOSxfMHgyNjkzNGM9XzB4MjBmNWIzWydzdHJMZW5ndGgnXXx8XzB4NGQ1ZThmW18weDI2ZDU4NigweDFjZCldO2lmKChfMHgxY2Y3Y2Q9PT1fMHgyNmQ1ODYoMHgxMDEpfHxfMHgxY2Y3Y2Q9PT0nU3RyaW5nJykmJl8weDZmYWNjW18weDI2ZDU4NigweDEzNildKXtsZXQgXzB4NDc2MTE4PV8weDZmYWNjW18weDI2ZDU4NigweDEzNildW18weDI2ZDU4NigweDEwYSldO18weDRkNWU4ZlsnYWxsU3RyTGVuZ3RoJ10rPV8weDQ3NjExOCxfMHg0ZDVlOGZbXzB4MjZkNTg2KDB4MWIwKV0+XzB4NGQ1ZThmW18weDI2ZDU4NigweGYyKV0/KF8weDZmYWNjW18weDI2ZDU4NigweDFiNildPScnLGRlbGV0ZSBfMHg2ZmFjY1tfMHgyNmQ1ODYoMHgxMzYpXSk6XzB4NDc2MTE4Pl8weDI2OTM0YyYmKF8weDZmYWNjWydjYXBwZWQnXT1fMHg2ZmFjY1tfMHgyNmQ1ODYoMHgxMzYpXVtfMHgyNmQ1ODYoMHgxNTMpXSgweDAsXzB4MjY5MzRjKSxkZWxldGUgXzB4NmZhY2NbXzB4MjZkNTg2KDB4MTM2KV0pO319W18weDNjYzgyOSgweDE0YildKF8weDNkMmRhZil7dmFyIF8weDExYjhjZD1fMHgzY2M4Mjk7cmV0dXJuISEoXzB4M2QyZGFmJiZfMHg0NjExMzdbXzB4MTFiOGNkKDB4MWQ3KV0mJnRoaXNbXzB4MTFiOGNkKDB4MTkzKV0oXzB4M2QyZGFmKT09PV8weDExYjhjZCgweDExZikmJl8weDNkMmRhZltfMHgxMWI4Y2QoMHgxNzUpXSk7fVtfMHgzY2M4MjkoMHgxMDIpXShfMHg0YWMwZGUpe3ZhciBfMHg1YWJkZWU9XzB4M2NjODI5O2lmKF8weDRhYzBkZVtfMHg1YWJkZWUoMHgxOWQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NGFjMGRlO3ZhciBfMHg1OGYxOTU7dHJ5e18weDU4ZjE5NT1KU09OW18weDVhYmRlZSgweDFjNyldKCcnK18weDRhYzBkZSk7fWNhdGNoe18weDU4ZjE5NT0nXFxcXHgyMicrdGhpc1tfMHg1YWJkZWUoMHgxOTMpXShfMHg0YWMwZGUpKydcXFxceDIyJzt9cmV0dXJuIF8weDU4ZjE5NVtfMHg1YWJkZWUoMHgxOWQpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDU4ZjE5NT1fMHg1OGYxOTVbXzB4NWFiZGVlKDB4MTUzKV0oMHgxLF8weDU4ZjE5NVtfMHg1YWJkZWUoMHgxMGEpXS0weDIpOl8weDU4ZjE5NT1fMHg1OGYxOTVbXzB4NWFiZGVlKDB4ZjEpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4NWFiZGVlKDB4ZjEpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NThmMTk1O31bXzB4M2NjODI5KDB4MTZlKV0oXzB4MzEyZjMxLF8weDEzN2E1YixfMHg1MTc0NjgsXzB4NDBhYmJjKXt2YXIgXzB4MjhhMmExPV8weDNjYzgyOTt0aGlzW18weDI4YTJhMSgweDFiMildKF8weDMxMmYzMSxfMHgxMzdhNWIpLF8weDQwYWJiYyYmXzB4NDBhYmJjKCksdGhpc1tfMHgyOGEyYTEoMHgxNTUpXShfMHg1MTc0NjgsXzB4MzEyZjMxKSx0aGlzW18weDI4YTJhMSgweDFhYSldKF8weDMxMmYzMSxfMHgxMzdhNWIpO31bXzB4M2NjODI5KDB4MWIyKV0oXzB4NWQ4YzhmLF8weDFmMjE1OCl7dmFyIF8weDQ2ZTQ3ZD1fMHgzY2M4Mjk7dGhpc1tfMHg0NmU0N2QoMHgxNGQpXShfMHg1ZDhjOGYsXzB4MWYyMTU4KSx0aGlzWydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDVkOGM4ZixfMHgxZjIxNTgpLHRoaXNbXzB4NDZlNDdkKDB4MTc2KV0oXzB4NWQ4YzhmLF8weDFmMjE1OCksdGhpc1tfMHg0NmU0N2QoMHgxOGEpXShfMHg1ZDhjOGYsXzB4MWYyMTU4KTt9W18weDNjYzgyOSgweDE0ZCldKF8weDIwMjdkZCxfMHgyY2I1ZmQpe31bXzB4M2NjODI5KDB4MWI5KV0oXzB4NTE5ZGZiLF8weDRmNzFkMil7fVtfMHgzY2M4MjkoMHgxMDMpXShfMHg0OWNiYWIsXzB4MjkyZDlkKXt9W18weDNjYzgyOSgweDE2MCldKF8weDEwMTIzZSl7dmFyIF8weDQ5OWQxYj1fMHgzY2M4Mjk7cmV0dXJuIF8weDEwMTIzZT09PXRoaXNbXzB4NDk5ZDFiKDB4MTMxKV07fVtfMHgzY2M4MjkoMHgxYWEpXShfMHgyNjg4MTUsXzB4NmE4YWM1KXt2YXIgXzB4NDAwNjBhPV8weDNjYzgyOTt0aGlzW18weDQwMDYwYSgweDEwMyldKF8weDI2ODgxNSxfMHg2YThhYzUpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4MjY4ODE1KSxfMHg2YThhYzVbXzB4NDAwNjBhKDB4MTMwKV0mJnRoaXNbXzB4NDAwNjBhKDB4MWNhKV0oXzB4MjY4ODE1KSx0aGlzWydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDI2ODgxNSxfMHg2YThhYzUpLHRoaXNbXzB4NDAwNjBhKDB4MWE0KV0oXzB4MjY4ODE1LF8weDZhOGFjNSksdGhpc1tfMHg0MDA2MGEoMHgxNTgpXShfMHgyNjg4MTUpO31bXzB4M2NjODI5KDB4MTU1KV0oXzB4NWJiMjRiLF8weDE5MmRjZil7dmFyIF8weDQ0MWQxZT1fMHgzY2M4Mjk7bGV0IF8weDQ2Yzk4MTt0cnl7XzB4NDYxMTM3W18weDQ0MWQxZSgweDE1NCldJiYoXzB4NDZjOTgxPV8weDQ2MTEzN1snY29uc29sZSddW18weDQ0MWQxZSgweDE4ZildLF8weDQ2MTEzN1tfMHg0NDFkMWUoMHgxNTQpXVtfMHg0NDFkMWUoMHgxOGYpXT1mdW5jdGlvbigpe30pLF8weDViYjI0YiYmdHlwZW9mIF8weDViYjI0YltfMHg0NDFkMWUoMHgxMGEpXT09XzB4NDQxZDFlKDB4MTNkKSYmKF8weDE5MmRjZltfMHg0NDFkMWUoMHgxMGEpXT1fMHg1YmIyNGJbXzB4NDQxZDFlKDB4MTBhKV0pO31jYXRjaHt9ZmluYWxseXtfMHg0NmM5ODEmJihfMHg0NjExMzdbXzB4NDQxZDFlKDB4MTU0KV1bXzB4NDQxZDFlKDB4MThmKV09XzB4NDZjOTgxKTt9aWYoXzB4MTkyZGNmW18weDQ0MWQxZSgweGZhKV09PT1fMHg0NDFkMWUoMHgxM2QpfHxfMHgxOTJkY2ZbXzB4NDQxZDFlKDB4ZmEpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgxOTJkY2ZbJ3ZhbHVlJ10pKV8weDE5MmRjZltfMHg0NDFkMWUoMHgxOTUpXT0hMHgwLGRlbGV0ZSBfMHgxOTJkY2ZbJ3ZhbHVlJ107ZWxzZSBzd2l0Y2goXzB4MTkyZGNmW18weDQ0MWQxZSgweDEzNildKXtjYXNlIE51bWJlcltfMHg0NDFkMWUoMHgxYzApXTpfMHgxOTJkY2ZbXzB4NDQxZDFlKDB4MWJhKV09ITB4MCxkZWxldGUgXzB4MTkyZGNmW18weDQ0MWQxZSgweDEzNildO2JyZWFrO2Nhc2UgTnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddOl8weDE5MmRjZlsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDE5MmRjZltfMHg0NDFkMWUoMHgxMzYpXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHgxOTJkY2ZbJ3ZhbHVlJ10pJiYoXzB4MTkyZGNmW18weDQ0MWQxZSgweDE0MildPSEweDApO2JyZWFrO319ZWxzZSBfMHgxOTJkY2ZbXzB4NDQxZDFlKDB4ZmEpXT09PV8weDQ0MWQxZSgweGViKSYmdHlwZW9mIF8weDViYjI0YltfMHg0NDFkMWUoMHgxMGUpXT09XzB4NDQxZDFlKDB4MTAxKSYmXzB4NWJiMjRiW18weDQ0MWQxZSgweDEwZSldJiZfMHgxOTJkY2ZbXzB4NDQxZDFlKDB4MTBlKV0mJl8weDViYjI0YlsnbmFtZSddIT09XzB4MTkyZGNmW18weDQ0MWQxZSgweDEwZSldJiYoXzB4MTkyZGNmW18weDQ0MWQxZSgweDE0ZildPV8weDViYjI0YltfMHg0NDFkMWUoMHgxMGUpXSk7fVtfMHgzY2M4MjkoMHgxN2IpXShfMHgyMjMwYmIpe3JldHVybiAweDEvXzB4MjIzMGJiPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bXzB4M2NjODI5KDB4MWNhKV0oXzB4M2NkZTRlKXt2YXIgXzB4MmM5ZjViPV8weDNjYzgyOTshXzB4M2NkZTRlW18weDJjOWY1YigweDE3MyldfHwhXzB4M2NkZTRlW18weDJjOWY1YigweDE3MyldW18weDJjOWY1YigweDEwYSldfHxfMHgzY2RlNGVbXzB4MmM5ZjViKDB4ZmEpXT09PV8weDJjOWY1YigweGVkKXx8XzB4M2NkZTRlW18weDJjOWY1YigweGZhKV09PT1fMHgyYzlmNWIoMHgxZDcpfHxfMHgzY2RlNGVbJ3R5cGUnXT09PV8weDJjOWY1YigweDFiYil8fF8weDNjZGU0ZVsncHJvcHMnXVsnc29ydCddKGZ1bmN0aW9uKF8weDQ2OTY1OSxfMHgyNmExZmMpe3ZhciBfMHg1MmY4NGI9XzB4MmM5ZjViLF8weDVjNjA1ZD1fMHg0Njk2NTlbXzB4NTJmODRiKDB4MTBlKV1bXzB4NTJmODRiKDB4MTM5KV0oKSxfMHg0NTgzYTk9XzB4MjZhMWZjW18weDUyZjg0YigweDEwZSldWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDVjNjA1ZDxfMHg0NTgzYTk/LTB4MTpfMHg1YzYwNWQ+XzB4NDU4M2E5PzB4MToweDA7fSk7fVtfMHgzY2M4MjkoMHgxMjEpXShfMHg1ODY0ZDgsXzB4NTJiMjliKXt2YXIgXzB4NGU4NTMzPV8weDNjYzgyOTtpZighKF8weDUyYjI5Ylsnbm9GdW5jdGlvbnMnXXx8IV8weDU4NjRkOFtfMHg0ZTg1MzMoMHgxNzMpXXx8IV8weDU4NjRkOFsncHJvcHMnXVtfMHg0ZTg1MzMoMHgxMGEpXSkpe2Zvcih2YXIgXzB4NTRmMTY3PVtdLF8weDUzNjAyZj1bXSxfMHg0ZjYyOGU9MHgwLF8weDUzMzE2Nj1fMHg1ODY0ZDhbJ3Byb3BzJ11bXzB4NGU4NTMzKDB4MTBhKV07XzB4NGY2MjhlPF8weDUzMzE2NjtfMHg0ZjYyOGUrKyl7dmFyIF8weDVmNGJmYj1fMHg1ODY0ZDhbJ3Byb3BzJ11bXzB4NGY2MjhlXTtfMHg1ZjRiZmJbXzB4NGU4NTMzKDB4ZmEpXT09PV8weDRlODUzMygweGViKT9fMHg1NGYxNjdbXzB4NGU4NTMzKDB4MTc4KV0oXzB4NWY0YmZiKTpfMHg1MzYwMmZbXzB4NGU4NTMzKDB4MTc4KV0oXzB4NWY0YmZiKTt9aWYoISghXzB4NTM2MDJmW18weDRlODUzMygweDEwYSldfHxfMHg1NGYxNjdbXzB4NGU4NTMzKDB4MTBhKV08PTB4MSkpe18weDU4NjRkOFtfMHg0ZTg1MzMoMHgxNzMpXT1fMHg1MzYwMmY7dmFyIF8weDExNWNiYj17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg1NGYxNjd9O3RoaXNbJ19zZXROb2RlSWQnXShfMHgxMTVjYmIsXzB4NTJiMjliKSx0aGlzW18weDRlODUzMygweDEwMyldKF8weDExNWNiYixfMHg1MmIyOWIpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4MTE1Y2JiKSx0aGlzW18weDRlODUzMygweDE4YSldKF8weDExNWNiYixfMHg1MmIyOWIpLF8weDExNWNiYlsnaWQnXSs9J1xcXFx4MjBmJyxfMHg1ODY0ZDhbJ3Byb3BzJ11bXzB4NGU4NTMzKDB4MTY0KV0oXzB4MTE1Y2JiKTt9fX1bXzB4M2NjODI5KDB4MWE0KV0oXzB4MjhkOTY0LF8weDE5Y2E4Mil7fVtfMHgzY2M4MjkoMHgxMjIpXShfMHg1YzExZTQpe31bXzB4M2NjODI5KDB4MTdlKV0oXzB4MjdjMzU5KXt2YXIgXzB4NDQyNWZkPV8weDNjYzgyOTtyZXR1cm4gQXJyYXlbXzB4NDQyNWZkKDB4MTc0KV0oXzB4MjdjMzU5KXx8dHlwZW9mIF8weDI3YzM1OT09XzB4NDQyNWZkKDB4MTMyKSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MjdjMzU5KT09PV8weDQ0MjVmZCgweDE0ZSk7fVtfMHgzY2M4MjkoMHgxOGEpXShfMHg1MjU3ODQsXzB4NDA2MjEwKXt9W18weDNjYzgyOSgweDE1OCldKF8weDJmY2IwMil7dmFyIF8weDJjMmZhOT1fMHgzY2M4Mjk7ZGVsZXRlIF8weDJmY2IwMltfMHgyYzJmYTkoMHhmZCldLGRlbGV0ZSBfMHgyZmNiMDJbXzB4MmMyZmE5KDB4MTEzKV0sZGVsZXRlIF8weDJmY2IwMlsnX2hhc01hcE9uSXRzUGF0aCddO31bXzB4M2NjODI5KDB4MTc2KV0oXzB4NWJkZWU3LF8weDJhNGIwZil7fX1sZXQgXzB4NTY3MDA1PW5ldyBfMHg0ZjM2ZWIoKSxfMHg1ZTJhM2E9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NDc2YTBhPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MzZiOTAzKF8weDNjMGQ1MSxfMHgzYWYzMzYsXzB4M2ZlYzYsXzB4MzMzYzJlLF8weDQ2ODcyYyxfMHg0ZGNlNDYpe3ZhciBfMHgyOTE3MjM9XzB4M2NjODI5O2xldCBfMHgzMzQ2YjMsXzB4MWE0OGJlO3RyeXtfMHgxYTQ4YmU9XzB4MzAyOTA5KCksXzB4MzM0NmIzPV8weDE0ZTMwN1tfMHgzYWYzMzZdLCFfMHgzMzQ2YjN8fF8weDFhNDhiZS1fMHgzMzQ2YjNbJ3RzJ10+MHgxZjQmJl8weDMzNDZiM1tfMHgyOTE3MjMoMHhmNCldJiZfMHgzMzQ2YjNbXzB4MjkxNzIzKDB4ZjApXS9fMHgzMzQ2YjNbJ2NvdW50J108MHg2ND8oXzB4MTRlMzA3W18weDNhZjMzNl09XzB4MzM0NmIzPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MWE0OGJlfSxfMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV09e30pOl8weDFhNDhiZS1fMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV1bJ3RzJ10+MHgzMiYmXzB4MTRlMzA3W18weDI5MTcyMygweDEzYSldW18weDI5MTcyMygweGY0KV0mJl8weDE0ZTMwN1snaGl0cyddW18weDI5MTcyMygweGYwKV0vXzB4MTRlMzA3WydoaXRzJ11bJ2NvdW50J108MHg2NCYmKF8weDE0ZTMwN1snaGl0cyddPXt9KTtsZXQgXzB4NzNkM2Q3PVtdLF8weGM4M2NhOD1fMHgzMzQ2YjNbJ3JlZHVjZUxpbWl0cyddfHxfMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV1bXzB4MjkxNzIzKDB4MTJhKV0/XzB4NDc2YTBhOl8weDVlMmEzYSxfMHg0ZGJkN2Y9XzB4M2QwYjUwPT57dmFyIF8weDkxZGFkYj1fMHgyOTE3MjM7bGV0IF8weDM3ZDhkNj17fTtyZXR1cm4gXzB4MzdkOGQ2W18weDkxZGFkYigweDE3MyldPV8weDNkMGI1MFtfMHg5MWRhZGIoMHgxNzMpXSxfMHgzN2Q4ZDZbJ2VsZW1lbnRzJ109XzB4M2QwYjUwW18weDkxZGFkYigweDE1ZCldLF8weDM3ZDhkNltfMHg5MWRhZGIoMHgxY2QpXT1fMHgzZDBiNTBbXzB4OTFkYWRiKDB4MWNkKV0sXzB4MzdkOGQ2W18weDkxZGFkYigweGYyKV09XzB4M2QwYjUwW18weDkxZGFkYigweGYyKV0sXzB4MzdkOGQ2W18weDkxZGFkYigweDFjMSldPV8weDNkMGI1MFtfMHg5MWRhZGIoMHgxYzEpXSxfMHgzN2Q4ZDZbJ2F1dG9FeHBhbmRNYXhEZXB0aCddPV8weDNkMGI1MFtfMHg5MWRhZGIoMHgxMWIpXSxfMHgzN2Q4ZDZbXzB4OTFkYWRiKDB4MTMwKV09ITB4MSxfMHgzN2Q4ZDZbJ25vRnVuY3Rpb25zJ109IV8weDJkMzQyNCxfMHgzN2Q4ZDZbXzB4OTFkYWRiKDB4MWFlKV09MHgxLF8weDM3ZDhkNltfMHg5MWRhZGIoMHgxMTgpXT0weDAsXzB4MzdkOGQ2W18weDkxZGFkYigweDE4ZSldPSdyb290X2V4cF9pZCcsXzB4MzdkOGQ2Wydyb290RXhwcmVzc2lvbiddPV8weDkxZGFkYigweDE4MCksXzB4MzdkOGQ2WydhdXRvRXhwYW5kJ109ITB4MCxfMHgzN2Q4ZDZbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXT1bXSxfMHgzN2Q4ZDZbXzB4OTFkYWRiKDB4MTllKV09MHgwLF8weDM3ZDhkNltfMHg5MWRhZGIoMHgxNWEpXT0hMHgwLF8weDM3ZDhkNltfMHg5MWRhZGIoMHgxYjApXT0weDAsXzB4MzdkOGQ2W18weDkxZGFkYigweDEyNildPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDM3ZDhkNjt9O2Zvcih2YXIgXzB4MTU1ZDY5PTB4MDtfMHgxNTVkNjk8XzB4NDY4NzJjWydsZW5ndGgnXTtfMHgxNTVkNjkrKylfMHg3M2QzZDdbXzB4MjkxNzIzKDB4MTc4KV0oXzB4NTY3MDA1W18weDI5MTcyMygweDFkMSldKHsndGltZU5vZGUnOl8weDNjMGQ1MT09PV8weDI5MTcyMygweGYwKXx8dm9pZCAweDB9LF8weDQ2ODcyY1tfMHgxNTVkNjldLF8weDRkYmQ3ZihfMHhjODNjYTgpLHt9KSk7aWYoXzB4M2MwZDUxPT09XzB4MjkxNzIzKDB4MTI1KSl7bGV0IF8weDEzZjc5Yj1FcnJvcltfMHgyOTE3MjMoMHgxMDgpXTt0cnl7RXJyb3JbXzB4MjkxNzIzKDB4MTA4KV09MHgxLzB4MCxfMHg3M2QzZDdbJ3B1c2gnXShfMHg1NjcwMDVbXzB4MjkxNzIzKDB4MWQxKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpWydzdGFjayddLF8weDRkYmQ3ZihfMHhjODNjYTgpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDI5MTcyMygweDEwOCldPV8weDEzZjc5Yjt9fXJldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4NTIzMTE4LCdhcmdzJzpbeyd0cyc6XzB4M2ZlYzYsJ3Nlc3Npb24nOl8weDMzM2MyZSwnYXJncyc6XzB4NzNkM2Q3LCdpZCc6XzB4M2FmMzM2LCdjb250ZXh0JzpfMHg0ZGNlNDZ9XX07fWNhdGNoKF8weDI0NjhmYil7cmV0dXJueydtZXRob2QnOl8weDI5MTcyMygweDExOSksJ3ZlcnNpb24nOl8weDUyMzExOCwnYXJncyc6W3sndHMnOl8weDNmZWM2LCdzZXNzaW9uJzpfMHgzMzNjMmUsJ2FyZ3MnOlt7J3R5cGUnOl8weDI5MTcyMygweDE3MCksJ2Vycm9yJzpfMHgyNDY4ZmImJl8weDI0NjhmYltfMHgyOTE3MjMoMHhmOCldfV0sJ2lkJzpfMHgzYWYzMzYsJ2NvbnRleHQnOl8weDRkY2U0Nn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MzM0NmIzJiZfMHgxYTQ4YmUpe2xldCBfMHg0YTM4YmU9XzB4MzAyOTA5KCk7XzB4MzM0NmIzW18weDI5MTcyMygweGY0KV0rKyxfMHgzMzQ2YjNbXzB4MjkxNzIzKDB4ZjApXSs9XzB4NDdkYzJhKF8weDFhNDhiZSxfMHg0YTM4YmUpLF8weDMzNDZiM1sndHMnXT1fMHg0YTM4YmUsXzB4MTRlMzA3W18weDI5MTcyMygweDEzYSldW18weDI5MTcyMygweGY0KV0rKyxfMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV1bXzB4MjkxNzIzKDB4ZjApXSs9XzB4NDdkYzJhKF8weDFhNDhiZSxfMHg0YTM4YmUpLF8weDE0ZTMwN1snaGl0cyddWyd0cyddPV8weDRhMzhiZSwoXzB4MzM0NmIzW18weDI5MTcyMygweGY0KV0+MHgzMnx8XzB4MzM0NmIzW18weDI5MTcyMygweGYwKV0+MHg2NCkmJihfMHgzMzQ2YjNbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV1bXzB4MjkxNzIzKDB4ZjQpXT4weDNlOHx8XzB4MTRlMzA3WydoaXRzJ11bXzB4MjkxNzIzKDB4ZjApXT4weDEyYykmJihfMHgxNGUzMDdbXzB4MjkxNzIzKDB4MTNhKV1bJ3JlZHVjZUxpbWl0cyddPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDM2YjkwMzt9KChfMHgxMDQ3YzksXzB4NWQxODVlLF8weDJiMDE5NSxfMHgxYzFmZDQsXzB4MzliZGE5LF8weDMzZmZjYixfMHgxYzkzM2IsXzB4MWNiYjI0LF8weDVkODM2ZCxfMHg1Zjg3NzQpPT57dmFyIF8weDQ1N2Y1Nz1fMHgyZTI0YmE7aWYoXzB4MTA0N2M5W18weDQ1N2Y1NygweGY1KV0pcmV0dXJuIF8weDEwNDdjOVtfMHg0NTdmNTcoMHhmNSldO2lmKCFKKF8weDEwNDdjOSxfMHgxY2JiMjQsXzB4MzliZGE5KSlyZXR1cm4gXzB4MTA0N2M5WydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgxMDQ3YzlbXzB4NDU3ZjU3KDB4ZjUpXTtsZXQgXzB4YzVmNDRmPVcoXzB4MTA0N2M5KSxfMHgxMjJmNjM9XzB4YzVmNDRmW18weDQ1N2Y1NygweDFkMCldLF8weGQ0ZjIzMT1fMHhjNWY0NGZbXzB4NDU3ZjU3KDB4MTE0KV0sXzB4NTcwYmRmPV8weGM1ZjQ0Zlsnbm93J10sXzB4MmM4YzUzPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4OWQ0Zjg3PVkoXzB4MTA0N2M5LF8weDVkODM2ZCxfMHgyYzhjNTMsXzB4MzNmZmNiKSxfMHgzZjgyNz1fMHgyM2Y5YzA9PntfMHgyYzhjNTNbJ3RzJ11bXzB4MjNmOWMwXT1fMHhkNGYyMzEoKTt9LF8weDE0YzdjND0oXzB4YjYyNWE0LF8weDViOThjYik9Pnt2YXIgXzB4MTZmYTM4PV8weDQ1N2Y1NztsZXQgXzB4MjI5NzYzPV8weDJjOGM1M1sndHMnXVtfMHg1Yjk4Y2JdO2lmKGRlbGV0ZSBfMHgyYzhjNTNbJ3RzJ11bXzB4NWI5OGNiXSxfMHgyMjk3NjMpe2xldCBfMHgyZTIxNDc9XzB4MTIyZjYzKF8weDIyOTc2MyxfMHhkNGYyMzEoKSk7XzB4NWYxOGUzKF8weDlkNGY4NyhfMHgxNmZhMzgoMHhmMCksXzB4YjYyNWE0LF8weDU3MGJkZigpLF8weDU4NGZiYyxbXzB4MmUyMTQ3XSxfMHg1Yjk4Y2IpKTt9fSxfMHg1Y2IyNGQ9XzB4M2I4NDllPT5fMHg1MGE5MzY9Pnt0cnl7XzB4M2Y4MjcoXzB4NTBhOTM2KSxfMHgzYjg0OWUoXzB4NTBhOTM2KTt9ZmluYWxseXtfMHgxMDQ3YzlbJ2NvbnNvbGUnXVsndGltZSddPV8weDNiODQ5ZTt9fSxfMHgzYjQ4NDY9XzB4MjBkYzhlPT5fMHg1NGIxMjE9Pnt2YXIgXzB4MmIzNWI0PV8weDQ1N2Y1Nzt0cnl7bGV0IFtfMHg0MTYxMjAsXzB4M2NmZTFjXT1fMHg1NGIxMjFbXzB4MmIzNWI0KDB4MThiKV0oJzpsb2dQb2ludElkOicpO18weDE0YzdjNChfMHgzY2ZlMWMsXzB4NDE2MTIwKSxfMHgyMGRjOGUoXzB4NDE2MTIwKTt9ZmluYWxseXtfMHgxMDQ3YzlbJ2NvbnNvbGUnXVtfMHgyYjM1YjQoMHgxOTgpXT1fMHgyMGRjOGU7fX07XzB4MTA0N2M5W18weDQ1N2Y1NygweGY1KV09eydjb25zb2xlTG9nJzooXzB4NDJjNjdiLF8weDEyMWJlYSk9Pnt2YXIgXzB4NGE3MWVjPV8weDQ1N2Y1NztfMHgxMDQ3YzlbXzB4NGE3MWVjKDB4MTU0KV1bXzB4NGE3MWVjKDB4MTE5KV1bJ25hbWUnXSE9PV8weDRhNzFlYygweDE0MykmJl8weDVmMThlMyhfMHg5ZDRmODcoXzB4NGE3MWVjKDB4MTE5KSxfMHg0MmM2N2IsXzB4NTcwYmRmKCksXzB4NTg0ZmJjLF8weDEyMWJlYSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDI2MjdiMyxfMHg1NzIxM2EpPT57dmFyIF8weDQ5MTZiNj1fMHg0NTdmNTc7XzB4MTA0N2M5Wydjb25zb2xlJ11bXzB4NDkxNmI2KDB4MTE5KV1bXzB4NDkxNmI2KDB4MTBlKV0hPT1fMHg0OTE2YjYoMHgxNWMpJiZfMHg1ZjE4ZTMoXzB4OWQ0Zjg3KCd0cmFjZScsXzB4MjYyN2IzLF8weDU3MGJkZigpLF8weDU4NGZiYyxfMHg1NzIxM2EpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTRkNDczPV8weDQ1N2Y1NztfMHgxMDQ3YzlbXzB4MTRkNDczKDB4MTU0KV1bXzB4MTRkNDczKDB4ZjApXT1fMHg1Y2IyNGQoXzB4MTA0N2M5Wydjb25zb2xlJ11bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDRlM2UwYT1fMHg0NTdmNTc7XzB4MTA0N2M5W18weDRlM2UwYSgweDE1NCldW18weDRlM2UwYSgweDE5OCldPV8weDNiNDg0NihfMHgxMDQ3YzlbXzB4NGUzZTBhKDB4MTU0KV1bXzB4NGUzZTBhKDB4MTk4KV0pO30sJ2F1dG9Mb2cnOihfMHhiNWU1YWIsXzB4MmQ0NTBkKT0+e3ZhciBfMHg1MzZmZDA9XzB4NDU3ZjU3O18weDVmMThlMyhfMHg5ZDRmODcoXzB4NTM2ZmQwKDB4MTE5KSxfMHgyZDQ1MGQsXzB4NTcwYmRmKCksXzB4NTg0ZmJjLFtfMHhiNWU1YWJdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0MzU0OTgsXzB4MTQ4MDlmKT0+e18weDVmMThlMyhfMHg5ZDRmODcoJ2xvZycsXzB4NDM1NDk4LF8weDU3MGJkZigpLF8weDU4NGZiYyxfMHgxNDgwOWYpKTt9LCdhdXRvVHJhY2UnOihfMHg0NTQ1NWYsXzB4NGJhZjhlKT0+e18weDVmMThlMyhfMHg5ZDRmODcoJ3RyYWNlJyxfMHg0YmFmOGUsXzB4NTcwYmRmKCksXzB4NTg0ZmJjLFtfMHg0NTQ1NWZdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDJhOThhMSxfMHg1ODlhMjQpPT57dmFyIF8weDUyMzE4OD1fMHg0NTdmNTc7XzB4NWYxOGUzKF8weDlkNGY4NyhfMHg1MjMxODgoMHgxMjUpLF8weDJhOThhMSxfMHg1NzBiZGYoKSxfMHg1ODRmYmMsXzB4NTg5YTI0KSk7fSwnYXV0b1RpbWUnOihfMHgxYzYwYzEsXzB4MjU5MzViLF8weDFkMGViNSk9PntfMHgzZjgyNyhfMHgxZDBlYjUpO30sJ2F1dG9UaW1lRW5kJzooXzB4MWJiODg2LF8weDIzZDFjOCxfMHg0MzE0ZjEpPT57XzB4MTRjN2M0KF8weDIzZDFjOCxfMHg0MzE0ZjEpO30sJ2NvdmVyYWdlJzpfMHgzMGYzNmU9Pnt2YXIgXzB4MzA5Y2Y3PV8weDQ1N2Y1NztfMHg1ZjE4ZTMoeydtZXRob2QnOl8weDMwOWNmNygweDFjNSksJ3ZlcnNpb24nOl8weDMzZmZjYiwnYXJncyc6W3snaWQnOl8weDMwZjM2ZX1dfSk7fX07bGV0IF8weDVmMThlMz1iKF8weDEwNDdjOSxfMHg1ZDE4NWUsXzB4MmIwMTk1LF8weDFjMWZkNCxfMHgzOWJkYTksXzB4NWY4Nzc0KSxfMHg1ODRmYmM9XzB4MTA0N2M5W18weDQ1N2Y1NygweDE0NildO3JldHVybiBfMHgxMDQ3YzlbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHgyZTI0YmEoMHgxMWEpLF8weDJlMjRiYSgweDEyNCksXzB4MmUyNGJhKDB4MWE2KSxfMHgyZTI0YmEoMHhmZSksXzB4MmUyNGJhKDB4MWE1KSxfMHgyZTI0YmEoMHgxNzIpLF8weDJlMjRiYSgweDE2NSksXzB4MmUyNGJhKDB4MWQzKSxfMHgyZTI0YmEoMHgxY2YpKTtcIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==