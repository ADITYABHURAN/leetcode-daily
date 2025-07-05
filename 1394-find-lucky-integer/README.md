# LeetCode Problem - [1394. Find Lucky Integer in an Array](https://leetcode.com/problems/find-lucky-integer-in-an-array/)

## 📜 Problem Description
A lucky integer is an integer whose frequency in the array is equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer, return `-1`.

---

## 🧠 Approach
1. Use a hash map to count the frequency of each number.
2. Loop through the map and check if any number equals its frequency.
3. Track the largest lucky integer.
4. Return the result.

