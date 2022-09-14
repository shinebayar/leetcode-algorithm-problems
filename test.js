var isSubsequence = function(s, t) {
    var s_length = s.length;
    var t_length = t.length;
    if(s_length > t_length) return false
    var dp = [...new Array(s_length +1)].map(ele => new Array(t_length + 1).fill(0) );
    console.log(dp)
    
    for(let i=1; i<=s_length; i++){
        for(let j=1; j<=t_length; j++){
            if(s[i-1] === t[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max( dp[i-1][j] , dp[i][j-1])
            }
        }
    }
    return dp[s_length][t_length] === s_length

};

console.log(isSubsequence("abc", "ahbgdc"))