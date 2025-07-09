// question for Backtracking 
// question : Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Example 1: Input: nums = [1,2,3] 
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// clarifying question: will the array(nums) be empty? - it will not be empty it will have at least one element.

//test case:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]    

var permute = function(nums) {
    let res = [];
    let n = nums.length;

    function helper(i) {
        // base case 
        if (i === n - 1) {
            res.push([...nums]);
            return;
        }
        for (let j = i; j < n; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
            helper(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]]; // backtrack
        }
    }

    helper(0);     // make sure you can them inside function 
    return res;
};
