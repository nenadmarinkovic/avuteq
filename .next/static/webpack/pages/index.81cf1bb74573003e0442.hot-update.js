webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/Form.js":
/*!************************!*\
  !*** ./styles/Form.js ***!
  \************************/
/*! exports provided: FormText, FlexListText, FlexList, FlexDiv, FlexItem, FlexItemMessage, MainForm, FormContainer, FormLabel, FormInput, TextArea, Button, Error, Message, Copyright */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormText\", function() { return FormText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexListText\", function() { return FlexListText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexList\", function() { return FlexList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexDiv\", function() { return FlexDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexItem\", function() { return FlexItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexItemMessage\", function() { return FlexItemMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainForm\", function() { return MainForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContainer\", function() { return FormContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormLabel\", function() { return FormLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormInput\", function() { return FormInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextArea\", function() { return TextArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Error\", function() { return Error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Copyright\", function() { return Copyright; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar FormText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__FormText\",\n  componentId: \"fop5id-0\"\n})([\"padding:80px 0 20px;margin-top:10px;font-size:21px;text-align:center;line-height:1.5;color:white;\"]);\nvar FlexListText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__FlexListText\",\n  componentId: \"fop5id-1\"\n})([\"font-size:18px;font-weight:500;color:white;margin-top:20px;\"]);\nvar FlexList = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul.withConfig({\n  displayName: \"Form__FlexList\",\n  componentId: \"fop5id-2\"\n})([\"padding:0;display:flex;font-size:18px;\"]);\nvar FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__FlexDiv\",\n  componentId: \"fop5id-3\"\n})([\"display:flex;margin-top:5px;width:100%;\"]);\nvar FlexItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__FlexItem\",\n  componentId: \"fop5id-4\"\n})([\"display:flex;align-items:flex-end;\"]);\nvar FlexItemMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__FlexItemMessage\",\n  componentId: \"fop5id-5\"\n})([\"display:flex;align-items:flex-start;\"]);\nvar MainForm = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n  displayName: \"Form__MainForm\",\n  componentId: \"fop5id-6\"\n})([\"margin-top:30px;font-size:21px;line-height:1.65;color:white;padding-bottom:120px;@media (max-width:768px){width:100%;}\"]);\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.withConfig({\n  displayName: \"Form__FormContainer\",\n  componentId: \"fop5id-7\"\n})([\"display:grid;grid-row-gap:1em;\"]);\nvar FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label.withConfig({\n  displayName: \"Form__FormLabel\",\n  componentId: \"fop5id-8\"\n})([\"font-family:\\\"Rubik\\\",sans-serif;font-size:14px;font-weight:500;text-align:left;width:40%;:focus{outline:none;box-shadow:0 0 0 3px rgba(21,156,228,0.4);}\"]);\nvar FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.withConfig({\n  displayName: \"Form__FormInput\",\n  componentId: \"fop5id-9\"\n})([\"margin:0;padding:0.5em;vertical-align:middle;white-space:normal;background:none;line-height:1;width:70%;color:white;font-size:1rem;font-family:\\\"Rubik\\\",sans-serif;border:none;border-bottom:1px solid white;:focus{outline:none;}\"]);\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea.withConfig({\n  displayName: \"Form__TextArea\",\n  componentId: \"fop5id-10\"\n})([\"margin:0;color:white;vertical-align:middle;white-space:normal;background:none;line-height:1;width:70%;font-size:1rem;font-family:\\\"Rubik\\\",sans-serif;transition:all 0.2s ease;border:1px solid white;height:140px;border-bottom:1px solid white;:focus{outline:none;}\"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Form__Button\",\n  componentId: \"fop5id-11\"\n})([\"margin-top:30px;padding:0.65em 1em;cursor:pointer;line-height:1;transition:all 0.2s ease;background:#ea5730;color:white;font-family:\\\"Rubik\\\",sans-serif;border:1px solid #ea5730;border-radius:8px;font-size:16px;:hover{cursor:pointer;background:white;color:#ea5730;border:1px solid white;}:focus{outline:none;box-shadow:0 0 0 3px rgba(21,156,228,0.4);}\"]);\nvar Error = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Form__Error\",\n  componentId: \"fop5id-12\"\n})([\"background:#ee0000;color:#fff;margin-top:16px;text-align:center;\"]);\nvar Message = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"Form__Message\",\n  componentId: \"fop5id-13\"\n})([\"font-size:16px;\"]);\nvar Copyright = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"Form__Copyright\",\n  componentId: \"fop5id-14\"\n})([\"margin-top:75px;display:block;text-align:center;padding:20px 0;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Zvcm0uanM/MmU0NiJdLCJuYW1lcyI6WyJGb3JtVGV4dCIsInN0eWxlZCIsImRpdiIsIkZsZXhMaXN0VGV4dCIsIkZsZXhMaXN0IiwidWwiLCJGbGV4RGl2IiwiRmxleEl0ZW0iLCJGbGV4SXRlbU1lc3NhZ2UiLCJNYWluRm9ybSIsIm1haW4iLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkZvcm1MYWJlbCIsImxhYmVsIiwiRm9ybUlucHV0IiwiaW5wdXQiLCJUZXh0QXJlYSIsInRleHRhcmVhIiwiQnV0dG9uIiwiYnV0dG9uIiwiRXJyb3IiLCJNZXNzYWdlIiwicCIsIkNvcHlyaWdodCIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBZDtBQVNBLElBQU1DLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtRUFBbEI7QUFPQSxJQUFNRSxRQUFRLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsOENBQWQ7QUFNQSxJQUFNQyxPQUFPLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0NBQWI7QUFNQSxJQUFNSyxRQUFRLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQWQ7QUFLQSxJQUFNTSxlQUFlLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNENBQXJCO0FBS0EsSUFBTU8sUUFBUSxHQUFHUix5REFBTSxDQUFDUyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhIQUFkO0FBWUEsSUFBTUMsYUFBYSxHQUFHVix5REFBTSxDQUFDVyxJQUFWO0FBQUE7QUFBQTtBQUFBLHNDQUFuQjtBQUlBLElBQU1DLFNBQVMsR0FBR1oseURBQU0sQ0FBQ2EsS0FBVjtBQUFBO0FBQUE7QUFBQSxpS0FBZjtBQVlBLElBQU1DLFNBQVMsR0FBR2QseURBQU0sQ0FBQ2UsS0FBVjtBQUFBO0FBQUE7QUFBQSwyT0FBZjtBQW1CQSxJQUFNQyxRQUFRLEdBQUdoQix5REFBTSxDQUFDaUIsUUFBVjtBQUFBO0FBQUE7QUFBQSw4UUFBZDtBQW1CQSxJQUFNQyxNQUFNLEdBQUdsQix5REFBTSxDQUFDbUIsTUFBVjtBQUFBO0FBQUE7QUFBQSx1V0FBWjtBQTBCQSxJQUFNQyxLQUFLLEdBQUdwQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUFYO0FBT0EsSUFBTW9CLE9BQU8sR0FBR3JCLHlEQUFNLENBQUNzQixDQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUFiO0FBSUEsSUFBTUMsU0FBUyxHQUFHdkIseURBQU0sQ0FBQ3dCLElBQVY7QUFBQTtBQUFBO0FBQUEsdUVBQWYiLCJmaWxlIjoiLi9zdHlsZXMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDgwcHggMCAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZsZXhMaXN0VGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZsZXhMaXN0ID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleEl0ZW1NZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpbkZvcm0gPSBzdHlsZWQubWFpbmBcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMWVtO1xuYDtcbmV4cG9ydCBjb25zdCBGb3JtTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIxLCAxNTYsIDIyOCwgMC40KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiA3MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDAuNjVlbSAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6ICNlYTU3MzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTczMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICNlYTU3MzA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIH1cblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjEsIDE1NiwgMjI4LCAwLjQpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZWUwMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvcHlyaWdodCA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Form.js\n");

/***/ })

})