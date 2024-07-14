/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0;
  let curr = 0;
  for(const alt of gain) {
      curr +=alt;
      max = Math.max(max, curr);
  }
  return max;
};