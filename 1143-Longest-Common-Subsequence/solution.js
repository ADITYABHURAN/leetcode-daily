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

