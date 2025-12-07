/**
 * Count the number of odd numbers between low and high (inclusive)
 *
 * The idea:
 * - Every 2 consecutive integers contain exactly 1 odd number.
 * - So the number of odds in the range can be computed mathematically.
 *
 * Base count:
 *   (high - low) // 2
 *
 * Adjustment:
 * - If either low or high is odd, the range contains one extra odd.
 * - So we add +1 when (low % 2 !== 0 || high % 2 !== 0)
 */

var countOdds = function(low, high) {
    // Base count of odds in the interval
    let base = Math.floor((high - low) / 2);

    // If either boundary is odd, add 1
    if (low % 2 !== 0 || high % 2 !== 0) {
        return base + 1;
    }

    return base;
};

// Example usage:
console.log(countOdds(3, 7));    // Output: 3
console.log(countOdds(8, 10));   // Output: 1
