// 82. Remove Duplicates from Sorted List II
// Medium like=7K unlike=186
// Companies
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
// Accepted
// 561.4K
// Submissions
// 1.2M
// Acceptance Rate
// 45.6%





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








// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy, count = 0
    
    while(head){
        while(head && head.next && head.val === head.next.val){
            head = head.next
            count++
        }

        if(count > 0){
            prev.next = head.next
            head = head.next
            count = 0
        }else{
            prev = prev.next
            head = head.next
        }
    }

    return dummy.next
};




// #linked-list #two-pointers
// ##medium