# sort-subset

> Sort a subset of an array in-place.

## Usage

Let's sort an array with heterogenous types in-place, without disturbing other
types' sort order.

```js
var subsort = require('sort-subset')

var data = [
  { type: 'apple', id: 7 },
  { type: 'apple', id: 12 },
  { type: 'orange', id: 17 },
  { type: 'apple', id: 2 },
  { type: 'orange', id: 9 }
]

var filter = function (elm) { return elm.type === 'apple' }
var sort = function (a, b) { return a.id - b.id }
subsort(data, filter, sort)

console.log(data)
```

will output

```
[
  { type: 'apple', id: 2 },
  { type: 'apple', id: 7 },
  { type: 'orange', id: 17 },
  { type: 'apple', id: 12 },
  { type: 'orange', id: 9 }
]
```

## API

```js
var subsort = require('sort-subset')
```

### subsort(array, filterFn, compareFn)

Sorts the array `array` in-place. The function `filterFn` is used to compute the
array subset to sort (signature `function (element, idex)`), and `compareFn` is
the function used to compare elements to perform the sort (signature `function
(a, b)`).


## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install sort-subset
```

## License

ISC

