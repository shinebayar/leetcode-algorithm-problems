// 19. Remove Nth Node From End of List
// Medium like=13966 unlike=578

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?

// Accepted
// 1,805,250
// Submissions
// 4,502,041







// Approach: brute-force
// Time complexity = O(n)
// Space complexity = O(n)
var removeNthFromEnd = function(head, n) {
    let dummy = head
    let len = 0
    
    while(head){
        len++
        head = head.next
    }
    
    let nth = len - n
    let dummy1 = dummy
    let i = 1
    
    // if linked-list has only one element
    if(nth === 0){
        dummy = dummy.next
        return dummy
    }
    
    // if linked-list has more than one element
    while(dummy){
        // console.log(i, nth, dummy, dummy1)
        if(nth === i) dummy.next = dummy.next.next
        i++
        dummy = dummy.next
        // console.log(i, nth, dummy, dummy1)
        // console.log('-----------------')
    }
    
    // console.log(len)
    // console.log(head)
    // console.log(nth)
    // console.log(dummy)
    // console.log(dummy1)
    
    return dummy1
};






// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    
    for(let i=0; i<n; i++){
        fast = fast.next
    }
    
    if(!fast) return head.next
    
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    
    slow.next = slow.next.next
    
    return head
}






// #linked-list #two-pointers
// ##medium