// 1011. Capacity To Ship Packages Within D Days
// Medium liek=7.1K unlike=154
// Companies
// A conveyor belt has packages that must be shipped from one port to another within days days.

// The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

// Example 1:

// Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// Output: 15
// Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10

// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
// Example 2:

// Input: weights = [3,2,2,4,1,4], days = 3
// Output: 6
// Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4
// Example 3:

// Input: weights = [1,2,3,1,1], days = 4
// Output: 3
// Explanation:
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1
 

// Constraints:

// 1 <= days <= weights.length <= 5 * 104
// 1 <= weights[i] <= 500
// Accepted
// 237.1K
// Submissions
// 353.4K
// Acceptance Rate
// 67.1%







// Approach: binary-search algorithm
// Time complexity = O(nlogn)
// Space complexity = O(1)
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((a,b) => a + b);

    while(l < r){
        let mid = Math.floor((l + r) / 2)
        let need = 1, crnt = 0
        for(let i=0; i<weights.length; i++){
            if(crnt + weights[i] > mid){
                need++
                crnt = weights[i]
            }else crnt += weights[i]
        }
        if(need > days) l = mid + 1
        else r = mid
    }

    return l
};







// #array #binary-search
// ##medium