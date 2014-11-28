sort-quicksort-asc
==================

## quicksort( arr )

Produces a sorted (ascending) array from an unsorted numeric array using a [quicksort](http://en.wikipedia.org/wiki/Quicksort). 

## Examples

```javascript
// Direct to lib directory
var qsort = require( './../lib' );

// Create some data
var data = new Array( 5 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}

// Print unsorted array for comparison
console.log("Pre-sort:")
for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

// Apply qsort to unsorted array, set output equal to new variable
var data_sorted = qsort( data );

// Print new, sorted array
console.log("Post-sort:")
for ( var i = 0; i < data_sorted.length; i++ ) {
	console.log( data_sorted[i] );
}
```

## Notes

Not in place - original unsorted array is unmodified.

### Performance

## Tests

---
## Copyright

Copyright &copy; 2014. Rebekah Smith.