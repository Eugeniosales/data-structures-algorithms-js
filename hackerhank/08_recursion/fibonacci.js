// O(2^n)
const fibonacci = (n) => {
  debugger
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}


const main = () => {
  console.log(fibonacci(40))
}

main()
