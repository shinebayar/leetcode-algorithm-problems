// 2331. Evaluate Boolean Binary Tree
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given the root of a full binary tree with the following properties:

// Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
// Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:

// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.

// A full binary tree is a binary tree where each node has either 0 or 2 children.

// A leaf node is a node that has zero children.

 

// Example 1:


// Input: root = [2,1,3,null,null,0,1]
// Output: true
// Explanation: The above diagram illustrates the evaluation process.
// The AND node evaluates to False AND True = False.
// The OR node evaluates to True OR False = True.
// The root node evaluates to True, so we return true.
// Example 2:

// Input: root = [0]
// Output: false
// Explanation: The root node is a leaf node and it evaluates to false, so we return false.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// 0 <= Node.val <= 3
// Every node has either 0 or 2 children.
// Leaf nodes have a value of 0 or 1.
// Non-leaf nodes have a value of 2 or 3.

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 118.8K
// Submissions
// 145.8K
// Acceptance Rate
// 81.5%










/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */



// Approach: DFS algorithm
// Time complexity = O(n) = n is length of tree
// Space complexity = O(1)
var evaluateTree = function(root) {
    function helper(node) {
        if (node.val === 0 || node.val === 1) {
            return node.val === 1;
        } else if (node.val === 2) {
            return helper(node.left) || helper(node.right);
        } else if (node.val === 3) {
            return helper(node.left) && helper(node.right);
        }
        return false;
    }
    
    return helper(root)

}







// #tree #binary-tree #Depth-First-Search
// ##easy


