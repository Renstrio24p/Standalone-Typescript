(self["webpackChunkstandalone_typescript"] = self["webpackChunkstandalone_typescript"] || []).push([[132],{

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
async function s(){const t=__webpack_require__(187),e=await Promise.all(t.keys().map(t)),o={};return e.forEach(n=>{const c=n.default?n.default.name:null;c&&(o[c]=n.default)}),o}async function a(){const t=await s(),e=document.querySelectorAll("[component]");for(const o of e){const n=o.getAttribute("component");t[n]?t[n](o):console.warn(`Component ${n} not found.`)}window.addEventListener("DOMContentLoaded",()=>{})}


/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
function o(t){let e=0;const n=r=>{e=r,t.innerHTML=`count is ${e}`};t.addEventListener("click",()=>n(e+1)),n(0)}Object.defineProperty(o,"name",{value:"Counter"});


/***/ }),

/***/ 695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
const{default:s}=await __webpack_require__.e(/* import() */ 263).then(__webpack_require__.bind(__webpack_require__, 263));async function e(a){a.innerHTML=`
        <div class=${s["d-flex-between"]}>
            <span>Version 1.0.4</span>
            <img class=${s.sass_img} src='images/sass.png' alt='sass logo' />
        </div>
        <div class=${s["d-flex-between"]}>
            <img class=${s.github_img} src='images/github.png' alt='github' />
            <span>Codespaces</span>
        </div>
    `}Object.defineProperty(e,"name",{value:"Footer"});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
async function s(t){const e=(await __webpack_require__.e(/* import() */ 263).then(__webpack_require__.bind(__webpack_require__, 263))).default;t.innerHTML=`
        <div class=${e.box}>
            <p>supports ES6+</p>
        </div>
        <div class=${e.box}>
            <p>Modular SCSS</p>
        </div>
        <div class=${e.box}>
            <p>Web Security Features</p>
        </div>
    `}Object.defineProperty(s,"name",{value:"Rows"});


/***/ }),

/***/ 187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Counter.ts": 82,
	"./Footer.ts": 695,
	"./Rows.ts": 747
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 187;

/***/ })

}]);