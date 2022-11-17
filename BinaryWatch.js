// 401. Binary Watch
// Easy like=1056 unlike=1975

// Add to List

// Share
// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

// For example, the below binary watch reads "4:51".


// Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.

// For example, "01:00" is not valid. It should be "1:00".
// The minute must be consist of two digits and may contain a leading zero.

// For example, "10:2" is not valid. It should be "10:02".
 

// Example 1:

// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:

// Input: turnedOn = 9
// Output: []
 

// Constraints:

// 0 <= turnedOn <= 10



/**
 * @param {number} turnedOn
 * @return {string[]}
 */


// Approach using Bit manipulation
// Time complexity = O(n2)
// Space complexity = O(n)
 var readBinaryWatch = function(turnedOn) {
   let res = []
   let countBit, formatedHour

   for(let hour=0; hour<12; hour++){
    for(let minute=0; minute<60; minute++){
        countBit = hour.toString(2).split(1).length-1
        countBit += minute.toString(2).split(1).length-1

        if(countBit === turnedOn){
            formatedHour = `${hour.toString()}:${(minute < 10) ? '0'+minute.toString() : minute.toString()}`
            res.push(formatedHour)
        }
    }
   }
   
   return res
}

console.log(readBinaryWatch(1))





// Approach: backtrack
// Time complexity = O(n)
// Space complexity = O(n)
var readBinaryWatch = function(turnedOn) {
    let res = []
    
    // range 0-3 are hours, range 4-9 are minutes
    let arr = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32]
    
    backtrack(arr, 0, 0, 0, turnedOn, res)
    
    return res
};

var backtrack = function(arr, position, hours, minutes, limit, res){
    // when limit reaches to the zero, store hours and minutes into result list
    if(limit === 0){
        // during recursion we might get 4 + 8 = 12 hours which we must skip because max hour value could be 11
        if(hours <= 11 && minutes <= 59){
            let str = ''
            str = str + hours + ':' + (minutes <= 9 ? '0' + minutes : minutes)
            res.push(str)
        }
    }
    
    // standart backtracking solution add new value do recursion and then remove it
    for(let i=position; i<arr.length; i++){
        if(isHour(i)) hours += arr[i]
        else minutes += arr[i]
        
        backtrack(arr, i+1, hours, minutes, limit-1, res)
        
        if(isHour(i)) hours -= arr[i]
        else minutes -= arr[i]
    }
    
}
    
var isHour = function(position){
    return position >= 0 && position <= 3
}



// #backtracking #bit-manipulation
// ##easy