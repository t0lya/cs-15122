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

const isSorted = (array) => {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) {
      return false
    }
  }

  return true
}

export const testSort = (sort, testCasesNum = 999) => {
  testArrays.map((array) => {
    sort(array)
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

  for (let index = 0; index < testCasesNum; index++) {
    const testArray = createTestArray()
    sort(testArray)
    !isSorted(testArray) && console.log('Array not sorted!!!')
  }
}
