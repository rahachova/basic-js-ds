const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)
    if(this.rootNode === null) {
      this.rootNode = newNode
      return this
    }
    let currentNode = this.rootNode
    while(currentNode) {
      if(data === currentNode.data) return this
      if(data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        if(currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data) {
    if(!this.rootNode) return false
    let currentNode = this.rootNode
    let result = false
    while(currentNode && !result) {
      if(data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      } else if(data > currentNode.data) {
        if(currentNode.right) {
          currentNode = currentNode.right
        } else {
          currentNode = currentNode.left
        }
      } else if(data === currentNode.data) {
        result = true
      } else {
        result = false
      }
    }
    return result
  }

  find(data) {
    if(!this.rootNode) return false
    let currentNode = this.rootNode
    let result = undefined
    while(currentNode && result === undefined) {
      if(data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          result = null
        }
      } else if(data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right
        } else {
          result = null
        }
      } else if(data === currentNode.data) {
        result = currentNode
      } else {
        result = null
      }
    }
    return result
  }

  remove(data) {
    this.rootNode = this.removeNode(data, this.rootNode)
  }

  removeNode(data, node) {
    if (data < node.data && node.left) {
      node.left = this.removeNode(data, node.left);
    } else if (data > node.data && node.right) {
      node.right = this.removeNode(data, node.right);
    } else if (data === node.data) {
      if (node.left && node.right) {
          node.data = this.findMinValue(node.right);
          node.right = this.removeNode(node.data, node.right);
      } else {
          node = node.left || node.right;
      }
    }
    return node;
  }

  findMinValue(node) {
      while(node.left) {
        node = node.left
      }
      return node.data
  }

  findMaxValue(node) {
    while(node.right) {
      node = node.right
    }
    return node.data
  }

  min() {
    if(!this.rootNode) return null
    return this.findMinValue(this.rootNode)
  }

  max() {
    if(!this.rootNode) return null
    return this.findMaxValue(this.rootNode)
  }
}

module.exports = {
  BinarySearchTree
};