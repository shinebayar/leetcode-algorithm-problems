// 206. Reverse Linked List
// Easy like=14108 unlike=243

// Add to List

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// Accepted
// 2,450,401
// Submissions
// 3,415,072

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Approach 1: using iterative
// Time complexity = O(n)
// Space complexity = O(1)
 var reverseList1 = function(head) {
    let prev = null
    let curr = head

    while(curr){
        let saveNext = curr.next
        curr.next = prev // to point
        prev = curr // step 1 to prev
        curr = saveNext // step 1 to curr
    }

    return prev
 }

 reverseList1([1,2,3,4,5])


// Approach 2: using recursion
// Time complexity = O(n)
// Space complexity = O(1)n 

var reverseList = function(head) {
    let prev = null
    let curr = head

    while(curr){
        let saveNext = curr.next
        curr.next = prev // to point
        prev = curr // step 1 to prev
        curr = saveNext // step 1 to curr
    }

    return prev
 }

 reverseList([1,2,3,4,5])


// #linked-list #recursion
// ##easy