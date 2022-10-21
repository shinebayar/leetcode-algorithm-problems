// 101. Symmetric Tree

// Easy like=11346 unlike=258

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?






// Approach 1: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1) if we ignore the recursion stack which is the height of tree
var isSymmetric1 = function(root) {
    if(root === null) return true
    
    const check = (n1, n2) => {
        if(n1 === null || n2 === null) return n1 === n2
        if(n1.val !== n2.val) return false
        return check(n1.left, n2.right) && check(n1.right, n2.left)
    }
    
    return check(root.left, root.right)
};




// Approach 2: BFS algorithm (get each layer and check them)
// Time complexity = O(n)
// Space complexity = O(n)
var isSymmetric2 = function(root) {
    if(!root) return true
	let queue = [root.left, root.right]
	
	while(queue.length){
		let n1 = queue.pop()
		let n2 = queue.pop()
		
		if(n1 === null && n2 === null) continue
		if((n1 && n2 === null ) || (n1 === null && n2)) return false
		if(n1.val !== n2.val) return false
		
		queue.push(n1.left, n2.right)
		queue.push(n1.right, n2.left)
	}
	
	return true
};



// #tree #depth-first-search #breadth-first-search #binary-tree
// ##easy





// Binary search tree
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(val){
        this.root = new Node(val)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(val){
        this.count++

        let newNode = new Node(val)

        const searchTree = node => {
            // if val < node.val, go left
            if(val < node.val){
                // if no left child, append new node
                if(!node.left){
                    node.left = newNode
                // if left child, look left again 
                }else{
                    searchTree(node.left)
                }
            }

            // if val > node.val, go right
            else if(val > node.val){
                // if no right child, append new node
                if(!node.right){
                    node.right = newNode
                }
                // if right child, look right again
                else{
                    searchTree(node.right)   
                }
            }
         }

        searchTree(this.root)
    }

    // continue traversing left until no more children
    min(){
        let currentNode = this.root

        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.val
    }

    // continue traversing right until no more children 
    max(){
        let currentNode = this.root

        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.val
    }

    contains(val){
        let currentNode = this.root

        while(currentNode){
            if(val === currentNode.val) return true

            if(val < currentNode.val){
                currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }
        }

        return false
    }

    // depth first search
    
    // in-order => left, root, right
    dfsInOrder(){
        let result = []

        const traverse = node => {
            // if left child exists, go left again
            if(node.left) traverse(node.left)
            // capture root node val
            result.push(node.val)
            // if right child exists, go right again
            if(node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }
    
    // pre-order => root, left, right
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            // capture root node val
            result.push(node.val)
            // if left child exists, go left again
            if(node.left) traverse(node.left)
            // if right child exists, go right again
            if(node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }

    // post-order => left, right, root
    dfsPostOrder(){
        let result = []

        const traverse = node => {
            // if left child exists ,go left again
            if(node.left) traverse(node.left)
            // if right child exists, go right again
            if(node.right) traverse(node.right)
            // capture root node val
            result.push(node.val)
        }

        traverse(this.root)

        return result
    }



    // breadth first search
    // use q queue !
    bfs(){
        let result = []

        let queue = [] // help us to out

        queue.push(this.root)
        console.log('after pushed root into queue: ', queue)

        while(queue.length){
            let currentNode = queue.shift() // get first element to out

            result.push(currentNode.val)

            if(currentNode.left) queue.push(currentNode.left)

            if(currentNode.right) queue.push(currentNode.right)
        }

        return result
    }
}

const bst = new BST(1)
bst.insert(2)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(4)
bst.insert(3)

console.log(bst)
// console.log(bst.root.left)
// console.log(bst.root.right)

// console.log(bst.size())

// console.log(bst.min())
// console.log(bst.max())

// console.log(bst.contains(3))
// console.log(bst.contains(39))

// // test for Depth-First-Search
//     // in-order: 2, 3, 12, 15, 28, 36, 39
//     console.log(bst.dfsInOrder())
//     // pre-order: 15, 3, 2, 12, 36, 28, 39
//     console.log(bst.dfsPreOrder())
//     // post-order 2, 12, 3, 28, 39, 36, 15
//     console.log(bst.dfsPostOrder())

// // test for Breadth-First-Search
//     // 15, 3, 36, 2, 12, 28, 39
//     console.log(bst.bfs())



console.log('Answer is: ', isSymmetric2(bst.root))