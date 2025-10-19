/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n),()=>Array(n).fill(false));
    let longest = '';

    // l is the length of the substring
    for(let l=1;l<=n;l++){
        // i is the starting index of the substring
        for(let i=0;i<=n-l;i++){
            // j is the ending index of the substring
            let j = i + l -1;
            if(i===j){
                dp[i][j] = true;
                // if the length of the substring is 2 and both characters are same
            }else if(s[i]===s[j] && (j===1+i || dp[i+1][j-1])){
            dp[i][j] = true;
            }
            if(dp[i][j]){
                longest = s.slice(i,j+1);
            }

        }
    }
    return longest;
    

};


//same as palindromic substring counting but we need to return the length of longest palindromic substring