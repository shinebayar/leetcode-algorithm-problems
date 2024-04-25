// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 // Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.





// Approach: math
// Time complexity = 0(n2)
// Space complexity = O(1)
var longestCommonPrefix = function(strs) {
    let first = strs[0]
    
    for(let i=0; i<first.length; i++){
        for(let j=1; j<strs.length; j++){
            let other = strs[j]
            if(first[i] !== other[i]) return first.slice(0, i)
        }
    }
    
    return first
};

console.log(LongestCommonPrefix(["flower","flow","floght"]))





// Approach: math
// Time complexity = 0(n2)
// Space complexity = O(1)
var longestCommonPrefix = function(strs) {
    let ans = '', current,  count = 0

    for(let i=0; i<strs[0].length; i++){
        current = strs[0][i]
        for(let j=0; j<strs.length; j++){
            if(strs[j][i] !== current) return ans
            else count++
        }
        if(count === strs.length) ans += strs[count - 1][i]
        count = 0
    }

    return ans
};





// #string
// ##easy