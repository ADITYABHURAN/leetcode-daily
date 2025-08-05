/**Coding Exercise: 01 Knapsack
You are provided with a set of N items, each with a specified weight and value. Your objective is to pack these items into a backpack with a weight limit of W, maximizing the total value of items in the backpack. Specifically, you have two arrays: val[0..N-1], representing the values of the items, and wt[0..N-1], indicating their weights. Additionally, you have a weight limit W for the backpack. The challenge is to determine the most valuable combination of items where the total weight does not exceed W. Note that each item is unique and indivisible, meaning it must be either taken as a whole or left entirely.

Input:
N = 3
W = 8
values[] = [2,3,9]
weight[] = [8,2,5]
Output: 12
Explanation: Choose the last 2 items that weighs 2 and 5 units respectively and hold values 3 and 9 that add up to 12. */


//recurssive approach 
/**
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @returns {number}
 */

class Solution {
    knapsack(W, val, wt, n) {
        function helper(index, remWeight) {
            // Base case
            if (index >= n || remWeight === 0) {
                return 0;
            }

            // Recursive cases
            let exclude = helper(index + 1, remWeight);
            let include = 0;

            if (wt[index] <= remWeight) {
                include = val[index] + helper(index + 1, remWeight - wt[index]);
            }

            // Return the best of including or excluding
            return Math.max(exclude, include);
        }

        return helper(0, W);
    }
}

//memoization approach 

class Solution {
    knapsack(W, val, wt, n) {
   // make a new array first 
    const dp = Array.from({length:n}, ()=>Array(W+1).fill(-1));

        function helper(index, remWeight) {
            // Base case
            if (index >= n || remWeight === 0) {
                return 0;
            }
           //As we have filled all the array with -1 so if theres no -1 return the dp[index][remWeight]
            if(dp[index] [remWeight] !==-1) {
            return dp [index] [remWeight]
            }

            // Recursive cases
            let exclude = helper(index + 1, remWeight);
            let include = 0;
            
            if (wt[index] <= remWeight) {
                include = val[index] + helper(index + 1, remWeight - wt[index]);
            }

            // Return the best of including or excluding
           dp[index][remWeight] = Math.max(exclude, include);
           return dp[index][remWeight];
        }
        return helper(0, W);
    }
}

//tabulation approach 
 knapsack(W, val, wt, n) {
   //n + 1 rows and W+1 columns 
   //make a 2d array 
   const dp = Array.from({length:n+1}, ()=>Array(W+1).fill(0));
 //nested for loop to state condition 
   for(let i =1;i<=n;i++) {
    for(let j=1;j<=n;j++) {
        //make eclude and include 
        const exclude = dp[i-1][j];
        let iclude = 0;
        //what if 
        if(wt[i-1]<=j) {
          include = val[i-1]+dp[i-1][j-wt[i-1]];
        }
        dp[i][j]=Math.max(exclude,include)

    }
   }
return dp[n][W];

  }
//space complexity = O(n x W) 


//space optimized tabulation approach  
 knapsack(W, val, wt, n) {
   //n + 1 rows and W+1 columns 
   //We donot need 2D array for space optimized tabulation approach so we cut this below line and make a prev and curr for this method and change the values accordingly .
   //const dp = Array.from({length:n+1}, ()=>Array(W+1).fill(0));
   let prev = Array(W+1).fill(0);
   let curr = Array(W+1).fill(0);
 //nested for loop to state condition 
   for(let i =1;i<=n;i++) {
    for(let j=1;j<=n;j++) {
        //make eclude and include 
        const exclude = prev[j]         //changed dp[i-1] with prev
        let iclude = 0;

        //what if 
        if(wt[i-1]<=j) {
          include = val[i-1]+prev[j-wt[i-1]];
        }
         curr[j] = Math.max(exclude,include);

    }
    prev = curr.slice();

   }
return dp[n][W];

  }