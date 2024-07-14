/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dRows = [0, 1, 0, -1];
    const dCols = [-1, 0, 1, 0];

    const isValid = function (x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols) return false;
        return true;
    }

    const dfs = function (x, y, k) {
        if (k === word.length) return true;

        if (!isValid(x, y)) return false;
        if (board[x][y] !== word[k]) return false;

        let temp = board[x][y];
        board[x][y] = ".";

        for (let i = 0; i < 4; i++) {
            const xAdj = x + dRows[i];
            const yAdj = y + dCols[i];
            if(dfs(xAdj, yAdj, k + 1)) return true;
        }

        board[x][y] = temp;
        return false;
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
};