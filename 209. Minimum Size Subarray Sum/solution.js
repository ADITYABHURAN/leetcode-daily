/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let size = Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = 0;
         for (let j = i; j < nums.length; j++) {
            sum = sum + nums[j];

            if (sum >= target) {
                size = Math.min(size, j - i + 1);
                break;
            }
         }

    }
    return size === Infinity ? 0 : size;
};




//optimal solution
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let size = Infinity;
    let sum = 0;

    let i = 0;
    let j = 0;

    while (j < nums.length) {
        //expand window
        sum = sum + nums[j];

        while (sum >= target) {
            size = Math.min(size, j - i + 1);
            sum = sum - nums[i];
            i = i + 1;
        }
     j = j + 1;
    }
    return size === Infinity ? 0 : size;
};