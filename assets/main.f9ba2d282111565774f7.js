(()=>{"use strict";var e,t,r,n={253:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),i.push([e.id,'*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;list-style:none;transition:all .9s}html{font-family:"Poppins"}',""]);const s=i},640:(e,t,r)=>{var n=r(379),o=r.n(n),a=r(795),i=r.n(a),s=r(569),l=r.n(s),d=r(565),c=r.n(d),u=r(216),f=r.n(u),p=r(589),b=r.n(p),h=r(253),v={};v.styleTagTransform=b(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const m=document.querySelector("#app");Promise.all([(async()=>(await r.e(221).then(r.bind(r,221))).default)(),(async()=>(await r.e(593).then(r.bind(r,593))).default)()]).then((([e,t])=>{m.id=t(),e(m)}))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"assets/"+e+"."+{221:"1ec573d08e3a2568bc47",249:"0c3f3d99a0c730a1c2f0",530:"974e1626e59fa4b42afb",568:"9ba608fe840cfa86c751",593:"9e02e046a4c49799f854",844:"cdef40146c07f31ad26f",992:"92f31b281b55fb8d3522"}[e]+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="standalone-typescript:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var s,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+o),s.src=e),t[e]=[n];var f=(r,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),s=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,s,l]=r,d=0;if(i.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var c=l(a)}for(t&&t(r);d<i.length;d++)o=i[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self.webpackChunkstandalone_typescript=self.webpackChunkstandalone_typescript||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[216],(()=>a(640)));i=a.O(i)})();