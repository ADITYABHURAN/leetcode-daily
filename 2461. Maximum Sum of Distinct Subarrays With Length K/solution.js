/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let set = new Set();   // FIX 1
    let sum = 0;
    let maxSum = 0;
    let i = 0;

    for (let j = 0; j < nums.length; j++) {

        // Remove duplicates
        while (set.has(nums[j])) {
            set.delete(nums[i]);
            sum -= nums[i];
            i++;
        }

        // Add new element
        set.add(nums[j]);
        sum += nums[j];

        // Shrink if window exceeds k
        if (j - i + 1 > k) {
            set.delete(nums[i]);
            sum -= nums[i];
            i++;
        }

        // FIX 2: check exact window size
        if (j - i + 1 === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};
