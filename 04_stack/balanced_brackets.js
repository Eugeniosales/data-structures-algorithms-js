const isBalanced = (str) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  let stack = [];

  for (const char of str) {
    if (char in map) {
      stack.push(char);
    } else {
        let top = stack.pop();
        if (map[top] != char) return "NO";
    }
  }
  return stack.length ? "NO" : "YES";
}

const main = () => {
  [
    '(()',
  ].forEach(str => console.log(isBalanced(str)))
}

main()
