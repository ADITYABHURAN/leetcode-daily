var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            // try skipping left OR skipping right
            return isPal(s, i + 1, j) || isPal(s, i, j - 1);
        }
    }
    return true;
};

function isPal(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}

//time complexity: O(n)
//space complexity: O(1) 