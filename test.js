const majorityElement = function(nums){
    let i
    let largest = second = -2454635434
        
    for (i=0; i<nums.length; i++){
        if (nums[i] > largest){
            second = largest 
            largest = nums[i]
        }else if (nums[i] != largest && nums[i] > second ){
            second = nums[i]
        }
    }

    return second

}

console.log(majorityElement([2,3,6,6,5]))