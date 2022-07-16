// 101. Symmetric Tree

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

var isSymmetric = function(root) {
    if(root === null) return true

    return isSame(root.left, root.right)
};

const isSame = (tree1, tree2) => {
    if(tree1 === null || tree2 === null) return tree1 === tree2

    if(tree1.val !== tree2.val) return false

    return isSame(tree1.left, tree2.right) && isSame(tree1.right, tree2.left)
}

isSymmetric([1,2,2,3,4,4,3])

// #tree #depth-first-search #breadth-first-search #binary-tree
// @easy





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
        this.count = 0
    }

    size(){
        return this.count
    }

    insert(val){
        this.count++

        let newNode = new Node(val)

        const searchTree = node => {
            // if value < node.val, go left
            if(val < node.val){
                // if no left child, append new node
                if(!node.left){
                    node.left = newNode
                // if left child, look left again 
                }else{
                    searchTree(node.left)
                }
            }

            // if value > node.val, go right
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
    }

    min(){

    }

    max(){
        
    }

    contains(){

    }

    // depth first search
    
    // in-order
    dfsInOrder(){

    }
    
    // pre-order
    dfsPreOrder(){

    }

    // post-order
    dfsPostOrder(){

    }



    // breadth first search
}
