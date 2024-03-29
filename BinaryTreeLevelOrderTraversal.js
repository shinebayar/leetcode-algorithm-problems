// 102. Binary Tree Level Order Traversal
// Medium like=10541 unlike=199

// Add to List

// Share
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
// Accepted
// 1,480,978
// Submissions
// 2,358,047


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
 * @return {number[][]}
 */

// Approach 1: using iteration for technique and queue for DS
// Time complexity = O(n)
// Space complexity = O(n)
var levelOrder = function(root) {
    let queue = [root]
    let res = []
 
    while(queue.length){
        let row = []
        let rowSize = queue.length
        
        while(rowSize > 0){
            let cur = queue.shift()
            row.push(cur.val)
            rowSize--
            
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
        }
        res.push(row)
    }
 
    return res
};

levelOrder([3,9,20,null,null,15,7])

// #tree #breadth-first-search #binary-tree
// ##easy