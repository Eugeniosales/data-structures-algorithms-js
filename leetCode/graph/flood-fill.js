/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;

  const dRow = [0, 1, 0, -1];
  const dCol = [-1, 0, 1, 0];

  const newColor = color;
  const oldColor = image[sr][sc];

  const isValid = function (x, y) {
      if (x < 0 || y < 0 || x >= rows || y >= cols) return false;
      if(image[x][y] !== oldColor) return false;
      return true;
  }

  const dfs = function (x, y) {
      if(!isValid(x, y)) return false;
      
      image[x][y] = newColor;
      
      for (let i = 0; i < 4; i++) {
          const xAdj = x + dRow[i];
          const yAdj = y + dCol[i];
          dfs(xAdj, yAdj);
      }
  }
  if(newColor !== oldColor) dfs(sr, sc);
  return image;
};