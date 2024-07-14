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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const inOrder = function(root, arr) {
    if(!root) return null;
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
  }
  let arr = [];
  inOrder(root, arr);
  return arr;
};
