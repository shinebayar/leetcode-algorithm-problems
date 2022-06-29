// 28. Implement strStr()

// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 // Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.


var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1

    for(let i=0; i<=haystack.length-needle.length; i++){
        j=0
        while(j<needle.length){
            if(haystack.charAt(i+j) != needle[j]){
                break
            }
            j++
        }

        if(j == needle.length) return i
    }

    console.log(-1)
    return -1

};

// strStr('aaaxaaax', 'aaaa')
strStr('hello', 'll')

// #two-pointers #string #string-matching