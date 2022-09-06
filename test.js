const majorityElement = function(re){
    let vowels = ['a', 'e', 'i', 'o', 'u']

    if(re[0] === re[re.length-1] && vowels.includes(re[0])) return true
    else false


}

console.log(majorityElement('abcda'))