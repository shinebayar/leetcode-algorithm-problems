// 953. Verifying an Alien Dictionary
// Easy like=4.3K unlike=1.4K
// Companies
// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.
// Accepted
// 432.7K
// Submissions
// 800K
// Acceptance Rate
// 54.1%




/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */



// Approach: Hash-map DS
// Time complexity = O(n)
// Space complexity = O(n)
var isAlienSorted = function(words, order) {
    let map = new Map()

    for(let i=0; i<order.length; i++) map.set(order[i], i)

    for(let i=0; i<words.length; i++){
        if(words[i + 1] !== undefined){
            for(let j=0; j<words[i].length; j++){
                if(map.get(words[i][j]) === map.get(words[i+1][j])) continue
                else if(map.get(words[i][j]) < map.get(words[i+1][j])) break
                else return false
            }
        }
    }

    return true
};






// #string #array #hash-table
// ##easy