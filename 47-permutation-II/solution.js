// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

//same as 46-permutations but with duplicates

var permuteUnique = function(nums) {
    var result = [];

    function permutation(index) {
        if (index === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        var hash = {};
        for (var j = index; j < nums.length; j++) {
            if (!hash[nums[j]]) {
                hash[nums[j]] = true; // avoid duplicate swaps at this level
                [nums[index], nums[j]] = [nums[j], nums[index]];
                permutation(index + 1);
                [nums[index], nums[j]] = [nums[j], nums[index]]; // backtrack
            }
        }
    }

    permutation(0);
    return result;
};
// Example usage:
// console.log(permuteUnique([1, 1, 2]));