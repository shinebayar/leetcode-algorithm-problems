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
    
    if(num > 0){
        while(num >= 1){
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
        let binary = ''
        console.log('num', num)
        num = Math.abs(num)
        while(num != 0){
            if(num % 2 === 0) binary = 0 + binary
            else binary = 1 + binary
            num = Math.floor(num/2)
        }

        binary = 0 + binary
        console.log('binary', binary)
        let flippedBinary = ''

        for(let i=0; i<binary.length; i++){
            if(binary[i] === '1') flippedBinary += '0'
            else flippedBinary += '1'
        }

        console.log('flippedBinary', flippedBinary)

        let carry = 0
        let addedBinary = ''
        let added = false
        for(let i=flippedBinary.length-1; i>=0; i--){
            if(added && carry === 0){
                addedBinary = flippedBinary[i] + addedBinary
                continue
            }else{
                if(carry === 0){
                    if(flippedBinary[i] === '1'){
                        addedBinary = 0 + addedBinary
                        carry = 1
                        added = true
                    }else {
                        addedBinary = 1 + addedBinary
                        added = true
                    }
                }else{
                    if(flippedBinary[i] === '1'){
                        addedBinary = 0 + addedBinary
                        carry = 1
                        added = true
                    }else {
                        addedBinary = 1 + addedBinary
                        carry = 0
                        added = true
                    }
                }
            }
        }

        console.log('addedBinary', addedBinary)


    }

    
    
};

// console.log(toHex(-1))





var toHex2 = function(num) {
    if (num == 0) return '0'
    let hex = '0123456789abcdef'
    let res = ''
    let count = 8 // max number is Math.pow(2,32)-1 , That means length is 32

    while (count && num) {
        let c = hex[num & 15] // map last 4 bits to a hex digit
        res = c + res
        num = num >> 4
        count--
    }

    return res
}

console.log(toHex2(26))
console.log(toHex2(-1))


// #math #bit-manipulation
// ##easy
