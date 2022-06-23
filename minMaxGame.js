

var minMaxGame = function(nums) {
    while(nums.length > 1){
        let isMin = true
        let newArr = []

        for(let i=0; i<nums.length; i++){
            if(isMin){
                newArr.push(Math.min(nums[i], nums[i+1]))
            }else{
                newArr.push(Math.max(nums[i], nums[i+1]))
            }
            isMin = ! isMin
        }
        nums = newArr
    }

    console.log(nums)
    return nums
};

minMaxGame([1,3,5,2,4,8,2,2])