// 103. Binary Tree Zigzag Level Order Traversal
// Medium like=8.6K unlike=226
// Companies
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
// Accepted
// 899.5K
// Submissions
// 1.6M
// Acceptance Rate
// 56.2%





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


// Approach: BFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var zigzagLevelOrder = function(root) {
    if(!root) return []

    let queue = [root], res = [], deep = 0

    while(queue.length){
        let size = queue.length, level = []

        for(let i=0; i<size; i++){
             let node = queue.shift()
             if(deep % 2 === 0) level.push(node.val)
             else level.unshift(node.val)

             if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
        }

        res.push(level)
        deep++
    }

    return res
};



// #tree #breadth-first-search #binary-tree
// ##medium