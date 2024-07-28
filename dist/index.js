"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(f,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-sqrt/dist'),q=s(1/12);function o(e,r){return i(e)||i(r)||!t(e)||!t(r)||e>r?NaN:q*s(a(r-e+1,2)-1)}u.exports=o
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
