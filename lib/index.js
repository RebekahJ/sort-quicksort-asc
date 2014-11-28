/**
*
*	SORT: quicksort
*
*
*	DESCRIPTION:
*		- Performs a quicksort on an unsorted array of numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: quicksort( arr )
*	Sorts array elements into ascending order.
*
* @param {Array} arr - numeric array
*
* Returns new, sorted array. N.B. not sorted in place!
*/
function quicksort( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'quicksort()::invalid input argument. Must provide an array.' );
	}

	function quick( inp ) {

		if ( inp.length === 0 ) {
			return [];
		}

		var lower = [],
			higher = [],
			pivot = inp[0];

		for ( var i = 1; i < inp.length; i++ ) {
			inp[i] < pivot ? lower.push( inp[i] ) : higher.push( inp[i] );
		}

		return quick( lower ).concat( pivot, quick( higher ) );	

	}

	return quick( arr );

} // end FUNCTION quicksort()

// EXPORTS //

module.exports = quicksort;

