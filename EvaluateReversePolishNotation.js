// 150. Evaluate Reverse Polish Notation
// Medium like=5K unlike=811
// Companies
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
 

// Constraints:

// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
// Accepted
// 575.5K
// Submissions
// 1.3M
// Acceptance Rate
// 44.6%






/**
 * @param {string[]} tokens
 * @return {number}
 */



// Approach: stack DS
// Time complexity = O(n)
// Space complexity = O(n)
var evalRPN = function(tokens) {
    if(tokens.length === 1) return tokens[0]
    let stack = []
    let operands = '+-*/'
    let ans = 0

    for(let i=0; i<tokens.length; i++){
        if(!operands.includes(tokens[i])) stack.push(tokens[i])
        else{
            let a = Number(stack[stack.length-1])
            let b = Number(stack[stack.length-2])
            if(tokens[i] === '+'){
                ans = b + a
                stack.pop()
                stack.pop()
                stack.push(ans)
            }else if(tokens[i] === '-'){
                ans = b - a
                stack.pop()
                stack.pop()
                stack.push(ans)
            }else if(tokens[i] === '*'){
                ans = b * a
                stack.pop()
                stack.pop()
                stack.push(ans)
            }else if(tokens[i] === '/'){
                if(b / a < 0) ans = Math.ceil(b / a)
                else ans = Math.floor(b / a)
                stack.pop()
                stack.pop()
                stack.push(ans)
            }
        }
    }

    console.log(stack, stack[0], ans)

    return ans
};









// #array #math #stack
// ##medium