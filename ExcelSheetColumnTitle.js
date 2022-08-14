// 168. Excel Sheet Column Title
// Easy lik=3044 unlike=446

// Add to List

// Share
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
 

// Constraints:

// 1 <= columnNumber <= 231 - 1
// Accepted
// 331,950
// Submissions
// 964,367


/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    let res = ''
    let charCode
    
    while (columnNumber >= 1) {
        if (columnNumber%26 === 0) {
            charCode = 26
            columnNumber = Math.floor(columnNumber/26) - 1
        } else {
            charCode = columnNumber%26;
            columnNumber = Math.floor(columnNumber/26)
        }
        
        res = String.fromCharCode(charCode + 64) + res
    }
    
    return res
};

// #math #string
// ##easy