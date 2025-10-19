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



//tabulation method
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n),()=>Array(n).fill(false));
    let res = 0;
    // l is the length of the substring
    for(let l=1;l<=n;l++){
        // i is the starting index of the substring
        for(let i=0;i<=n-l;i++){
            // j is the ending index of the substring
            let j = i + l -1;
            if(i===j){
                dp[i][j] = true;
                res +=1;
                // if the length of the substring is 2 and both characters are same
            }else if(s[i]===s[j] && (j===1+i || dp[i+1][j-1])){
            dp[i][j] = true;
            res +=1;
            }

        }
    }
    return res;
    

};
