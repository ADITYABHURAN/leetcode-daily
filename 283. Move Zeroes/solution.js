/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let iP = 0;

     for(let i = 0;i < nums.length; i++) {
       if(nums[i] !== 0) {
       nums[iP] = nums[i];
       iP++;
       }
     }

     while(iP < nums.length) {
    nums[iP++] = 0;
     }
};