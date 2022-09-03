// 257. Binary Tree Paths
// Easy like=4753 unlike=208

// Add to List

// Share
// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100
// Accepted
// 552,789
// Submissions
// 920,927



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
 * @return {string[]}
 */


// Time complexity = O(n)
// Space complexity = O(1)
var binaryTreePaths = function(root) {
    let res = []

    const recur = (node, str) => {
        if(!node.left && !node.right) res.push(str + node.val)
        if(node.left) recur(node.left, str + node.val + '->')
        if(node.right) recur(node.right, str + node.val + '->')
    }

    recur(root, '')
    
    return res
};

binaryTreePaths([1,2,3,null,5])


// #string #tree #binary-tree #depth-first-search #backtracking
// ##easy