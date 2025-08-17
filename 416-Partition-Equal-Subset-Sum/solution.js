/**
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 */

var canPartition = function(nums) {
    
  const totalSum = nums.reduce((a, b) => a + b, 0);
  if (totalSum % 2 !== 0) return false; // Return false if totalSum is odd
  const target = totalSum / 2;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
  for (let j = target; j >= num; j--) {
    dp[j] = dp[j] || dp[j - num];
  }
}

return dp[target];
    
};

//edge case - if the input array is empty, return true
//if the sum of the array is odd, its not possible to get two equal subsets, return false
//if the sum is even, use dynamic programming to check if a subset with sum equal to totalSum / 2 exists