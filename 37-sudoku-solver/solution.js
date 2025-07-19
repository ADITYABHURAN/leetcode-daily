/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // Check if placing 'num' at (row, col) is valid
    function isValid(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            // Check the row and column
            if (board[row][x] === num || board[x][col] === num) {
                return false;
            }

            // Check the 3x3 subgrid
            let r = 3 * Math.floor(row / 3) + Math.floor(x / 3);
            let c = 3 * Math.floor(col / 3) + (x % 3);
            if (board[r][c] === num) {
                return false;
            }
        }
        return true; // No conflict
    }

    // Recursive backtracking function
    function helper(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        let char = num.toString();
                        if (isValid(board, row, col, char)) {
                            board[row][col] = char; // Place the number
                            if (helper(board)) {
                                return true; // Solved
                            }
                            board[row][col] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // Entire board is filled
    }

    helper(board);
};