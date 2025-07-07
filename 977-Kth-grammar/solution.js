var kthGrammar = function(n, k) {
    // Base case: if we are at the 1st row, it only has '0'
    if (n === 1) {
        return 0;
    }

    // Calculate the total length of the (n-1)th row
    // For row n, length = 2^(n-1)
    let length = Math.pow(2, n - 1);

    // Find the midpoint of this row
    let mid = length / 2;

    // If k is in the first half of the row (k <= mid)
    if (k <= mid) {
        // Recursively call kthGrammar for the (n-1)th row and the same index k
        return kthGrammar(n - 1, k);
    } else {
        // If k is in the second half of the row (k > mid)
        // We subtract mid to map k to the corresponding index in the first half
        // and take the opposite value (0->1 or 1->0) because second half is flipped
        return 1 - kthGrammar(n - 1, k - mid);
    }
};
