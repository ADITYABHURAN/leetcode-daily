/**
 * @param {number} n - Total number of friends
 * @param {number} k - Count to eliminate
 * @return {number} - The winner's number
 */
var findTheWinner = function(n, k) {
    // Create an array of friends numbered 1 to n
    // Example: n=3 => arr = [1, 2, 3]
    let arr = Array.from({ length: n }, (_, i) => i + 1);

    /**
     * Recursive helper function to simulate the game
     * @param {number[]} arr - Current circle of friends
     * @param {number} startIndex - Index to start counting from
     * @return {number} - The winner
     */
    function helper(arr, startIndex) {
        // Base case: If only one friend is left, return them as winner
        if (arr.length === 1) {
            return arr[0];
        }

        // Find the index of the friend to remove
        // (startIndex + k - 1) % arr.length wraps around the circle
        let indexToRemove = (startIndex + k - 1) % arr.length;

        // Remove the friend at indexToRemove from the circle
        arr.splice(indexToRemove, 1);

        // Recursive call: Start counting from the friend immediately clockwise
        return helper(arr, indexToRemove);
    }

    // Start the game from index 0 (friend 1)
    return helper(arr, 0);
};
