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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsIm1lbnVJdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzVDLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsYUFBUyxFQUFFRixTQUF0QztBQUFpRCxNQUFFLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNFLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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eUM7QUFDdkNBLGFBQU8sRUFBRTtBQUQ4QixLQUh0QztBQU1Ia0IsS0FBQyxFQUFFO0FBQ0RDLGNBQVEsRUFBRSxDQURUO0FBRURYLGdCQUFVLEVBQUUsTUFGWDtBQUdEWSxRQUFFLEVBQUUsQ0FISDtBQUlEQyxZQUFNLEVBQUUsU0FKUDtBQUtEQyxnQkFBVSxFQUFFLEtBTFg7QUFNREMsZ0JBQVUsRUFBRSxXQU5YO0FBT0QsaUJBQVc7QUFDVGhCLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkE7QUFqRFEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjdlODMwN2VmZmE4MjE3MjM0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL2xvZ29cIjtcbmltcG9ydCBMb2dvRGFyayBmcm9tIFwiYXNzZXRzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gXCIuL21vYmlsZS1kcmF3ZXJcIjtcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vaGVhZGVyLmRhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TG9nbyBzcmM9e0xvZ29EYXJrfSAvPlxuICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgobWVudUl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgdG89e21lbnVJdGVtLnBhdGh9XG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgcmlnaHQ6IFwiMFwiLFxuICAgIGJveFNpemluZzogXCJib3JkZXJCb3hcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdpZHRoOiBcIjBcIixcbiAgICBoZWlnaHQ6IFwiMFwiLFxuICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMCVcIixcbiAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICBweTogNCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjRzIGVhc2VcIixcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICBcIi5kb25hdGVfX2J0blwiOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgICBcIiYuc3RpY2t5XCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgICBweTogMCxcbiAgICAgIFwibmV2ID4gYVwiOiB7XG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIH0sXG4gIG5hdjoge1xuICAgIG14OiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgfSxcbiAgICAgIFwiJi5hY3RpdmVcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==