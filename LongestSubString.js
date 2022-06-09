const LongestSubstring = s => {
    let answer = []
    for(let i=0; i<s.length; i ++){
        if( s.charAt(i) !== s.charAt(i+1) & s.charAt(i+1) !=='' ){
            answer[i] = []
            answer[i].push(s.charAt(i))
            for(let j=(i+1); j<s.length-i; j++){
                answer[i].push(s.charAt(j))
            }
        }
        // answer.push(s.charAt(i))
        // console.log(answer)
        // if(answer[s.charAt(i)] === undefined) answer[s.charAt(i)] = 0
        // answer[s.charAt(i)] = answer[s.charAt(i)] + 1
        // console.log(s.charAt(i))
    }

    // [[1,2,3], [4,5,6]]

    console.log(answer)

    // let ans = 0;
    // for(key in answer){
    //     if(ans < answer[key]) ans = answer[key]
    // }
    
    // console.log(answer)
    // console.log(typeof(answer))
    // console.log(answer.a)
    // console.log(answer.s)
    // console.log(answer.length)
    // console.log(ans)

    return answer
}

LongestSubstring('abcab')
// LongestSubstring('pwwkew')

// let counter = (str) => {
//   return str.split("").reduce((total, letter) => {
//     total[letter] ? total[letter]++ : (total[letter] = 1);
//     console.log((total))
//     return total;
//   }, {});
// };

// counter("aabsssd");