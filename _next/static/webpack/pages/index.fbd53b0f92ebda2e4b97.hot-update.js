webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");



var _jsxFileName = "F:\\nextjs_landing_page\\src\\components\\header\\header.js",
    _templateObject,
    _header;


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */







function Header(_ref) {
  var _this = this;

  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    href: {
      src: ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (menuItem, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, menuItem.label);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Get Started"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: (_header = {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    boxSizing: "borderBox",
    padding: "0",
    border: "none",
    margin: "auto",
    display: "block",
    width: "0",
    height: "0",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    color: "text",
    fontWeight: "body",
    py: 4
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "width", "100%"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "position", "absolute"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "top", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "left", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "backgroundColor", "transparent"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "transition", "all 0.4s ease"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "animation", "".concat(positionAnim, " 0.4s ease")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, ".donate__btn", {
    flexShrink: 0,
    mr: [15, 20, null, null, 0],
    ml: ["auto", null, null, null, 0]
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, "&.sticky", {
    position: "fixed",
    backgroundColor: "background",
    color: "#000000",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    py: 0,
    "nev > a": {
      color: "text"
    }
  }), _header),
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block"
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary"
      },
      "&.active": {
        color: "primary"
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJzcmMiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsIm1lbnVJdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzVDLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsYUFBUyxFQUFFRixTQUF0QztBQUFpRCxNQUFFLEVBQUMsUUFBcEQ7QUFBNkQsUUFBSSxFQUFFO0FBQUNHLFNBQUcsRUFBQztBQUFMLEtBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUYs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bUMsTUFBRSxFQUFFLE1BREQ7QUFFSGpCLFdBQU8sRUFBRSxNQUZOO0FBR0gsNkNBQXlDO0FBQ3ZDQSxhQUFPLEVBQUU7QUFEOEIsS0FIdEM7QUFNSGtCLEtBQUMsRUFBRTtBQUNEQyxjQUFRLEVBQUUsQ0FEVDtBQUVEWCxnQkFBVSxFQUFFLE1BRlg7QUFHRFksUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURDLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RoQixhQUFLLEVBQUU7QUFERSxPQVBWO0FBVUQsa0JBQVk7QUFDVkEsYUFBSyxFQUFFO0FBREc7QUFWWDtBQU5BO0FBakRRLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJkNTNiMGY5MmViZGEyZTRiOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiY29tcG9uZW50cy9sb2dvXCI7XG5pbXBvcnQgTG9nb0RhcmsgZnJvbSBcImFzc2V0cy9sb2dvLnN2Z1wiO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tIFwiLi9tb2JpbGUtZHJhd2VyXCI7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL2hlYWRlci5kYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCIgaHJlZj17e3NyYzpcIlwifX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30gLz5cbiAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxuICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkdldCBTdGFydGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcjoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBib3R0b206IFwiMFwiLFxuICAgIHJpZ2h0OiBcIjBcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyQm94XCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aWR0aDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjBcIixcbiAgICBtaW5XaWR0aDogXCIxMDAlXCIsXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIG1pbkhlaWdodDogXCIxMDAlXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgZm9udFdlaWdodDogXCJib2R5XCIsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC40cyBlYXNlXCIsXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXG4gICAgXCIuZG9uYXRlX19idG5cIjoge1xuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcbiAgICAgIG1sOiBbXCJhdXRvXCIsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gICAgXCImLnN0aWNreVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmRcIixcbiAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KVwiLFxuICAgICAgcHk6IDAsXG4gICAgICBcIm5ldiA+IGFcIjoge1xuICAgICAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpXCI6IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXG4gICAgICBweDogNSxcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4xNXNcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIH0sXG4gICAgICBcIiYuYWN0aXZlXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=