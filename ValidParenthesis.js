// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Approach: stack DS
// Time complexity = O(n)
// Space complexity = O(n)
var isValid = function(s) {
    let stack = []
    let opposite = {')': '(', '}': '{', ']': '[',}
    
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }else{
            if(stack[stack.length-1] === opposite[char]) stack.pop()
            else return false
        }
    }
    
    return stack.length === 0 ? true : false
};

// isValid('{{({})}}')
// isValid('()[]{}')


// #string #stack
// ##easy