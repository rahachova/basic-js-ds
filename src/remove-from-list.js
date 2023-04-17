const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let resultedList
  let currentResultedListNode
  let tempNode

  while(list) {
    if (list.value === k) {
      list = list.next
    } else if (!resultedList) {
      currentResultedListNode = list
      resultedList = list
      list = list.next
    } else if (list.next && list.next.value === k && !list.next.next) {
      currentResultedListNode = list
      currentResultedListNode.next = null
      list = null
    } else {
      tempNode = currentResultedListNode
      currentResultedListNode = list
      tempNode.next = currentResultedListNode
      list = list.next
    }
  }
  return resultedList
}

module.exports = {
  removeKFromList
};
