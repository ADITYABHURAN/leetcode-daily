var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxSum = 0;
    let n = nums.length;

    // 1. First window
    for (let j = 0; j < k; j++) {
        sum += nums[j];
    }

    maxSum = sum;

    // 2. Slide the window
    for (let j = k; j < n; j++) {
        sum += nums[j];       // add new element
        sum -= nums[j - k];   // remove old element
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};




//Template for future use
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxSum = 0;
    let n = nums.length;

    // 1. First window
    for (let j = 0; j < k; j++) {
        sum += nums[j];
    }

    maxSum = sum;

    // 2. Slide the window
    for (let j = k; j < n; j++) {
        sum += nums[j];       // add new element
        sum -= nums[j - k];   // remove old element
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};
