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


//hash table 
var majorityElement = function(nums) {
    const map = new Map();
    const threshold = Math.floor(nums.length / 2);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);

        if (map.get(num) > threshold) {
            return num;
        }
    }
};

// Time complexity: O(n)
// Space complexity: O(n)