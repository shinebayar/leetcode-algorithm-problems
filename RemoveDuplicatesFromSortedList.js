// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

var deleteDuplicates = function(head) {
  cur = head

    // continue loop untill cur happens to be null
    while(cur){
        // cur.next is exist and it has same value to cur
        while(cur.next && cur.next.val == cur.val){
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    console.log(head)
    return head
};



class LinkedList{
    constructor(){
        this.head = this.tail = null
    }

    // add to end of list / tail
    append(value){
        // if list is empty
        if(!this.tail){
            this.head = this.tail = new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    // add begining of the list / head
    prepend(value){ 
        // if list is empty
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    deleteHead(){
        // if list is empty
        if(!this.head){
            return null
        }else{
            let removeHead = this.head
            // if 1 node left
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return removeHead.value
        }
    }

    deleteTail(){
        // if list is empty
        if(!this.tail){
            return null
        }else{
            let removedTail = this.tail
            // if 1 node left
            if(this.tail === this.head){
                this.tail = this.head = null
            }else{
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }

    search(value){
        let currentNode = this.head
        
        while(currentNode){
            if(currentNode.value === value){
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }
}

class Node{
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

let list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(2)
list1.append(3)
list1.append(3)
list1.append(4)
list1.append(4)
console.log(list1)

deleteDuplicates(list1)

// #linked-list
// @easy
// Time complexity = O(n) Because each node visited once even though we used nested loops
// Space complexity = O(1) We don't need any extra memory