// 2816. Double a Number Represented as a Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

// Return the head of the linked list after doubling it.

 

// Example 1:


// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
// Example 2:


// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998. 
 

// Constraints:

// The number of nodes in the list is in the range [1, 104]
// 0 <= Node.val <= 9
// The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 118.1K
// Submissions
// 198K
// Acceptance Rate
// 59.7%






// Approach: two-pointers
// Time complexity: O(n) 
// Space complexity: O(1)
var doubleIt = function(head) {
    let dummy = new ListNode(0, head)
    let prev = dummy
    let cur = head

    while(cur){
        let doubled_value = cur.val * 2
        if(doubled_value >= 10){
            prev.val++
        }
        cur.val = doubled_value % 10
        cur = cur.next
        prev = prev.next
    }

    return dummy.val === 0 ? dummy.next : dummy
};









// #linked-list #math #stack
// ##medium