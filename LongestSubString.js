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

const LongestSubstring = s => {

    let max = 0
    let begin = 0
    let map = {}
    
    for(let end=0; end<s.length; end++){
        if(map[s[end]] !== undefined && map[s[end]] >= begin){
            begin = map[s[end]] + 1
        }

        map[s[end]] = end
        max = Math.max(max, end - begin + 1)
    }

    return max
}

// LongestSubstring('bbbbb')
LongestSubstring('pwwkew')
// LongestSubstring('abcabcbb')