var test = function(nums) {
    // let p1 = 0
    // let p2= 1

    // while(p1 < nums.length || p2 < nums.length){
    //     console.log(nums[p1], nums[p2])
    //     if(nums[p1] === nums[p2]) return true
    //     p2++
    //     if(nums[p2] === undefined){
    //         p1++
    //         p2 = p1 + 1
    //     }
    // }

    // return false


    // for(let i=0, j=1; j<=nums.length; j++){
    //     console.log(nums[i], nums[j])
    //     if(nums[i] === nums[j]) return true
    //     if(nums[j] === undefined){
    //         i++
    //         j = i + 1
    //     } 
    // }

    // return false


    let obj = {}

    for(let i=0; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1
        if(obj[nums[i]] === 2) return true
    }

    return false

};

console.log(test([1,2,3,4,5,4]))