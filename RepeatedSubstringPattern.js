// 459. Repeated Substring Pattern
// Easy like = 3956 unlike = 361

// Add to List

// Share
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
// Accepted
// 273,566
// Submissions
// 625,684






// Approach: brute force
// Time complexity = O(n2)
// Space complexity = O(1)
var repeatedSubstringPattern1 = function(s) {
    
    const helper = (sub) => {
        return sub.repeat(s.length / sub.length) === s
    }
    
    let text = ''
    
    for(let i=0; i<s.length-1; i++){
        text += s[i]
        if(helper(text)) return true
    }
    
    return false
};





// Approach: math
// Time complexity = O(n) because of built-in function includes()
// Space complexity = O(1)
var repeatedSubstringPattern = function(s) {
    let str = s + s
    return str.slice(1, str.length-1).includes(s)
}



// #string #string-matching
// ##easy