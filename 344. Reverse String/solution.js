/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        // we temporarily store the value at index i so that we don't lose it when we overwrite it with s[j]
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};

// time complexity : O(n)
// space complexity : O(1)