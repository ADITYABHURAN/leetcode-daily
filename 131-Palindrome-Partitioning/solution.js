/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n),()=>Array(n).fill(false));

    for(let l=1;l<=n;l++) {
        for(let i=0;i<=n-l;i++) {
            let j = i+l-1;
            if(i===j){
            dp[i][j] = true;
            }
            else if (s[i]===s[j] && (j===i+1 || dp[i+1] [j-1])) { 
            dp[i][j] = true;
            }else{
                dp[i][j] = false;
            }

        }
    }
    let res = [];
    function helper(index,current) {
        //base case 
    if(index > n-1) {
        res.push(Array.from(current));
        return;
    }
        //recurssive case 
        for(let i=index;i<n;i++) {
        if(dp[index][i]){
            current.push(s.substring(index,i+1));
            helper(i+1,current);
            current.pop();
        }
    }

}
helper(0,[]);
return res;
    
};
/**Quick ApproachDP Pre-computation (Optimization):Create a 2D boolean DP table, is_palindrome[i][j], to check if $s[i..j]$ is a palindrome in $O(1)$ time.Fill this table in $O(N^2)$ time. This is the key optimization over checking palindromes repeatedly.Backtracking (Generation):Use a recursive function (DFS) that starts at index 0.At each index, loop through every possible end point i of a potential palindrome (s[index..i]).If is_palindrome[index][i] is true:Add $s[index..i]$ to the current partition list.Recurse on the remaining string: DFS(i + 1).Backtrack (remove the segment) to try the next possible cut.Base Case: If the start index reaches the end of the string, you've found a valid full partition, so add it to the result. */