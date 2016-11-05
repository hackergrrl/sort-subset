module.exports = function (array, filterFn, sortFn) {
  if (!Array.isArray) { throw new Error('"array" must be an array') }
  if (typeof filterFn !== 'function') { throw new Error('"filterFn" must be a function') }
  if (typeof sortFn !== 'function') { throw new Error('"sortFn" must be a function') }

  // build subset array /w mapping back to original array indices
  var subIndices = []
  var indicesIdx = 0
  var subArray = array.filter(function (elm, idx) {
    if (filterFn(elm, idx)) {
      subIndices[indicesIdx++] = idx
      return true
    } else {
      return false
    }
  })

  // perform sort
  subArray.sort(sortFn)

  // perform in-place writes back to original array
  subArray.forEach(function (elm, idx) {
    array[subIndices[idx]] = elm
  })
}
