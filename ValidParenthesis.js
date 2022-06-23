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


var isValid = function(s) {

    const p = { '(': ')', '{': '}', '[':']' }
    let ans = []

    for(let i=0; i<s.length; i++){
        if( s.charAt(i) in p ){
            ans.push(s.charAt(i))
        }else if( ans.length !== 0 && p[ans[ans.length-1]] === s.charAt(i)  ){
            ans.pop()
        }else {
            return false
        }
    }
    
    return ans.length === 0 ? true : false
};

// isValid('{{({})}}')
// isValid('()[]{}')