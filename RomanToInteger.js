/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    var answer = 0;
    
    for(var i=0; i < s.length; i++){
        for(key in symbols){
            if(s.charAt(i) == key){
                answer = answer + symbols[key];
            }
        }
    }
    
    console.log(answer);
    
    return answer;
};