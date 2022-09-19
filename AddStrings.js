// 415. Add Strings
// Easy like=3767 unlike=597

// Add to List

// Share
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.
// Accepted
// 512,603
// Submissions
// 976,332


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */


// Approach: using math
// Time complexity = O(n)
// Space complexity = O(n)
var addStrings = function(num1, num2) {
    let long, short
    let ans = ''
    let carry = 0

    if(num1.length > num2.length){
        long = num1.split('').map(item => parseInt(item))
        short = num2.split('').map(item => parseInt(item))
    }else{
        long = num2.split('').map(item => parseInt(item))
        short = num1.split('').map(item => parseInt(item))
    }

    for(let i=long.length-1, j=short.length-1; i>=0; i--, j--){
        if(short[j] === undefined) short[j] = 0
        if(carry === 0){
            if((long[i] + short[j]) >= 10){
                ans = (long[i] + short[j]) % 10 + ans
                carry = 1
            }else{
                ans = (long[i] + short[j]) % 10 + ans
            }
        }else {
            if((long[i] + short[j] + 1) >= 10){
                ans = (long[i] + short[j] + 1) % 10 + ans
                carry= 1
            }else{
                ans = (long[i] + short[j] + 1) % 10 + ans
                carry = 0
            }
        }
    }

    return carry === 1 ? 1 + ans : ans
};

console.log(addStrings("1", "9"))


// #math #string #simulation
// ##easy