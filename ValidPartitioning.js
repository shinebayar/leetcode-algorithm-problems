// 131. Palindrome Partitioning
// Medium like=8422 unlike=260

// Add to List

// Share
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.
// Accepted
// 526,852
// Submissions
// 847,587



/**
 * @param {string} s
 * @return {string[][]}
 */


// Approach: backtracking
// Time complexity = O()
// Space complexity = O()
var partition = function(s) {
    const isPalindrome = (str) => {
        for(let i=0; i<str.length/2; i++){
            if(str[i] !== str[str.length - 1 - i]) return false
        }
        return true
    }
    
    let ans = []
    let partitions = []

    // dfs recursive helper function
    const recur = (str, start, parts, result) => {
        // base case
        if(start === str.length){
            result.push([...parts])
            return
        }

        // dfs recursive case
        for(let i=start+1; i<=str.length; i++){
            let target = str.substring(start, i)
            if(isPalindrome(target)){
                parts.push(target)
                recur(str, i, parts, result)
                parts.pop()
            }
        }
    }

    recur(s, 0, partitions, ans)
    
    return ans
};

console.log(partition('aab'))


// #string #dynamic-programming #backtracking
// ##medium