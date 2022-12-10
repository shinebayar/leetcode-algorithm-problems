// 653. Two Sum IV - Input is a BST
// Easy like=5.4K unlike=235
// Companies
// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105
// Accepted
// 425.8K
// Submissions
// 698.1K
// Acceptance Rate
// 61.0%







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
 * @param {number} k
 * @return {boolean}
 */


// Approach: DFS algorithm and two-pointers technique
// Time complexity: O(2n) ~ O(n)
// Time complexity O(1)
var findTarget = function(root, k) {
    if(!root) return false

    let nums = []

    const dfs = node => {
        if(!node) return

        if(node.left) dfs(node.left)
        nums.push(node.val)
        if(node.right) dfs(node.right)
    }

    dfs(root)
    let start = 0, end = nums.length - 1

    while(start < end){
        if(nums[start] + nums[end] === k) return true
        if(nums[start] + nums[end] > k) end--
        else start++
        console.log(start, end, nums[start], nums[end], k)
    }

    return false
};




// #tree #binary-tree #binary-search-tree #depth-first-search #breadth-first-search #hash-table #two-pointers
// ##easy