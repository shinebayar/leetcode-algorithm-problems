// 345. Reverse Vowels of a String
// Easy like=1861 unlike=1984

// Add to List

// Share
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.
// Accepted
// 378,655
// Submissions
// 797,678


/**
 * @param {string} s
 * @return {string}
 */


var reverseVowels = function(s) {

    const isVowel = val => { 
        return 'aeiou'.includes(val.toLowerCase()) 
    }

    s = s.split('')
    let start = 0
    let end = s.length - 1

    while(start < end){
        if( isVowel(s[start]) && isVowel(s[end]) ){
                let tmp = s[start]
                s[start] = s[end]
                s[end] = tmp
                start++
                end--
        }else if( isVowel(s[start]) ){
            end--
        }else if( isVowel(s[end]) ){
            start++
        }else{
            start++
            end--
        }
    }

    return s.join('') 
    
};

console.log(reverseVowels('aA'))


// #string #two-pointers
// ##easy