// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

 // Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.



// Approach: sliding window technique
// Time complexity = O(n)
// Space complexity = O(n)
const LongestSubstring = s => {
    let map = new Map(), max = 0, i = 0

    for(let j=0; j<s.length; j++){
        if(map.has(s[j]) && map.get(s[j]) >= i) i = map.get(s[j]) + 1
        map.set(s[j], j)
        max = Math.max(max, j - i + 1)
    }

    return max
}

// LongestSubstring('bbbbb')
LongestSubstring('abcabcdjj')
// LongestSubstring('abcabcbb')