/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    function helper(curr,prev) {
        //base case 
    if(curr>=n){
        return 0;
    }
    //recurssive case 
    let exclude = helper(curr+1,prev); //exclude the current element
    let include = 0; //include only if it is increasing
    if(prev===-1 || nums[curr]>nums[prev]) {
    include = 1 + helper(curr + 1,curr) //include only if it is increasing
    }
    
    return Math.max(include,exclude); //return the max of both

    }
    return helper (0,-1)
};

//time complexity O(2^n)
//space complexity O(n) for the recursion stack

//Method 2 : memoization approach

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length
    //dp array to store the value of the subproblems
    let dp = Array.from({length:n},()=>Array(n+1).fill(-1));

    function helper(curr, prev) {
        //base case 
        if (curr >= n) {
            return 0;
        }
        //check if the value is already computed , if yes return it , we filled all the boxes with -1 
        if(dp[curr][prev+1]!==-1){
            return dp[curr][prev+1];
        }
        //recurssive case 
        let exclude = helper(curr + 1, prev);
        let include = 0;
        if (prev === -1 || nums[curr] > nums[prev]) {
            include = 1 + helper(curr + 1, curr)
        }
        //store the value in the dp array before returning it
        dp[curr][prev+1] = Math.max(include, exclude);
        return dp[curr][prev+1];
    //*Note ; prev+1 is used because prev can be -1 and we cannot access negative index in array
    }
    return helper(0, -1)
};