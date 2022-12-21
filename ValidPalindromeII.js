// 680. Valid Palindrome II
// Easy like=6.6K unlike=341
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// Accepted
// 563.5K
// Submissions
// 1.4M
// Acceptance Rate
// 39.3%















/**
 * @param {string} s
 * @return {boolean}
 */





// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var validPalindrome = function(s) {
    let l = 0, r = s.length - 1

    while(l < r){
        if(s[l] !== s[r]){
            return isValid(l + 1, r) || isValid(l, r - 1)
        }
        l++
        r--
    }

    function isValid(l, r){
        while(l < r){
            if(s[l] !== s[r]) return false
            l++
            r--
        }

        return true
    }

    return true
};






// #two-pointers #greedy #string
// ##easy