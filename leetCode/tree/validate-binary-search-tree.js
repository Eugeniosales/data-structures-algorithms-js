/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const inOrder = function(root, arr) {
      if(!root) return null;
      if(root.left) inOrder(root.left, arr);
      arr.push(root.val);
      if(root.right) inOrder(root.right, arr);
  }
  let arr = [];
  inOrder(root, arr);
  for(let i = 1; i < arr.length; i++) {
      if(arr[i-1] >= arr[i]) return false;
  }
  return true;
};