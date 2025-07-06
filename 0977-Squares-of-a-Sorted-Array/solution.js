/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    let result = new Array(nums.length);
    let left = 0, right = nums.length - 1, pos = nums.length - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    return result;
}
