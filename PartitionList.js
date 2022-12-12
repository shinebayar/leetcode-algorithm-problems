// 86. Partition List
// Medium like=5K unlike=597
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200
// Accepted
// 428K
// Submissions
// 830.7K
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
 * @param {number} x
 * @return {ListNode}
 */





// Approach: two-pointers technique
// Time complexity = O(n)
// Time complexity = O(n)
var partition = function(head, x) {
    let dummy1 = new ListNode()
    let dummy2 = new ListNode()
    let cur1 = dummy1
    let cur2 = dummy2
    
    while(head){
        if(head.val  < x){
            cur1.next = head
            cur1 = head
        }else{
            cur2.next = head
            cur2 = head
        }
        head = head.next
    }

    cur2.next = null
    cur1.next = dummy2.next

    return dummy1.next
};







// #linked-list #two-pointers
// ##medium