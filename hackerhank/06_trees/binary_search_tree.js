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
    this.length = 0;
  }

  //O(log n)
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.length++;
      return this;
    }

    this.insertNode(value, this.root);
    this.length++;
    return this;
  }

  insertNode(value, node) {
    const newNode = new Node(value);
    if (value <= node.value) {
      if (!node.left) {
        node.left = newNode;
        return this;
      }
      this.insertNode(value, node.left);
    }
    else if (value > node.value) {
      if(!node.right) {
        node.right = newNode;
        return this;
      }
      this.insertNode(value, node.right);
    }
  }

  //lookup(log n)
  lookup(value) {
    if (!this.root) {
      return false;
    }
    return this.lookupNode(value, this.root);
  }

  lookupNode (value, node) {
    if (!node) return false;
    if(value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.lookupNode(value, node.left);
    } else {
      return this.lookupNode(value, node.right);
    }
  }

  //O(log n)
  remove(value) {}
}

const main = () => {
  const bst = new BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(6);
  bst.insert(20);
  bst.insert(170);
  bst.insert(15);
  bst.insert(1);
  console.log(bst.lookup(170));
  console.log(JSON.stringify(traverse(bst.root)));
};

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

main();
