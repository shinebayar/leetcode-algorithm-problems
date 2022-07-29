// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let res = []
    let temp = []

    if(numRows >= 1){
        temp.push(1)
        res.push(temp)
        temp = []
    }
    
    for(let i=1; i<numRows; i++){
        for(let k=0; k<=i; k++){
            temp.push( (res[i-1][k-1] ? res[i-1][k-1] : 0) + (res[i-1][k] ? res[i-1][k] : 0) )
        }
        res.push(temp)
        temp = []
    }

    console.log(res)
    return res
};

generate(5)

// #array #dynamic-programming
// ##easy

// Time complexity = O(n*n) -- n different rows and each row has n elements
// Space complexity = O(n*n) -- if you count output array as extra space