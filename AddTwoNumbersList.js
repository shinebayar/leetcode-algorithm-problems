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
};

// class ListNode{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
addTwoNumbers([2, 4, 3], [5, 6, 4]);

// [3,4,2]
// [7,6,5]
// [1, 1, 0, 7]
