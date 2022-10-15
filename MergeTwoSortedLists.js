// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.




// Approach: loop
// Time complexity = O(n)
// Space complexity = O(n)
const mergeTwoLists1 = (list1, list2) => {
    let merged = new Node()
    let current = merged
    
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1
            list1 = list1.next
        }else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    
    current.next = list1 || list2
    
    return merged.next
}




// Approach: recursion
// Time complexity = O(n)
// Space complexity = O(n)
const mergeTwoLists = (list1, list2) => {
   if(!list1 || !list2) return list1 || list2

   if(list1.val < list2.val){
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
   }else{
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
   }
}




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

    // add to begining of list /head
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
            let removedHead = this.head
            // if 1 node left
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
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
list1.append(4)
console.log(list1)

let list2 = new LinkedList()
list2.append(1)
list2.append(3)
list2.append(4)
console.log(list2)
console.log('tailll: ', list2.tail) 

mergeTwoLists(list1, list2)

// #Linked-list #recursion
// @easy 