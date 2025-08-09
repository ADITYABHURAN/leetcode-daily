//same as 01 knapsack problem but here we can take infinite number of items
// This is the unbounded knapsack problem solution using dynamic programming



function knapSack(N, W, val, wt) {
    //Write Code here 
   //dp Array
   const dp = Array.from({length:N+1},()=>Array(W+1).fill(0));    //n+1 and w+1 because you need to not consider the first column and row
   
   for (let i =1;i<=N;i++) {
       for (let j=1;j<=W;j++) {
           
           const exclude = dp[i-1][j];
           let include = 0;
           
           if (wt[i-1]<=j) {
               include  = val[i-1]+ dp[i][j-wt[i-1]]; //here dp[i][j-wt[i-1]] is used because we can take the same item again
           }
           
           dp[i][j] = Math.max(exclude,include);
           
       }
   }
   return dp[N][W];
}
