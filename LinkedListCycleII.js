// 142. Linked List Cycle II
// Medium like=9.6K unlike=686
// Companies
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// Accepted
// 887.2K
// Submissions
// 1.9M
// Acceptance Rate
// 46.7%






/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */









// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var detectCycle = function(head) {
    let p1 = head, p2 = head

    while(p2 && p2.next && p2.next.next){
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2){
            console.log('here -', p2)
            return getCyclePosition(p2)
        }
    }

    function getCyclePosition(intersection){
        let p1 = head, p2 = intersection
        while(p1 !== p2){
            p1 = p1.next
            p2 = p2.next
        }
        return p1
    }

    return null
}






// #linked-list #two-pointers #hash-table
// ##medium