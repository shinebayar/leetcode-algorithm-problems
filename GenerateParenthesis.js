// 22. Generate Parentheses
// Medium like=15397 unlike=590

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8
// Accepted
// 1,222,159
// Submissions
// 1,705,524


/**
 * @param {number} n
 * @return {string[]}
 */



// Approach: backtracking (recursion)
// Time complexity = same as catalan number
// Space complexity = O(n)
var generateParenthesis = function(n) {
    let res = []

    const backtrack = (str, open, close) =>{
        if(open === n && close === n){
            res.push(str)
            return
        }

        if(open > close) backtrack(str + ')', open, close + 1)
        if(open < n) backtrack(str + '(', open + 1, close)
    }

    backtrack('(', 1, 0)

    return res
};

console.log(generateParenthesis(3))


// #string #dynamic-programming #backtracking
// ##medium