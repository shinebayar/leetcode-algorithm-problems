// 234. Palindrome Linked List
// Easy like=11458 unlike=644

// Add to List

// Share
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?
// Accepted
// 1,179,793
// Submissions
// 2,408,755



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Approach 1: brute force using array
// Time complexity = O(n)
// Space complexity = O(n)
var isPalindrome1 = function(head) {
    let arr = []

    while(head){
        arr.push(head.val)
        head = head.next
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[arr.length-1-i]) return false
    }

    return true
}

var isPalindrome2 = function(head) {
    let front = end = ''

    while(head){
        front += head.val
        end = head.val + end
        head = head.next
    }

    return front === end
}


// Approach 2: recursion
// Time complexity = O(n)
// Space complexity = O(n)
var isPalindrome3 = function(head) {
    let cur = head
    let res = true

    const reverse = item => {
        if(item){
            reverse(item.next)

            if(item.val !== cur.val) {
                res = false
                return
            }

            cur = cur.next
        }
    }

    reverse(head)

    return res
}

console.log(isPalindrome3(a))


// #linked-list #two-pointers #stack #recursion
// #easy