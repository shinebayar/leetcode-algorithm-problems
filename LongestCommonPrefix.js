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

const LongestCommonPrefix = strs => {

    let ans = ''

    if( strs === null && strs.length === 0) return ans

    let minLen = strs[0].length

    for(let i=0; i<strs.length; i++){
        minLen = Math.min(minLen, strs[i].length)
    }

    for(let i=0; i<minLen; i++){
        let current = strs[0][i]
        for(let j=0; j<strs.length; j++){
            if(strs[j][i] === current) ans += current
        }
    }

    console.log(ans)
    return ans
}

LongestCommonPrefix(["flower","flow","floght"])
// 4 loop
// flow f = f 
// flower 


// const LongestCommonPrefix = strs => {

//     let ans = ''

//     if( strs === null && strs.length === 0) return ans

//     let minLen = strs[0].length

//     for(let i=0; i<strs.length; i++){
//         minLen = Math.min(minLen, strs[i].length)
//     }

//     for(let i=0; i<minLen; i++){
//         let current = strs[0][i]
//         for(let j=0; j<strs.length; j++){
//             if(strs[j][i] !== current) return ans
//         }
//         ans += current
//     }

//     console.log(ans)
//     return ans
// }