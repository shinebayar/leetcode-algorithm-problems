const majorityElement = function(A){
    let b = Math.abs(A)
    b = b.toString()
    for(let i=0, j=b.length; i<Math.ceil(b.length/2); i++, j--){
        if(b[i] !== b[j-1] ) return 0
    }
    
    return 1
}

console.log(majorityElement(2147447412))