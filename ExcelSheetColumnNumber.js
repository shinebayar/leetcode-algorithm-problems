// 171. Excel Sheet Column Number
// Easy like=3523 unlike=292

// Add to List

// Share
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
 

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].
// Accepted
// 529,084
// Submissions
// 866,336



/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    const alphabet = ["0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
    let res = 0
    
    for(let i=0, j=columnTitle.length-1; i<columnTitle.length; i++, j--){
        res = res + ( alphabet.indexOf(columnTitle[j]) * Math.pow(26, i) )
    }
    
    return res
    
};

console.log(titleToNumber('AB'))


// #math #string
// ##easy

// Time complexity = O(n)
// Space complexity = O(1)