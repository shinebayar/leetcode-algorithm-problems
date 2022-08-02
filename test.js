const test = () => {

    let sum = 0

    for(let i=1; i<=100; i++){
        sum = sum + i
    }

    console.log(100*(100-1)/2)

    return sum
    
}

console.log(test())