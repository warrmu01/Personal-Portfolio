"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/particles.tsx":
/*!**************************************!*\
  !*** ./app/components/particles.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Particles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.6_@opentelemetry+api@1.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.6_@opentelemetry+api@1.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/mouse */ \"(app-pages-browser)/./util/mouse.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Particles(param) {\n    let { className = \"\", quantity = 1000, staticity = 100, ease = 50, refresh = false } = param;\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const canvasContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const circles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const mousePosition = (0,_util_mouse__WEBPACK_IMPORTED_MODULE_2__.useMousePosition)();\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const canvasSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        w: 0,\n        h: 0\n    });\n    const dpr =  true ? window.devicePixelRatio : 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (canvasRef.current) {\n            context.current = canvasRef.current.getContext(\"2d\");\n        }\n        initCanvas();\n        animate();\n        window.addEventListener(\"resize\", initCanvas);\n        return ()=>{\n            window.removeEventListener(\"resize\", initCanvas);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        onMouseMove();\n    }, [\n        mousePosition.x,\n        mousePosition.y\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initCanvas();\n    }, [\n        refresh\n    ]);\n    const initCanvas = ()=>{\n        resizeCanvas();\n        drawParticles();\n    };\n    const onMouseMove = ()=>{\n        if (canvasRef.current) {\n            const rect = canvasRef.current.getBoundingClientRect();\n            const { w, h } = canvasSize.current;\n            const x = mousePosition.x - rect.left - w / 2;\n            const y = mousePosition.y - rect.top - h / 2;\n            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;\n            if (inside) {\n                mouse.current.x = x;\n                mouse.current.y = y;\n            }\n        }\n    };\n    const resizeCanvas = ()=>{\n        if (canvasContainerRef.current && canvasRef.current && context.current) {\n            circles.current.length = 0;\n            canvasSize.current.w = canvasContainerRef.current.offsetWidth;\n            canvasSize.current.h = canvasContainerRef.current.offsetHeight;\n            canvasRef.current.width = canvasSize.current.w * dpr;\n            canvasRef.current.height = canvasSize.current.h * dpr;\n            canvasRef.current.style.width = \"\".concat(canvasSize.current.w, \"px\");\n            canvasRef.current.style.height = \"\".concat(canvasSize.current.h, \"px\");\n            context.current.scale(dpr, dpr);\n        }\n    };\n    const circleParams = ()=>{\n        const x = Math.floor(Math.random() * canvasSize.current.w);\n        const y = Math.floor(Math.random() * canvasSize.current.h);\n        const translateX = 0;\n        const translateY = 0;\n        const size = Math.floor(Math.random() * 2) + 0.1;\n        const alpha = 0;\n        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));\n        const dx = (Math.random() - 0.5) * 0.2;\n        const dy = (Math.random() - 0.5) * 0.2;\n        const magnetism = 0.1 + Math.random() * 4;\n        return {\n            x,\n            y,\n            translateX,\n            translateY,\n            size,\n            alpha,\n            targetAlpha,\n            dx,\n            dy,\n            magnetism\n        };\n    };\n    const drawCircle = function(circle) {\n        let update = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        if (context.current) {\n            const { x, y, translateX, translateY, size, alpha } = circle;\n            context.current.translate(translateX, translateY);\n            context.current.beginPath();\n            context.current.arc(x, y, size, 0, 2 * Math.PI);\n            context.current.fillStyle = \"rgba(255, 255, 255, \".concat(alpha, \")\");\n            context.current.fill();\n            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);\n            if (!update) {\n                circles.current.push(circle);\n            }\n        }\n    };\n    const clearContext = ()=>{\n        if (context.current) {\n            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);\n        }\n    };\n    const drawParticles = ()=>{\n        clearContext();\n        const particleCount = quantity;\n        for(let i = 0; i < particleCount; i++){\n            const circle = circleParams();\n            drawCircle(circle);\n        }\n    };\n    const remapValue = (value, start1, end1, start2, end2)=>{\n        const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;\n        return remapped > 0 ? remapped : 0;\n    };\n    const animate = ()=>{\n        clearContext();\n        circles.current.forEach((circle, i)=>{\n            // Handle the alpha value\n            const edge = [\n                circle.x + circle.translateX - circle.size,\n                canvasSize.current.w - circle.x - circle.translateX - circle.size,\n                circle.y + circle.translateY - circle.size,\n                canvasSize.current.h - circle.y - circle.translateY - circle.size\n            ];\n            const closestEdge = edge.reduce((a, b)=>Math.min(a, b));\n            const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));\n            if (remapClosestEdge > 1) {\n                circle.alpha += 0.02;\n                if (circle.alpha > circle.targetAlpha) {\n                    circle.alpha = circle.targetAlpha;\n                }\n            } else {\n                circle.alpha = circle.targetAlpha * remapClosestEdge;\n            }\n            circle.x += circle.dx;\n            circle.y += circle.dy;\n            circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;\n            circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;\n            // circle gets out of the canvas\n            if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {\n                // remove the circle from the array\n                circles.current.splice(i, 1);\n                // create a new circle\n                const newCircle = circleParams();\n                drawCircle(newCircle);\n            // update the circle position\n            } else {\n                drawCircle({\n                    ...circle,\n                    x: circle.x,\n                    y: circle.y,\n                    translateX: circle.translateX,\n                    translateY: circle.translateY,\n                    alpha: circle.alpha\n                }, true);\n            }\n        });\n        window.requestAnimationFrame(animate);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        ref: canvasContainerRef,\n        \"aria-hidden\": \"true\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef\n        }, void 0, false, {\n            fileName: \"/Users/m.mughees/Desktop/Personal-Portfolio/app/components/particles.tsx\",\n            lineNumber: 231,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/m.mughees/Desktop/Personal-Portfolio/app/components/particles.tsx\",\n        lineNumber: 230,\n        columnNumber: 3\n    }, this);\n}\n_s(Particles, \"PXFWNhOiZ9wLPD/Efwl/ee6MVuU=\", false, function() {\n    return [\n        _util_mouse__WEBPACK_IMPORTED_MODULE_2__.useMousePosition\n    ];\n});\n_c = Particles;\nvar _c;\n$RefreshReg$(_c, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3BhcnRpY2xlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUyRDtBQUNYO0FBVWpDLFNBQVNJLFVBQVUsS0FNakI7UUFOaUIsRUFDakNDLFlBQVksRUFBRSxFQUNkQyxXQUFXLElBQUksRUFDZkMsWUFBWSxHQUFHLEVBQ2ZDLE9BQU8sRUFBRSxFQUNUQyxVQUFVLEtBQUssRUFDQyxHQU5pQjs7SUFPakMsTUFBTUMsWUFBWVQsNkNBQU1BLENBQW9CO0lBQzVDLE1BQU1VLHFCQUFxQlYsNkNBQU1BLENBQWlCO0lBQ2xELE1BQU1XLFVBQVVYLDZDQUFNQSxDQUFrQztJQUN4RCxNQUFNWSxVQUFVWiw2Q0FBTUEsQ0FBUSxFQUFFO0lBQ2hDLE1BQU1hLGdCQUFnQlgsNkRBQWdCQTtJQUN0QyxNQUFNWSxRQUFRZCw2Q0FBTUEsQ0FBMkI7UUFBRWUsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDNUQsTUFBTUMsYUFBYWpCLDZDQUFNQSxDQUEyQjtRQUFFa0IsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDakUsTUFBTUMsTUFBTSxLQUE2QixHQUFHQyxPQUFPQyxnQkFBZ0IsR0FBRyxDQUFDO0lBRXZFckIsZ0RBQVNBLENBQUM7UUFDVCxJQUFJUSxVQUFVYyxPQUFPLEVBQUU7WUFDdEJaLFFBQVFZLE9BQU8sR0FBR2QsVUFBVWMsT0FBTyxDQUFDQyxVQUFVLENBQUM7UUFDaEQ7UUFDQUM7UUFDQUM7UUFDQUwsT0FBT00sZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTztZQUNOSixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVSDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMeEIsZ0RBQVNBLENBQUM7UUFDVDRCO0lBQ0QsR0FBRztRQUFDaEIsY0FBY0UsQ0FBQztRQUFFRixjQUFjRyxDQUFDO0tBQUM7SUFFckNmLGdEQUFTQSxDQUFDO1FBQ1R3QjtJQUNELEdBQUc7UUFBQ2pCO0tBQVE7SUFFWixNQUFNaUIs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QUFJVixDQUFBQSxZQUFZcUQsT0FBT0YsU0FBUyxJQUFJRSxPQUFPVixVQUFVLElBQ3JFMUM7WUFDRCxnQ0FBZ0M7WUFDaEMsSUFDQ29ELE9BQU81QyxDQUFDLEdBQUcsQ0FBQzRDLE9BQU9ULElBQUksSUFDdkJTLE9BQU81QyxDQUFDLEdBQUdFLFdBQVdNLE9BQU8sQ0FBQ0wsQ0FBQyxHQUFHeUMsT0FBT1QsSUFBSSxJQUM3Q1MsT0FBTzNDLENBQUMsR0FBRyxDQUFDMkMsT0FBT1QsSUFBSSxJQUN2QlMsT0FBTzNDLENBQUMsR0FBR0MsV0FBV00sT0FBTyxDQUFDSixDQUFDLEdBQUd3QyxPQUFPVCxJQUFJLEVBQzVDO2dCQUNELG1DQUFtQztnQkFDbkN0QyxRQUFRVyxPQUFPLENBQUNpRSxNQUFNLENBQUNoQixHQUFHO2dCQUMxQixzQkFBc0I7Z0JBQ3RCLE1BQU1pQixZQUFZN0M7Z0JBQ2xCYyxXQUFXK0I7WUFDWCw2QkFBNkI7WUFDOUIsT0FBTztnQkFDTi9CLFdBQ0M7b0JBQ0MsR0FBR0MsTUFBTTtvQkFDVDVDLEdBQUc0QyxPQUFPNUMsQ0FBQztvQkFDWEMsR0FBRzJDLE9BQU8zQyxDQUFDO29CQUNYZ0MsWUFBWVcsT0FBT1gsVUFBVTtvQkFDN0JDLFlBQVlVLE9BQU9WLFVBQVU7b0JBQzdCRSxPQUFPUSxPQUFPUixLQUFLO2dCQUNwQixHQUNBO1lBRUY7UUFDRDtRQUNBOUIsT0FBT3FFLHFCQUFxQixDQUFDaEU7SUFDOUI7SUFFQSxxQkFDQyw4REFBQ2lFO1FBQUl2RixXQUFXQTtRQUFXd0YsS0FBS2xGO1FBQW9CbUYsZUFBWTtrQkFDL0QsNEVBQUNDO1lBQU9GLEtBQUtuRjs7Ozs7Ozs7Ozs7QUFHaEI7R0E1TndCTjs7UUFXREQseURBQWdCQTs7O0tBWGZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3BhcnRpY2xlcy50c3g/NGJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTW91c2VQb3NpdGlvbiB9IGZyb20gXCJAL3V0aWwvbW91c2VcIjtcblxuaW50ZXJmYWNlIFBhcnRpY2xlc1Byb3BzIHtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHRxdWFudGl0eT86IG51bWJlcjtcblx0c3RhdGljaXR5PzogbnVtYmVyO1xuXHRlYXNlPzogbnVtYmVyO1xuXHRyZWZyZXNoPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydGljbGVzKHtcblx0Y2xhc3NOYW1lID0gXCJcIixcblx0cXVhbnRpdHkgPSAxMDAwLFxuXHRzdGF0aWNpdHkgPSAxMDAsXG5cdGVhc2UgPSA1MCxcblx0cmVmcmVzaCA9IGZhbHNlLFxufTogUGFydGljbGVzUHJvcHMpIHtcblx0Y29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblx0Y29uc3QgY2FudmFzQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblx0Y29uc3QgY29udGV4dCA9IHVzZVJlZjxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsPihudWxsKTtcblx0Y29uc3QgY2lyY2xlcyA9IHVzZVJlZjxhbnlbXT4oW10pO1xuXHRjb25zdCBtb3VzZVBvc2l0aW9uID0gdXNlTW91c2VQb3NpdGlvbigpO1xuXHRjb25zdCBtb3VzZSA9IHVzZVJlZjx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KHsgeDogMCwgeTogMCB9KTtcblx0Y29uc3QgY2FudmFzU2l6ZSA9IHVzZVJlZjx7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0+KHsgdzogMCwgaDogMCB9KTtcblx0Y29uc3QgZHByID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChjYW52YXNSZWYuY3VycmVudCkge1xuXHRcdFx0Y29udGV4dC5jdXJyZW50ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdH1cblx0XHRpbml0Q2FudmFzKCk7XG5cdFx0YW5pbWF0ZSgpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRDYW52YXMpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRDYW52YXMpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdG9uTW91c2VNb3ZlKCk7XG5cdH0sIFttb3VzZVBvc2l0aW9uLngsIG1vdXNlUG9zaXRpb24ueV0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aW5pdENhbnZhcygpO1xuXHR9LCBbcmVmcmVzaF0pO1xuXG5cdGNvbnN0IGluaXRDYW52YXMgPSAoKSA9PiB7XG5cdFx0cmVzaXplQ2FudmFzKCk7XG5cdFx0ZHJhd1BhcnRpY2xlcygpO1xuXHR9O1xuXG5cdGNvbnN0IG9uTW91c2VNb3ZlID0gKCkgPT4ge1xuXHRcdGlmIChjYW52YXNSZWYuY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVjdCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgeyB3LCBoIH0gPSBjYW52YXNTaXplLmN1cnJlbnQ7XG5cdFx0XHRjb25zdCB4ID0gbW91c2VQb3NpdGlvbi54IC0gcmVjdC5sZWZ0IC0gdyAvIDI7XG5cdFx0XHRjb25zdCB5ID0gbW91c2VQb3NpdGlvbi55IC0gcmVjdC50b3AgLSBoIC8gMjtcblx0XHRcdGNvbnN0IGluc2lkZSA9IHggPCB3IC8gMiAmJiB4ID4gLXcgLyAyICYmIHkgPCBoIC8gMiAmJiB5ID4gLWggLyAyO1xuXHRcdFx0aWYgKGluc2lkZSkge1xuXHRcdFx0XHRtb3VzZS5jdXJyZW50LnggPSB4O1xuXHRcdFx0XHRtb3VzZS5jdXJyZW50LnkgPSB5O1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR0eXBlIENpcmNsZSA9IHtcblx0XHR4OiBudW1iZXI7XG5cdFx0eTogbnVtYmVyO1xuXHRcdHRyYW5zbGF0ZVg6IG51bWJlcjtcblx0XHR0cmFuc2xhdGVZOiBudW1iZXI7XG5cdFx0c2l6ZTogbnVtYmVyO1xuXHRcdGFscGhhOiBudW1iZXI7XG5cdFx0dGFyZ2V0QWxwaGE6IG51bWJlcjtcblx0XHRkeDogbnVtYmVyO1xuXHRcdGR5OiBudW1iZXI7XG5cdFx0bWFnbmV0aXNtOiBudW1iZXI7XG5cdH07XG5cblx0Y29uc3QgcmVzaXplQ2FudmFzID0gKCkgPT4ge1xuXHRcdGlmIChjYW52YXNDb250YWluZXJSZWYuY3VycmVudCAmJiBjYW52YXNSZWYuY3VycmVudCAmJiBjb250ZXh0LmN1cnJlbnQpIHtcblx0XHRcdGNpcmNsZXMuY3VycmVudC5sZW5ndGggPSAwO1xuXHRcdFx0Y2FudmFzU2l6ZS5jdXJyZW50LncgPSBjYW52YXNDb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdGNhbnZhc1NpemUuY3VycmVudC5oID0gY2FudmFzQ29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0Y2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSBjYW52YXNTaXplLmN1cnJlbnQudyAqIGRwcjtcblx0XHRcdGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGNhbnZhc1NpemUuY3VycmVudC5oICogZHByO1xuXHRcdFx0Y2FudmFzUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtjYW52YXNTaXplLmN1cnJlbnQud31weGA7XG5cdFx0XHRjYW52YXNSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtjYW52YXNTaXplLmN1cnJlbnQuaH1weGA7XG5cdFx0XHRjb250ZXh0LmN1cnJlbnQuc2NhbGUoZHByLCBkcHIpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaXJjbGVQYXJhbXMgPSAoKTogQ2lyY2xlID0+IHtcblx0XHRjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FudmFzU2l6ZS5jdXJyZW50LncpO1xuXHRcdGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXNTaXplLmN1cnJlbnQuaCk7XG5cdFx0Y29uc3QgdHJhbnNsYXRlWCA9IDA7XG5cdFx0Y29uc3QgdHJhbnNsYXRlWSA9IDA7XG5cdFx0Y29uc3Qgc2l6ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMC4xO1xuXHRcdGNvbnN0IGFscGhhID0gMDtcblx0XHRjb25zdCB0YXJnZXRBbHBoYSA9IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAwLjYgKyAwLjEpLnRvRml4ZWQoMSkpO1xuXHRcdGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4yO1xuXHRcdGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4yO1xuXHRcdGNvbnN0IG1hZ25ldGlzbSA9IDAuMSArIE1hdGgucmFuZG9tKCkgKiA0O1xuXHRcdHJldHVybiB7XG5cdFx0XHR4LFxuXHRcdFx0eSxcblx0XHRcdHRyYW5zbGF0ZVgsXG5cdFx0XHR0cmFuc2xhdGVZLFxuXHRcdFx0c2l6ZSxcblx0XHRcdGFscGhhLFxuXHRcdFx0dGFyZ2V0QWxwaGEsXG5cdFx0XHRkeCxcblx0XHRcdGR5LFxuXHRcdFx0bWFnbmV0aXNtLFxuXHRcdH07XG5cdH07XG5cblx0Y29uc3QgZHJhd0NpcmNsZSA9IChjaXJjbGU6IENpcmNsZSwgdXBkYXRlID0gZmFsc2UpID0+IHtcblx0XHRpZiAoY29udGV4dC5jdXJyZW50KSB7XG5cdFx0XHRjb25zdCB7IHgsIHksIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNpemUsIGFscGhhIH0gPSBjaXJjbGU7XG5cdFx0XHRjb250ZXh0LmN1cnJlbnQudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpO1xuXHRcdFx0Y29udGV4dC5jdXJyZW50LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y29udGV4dC5jdXJyZW50LmFyYyh4LCB5LCBzaXplLCAwLCAyICogTWF0aC5QSSk7XG5cdFx0XHRjb250ZXh0LmN1cnJlbnQuZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHthbHBoYX0pYDtcblx0XHRcdGNvbnRleHQuY3VycmVudC5maWxsKCk7XG5cdFx0XHRjb250ZXh0LmN1cnJlbnQuc2V0VHJhbnNmb3JtKGRwciwgMCwgMCwgZHByLCAwLCAwKTtcblxuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0Y2lyY2xlcy5jdXJyZW50LnB1c2goY2lyY2xlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2xlYXJDb250ZXh0ID0gKCkgPT4ge1xuXHRcdGlmIChjb250ZXh0LmN1cnJlbnQpIHtcblx0XHRcdGNvbnRleHQuY3VycmVudC5jbGVhclJlY3QoXG5cdFx0XHRcdDAsXG5cdFx0XHRcdDAsXG5cdFx0XHRcdGNhbnZhc1NpemUuY3VycmVudC53LFxuXHRcdFx0XHRjYW52YXNTaXplLmN1cnJlbnQuaCxcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGRyYXdQYXJ0aWNsZXMgPSAoKSA9PiB7XG5cdFx0Y2xlYXJDb250ZXh0KCk7XG5cdFx0Y29uc3QgcGFydGljbGVDb3VudCA9IHF1YW50aXR5O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVDb3VudDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjaXJjbGUgPSBjaXJjbGVQYXJhbXMoKTtcblx0XHRcdGRyYXdDaXJjbGUoY2lyY2xlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVtYXBWYWx1ZSA9IChcblx0XHR2YWx1ZTogbnVtYmVyLFxuXHRcdHN0YXJ0MTogbnVtYmVyLFxuXHRcdGVuZDE6IG51bWJlcixcblx0XHRzdGFydDI6IG51bWJlcixcblx0XHRlbmQyOiBudW1iZXIsXG5cdCk6IG51bWJlciA9PiB7XG5cdFx0Y29uc3QgcmVtYXBwZWQgPVxuXHRcdFx0KCh2YWx1ZSAtIHN0YXJ0MSkgKiAoZW5kMiAtIHN0YXJ0MikpIC8gKGVuZDEgLSBzdGFydDEpICsgc3RhcnQyO1xuXHRcdHJldHVybiByZW1hcHBlZCA+IDAgPyByZW1hcHBlZCA6IDA7XG5cdH07XG5cblx0Y29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcblx0XHRjbGVhckNvbnRleHQoKTtcblx0XHRjaXJjbGVzLmN1cnJlbnQuZm9yRWFjaCgoY2lyY2xlOiBDaXJjbGUsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0Ly8gSGFuZGxlIHRoZSBhbHBoYSB2YWx1ZVxuXHRcdFx0Y29uc3QgZWRnZSA9IFtcblx0XHRcdFx0Y2lyY2xlLnggKyBjaXJjbGUudHJhbnNsYXRlWCAtIGNpcmNsZS5zaXplLCAvLyBkaXN0YW5jZSBmcm9tIGxlZnQgZWRnZVxuXHRcdFx0XHRjYW52YXNTaXplLmN1cnJlbnQudyAtIGNpcmNsZS54IC0gY2lyY2xlLnRyYW5zbGF0ZVggLSBjaXJjbGUuc2l6ZSwgLy8gZGlzdGFuY2UgZnJvbSByaWdodCBlZGdlXG5cdFx0XHRcdGNpcmNsZS55ICsgY2lyY2xlLnRyYW5zbGF0ZVkgLSBjaXJjbGUuc2l6ZSwgLy8gZGlzdGFuY2UgZnJvbSB0b3AgZWRnZVxuXHRcdFx0XHRjYW52YXNTaXplLmN1cnJlbnQuaCAtIGNpcmNsZS55IC0gY2lyY2xlLnRyYW5zbGF0ZVkgLSBjaXJjbGUuc2l6ZSwgLy8gZGlzdGFuY2UgZnJvbSBib3R0b20gZWRnZVxuXHRcdFx0XTtcblx0XHRcdGNvbnN0IGNsb3Nlc3RFZGdlID0gZWRnZS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIpKTtcblx0XHRcdGNvbnN0IHJlbWFwQ2xvc2VzdEVkZ2UgPSBwYXJzZUZsb2F0KFxuXHRcdFx0XHRyZW1hcFZhbHVlKGNsb3Nlc3RFZGdlLCAwLCAyMCwgMCwgMSkudG9GaXhlZCgyKSxcblx0XHRcdCk7XG5cdFx0XHRpZiAocmVtYXBDbG9zZXN0RWRnZSA+IDEpIHtcblx0XHRcdFx0Y2lyY2xlLmFscGhhICs9IDAuMDI7XG5cdFx0XHRcdGlmIChjaXJjbGUuYWxwaGEgPiBjaXJjbGUudGFyZ2V0QWxwaGEpIHtcblx0XHRcdFx0XHRjaXJjbGUuYWxwaGEgPSBjaXJjbGUudGFyZ2V0QWxwaGE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNpcmNsZS5hbHBoYSA9IGNpcmNsZS50YXJnZXRBbHBoYSAqIHJlbWFwQ2xvc2VzdEVkZ2U7XG5cdFx0XHR9XG5cdFx0XHRjaXJjbGUueCArPSBjaXJjbGUuZHg7XG5cdFx0XHRjaXJjbGUueSArPSBjaXJjbGUuZHk7XG5cdFx0XHRjaXJjbGUudHJhbnNsYXRlWCArPVxuXHRcdFx0XHQobW91c2UuY3VycmVudC54IC8gKHN0YXRpY2l0eSAvIGNpcmNsZS5tYWduZXRpc20pIC0gY2lyY2xlLnRyYW5zbGF0ZVgpIC9cblx0XHRcdFx0ZWFzZTtcblx0XHRcdGNpcmNsZS50cmFuc2xhdGVZICs9XG5cdFx0XHRcdChtb3VzZS5jdXJyZW50LnkgLyAoc3RhdGljaXR5IC8gY2lyY2xlLm1hZ25ldGlzbSkgLSBjaXJjbGUudHJhbnNsYXRlWSkgL1xuXHRcdFx0XHRlYXNlO1xuXHRcdFx0Ly8gY2lyY2xlIGdldHMgb3V0IG9mIHRoZSBjYW52YXNcblx0XHRcdGlmIChcblx0XHRcdFx0Y2lyY2xlLnggPCAtY2lyY2xlLnNpemUgfHxcblx0XHRcdFx0Y2lyY2xlLnggPiBjYW52YXNTaXplLmN1cnJlbnQudyArIGNpcmNsZS5zaXplIHx8XG5cdFx0XHRcdGNpcmNsZS55IDwgLWNpcmNsZS5zaXplIHx8XG5cdFx0XHRcdGNpcmNsZS55ID4gY2FudmFzU2l6ZS5jdXJyZW50LmggKyBjaXJjbGUuc2l6ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIHJlbW92ZSB0aGUgY2lyY2xlIGZyb20gdGhlIGFycmF5XG5cdFx0XHRcdGNpcmNsZXMuY3VycmVudC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBjaXJjbGVcblx0XHRcdFx0Y29uc3QgbmV3Q2lyY2xlID0gY2lyY2xlUGFyYW1zKCk7XG5cdFx0XHRcdGRyYXdDaXJjbGUobmV3Q2lyY2xlKTtcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjaXJjbGUgcG9zaXRpb25cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRyYXdDaXJjbGUoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Li4uY2lyY2xlLFxuXHRcdFx0XHRcdFx0eDogY2lyY2xlLngsXG5cdFx0XHRcdFx0XHR5OiBjaXJjbGUueSxcblx0XHRcdFx0XHRcdHRyYW5zbGF0ZVg6IGNpcmNsZS50cmFuc2xhdGVYLFxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlWTogY2lyY2xlLnRyYW5zbGF0ZVksXG5cdFx0XHRcdFx0XHRhbHBoYTogY2lyY2xlLmFscGhhLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXtjYW52YXNDb250YWluZXJSZWZ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0PGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZU1vdXNlUG9zaXRpb24iLCJQYXJ0aWNsZXMiLCJjbGFzc05hbWUiLCJxdWFudGl0eSIsInN0YXRpY2l0eSIsImVhc2UiLCJyZWZyZXNoIiwiY2FudmFzUmVmIiwiY2FudmFzQ29udGFpbmVyUmVmIiwiY29udGV4dCIsImNpcmNsZXMiLCJtb3VzZVBvc2l0aW9uIiwibW91c2UiLCJ4IiwieSIsImNhbnZhc1NpemUiLCJ3IiwiaCIsImRwciIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImluaXRDYW52YXMiLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsInJlc2l6ZUNhbnZhcyIsImRyYXdQYXJ0aWNsZXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInRvcCIsImluc2lkZSIsImxlbmd0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInNjYWxlIiwiY2lyY2xlUGFyYW1zIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzaXplIiwiYWxwaGEiLCJ0YXJnZXRBbHBoYSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZHgiLCJkeSIsIm1hZ25ldGlzbSIsImRyYXdDaXJjbGUiLCJjaXJjbGUiLCJ1cGRhdGUiLCJ0cmFuc2xhdGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJzZXRUcmFuc2Zvcm0iLCJwdXNoIiwiY2xlYXJDb250ZXh0IiwiY2xlYXJSZWN0IiwicGFydGljbGVDb3VudCIsImkiLCJyZW1hcFZhbHVlIiwidmFsdWUiLCJzdGFydDEiLCJlbmQxIiwic3RhcnQyIiwiZW5kMiIsInJlbWFwcGVkIiwiZm9yRWFjaCIsImVkZ2UiLCJjbG9zZXN0RWRnZSIsInJlZHVjZSIsImEiLCJiIiwibWluIiwicmVtYXBDbG9zZXN0RWRnZSIsInNwbGljZSIsIm5ld0NpcmNsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpdiIsInJlZiIsImFyaWEtaGlkZGVuIiwiY2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/particles.tsx\n"));

/***/ })

});