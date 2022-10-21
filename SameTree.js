// 100. Same Tree
// Easy like=7368 unlike=156

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104



// Approach: DFS algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var isSameTree1 = function(p, q) {
   if (!p && !q) return true

   if (!p || !q || p.val !== q.val) return false

   return isSameTree1(p.left, q.left) && isSameTree1(p.right, q.right)
};

// console.log(isSameTree1([1,2,3], [1,2,3]))



// Approach: BFS algorithm
// Time complexity = O(n)
// Space complexity = O(n)
var isSameTree = function(p, q) {
   if(!p && !q) return true
   if(!p || !q) return false
   if(p.length !== q.length) return false
   
   if(!p.left && !p.right && !q.left && !q.right) return p.val === q.val

  // we are going to do a BFS, so we'll use a queue to keep track of next in line
   const queue1 = [p]
   const queue2 = [q]

   // we use BFS here (so no recursion like with DFS).  So speed might be compromised but memory footprint will remain small... 
   while(queue1.length){
      const curr1 = queue1.shift()
      const curr2 = queue2.shift()

     // if they both are null (for example, both left||right branches are null) then we'll just skip to the next iteration.
     if(!curr1 && !curr2) continue

     if((!curr1 && curr2) || curr1 && !curr2) return false

     //if different false, otherwise we'll continue so long as we have children.
     if(curr1.val !== curr2.val) return false

     queue1.push(curr1.left, curr1.right)
     queue2.push(curr2.left, curr2.right)
   }

  return true

};

console.log(isSameTree([1,2,3], [1,2,3]))



// #tree #depth-first-search #breadth-first-search #binary-tree
// ##easy