import { testSort } from './sort-test.js'

const swap = (array, indexA, indexB) => {
  const a = array[indexA]
  array[indexA] = array[indexB]
  array[indexB] = a
}

const partition = (array, lo, hi) => {
  let pivot = Math.floor(Math.random() * (hi - lo + 1)) + lo
  swap(array, lo, pivot)
  pivot = lo

  let left = lo + 1
  let right = hi
  while (left <= right) {
    if (array[left] <= array[pivot]) {
      left++
    } else {
      swap(array, left, right)
      right--
    }
  }

  swap(array, pivot, left - 1)

  return left - 1
}

const quicksort = (array, lo = 0, hi = array.length - 1) => {
  if (hi <= lo) {
    return
  }

  const mid = partition(array, lo, hi)

  quicksort(array, lo, mid - 1)
  quicksort(array, mid + 1, hi)

  return
}

testSort(quicksort)
