/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = Array.from({length:n},()=>Array(n).fill(0));
    //iterate lengthwise 

    for(let l=1;l<=n;l++){
        for(let i=0;i<=n-l;i++){
            let j = i + l-1;
            if(i===j){
                dp[i][j]=1;
            }else if(s[i]===s[j]){
                dp[i][j] = 2 + dp[i+1][j-1];
            }else{
                // If the characters at the current indices are not the same,
                // take the maximum value by either excluding the current character from the start or the end
                dp[i][j]= Math.max(dp[i+1][j],dp[i][j-1]);
            }
        }
    }
    return dp[0][n-1];
};

