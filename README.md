<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Standard Deviation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Discrete uniform][discrete-uniform-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_standard_deviation" align="center" raw="\operatorname{SD}\left( X \right) = \sqrt{ \frac{\left( b - a + 1 \right)^2 - 1}{12} }" alt="Standard deviation for a discrete uniform distribution."> -->

```math
\mathop{\mathrm{SD}}\left( X \right) = \sqrt{ \frac{\left( b - a + 1 \right)^2 - 1}{12} }
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{SD}\left( X \right) = \sqrt{ \frac{\left( b - a + 1 \right)^2 - 1}{12} }" data-equation="eq:discrete_uniform_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/stdev/docs/img/equation_discrete_uniform_standard_deviation.svg" alt="Standard deviation for a discrete uniform distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` the maximum support of the distribution.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
stdev = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-stdev@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var stdev = require( 'path/to/vendor/umd/stats-base-dists-discrete-uniform-stdev/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-stdev@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.stdev;
})();
</script>
```

#### stdev( a, b )

Returns the [standard deviation][standard-deviation] of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var v = stdev( 0, 1 );
// returns ~0.5

v = stdev( 4, 12 );
// returns ~2.582

v = stdev( -4, 4 );
// returns ~2.582
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var v = stdev( 0.1, 2 );
// returns NaN

v = stdev( 0, 2.2 );
// returns NaN

v = stdev( NaN, 2 );
// returns NaN

v = stdev( 2, NaN );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var v = stdev( 3, 2 );
// returns NaN

v = stdev( -1, -2 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-stdev@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randa();
    b = randb( a, a+randa() );
    v = stdev( a, b );
    console.log( 'a: %d, b: %d, SD(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-stdev

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-stdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-stdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/blob/main/branches.md

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
