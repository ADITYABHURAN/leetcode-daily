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