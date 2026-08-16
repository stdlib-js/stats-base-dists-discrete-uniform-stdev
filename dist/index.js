"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var u=v(function(f,s){
var t=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-special-pow/dist'),i=require('@stdlib/math-base-special-sqrt/dist'),q=i(1/12);function o(e,r){return!t(e)||!t(r)||e>r?NaN:q*i(a(r-e+1,2)-1)}s.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
