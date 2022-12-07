// 938. Range Sum of BST
// Easy like=5.2K unlike=341
// Companies
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.
// Accepted
// 721.1K
// Submissions
// 841.7K
// Acceptance Rate
// 85.7%




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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */



// Approach: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var rangeSumBST = function(root, low, high) {
    let res = 0

    const helper = node => {
        if(!node) return

        if(low <= node.val && node.val <= high) res+= node.val
        
        if(node.left) helper(node.left)
        if(node.right) helper(node.right)
    }

    helper(root)

    return res
};





// Approach: BFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var rangeSumBST = function(root, low, high) {
    let res = 0
    let queue = [root]

    while(queue.length){
        let node = queue.shift()
        
        if(low <= node.val && node.val <= high) res += node.val
        
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return res
}









// #tree #binary-search-tree #depth-first-search #breadth-first-search
// ##easy