 //Find Lucky Integer in an Array
 /**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    //create a  frequency map 
    const freq = {};
    //count frequency of each number first 
    for(let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    }
    let result = -1; //initialize the result as -1 if no lucky number found 
    //check if number == frequency 
    for(let num in freq) {
        const number = parseInt(num);
        if (number === freq[num]) {
            result = Math.max(result, number);
        }
    }
    //return the largest lucky number 
    return result;
};

//for any frequency question use hash map - objects in js 

/**
 * 🔥 Problem: Find Lucky Integer in an Array (LeetCode 1394)
 * 
 * 📝 Definition:
 * A lucky integer is an integer whose value is equal to
 * the number of times it appears in the array.
 * 
 * Return the largest lucky integer if there are multiple.
 * If there are no lucky integers, return -1.
 * 
 * 📦 Example:
 * Input:  [2, 2, 3, 4]
 * Freq:   { 2: 2, 3: 1, 4: 1 }
 * Lucky:  2 (because 2 appears 2 times)
 * Output: 2
 * 
 * 🪜 Plan:
 * 1️⃣ Count frequency of each number using a hash map.
 * 2️⃣ Loop through keys, check if number == frequency.
 * 3️⃣ Track the largest lucky number using Math.max().
 * 4️⃣ Return result (or -1 if none found).
 * 
 * ⏱ Time Complexity: O(n) - One pass to count + One pass to check
 * 📦 Space Complexity: O(n) - For frequency map
 */
