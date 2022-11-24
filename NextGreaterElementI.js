// 496. Next Greater Element I
// Easy like=4414 unlike=268

// Add to List

// Share
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

// Constraints:

// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.
 

// Follow up: Could you find an O(nums1.length + nums2.length) solution?



// Approach: brute force
// Time complexity = O(n2)
// Space complexity = O(n)
var nextGreaterElement1 = function(nums1, nums2) {
    let ans = new Array(nums1.length)
    
    const helper = (k, num) => {
        for(let i=k; i<nums2.length; i++){
            if(num < nums2[i]) return nums2[i]
        }
        return -1
    }
    
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i] === nums2[j]) {
                ans[i] = helper(j+1, nums1[i])
                break
            }
        }
    }
    
    return ans
};

// console.log(nextGreaterElement1([1,3,5,2,4], [6,5,4,3,2,1,7]))


// Approach: hash-table DS
// Time complexity = O(n)
// Space complexity = O(n)
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length)
    let map = new Map()
    
    for(let i=0; i<nums1.length; i++) map.set(nums1[i], i)
    
    for(let i=0; i<nums2.length; i++){
        if(map.has(nums2[i])){
            let tmp = nums2[i]
            for(let j=i+1; j<nums2.length; j++){
                if(tmp < nums2[j]){
                 tmp = nums2[j] 
                    break    
                }
            }
            tmp !== nums2[i] ? res[map.get(nums2[i])] = tmp : res[map.get(nums2[i])] = -1
        }
    }
    
    return res
};

console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]))



// Approach: using stack, hash-map DS
// Time complexity = O(m+n)
// Space complexity = O(1)
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map()
    let stack = []
    
    for(let i=0; i<nums2.length; i++){
        let cur = nums2[i]
        
        while(cur > stack[stack.length-1]){
            let popped = stack.pop()
            map.set(popped, cur)
        }
        
        stack.push(cur)
    }
    
    let ans = []
    
    for(let n of nums1){
        map.has(n) ? ans.push(map.get(n)) : ans.push(-1)
    }
    
    return ans
}



// #array #hash-table #stack #monotoic-stack
// ##easy 