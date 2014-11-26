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
* Modifies input array arr
*/
function quicksort( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'quicksort()::invalid input argument. Must provide an array.' );
	}

	return;

} // end FUNCTION quicksort()

// EXPORTS //

module.exports = quicksort;

