function twoSum(arr, target){
    let ans = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] < target){
            for(let j=1; j<arr.length; j++){
                if((target - arr[i]) == arr[i+j]){
                    ans.push(i)
                    ans.push(j)
                }
            }
        }
    }

    console.log(ans)

}

twoSum([3,2,4], 6)