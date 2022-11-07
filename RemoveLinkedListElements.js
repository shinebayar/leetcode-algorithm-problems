// 203. Remove Linked List Elements
// Easy like=5708 unlike=179

// Add to List

// Share
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50
// Accepted
// 778,960
// Submissions
// 1,757,474


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



// Approach 1: Iterative Solution without using a Previous Pointer
// Time complexity = O(n)
// Space complexity = O(1)
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy

    while(cur.next){
        if(cur.next.val === val) cur.next = cur.next.next
        else cur = cur.next
    }

    return dummy.next
}



// Approach 2: Iterative Solution using a Previous Pointer
// Time complexity = O(n)
// Space complexity = O(1)
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let cur = head

    while(cur){
        if(cur.val === val) prev.next = cur.next
        else prev = cur
        cur = cur.next
    }

    return dummy.head
}


// Approach 3: Recursion
// Time complexity = O(n)
// Space complexity = O(n)
var removeElements = function(head, val) {
    if (!head) return head 
    
    if (head.val === val) {
        head = removeElements(head.next,val)
    } else {
        head.next = removeElements(head.next,val)
    }
    
    return head
}



// #linked-list #recursion
// ##easy
