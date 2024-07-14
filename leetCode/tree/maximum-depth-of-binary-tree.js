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
 * @return {number}
 */

var maxDepth = function (root) {
  let queue = [];
  let depth = 0;
  let info = { node: root, level: 1 };

  if (!root) return 0;

  queue.push(info);

  while (queue.length) {
    const info = queue.shift();

    const { node, level } = info;

    depth = Math.max(level, depth);

    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return depth;
};
