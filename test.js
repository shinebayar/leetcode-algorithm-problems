const majorityElement = function(arr, target){
    let left = 0
    let right = arr.length - 1
    while( left <= right ){
        let mid = Math.floor((left + right) / 2)
        if( arr[mid] === target ) return true
        if( target > arr[mid] ) left = mid + 1
        else right = mid - 1
    }
    return false
}

console.log(majorityElement([4,5,9], 4))