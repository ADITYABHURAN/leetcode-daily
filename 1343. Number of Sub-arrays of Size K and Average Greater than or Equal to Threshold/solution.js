/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let maxT = k * threshold;
    let count = 0; 
    
    // 1 2 3 4 
    // i -> 0...1 and it will end as k = 3
    //so i <= arr.length - k;
    
    for (let i = 0; i <= arr.length - k; i++) { 
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum = sum + arr[j];
        }
        if (sum >= maxT) {
            count = count + 1;
        }
    }
    return count;
};