var findLeftLeaves = function(root) {
    let sum = 0

    const recur = (node, isLeft) => {
        if(!node) return

        if(node.left) recur(node.left, true)
        if(node.right) recur(node.right, false)

        if(isLeft && !node.left && !node.right) sum += node.val
    }

    recur(root, false)

    return sum

};

var findLeftLeaves2 = function(root) {
    let sum = 0
    let queue = [root]
    let node

    while(queue.length){
        node = queue.shift()

        if(node.left){
            if(!node.left.left && !node.left.right) sum += node.left.val
            else queue.push(node.left)
        }

        if(node.right) queue.push(node.right)
    }

    return sum

};


var thirdMax = function(nums) {
    let first = second = third = -Infinity
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] > first) [first, second, third] = [nums[i], first, second]
        else if(nums[i] > second) [second, third] = [nums[i], second]
        else if(nums[i] > third) third = nums[i]
    }
    
    console.log(third, second, first)
    
    return third != 0 ? third : first
};
console.log(thirdMax([1,-2147483648,2]))

