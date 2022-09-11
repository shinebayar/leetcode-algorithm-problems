// 344. Reverse String
// Easy like=5966 unlike=991

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.
// Accepted
// 1,782,246
// Submissions
// 2,349,726


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


 var reverseString = function(s) {
    for(let i=0, j=s.length-1; i<s.length/2; i++, j--){
        let tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
    }

    return s
};

console.log(reverseString(["h","e","l","l","o"]))


// #string #two-pointers
// ##easy