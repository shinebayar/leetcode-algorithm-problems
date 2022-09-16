// 405. Convert a Number to Hexadecimal
// Easy like=980 unlike=182

// Add to List

// Share
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

 

// Example 1:

// Input: num = 26
// Output: "1a"
// Example 2:

// Input: num = -1
// Output: "ffffffff"
 

// Constraints:

// -231 <= num <= 231 - 1
// Accepted
// 106,088
// Submissions
// 230,477


/**
 * @param {number} num
 * @return {string}
 */


 var toHex = function(num) {
    let obj = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 
               10:'a', 11: 'b', 12:'c', 13:'d', 14:'e', 15:'f'}
    let allRemainer = []
    let hex = ''
    if(num > 0 ){
        while( num >= 1 ){
            remainer = (num / 16) % 1 * 16
            num = Math.floor(num / 16)
            allRemainer.push(remainer)
            if( hex.slice(-1) < remainer || hex.slice(-1) == 'a' || hex.slice(-1) == 'b' || hex.slice(-1) == 'c' || hex.slice(-1) == 'd' || hex.slice(-1) == 'e' || hex.slice(-1) == 'f'){
                hex = obj[remainer] + hex
            }else{
                hex = hex + obj[remainer]
            }
        }
        
        console.log(allRemainer)

        return hex
    }else{
        
    }
    
    
};

console.log(toHex(26))