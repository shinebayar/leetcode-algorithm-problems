// 205. Isomorphic Strings
// Easy like=4581 unlike=835

// Add to List

// Share
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.
// Accepted
// 608,126
// Submissions
// 1,433,505

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let map1 = new Map()
    let map2 = new Map()
    let s1, t1
    
    for(let i=0; i<s.length; i++){
        s1 = s[i]
        t1 = t[i]
        if( (map1.has(s1) && map1.get(s1) !== t1) || (map2.has(t1) && map2.get(t1) !== s1) ){
            return false
        }
        map1.set(s1, t1)
        map2.set(t1, s1)
    }
    
    return true
};

console.log(isIsomorphic('egg', 'add'))

// Time complexity = O(n)
// Space complexity = O(n)

// #hash-table #string
// ##easy