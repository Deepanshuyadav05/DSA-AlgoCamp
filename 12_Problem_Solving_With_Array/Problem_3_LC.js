/*
LEETCODE- 121
you are given an array PRICES where PRICE[i] is the price of a given stock on the 1st day
you want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock
return the maximus profit you can achieve from this transaction, if you cannot achieve any profit , return 0
*/

function buySellStock(prices){
    let currMin = prices[0];   //at least buy on day:0
    let profit = 0;   //by default, we keep profit 0

    for( let i = 1; i < prices.length; i++){
        //can i sell?
        /*
         [7,1,5,3,6,4]
        i=0 1 2 3 4 5
        */
        if(prices[i] > currMin){
            profit = Math.max(profit, prices[i] - currMin);
        }
        //can i buy
        if(prices[i] < currMin){
            currMin = prices[i];
        }
    }

    return profit
}
let prices = [2,4,1]
console.log( `the max profit will be : ${buySellStock(prices)}`)
