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

    if (!node.right) {
      node.right = newNode;
      return;
    }
    this.insertNode(value, node.right);
    return;
  }

  bfs() {
    let list = [];
    let queue = [];
    let level = 0;
    let isThereElemments;

    queue.push(this.root);

    while (queue.length > 0) {
      level++;
      isThereElemments = queue.length;
      while (isThereElemments--) {
        const node = queue.shift();
        list.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    console.log("Level >", level);

    console.log(list.join("-"));
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
/*   binarySearchTree.insert(1);
  binarySearchTree.insert(2);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(6);
  binarySearchTree.insert(4); */
  binarySearchTree.insert(9);
  binarySearchTree.insert(4);
  binarySearchTree.insert(6);
  binarySearchTree.insert(20);
  binarySearchTree.insert(170);
  binarySearchTree.insert(15);
  binarySearchTree.insert(1);
  binarySearchTree.bfs();

};

main();

/* 
        9
    4       20
  1   6   15 170

.InOrder = [1, 4, 6, 9, 15, 20]
.PreOrder = [9, 4, 1, 6, 20, 15, 170]
.PostOrder = [1, 6, 4, 15, 170, 20, 9]
*/
