// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

// Approach 1: Recursive Depth-first-search
// Time complexity = O(n)
// Space complexity = O(n)
var maxDepth1 = function(root) {
    if(!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


// Approach 2: Iterative Breadth-first-search
// Time complexity = O(n)
// Space complexity = O(n)
var maxDepth2 = function(root) {
    if(!root) return 0

    let q = [root]
    level = 0

    while(q.length){
        let len = q.length
        while(len--){
            const cur = q.shift()
            if(cur.left) q.push(cur.left)
            if(cur.right) q.push(cur.right)
        }
        level++
    }
    return level
};

// #tree #depth-first-search #breadth-first-search #binary-tree
// @easy