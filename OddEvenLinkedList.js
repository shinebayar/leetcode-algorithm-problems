// 328. Odd Even Linked List
// Medium like=7.1K unlike=415
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106
// Accepted
// 640.1K
// Submissions
// 1.1M
// Acceptance Rate
// 60.7%




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


// Approach: math
// Time complexity = O(n)
// Space complexity = O(1)
var oddEvenList = function(head) {
    if(!head) return null

    let odd = head
    let even = head.next
    let evenHead = even

    while(even && even.next){
        odd.next = even.next
        odd = odd.next
        even.next =odd.next
        even = even.next
    }

    odd.next = evenHead

    return head
};




// #linked-list
// ##medium