// 11. Container With Most Water
// Medium like=21456 unlike=1143

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
// Accepted
// 1,866,791
// Submissions
// 3,436,528




/**
 * @param {number[]} height
 * @return {number}
 */




// Approach: brute force
// Time complexity = O(n2)
// Space complexity = O(1)
var maxArea = function(height) {
    let res = 0
    let w, h
    
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            h = height[i] <= height[j] ? height[i] : height[j]
            w = j - i
            res = Math.max(res, h * w)
            // console.log(h, w, res)
        }
        // console.log('==============================')
    }
    
    return res
};








// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var maxArea = function(height) {
    let res = 0
    let h, w
    
    let i = 0
    let j = height.length - 1
    
    while(i < j){
        h = Math.min(height[i], height[j])
        w = j - i
        res = Math.max(res, h * w)
        if(height[i] < height[j]) i++
        else j--
    }
    
    return res
};






// #array #two-pointers #greedy
// ##medium