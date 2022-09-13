// 383. Ransom Note
// Easy like=3061 unlike=364

// Add to List

// Share
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
// Accepted
// 574,159
// Submissions
// 994,449



/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Approach 1: Using hash table data structure using Map object of javascript
// Time complexity = O(n)
// Space complexity = O(n)
 var canConstruct1 = function(ransomNote, magazine) {
    let map = new Map()
    
    for(let i=0; i<magazine.length; i++){
        let el = magazine[i]
        if(map.has(el)) map.set(el, map.get(el) + 1)
        else map.set(el, 1)
    }
    
    for(let i=0; i<ransomNote.length; i++){
        let el = ransomNote[i]
        if(map.has(el) && map.get(el) > 1) map.set(el, map.get(el) - 1)
        else if(map.has(el) && map.get(el) === 1) map.delete(el)
        else return false
    }
    
    return true
};

// console.log(canConstruct1('aa', 'aab'))



// Approach 2: Using hash table data structure using simple object
// Time complexity = O(n)
// Space complexity = O(n)
var canConstruct2 = function(ransomNote, magazine) {
    let obj = {}
    
    for(let i=0; i<magazine.length; i++){
        let el = magazine[i]
        if(obj[el]) obj[el] = obj[el] + 1
        else obj[el] = 1
    }
    
    for(let i=0; i<ransomNote.length; i++){
        let el = ransomNote[i]
        if(obj[el] && obj[el] > 1) obj[el] = obj[el] - 1
        else if(obj[el] && obj[el] === 1) delete obj[el]
        else return false
    }
    
    return true
};

console.log(canConstruct2('aa', 'aab'))



// #hash-table #string #counting
// ##easy