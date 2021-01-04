webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ \"./hooks.js\");\n/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-into-view */ \"./node_modules/react-scroll-into-view/dist/index.js\");\n/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Header */ \"./styles/Header.js\");\n/* harmony import */ var _react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-hook/window-scroll */ \"./node_modules/@react-hook/window-scroll/dist/module/index.js\");\n\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/avuteq/components/Menu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Menu__StyledMenu\",\n  componentId: \"sc-1rg46mt-0\"\n})([\"background:white;border-left:1px solid #eaeaea;border-bottom:1px solid #eaeaea;transform:\", \";height:300px;text-align:left;padding:80px 20px;position:fixed;top:0;right:0;transition:transform 0.3s ease-in-out;\"], function (_ref) {\n  var open = _ref.open;\n  return open ? \"translateX(0%)\" : \"translateX(100%)\";\n});\n_c = StyledMenu;\nvar HeaderItems = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Menu__HeaderItems\",\n  componentId: \"sc-1rg46mt-1\"\n})([\"display:flex;justify-content:space-between;flex-direction:column;height:180px;\"]);\n_c2 = HeaderItems;\n\nvar MenuComponent = function MenuComponent(_ref2) {\n  var open = _ref2.open,\n      setOpen = _ref2.setOpen;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledMenu, {\n    open: open,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HeaderItems, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        selector: \"#about\",\n        smooth: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Header__WEBPACK_IMPORTED_MODULE_5__[\"HeaderItem\"], {\n          children: \"About us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        selector: \"#how\",\n        smooth: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Header__WEBPACK_IMPORTED_MODULE_5__[\"HeaderItem\"], {\n          children: \"How We Work\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        selector: \"#partners\",\n        smooth: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Header__WEBPACK_IMPORTED_MODULE_5__[\"HeaderItem\"], {\n          children: \"Partners\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        selector: \"#contact\",\n        smooth: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Header__WEBPACK_IMPORTED_MODULE_5__[\"HeaderItem\"], {\n          children: \"Get In Touch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 6\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = MenuComponent;\nvar StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"Menu__StyledBurger\",\n  componentId: \"sc-1rg46mt-2\"\n})([\"position:absolute;top:20px;right:2rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:2px;background:\", \";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:\", \";}:nth-child(2){opacity:\", \";transform:\", \";}:nth-child(3){transform:\", \";}}\"], function (_ref3) {\n  var open = _ref3.open;\n  return open ? \"#0D0C1D\" : \"#0D0C1D\";\n}, function (_ref4) {\n  var open = _ref4.open;\n  return open ? \"rotate(45deg)\" : \"rotate(0)\";\n}, function (_ref5) {\n  var open = _ref5.open;\n  return open ? \"0\" : \"1\";\n}, function (_ref6) {\n  var open = _ref6.open;\n  return open ? \"translateX(20px)\" : \"translateX(0)\";\n}, function (_ref7) {\n  var open = _ref7.open;\n  return open ? \"rotate(-45deg)\" : \"rotate(0)\";\n});\n_c4 = StyledBurger;\n\nvar Burger = function Burger(_ref8) {\n  var open = _ref8.open,\n      setOpen = _ref8.setOpen;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledBurger, {\n    open: open,\n    onClick: function onClick() {\n      return setOpen(!open);\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, _this);\n};\n\n_c5 = Burger;\n\nfunction Menu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var node = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var scrollY = Object(_react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(60\n  /*frames per second*/\n  );\n  Object(_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useOnClickOutside\"])(node, function () {\n    return setOpen(false);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (scrollY > 0) {\n      setOpen(false);\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: node,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Burger, {\n        open: open,\n        setOpen: setOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuComponent, {\n        open: open,\n        setOpen: setOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"iP9oZaCqnUzQ/eNWXcTfnkhLbLc=\", false, function () {\n  return [_react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _hooks__WEBPACK_IMPORTED_MODULE_3__[\"useOnClickOutside\"]];\n});\n\n_c6 = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"StyledMenu\");\n$RefreshReg$(_c2, \"HeaderItems\");\n$RefreshReg$(_c3, \"MenuComponent\");\n$RefreshReg$(_c4, \"StyledBurger\");\n$RefreshReg$(_c5, \"Burger\");\n$RefreshReg$(_c6, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzPzExMGQiXSwibmFtZXMiOlsiU3R5bGVkTWVudSIsInN0eWxlZCIsImRpdiIsIm9wZW4iLCJIZWFkZXJJdGVtcyIsIk1lbnVDb21wb25lbnQiLCJzZXRPcGVuIiwiU3R5bGVkQnVyZ2VyIiwiYnV0dG9uIiwiQnVyZ2VyIiwiTWVudSIsInVzZVN0YXRlIiwibm9kZSIsInVzZVJlZiIsInNjcm9sbFkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsInVzZU9uQ2xpY2tPdXRzaWRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5TkFJRDtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWVBLElBQUksR0FBRyxnQkFBSCxHQUFzQixrQkFBekM7QUFBQSxDQUpDLENBQWhCO0tBQU1ILFU7QUFhTixJQUFNSSxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0ZBQWpCO01BQU1FLFc7O0FBT04sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixRQUF1QjtBQUFBLE1BQXBCRixJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxNQUFkRyxPQUFjLFNBQWRBLE9BQWM7QUFDM0Msc0JBQ0UscUVBQUMsVUFBRDtBQUFZLFFBQUksRUFBRUgsSUFBbEI7QUFBQSwyQkFDQyxxRUFBQyxXQUFEO0FBQUEsOEJBQ08scUVBQUMsNkRBQUQ7QUFBZ0IsZ0JBQVEsRUFBQyxRQUF6QjtBQUFrQyxjQUFNLEVBQUUsSUFBMUM7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUCxlQUtPLHFFQUFDLDZEQUFEO0FBQWdC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O0FBQUEsY0FERixlQUVFLHFFQUFDLGFBQUQ7QUFBZSxZQUFJLEVBQUVILElBQXJCO0FBQTJCLGVBQU8sRUFBRUc7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQXBCUUksSTtVQUdTSyxpRSxFQUNoQkMsd0Q7OztNQUpPTixJO0FBc0JNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gXCIuLi9ob29rc1wiO1xuaW1wb3J0IFNjcm9sbEludG9WaWV3IGZyb20gXCJyZWFjdC1zY3JvbGwtaW50by12aWV3XCI7XG5pbXBvcnQgeyBIZWFkZXJJdGVtIH0gZnJvbSBcIi4uL3N0eWxlcy9IZWFkZXJcIjtcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tIFwiQHJlYWN0LWhvb2svd2luZG93LXNjcm9sbFwiO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VhZWFlYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKDEwMCUpXCIpfTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogODBweCAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuYDtcbmNvbnN0IEhlYWRlckl0ZW1zID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuaGVpZ2h0OiAxODBweDtcbmA7XG5cbmNvbnN0IE1lbnVDb21wb25lbnQgPSAoeyBvcGVuLCBzZXRPcGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTWVudSBvcGVuPXtvcGVufT5cbiAgICAgPEhlYWRlckl0ZW1zPlxuICAgICAgICAgICAgPFNjcm9sbEludG9WaWV3IHNlbGVjdG9yPVwiI2Fib3V0XCIgc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+QWJvdXQgdXM8L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICA8L1Njcm9sbEludG9WaWV3PlxuXG4gICAgICAgICAgICA8U2Nyb2xsSW50b1ZpZXcgc2VsZWN0b3I9XCIjaG93XCIgc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+SG93IFdlIFdvcms8L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICA8L1Njcm9sbEludG9WaWV3PlxuXG4gICAgICAgICAgICA8U2Nyb2xsSW50b1ZpZXcgc2VsZWN0b3I9XCIjcGFydG5lcnNcIiBzbW9vdGg9e3RydWV9PlxuICAgICAgICAgICAgICA8SGVhZGVySXRlbT5QYXJ0bmVyczwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgIDwvU2Nyb2xsSW50b1ZpZXc+XG5cbiAgICAgICAgICAgIDxTY3JvbGxJbnRvVmlldyBzZWxlY3Rvcj1cIiNjb250YWN0XCIgc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+R2V0IEluIFRvdWNoPC9IZWFkZXJJdGVtPlxuICAgICAgICAgICAgPC9TY3JvbGxJbnRvVmlldz5cbiAgICAgICAgICA8L0hlYWRlckl0ZW1zPlxuICAgIDwvU3R5bGVkTWVudT5cbiAgKTtcbn07XG5cbmNvbnN0IFN0eWxlZEJ1cmdlciA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogMTA7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIGRpdiB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gXCIjMEQwQzFEXCIgOiBcIiMwRDBDMURcIil9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHg7XG5cbiAgICA6Zmlyc3QtY2hpbGQge1xuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyBcInJvdGF0ZSg0NWRlZylcIiA6IFwicm90YXRlKDApXCIpfTtcbiAgICB9XG5cbiAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG9wYWNpdHk6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/IFwiMFwiIDogXCIxXCIpfTtcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gXCJ0cmFuc2xhdGVYKDIwcHgpXCIgOiBcInRyYW5zbGF0ZVgoMClcIil9O1xuICAgIH1cblxuICAgIDpudGgtY2hpbGQoMykge1xuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyBcInJvdGF0ZSgtNDVkZWcpXCIgOiBcInJvdGF0ZSgwKVwiKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCdXJnZXIgPSAoeyBvcGVuLCBzZXRPcGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQnVyZ2VyIG9wZW49e29wZW59IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxkaXYgLz5cbiAgICA8L1N0eWxlZEJ1cmdlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgbm9kZSA9IHVzZVJlZigpO1xuICBjb25zdCBzY3JvbGxZID0gdXNlU2Nyb2xsUG9zaXRpb24oNjAgLypmcmFtZXMgcGVyIHNlY29uZCovKTtcbiAgdXNlT25DbGlja091dHNpZGUobm9kZSwgKCkgPT4gc2V0T3BlbihmYWxzZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbFkgPiAwKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgcmVmPXtub2RlfT5cbiAgICAgICAgPEJ1cmdlciBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSAvPlxuICAgICAgICA8TWVudUNvbXBvbmVudCBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n");

/***/ })

})