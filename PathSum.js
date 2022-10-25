// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000


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
 * @param {number} targetSum
 * @return {boolean}
 */



// Approach: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(logn) we need that for the recursion stack
var hasPathSum1 = function(root, targetSum) {
    let hasTarget = false

    const helper = (node, sum) => {
        if(!node) return

        sum += node.val

        if(sum === targetSum && !node.left && !node.right){
            hasTarget = true
            return
        }else{
            if(node.left) helper(node.left, sum)
            if(node.right) helper(node.right, sum)
        }
    }

    helper(root, 0)

    return hasTarget
};

console.log(hasPathSum1())




// Approach: BFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var hasPathSum = function(root, targetSum) {
    if(!root) return false

    let queue = [root]

    while(queue.length){
        let node = queue.shift()
        
        if(node.left){
            node.left.val += node.val
            queue.push(node.left)
        }

        if(node.right){
            node.right.val += node.val
            queue.push(node.right)
        }

        if(!node.left && !node.right && node.val === targetSum) return true
    }

    return false
}

// #tree #depth-first-search #breadth-first-search #binary-tree
// ##easy