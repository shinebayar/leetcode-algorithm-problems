// 28. Find the Index of the First Occurrence in a String
// Medium like=982 unlike=78

// Add to List

// Share
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
// Accepted
// 1,479,423
// Submissions
// 3,924,157








/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */




// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var strStr = function(haystack, needle) {
    let p1 = 0
    let p2 = 0
    
    while(p1 < haystack.length){
        if(haystack[p1] === needle[p2]) p2++
        else{
            p1 = p1 - p2
            p2 = 0
        }
        p1++
        if(p2 === needle.length) return p1 - p2
    }
    
    return -1
};






// #string #string-matching #two-pointers
// ##medium