const main = () => {
  var grid = [
    [-1, 2, 3],
    [0, 9, 8],
    [1, 0, 1],
  ];
  const row = grid.length;
  const col = grid[0].length;
  const dRow = [0, 1, 0, -1];
  const dCol = [-1, 0, 1, 0];

  const isVisisted = new Set();

  const isValid = function(x, y) {
    if(x < 0 || y < 0 || x >= row || y >= col) return false;
    if(isVisisted.has(`${x}${y}`)) return false;
    return true;
  }

  const dfs = function(x, y) {
    if(!isValid(x, y)) return false;
    isVisisted.add(`${x}${y}`);
    
    console.log(grid[x][y]);

    for(let i = 0; i < 4; i++) {
      const xAdj = x + dRow[i];
      const yAdj = y + dCol[i];
      dfs(xAdj, yAdj)
    }
  }

  dfs(0, 0);
};

main();
