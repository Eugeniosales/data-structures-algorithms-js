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
var isSymmetric = function (root) {
  const preOrder = function (root, arr) {
      if (!root) return null;
      arr.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
  }
  let arr1 = [];
  let arr2 = [];
  preOrder(root?.left, arr1);
  preOrder(root?.right, arr2);
  return arr1.every((element, i) => element === arr2[i]);
};