// 6. Zigzag Conversion
// Medium like=5.4K unlike=11.3K
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
// Accepted
// 947.5K
// Submissions
// 2.1M
// Acceptance Rate
// 44.1%







/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Approach: math
// Time complexity = O(n)
// Space complexity = O(n)
var convert = function(s, numRows) {
    if(numRows === 1) return s

    let res = [], a = numRows - 1

    for(let i=0; i<s.length; i++){
        let index = a - Math.abs(a - (i % (a * 2)))
        res[index] = res[index] ? res[index] + s[i] : s[i]
    }

    return res.join('')
};



// Approach: math
// Time complexity = O(n)
// Space complexity = O(n)
var convert = function(s, numRows) {
    let res = '', increment

    for(let row=0; row<numRows; row++){
        increment = (numRows - 1) * 2
        for(let i=row; i<s.length; i=i+increment){
            res += s[i]
            if(0 < row && i > numRows && i + increment - 2 * row < s.length){
                res += s[i + increment - 2 * row]
            }
        }
    }

    return res

};





// #string
// ##medium