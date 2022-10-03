// 500. Keyboard Row
// Easy like=1076 unlike=986

// Add to List

// Share
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 
// Accepted
// 165,653
// Submissions
// 240,379



/**
 * @param {string[]} words
 * @return {string[]}
 */


// Approach: Hash-table DS
// Time complexity = O(n2)
// Space complexity = O(n)
var findWords = function(words) {
    let res = []
    
    let row1 = new Set('qwertyuiop')
    let row2 = new Set('asdfghjkl')
    let row3 = new Set('zxcvbnm')

    let check = (word, row) => {
        for(let i=0; i<word.length; i++) if( !row.has(word[i].toLowerCase()) ) return false
        return true
    }

    for(let word of words) if( check(word, row1) || check(word, row2) || check(word, row3) ) res.push(word)

    return res
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))

// #array #hash-table #string
// ##easy