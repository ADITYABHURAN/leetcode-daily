/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let k =0;

    while (k <= j) {
    if(nums[k] === 1) {
        k = k + 1;
    } else if (nums[k] === 2) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;

        j = j -1;
    } else {
        let temp = nums[i];
        nums[i] = nums[ k];
        nums[k] = temp;

        i = i + 1;
        k = k + 1;
    }
    }
};