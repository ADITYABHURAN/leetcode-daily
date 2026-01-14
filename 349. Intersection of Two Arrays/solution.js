var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = 0;
    const result = new Set();

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.add(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return Array.from(result);
};



// Time complexity: O(n log n + m log m) where n and m are the lengths of nums1 and nums2
// Space complexity: O(min(n, m)) for the result set/**

var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
};
