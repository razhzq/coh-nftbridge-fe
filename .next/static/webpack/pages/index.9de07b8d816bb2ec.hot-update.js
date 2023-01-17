"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/engine/interfaces/sourcebridge.js":
/*!*****************************************************!*\
  !*** ./src/pages/engine/interfaces/sourcebridge.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ sourcebridge; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chainchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chainchange */ \"./src/pages/engine/chainchange.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ \"./src/pages/engine/configuration.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst droptheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n    type: \"dark\",\n    theme: {\n        fontFamily: \"SF Pro Display\",\n        colors: {\n            primaryLight: \"#00000020\",\n            primaryLightHover: \"#00000020\",\n            primaryLightActive: \"#00000020\",\n            primaryLightContrast: \"#00000020\",\n            primary: \"#1F51FF40\",\n            primaryBorder: \"#00000020\",\n            primaryBorderHover: \"#00000020\",\n            primarySolidHover: \"#00000010\",\n            primarySolidContrast: \"$white\",\n            primaryShadow: \"$white500\",\n            transparent: \"#00000000\",\n            dropdownItemHoverTextColor: \"#00000000\",\n            link: \"#5E1DAD\",\n            myColor: \"#00000000\"\n        },\n        space: {},\n        fonts: {}\n    }\n});\nfunction sourcebridge() {\n    _s();\n    const [sourceNft, getSourceNft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sourceCustody, getSourceCustody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Set([\n        \"Set Network\"\n    ]));\n    const selectedValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>Array.from(selected).join(\", \").replaceAll(\"_\", \" \"), [\n        selected\n    ]);\n    const blockImage = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo((resolve, reject)=>{\n        var eth = \"Ethereum\";\n        var bsc = \"Binance Smart Chain\";\n        var pol = \"Polygon\";\n        if (selectedValue == eth) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"ethereumlogo.png\",\n                width: \"160px\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        } else if (selectedValue == bsc) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"bsc.png\",\n                width: \"160px\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this);\n        } else if (selectedValue == pol) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"polygonwhite.png\",\n                width: \"160px\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this);\n        }\n    });\n    async function sourceChain() {\n        var bsc = \"Binance Smart Chain\";\n        var poly = \"Polygon\";\n        var eth = \"Ethereum\";\n        var mum = \"Mumbai\";\n        var bsct = \"Bsctest\";\n        var goe = \"Goerli\";\n        var hard = \"Hardhat\";\n        if (bsc == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.bscTest)();\n        } else if (poly == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.polyTest)();\n        } else if (eth == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.ethTest)();\n            var sNft = _configuration__WEBPACK_IMPORTED_MODULE_3__.goeNFT;\n            var sCustody = _configuration__WEBPACK_IMPORTED_MODULE_3__.goeCustody;\n        } else if (hard == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.hardChain)();\n        } else if (bsct == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.bscTest)();\n        } else if (goe == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.ethTest)();\n            var sNft = _configuration__WEBPACK_IMPORTED_MODULE_3__.goeNFT;\n            var sCustody = _configuration__WEBPACK_IMPORTED_MODULE_3__.goeCustody;\n        } else if (mum == selectedValue) {\n            (0,_chainchange__WEBPACK_IMPORTED_MODULE_2__.polyTest)();\n        }\n        getSourceNft(sNft);\n        getSourceCustody(sCustody);\n        return {\n            sourceNft\n        };\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        sourceChain();\n    }, [\n        selected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.NextUIProvider, {\n        theme: droptheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                css: {\n                    mb: \"$2\"\n                },\n                h4: true,\n                children: \"Source\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Button, {\n                        bordered: true,\n                        flat: true,\n                        css: {\n                            borderColor: \"#ffffff50\",\n                            borderWidth: \"0.8px\",\n                            color: \"White\",\n                            width: \"100%\",\n                            minHeight: \"45px\",\n                            borderRadius: \"5px\"\n                        },\n                        children: blockImage\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                        lineNumber: 111,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Menu, {\n                        css: {\n                            opacity: \"100%\",\n                            alignContent: \"center\",\n                            width: \"600px\",\n                            display: \"grid\",\n                            backgroundColor: \"#00000010\"\n                        },\n                        \"aria-label\": \"Single selection actions\",\n                        disallowEmptySelection: true,\n                        selectionMode: \"single\",\n                        selectedKeys: selected,\n                        onSelectionChange: setSelected,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"ethereumlogo.png\",\n                                width: \"130px\"\n                            }, void 0, false, void 0, void 0)\n                        }, \"Ethereum\", false, {\n                            fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                            lineNumber: 139,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n                lineNumber: 110,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiancaso/Documents/crypto/nft-bridge/canto-nft-bridge/src/pages/engine/interfaces/sourcebridge.js\",\n        lineNumber: 106,\n        columnNumber: 3\n    }, this);\n}\n_s(sourcebridge, \"GfDCGDRu6O8l4O+U4jtIQsK80XY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZW5naW5lL2ludGVyZmFjZXMvc291cmNlYnJpZGdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3dGO0FBQ3RFO0FBQ1k7QUFDUTtBQUNGO0FBQ0c7QUFDSDtBQUU5RCxNQUFNeUIsWUFBWVgsOERBQVdBLENBQUM7SUFDNUJZLE1BQU07SUFDTkMsT0FBTztRQUNMQyxZQUFXO1FBQ1hDLFFBQVE7WUFDTkMsY0FBYztZQUNkQyxtQkFBbUI7WUFDbkJDLG9CQUFvQjtZQUNwQkMsc0JBQXNCO1lBQ3RCQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsb0JBQW9CO1lBQ3BCQyxtQkFBbUI7WUFDbkJDLHNCQUFzQjtZQUN0QkMsZUFBZTtZQUNmQyxhQUFhO1lBQ2JDLDRCQUEyQjtZQUMzQkMsTUFBTTtZQUVOQyxTQUFTO1FBRVg7UUFDQUMsT0FBTyxDQUFDO1FBQ1JDLE9BQU8sQ0FBQztJQUNWO0FBQ0Y7QUFFZSxTQUFTQyxlQUFjOztJQUNwQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RDLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDdUMsZUFBZUMsaUJBQWlCLEdBQUd4QywrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ3lDLFVBQVVDLFlBQVksR0FBR3BELHFEQUFjLENBQUMsSUFBSXFELElBQUk7UUFBQztLQUFjO0lBQ3RFLE1BQU1DLGdCQUFnQnRELG9EQUFhLENBQUMsSUFBTXdELE1BQU1DLElBQUksQ0FBQ04sVUFBVU8sSUFBSSxDQUFDLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLE1BQUs7UUFBQ1I7S0FBUztJQUV6RyxNQUFNUyxhQUFhNUQsb0RBQWEsQ0FBQyxDQUFDNkQsU0FBU0MsU0FBVztRQUNwRCxJQUFJQyxNQUFNO1FBQ1YsSUFBSUMsTUFBTTtRQUNWLElBQUlDLE1BQU07UUFDVixJQUFJWCxpQkFBaUJTLEtBQUs7WUFDeEIscUJBQ0UsOERBQUNHO2dCQUFJQyxLQUFJO2dCQUFtQkMsT0FBTzs7Ozs7O1FBRXZDLE9BQ0ssSUFBSWQsaUJBQWlCVSxLQUFLO1lBQzdCLHFCQUNFLDhEQUFDRTtnQkFBSUMsS0FBSTtnQkFBVUMsT0FBTzs7Ozs7O1FBRTlCLE9BQ0ssSUFBSWQsaUJBQWlCVyxLQUFLO1lBQzdCLHFCQUNFLDhEQUFDQztnQkFBSUMsS0FBSTtnQkFBbUJDLE9BQU87Ozs7OztRQUV2QyxDQUFDO0lBQ0g7SUFFRixlQUFlQyxjQUFjO1FBQ3pCLElBQUlMLE1BQU07UUFDVixJQUFJTSxPQUFPO1FBQ1gsSUFBSVAsTUFBTTtRQUNWLElBQUlRLE1BQU07UUFDVixJQUFJQyxPQUFPO1FBQ1gsSUFBSUMsTUFBTTtRQUNWLElBQUlDLE9BQU87UUFDWCxJQUFJVixPQUFPVixlQUFlO1lBQ3hCaEQscURBQU9BO1FBQ1QsT0FDSyxJQUFJZ0UsUUFBUWhCLGVBQWU7WUFDOUI5QyxzREFBUUE7UUFDVixPQUNLLElBQUl1RCxPQUFPVCxlQUFlO1lBQzdCL0MscURBQU9BO1lBQ1AsSUFBSW9FLE9BQU8zRCxrREFBTUE7WUFDakIsSUFBSTRELFdBQVczRCxzREFBVUE7UUFDM0IsT0FDSyxJQUFJeUQsUUFBUXBCLGVBQWU7WUFDOUJsRCx1REFBU0E7UUFDWCxPQUNLLElBQUlvRSxRQUFRbEIsZUFBZTtZQUM5QmhELHFEQUFPQTtRQUNULE9BQ0ssSUFBSW1FLE9BQU9uQixlQUFlO1lBQzdCL0MscURBQU9BO1lBQ1AsSUFBSW9FLE9BQU8zRCxrREFBTUE7WUFDakIsSUFBSTRELFdBQVczRCxzREFBVUE7UUFDM0IsT0FDSyxJQUFJc0QsT0FBT2pCLGVBQWU7WUFDN0I5QyxzREFBUUE7UUFDVixDQUFDO1FBQ0R3QyxhQUFhMkI7UUFDYnpCLGlCQUFpQjBCO1FBQ2pCLE9BQU87WUFBQzdCO1FBQVM7SUFDbkI7SUFFQXRDLGdEQUFTQSxDQUFDLElBQU07UUFDZDREO0lBQ0YsR0FBRztRQUFDbEI7S0FBUztJQUNmLHFCQUNFLDhEQUFDcEMsNkRBQWNBO1FBQUNZLE9BQU9GOzswQkFFYiw4REFBQ1osbURBQUlBO2dCQUFDZ0UsS0FBSztvQkFBQ0MsSUFBRztnQkFBSTtnQkFBR0MsRUFBRTswQkFBQzs7Ozs7OzBCQUVuQyw4REFBQ3BFLHVEQUFRQTs7a0NBQ1AsOERBQUNBLDhEQUFlO3dCQUNkc0UsUUFBUTt3QkFDUkMsSUFBSTt3QkFDSkwsS0FBSzs0QkFDSE0sYUFBYTs0QkFDYkMsYUFBYTs0QkFDYkMsT0FBTzs0QkFDUGpCLE9BQU07NEJBQ0prQixXQUFVOzRCQUNaQyxjQUFjO3dCQUNoQjtrQ0FFQzNCOzs7Ozs7a0NBRUgsOERBQUNqRCw0REFBYTt3QkFDWmtFLEtBQUs7NEJBQ0xZLFNBQVE7NEJBQ1JDLGNBQWE7NEJBQ2J0QixPQUFNOzRCQUNOdUIsU0FBUTs0QkFDUkMsaUJBQWdCO3dCQUNsQjt3QkFDRUMsY0FBVzt3QkFDWEMsc0JBQXNCO3dCQUN0QkMsZUFBYzt3QkFDZEMsY0FBYzdDO3dCQUNkOEMsbUJBQW1CN0M7a0NBRW5CLDRFQUFDekMsNERBQWE7NEJBQUN3RixvQkFBTSw4REFBQ2pDO2dDQUFJQyxLQUFJO2dDQUFtQkMsT0FBTzs7MkJBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlFLENBQUM7R0E3R3VCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VuZ2luZS9pbnRlcmZhY2VzL3NvdXJjZWJyaWRnZS5qcz9kNWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYnNjQ2hhaW4sIHBvbHlDaGFpbiwgZXRoQ2hhaW4sIGhhcmRDaGFpbiwgaGFyZENoYWluYiwgYnNjVGVzdCwgZXRoVGVzdCwgcG9seVRlc3QgfSBmcm9tICcuLi9jaGFpbmNoYW5nZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24sIFJvdywgVGV4dCB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIE5leHRVSVByb3ZpZGVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IGdvZU5GVCwgZ29lQ3VzdG9keSwgZ29lcnBjIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IGJzY3RORlQsIGJzY3RDdXN0b2R5LCBic2N0cnBjIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IG11bU5GVCwgbXVtQ3VzdG9keSwgbXVtcnBjIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcblxyXG5jb25zdCBkcm9wdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgdHlwZTogXCJkYXJrXCIsXHJcbiAgdGhlbWU6IHtcclxuICAgIGZvbnRGYW1pbHk6J1NGIFBybyBEaXNwbGF5JyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICBwcmltYXJ5TGlnaHQ6ICcjMDAwMDAwMjAnLFxyXG4gICAgICBwcmltYXJ5TGlnaHRIb3ZlcjogJyMwMDAwMDAyMCcsXHJcbiAgICAgIHByaW1hcnlMaWdodEFjdGl2ZTogJyMwMDAwMDAyMCcsXHJcbiAgICAgIHByaW1hcnlMaWdodENvbnRyYXN0OiAnIzAwMDAwMDIwJyxcclxuICAgICAgcHJpbWFyeTogJyMxRjUxRkY0MCcsXHJcbiAgICAgIHByaW1hcnlCb3JkZXI6ICcjMDAwMDAwMjAnLFxyXG4gICAgICBwcmltYXJ5Qm9yZGVySG92ZXI6ICcjMDAwMDAwMjAnLFxyXG4gICAgICBwcmltYXJ5U29saWRIb3ZlcjogJyMwMDAwMDAxMCcsXHJcbiAgICAgIHByaW1hcnlTb2xpZENvbnRyYXN0OiAnJHdoaXRlJyxcclxuICAgICAgcHJpbWFyeVNoYWRvdzogJyR3aGl0ZTUwMCcsXHJcbiAgICAgIHRyYW5zcGFyZW50OiAnIzAwMDAwMDAwJyxcclxuICAgICAgZHJvcGRvd25JdGVtSG92ZXJUZXh0Q29sb3I6JyMwMDAwMDAwMCcsXHJcbiAgICAgIGxpbms6ICcjNUUxREFEJyxcclxuXHJcbiAgICAgIG15Q29sb3I6ICcjMDAwMDAwMDAnXHJcblxyXG4gICAgfSxcclxuICAgIHNwYWNlOiB7fSxcclxuICAgIGZvbnRzOiB7fVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvdXJjZWJyaWRnZSgpe1xyXG4gIGNvbnN0IFtzb3VyY2VOZnQsIGdldFNvdXJjZU5mdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NvdXJjZUN1c3RvZHksIGdldFNvdXJjZUN1c3RvZHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUobmV3IFNldChbXCJTZXQgTmV0d29ya1wiXSkpO1xyXG4gIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IEFycmF5LmZyb20oc2VsZWN0ZWQpLmpvaW4oXCIsIFwiKS5yZXBsYWNlQWxsKFwiX1wiLCBcIiBcIiksW3NlbGVjdGVkXSlcclxuXHJcbiAgY29uc3QgYmxvY2tJbWFnZSA9IFJlYWN0LnVzZU1lbW8oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgdmFyIGV0aCA9IFwiRXRoZXJldW1cIjtcclxuICAgIHZhciBic2MgPSBcIkJpbmFuY2UgU21hcnQgQ2hhaW5cIjtcclxuICAgIHZhciBwb2wgPSBcIlBvbHlnb25cIjtcclxuICAgIGlmIChzZWxlY3RlZFZhbHVlID09IGV0aCkge1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGltZyBzcmM9J2V0aGVyZXVtbG9nby5wbmcnIHdpZHRoPXtcIjE2MHB4XCJ9Lz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRWYWx1ZSA9PSBic2MpIHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxpbWcgc3JjPSdic2MucG5nJyB3aWR0aD17XCIxNjBweFwifS8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNlbGVjdGVkVmFsdWUgPT0gcG9sKSB7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8aW1nIHNyYz0ncG9seWdvbndoaXRlLnBuZycgd2lkdGg9e1wiMTYwcHhcIn0vPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNvdXJjZUNoYWluKCkge1xyXG4gICAgdmFyIGJzYyA9IFwiQmluYW5jZSBTbWFydCBDaGFpblwiO1xyXG4gICAgdmFyIHBvbHkgPSBcIlBvbHlnb25cIjtcclxuICAgIHZhciBldGggPSBcIkV0aGVyZXVtXCI7XHJcbiAgICB2YXIgbXVtID0gXCJNdW1iYWlcIjtcclxuICAgIHZhciBic2N0ID0gXCJCc2N0ZXN0XCI7XHJcbiAgICB2YXIgZ29lID0gXCJHb2VybGlcIjtcclxuICAgIHZhciBoYXJkID0gXCJIYXJkaGF0XCI7XHJcbiAgICBpZiAoYnNjID09IHNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgYnNjVGVzdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocG9seSA9PSBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIHBvbHlUZXN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldGggPT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBldGhUZXN0KCk7XHJcbiAgICAgIHZhciBzTmZ0ID0gZ29lTkZUXHJcbiAgICAgIHZhciBzQ3VzdG9keSA9IGdvZUN1c3RvZHlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGhhcmQgPT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBoYXJkQ2hhaW4oKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJzY3QgPT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBic2NUZXN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChnb2UgPT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBldGhUZXN0KCk7XHJcbiAgICAgIHZhciBzTmZ0ID0gZ29lTkZUXHJcbiAgICAgIHZhciBzQ3VzdG9keSA9IGdvZUN1c3RvZHlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG11bSA9PSBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIHBvbHlUZXN0KCk7XHJcbiAgICB9XHJcbiAgICBnZXRTb3VyY2VOZnQoc05mdCk7XHJcbiAgICBnZXRTb3VyY2VDdXN0b2R5KHNDdXN0b2R5KTtcclxuICAgIHJldHVybiB7c291cmNlTmZ0fVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvdXJjZUNoYWluKCk7XHJcbiAgfSwgW3NlbGVjdGVkXSlcclxucmV0dXJuIChcclxuICA8TmV4dFVJUHJvdmlkZXIgdGhlbWU9e2Ryb3B0aGVtZX0+XHJcblxyXG4gICAgICAgICAgICA8VGV4dCBjc3M9e3ttYjonJDInfX0gaDQ+U291cmNlPC9UZXh0PlxyXG5cclxuICA8RHJvcGRvd24gPlxyXG4gICAgPERyb3Bkb3duLkJ1dHRvblxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICBmbGF0XHJcbiAgICAgIGNzcz17e1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZmZmY1MFwiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBcIjAuOHB4XCIsXHJcbiAgICAgICAgY29sb3I6IFwiV2hpdGVcIixcclxuICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6JzQ1cHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgfX0gXHJcbiAgICA+XHJcbiAgICAgIHtibG9ja0ltYWdlfVxyXG4gICAgPC9Ecm9wZG93bi5CdXR0b24+XHJcbiAgICA8RHJvcGRvd24uTWVudVxyXG4gICAgICBjc3M9e3sgXHJcbiAgICAgIG9wYWNpdHk6JzEwMCUnLCBcclxuICAgICAgYWxpZ25Db250ZW50OidjZW50ZXInLFxyXG4gICAgICB3aWR0aDonNjAwcHgnLFxyXG4gICAgICBkaXNwbGF5OidncmlkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOicjMDAwMDAwMTAnXHJcbiAgICB9fVxyXG4gICAgICBhcmlhLWxhYmVsPVwiU2luZ2xlIHNlbGVjdGlvbiBhY3Rpb25zXCJcclxuICAgICAgZGlzYWxsb3dFbXB0eVNlbGVjdGlvblxyXG4gICAgICBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCJcclxuICAgICAgc2VsZWN0ZWRLZXlzPXtzZWxlY3RlZH1cclxuICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxyXG4gICAgPlxyXG4gICAgICA8RHJvcGRvd24uSXRlbSBpY29uPXs8aW1nIHNyYz0nZXRoZXJldW1sb2dvLnBuZycgd2lkdGg9e1wiMTMwcHhcIn0vPn0ga2V5PVwiRXRoZXJldW1cIj5cclxuICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gIDwvRHJvcGRvd24+XHJcbiAgPC9OZXh0VUlQcm92aWRlcj5cclxuKTtcclxuIFxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYnNjQ2hhaW4iLCJwb2x5Q2hhaW4iLCJldGhDaGFpbiIsImhhcmRDaGFpbiIsImhhcmRDaGFpbmIiLCJic2NUZXN0IiwiZXRoVGVzdCIsInBvbHlUZXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIlJvdyIsIlRleHQiLCJjcmVhdGVUaGVtZSIsIk5leHRVSVByb3ZpZGVyIiwiZ29lTkZUIiwiZ29lQ3VzdG9keSIsImdvZXJwYyIsImJzY3RORlQiLCJic2N0Q3VzdG9keSIsImJzY3RycGMiLCJtdW1ORlQiLCJtdW1DdXN0b2R5IiwibXVtcnBjIiwiZHJvcHRoZW1lIiwidHlwZSIsInRoZW1lIiwiZm9udEZhbWlseSIsImNvbG9ycyIsInByaW1hcnlMaWdodCIsInByaW1hcnlMaWdodEhvdmVyIiwicHJpbWFyeUxpZ2h0QWN0aXZlIiwicHJpbWFyeUxpZ2h0Q29udHJhc3QiLCJwcmltYXJ5IiwicHJpbWFyeUJvcmRlciIsInByaW1hcnlCb3JkZXJIb3ZlciIsInByaW1hcnlTb2xpZEhvdmVyIiwicHJpbWFyeVNvbGlkQ29udHJhc3QiLCJwcmltYXJ5U2hhZG93IiwidHJhbnNwYXJlbnQiLCJkcm9wZG93bkl0ZW1Ib3ZlclRleHRDb2xvciIsImxpbmsiLCJteUNvbG9yIiwic3BhY2UiLCJmb250cyIsInNvdXJjZWJyaWRnZSIsInNvdXJjZU5mdCIsImdldFNvdXJjZU5mdCIsInNvdXJjZUN1c3RvZHkiLCJnZXRTb3VyY2VDdXN0b2R5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIlNldCIsInNlbGVjdGVkVmFsdWUiLCJ1c2VNZW1vIiwiQXJyYXkiLCJmcm9tIiwiam9pbiIsInJlcGxhY2VBbGwiLCJibG9ja0ltYWdlIiwicmVzb2x2ZSIsInJlamVjdCIsImV0aCIsImJzYyIsInBvbCIsImltZyIsInNyYyIsIndpZHRoIiwic291cmNlQ2hhaW4iLCJwb2x5IiwibXVtIiwiYnNjdCIsImdvZSIsImhhcmQiLCJzTmZ0Iiwic0N1c3RvZHkiLCJjc3MiLCJtYiIsImg0IiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJmbGF0IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImNvbG9yIiwibWluSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiTWVudSIsIm9wYWNpdHkiLCJhbGlnbkNvbnRlbnQiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiYXJpYS1sYWJlbCIsImRpc2FsbG93RW1wdHlTZWxlY3Rpb24iLCJzZWxlY3Rpb25Nb2RlIiwic2VsZWN0ZWRLZXlzIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJJdGVtIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/engine/interfaces/sourcebridge.js\n"));

/***/ })

});