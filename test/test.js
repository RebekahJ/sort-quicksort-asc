'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	quick = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sort-quicksort-asc', function tests() {

	it( 'should export a function', function test() {
		expect( quick ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				quick( value );
			};
		}
	});

	it( 'should create an array sorted into ascending order', function test() {
		var data, expected, sorted;

		data = [ 14, -7, 4, 76, 30 ];
		expected = [ -7, 4, 14, 30, 76 ];

		// Apply quicksort, creating new, sorted array
		sorted = quick( data );

		for ( var i = 0; i < data.length; i++ ){
			assert.strictEqual( sorted[i], expected[i] );
		}

	});

});
