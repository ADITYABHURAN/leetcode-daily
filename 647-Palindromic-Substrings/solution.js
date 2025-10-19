/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n),()=>Array(n).fill(-1));

    function helper(i,j){
        // base case
        // If the starting index is greater than the ending index, it's a palindrome
        if(i > j) return true;
        // If the starting index is equal to the ending index, it's a palindrome
        if(i === j){
            dp[i][j] = true;
            return dp[i][j];
        }
        //checking if there is - 1 in dp[i][j]
        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        // recursive case
        // Check if the characters at the starting and ending indices are the same
        if(s[i] === s[j] && helper(i+1,j-1)){
            dp[i][j] = true;
        } else {
            dp[i][j] = false;
        }

        return dp[i][j];
    }
    // counting palindromic substrings
    let res = 0;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(helper(i,j)){
                res++;
            }
        }
    }

    return res;
};

