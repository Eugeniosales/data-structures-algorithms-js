
var Tree = function() {
  this.root = null;
}

Tree.prototype.insert = function(node, data) {
  if (node == null){
    node = new Node(data);
  }
 else if (data < node.data){
      node.left  = this.insert(node.left, data);
  }
  else{
      node.right = this.insert(node.right, data);   
  }

  return node;
}

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const levelOrder = (root) => {
  let list = [];
    let queue = [];

    queue.push(root);

    while(queue.length) {
      const node = queue.shift(); 
      list.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

  console.log(list.join(" "));
}

const main = () => {
  const tree = new Tree();
  tree.root = tree.insert(tree.root,1);
  tree.root = tree.insert(tree.root,2);
  tree.root = tree.insert(tree.root,5);
  tree.root = tree.insert(tree.root,3);
  tree.root = tree.insert(tree.root,6);
  tree.root = tree.insert(tree.root,4);
  levelOrder(tree.root);
}

main()