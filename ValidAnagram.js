// 242. Valid Anagram
// Easy like=6791 unlike=238

// Add to List

// Share
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Accepted
// 1,626,137
// Submissions
// 2,599,806



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time complexity = O(n)
// Space complexity = O(n)
 var isAnagram = function(s, t) {
    let hash = {}
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]) hash[s[i]] += 1
        else hash[s[i]] = 1
    }
    
    for(let j=0; j<t.length; j++){
        if(hash[t[j]] && hash[t[j]] !== 0){
            hash[t[j]] -= 1
        } 
        else return false
        if(hash[t[j]] === 0) delete hash[t[j]]
    }
    
    console.log(hash)
    
    return Object.keys(hash).length === 0
};


// #hash-table #string #sorting
// ##easy