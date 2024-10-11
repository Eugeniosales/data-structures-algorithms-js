/**
 * @param {string} s
 * @return {boolean}
 */
/* 
    Approach - Stack
    Time: O(n); 
    Space: O(n);
    Steps
        .initialize map with correspoding brakets
        .Loop throught the string and add open bracket to the stack
        .When closed bracket shows up
            .Check if the top element in queue is the correspoing bracket
                .If so, pop queue and keep moving
                .Otherwise, return false
        .return true
*/
var isValid = function(s) {
  const bracket = {
      ")": "(",
      "}": "{",
      "]": "["
  };

  let stack = [];

  for(const c of s) {
      if(!(c in bracket)) stack.push(c);
      if(c in bracket) {
          const top = stack.pop();
          if(bracket[c] !== top) return false;
      }
  }
  return !stack.length;
};