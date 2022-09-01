// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy like=7631 unlike=229

// Add to List

// Share
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
// Accepted
// 960,930
// Submissions
// 1,611,384



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// Approach 1: Recursion
// Time complexity = O(h) h=height
// Space complexity = O(1)
var lowestCommonAncestor1 = function(root, p, q) {
    if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
    if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
    return root
}

lowestCommonAncestor1([6,2,8,0,4,7,9,null,null,3,5], 3, 5)


// Appraoch 2: Iteration
// Time complexity = O(h) h=height
// Space complexity = O(1)
var lowestCommonAncestor = function(root, p, q) {
    while(true){
        if(p.val > root.val && q.val > root.val) root = root.right
        else if(p.val < root.val && q.val < root.val) root = root.left
        else return root
    }
}

lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 3, 5)


// #tree #binary-tree #depth-first-search #breadth-first-search
// ##easy