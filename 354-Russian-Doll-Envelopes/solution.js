/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    // Sort the envelopes first by width in ascending order
    // If two envelopes have the same width, sort by height in descending order
    envelopes.sort((a,b)=>a[0]===b[0]?b[1]-a[1]:a[0]-b[0]);

    const n = envelopes.length;
    const dp = new Array(n).fill(1);
    let max = 1;
    // Apply a variation of the Longest Increasing Subsequence (LIS) algorithm on the heights
    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            // Check if the height of the current envelope is greater than the height of the previous envelope
            if(envelopes[i][1] > envelopes[j][1] && dp[j]+1 > dp[i]){
            dp[i] = dp[j]+1;
            }
        }
        // Update max if dp[i] is greater than max
        if(dp[i]>max){
        max = dp[i];
    }
    }
    


    return max;

};