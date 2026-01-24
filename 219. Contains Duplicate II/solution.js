var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();




    
    //first window 
    // i < Math.min(k, nums.length) because if 
    // nums = [1,2,3,4,2] and if k  = 100
    // then k will go till 1-99 and then malfunction and this is not good fpor time complexity so it will choose the smallest from k and nums.length  
    for (let i = 0; i < Math.min(k, nums.length); i++) {
    if(set.has(nums[i])) {
        return true;
    }
    set.add(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
    if(set.has(nums[i])) {
        return true;
    }
    set.add(nums[i]);
    set.delete(nums[i - k]);
    }
    
    return false;
};
