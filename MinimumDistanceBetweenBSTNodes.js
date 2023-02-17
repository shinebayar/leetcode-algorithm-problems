// 783. Minimum Distance Between BST Nodes
// Easy like=2.5K unlike=368
// Companies
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105
 

// Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

// Accepted
// 173.7K
// Submissions
// 298.9K
// Acceptance Rate
// 58.1%







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


// DFS algorithm
// Time complexity = O(n)
// Space complexity = O(n) with callstack
var minDiffInBST = function(root) {
    let min = Number.MAX_VALUE, prev = Number.MAX_VALUE

    const check = node => {
        if(!node) return

        check(node.right)
        if(min > prev - node.val) min = prev - node.val
        prev = node.val
        check(node.left)
    }

    check(root)

    return min
};




// #tree #binary-tree #depth-first-search #breadth-first-search #binary-search-tree
// ##easy