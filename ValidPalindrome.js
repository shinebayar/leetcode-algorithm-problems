// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    
    for(let i=0; i<=Math.ceil(input.length/2); i++){
        let leftPointer = input[i]
        let rightPointer = input[input.length - 1 - i]
        if(leftPointer !== rightPointer) return false
    }

    return true

};

// console.log(isPalindrome("Bab_a \ b"))
console.log(isPalindrome("A man, a \plan, a \canal: Panama"))
// console.log(isPalindrome(" "))

// Time complexity = O(log n)
// Space complexity O(1)

// two-pointer #string