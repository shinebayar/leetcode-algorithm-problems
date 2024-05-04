// 881. Boats to Save People
// Solved
// Medium
// Topics
// Companies
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)
 

// Constraints:

// 1 <= people.length <= 5 * 104
// 1 <= people[i] <= limit <= 3 * 104
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 338.5K
// Submissions
// 582.6K
// Acceptance Rate
// 58.1%





/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */





// Approach: Greedy algorithm using sorting
// Time complexity: O(nlogn) = because of sorting 
// Space complexity: O(1)
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b)
    let boat = 0, i = 0, j = people.length - 1

    while(i <= j){
        if(people[j] + people[i] <= limit){
            i++
            j--
        }else{
            j--
        }
        boat++
    }

    return boat
};








// #array #sorting #greedy #two-pointers
// ##medium