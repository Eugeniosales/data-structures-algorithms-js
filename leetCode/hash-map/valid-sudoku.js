/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const row = new Map();
  const col = new Map();
  const box = new Map();

  for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
          const cell = board[i][j];
          const boxKey = `${Math.floor(i/3)}-${Math.floor(j/3)}`;
          if(cell !== '.') {
              if(row.get(i)?.has(cell) || col.get(j)?.has(cell) || box.get(boxKey)?.has(cell)) return false;
              row.set(i, new Set(row.get(i)).add(cell));
              col.set(j, new Set(col.get(j)).add(cell));
              box.set(boxKey, new Set(box.get(boxKey)).add(cell));
          }
      }
  }
  return true;
};