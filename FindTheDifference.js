// 389. Find the Difference
// Easy

// 3163

// 397

// Add to List


// Share
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.
// Accepted
// 432,001
// Submissions
// 714,657


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// Approach 1-1: Using hash data structure using javascript Map object
// Time complexity = O(n)
// Space complexity = O(n)
var findTheDifference1 = function(s, t) {
    let map = new Map()
    
    for(let i=0; i<t.length; i++){
        if(map.has(t[i])) map.set(t[i], map.get(t[i]) + 1)
        else map.set(t[i], 1)
    }
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i]) && map.get(s[i]) === 1) map.delete(s[i])
        else if(map.has(s[i]) && map.get(s[i]) > 1) map.set(s[i], map.get(s[i]) -1)
    }
    
    return Array.from(map)[0][0]
};

// console.log(findTheDifference1('abcd', 'abcde'))


// Approach 1-2: Using hash data structure using javascript simple object
// Time complexity = O(n)
// Space complexity = O(n)
var findTheDifference2 = function(s, t) {
    let obj = {}
    
    for(let i=0; i<t.length; i++){
        if(obj[t[i]]) obj[t[i]] = obj[t[i]] + 1
        else obj[t[i]] = 1
    }
    
    for(let i=0; i<s.length; i++){
        if(obj[s[i]] && obj[s[i]] === 1) delete obj[s[i]]
        else if(obj[s[i]] && obj[s[i]] > 1) obj[s[i]] = obj[s[i]] - 1
    }

    return Object.keys(obj)[0] 
};

// console.log(findTheDifference2('abcd', 'abcde'))



// Approach 2: Using sorting algorithm
// Time complexity = O(n2)
// Space complexity = O(n)
var findTheDifference3 = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    for(let i=0; i<t.length; i++){
        if(t[i] !== s[i]) return t[i]
    }
};

// console.log(findTheDifference3('dorj', 'orjdh'))


// Approach 3: Using bit manipulation
// Time complexity = O(n)
// Space complexity = O(1)
var findTheDifference4 = function(s, t) {
    let joinedText = s + t
    let ans

    for(let i=0; i<joinedText.length; i++){
        ans = ans ^ joinedText[i].charCodeAt(0).toString(2)
    }

    return String.fromCharCode(parseInt(ans, 2))
};

console.log(findTheDifference4('dorj', 'orjdh'))



// #hash-table #string #bit-manipulation #sorting
// ##easy
