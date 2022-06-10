const LongestCommonPrefix = str => {
    let answer = 0;

    for(let i=0; i<str.length; i++){
        for(let j=0; j<str[i].length; j++){
            if(str[i].length >= i+1 && str[j+1].length >= j+1){
                if(str[i].charAt(j) === str[j].charAt(j)){
                    answer = answer + 1
            }
            }
        }
    }
    console.log(answer)
}

LongestCommonPrefix(["flower","flow","flight"])