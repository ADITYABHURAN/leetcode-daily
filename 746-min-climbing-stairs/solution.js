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
