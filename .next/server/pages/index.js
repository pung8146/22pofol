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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: [\n                    title,\n                    \" | Next Movie\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\components\\\\Seo.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\components\\\\Seo.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFYixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFBQSxLQUFLLEdBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU07OEZBQ0RGLGtEQUFJO2tHQUNBRSxDQUFLOztvQkFBRUEsS0FBSztvQkFBQyxDQUFhOzs7Ozs7Ozs7Ozs7O0FBR3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yMnBvZm9sLy4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8oe3RpdGxlfSkge1xyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSB8IE5leHQgTW92aWU8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIDwvPilcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n// import Head from \"next/head\";\n\n\nconst API_KEY = \"5c0c3c5ae53bf94d5f6fab131178fde1\";\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { results  } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n            setMovies(results);\n        })();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                }, movie.id, false, {\n                    fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 31\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hoon\\\\22reactMaster\\\\22pofol\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQWdDO0FBQ1c7QUFDUjtBQUVuQyxLQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFrQztBQUVuQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQzVCLEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlMLCtDQUFRO0lBQ3BDRCxnREFBUyxLQUFPLENBQUM7bUJBQ0YsQ0FBQztZQUNaLEtBQUssQ0FBQyxDQUFDLENBQUNPLE9BQU8sRUFBQyxDQUFDLEdBQUcsS0FBSyxFQUN2QixLQUFLLENBQUNDLEtBQUssRUFDUixtREFBbUQsRUFBRUwsT0FBTyxLQUUvRE0sSUFBSTtZQUNOSCxTQUFTLENBQUNDLE9BQU87UUFDbkIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNMRyxDQUFHOzt3RkFDQ1IsdURBQUc7Z0JBQUNTLEtBQUssRUFBQyxDQUFNOzs7Ozs7YUFDZk4sTUFBTSxnRkFBS08sQ0FBRTswQkFBQyxDQUFVOzs7Ozs7WUFDekJQLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRVEsR0FBRyxFQUFDQyxLQUFLLCtFQUFLSixDQUFHOzBHQUNyQkUsQ0FBRTtrQ0FBRUUsS0FBSyxDQUFDQyxjQUFjOzs7Ozs7bUJBREdELEtBQUssQ0FBQ0UsRUFBRTs7Ozs7Ozs7Ozs7O0FBS2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yMnBvZm9sLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XHJcblxyXG5jb25zdCBBUElfS0VZID0gXCI1YzBjM2M1YWU1M2JmOTRkNWY2ZmFiMTMxMTc4ZmRlMVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IChcclxuICAgICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWBcclxuICAgICAgICAgIClcclxuICAgICAgICApLmpzb24oKTtcclxuICAgICAgICBzZXRNb3ZpZXMocmVzdWx0cyk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKCBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPFNlbyB0aXRsZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgIHshbW92aWVzICYmIDxoND5Mb2FkaW5nLi4uPC9oND59XHJcbiAgICAgICAge21vdmllcz8ubWFwKG1vdmllID0+IDxkaXYga2V5PXttb3ZpZS5pZH0+XHJcbiAgICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VvIiwiQVBJX0tFWSIsIkhvbWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJyZXN1bHRzIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwidGl0bGUiLCJoNCIsIm1hcCIsIm1vdmllIiwib3JpZ2luYWxfdGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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