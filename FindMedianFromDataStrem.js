// 295. Find Median from Data Stream
// Hard like=9.6K unlike=187
// Companies
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?









// Approach: binary-search algorithm
// Time complexity = O(logn)
// Space complexity = O(logn)
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let l = 0, r = this.arr.length
    while(l < r){
        let mid = Math.floor((l + r) / 2)
        if(this.arr[mid] < num) l = mid + 1
        else r = mid
    }

    this.arr.splice(l, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.arr)
    return this.arr.length % 2 === 0 
        ? (this.arr[Math.floor(this.arr.length / 2)] + this.arr[Math.floor(this.arr.length / 2) - 1]) / 2 
        : this.arr[Math.floor(this.arr.length / 2)]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */








// #two-pointers #design #sorting #heap-(priority-queue) #data-stream
// #hard





// 