// 61. Rotate List
// Medium like=6822 unlike=1325

// Add to List

// Share
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109
// Accepted
// 663,308
// Submissions
// 1,850,222





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
// 1.get length -- 2.make cycle -- 3.use 2-pointers to locate new tail, and relink the list
var rotateRight = function(head, k) {
    if(!head) return head
    
    let len = 0
    let tmp = head
    
    while(tmp){
        tmp = tmp.next
        len++
    }
    
    k = k % len
    
    let fast = head, slow = head
    
    for(let i=0; i<k; i++){
        fast = fast.next
    }
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
    }
    
    fast.next = head
    head = slow.next
    slow.next = null
    
    return head
};






// #linked-list #two-pointers
// ##medium