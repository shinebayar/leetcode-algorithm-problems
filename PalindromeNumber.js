// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1


// Approach: math
// Time complexity = O(n)
// Space complexity = O(1)
var isPalindrome1 = function(x) {
    x = '' + x
    
    for(let i=0; i<x.length/2; i++){
        if(x[i] !== x[x.length - 1 - i]) return false
    }
    
    return true
};

// console.log(isPalindrome1(-1))



// Approach: math (not convert to string)
// Time complexity = O(n)
// Space complexity = O(1)
var isPalindrome = function(x) {
    let reverse = 0
    let tmp = x

    while(x !== 0){
        reverse = (reverse * 10) + (x % 10)
        x = Math.trunc(x / 10)
    }

    return reverse === tmp
};

console.log(isPalindrome(121))


// #math
// ##easy