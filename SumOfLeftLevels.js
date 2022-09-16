// 404. Sum of Left Leaves
// Easy like=3809 unlike=259

// Add to List

// Share
// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -1000 <= Node.val <= 1000
// Accepted
// 386,187
// Submissions
// 689,317


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

// Approach 1: Using DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
 var sumOfLeftLeaves = function(root) {
    let sum = 0
    
    const recur = (node, isLeft) => {
        if(node === null) return

        if(node.left) recur(node.left, true)
        if(node.right) recur(node.right, false)

        if(isLeft && !node.left && !node.right) sum += node.val
    }
    
    recur(root, false)
    
    return sum
};



// Approach 2: Using BFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var sumOfLeftLeaves = function(root) {
    let sum = 0
    let queue = [root]
    let node

    while(queue.length){
        node = queue.shift()

        if(node.left){
            if(!node.left.left && !node.left.right) sum += node.left.val
            else queue.push(node.left)
        }

        if(node.right) queue.push(node.right)
    }
    
    return sum
};


// #tree #binary-tree #depth-first-search #breadth-first-search
// ##easy