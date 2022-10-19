// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45





// Approach: memoization
// Time complexity = O(n)
// Space complexity = O(n)
var climbStairs1 = function(n) {
    const count = (stairs, cache) => {
        if(stairs < 0) return 0
        if(stairs === 0) return 1
        if(cache[stairs]) return cache[stairs]
        cache[stairs] = count(stairs - 1, cache) + count(stairs - 2, cache)
        return cache[stairs]
    }

    return count(n, [])
};

// console.log(climbStairs1(3))


// Approach: dynamic-programming (save last two steps)
// Time complexity = O(n)
// Space complexity = O(1)
var climbStairs = function(n) {
    let a = 0
    let b = 1
    let c

    for(let i=2; i<=n; i++){
        c = a + b
        a = b
        b = c
    }

    return b
};

console.log(climbStairs(4))




// #math #dynamic-programming #memoization
// @easy