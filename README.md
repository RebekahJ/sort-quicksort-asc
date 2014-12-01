sort-quicksort-asc
==================
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

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

For an unsorted array of size n, the time to sort the array using bubble sort is:

| *n*	        | *Time (ms)*   |
| --------------| :------------:|
| 5             |               |
| 50            |               |
| 500           |               |
| 5000          |               |
| 50000         |               |

## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.

[travis-image]: http://img.shields.io/travis/RebekahJ/sort-quicksort-asc/master.svg
[travis-url]: https://travis-ci.org/RebekahJ/sort-quicksort-asc

[coveralls-image]: https://img.shields.io/coveralls/RebekahJ/sort-quicksort-asc/master.svg
[coveralls-url]: https://coveralls.io/r/RebekahJ/sort-quicksort-asc?branch=master
