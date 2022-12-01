// 557. Reverse Words in a String III
// Easy like=4369 unlike=215

// Add to List

// Share
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.
// Accepted
// 621,456
// Submissions
// 761,433








// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var reverseWords = function(s) {
    let res = ''
    
    const reverse = (a, b) => {
        if(b === s.length - 1 && a !== 0) res += ' '
        for(let i=b; i>=a; i--){
            res += s[i]
        }
    }
    
    for(let i=0, j=1; j<s.length; j++){
        if(s[j] === ' ' && i === 0){
            reverse(i, j-1)
            i = j
        }else if((s[j] === ' ' || s[j+1] === undefined) && i !== 0){
            reverse(i+1, j)
            i = j
        }else if(s[j] === ' ' || s[j+1] === undefined){
            reverse(i, j)
        }
    }
    
    return res
};







// #two-pointers #string
// ##easy