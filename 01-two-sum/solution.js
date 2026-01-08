var twoSum = function(nums, target) {
    //store every value we traverse in map
    const map = new Map;
    // run a for loop to check the values 
    for(let i = 0;i < nums.length; i++) {
        //target - nums[i] chya difference apan lookingfor mdhe store kruya 
    const lookingfor = target - nums[i];
        //tech diffference aplya map mdhe ahe ka check kru
    if(map.has(lookingfor)) {
        //jr ahe tr mgh te indeices return kraiche 
    return [i, map.get(lookingfor)];
    }
    //nahi ah etr mgh ti value map mdhe takaichi 
    map.set(nums[i], i);
    }

return [-1, -1];
};
