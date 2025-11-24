/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //made a new array
    let res = new Array(nums.length);
    //initialize 
    let i = 0;
    let j = nums.length - 1;
    // k mai result bharna hai 
    let k = nums.length -1;

    while(i<=j) {
        if(Math.abs(nums[i]) > Math.abs(nums[j])) {
            res[k] = nums[i] * nums[i];
            i = i + 1;;
        } else {
            res[k] = nums[j] * nums[j];
            j = j - 1;
        }
        k = k - 1;
    }
    return res;
};