"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\components\\\\Seo.js\";\n\n\n\nfunction Seo({\n  title\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n        children: [title, \" | Next Movie\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBRWUsU0FBU0MsR0FBVCxDQUFhO0FBQUNDLEVBQUFBO0FBQUQsQ0FBYixFQUFzQjtBQUNqQyxzQkFBUTtBQUFBLDJCQUNKLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQSxtQkFBUUEsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREksbUJBQVI7QUFLSCIsInNvdXJjZXMiOlsid2VicGFjazovLzIycG9mb2wvLi9jb21wb25lbnRzL1Nlby5qcz80Mjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7dGl0bGV9KSB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgPC8+KVxyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTZW8iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\";\n// import Head from \"next/head\";\n\n\n\nconst API_KEY = \"5c0c3c5ae53bf94d5f6fab131178fde1\";\nfunction Home() {\n  const {\n    0: movies,\n    1: setMovies\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    (async () => {\n      const {\n        results\n      } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n      setMovies(results);\n    })();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), !movies && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }, this), movies === null || movies === void 0 ? void 0 : movies.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        children: movie.original_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, movie.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 31\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxPQUFPLEdBQUcsa0NBQWhCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUMzQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JMLCtDQUFRLEVBQXBDO0FBQ0FELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLFlBQU07QUFBRU8sUUFBQUE7QUFBRixVQUFjLE1BQU0sQ0FDeEIsTUFBTUMsS0FBSyxDQUNSLHNEQUFxREwsT0FBUSxFQURyRCxDQURhLEVBSXhCTSxJQUp3QixFQUExQjtBQUtBSCxNQUFBQSxTQUFTLENBQUNDLE9BQUQsQ0FBVDtBQUNELEtBUEQ7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0E7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFLLFdBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVLLENBQUNGLE1BQUQsaUJBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsRUFHS0EsTUFITCxhQUdLQSxNQUhMLHVCQUdLQSxNQUFNLENBQUVLLEdBQVIsQ0FBWUMsS0FBSyxpQkFBSTtBQUFBLDZCQUNsQjtBQUFBLGtCQUFLQSxLQUFLLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURrQixPQUFVRCxLQUFLLENBQUNFLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckIsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQVNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjJwb2ZvbC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xyXG5cclxuY29uc3QgQVBJX0tFWSA9IFwiNWMwYzNjNWFlNTNiZjk0ZDVmNmZhYjEzMTE3OGZkZTFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCAoXHJcbiAgICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7QVBJX0tFWX1gXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKS5qc29uKCk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3VsdHMpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cclxuICAgICAgICB7IW1vdmllcyAmJiA8aDQ+TG9hZGluZy4uLjwvaDQ+fVxyXG4gICAgICAgIHttb3ZpZXM/Lm1hcChtb3ZpZSA9PiA8ZGl2IGtleT17bW92aWUuaWR9PlxyXG4gICAgICAgICAgICA8aDQ+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlbyIsIkFQSV9LRVkiLCJIb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwicmVzdWx0cyIsImZldGNoIiwianNvbiIsIm1hcCIsIm1vdmllIiwib3JpZ2luYWxfdGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();