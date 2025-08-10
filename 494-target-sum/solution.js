//recurssion solution
// This function finds the number of ways to assign '+' or '-' signs to elements in nums
var findTargetSumWays = function(nums, target) {
  let count = 0;

  function helper(index, currentSum) {
    if (index === nums.length) {
      if (currentSum === target) count++;
      return;
    }
    helper(index + 1, currentSum + nums[index]);
    helper(index + 1, currentSum - nums[index]);
  }

  helper(0, 0);       // <-- call first
  return count;       // <-- then return
};


//dynamic programming solution