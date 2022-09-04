// 258. Add Digits
// Easy like=2722 unlike=1693

// Add to List

// Share
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1



/**
 * @param {number} num
 * @return {number}
 */

// Approach 1: Using recursion, naive solution
// Time complexity = O(2n) => O(n)
    // Converting a number to a string: O(n)
    // Iterating through the string: O(n).
// Space complexity = O(n) because we'll have at most n calls on the call stacks.
 var addDigits1 = function(num) {
    if(num < 10) return num
    
    let sum = 0
    num = num + ''
    
    for(let i=0; i<num.length; i++){
        sum += parseInt(num[i])
    }
    
    return addDigits1(sum)
};

// console.log(addDigits1(186))



// Approach 2: Using iteration
// Time complexity = O(logn)
    // The inner while loop divides the num by 10 each time: O(logn)
    // The outer while loop does constant operations
// Space complexity = O(1) because we don't store anything
var addDigits2 = function(num) {
    while( num >= 10){
        let sum = 0

        while( num > 0){
            sum += num % 10
            num = Math.floor(num / 10)
            console.log('sum', sum)
        }

        num = sum
    }

    return num
};

console.log(addDigits2(186))

// Approach 3: using Congruence formula or digital root
// Time = O(1) because all operations take constant time.
// Space = O(1) because we don't store anything.
var addDigits2 = function(num) {
    return (num - 1) % 9 + 1
};



// #math #simulation #number-theory 
// ##easy