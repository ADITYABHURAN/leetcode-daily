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


