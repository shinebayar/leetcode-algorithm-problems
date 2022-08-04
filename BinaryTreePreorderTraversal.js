// 144. Binary Tree Preorder Traversal
// Easy like=4625 unlike=137

// Add to List

// Share
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 var preorderTraversal = function(root) {
    let res = []
    
    const check = node => {
        if(node === null) return res
        else res.push(root.val)
        
        if(node.right !== null) res.push(node.right)
        if(node.left !== null) res.push(node.left)    
    }
    
    check(root)
};

preorderTraversal([1,null,2,3])

// #stack #tree #depth-first-search #binary-tree
// ##easy

// Time complexity = O(n)
// Space complexity = O(n)