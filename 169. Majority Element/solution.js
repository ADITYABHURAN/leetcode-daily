/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer-Moore Voting Algorithm
// Time complexity: O(n)
// Space complexity: O(1)
var majorityElement = function(nums) {
    let majority = nums[0] , votes = 1;

    for (let i = 1; i < nums.length; i++) {
    if (votes == 0) {
        votes++;
        majority = nums[i];
    } else if (majority == nums[i]) {
    votes++;
    } else {
        votes--;
    }
    }
    return majority;
};