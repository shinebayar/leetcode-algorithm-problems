// 350. Intersection of Two Arrays II
// Easy like=5265 unlike=773

// Add to List

// Share
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// Accepted
// 903,418
// Submissions
// 1,629,789


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Approach 1: Using hash data structure
// Time complexity = O(n)
// Space complexity = O(n)
var intersect1 = function(nums1, nums2) {
    
    let obj = {}
    let ans = []
    
    for(let i=0; i<nums1.length; i++){
        if( obj[nums1[i]] ) obj[nums1[i]] += 1
        else obj[nums1[i]] = 1
    }
     
    console.log(obj)
     
    for(let i=0; i<nums2.length; i++){
        if( obj[nums2[i]] === 1 ){
            ans.push(nums2[i])
            delete obj[nums2[i]]
        }else if( obj[nums2[i]] > 1 ){
            ans.push(nums2[i])
            obj[nums2[i]] -= 1
        }
    }
     
    return ans
};

// console.log(intersect1([4,9,5], [9,4,9,8,4]))



// Approach 2: Using two pointer technique on sorted arrays
// Time complexity = O(n2)
// Space complexity = O(n)
var intersect2 = function(nums1, nums2) {
    
    let ans = []
    nums1 = nums1.sort((a,b) => a-b)
    nums2 = nums2.sort((a,b) => a-b)
    let p1 = p2 = 0
     
     while( p1 < nums1.length && p2 < nums2.length ){
         if( nums1[p1] === nums2[p2] ){
             ans.push(nums1[p1])
             p1++
             p2++
         }else if( nums1[p1] > nums2[p2] ) p2++
         else p1++
         console.log(nums1[p1], nums2[p2])
     }
     
    return ans
 };

// console.log(intersect2([4,9,5], [9,4,9,8,4]))



// Approach 3: Using binary search algorithm on sorted arrays
// Time complexity = O(n2)
// Space complexity = O(n)
var intersect3 = function(nums1, nums2) {

    const binarySearch = target => {
        let l = 0, r = nums2.length-1
        while(l < r){
            let mid = l + Math.floor((r - l) / 2)
            if(nums2[mid] < target){
                l = mid + 1
            }else{
                r = mid
            }
        }
        if(nums2[l] == target){
            nums2[l] = -Infinity
            return true
        }
        return false
    }

    nums1.sort((a,b)=>a-b) 
    nums2.sort((a,b)=>a-b)
    let ans=[]

    for(let i=0; i<nums1.length; i++){
        if(binarySearch(nums1[i])){
			ans.push(nums1[i])
		}
    }
    return ans
};

console.log(intersect3(
    [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81],
    [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
))


// #array #hash-table #two-pointers #binary-search #sorting
// ##easy