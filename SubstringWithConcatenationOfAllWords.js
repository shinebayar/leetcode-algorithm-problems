// 30. Substring with Concatenation of All Words
// Solved
// Hard
// Topics
// Companies
// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 445.9K
// Submissions
// 1.4M
// Acceptance Rate
// 32.6%







/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */



// Approach: hash-table DS + sliding-window technique
// Time complexity = O()
// Space complexity = O()
var findSubstring = function(s, words) {
    let map = new Map()
    let ans = []
    let word_length = words[0].length

    for(let i=0; i<words.length; i++) map.set(words[i], map.get(words[i]) + 1|| 1)
        
    let i = 0
    let sliding_window = words.length * words[0].length
    
    while(i + sliding_window <= s.length){
        let str = s.substring(i, i + sliding_window)
        if(isConcatenated(str)) ans.push(i)
            i++
    }

    function isConcatenated(strings){
        for(let i=0; i<strings.length; i=i+word_length){
            let str = strings.substring(i, i + word_length)
            if(map.get(str) > 0){
                map.set(str, map.get(str) - 1)
            } 
            else{
                undoMaps(i, strings)
                return false
            }
        }
        undoMaps(strings.length, strings)
        return true
    }
    
    function undoMaps(end, strings){
        for(let i=0; i<end; i=i+word_length){
            let str = strings.substring(i, i + word_length)
            map.set(str, map.get(str) + 1)
        }
    }

    return ans
};







// #string #hash-table  #sliding-window
// #hard