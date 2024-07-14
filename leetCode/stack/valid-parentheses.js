/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const closedBracket = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for(const word of s) {
    if(word in closedBracket) {
      let openedBracked = stack.pop();
      if(openedBracked !== closedBracket[word]) {
          return false;
      }
    } else {
      stack.push(word);
    }
  }
  return stack.length === 0;
};