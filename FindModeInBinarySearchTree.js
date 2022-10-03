// 501. Find Mode in Binary Search Tree
// Easy like=2548 unlike=607

// Add to List

// Share
// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105
 

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
// Accepted
// 171,557
// Submissions
// 353,935


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


var findMode = function(root) {
    let ans = []
    let map = new Map()
    let max = 0
    
    const traverse = node => {
        if(!node) return
        
        map.set(node.val, map.get(node.val) + 1 || 1)
        max = Math.max(max, map.get(node.val))
        
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    
    traverse(root)
    
    for(let [key, value] of map) if(value === max) ans.push(key)
    
    return ans
};

// [1,null,2,2,]
// [1,null,2,2,3,null,null,null,3,null,3]


// #tree #depth-first-search #binary-search-tree #binary-tree
// ##easy