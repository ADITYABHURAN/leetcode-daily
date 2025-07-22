//recurssive approach - takes a lot of time and not efficient
var minCostClimbingStairs = function(cost) {
    //Write Code here 
   let n = cost.length;
    // helper function to calculate minimum cost recursively
   function helper(index) {
       //base case 
       if(index>=n) return 0;
       let one = cost[index] + helper(index + 1);
       let two = cost[index] + helper(index + 2);
       return Math.min(one, two)
   }
    return Math.min(helper(0),helper(1));
};


//memoization approach - time complexity O(n) and space complexity O(n)
//Runtime 2 ms Beats 52.67%
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let memo = Array(n).fill(-1);
    
    function helper(index) {
      //base cases
      if(index>=n) return n;
      if(memo[index]!==-1) return memo[index];
      let one = cost[index] + helper(index + 1);
       let two = cost[index] + helper(index + 2);
       memo[index] = Math.min(one, two)
       return memo[index];

    }

    return Math.min(helper(0), helper(1));
 };

//tabulation Approach 
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  let dp = Array(n+1).fill(0);

  dp[0]=0;
  dp[1]=0;

  for(let i = 2;i<=n;i++) {
    let costTocomeFromOnestepback = cost[i-1] + dp[i-1];
    let costTocomeFromTwostepback = cost[i-2] + dp[i-2];
    dp[i] = Math.min(costTocomeFromOnestepback, costTocomeFromTwostepback);
  }
  return dp[n];
};