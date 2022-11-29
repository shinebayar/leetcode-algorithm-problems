// 541. Reverse String II
// Easy like=1358 unlike=2891

// Add to List

// Share
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104
// Accepted
// 179,041
// Submissions
// 354,264








// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(n)
var reverseStr = function(s, k) {
    let res = ''
    
    const reverse = (j) => {
        for(let i=j; i>j-k; i--){
            res += s[i] || ''
        }
    }
    
    for(let i=0; i<s.length; i++){
        if(i === 0){
            reverse(k-1)
            i = i + k - 1
        }
        else if(i % (2 * k) === 0){
            reverse(i + k - 1)
            i = i + k - 1
        }else{
            res += s[i]
        }
        
        
    }
    
    return res
};







// #two-pointers #string
// ##easy