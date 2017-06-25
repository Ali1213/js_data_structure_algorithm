
class BinarySearchTree {
  constructor() {
    this.root = BinarySearchTree.Node(null);
  }

  insert(key) {
    let root = this.root,
      node = BinarySearchTree.Node(key);
    if (root.key === null) {
      root.key = key;
    } else {
      BinarySearchTree.insertNode(root, node);
    }
  }

  search(key) {
    if (this.root.key === null) {
      return false;
    }
    if (root.key > key) {
      return this.search(root.left, key);
    } else if (root.key === key) {
      return true;
    } else {
      return this.search(root.right, key);
    }
  }

  inOrderTraverse(callback) {
    BinarySearchTree.inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    BinarySearchTree.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    BinarySearchTree.postOrderTraverseNode(this.root, callback);
  }

  min() {
    return BinarySearchTree.extremumNode(this.root, 'left');
  }

  max() {
    return BinarySearchTree.extremumNode(this.root, 'right');
  }

  remove(key) {
    this.root = BinarySearchTree.removeNode(this.root, key);
  }

  static removeNode(root, key) {
    if (root === null) {
      return null;
    }

    if (root.key > key) {
      root.left = BinarySearchTree.removeNode(root.left, key);
      return root;
    }

    if (root.key < key) {
      root.right = BinarySearchTree.removeNode(root.right, key);
      return root;
    }

    if (root.key === key) {

      //只有一个叶节点
      if (root.left === null && root.right === null) {
        return key;
      }

      //只有
      if (root.left === null) {
        root = root.right;
        return root;
      }
      if(root.right === null){
        root = root.left;
        return root;
      }

      let auxKey = BinarySearchTree.extremumNode(root.right,'left');
      root.key = auxKey;
      root.right = BinarySearchTree.removeNode(root.right,auxKey);
      return root;
    }

  }

  static extremumNode(node, direction) {
    if (node !== null) {
      if (node[direction]) {
        BinarySearchTree.minNode(node[direction]);
      } else {
        return node.key;
      }
    }
  }

  static postOrderTraverseNode(root, callback) {
    if (root !== null) {
      BinarySearchTree.postOrderTraverseNode(root.left, callback);
      BinarySearchTree.postOrderTraverseNode(root.right, callback);
      callback(root.key);
    }
  }

  static preOrderTraverseNode(root, callback) {
    if (root !== null) {
      callback(root.key);
      BinarySearchTree.preOrderTraverseNode(root.left, callback);
      BinarySearchTree.preOrderTraverseNode(root.right, callback);
    }
  }

  static inOrderTraverseNode(root, callback) {
    if (root !== null) {
      BinarySearchTree.inOrderTraverseNode(root.left, callback);
      callback(root.key);
      BinarySearchTree.inOrderTraverseNode(root.right, callback);
    }
  }

  static insertNode(root, node) {
    if (root.key > node.key) {
      if (root.left === null) {
        root.left = node;
      } else {
        BinarySearchTree.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        BinarySearchTree.insertNode(root.right, node);
      }
    }
  }

  static Node(key) {
    return {
      key,
      left: null,
      right: null
    };
  }
}

module.exports = BinarySearchTree;