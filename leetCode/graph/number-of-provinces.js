/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const rows = isConnected.length;
  const cols = isConnected[0].length;
  const isVisited = new Set();
  const dfs = function (i) {
    isVisited.add(i);
    for(let j = 0; j < cols; j++) {
      if(!isVisited.has(j) && isConnected[i][j] === 1) dfs(j);
    }
  };

  let connected = 0;
  for(let i = 0; i < rows; i++) {
    if(!isVisited.has(i)) {
      connected++;
      dfs(i);
    }
  }
  return connected;
};
