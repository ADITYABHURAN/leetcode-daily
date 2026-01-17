/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
     let sum = 0;
     let maxSum = 0;
     let n = arr.length;
     
     for(let j = 0;j < k; j++) {
         sum += arr[j];
     }
     
     maxSum = sum;
     
     for (let j = k; j < n; j++) {
         sum += arr[j];
         sum -= arr[j - k];
         maxSum = Math.max(maxSum, sum);
     }
     return maxSum
        
    }
}

//fixed value for k and subarray i.e contiguous elements