// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

var longestCommonSubsequence = function(text1, text2) {
     const n = text1.length;
     const m = text2.length;

     function helper(index1,index2){
        //return the lcs 

        //base case 
        if(index1>=n || index2>=m) {
            return 0;
            //abc
            //abdef
        }
        //recurssive case 
        if (text1[index1]===text2[index2]) {
            return 1+helper(index1+1,index2+1);
        }
        return Math.max(helper(index1+1,index2),helper(index1,index2+1));
     }
     return helper(0,0);
};

//memoization step 
//1 create a dp array
//2 check if the value is already computed in the base case check if there is -1 if not return the same value 
//3 before returning the value store it in the dp array

var longestCommonSubsequence = function(text1, text2) {
     const n = text1.length;
     const m = text2.length;
     const dp = Array.from({length:n},()=>Array(m).fill(-1));

     function helper(index1,index2){
        //return the lcs 

        //base case 
        if(index1>=n || index2>=m) {
            return 0;
        }
        if(dp[index1][index2]!==-1) {
        return dp[index1][index2];
            //abc
            //abdef
        }
        //recurssive case 
        if (text1[index1]===text2[index2]) {
            dp[index1][index2] = 1+helper(index1+1,index2+1);
        } else {
        dp[index1][index2] = Math.max(helper(index1+1,index2),helper(index1,index2+1));
        }
        return dp[index1][index2];
     }
     return helper(0,0);
};

//tabulation approach 
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[n][m];
};

//space tabulation method 
//here we are using only two rows to store the current and previous results
//so we can reduce the space complexity from O(n*m) to O(m)
//we use modulo operator to alternate between the two rows

var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    
    let prev = Array(m+1).fill(0);   //space optimization
    let curr = Array(m+1).fill(0);   //space optimization

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = 1 + prev[j - 1]; //current row and previous column
            } else {
                curr[j] = Math.max(curr[j-1], prev[j]);
            }
        }
        prev = [...curr];
    }

    return curr[m];
};
