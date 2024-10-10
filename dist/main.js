/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    min-height: 100vh;\n    max-height: 100vh;\n    padding: 100px;\n}\nbutton {\n    cursor: pointer;\n}\n#gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n}\n\n#tile {\n    border: 1px solid black;\n    max-height: 50px;\n    max-width: 50px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n\nconst Gameboard = function () {\n    // array of ships\n    const shipArr = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];\n\n    const board = Array(10)\n        .fill(null)\n        .map(() =>\n            Array(10)\n                .fill(null)\n                .map(() => [\".\"])\n        );\n    const coordsArr = Array(10)\n        .fill(null)\n        .map(() =>\n            Array(10)\n                .fill(null)\n                .map(() => \"\")\n        );\n\n    function placeShip(ship, coords) {\n        const validObj = checkValid(ship, coords);\n        // console.log(validObj);\n        if (validObj.validity) {\n            for (let coords of validObj.coveredCoordsArr) {\n                coordsArr[coords[1]][coords[0]] = ship;\n            }\n            updateBoard();\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    function checkValid(ship, coords) {\n        const xcoords = coords[0];\n        const ycoords = coords[1];\n        const length = ship.getLength();\n        const coveredCoordsArr = [];\n        const bounds = [\n            ycoords + length - 1,\n            xcoords - (length - 1),\n            ycoords - (length - 1),\n            xcoords + length - 1,\n        ];\n        const Valid = {\n            validity: true,\n            coveredCoordsArr: coveredCoordsArr,\n        };\n\n        switch (ship.getPosition()) {\n            case 0: //south\n                for (let i = ycoords; i <= bounds[0]; i++) {\n                    if (checkBounds(i)) {\n                        Valid.coveredCoordsArr.push([xcoords, i]);\n                        if (coordsArr[i][xcoords] !== \"\") {\n                            Valid.validity = false;\n                            return Valid;\n                        }\n                    } else {\n                        Valid.validity = false;\n                        return Valid;\n                    }\n                }\n                return Valid;\n            case 1: //west\n                for (let i = xcoords; i >= bounds[1]; i--) {\n                    if (checkBounds(i)) {\n                        Valid.coveredCoordsArr.push([i, ycoords]);\n                        if (coordsArr[ycoords][i] !== \"\") {\n                            Valid.validity = false;\n                            return Valid;\n                        }\n                    } else {\n                        Valid.validity = false;\n                        return Valid;\n                    }\n                }\n                return Valid;\n            case 2: //north\n                for (let i = ycoords; i >= bounds[2]; i--) {\n                    if (checkBounds(i)) {\n                        Valid.coveredCoordsArr.push([xcoords, i]);\n                        if (coordsArr[i][xcoords] !== \"\") {\n                            Valid.validity = false;\n                            return Valid;\n                        }\n                    } else {\n                        Valid.validity = false;\n                        return Valid;\n                    }\n                }\n                return Valid;\n\n            case 3: //east\n                for (let i = xcoords; i <= bounds[3]; i++) {\n                    // console.log(i);\n                    if (checkBounds(i)) {\n                        Valid.coveredCoordsArr.push([i, ycoords]);\n                        if (coordsArr[ycoords][i] !== \"\") {\n                            Valid.validity = false;\n                            return Valid;\n                        }\n                    } else {\n                        Valid.validity = false;\n                        return Valid;\n                    }\n                }\n                return Valid;\n        }\n    }\n\n    function checkBounds(bounds) {\n        if (bounds >= 0 && bounds <= 9) {\n            return true;\n        }\n    }\n\n    function updateBoard() {\n        for (let i = 0; i < coordsArr.length; i++) {\n            for (let j = 0; j < coordsArr.length; j++) {\n                if (coordsArr[i][j] !== \"\") {\n                    board[i][j] = 1;\n                }\n            }\n        }\n    }\n\n    function printBoard() {\n        let myBoard = \"\";\n        for (let i = 0; i < board.length; i++) {\n            myBoard += board[i].join(\"\") + \"\\n\";\n        }\n\n        console.log(myBoard);\n    }\n\n    function recieveAttack(coords) {\n        const y = coords[0];\n        const x = coords[1];\n\n        if (board[x][y] === 1) {\n            board[x][y] = \"x\";\n            coordsArr[x][y].hit();\n        } else {\n            board[x][y] = \"o\";\n        }\n    }\n\n    function checkAllShipsSunk() {\n        for (let ship of shipArr) {\n            console.log(ship.isSunk());\n            if (ship.isSunk() === false) return false;\n        }\n        return true;\n    }\n\n    return {\n        placeShip,\n        printBoard,\n        recieveAttack,\n        shipArr,\n        checkAllShipsSunk,\n        checkValid,\n        board,\n    };\n};\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://my-webpack-template/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/factories/gameboard.js\");\n\nconst Player = function (real) {\n    const playerGameboard = Gameboard();\n\n    if (!real) {\n        for (let ship of playerGameboard.shipArr) {\n            const randposition = Math.floor(Math.random() * 4);\n            let randxcoord = Math.floor(Math.random() * 10);\n            let randycoord = Math.floor(Math.random() * 10);\n            let coordsArr = [randxcoord, randycoord];\n            for (let i = 0; i < randposition; i++) {\n                ship.rotateShip();\n            }\n            // console.log(randposition);\n            // console.log(coordsArr);\n            // console.log(myGameboard.placeShip(ship, coordsArr));\n            while (playerGameboard.placeShip(ship, coordsArr) === false) {\n                randxcoord = Math.floor(Math.random() * 10);\n                randycoord = Math.floor(Math.random() * 10);\n                coordsArr = [randxcoord, randycoord];\n            }\n        }\n    }\n\n    return { playerGameboard };\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://my-webpack-template/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Ship = function (length) {\n    let hitCount = 0;\n    let position = 0;\n\n    function hit() {\n        hitCount++;\n    }\n\n    function isSunk() {\n        if (hitCount >= length) return true;\n        return false;\n    }\n\n    function rotateShip() {\n        if (position === 3) {\n            position = 0;\n        } else {\n            position++;\n        }\n    }\n\n    function getHitCount() {\n        return hitCount;\n    }\n\n    function getPosition() {\n        return position;\n    }\n\n    function getLength() {\n        return length;\n    }\n\n    return {\n        hitCount,\n        hit,\n        isSunk,\n        rotateShip,\n        getHitCount,\n        getPosition,\n        getLength,\n    };\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://my-webpack-template/./src/factories/ship.js?");

/***/ }),

/***/ "./src/gameBoardDOM.js":
/*!*****************************!*\
  !*** ./src/gameBoardDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoardDOM: () => (/* binding */ gameBoardDOM)\n/* harmony export */ });\nconst Player = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n\nconst gameBoardDOM = (function () {\n    const myPlayer = Player(true);\n\n    const divGameboard = document.querySelector(\"#gameboard\");\n    const checkBoxes = document.querySelectorAll(\n        \".shipPanel input[type='checkbox']\"\n    );\n    const rotateButton = document.querySelector(\".rotateBtn\");\n\n    function initCheckBoxes() {\n        for (let checkbox of checkBoxes) {\n            // checkBox, only check one\n            checkbox.addEventListener(\"change\", () => {\n                checkBoxes.forEach((item) => {\n                    if (checkbox !== item) item.checked = false;\n                });\n            });\n        }\n    }\n\n    const divArr = Array(10) //divArr to store all grid and have reference\n        .fill(null)\n        .map(() => Array(10).fill(null));\n\n    function createBoard() {\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                const grid = document.createElement(\"div\");\n                divGameboard.append(grid);\n                divArr[i][j] = grid;\n                grid.setAttribute(\"id\", \"tile\");\n                grid.setAttribute(\"value\", `${i},${j}`);\n            }\n        }\n    }\n\n    function fillBotTile(coords) {\n        // bruh why are we filling bot tile\n        divArr[coords[0]][coords[1]].setAttribute(\n            \"style\",\n            \"background-color: green\"\n        );\n    }\n\n    function addGridEventListeners() {\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                divArr[i][j].addEventListener(\"mouseover\", () => {\n                    if (checkBoxes[0].checked === true) {\n                        mouseOverEvent(i, j, 0);\n                    } else if (checkBoxes[1].checked === true) {\n                        mouseOverEvent(i, j, 1);\n                    } else if (checkBoxes[2].checked === true) {\n                        mouseOverEvent(i, j, 2);\n                    } else if (checkBoxes[3].checked === true) {\n                        mouseOverEvent(i, j, 3);\n                    } else if (checkBoxes[4].checked === true) {\n                        mouseOverEvent(i, j, 4);\n                    } else {\n                    }\n                });\n                divArr[i][j].addEventListener(\"mouseleave\", () => {\n                    if (checkBoxes[0].checked === true) {\n                        mouseLeaveEvent(i, j, 0);\n                    } else if (checkBoxes[1].checked === true) {\n                        mouseLeaveEvent(i, j, 1);\n                    } else if (checkBoxes[2].checked === true) {\n                        mouseLeaveEvent(i, j, 2);\n                    } else if (checkBoxes[3].checked === true) {\n                        mouseLeaveEvent(i, j, 3);\n                    } else if (checkBoxes[4].checked === true) {\n                        mouseLeaveEvent(i, j, 4);\n                    } else {\n                    }\n                    // console.log(hoveredCell);\n                });\n            }\n        }\n    }\n\n    function mouseOverEvent(i, j, ship) {\n        // console.log(\"mouseOverEvent\");\n        const validObj = myPlayer.playerGameboard.checkValid(\n            myPlayer.playerGameboard.shipArr[ship],\n            [j, i]\n        );\n\n        if (validObj.validity) {\n            // console.log(validObj.coveredCoordsArr);\n            for (let coords of validObj.coveredCoordsArr) {\n                divArr[coords[1]][coords[0]].setAttribute(\n                    \"style\",\n                    \"background-color: green\"\n                );\n            }\n        } else {\n            for (let coords of validObj.coveredCoordsArr) {\n                divArr[coords[1]][coords[0]].setAttribute(\n                    \"style\",\n                    \"background-color: red\"\n                );\n            }\n        }\n    }\n\n    function mouseLeaveEvent(i, j, ship) {\n        const validObj = myPlayer.playerGameboard.checkValid(\n            myPlayer.playerGameboard.shipArr[ship],\n            [j, i]\n        );\n\n        if (validObj.validity) {\n            // console.log(validObj.coveredCoordsArr);\n            for (let coords of validObj.coveredCoordsArr) {\n                divArr[coords[1]][coords[0]].removeAttribute(\"style\");\n            }\n        } else {\n            for (let coords of validObj.coveredCoordsArr) {\n                divArr[coords[1]][coords[0]].removeAttribute(\"style\");\n            }\n        }\n    }\n\n    function keyBindRotateShip() {\n        rotateButton.addEventListener(\"click\", () => {\n            rotateShip();\n        });\n    }\n\n    function rotateShip() {\n        // console.log(\"ship Rotated\");\n        if (checkBoxes[0].checked === true) {\n            myPlayer.playerGameboard.shipArr[0].rotateShip();\n        } else if (checkBoxes[1].checked === true) {\n            myPlayer.playerGameboard.shipArr[1].rotateShip();\n        } else if (checkBoxes[2].checked === true) {\n            myPlayer.playerGameboard.shipArr[2].rotateShip();\n        } else if (checkBoxes[3].checked === true) {\n            myPlayer.playerGameboard.shipArr[3].rotateShip();\n        } else if (checkBoxes[4].checked === true) {\n            myPlayer.playerGameboard.shipArr[4].rotateShip();\n        }\n    }\n\n    function init() {\n        initCheckBoxes();\n        createBoard();\n        addGridEventListeners();\n        keyBindRotateShip();\n        rotateShip();\n    }\n\n    return {\n        init,\n        createBoard,\n        fillBotTile,\n    };\n})();\n\n\n//# sourceURL=webpack://my-webpack-template/./src/gameBoardDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameBoardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardDOM */ \"./src/gameBoardDOM.js\");\n/* harmony import */ var _playerModuleDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerModuleDOM */ \"./src/playerModuleDOM.js\");\n\n\n\nconst Player = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n\nconst myAi = (0,_playerModuleDOM__WEBPACK_IMPORTED_MODULE_2__.playerModule)(false);\n\n// gameBoardDOM.init();\n\n\n//# sourceURL=webpack://my-webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/playerModuleDOM.js":
/*!********************************!*\
  !*** ./src/playerModuleDOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerModule: () => (/* binding */ playerModule)\n/* harmony export */ });\n/* harmony import */ var _gameBoardDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardDOM */ \"./src/gameBoardDOM.js\");\nconst Player = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n\n\nconst playerModule = function (playerBool) {\n    const myPlayer = Player(playerBool);\n\n    if (!playerBool) {\n        const myAIboard = _gameBoardDOM__WEBPACK_IMPORTED_MODULE_0__.gameBoardDOM;\n        myAIboard.createBoard();\n        const board = myPlayer.playerGameboard.board;\n        myPlayer.playerGameboard.printBoard();\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                console.log(board[i][j]);\n                if (board[i][j] === 1) {\n                    myAIboard.fillBotTile([i, j]);\n                }\n            }\n        }\n        return;\n    }\n\n    const myRealBoard = (0,_gameBoardDOM__WEBPACK_IMPORTED_MODULE_0__.gameBoardDOM)();\n    myRealBoard.init();\n    return;\n};\n\n\n//# sourceURL=webpack://my-webpack-template/./src/playerModuleDOM.js?");

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