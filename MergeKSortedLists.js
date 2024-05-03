// 23. Merge k Sorted Lists
// Solved
// Hard
// Topics
// Companies
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2M
// Submissions
// 3.7M
// Acceptance Rate
// 52.8%












// Approach: queue DS
// Time complexity = O(n) n is all element
// Space complexity = O(1) n is all element
var mergeKLists = function(lists) {
    const mergeTwoLists = (l1, l2) =>{
        let dummy = new ListNode(0)
        let head = dummy 
        while(l1 && l2){
            if(l1.val < l2.val){
                head.next = l1
                l1 = l1.next
            }else{
                head.next = l2
                l2 = l2.next
            }
            head = head.next
        }
        head.next = l1 || l2
        return dummy.next
    }

    if(lists.length < 1) return null

    while(lists.length !== 1){
        let a = lists.shift()
        let b = lists.shift()
        let c = mergeTwoLists(a, b)
        lists.push(c)
    }

    return lists[0]
};




// Approach: divide and conqure method
function merge (left, right) {
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else if (left.val < right.val){
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}


function helper(lists, start, end) {
    if (start === end) {
        return lists[start];
    } else if (start < end) {
        const mid = parseInt((start + end) / 2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }
    
}

var mergeKLists = function(lists) {
    return helper(lists, 0, lists.length - 1);
};










// #linked-list #merge-sort #heap(priority queue) #divide-and-conqure
// #hard