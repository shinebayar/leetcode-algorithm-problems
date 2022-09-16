// 409. Longest Palindrome
// Easy like=3534 unlike=208

// Add to List

// Share
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.
// Accepted
// 370,134
// Submissions
// 679,098


/**
 * @param {string} s
 * @return {number}
 */

// Approach 1-1: Using hash table on javascript Map object, migth be greedy algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var longestPalindrome = function(s) {
    let map = new Map()
    let ans = 0

    for(let char of s){
        map.set(char, map.get(char) + 1 || 1)
        if(map.get(char) % 2 === 0) ans += 2
    }

    return s.length < ans ? ans + 1 : ans
}

// console.log(longestPalindrome('aabdccedd'))



// Approach 1-2: Using hash table on javascript simple object, migth be greedy algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var longestPalindrome = function(s) {
    let obj = {}
    let ans = 0

    for(let char of s){
        obj[char] = obj[char] + 1 || 1
        if(obj[char] % 2 === 0) ans += 2
    }
    console.log(obj)

    return s.length > ans ? ans + 1 : ans
}

// console.log(longestPalindrome('abccccdd'))


// #string #hash-table #greedy
// ##easy