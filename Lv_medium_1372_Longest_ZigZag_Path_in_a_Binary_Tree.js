/**
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  const dfs = (node, direction, count) => {
    let right = 0;
    let left = 0;

    if (node === null) {
      return count - 1;
    }

    if (direction === "right") {
      right = dfs(node.right, "left", count + 1);
      left = dfs(node.left, "right", 1);
    } else {
      right = dfs(node.right, "left", 1);
      left = dfs(node.left, "right", count + 1);
    }

    return Math.max(right, left);
  };

  let rightSide = dfs(root, "left", 0);
  let leftSide = dfs(root, "right", 0);

  return Math.max(rightSide, leftSide);
};

/**
 * 1. binary -> left / right 나눠서 생각
 * 2. 재귀로 생각해야함
 */
