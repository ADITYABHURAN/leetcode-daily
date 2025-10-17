/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    // Sort the pairs based on the first element of each pair - ascending order
    pairs.sort((a,b)=>a[0]-b[0]);

    let n = pairs.length; 

    let dp = new Array(n).fill(1); //new array and fills with 1
    let max = 1;

    for (let i=1;i<n;i++){
        for(let j=0;j<i;j++){
           if (pairs[j][1]  < pairs[i][0] && dp[j]+1 > dp[i]){ //if the second element of the jth pair is less than the first element of the ith pair
            dp[i] = dp[j]+1;
           }
        }
        if(dp[i]>max) max = dp[i]; //update max if dp[i] is greater than max 
    }
    return max;
};