// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

 // Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    let sum = ''
    let carry = 0
    let i = a.length-1
    let j = b.length-1

    while(i>=0 || j>=0){
        let aVal = a[i] ? a[i] : '0'
        let bVal = b[j] ? b[j] : '0'
        sum = (aVal ^ bVal ^ carry) + sum
        if(aVal === bVal && aVal !== String(carry)){
            carry = Number(!carry)
        }
        i--
        j--
    }

    return carry ? (String(carry) + sum) : sum
};

console.log(addBinary('11', '1'))

/* 
a b carry => sum new_carry
0 0 0     => 0   0
0 0 1     => 1   0  -> flip carry
1 0 0     => 1   0
1 0 1     => 0   1
1 1 0     => 0   1  -> flip carry
1 1 1     => 1   1
*/

// Approach: Built in function
// var addBinary = function(a, b) {
//     return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
// };

// #math #string #bit-manipulation #simulation
// @easy
// time-complexity = O(n) - linear
// space-complexity = O(1) - constant