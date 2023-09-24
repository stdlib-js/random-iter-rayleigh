// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-rayleigh@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(f,c){var g,v,b,x,y;if(!o(f))throw new TypeError(a("0qR71,NQ",f));if(arguments.length>1){if(!d(c))throw new TypeError(a("0qR2V,FD",c));if(g=i({},c),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0qR2t,G9","iter",g.iter))}else g.iter=h;b=j(f,g),void 0===g.prng&&!1!==g.copy&&(g.state=b.state)}else b=j(f),g={iter:h,state:b.state};return y=0,e(v={},"next",R),e(v,"return",G),g&&g.prng?(e(v,"seed",null),e(v,"seedLength",null),s(v,"state",n(null),r),e(v,"stateLength",null),e(v,"byteLength",null)):(t(v,"seed",N),t(v,"seedLength",P),s(v,"state",E,T),t(v,"stateLength",w),t(v,"byteLength",q)),e(v,"PRNG",b.PRNG),p&&e(v,p,L),v;function R(){return y+=1,x||y>g.iter?{done:!0}:{value:b(),done:!1}}function G(e){return x=!0,arguments.length?{value:e,done:!0}:{done:!0}}function L(){return u(f,g)}function N(){return b.PRNG.seed}function P(){return b.PRNG.seedLength}function w(){return b.PRNG.stateLength}function q(){return b.PRNG.byteLength}function E(){return b.PRNG.state}function T(e){b.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
