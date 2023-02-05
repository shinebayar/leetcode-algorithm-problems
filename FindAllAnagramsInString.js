// 438. Find All Anagrams in a String
// Medium like=10.2K unlike=297
// Companies
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.
// Accepted
// 698.4K
// Submissions
// 1.4M
// Acceptance Rate
// 49.7%






/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


// Approach: hash-map DS & sliding window technique
// Time complexity = O(n)
// Space complexity = O(n)
var findAnagrams = function(s, p) {
    let map = new Map()

    for(let i=0; i<p.length; i++) map.set(p[i], map.get(p[i]) + 1 || 1)

    let requiredLen = p.length
    let res = []

    let left = 0, right = 0

    while(right < s.length){
        if(map.get(s[right]) > 0) requiredLen--
        map.set(s[right], map.get(s[right]) - 1)
        right++

        if(requiredLen === 0) res.push(left)

        if(right - left === p.length){
            if(map.get(s[left]) >= 0) requiredLen++
            map.set(s[left], map.get(s[left]) + 1)
            left++
        }
    }

    return res
};








// #string #hash-table #sliding-window
// ##medium