// 412. Fizz Buzz
// Easy like=912 unlike=153

// Add to List

// Share
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104
// Accepted
// 745,196
// Submissions
// 1,091,406



/**
 * @param {number} n
 * @return {string[]}
 */

// Approach: using math
// Time complexity = O(n)
// Space complexity = O(n)
 var fizzBuzz = function(n) {
    let ans = []
    
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0 ) ans.push('FizzBuzz')
        else if(i % 3 === 0) ans.push('Fizz')
        else if(i % 5 === 0) ans.push('Buzz')
        else ans.push(`${i}`)
    }
     
     return ans
 };

 console.log(fizzBuzz(5))

// #math #string #simulation
// ##easy