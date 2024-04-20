class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    return this.insertNode(value, this.root);
  }

  insertNode(value, node) {
    const newNode = new Node(value);
    if (value <= node.value) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      this.insertNode(value, node.left);
      return;
    }

    if(!node.right) {
      node.right = newNode;
      return;
    }
    this.insertNode(value, node.right);
    return;
  }

  inOrderDfs() {
    this.inOrderDfsAux(this.root);
  }

  inOrderDfsAux(node) {
    if(node.left) this.inOrderDfsAux(node.left);
    console.log(node.value);
    if(node.right) this.inOrderDfsAux(node.right);
    return;
  }

  preOrderDfs() {
    this.preOrderAux(this.root);
  }

  preOrderAux(node) {
    console.log(node.value);
    if(node.left) this.preOrderAux(node.left);
    if(node.right) this.preOrderAux(node.right);
  }

  postOrderDfs() {
    this.postOrderAux(this.root);
  }

  postOrderAux(node) {
    if(node.left) this.postOrderAux(node.left);
    if(node.right) this.postOrderAux(node.right);
    console.log(node.value);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const main = () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(1);
  binarySearchTree.insert(2);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(6);
  binarySearchTree.insert(4);
  binarySearchTree.inOrderDfs();
/*   binarySearchTree.insert(9);
  binarySearchTree.insert(4);
  binarySearchTree.insert(6);
  binarySearchTree.insert(20);
  binarySearchTree.insert(170);
  binarySearchTree.insert(15);
  binarySearchTree.insert(1);
 */
}

main();

/* 
        9
    4       20
  1   6   15 170

.InOrder = [1, 4, 6, 9, 15, 20]
.PreOrder = [9, 4, 1, 6, 20, 15, 170]
.PostOrder = [1, 6, 4, 15, 170, 20, 9]
*/
