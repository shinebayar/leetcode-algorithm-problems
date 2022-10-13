// helper function to check if a string is a palindrome (O(N) where N is the length of the string)
var isPalindrome = function(s) {
    for (let i = 0, maxI = s.length - 1; i < maxI / 2; i++)
        if (s[i] !== s[maxI-i]) return false;
    return true;
}

var partition = function(s) {
	// the jth index of this array will contain every partition of the first j characters
    const dp = [];
    for (let i = 0; i < s.length; i++) {
        dp.push([]);
        for (let j = 0; j <= i; j++) {
			// the substring from index j to i (inclusive)
            const sub = s.substring(j,i+1);
            // skip if the substring is not a palindrome
            if (!isPalindrome(sub)) continue;
            if (j === 0) {
                dp[i].push([sub]);
            } else {
				// take every partition of the first j-1 characters and add the new substring
				// to get a partition of the first i characters
                for (let el of dp[j-1] )
                    dp[i].push([...el,sub]);
            }
        }
    }
	// equivalent to dp[-1] in Python or dp[s.length-1] in JS (similar to the latter in other languages)
	// this index contains all partitions of the first s.length-1 characters i.e. all partitions of the entire input
    return dp.pop();
};


function test(){
    return 
    'hello';
}

const val = test();
console.log(val);