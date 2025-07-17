/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];

    function backtrack(start, combination, total) {
        // Base case: if combination has k numbers
        if (combination.length === k) {
            if (total === n) {
                res.push([...combination]); // Add a copy of the current combo
            }
            return;
        }

        for (let i = start; i <= 9; i++) {
            if (total + i > n)  // Prune if sum exceeds target
                break;

            combination.push(i);                       // Choose i
            backtrack(i + 1, combination, total + i);  // Explore further
            combination.pop();                         // Backtrack
        }
    }

    backtrack(1, [], 0);
    return res;
};
