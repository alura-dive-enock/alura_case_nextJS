"use strict";
exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);



function Footer() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        as: "footer",
        styleSheet: {
            backgroundColor: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.colors.neutral[900] */ .r.colors.neutral[900]
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
            styleSheet: {
                overflow: "hidden",
                maxWidth: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.xcontainer_xl */ .r.space.xcontainer_xl,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: {
                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x12 */ .r.space.x12
                },
                paddingHorizontal: {
                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x4 */ .r.space.x4,
                    sm: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x6 */ .r.space.x6,
                    lg: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x8 */ .r.space.x8
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                as: "p",
                styleSheet: {
                    textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.typography.variants.body3 */ .r.typography.variants.body3,
                    textAlign: "center",
                    color: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.colors.neutral[400] */ .r.colors.neutral[400]
                },
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " DevSoutinho & Enock. Todos os direitos reservados."
                ]
            })
        })
    }));
};


/***/ })

};
;