

## 🎯 1. Grid Tricks You Must Know

### ✅ **Top-left corner of 3×3 box**

For any cell `(row, col)`:

```js
startRow = 3 * Math.floor(row / 3);
startCol = 3 * Math.floor(col / 3);
```

or equivalently:

```js
startRow = row - (row % 3);
startCol = col - (col % 3);
```

👉 Finds the 3x3 box’s **top-left corner**.

---

### ✅ **Loop through a 3x3 box**

```js
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        board[startRow + i][startCol + j]
    }
}
```

👉 Access every cell in the 3x3 subgrid.

---

### ✅ **Combine row, col, and subgrid check (Single Loop)**

```js
for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;

    let r = 3 * Math.floor(row / 3) + Math.floor(x / 3);
    let c = 3 * Math.floor(col / 3) + (x % 3);
    if (board[r][c] === num) return false;
}
```

👉 One loop for **row, column, and subgrid** check.

---

### ✅ **Backtracking Pattern**

```js
Try placing number
    |
Check if valid
    |
YES ──► Place number ──► Recurse
    |
NO  ──► Try next number
    |
If all fail ──► Backtrack (reset cell)
```

---

# 🔥 🪜 Visual Flowchart of Recursion + Backtracking

```
Start
  |
Find first empty cell
  |
Try placing '1' to '9'
  |
IsValid?
 /     \
NO      YES
|        |
Try next  Place number
number    |
          Recurse deeper
          |
          Solved?
          /    \
        NO      YES
        |         |
   Undo number   Return True
   (Backtrack)
        |
 Try next number
        |
No valid number?
        |
Return False
```

---

# 💥 Key Insights

✅ Recursive function **explores all possibilities**
✅ **Backtracking happens when no numbers fit**
✅ Base case: Entire board is filled → return true
