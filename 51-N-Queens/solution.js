//hard question 
//recurssion and backtracking 

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    //create initial board setup with all cells empty 
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));

    //convert the board array of arrays into an array of strings 
    function convertBoard(board) {
        return board.map(row => row.join(''));
    }

    //checks if its valid to place the queen at board[row][col]
    function isValid(row, col, board) {
        //check the same column for other queens 
        for (let x = 0;x < row; x++) {
            if (board[x] [col] === 'Q') return false;
        }

        //check the top-left diagonal
        for (let r = row, c =col; r >= 0 && c >= 0; r--, c--) {
            if (board[r][c] === 'Q') return false;
        }

        //check the top-right diagonal 
        for (let r = row, c =col; r >= 0 && c < n; r--, c++) {
            if (board[r][c] === 'Q') return false;
        }
       return true;
    }
    //function to place queen on the board 
    function positionNextQueen(board, row) {
        //base case: if all queens are placed 
        if (row === n) {
            res.push(convertBoard(board));
            return;
        }

        //try placing the queen in each column of the current row 
        for (let col = 0; col< n; col++){
            if (isValid(row, col, board)) {
                board[row][col] = 'Q';
                positionNextQueen(board, row + 1);
                board[row][col] = '.'
            }
        }
    }
    positionNextQueen(board, 0); //start from first row 
    return res;
};