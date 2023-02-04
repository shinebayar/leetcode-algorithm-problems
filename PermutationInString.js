// 567. Permutation in String
// Medium like=8.9K unlike=283
// Companies
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.
// Accepted
// 585.1K
// Submissions
// 1.3M
// Acceptance Rate
// 44.1%










/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// Approach: hash-map DS & sliding window technique
// Time complexity = O(n)
// Space complexity = O(n)
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false

    let map = new Map()

    for(let i=0; i<s1.length; i++) map.set(s1[i], map.get(s1[i]) + 1 || 1)

    let left = 0, right = 0, requiredLen = s1.length

    while(right < s2.length){
        if(map.get(s2[right]) > 0) requiredLen--
        map.set(s2[right], map.get(s2[right]) - 1)
        right++

        if(requiredLen === 0) return true

        if(right - left === s1.length){
            if(map.get(s2[left]) >= 0) requiredLen++
            map.set(s2[left], map.get(s2[left]) + 1)
            left++
        }
    }   

    return false
};








// #hash-table #two-pointers #string #sliding-window
// ##medium