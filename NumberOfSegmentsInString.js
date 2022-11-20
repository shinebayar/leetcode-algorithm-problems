// 434. Number of Segments in a String
// Easy like=515 unlike=1059

// Add to List

// Share
// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 

// Constraints:

// 0 <= s.length <= 300
// s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
// The only space character in s is ' '.
// Accepted
// 126,255
// Submissions
// 334,444


/**
 * @param {string} s
 * @return {number}
 */


// Time complexity = O(n)
// Space complexity = O(1)
var countSegments = function(s) {
    let count = 0
    
    for(let i=s.length-1; i>=0; i--){
        if(s[i] !== ' ' && (s[i+1] === ' ' || s[i+1] === undefined)) count++
    }
    
    return count
};

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("                "))


// #string
// ##easy