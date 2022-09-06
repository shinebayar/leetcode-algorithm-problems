// Bubble sorting algorithmm
// O(n2), O(1)
const bubbleSortingAlgorithm = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }

    return arr
}

// console.log('Bubble sort: ', bubbleSortingAlgorithm([9,3,5,7,2,1,7,5,8]))




// Selection sorting algorithmm
// O(n2), O(1)
const selectionSortingAlgorithm = (arr) => {
    const swap = (index1, index2) => {
        tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }

    for(let i=0; i<arr.length; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[minIndex] > arr[j]) minIndex = j
        }
        if(minIndex != i) swap(i, minIndex)
    }

    return arr
}

// console.log('Selection sort: ', selectionSortingAlgorithm([9,3,5,7,2,1,7,5,8]))



// Insertion sorting algorithmm
// O(n2) O(1)
const InsertionSortingAlgorithm = (arr) => {
    for(let i=1; i<arr.length; i++){
        for(let j=i; j>0; j--){
            if(arr[j] < arr[j-1]){
                let tmp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = tmp
            }else break
        }
    }

    return arr
}

// console.log('Insertion sort: ', InsertionSortingAlgorithm([9,3,5,7,2,1,7,5,8]))


// Quick sorting algorithmm
// O(n2) O(1)
const QuickSortingAlgorithm = (arr) => {

    if(arr.length <= 1) return arr

    let pivot = arr[arr.length-1 ]
    let leftArr = []
    let rightArr = []

    for(let el of arr.slice(0, arr.length-1)){
        el > pivot ? rightArr.push(el) : leftArr.push(el)
    }

    return [...QuickSortingAlgorithm(leftArr), pivot, ...QuickSortingAlgorithm(rightArr)]
}

// console.log('Quick sort: ', QuickSortingAlgorithm([9,3,5,7,2,1,7,5,8]))



// Merge sorting algorithmm
// O(n2) O(1)
const MergeSortingAlgorithm = (arr) => {

    // leftArr and rightArr are sorted
    const merge = (leftArr, rightArr) => {
        let output = []
        let leftIndex = 0
        let rightIndex = 0

        while(leftIndex < leftArr.length && rightIndex < rightArr.length){
            const leftEl = leftArr[leftIndex]
            const rightEl = rightArr[rightIndex]

            if(leftEl < rightEl){
                output.push(leftEl)
                leftIndex++
            }else{
                output.push(rightEl)
                rightIndex++
            }
        }

        return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
    }

    // recursive
    if(arr.length <= 1) return arr

    let middleIndex = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, middleIndex)
    let rightArr = arr.slice(middleIndex)

    return merge(MergeSortingAlgorithm(leftArr), MergeSortingAlgorithm(rightArr)) 

    
}

// console.log('Merge sort: ', MergeSortingAlgorithm([9,3,5,7,2,1,7,5,8]))