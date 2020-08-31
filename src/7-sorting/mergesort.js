import { testSort } from './sort-test.js'

const merge = (array, lo, mid, hi) => {
  const sortedArray = []
  const leftArray = array.slice(lo, mid + 1)
  const rightArray = array.slice(mid + 1, hi + 1)

  while (leftArray.length > 0 || rightArray.length > 0) {
    if (
      rightArray.length === 0 ||
      (leftArray.length > 0 && leftArray[0] <= rightArray[0])
    ) {
      sortedArray.push(leftArray.shift())
    } else {
      sortedArray.push(rightArray.shift())
    }
  }

  for (let index = lo; index < hi + 1; index++) {
    array[index] = sortedArray[index - lo]
  }

  array = sortedArray
}

const mergesort = (array, lo = 0, hi = array.length - 1) => {
  if (hi - lo < 1) {
    return
  }

  const mid = Math.floor((hi - lo) / 2) + lo

  mergesort(array, lo, mid)
  mergesort(array, mid + 1, hi)
  merge(array, lo, mid, hi)

  return
}

testSort(mergesort)
