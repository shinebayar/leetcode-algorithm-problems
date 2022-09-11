const majorityElement = function(s){
    for(let i=0, j=s.length-1; i<s.length/2; i++, j--){
        let tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
    }

    return s
}

console.log(majorityElement('dorj'))