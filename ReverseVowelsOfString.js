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



// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(n)
var reverseVowels = function(s) {
    const isVowel = vowel => 'aeiou'.includes(vowel.toLowerCase())
    let i = 0, j = s.length - 1
    s = s.split('')
    
    while(i < j){
        if(!isVowel(s[i])) i++
        else if(!isVowel(s[j])) j--
        else{
            [s[i], s[j]] = [s[j], s[i]]
            i++
            j--
        }
    }

    return s.join('')
    
};

console.log(reverseVowels('aA'))


// #string #two-pointers
// ##easy