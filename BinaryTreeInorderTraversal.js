// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// Approach 1: Recursion
// Time: O(n)
// Space: O(n) + callstack O(n)
var inorderTraversal = function(root) {
    let res = []
    const get = node => {
        if(node === null) return
        get(node.left)
        res.push(node.val)
        get(node.right)
    }

    get(root)

    return res
};

console.log(inorderTraversal([1,null,2,3]))


// Approach 2: Using stack
// Time: O(n)
// Space: O(n)
var inorderTraversal2 = function(root) {
    let res = []
    let stack = []
    cur = root
    while(cur !== null || stack.length !== 0){
        while(cur !== null){
            console.log(cur.val)
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur)
        cur = cur.right
    }

    return res
};


// Approach 3: Iteration & Morris Traversal
// Time: O(n)
// Space: O(1)
var inorderTraversal3 = function(root) {
     let node = root
     const result = []
     while(node){
        if(!node.left){
            result.push(node.val)
            node = node.right
        }else{
            const pred = findPredecessor(node)
            if(pred.right === node){
                pred.right = null
                result.push(node.val)
                node = node.right
            }else{
                pred.right = node
                node = node.left
            }
        }
     }
     return result
};

function findPredecessor(root){
    let node = root.left
    while(node.right && node.right !==root){
        node = node.right
    }
    return node
}

// console.log(inorderTraversal([1,null,2,3]))

// #stack #tree #depth-first-search #binary-tree
// Time complexity = 
// Space complexity = 