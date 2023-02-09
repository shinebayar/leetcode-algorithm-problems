// 187. Repeated DNA Sequences
// Medium like=2.7K unlike=466
// Companies
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'.
// Accepted
// 312.5K
// Submissions
// 668.9K
// Acceptance Rate
// 46.7%








/**
 * @param {string} s
 * @return {string[]}
 */


// Approach: hash-map DS & sliding-window technique
// Time complexity = O(n)
// Space complexity = O(n)
var findRepeatedDnaSequences = function(s) {
    let map = new Map()
    let res = new Map()
    let output = []

    for(let i=0; i<s.length; i++){
        if(i + 10 <= s.length){
            let str = s.slice(i, i + 10)
            if(map.has(str)) res.set(str, str)
            else map.set(str, str)
        }
    }

    for(let [key, value] of res) output.push(key)

    return output
};






// #string #hash-table #sliding-window #bit-manipulation #rolling-hash #hash-function
// ##medium