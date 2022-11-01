// 202. Happy Number
// Easy like=6418 unlike=804

// Add to List

// Share
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
// Accepted
// 912,137
// Submissions
// 1,689,531



/**
 * @param {number} n
 * @return {boolean}
 */


// Approach: hash-table DS, and recursive
// Time complexity = O(n*log(n))
// Space complexity = O(n)
var isHappy1 = function(n) {
    let map = new Map()
    let ans = true
    
    const checkHappyRecursive = k => {
        if(map.get(k) === 2) return ans=false
        
        k = k.toString()
        let res = 0

        for(let i=0; i<k.length; i++){
            res = res + Math.pow(k[i], 2)
        }

        if(map.has(res)) map.set(res, 2)
        else map.set(res, 1)

        if(res === 1) return ans=true
        else checkHappyRecursive(res)
    }

    checkHappyRecursive(n)
    
    return ans

};




// Approach: hash-table DS
// Time complexity = O(n*log(n))
// Space complexity = O(n)
var isHappy2 = function(n) {
    
    const happySum = a => {
        a = a.toString()
        let tmp = 0
        for(let i=0; i<a.length; i++) tmp += Math.pow(a[i], 2)
        return tmp
    }
    
    let map = new Map()
    
    while(n !== 1){
        let sum = happySum(n)
        if(map.has(sum)) return false
        if(sum === 1) return true
        map.set(sum, sum)
        n = sum
        
    }
    
    return true
};


// #hash-table #math #two-pointers
// ##easy