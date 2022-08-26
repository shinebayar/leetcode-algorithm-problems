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
    
// Approach 1: using iteration
// Time complexity = O(n)
// Space complexity = O(1)
var removeElements1 = function(head, val) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let current = dummy

    while(current.next !== null){
        if(current.next.val === val) {
            current.next = current.next.next
        }else {
            current = current.next
        }
    }

    return dummy.next
};

console.log(removeElements1([1,2,6,3,4,5,6], 6))

// Approach 2: using recursion
// Time complexity = O(n)
// Space complexity = O(1)
var removeElements = function(head, val) {
    // Base case, if head is null, nothing to do
    if(!head) return head

    // if head's value is equal to val, delete it and run the function over the next elements
    if(head.val === val) return removeElements(head.next, val)

    // Otherwise, preserve head, but run the removal logic over the next elements
    head.next = removeElements(head.next, val)
};

// #linked-list #recursion
// ##easy
