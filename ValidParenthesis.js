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




// Appraoch: stack and hash-table DS
// Time complexity = O(n)
// Space complexity = O(n)
var isValid = function(s) {
    let hash = {')':'(', '}':'{', ']':'['}
    let stack = []
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i])
        else if(hash[s[i]] === stack[stack.length-1]) stack.pop()
        else return false
    }
    
    return stack.length === 0
};

console.log(isValid('{{({})}}'))

// #string #stack
// ##easy