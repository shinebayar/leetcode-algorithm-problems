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




// Approach: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
 var preorderTraversal1 = function(root) {
    let res = []
    
    const check = node => {
        if(!node) return
        else res.push(node.val)
        
        if(node.left) check(node.left)
        if(node.right) check(node.right)
    }
    
    check(root)
    
    return res
};


// Approach: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var preorderTraversal2 = function(root, res = []) {
    if(!root) return []
    else res.push(root.val)
        
    if(root.left) preorderTraversal(root.left, res)
    if(root.right) preorderTraversal(root.right, res)
    
    return res
};

// preorderTraversal2([1,null,2,3])


// Approach: stack DS
// Time complexity = O(n)
// Space complexity = O(n)
var preorderTraversal = function(root) {
    if(!root) return []
    
    let stack = [root]
    let res = []

    while(stack.length){
        let node = stack.pop()

        res.push(node.val)

        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }

    return res
};

// #stack #tree #depth-first-search #binary-tree
// ##easy