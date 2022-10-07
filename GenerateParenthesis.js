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

    const recur = (str, open, close) => {
        // close parenthesis cannot be more than open parenthesis at any given time to stay valid
        if(open > close) return

        // base case, now we have pairs of parenthesis
        if(open === 0 && close === 0){
            res.push(str)
            return
        }

        // Insert open parenthesis and search for the next valid insertion
        if(open > 0) recur(`${str}(`, open - 1, close)

        // Insert close parenthesis and search for the next valid insertion
        if(close > 0) recur(`${str})`, open, close - 1)
    }

    recur('', n, n)

    return res
};

console.log(generateParenthesis(3))


// #string #dynamic-programming #backtracking
// ##medium