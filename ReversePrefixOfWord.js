// 2000. Reverse Prefix of Word
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

 

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".
 

// Constraints:

// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 131K
// Submissions
// 157.9K
// Acceptance Rate
// 82.9%







/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */





// Approach: two-pointers
// Time complexity = O(2n) ~ O(n)
// Space complexity = O(1)
var reversePrefix = function(word, ch) {
    let ans = '', j = 0, i = 0

    for(let w of word){
        if(w === ch) break
        else j++
    }

    if(j === word.length) return word

    i = j, j = j+ 1

    while(i >= 0 || j < word.length){
        if(i >= 0){
            ans += word[i]
            i--
        }else{
            ans += word[j]
            j++
        }
    }

    return ans
};







// #two-pointers   #string
// ##easy