/*
💡 Combination Sum II (LeetCode 40)
----------------------------------------
📝 Problem Summary:
Given a list of candidate numbers (may contain duplicates) and a target,
find all unique combinations where the chosen numbers sum to the target.
Each number may only be used ONCE in the combination.
Result set must not contain duplicate combinations.

----------------------------------------
🎯 Approach (Backtracking + Duplicate Handling):
1️⃣ Sort the candidates array:
    - Sorting helps group duplicates together.
    - Essential for skipping duplicates efficiently.

2️⃣ Backtracking Helper Function:
    - Arguments: current index, current combination (curr), current sum (currSum).
    - Base Case:
        ✅ If currSum === target → Save a COPY of curr to results.
        ❌ If currSum > target → Stop exploring (prune this path).

3️⃣ For loop to explore choices:
    - Start from current index to avoid reusing elements.
    - Skip duplicates:
        if (j > index && candidates[j] === candidates[j - 1]) continue;
      This ensures we don't pick the same number at the same depth level.

4️⃣ Recursive Call:
    - Move to next index: helper(j + 1, curr, currSum + candidates[j])
    - Since reuse is NOT allowed, we advance to j + 1 after picking.

5️⃣ Backtracking Step:
    - After exploring with a number, remove it from curr (curr.pop())
      to try other possibilities.

----------------------------------------
⏳ Complexity:
- Time: O(2^N) in worst case (exploring all subsets)
- Space: O(N) recursion stack + O(#results * avg_combination_length)

----------------------------------------
🌟 Key Difference from Combination Sum I:
- No reuse: call helper(j + 1, …) instead of helper(j, …).
- Skip duplicates using sorted array.

----------------------------------------
👨‍💻 Clean Code Implementation Below 👇
*/

var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b); // Sort to handle duplicates

    function helper(index, curr, currSum) {
        if (currSum === target) {
            res.push([...curr]);
            return;
        }
        if (currSum > target) return;

        for (let j = index; j < candidates.length; j++) {
            // Skip duplicates
            if (j > index && candidates[j] === candidates[j - 1]) continue;

            curr.push(candidates[j]);
            helper(j + 1, curr, currSum + candidates[j]); // move to next index (no reuse)
            curr.pop(); // Backtrack
        }
    }

    helper(0, [], 0);
    return res;
};


