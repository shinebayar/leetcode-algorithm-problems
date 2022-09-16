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

