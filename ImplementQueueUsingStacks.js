// 232. Implement Queue using Stacks
// Easy like=4172 unlike=268

// Add to List

// Share
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
 

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.
 

// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

// Accepted
// 486,385
// Submissions
// 805,755



var MyQueue = function() {
    this.pushStack = new Stack()
    this.popStack = new Stack()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.popStack.empty()){
        while(!this.pushStack.empty()){
              this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.popStack.empty()){
        while(!this.pushStack.empty()){
            this.popStack.push(this.pushStack.pop())
        }
    }
    
    return this.popStack.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.pushStack.empty() && this.popStack.empty()
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(val){
        this.storage[this.size] = val 
        this.size++
    }

    pop(){
        let top = this.storage[this.size - 1]
        this.size--
        delete this.storage[this.size]
        return top
    }

    peek(){
        return this.storage[this.size - 1]
    }

    empty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}

// console.log(Object.getOwnPropertyNames(Stack))
// console.log(Object.getOwnPropertyNames(Stack.length))
// console.log(Object.getOwnPropertyNames(Stack.name))
// console.log(Object.getOwnPropertyNames(Stack.prototype))
// console.log('----------------')
// console.log(Object.getOwnPropertyNames(MyQueue.prototype))




// #stack #design #queue
// ##easy