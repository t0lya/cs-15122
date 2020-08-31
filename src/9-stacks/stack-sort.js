import { testSort } from '../7-sorting/sort-test.js'

/**
 * @param {number[]} stack
 * @returns {number[]} stack sorted in ascending order
 */
const sortStack = (stack) => {
  if (stack.length < 2) {
    return stack
  }

  const unsortedItem = stack.pop()
  const sortedStack = sortStack(stack)

  const tempStack = []
  let lastSortedItem = sortedStack.pop()
  if (lastSortedItem > unsortedItem) {
    tempStack.push(lastSortedItem)
  } else {
    sortedStack.push(lastSortedItem)
  }

  while (
    sortedStack.length &&
    lastSortedItem &&
    lastSortedItem > unsortedItem
  ) {
    tempStack.push(lastSortedItem)
    lastSortedItem = sortedStack.pop()
  }

  sortedStack.push(unsortedItem)

  while (tempStack.length) {
    sortedStack.push(tempStack.pop())
  }

  stack = sortedStack
  return stack
}

testSort(sortStack)
