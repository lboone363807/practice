/* Problem 1480 Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  const runningSum = [];
  let temp = 0;
  do {
    temp += nums[i];
    runningSum.push(temp);
    i++;
  } while (i <= nums.length);
  return runningSum;
};

/* Problem 1672 Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let totals = [];
  accounts.forEach(customerWealth);
// total of all accounts for each customer
  function customerWealth(accts) {
    let bank = 0;
    let sum = 0;
    do {
      sum += accts[bank];
      bank++;
    } while (bank < accts.length);
    totals.push(sum);
  }
// comparing customer totals and returning largest total
  let largest = totals[0];
  for (let customer = 1; customer <= accounts.length; customer++) {
    if (totals[customer] > largest) {
      largest = totals[customer];
    }
  }
  return largest;
};
