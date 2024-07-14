
const main = function() {
  var grid = [
    [-1, 2, 3],
    [0, 9, 8],
    [1, 0, 1],
  ];
  const dRow = [0, 1, 0, -1];
  const dCol = [-1, 0, 1, 0];
  const row = grid.length;
  const col = grid[0].length;

  const isVisited = new Set();

  const isValid = function(x, y) {
    if(x < 0 || y < 0 || x >= row || y >= col) return false;
    if(isVisited.has(`${x}${y}`)) return false;
    return true;
  }

  const dfs = function(x, y) {
    let stack = [];
    stack.push({ x, y });

    while(stack.length) {
      const node = stack.pop();

      const { x, y } = node;

      if(!isValid(x, y)) continue;

      isVisited.add(`${x}${y}`);

      console.log(grid[x][y]);

      for(let i = 0; i < 4; i++) {
        stack.push({ x: x + dRow[i], y: y + dCol[i] });
      }
    }
  }

  dfs(0, 0);

};

main();
