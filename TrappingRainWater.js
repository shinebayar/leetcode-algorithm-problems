// 42. Trapping Rain Water
// Hard like=24082 unlike=334

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105
// Accepted
// 1,400,895
// Submissions
// 2,378,832







/**
 * @param {number[]} height
 * @return {number}
 */






// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var trap = function(height) {
    if(!height.length) return 0
    
    let res = 0, l = 0, r = height.length - 1
    let l_max = 0, r_max = 0
    
    while(l < r){
        l_max = Math.max(l_max, height[l])
        if(height[l] < l_max) res += l_max - height[l]
        
        r_max = Math.max(r_max, height[r])
        if(height[r] < r_max) res += r_max - height[r]
        
        height[l] < height[r] ? l++ : r--
    }
    
    return res
};




// [4,2,0,3,2,5]



// #array #two-pointers #dynamic-programming #stack #monotonic-stack
// ##hard