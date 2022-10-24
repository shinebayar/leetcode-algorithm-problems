// 111. Minimum Depth of Binary Tree
// Easy like=4976 unlike=1021

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

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

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



// Approach DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var minDepth1 = function(root) {
    if(!root) return 0
    return 1 + Math.min(minDepth1(root.left), minDepth1(root.right))
};

console.log(minDepth1([3,9,20,null,null,15,7]))




// Approach DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var minDepth = function(root) {
    if(!root) return 0

    let queue = [root]
    let level = 0

    while(queue.length){
        let len = queue.length
        while(len--){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            if(!node.left && !node.right) return level + 1
        }
        level++
    }

    return level
}



// #tree #depth-first-search #breadth-first-search #binary-tree
// ##easy