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



// Time complexity = O(n)
// Space complexity = O(1)
var maxProfit1 = function(prices) {
    let buyPrice = Infinity
    let profit = 0
    
    for(let price of prices){
        if(price < buyPrice) buyPrice = price
        else if(price - buyPrice > profit) profit = price - buyPrice
    }
    
    return profit
};

// console.log(maxProfit1([7,1,5,3,6,4]))




// Approach: dynamic-programming
// Time complexity = O(n)
// Space complexity = O(1)
var maxProfit = function(prices) {
    dp = new Array(prices.length) // initializing the dp table
    dp[0] = [prices[0], 0] // filling the the first dp table --> low_price = prices[0] max_profit=0
    let min_price = max_profit = 0

    for(let i=1; i<prices.length){
        min_price = Math.min(dp[i-1][0], prices[i])
        max_price = Math.max(dp[i-1][1], prices[i] - dp[i-1][0])
        dp[i] = [min_price, max_profit]
    }

    return dp[n-1][1]
}

console.log(maxProfit([7,1,5,3,6,4]))




// #array #dynamic-programming
// ##easy