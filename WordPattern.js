// 290. Word Pattern
// Easy like=3970 unlike=457

// Add to List

// Share
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.
// Accepted
// 389,213
// Submissions
// 964,920


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */


// Approach: using hash-table DS
// Time complexity = O(n)
// Space complexity = O(n)
var wordPattern = function(pattern, s) {
    let patternToStr = new Map()
    let strToPattern = new Map()
    s = s.split(' ')
    
    if(pattern.length !== s.length) return false
    
    for(let i=0; i<pattern.length; i++){
        patternToStr.set(pattern[i], patternToStr.get(pattern[i]) || s[i])
        strToPattern.set(s[i], strToPattern.get(s[i]) || pattern[i])
        if(pattern[i] !== strToPattern.get(s[i])) return false
        if(s[i] !== patternToStr.get(pattern[i])) return false
    }
    
    return true
};

console.log(wordPattern('abba', 'dog dog dog dog'))

// #hash-table #string
// ##easy