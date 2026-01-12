var countPairs = function(nums, target) {
    // JS sorts numbers as strings by default → ALWAYS add (a, b) => a - b
    nums.sort((a, b) => a - b);

    let i = 0;                       // left pointer
    let j = nums.length - 1;         // right pointer
    let count = 0;

    // while loop spelling is same as Java (no double "i")
    while (i < j) {

        // In JS, arrays use indexing → nums[i], not nums.get(i)
        const sum = nums[i] + nums[j];

        // Use <, >, <=, >= exactly like Java. No comma operator.
        if (sum < target) {

            // When sum < target, all pairs (i, i+1 ... j) are valid
            // So add (j - i). Not (j - 1). Not (j--). Just (j - i).
            count += (j - i);

            // Move left pointer forward
            i++;
        } else {
            // Sum too big → move right pointer backward
            j--;
        }
    }

    return count;
};



// Time complexity: O(n log n) due to sorting
// Space complexity: O(1)