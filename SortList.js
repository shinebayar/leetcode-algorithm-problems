// 148. Sort List
// Medium like=8.8K unlike=271
// Companies
// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
 

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?









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




// Approach: brute-force
// Time complexity = O(n2)
// Space complexity = O(n)
var sortList = function(head) {
    let arr = []

    while(head){
        arr.push(head.val)
        head = head.next
    }

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    // arr.sort((a, b) => a - b)

    let dummy = new ListNode()
    let cur = dummy

    for(let i=0; i<arr.length; i++){
        let node = new ListNode(arr[i])
        cur.next = node
        cur = cur.next
    }

    return dummy.next
};









// Approach: merge sort algorithm
// Time complexity = O(nlogn)
// Space complexity = O(1)
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    /**
     * The goal is to use merge sort on the linked list. 
     * We need to split the list into two and merge them in the ascending order 
     * recursively.
     */
    const [left, right] = split(head);
    // use a temparary node to link all the sorted nodes
    const root = new ListNode(null);
    return merge(root, sortList(left), sortList(right))
};

function split(node) {
    let slow = node;
    let fast = node;
    // use fast & slow pointer to find the middle node so that 
    // we can split the list into list[0 -> slow] & list[slow + 1 -> list.size]
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    const left = node;
    const right = slow.next;
    // break off the list so that `left` doesn't link to `right`
    slow.next = null;
    
    return [left, right];
}

function merge(root, left, right) {
    let pointer = root;
    /**
     * merge the smaller node in the `left` and `right` list first.
     * return the second node in the list because the first is a 
     * temparary node.
     */
    while(left !== null || right !== null) {
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        pointer = pointer.next;
    }

    return root.next;
}







// linked-list #two-pointers #divide-and-conquer #sorting #merge-sort
// ##medium