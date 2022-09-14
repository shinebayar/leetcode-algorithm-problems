// 392. Is Subsequence
// Easy like=5745 unlike=326

// Add to List

// Share
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
// Accepted
// 595,282
// Submissions
// 1,196,356


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Approach 1: Using two pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var isSubsequence = function(s, t) {
    let p2 = 0
    
    for(let p1=0; p1<t.length; p1++){
        if(t[p1] === s[p2]) p2++ 
    }
    
    return p2 === s.length
};

// console.log(isSubsequence('abc', 'ahbgdc'))



// Approach 2: Using dynamic programming
// Time complexity = O(n2)
// Space complexity = O(n*m)
var isSubsequence = function(s, t) {

    var s_length = s.length;
    var t_length = t.length;
    if(s_length > t_length) return false
    var dp = [...new Array(s_length +1)].map(ele => new Array(t_length + 1).fill(0) );
    console.log(dp)
    for(let i=1; i<=s_length; i++){
        for(let j=1; j<=t_length; j++){
            if(s[i-1] === t[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max( dp[i-1][j] , dp[i][j-1])
            }
            if(dp[i][j] = s_length) return true
        }
    }
    console.log(dp)
    return false
};

console.log(isSubsequence("abc", "ahbgdcesfdsdf"))
  // #two-pointers #string #dynamic-programming
  // ##easy

  // [
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  // ]