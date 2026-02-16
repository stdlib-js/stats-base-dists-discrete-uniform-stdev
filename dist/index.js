/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution standard deviation.
*
* @module @stdlib/stats-base-dists-discrete-uniform-stdev
*
* @example
* var stdev = require( '@stdlib/stats-base-dists-discrete-uniform-stdev' );
*
* var v = stdev( 0, 1 );
* // returns ~0.5
*
* v = stdev( 4, 12 );
* // returns ~2.582
*
* v = stdev( 2, 8 );
* // returns 2.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
