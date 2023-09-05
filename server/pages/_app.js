"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./src/theme/theme.js
var theme = __webpack_require__(367);
;// CONCATENATED MODULE: ./src/theme/GlobalStyle.js



function GlobalStyle() {
    return jsx_runtime_.jsx((style_default()), {
        id: "d41b2534b25b94c5",
        dynamic: [
            theme/* theme.typography.fontFamily */.r.typography.fontFamily
        ],
        children: `* {box-sizing:border-box;
padding:0;
margin:0}
a {-webkit-text-decoration:none;
text-decoration:none}
body {font-family:${theme/* theme.typography.fontFamily */.r.typography.fontFamily}, sans-serif}
img, video {max-width:100%;
height:auto}
audio, canvas, embed, iframe, img, object, svg, video {display:block;
vertical-align:middle}
.sr-only {position:absolute;
width:1px;
height:1px;
padding:0;
margin:-1px;
overflow:hidden;
clip:rect(0, 0, 0, 0);
border:0}
html {height:100%}
body, #__next {height:100%}
#__next {display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column}
#__next >* {-webkit-flex:1;
-ms-flex:1;
flex:1;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column;
-webkit-box-pack:start;
-ms-flex-pack:start;
-webkit-justify-content:flex-start;
justify-content:flex-start;
-webkit-align-items:stretch;
-webkit-box-align:stretch;
-ms-flex-align:stretch;
align-items:stretch}`
    });
};

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-2QZDPX3BLK"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-2QZDPX3BLK');
                        `
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://polyfill.io/v3/polyfill.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [367], () => (__webpack_exec__(781)));
module.exports = __webpack_exports__;

})();