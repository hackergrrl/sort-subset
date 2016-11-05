var test = require('tape')
var subsort = require('../')

test('apple and oranges', function (t) {
  t.plan(1)

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

  var expected = [
    { type: 'apple', id: 2 },
    { type: 'apple', id: 7 },
    { type: 'orange', id: 17 },
    { type: 'apple', id: 12 },
    { type: 'orange', id: 9 }
  ]

  t.deepEqual(data, expected)
})
