// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 // Example 1:

 // Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function (l1, l2) {

    let head = new ListNode(0);
    let node = head;
    let carry = 0;

    while(l1 || l2){
        let l1_val = l1 ? l1.val : 0;
        let l2_val = l2 ? l2.val : 0;

        let sum = l1_val + l2_val + carry;
        carry = 0;
        let new_val = sum;

        if(sum>9){
            new_val = sum % 10;
            carry = 1;
        }

        node.next = new ListNode(new_val);
        node = node.next;

        if(l1){
            l1 = l1.next;
        }

        if(l2){
            l2 = l2.next;
        }
    }

    if(carry){
        node.next = new ListNode(carry);
    }

    return head.next;
};=

// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
addTwoNumbers([2, 4, 3], [5, 6, 4])

// #Linked-list #math #recursion
