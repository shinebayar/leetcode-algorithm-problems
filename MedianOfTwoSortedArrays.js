// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 // Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106



var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort(function(a, b){
        return a-b
    })
    let ans = 0

    if (nums.length % 2 === 0){ 
        ans = (nums[(Math.floor(nums.length/2)-1)] + nums[(Math.floor(nums.length/2))]) / 2
    }else{
        ans = nums[Math.floor(nums.length/2)]
    }

    console.log(nums)
    console.log(ans)

    return ans

};

findMedianSortedArrays([3], [-2,-1])