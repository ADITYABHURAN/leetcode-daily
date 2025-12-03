/**
 * A strobogrammatic number looks the same when rotated 180 degrees.
 * Example of valid ones: "69", "88", "818"
 * Invalid ones: "23", "57", "962"
 *
 * We solve this using:
 * 1. A map -> tells us how each digit rotates
 * 2. Two pointers -> compare from left and right
 */

function isStrobogrammatic(num) {

  // Map of valid strobogrammatic rotations
  const map = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6"
  };

  // Two pointer setup
  let left = 0;
  let right = num.length - 1;

  // Check pairs from outside → inside
  while (left <= right) {

    const leftChar = num[left];
    const rightChar = num[right];

    /**
     * Step 1:
     * If the current left digit is NOT in our map,
     * then it cannot form a valid rotated pair.
     */
    if (!(leftChar in map)) {
      return false;
    }

    /**
     * Step 2:
     * After rotation, map[leftChar] must equal the right digit.
     * Example:
     *   left: '6' → map['6'] = '9'
     *   right must be: '9'
     */
    if (map[leftChar] !== rightChar) {
      return false;
    }

    // Move pointers inward
    left++;
    right--;
  }

  // All pairs checked → valid strobogrammatic number
  return true;
}

// Test cases
console.log(isStrobogrammatic("69"));   // true
console.log(isStrobogrammatic("818"));  // true
console.log(isStrobogrammatic("962"));  // false
console.log(isStrobogrammatic("2"));    // false
