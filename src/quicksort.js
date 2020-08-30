const testArrays = [
  [43, 3, 545, 34, 53, 31, 657, 445, 56, 23],
  [1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 756, 756, 756, 756],
  [1, 56564, 45645, 56564, 56564, 56564, 2],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 3],
  [
    453345,
    345,
    435346,
    3216743,
    655,
    435634,
    34,
    2435,
    623,
    46,
    5,
    545326,
    2346
  ]
]

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

const isSorted = (array) => {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) {
      return false
    }
  }

  return true
}

testArrays.map((array) => {
  quicksort(array)
  console.log(array)
  console.log(isSorted(array))
})

const createTestArray = (maxLength = 99, maxVal = 999) => {
  const length = Math.floor(Math.random() * maxLength) + 1
  const array = []
  for (let index = 0; index < length; index++) {
    array[index] = Math.floor(Math.random() * maxVal)
  }
  return array
}

for (let index = 0; index < 999; index++) {
  const testArray = createTestArray()
  quicksort(testArray)
  !isSorted(testArray) && console.log('Array not sorted!!!')
}
