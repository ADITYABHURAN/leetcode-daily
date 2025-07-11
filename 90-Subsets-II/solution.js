// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

//The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    function Subsets(index, curr) {
        if (index === nums.length) {
            res.push([...curr]);
            return;
        }

        // Include nums[index]
        curr.push(nums[index]);
        Subsets(index + 1, curr);
        curr.pop();

        // Skip duplicates in the exclude path
        while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
            index++;
        }

        // Exclude nums[index]
        Subsets(index + 1, curr);
    }

    Subsets(0, []);
    return res;
};

