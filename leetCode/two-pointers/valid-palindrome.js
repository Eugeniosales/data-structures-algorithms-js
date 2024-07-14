/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while(left < right) {
      if(str[left] !== str[right]) return false;
      left++;
      right--;
  }
  return true;
};