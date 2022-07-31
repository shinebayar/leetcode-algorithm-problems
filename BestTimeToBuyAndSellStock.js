// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = Infinity
    let profit = 0
    
    for(let price of prices){
        if(price < buyPrice){
            buyPrice = price
        } else if(price - buyPrice > profit){
            profit = price - buyPrice
        }
    }
    
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))

// #array #dynamic-programming
// ##easy

// Time complexity = O(n)
// Space complexity = O(1)


// Little bit different approach
// var maxProfit = function(prices) {
//     let buy, sell = 0
    
//     for(let i=0; i<prices.length; i++){
//         if(prices[i] < prices[i+1]){
//             if(prices[i] > buy){
//                 buy = prices[i]
//             }
//             if(prices[i+1] > sell && prices[i+1] <= prices.length){
//                 sell = prices[i+1]
//             }
//         }else{
//             if(prices[i] < buy){
//                 buy = prices[i]
//             }
            
//             if(prices[i+1] > sell && prices[i+1] <= prices.length){
//                 sell = prices[i+1]
//             }
//         }
//     }
    
//     console.log(sell - buy)
    
//     return ((sell - buy) > 0 ? (sell - buy) : 0)
// };