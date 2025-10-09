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