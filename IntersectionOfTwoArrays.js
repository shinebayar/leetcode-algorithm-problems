// 349. Intersection of Two Arrays
// Easy like=3587 unlike=1991

// Add to List

// Share
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
// Accepted
// 735,456
// Submissions
// 1,051,215


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// Approach 1: Using hash table data structure
// Time complexity = O(n)
// Space complexity = O(n)
var intersection1 = function(nums1, nums2) {
    let obj = {}
    let ans = []
    
    for(let i=0; i<nums1.length; i++){
        if( !obj[nums1[i]] ) obj[nums1[i]] = nums1[i]
    }
    
    for(let i=0; i<nums2.length; i++){
        if( nums2[i] == obj[nums2[i]] ) {
            ans.push(nums2[i])
            delete obj[nums2[i]]
        }
    }
    
    return ans
};

// console.log(intersection1([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]))



// Approach 2: Using two pointer technique on sorted arrays
// Time complexity = O(n2) because we are using sort method it is O(n2)
// Space complexity = O(n)
var intersection2 = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    let ans = []

    let i = j = 0
    let last
    while( i < nums1.length && j < nums2.length ){
        if(nums1[i] === nums2[j]){
            if( nums1[i] !== last ) {
                ans.push(nums1[i])
                last = nums1[i]
            }
            i++
            j++
        }else if(nums1[i] > nums2[j]) j++
        else i++
    }

    return ans
};

// console.log(intersection2(
//     [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81],  
//     [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]))



// Approach 3: Using binary search algorithm on sorted arrays
// Time complexity = O(n2) because we are using sort method it is O(n2)
// Space complexity = O(n)
var intersection3 = function(nums1, nums2) {

    const binarySearch = (arr, target) => {
        let left = 0
        let right = arr.length - 1
        while( left <= right ){
            let mid = Math.floor((left + right) / 2)
            if( arr[mid] === target ) return true
            if( target > arr[mid] ) left = mid + 1
            else right = mid - 1
        }
        return false
    }

    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    let ans = []

    for(let i=0; i<nums2.length; i++){
        if( binarySearch(nums1, nums2[i]) && ! binarySearch(ans, nums2[i]) ) ans.push(nums2[i])
    }

    return ans
};

console.log(intersection3( [4,9,5], [9,4,9,8,4] ))



// #array #hash-table #two-pointers #binary-search #sorting
// ##easy