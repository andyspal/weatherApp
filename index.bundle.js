(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.loader {
    width: 1.8rem;
    height: 1.8rem;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite; 
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } `, "",{"version":3,"sources":["webpack://./src/styles/loader.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,gCAAgC;IAChC,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,sCAAsC;IACtC;;IAEA;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA","sourcesContent":[".loader {\r\n    width: 1.8rem;\r\n    height: 1.8rem;\r\n    border: 5px solid #FFF;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    animation: rotation 1s linear infinite; \r\n    }\r\n\r\n    @keyframes rotation {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n    } "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    padding: 0;
    margin: 0;
  }
  
  /**
   * Render the \`main\` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h2{
    font-size: 1rem;
    font-weight: normal;
  }
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,UAAU;IACV,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  h2{\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n  }\r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Glegoo-Regular.ttf */ "./src/fonts/Glegoo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Glegoo-Bold.ttf */ "./src/fonts/Glegoo-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Glegoo';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),
         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

html{
    font-size: 20px;
}
body{
    font-family: 'Glegoo', sans-serif;
    color: #F6F4EB;
    background-color: #0085d7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
header{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
}
.form-container{
    display: flex;
    flex-direction: column;
}

form{
    display: flex;
    align-items: center;
    justify-items: center;
    gap: .5rem;
}
.loader-container{
    width: 2rem;
}
button{
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
button img{
    width: 1.5rem;
}

input {
    height: 1rem;
    width: 14rem;
    border: none;
    padding: .6rem;
    border-radius: 1rem;
}
main{
    display: grid;
    place-items: center;
}
.error-message{
    color: rgb(255, 0, 0);
    font-size: .9rem;
    text-align: center;
    padding: .5rem;
}

.weather-container.success{
    display: grid;
    grid-template-columns: repeat(2,minmax(10rem, 12rem));
    align-self: baseline;
}
.weather-container{
  
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #FFFFFF;
}
.city-container, .humidity-container{
    display: grid;
    place-items: center;
    background-color: #00C2FF;
}
.name, 
.description, 
.current-temperature, 
.min-temperature, 
.max-temperature, 
.humidity,
.slash {
    font-size: 1.4rem;
    font-weight: bold;
}

.name{
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .1rem;
}
.description-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.humidity-container,.description-container,.city-container,.daily-temperature-container{
    padding: .5rem;
}
.description{
   flex: 1;
   display: grid;
   place-items: center;

}
.weather{
    display: flex;
    justify-content:center;
    gap: 1rem;
    align-items: center;
    height: 50%;
}
.weather-icon{
    width: 3rem;
}


.description-container,.daily-temperature-container{
    background-color: #FFFFFF;
    color: #00C2FF;
}

.description-container{
    height: 10rem;
}

.daily-temperature-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.weather-container.night{
    background-color: #000;
}
.city-container.night, .humidity-container.night{
    color: #000;
}
.description-container.night,.daily-temperature-container.night{
    background-color: #000;
}

footer{
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 1rem;
    flex: 1;
}
a{
    color: #fff;
    text-decoration: none;
}
a:hover{
    cursor: pointer;
    font-weight: 600;
}
a:active{
    font-weight: 600;
    color: rgb(232, 232, 232);
}
@media screen and (max-width: 600px) {
    .weather-container.success{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    main{
        display: grid;
    }
  }`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB;mEACuD;IACvD,mBAAmB;IACnB,kBAAkB;EACpB;;AAEF;IACI,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,cAAc;IACd,yBAAyB;IACzB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qDAAqD;IACrD,oBAAoB;AACxB;AACA;;IAEI,4CAA4C;IAC5C,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;;;;;;IAOI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;AACA;GACG,OAAO;GACP,aAAa;GACb,mBAAmB;;AAEtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,WAAW;AACf;;;AAGA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,WAAW;AACf;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,OAAO;AACX;AACA;IACI,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI;QACI,WAAW;QACX,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,aAAa;IACjB;EACF","sourcesContent":["@font-face {\r\n    font-family: 'Glegoo';\r\n    src: url('../fonts/Glegoo-Regular.ttf') format('truetype'),\r\n         url('../fonts/Glegoo-Bold.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n  }\r\n\r\nhtml{\r\n    font-size: 20px;\r\n}\r\nbody{\r\n    font-family: 'Glegoo', sans-serif;\r\n    color: #F6F4EB;\r\n    background-color: #0085d7;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nheader{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n}\r\n.form-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n    gap: .5rem;\r\n}\r\n.loader-container{\r\n    width: 2rem;\r\n}\r\nbutton{\r\n    display: flex;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\nbutton img{\r\n    width: 1.5rem;\r\n}\r\n\r\ninput {\r\n    height: 1rem;\r\n    width: 14rem;\r\n    border: none;\r\n    padding: .6rem;\r\n    border-radius: 1rem;\r\n}\r\nmain{\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n.error-message{\r\n    color: rgb(255, 0, 0);\r\n    font-size: .9rem;\r\n    text-align: center;\r\n    padding: .5rem;\r\n}\r\n\r\n.weather-container.success{\r\n    display: grid;\r\n    grid-template-columns: repeat(2,minmax(10rem, 12rem));\r\n    align-self: baseline;\r\n}\r\n.weather-container{\r\n  \r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    background-color: #FFFFFF;\r\n}\r\n.city-container, .humidity-container{\r\n    display: grid;\r\n    place-items: center;\r\n    background-color: #00C2FF;\r\n}\r\n.name, \r\n.description, \r\n.current-temperature, \r\n.min-temperature, \r\n.max-temperature, \r\n.humidity,\r\n.slash {\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.name{\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    letter-spacing: .1rem;\r\n}\r\n.description-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.humidity-container,.description-container,.city-container,.daily-temperature-container{\r\n    padding: .5rem;\r\n}\r\n.description{\r\n   flex: 1;\r\n   display: grid;\r\n   place-items: center;\r\n\r\n}\r\n.weather{\r\n    display: flex;\r\n    justify-content:center;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    height: 50%;\r\n}\r\n.weather-icon{\r\n    width: 3rem;\r\n}\r\n\r\n\r\n.description-container,.daily-temperature-container{\r\n    background-color: #FFFFFF;\r\n    color: #00C2FF;\r\n}\r\n\r\n.description-container{\r\n    height: 10rem;\r\n}\r\n\r\n.daily-temperature-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: .5rem;\r\n}\r\n\r\n.weather-container.night{\r\n    background-color: #000;\r\n}\r\n.city-container.night, .humidity-container.night{\r\n    color: #000;\r\n}\r\n.description-container.night,.daily-temperature-container.night{\r\n    background-color: #000;\r\n}\r\n\r\nfooter{\r\n    display: flex;\r\n    align-items: end;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    flex: 1;\r\n}\r\na{\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\na:hover{\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n}\r\na:active{\r\n    font-weight: 600;\r\n    color: rgb(232, 232, 232);\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .weather-container.success{\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    main{\r\n        display: grid;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/styles/loader.css":
/*!*******************************!*\
  !*** ./src/styles/loader.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/images lazy recursive ^\\.\\/.*$":
/*!****************************************************!*\
  !*** ./src/images/ lazy ^\.\/.*$ namespace object ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": [
		"./src/images/clear-day.svg",
		"src_images_clear-day_svg"
	],
	"./clear-night.svg": [
		"./src/images/clear-night.svg",
		"src_images_clear-night_svg"
	],
	"./clouds-day.svg": [
		"./src/images/clouds-day.svg",
		"src_images_clouds-day_svg"
	],
	"./clouds-night.svg": [
		"./src/images/clouds-night.svg",
		"src_images_clouds-night_svg"
	],
	"./default-day.svg": [
		"./src/images/default-day.svg",
		"src_images_default-day_svg"
	],
	"./default-night.svg": [
		"./src/images/default-night.svg",
		"src_images_default-night_svg"
	],
	"./drizzle-day.svg": [
		"./src/images/drizzle-day.svg",
		"src_images_drizzle-day_svg"
	],
	"./drizzle-night.svg": [
		"./src/images/drizzle-night.svg",
		"src_images_drizzle-night_svg"
	],
	"./rain-day.svg": [
		"./src/images/rain-day.svg",
		"src_images_rain-day_svg"
	],
	"./rain-night.svg": [
		"./src/images/rain-night.svg",
		"src_images_rain-night_svg"
	],
	"./searchIcon.svg": [
		"./src/images/searchIcon.svg",
		"src_images_searchIcon_svg"
	],
	"./snow-day.svg": [
		"./src/images/snow-day.svg",
		"src_images_snow-day_svg"
	],
	"./snow-night.svg": [
		"./src/images/snow-night.svg",
		"src_images_snow-night_svg"
	],
	"./thunderstorm-day.svg": [
		"./src/images/thunderstorm-day.svg",
		"src_images_thunderstorm-day_svg"
	],
	"./thunderstorm-night.svg": [
		"./src/images/thunderstorm-night.svg",
		"src_images_thunderstorm-night_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/images lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/loader.css */ "./src/styles/loader.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _updateUi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateUi */ "./src/updateUi.js");







(0,_ui__WEBPACK_IMPORTED_MODULE_0__.ui)();
const cityForm = document.getElementById('cityForm');

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  document.querySelector('button img').style.display = 'none';
  document.querySelector('button').classList.add('loader');
  const weatherContainer = document.querySelector('.weather-container');
  weatherContainer.classList.remove('success');
  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const city = cityForm.elements[1].value;
  const { name, currentTemperature, description, tempMin, tempMax, humidity, timeCode, status} = await (0,_weather__WEBPACK_IMPORTED_MODULE_4__.getData)(city);
  if(status === 200){
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.weatherUi)();
    await (0,_updateUi__WEBPACK_IMPORTED_MODULE_5__.updateWeather)(name, currentTemperature, description, tempMin, tempMax, humidity, timeCode)
  }
  else{
    weatherContainer.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.errorUi)(status));
  }
  document.querySelector('button img').style.display = 'flex';
  document.querySelector('button').classList.remove('loader');
  input.style.display = 'flex';
  event.target.reset();
});

const input = document.querySelector('input');
input.style.display = 'none';
input.value = "Cordoba";

const submitButton = document.querySelector('button');
submitButton.click();



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorUi: () => (/* binding */ errorUi),
/* harmony export */   ui: () => (/* binding */ ui),
/* harmony export */   weatherUi: () => (/* binding */ weatherUi)
/* harmony export */ });
/* harmony import */ var _images_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/searchIcon.svg */ "./src/images/searchIcon.svg");


function ui() {

    // Header
    const header = document.createElement("header");

    const formContainer = document.createElement('div');
    formContainer.setAttribute("class", 'form-container')
    const form = document.createElement('form');
    form.setAttribute('id', 'cityForm');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a city');

    const loaderContainer = document.createElement('div');
    loaderContainer.setAttribute('class', 'loader-container');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    const icon = new Image();
    icon.src = _images_searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
    icon.setAttribute('class','search-icon');
    icon.setAttribute('alt','searchIcon')
    button.appendChild(icon);
    loaderContainer.appendChild(button)
    form.append(loaderContainer, input);
    formContainer.appendChild(form);
    header.appendChild(formContainer);

    const main = document.createElement('main');
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');
    main.appendChild(weatherContainer);

    const footer = document.createElement('footer');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://github.com/andyspal');
    anchor.textContent = '@andyspal'
    footer.appendChild(anchor);

    // Append elements to Body
    document.body.append(header,main,footer);

    
    
}

function weatherUi() {
        // Main
        const main = document.querySelector('main');
        //weather container
        const weatherContainer = document.querySelector('.weather-container');
        weatherContainer.classList.add('success');

        // city container: name
        const cityContainer = document.createElement('div');
        cityContainer.setAttribute('class', 'city-container');
        
        // descriptionContainer: icon, temperature, description
        const descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class','description-container');
        
        // dailyTemperatureContainer: tempMin tempMax
        const dailyTemperatureContainer = document.createElement('div');
        dailyTemperatureContainer.setAttribute('class', 'daily-temperature-container');
        
        // humidityContainer: humidity
        const humidityContainer = document.createElement('div');
        humidityContainer.setAttribute('class','humidity-container');
        
        //city
        const city = document.createElement('h2');
        city.setAttribute('class', 'name');
        // weather
        const weather = document.createElement('div');
        weather.setAttribute('class','weather');
        // weather icon
        const weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('class', 'weather-icon');
        weatherIcon.setAttribute('alt', 'weather-icon');
        // currentTemperature
        const currentTemperature = document.createElement('p');
        currentTemperature.setAttribute('class', 'current-temperature');
        // description
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        // humidity
        const humidity = document.createElement('p');
        humidity.setAttribute('class', 'humidity');

        // min temperature
        const minTemperature = document.createElement('p');
        minTemperature.setAttribute('class', 'min-temperature');
        
        //slash
        const slash = document.createElement('p')
        slash.textContent = '/'
        slash.setAttribute('class', 'slash');
        // max temperature
        const maxTemperature = document.createElement('p');
        maxTemperature.setAttribute('class', 'max-temperature');

        const mapContainer = document.createElement('div');
        mapContainer.setAttribute('class', 'map-container');
        
        //appends
        main.append(weatherContainer);
        weatherContainer.append(cityContainer, descriptionContainer, dailyTemperatureContainer, humidityContainer);
    
        cityContainer.append(city);
    
        descriptionContainer.append(weather, description);
        weather.append(weatherIcon, currentTemperature)
    
        dailyTemperatureContainer.append(minTemperature, slash, maxTemperature);
        
        humidityContainer.append(humidity);
}

function errorUi(status){
    const errorMessage = document.createElement('h2');
    errorMessage.setAttribute('class','error-message');
    if(status === "404" || status === "400"){
        errorMessage.textContent = 'City not found, enter a valid name.'
    }
    else{
        errorMessage.textContent = 'Something went wrong, contact support.'
    }
    
    return errorMessage;
}

/***/ }),

/***/ "./src/updateUi.js":
/*!*************************!*\
  !*** ./src/updateUi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWeather: () => (/* binding */ updateWeather)
/* harmony export */ });
function selectIcon(mainDescription, timeCode) {
    switch (mainDescription) {
        case "Clear":
            return timeCode === "d" ? "clear-day.svg" : "clear-night.svg";
        case "Clouds":
            return timeCode === "d" ? "clouds-day.svg" : "clouds-night.svg";
        case "Rain":
            return timeCode === "d" ? "rain-day.svg" : "rain-night.svg";
        case "Drizzle":
            return timeCode === "d" ? "drizzle-day.svg" : "drizzle-night.svg";
        case "Thunderstorm":
            return timeCode === "d" ? "thunderstorm-day.svg" : "thunderstorm-night.svg";
        case "Snow":
            return timeCode === "d" ? "snow-day.svg" : "snow-night.svg";
        default:
            return timeCode === "d" ? "default-day.svg" : "default-night.svg";
    }
}

async function loadIcon(iconName) {
    let iconModule = await __webpack_require__("./src/images lazy recursive ^\\.\\/.*$")(`./${iconName}`);
    return  iconModule.default;
}
async function updateWeather(name, currentTemperature, description, tempMin, tempMax, humidity, timeCode){
    document.querySelector(".name").textContent = name;
    document.querySelector('.current-temperature').textContent = `${currentTemperature}°`;
    document.querySelector(".description").textContent = description;
    document.querySelector(".min-temperature").textContent = `${tempMin}°`;
    document.querySelector(".max-temperature").textContent = `${tempMax}°`;
    document.querySelector(".humidity").textContent = `${humidity}%`;

    if(timeCode === 'n'){
        document.querySelector('.description-container').classList.add('night');
        document.querySelector('.daily-temperature-container').classList.add('night');
        document.querySelector('.city-container').classList.add('night');
        document.querySelector('.humidity-container').classList.add('night');
        document.body.style.backgroundColor = '#002f4c';
    }
    else{
        document.body.style.backgroundColor = '#0085d7';
    }
    const icon = selectIcon(description, timeCode);
    const loadedIcon = await loadIcon(icon);
    document.querySelector('.weather-icon').src = `${loadedIcon}`;

    
}




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
async function fetchData(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a22d1c330ef68dd88e2d6f66e709ee7`, {mode: "cors"});
      const data = await response.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }

 async function getData(city) {
  const data = await fetchData(city);
  const status = data.cod;
  if(status === 200){
    const name = `${data.name}, ${data.sys.country}`;
    const currentTemperature = Math.round(data.main.temp - 273.15);
    const tempMin = Math.round(data.main.temp_min - 273.15);
    const tempMax = Math.round(data.main.temp_max - 273.15);
    const description = data.weather[0].main;
    const timeCode = (data.weather[0].icon).slice(-1);
    const humidity = data.main.humidity;

    return {name, currentTemperature, description, tempMin, tempMax, humidity, timeCode, status};
  }
  else if (status === 404 || status == 400){
    return {status}
  }
  else{
    return {status};
  }
}



/***/ }),

/***/ "./src/fonts/Glegoo-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Glegoo-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4bf381af026d5837492.ttf";

/***/ }),

/***/ "./src/fonts/Glegoo-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Glegoo-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcf93c2b1df4c22d9f46.ttf";

/***/ }),

/***/ "./src/images/searchIcon.svg":
/*!***********************************!*\
  !*** ./src/images/searchIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a9cfbd36ba30d8a43c88.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxNQUFNLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSwyV0FBMlcsMkJBQTJCLCtDQUErQyxjQUFjLGtNQUFrTSxtQkFBbUIsa0JBQWtCLE9BQU8sZ0dBQWdHLHVCQUF1QixPQUFPLGtMQUFrTCx1QkFBdUIseUJBQXlCLE9BQU8sU0FBUyx3QkFBd0IsNEJBQTRCLE9BQU8sc1BBQXNQLGlDQUFpQywwQkFBMEIsa0NBQWtDLGNBQWMsbUxBQW1MLDJDQUEyQywrQkFBK0IsY0FBYyw2TkFBNk4sc0NBQXNDLE9BQU8sc0xBQXNMLDZCQUE2QiwyQ0FBMkMsa0RBQWtELGNBQWMscUhBQXFILDRCQUE0QixPQUFPLHlNQUF5TSwyQ0FBMkMsK0JBQStCLGNBQWMsOEZBQThGLHVCQUF1QixPQUFPLG9KQUFvSix1QkFBdUIsdUJBQXVCLDJCQUEyQixpQ0FBaUMsT0FBTyxpQkFBaUIsd0JBQXdCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLHlOQUF5TiwyQkFBMkIsT0FBTyxvVEFBb1QsOEJBQThCLGdDQUFnQyxrQ0FBa0MsMEJBQTBCLGNBQWMsZ0lBQWdJLGlDQUFpQyxPQUFPLHFNQUFxTSxvQ0FBb0MsT0FBTyw2TEFBNkwsbUNBQW1DLE9BQU8sbVBBQW1QLDJCQUEyQixtQkFBbUIsT0FBTyw0T0FBNE8sdUNBQXVDLE9BQU8sc0ZBQXNGLHVDQUF1QyxPQUFPLDRTQUE0UyxnQ0FBZ0MsK0JBQStCLCtCQUErQixnQ0FBZ0MsMkJBQTJCLG9DQUFvQyxjQUFjLHdIQUF3SCxpQ0FBaUMsT0FBTyx1R0FBdUcsdUJBQXVCLE9BQU8sd0tBQXdLLGdDQUFnQywyQkFBMkIsY0FBYyxvTkFBb04scUJBQXFCLE9BQU8sbUtBQW1LLHVDQUF1QyxxQ0FBcUMsY0FBYyxrSkFBa0osaUNBQWlDLE9BQU8seU1BQXlNLG9DQUFvQyw4QkFBOEIsY0FBYywwTkFBME4sdUJBQXVCLE9BQU8sNkZBQTZGLDJCQUEyQixPQUFPLGtNQUFrTSxzQkFBc0IsT0FBTyx3RkFBd0Ysc0JBQXNCLE9BQU8sbUJBQW1CO0FBQzl6VDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdld2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxrSUFBOEM7QUFDMUYsNENBQTRDLDRIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRCxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLHVGQUF1RixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFNEM7QUFDYjtBQUNIO0FBQ0E7QUFDUTtBQUNPO0FBQzNDO0FBQ0EsdUNBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUZBQXFGLFFBQVEsaURBQU87QUFDOUc7QUFDQSxJQUFJLDhDQUFTO0FBQ2IsVUFBVSx3REFBYTtBQUN2QjtBQUNBO0FBQ0EsaUNBQWlDLDRDQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZ0Q7QUFDaEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBTyxHQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekQ7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvRUFBb0UsbUJBQW1CO0FBQ3ZGO0FBQ0EsZ0VBQWdFLFFBQVE7QUFDeEUsZ0VBQWdFLFFBQVE7QUFDeEUseURBQXlELFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsV0FBVztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQSx3RkFBd0YsS0FBSywyQ0FBMkMsYUFBYTtBQUNySjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVLElBQUksaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy9sb2FkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy9sb2FkZXIuY3NzP2E1YmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvIGxhenkgXlxcLlxcLy4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3VwZGF0ZVVpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvYWRlciB7XHJcbiAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICAgIH0gYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDOztJQUVBO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkZXIge1xcclxcbiAgICB3aWR0aDogMS44cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB9IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuXHJcbiBodG1sIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogU2VjdGlvbnNcclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICAgKi9cclxuICBcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICAgKi9cclxuICBcclxuICBtYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcclxuICAgKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cclxuICAgKi9cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cclxuICAgKi9cclxuICBcclxuICBociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICovXHJcbiAgXHJcbiAgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICAgKi9cclxuICBcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gICAqL1xyXG4gIFxyXG4gIGIsXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICAgKi9cclxuICBcclxuICBjb2RlLFxyXG4gIGtiZCxcclxuICBzYW1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICovXHJcbiAgXHJcbiAgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAgICogYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIHN1YixcclxuICBzdXAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgXHJcbiAgc3ViIHtcclxuICAgIGJvdHRvbTogLTAuMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuICBcclxuICAvKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gICAqL1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvcm1zXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0LFxyXG4gIG9wdGdyb3VwLFxyXG4gIHNlbGVjdCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHsgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICAgKi9cclxuICBcclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHsgLyogMSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdLFxyXG4gIFt0eXBlPVwicmVzZXRcIl0sXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxyXG4gICAqL1xyXG4gIFxyXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gICAqL1xyXG4gIFxyXG4gIGZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxyXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICAgKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICovXHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXHJcbiAgICovXHJcbiAgXHJcbiAgcHJvZ3Jlc3Mge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICAgKi9cclxuICBcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxyXG4gICAqL1xyXG4gIFxyXG4gIFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICAgKi9cclxuICBcclxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxyXG4gICAqL1xyXG4gIFxyXG4gIFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXHJcbiAgICovXHJcbiAgXHJcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xyXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbiAgLypcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gICAqL1xyXG4gIFxyXG4gIGRldGFpbHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuICBcclxuICAvKiBNaXNjXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAgICovXHJcbiAgXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXHJcbiAgICovXHJcbiAgXHJcbiAgW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7Q0FFRDtJQUNHLGlCQUFpQixFQUFFLE1BQU07SUFDekIsOEJBQThCLEVBQUUsTUFBTTtFQUN4Qzs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtFQUNBO2lGQUMrRTs7RUFFL0U7OztJQUdFOztFQUVGO0lBQ0UsdUJBQXVCLEVBQUUsTUFBTTtJQUMvQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRSxNQUFNO0VBQzNCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07RUFDeEI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSxtQkFBbUIsRUFBRSxNQUFNO0lBQzNCLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtFQUMzQzs7RUFFQTs7SUFFRTs7RUFFRjs7SUFFRSxtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFOztFQUVGOzs7SUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0VBQ3hCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0U7O0VBRUY7O0lBRUUsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO2lGQUMrRTs7RUFFL0U7OztJQUdFOztFQUVGOzs7OztJQUtFLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtFQUNuQjs7RUFFQTs7O0lBR0U7O0VBRUY7VUFDUSxNQUFNO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRTs7RUFFRjtXQUNTLE1BQU07SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBOztJQUVFOztFQUVGOzs7O0lBSUUsOEJBQThCO0VBQ2hDOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBOzs7OztJQUtFOztFQUVGO0lBQ0Usc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixjQUFjLEVBQUUsTUFBTTtJQUN0QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxNQUFNO0VBQzdCOztFQUVBOztJQUVFOztFQUVGO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0U7O0VBRUY7O0lBRUUsc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtFQUNwQjs7RUFFQTs7SUFFRTs7RUFFRjs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsNkJBQTZCLEVBQUUsTUFBTTtJQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0VBQzlCOztFQUVBOztJQUVFOztFQUVGO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsYUFBYSxFQUFFLE1BQU07RUFDdkI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG4gaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbiAgfVxcclxcbiAgaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBwcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBhYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBiLFxcclxcbiAgc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGNvZGUsXFxyXFxuICBrYmQsXFxyXFxuICBzYW1wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBzdWIsXFxyXFxuICBzdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBzdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbiAgXFxyXFxuICAvKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGb3Jtc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBidXR0b24sXFxyXFxuICBpbnB1dCxcXHJcXG4gIG9wdGdyb3VwLFxcclxcbiAgc2VsZWN0LFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGJ1dHRvbixcXHJcXG4gIGlucHV0IHsgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBidXR0b24sXFxyXFxuICBzZWxlY3QgeyAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgYnV0dG9uLFxcclxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcclxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxyXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIGxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgcHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbiAgXFxyXFxuICAvKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcbiAgXFxyXFxuICBkZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gIFxcclxcbiAgLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG4gIFxcclxcbiAgdGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuICBcXHJcXG4gIFtoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dsZWdvby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dsZWdvby1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHbGVnb28nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG5odG1se1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0dsZWdvbycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI0Y2RjRFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg1ZDc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IC41cmVtO1xyXG59XHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbiBpbWd7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxubWFpbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1jb250YWluZXIuc3VjY2Vzc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLG1pbm1heCgxMHJlbSwgMTJyZW0pKTtcclxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xyXG59XHJcbi53ZWF0aGVyLWNvbnRhaW5lcntcclxuICBcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uY2l0eS1jb250YWluZXIsIC5odW1pZGl0eS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEMyRkY7XHJcbn1cclxuLm5hbWUsIFxyXG4uZGVzY3JpcHRpb24sIFxyXG4uY3VycmVudC10ZW1wZXJhdHVyZSwgXHJcbi5taW4tdGVtcGVyYXR1cmUsIFxyXG4ubWF4LXRlbXBlcmF0dXJlLCBcclxuLmh1bWlkaXR5LFxyXG4uc2xhc2gge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG59XHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmh1bWlkaXR5LWNvbnRhaW5lciwuZGVzY3JpcHRpb24tY29udGFpbmVyLC5jaXR5LWNvbnRhaW5lciwuZGFpbHktdGVtcGVyYXR1cmUtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gICBmbGV4OiAxO1xyXG4gICBkaXNwbGF5OiBncmlkO1xyXG4gICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4ud2VhdGhlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbi53ZWF0aGVyLWljb257XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIsLmRhaWx5LXRlbXBlcmF0dXJlLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjb2xvcjogIzAwQzJGRjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5kYWlseS10ZW1wZXJhdHVyZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAuNXJlbTtcclxufVxyXG5cclxuLndlYXRoZXItY29udGFpbmVyLm5pZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4uY2l0eS1jb250YWluZXIubmlnaHQsIC5odW1pZGl0eS1jb250YWluZXIubmlnaHR7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZGVzY3JpcHRpb24tY29udGFpbmVyLm5pZ2h0LC5kYWlseS10ZW1wZXJhdHVyZS1jb250YWluZXIubmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmE6YWN0aXZle1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC53ZWF0aGVyLWNvbnRhaW5lci5zdWNjZXNze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIG1haW57XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQjttRUFDdUQ7SUFDdkQsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELG9CQUFvQjtBQUN4QjtBQUNBOztJQUVJLDRDQUE0QztJQUM1Qyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7Ozs7Ozs7SUFPSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtHQUNHLE9BQU87R0FDUCxhQUFhO0dBQ2IsbUJBQW1COztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsT0FBTztBQUNYO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2xlZ29vJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0dsZWdvby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXHJcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL0dsZWdvby1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcblxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHbGVnb28nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogI0Y2RjRFQjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVkNztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG4ubG9hZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5idXR0b24gaW1ne1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDE0cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IC42cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5tYWlue1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZXJyb3ItbWVzc2FnZXtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jb250YWluZXIuc3VjY2Vzc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMixtaW5tYXgoMTByZW0sIDEycmVtKSk7XFxyXFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4ud2VhdGhlci1jb250YWluZXJ7XFxyXFxuICBcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5jaXR5LWNvbnRhaW5lciwgLmh1bWlkaXR5LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzJGRjtcXHJcXG59XFxyXFxuLm5hbWUsIFxcclxcbi5kZXNjcmlwdGlvbiwgXFxyXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUsIFxcclxcbi5taW4tdGVtcGVyYXR1cmUsIFxcclxcbi5tYXgtdGVtcGVyYXR1cmUsIFxcclxcbi5odW1pZGl0eSxcXHJcXG4uc2xhc2gge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1le1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1jb250YWluZXIsLmRlc2NyaXB0aW9uLWNvbnRhaW5lciwuY2l0eS1jb250YWluZXIsLmRhaWx5LXRlbXBlcmF0dXJlLWNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbntcXHJcXG4gICBmbGV4OiAxO1xcclxcbiAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLndlYXRoZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxufVxcclxcbi53ZWF0aGVyLWljb257XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyLC5kYWlseS10ZW1wZXJhdHVyZS1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGNvbG9yOiAjMDBDMkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcGVyYXR1cmUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY29udGFpbmVyLm5pZ2h0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4uY2l0eS1jb250YWluZXIubmlnaHQsIC5odW1pZGl0eS1jb250YWluZXIubmlnaHR7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyLm5pZ2h0LC5kYWlseS10ZW1wZXJhdHVyZS1jb250YWluZXIubmlnaHR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuYTphY3RpdmV7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC53ZWF0aGVyLWNvbnRhaW5lci5zdWNjZXNze1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICBtYWlue1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9jbGVhci1kYXkuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX2NsZWFyLWRheV9zdmdcIlxuXHRdLFxuXHRcIi4vY2xlYXItbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9jbGVhci1uaWdodC5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfY2xlYXItbmlnaHRfc3ZnXCJcblx0XSxcblx0XCIuL2Nsb3Vkcy1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9jbG91ZHMtZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19jbG91ZHMtZGF5X3N2Z1wiXG5cdF0sXG5cdFwiLi9jbG91ZHMtbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9jbG91ZHMtbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX2Nsb3Vkcy1uaWdodF9zdmdcIlxuXHRdLFxuXHRcIi4vZGVmYXVsdC1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9kZWZhdWx0LWRheS5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfZGVmYXVsdC1kYXlfc3ZnXCJcblx0XSxcblx0XCIuL2RlZmF1bHQtbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltYWdlcy9kZWZhdWx0LW5pZ2h0LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19kZWZhdWx0LW5pZ2h0X3N2Z1wiXG5cdF0sXG5cdFwiLi9kcml6emxlLWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL2RyaXp6bGUtZGF5LnN2Z1wiLFxuXHRcdFwic3JjX2ltYWdlc19kcml6emxlLWRheV9zdmdcIlxuXHRdLFxuXHRcIi4vZHJpenpsZS1uaWdodC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL2RyaXp6bGUtbmlnaHQuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX2RyaXp6bGUtbmlnaHRfc3ZnXCJcblx0XSxcblx0XCIuL3JhaW4tZGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvcmFpbi1kYXkuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3JhaW4tZGF5X3N2Z1wiXG5cdF0sXG5cdFwiLi9yYWluLW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvcmFpbi1uaWdodC5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfcmFpbi1uaWdodF9zdmdcIlxuXHRdLFxuXHRcIi4vc2VhcmNoSWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3NlYXJjaEljb24uc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3NlYXJjaEljb25fc3ZnXCJcblx0XSxcblx0XCIuL3Nub3ctZGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvc25vdy1kYXkuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3Nub3ctZGF5X3N2Z1wiXG5cdF0sXG5cdFwiLi9zbm93LW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWFnZXMvc25vdy1uaWdodC5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfc25vdy1uaWdodF9zdmdcIlxuXHRdLFxuXHRcIi4vdGh1bmRlcnN0b3JtLWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3RodW5kZXJzdG9ybS1kYXkuc3ZnXCIsXG5cdFx0XCJzcmNfaW1hZ2VzX3RodW5kZXJzdG9ybS1kYXlfc3ZnXCJcblx0XSxcblx0XCIuL3RodW5kZXJzdG9ybS1uaWdodC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1hZ2VzL3RodW5kZXJzdG9ybS1uaWdodC5zdmdcIixcblx0XHRcInNyY19pbWFnZXNfdGh1bmRlcnN0b3JtLW5pZ2h0X3N2Z1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMSB8IDE2KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQge3VpLCB3ZWF0aGVyVWksIGVycm9yVWl9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9sb2FkZXIuY3NzJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgdXBkYXRlV2VhdGhlciB9IGZyb20gJy4vdXBkYXRlVWknO1xyXG5cclxudWkoKTtcclxuY29uc3QgY2l0eUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUZvcm0nKTtcclxuXHJcbmNpdHlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uIGltZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbnRhaW5lcicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xyXG4gIHdoaWxlICh3ZWF0aGVyQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgIHdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQod2VhdGhlckNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNpdHkgPSBjaXR5Rm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcclxuICBjb25zdCB7IG5hbWUsIGN1cnJlbnRUZW1wZXJhdHVyZSwgZGVzY3JpcHRpb24sIHRlbXBNaW4sIHRlbXBNYXgsIGh1bWlkaXR5LCB0aW1lQ29kZSwgc3RhdHVzfSA9IGF3YWl0IGdldERhdGEoY2l0eSk7XHJcbiAgaWYoc3RhdHVzID09PSAyMDApe1xyXG4gICAgd2VhdGhlclVpKCk7XHJcbiAgICBhd2FpdCB1cGRhdGVXZWF0aGVyKG5hbWUsIGN1cnJlbnRUZW1wZXJhdHVyZSwgZGVzY3JpcHRpb24sIHRlbXBNaW4sIHRlbXBNYXgsIGh1bWlkaXR5LCB0aW1lQ29kZSlcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JVaShzdGF0dXMpKTtcclxuICB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uIGltZycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XHJcbiAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBldmVudC50YXJnZXQucmVzZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbmlucHV0LnZhbHVlID0gXCJDb3Jkb2JhXCI7XHJcblxyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuc3VibWl0QnV0dG9uLmNsaWNrKCk7XHJcblxyXG4iLCJpbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2hJY29uLnN2ZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1aSgpIHtcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnZm9ybS1jb250YWluZXInKVxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5Rm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgY2l0eScpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGljb24uc3JjID0gc2VhcmNoSWNvbjtcclxuICAgIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NlYXJjaC1pY29uJyk7XHJcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnYWx0Jywnc2VhcmNoSWNvbicpXHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICBsb2FkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgZm9ybS5hcHBlbmQobG9hZGVyQ29udGFpbmVyLCBpbnB1dCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1jb250YWluZXInKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmR5c3BhbCcpO1xyXG4gICAgYW5jaG9yLnRleHRDb250ZW50ID0gJ0BhbmR5c3BhbCdcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBCb2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsbWFpbixmb290ZXIpO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3ZWF0aGVyVWkoKSB7XHJcbiAgICAgICAgLy8gTWFpblxyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgLy93ZWF0aGVyIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250YWluZXInKTtcclxuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgLy8gY2l0eSBjb250YWluZXI6IG5hbWVcclxuICAgICAgICBjb25zdCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2l0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NpdHktY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb25Db250YWluZXI6IGljb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXI6IHRlbXBNaW4gdGVtcE1heFxyXG4gICAgICAgIGNvbnN0IGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYWlseVRlbXBlcmF0dXJlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGFpbHktdGVtcGVyYXR1cmUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaHVtaWRpdHlDb250YWluZXI6IGh1bWlkaXR5XHJcbiAgICAgICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBodW1pZGl0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaHVtaWRpdHktY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jaXR5XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY2l0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWUnKTtcclxuICAgICAgICAvLyB3ZWF0aGVyXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdlYXRoZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3dlYXRoZXInKTtcclxuICAgICAgICAvLyB3ZWF0aGVyIGljb25cclxuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHdlYXRoZXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uJyk7XHJcbiAgICAgICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnd2VhdGhlci1pY29uJyk7XHJcbiAgICAgICAgLy8gY3VycmVudFRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2N1cnJlbnQtdGVtcGVyYXR1cmUnKTtcclxuICAgICAgICAvLyBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAvLyBodW1pZGl0eVxyXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaHVtaWRpdHknKTtcclxuXHJcbiAgICAgICAgLy8gbWluIHRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbWluVGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaW4tdGVtcGVyYXR1cmUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3NsYXNoXHJcbiAgICAgICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBzbGFzaC50ZXh0Q29udGVudCA9ICcvJ1xyXG4gICAgICAgIHNsYXNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xhc2gnKTtcclxuICAgICAgICAvLyBtYXggdGVtcGVyYXR1cmVcclxuICAgICAgICBjb25zdCBtYXhUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYXhUZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21heC10ZW1wZXJhdHVyZScpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hcHBlbmRzXHJcbiAgICAgICAgbWFpbi5hcHBlbmQod2VhdGhlckNvbnRhaW5lcik7XHJcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmQoY2l0eUNvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIGRhaWx5VGVtcGVyYXR1cmVDb250YWluZXIsIGh1bWlkaXR5Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGNpdHlDb250YWluZXIuYXBwZW5kKGNpdHkpO1xyXG4gICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKHdlYXRoZXIsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB3ZWF0aGVyLmFwcGVuZCh3ZWF0aGVySWNvbiwgY3VycmVudFRlbXBlcmF0dXJlKVxyXG4gICAgXHJcbiAgICAgICAgZGFpbHlUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmQobWluVGVtcGVyYXR1cmUsIHNsYXNoLCBtYXhUZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGh1bWlkaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVWkoc3RhdHVzKXtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Vycm9yLW1lc3NhZ2UnKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gXCI0MDRcIiB8fCBzdGF0dXMgPT09IFwiNDAwXCIpe1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDaXR5IG5vdCBmb3VuZCwgZW50ZXIgYSB2YWxpZCBuYW1lLidcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBjb250YWN0IHN1cHBvcnQuJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG59IiwiZnVuY3Rpb24gc2VsZWN0SWNvbihtYWluRGVzY3JpcHRpb24sIHRpbWVDb2RlKSB7XHJcbiAgICBzd2l0Y2ggKG1haW5EZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJDbGVhclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdGltZUNvZGUgPT09IFwiZFwiID8gXCJjbGVhci1kYXkuc3ZnXCIgOiBcImNsZWFyLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVDb2RlID09PSBcImRcIiA/IFwiY2xvdWRzLWRheS5zdmdcIiA6IFwiY2xvdWRzLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcInJhaW4tZGF5LnN2Z1wiIDogXCJyYWluLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcImRyaXp6bGUtZGF5LnN2Z1wiIDogXCJkcml6emxlLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJUaHVuZGVyc3Rvcm1cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVDb2RlID09PSBcImRcIiA/IFwidGh1bmRlcnN0b3JtLWRheS5zdmdcIiA6IFwidGh1bmRlcnN0b3JtLW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGNhc2UgXCJTbm93XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcInNub3ctZGF5LnN2Z1wiIDogXCJzbm93LW5pZ2h0LnN2Z1wiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lQ29kZSA9PT0gXCJkXCIgPyBcImRlZmF1bHQtZGF5LnN2Z1wiIDogXCJkZWZhdWx0LW5pZ2h0LnN2Z1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkSWNvbihpY29uTmFtZSkge1xyXG4gICAgbGV0IGljb25Nb2R1bGUgPSBhd2FpdCBpbXBvcnQoYC4vaW1hZ2VzLyR7aWNvbk5hbWV9YCk7XHJcbiAgICByZXR1cm4gIGljb25Nb2R1bGUuZGVmYXVsdDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2VhdGhlcihuYW1lLCBjdXJyZW50VGVtcGVyYXR1cmUsIGRlc2NyaXB0aW9uLCB0ZW1wTWluLCB0ZW1wTWF4LCBodW1pZGl0eSwgdGltZUNvZGUpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXBlcmF0dXJlJykudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcGVyYXR1cmV9wrBgO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW4tdGVtcGVyYXR1cmVcIikudGV4dENvbnRlbnQgPSBgJHt0ZW1wTWlufcKwYDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4LXRlbXBlcmF0dXJlXCIpLnRleHRDb250ZW50ID0gYCR7dGVtcE1heH3CsGA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XHJcblxyXG4gICAgaWYodGltZUNvZGUgPT09ICduJyl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXRlbXBlcmF0dXJlLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ25pZ2h0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnbmlnaHQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnbmlnaHQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAyZjRjJztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwODVkNyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gc2VsZWN0SWNvbihkZXNjcmlwdGlvbiwgdGltZUNvZGUpO1xyXG4gICAgY29uc3QgbG9hZGVkSWNvbiA9IGF3YWl0IGxvYWRJY29uKGljb24pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpLnNyYyA9IGAke2xvYWRlZEljb259YDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjaXR5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9OWEyMmQxYzMzMGVmNjhkZDg4ZTJkNmY2NmU3MDllZTdgLCB7bW9kZTogXCJjb3JzXCJ9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoY2l0eSk7XHJcbiAgY29uc3Qgc3RhdHVzID0gZGF0YS5jb2Q7XHJcbiAgaWYoc3RhdHVzID09PSAyMDApe1xyXG4gICAgY29uc3QgbmFtZSA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gO1xyXG4gICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCAtIDI3My4xNSk7XHJcbiAgICBjb25zdCB0ZW1wTWluID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTUpO1xyXG4gICAgY29uc3QgdGVtcE1heCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICBjb25zdCB0aW1lQ29kZSA9IChkYXRhLndlYXRoZXJbMF0uaWNvbikuc2xpY2UoLTEpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XHJcblxyXG4gICAgcmV0dXJuIHtuYW1lLCBjdXJyZW50VGVtcGVyYXR1cmUsIGRlc2NyaXB0aW9uLCB0ZW1wTWluLCB0ZW1wTWF4LCBodW1pZGl0eSwgdGltZUNvZGUsIHN0YXR1c307XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA0IHx8IHN0YXR1cyA9PSA0MDApe1xyXG4gICAgcmV0dXJuIHtzdGF0dXN9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICByZXR1cm4ge3N0YXR1c307XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=