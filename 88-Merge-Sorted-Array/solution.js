var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Only nums2 might have elements left
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;   // ✅ THIS WAS MISSING
    }
};

//time complexity: O(m + n)
//space complexity: O(1)

// nums1 = 1 2 2 3 5 6, m = 3
//          i
//          k

// nums2 = 2 5 6, n = 3
//           j
