/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const preOrder = function (root, arr) {
      if (!root) return null;
      if(!root.left && !root.right) arr.push(root.val)
      if (root.left) preOrder(root.left, arr);
      if (root.right) preOrder(root.right, arr);
  }

  let arr1 = [];
  let arr2 = [];
  preOrder(root1, arr1);
  preOrder(root2, arr2);

  return arr1.every((element, i) => element === arr2[i]) && arr1.length === arr2.length;
};