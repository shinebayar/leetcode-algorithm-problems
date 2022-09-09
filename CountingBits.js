// 338. Counting Bits
// Easy like=7683 unlike=364

// Add to List

// Share
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105
 

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
// Accepted
// 656,375
// Submissions
// 875,330


/**
 * @param {number} n
 * @return {number[]}
 */

// Approach 1: Using Bit manipulation
// Time complexity = O(n)
// Space complexity = O(n)
var countBits = function(n) {
   let ans = []
   let tmp_sum = 0
   let binary
   
   for(let i=0; i<=n; i++){
       binary = Number(i).toString('2')
       
       if(binary.length > 1){
           for(let j=0; j<binary.length; j++){
               if(binary[j] == 1) tmp_sum += 1
           }
           ans.push(tmp_sum)
           tmp_sum = 0
       }else{
           ans.push(binary)
       }
   }
    
   return ans
 };

 console.log(countBits(9))


// Approach 1: Using dynamic programming
// Time complexity = O(n)
// Space complexity = O(n)
var countBits1 = function(n) {
    let ans = [0]
    let offset = 1

    for(let index = 1; index <= n; index++){
        if( offset * 2 == index ) offset *= 2
        ans[index] = ans[index - offset] + 1
    }
 
    return ans
}

// #bit-manipulation #dynamic-programming
// ##easy 