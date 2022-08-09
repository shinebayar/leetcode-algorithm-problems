// 145. Binary Tree Postorder Traversal
// Easy lik=4690 unlike=149

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?
// Accepted
// 788,790
// Submissions
// 1,203,375

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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


// Approach 1: recursively
// Time complexity: O(n)
// Space complexity: O(n)
 var postorderTraversal1 = function(root) {
    
    let res = []
    
    const check = node => {
        if(!node) return
        check(node.left)
        check(node.right)
        res.push(node.val)
    }
    
    check(root)
    
    return res
};

postorderTraversal1([1,null,2,3])

// Approach 2: iteratively
// Time complexity: O(n)
// Space complexity: O(n)
var postorderTraversal = function(root) {
    
    let res = [];
    let stack = [];
    let lastNodeVisited = null;
    while (stack.length || node !== null) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            let peekNode = stack[stack.length - 1];
            if (peekNode.right !== null && peekNode.right !== lastNodeVisited) {
                node = peekNode.right;
            } else {
                res.push(peekNode.val);
                lastNodeVisited = stack.pop();
            }
        }
    }
    return res;
};

postorderTraversal([1,null,2,3])

// #tree #binary-tree #stack #depth-first-search
// ##easy