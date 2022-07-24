// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {number[]} nums
//  * @return {TreeNode}
//  */

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
 var sortedArrayToBST = function(nums) {
    // error check
    if(!nums || nums.length < 1) return null

    // create recursive function
    const checkRecursively = (nums, start, end) => {
        // base case
        if(start > end) return null

        // recursive case // find the middle
        const middle = Math.floor((start + end) / 2)

        // instantiate new TreeNode make it the root
        const root = new TreeNode(nums[middle])

        // create the left branch
        root.left = checkRecursively(nums, start, middle - 1)

        // create the right branch
        root.right = checkRecursively(nums, middle + 1, end)

        return root
    }

    return checkRecursively(nums, 0, nums.length - 1)
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9  ]))

// #array #divide-and-conquer #tree #binary-search-tree #binary-tree
// @easy

// Time complexity = O(n) because recursive we were going through every single value
// Memory complexity = O(log n) becase balanced tree