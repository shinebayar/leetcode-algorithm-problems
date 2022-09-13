// 387. First Unique Character in a String
// Easy like=6604 unlike=226

// Add to List

// Share
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
// Accepted
// 1,229,413
// Submissions
// 2,095,186



/**
 * @param {string} s
 * @return {number}
 */

// Approach: Using hash table data structure using javascript map object
// Time complexity = O(n)
// Space complexity = O(n)
 var firstUniqChar1 = function(s) {
    let map = new Map()
    
    for(let i=0; i<s.length; i++){
        if( map.has(s[i]) ) map.set(s[i], map.get(s[i]) + 1)
        else map.set(s[i], 1)
    }
    
    for(let i=0; i<s.length; i++){
        if(map.get(s[i]) === 1) return i
    }
    
    return -1
};



// console.log(firstUniqChar1('leetcode'))

// Approach: Using hash table data structure using javascript simple object
// Time complexity = O(n)
// Space complexity = O(n)
var firstUniqChar = function(s) {
    let obj = {}
    
    for(let i=0; i<s.length; i++){
        if( obj[s[i]] ) obj[s[i]] = obj[s[i]] + 1
        else obj[s[i]] = 1
    }
    
    for(let i=0; i<s.length; i++){
        if(obj[s[i]] === 1) return i
    }
    
    return -1
};

console.log(firstUniqChar('leetcode'))


// #hash-table #string #queue #counting
// ##easy