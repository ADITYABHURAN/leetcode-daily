function sortedtwocolors(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if(nums[i] === 0) {
            i++;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]]; //array destructuring to swap
            j--;
        }
    }
}

let nums = [2,0,2,1,1,0];
console.log("Before Sorting: ", nums);
console.log(nums);
//two pointer approach

sortedtwocolors(nums);

console.log("After Sorting: ", nums);

//ye leetcode ka nahi hai 