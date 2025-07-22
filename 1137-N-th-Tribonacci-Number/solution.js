/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    //base case 
     if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    let count = 3;
    while (count <= n) {
        dp[count] = dp[count - 1] + dp[count - 2] + dp[count - 3];
        count += 1;
    }
    return dp[n];
};
