// 143. Reorder List
// Medium like=7.8K unlike=267
// Companies
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000
// Accepted
// 607.6K
// Submissions
// 1.2M
// Acceptance Rate
// 51.5%








/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */



var reorderList = function(head) {
    // find middle
    let slow = head, fast = head.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half
    let second = slow.next
    slow.next = null
    let prev = slow.next
    while(second){
        let tmp = second.next
        second.next = prev
        prev = second
        second = tmp
    }

    // merge two halves
    let first = head
    second = prev
    while(second){
        let tmp1 = first.next, tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2
    }
};





// #linked-list #two-pointers #stack #recursion
// ##medium