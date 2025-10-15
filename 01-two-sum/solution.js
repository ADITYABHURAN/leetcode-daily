
//sum 1 
/**
 * Function to find two numbers in the array that add up to the target.
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum we need to find
 * @return {number[]} - Indices of the two numbers adding up to target
 */
var twoSum = function(nums, target) {
    // Create an empty object to store numbers and their indices
    let map = {};  // Example: {2: 0, 7: 1}

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the number needed to reach the target
        let complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.hasOwnProperty(complement)) {
            // If it exists, we found the two numbers
            // Return their indices (index of complement and current index)
            return [map[complement], i];
        }

        // Otherwise, store the current number and its index in the map
        map[nums[i]] = i;
        // Example after first iteration: if nums[i]=2, map = {2: 0}
    }

    // If no solution is found (though problem says there’s always one)
    return [];
};
