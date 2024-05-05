// 24. Swap Nodes in Pairs
// Solved
// Medium
// Topics
// Companies
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1.4M
// Submissions
// 2.1M
// Acceptance Rate
// 64.4%










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



// Approach: two pointers
// Time complexity = O(n)
// Space complexity = O(1)
var swapPairs = function(head) {
    let dummy = new ListNode(0, head)
    let prev = dummy, curr = head, nextPair

    while(curr && curr.next){
        // save pointers
        nextPair = curr.next.next
        second = curr.next

        // reverse this pair
        second.next = curr
        curr.next = nextPair
        prev.next = second

        // update pointers
        prev = curr
        curr = nextPair
    }

    return dummy.next
};

















// #linked-list #recursion
// ##medium


