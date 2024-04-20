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

function treeHeight(root) {
  if (!root) return 0;
  return (Math.max(treeHeight(root.left, root.right)) + 1);
}

const main = () => {
  var tree = new Tree();

  tree.root = tree.insert(tree.root, 3);
  tree.root = tree.insert(tree.root, 5);
  tree.root = tree.insert(tree.root, 2);
  tree.root = tree.insert(tree.root, 1);
  tree.root = tree.insert(tree.root, 4);
  tree.root = tree.insert(tree.root, 6);
  tree.root = tree.insert(tree.root, 7);

  var height = treeHeight(tree.root);
  process.stdout.write(height.toString());
}

main()

/* 
Ref: https://stackoverflow.com/questions/16677378/calculating-the-height-of-a-binary-tree
*/