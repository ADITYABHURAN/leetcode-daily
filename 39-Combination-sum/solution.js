/*
💡 Problem: Combination Sum (LeetCode 39)
------------------------------------------
Given a set of distinct positive integers (`candidates`) and a target integer (`target`),
return all unique combinations of `candidates` where the chosen numbers sum to `target`.
Each number in `candidates` may be used unlimited times in the combination.

📦 Tags: Backtracking, DFS, Recursion, Subsets with Constraints
📚 Pattern: Subsets with Constraints / Unbounded Knapsack (DFS version)

------------------------------------------
🔥 Approach (Backtracking):
- Use DFS to explore all possible combinations.
- At each recursive call:
  ✅ Pick the current number (reuse allowed → stay on same index).
  ✅ Or skip to the next number.
- Prune search space if current sum > target.
- Backtrack by popping last added element to explore alternative paths.

------------------------------------------
📝 Pseudocode:
function helper(index, currList, currSum):
    if currSum == target:
        save a copy of currList
        return
    if currSum > target:
        return
    for j = index to len(candidates):
        add candidates[j] to currList
        helper(j, currList, currSum + candidates[j]) // reuse allowed
        remove last element from currList (backtrack)

------------------------------------------
⏳ Complexity:
- Time: O(2^T) where T = target (exponential in worst case)
- Space: O(T) recursion stack + O(#solutions * avg_solution_length)

------------------------------------------
🌟 Related Problems (Same Pattern):
- 40. Combination Sum II (no reuse, candidates may repeat)
- 216. Combination Sum III (fixed size k combinations)
- 77. Combinations (no target sum, fixed size)
- 78. Subsets (return all subsets)
- Classic Subset Sum Problem

------------------------------------------
⚡ DSA Insights:
- Backtracking = "Pick → Explore → Unpick"
- Reuse allowed → call helper(j, ...)
- Reuse NOT allowed → call helper(j+1, ...)
- Always copy current list to avoid reference issues.

------------------------------------------
👨‍💻 Clean Code Implementation below 👇
*/
var combinationSum = function(candidates, target) {
let res = [];
function Helper(index,curr, currSum) {
    //base case
    if (currSum > target){
        return; // If current sum exceeds target, stop exploring this path
    }
    if (currSum === target){
        res.push([...curr]);
        return; // If current sum matches target, save the combination
    }
    for (let j = index;j>candidates.length;j++){
        // Include the current candidate in the combination
        curr.push(candidates[j]);
        // Recur with the same index to allow reuse of the current candidate
        Helper(j, curr, currSum + candidates[j]);
        // Backtrack: remove the last added candidate to explore other combinations
        curr.pop();
    }

}
Helper(0, [], 0); // Start DFS from index 0 with empty combination and sum 0
return res; // Return all found combinations
}