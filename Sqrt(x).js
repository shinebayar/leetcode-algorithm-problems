// 69. Sqrt(x)

// Easy like=5017 unlike=3609

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 // Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1





// Approach: math
// Time complexity = O(sqrt(x))
// Space complexity = O(1)
var mySqrt1 = function(x) {
    let res = 1
    while(res * res < x){
        res += 1
    }
    
    return (res * res > x) ? res - 1 : res
};




// Approach: binary search
// Time complexity = O(logn)
// Space complexity = O(1)
var mySqrt = function(x) {
  let left = 0
  let right = Math.ceil(x/2)
  
  while(left <= right){
      let mid = Math.floor((left + right) / 2)
      if(mid * mid > x) right = mid - 1
      else left = mid + 1
  }
  
  return right
};


console.log(mySqrt(27))



// #math #binary-search
// ##easy