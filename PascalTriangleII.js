// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

var getRow = function(rowIndex) {
    const res = []
    let temp = []

    if(rowIndex = 0) return [1]

    if(rowIndex >= 1) {
        temp.push(1)
        res.push(temp)
        temp = []
    }
    
    for(let i=1; i<=rowIndex; i++ ){
        for(let k=0; k<=i; k++){
            temp[k] = (res[i-1][k-1] ? res[i-1][k-1] : 0) + (res[i-1][k] ? res[i-1][k] : 0)
        }
        res.push(temp)
        temp = []
    }
    
    return res[rowIndex]
};

getRow(3)

// #array #dynamic-programming

// Time complexity = O(n*n) -- n different rows and each row has n elements
// Space complexity = O(n*n) -- if you count output array as extra space