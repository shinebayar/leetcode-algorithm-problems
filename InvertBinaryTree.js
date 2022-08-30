// 226. Invert Binary Tree
// Easy like=9588 unlike=132

// Add to List

// Share
// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Accepted
// 1,207,404
// Submissions
// 1,659,350



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
 * @return {TreeNode}
 */

// Approach 1: using recursion DFS
// Time complexity = O(n)
// Space complexity = O(1)
 var invertTree1 = function(root) {

    const reverse = node => {
        if(!node) return

        reverse(node.left)
        reverse(node.right)

        let tmp = node.left
        node.left = node.right
        node.right = tmp
    }

    reverse(root)

    return root
};

console.log(invertTree1([4,2,7,1,3,6,9]))



// Approach 2: using iteration BFS
// Time complexity = O(n)
// Space complexity = O(n)
var invertTree2 = function(root) {
    let queue = [root]

    while(queue.length > 0){
        let node = queue.shift()

        let tmp = node.left
        node.left = node.right
        node.right = tmp

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return root
    
};

console.log(invertTree2([4,2,7,1,3,6,9]))


// #tree #depth-first-search #breadth-first-search #binary-tree
// ##easy 