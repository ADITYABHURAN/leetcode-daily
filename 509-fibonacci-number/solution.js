//Approach 1 - recurssive approach 
//time complexity O(2^n)
//space complexity O(n) for the recursion stack

var fib = function(n) { 
    //0,1,1,2,3,5...
    //base case 
    if (n <=1) return n;
    //recursive case
    return fib(n-1) + fib(n-2);
}

//memoization approach
//time complexity O(n)
//space complexity O(n) for the recursion stack and memoization array
var fib = function(n) { 
    //0,1,1,2,3,5...
    let memo = {0:0,1:1};
    function helper(num){
    if(memo[num]! == undefined) return memo[num];
    memo[num] = helper(num - 1) + helper (num - 2);
    return memo[num];
    }
    helper(n);
}

//tabulation approach 
//time complexity O(n)
//space complexity O(n) for the dp array

var fib = function(n) { 
    let dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    if (n > 0) {
        dp[1] = 1;
    }
    let count = 1;
    while (count < n) {
        count += 1;
        dp[count] = dp[count - 1] + dp[count - 2];
    }
    return dp[n];
}

//space tabulation approach 
// t = O(n)  s = O(1) 

var fib = function(n) { 
    if(n<=1) return n;

    let prev = 0;
    let curr = 1;
    let counter = 1;
    while(counter<n) {
        let next = prev + curr;
        counter+=1;
        prev = curr;
        curr = next;

    }
    return curr;
}
