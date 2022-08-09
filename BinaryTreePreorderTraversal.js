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

// Approach 1: Using recursion
// Time complexity = O(n)
// Space complexity = O(n)
 var preorderTraversal1 = function(root) {
    let res = []
    
    const check = node => {
        if(node === null) return
        else res.push(node.val)
        
        if(node.left !== null) check(node.left)
        if(node.right !== null) check(node.right)
    }
    
    check(root)
    
    return res
};

// preorderTraversal1([1,null,2,3])


// Approach 2: Using stack
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
        
        console.log('node: ', node)
        console.log('stack: ', stack)
        console.log('res: ', res)
        console.log('stack.length: ', stack.length)
        console.log('--------------------')
    }
    
    return res
};

// #stack #tree #depth-first-search #binary-tree
// ##easy