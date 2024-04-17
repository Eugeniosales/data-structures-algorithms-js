const cache = {};
let count = 0;
const memoizedFibonacci = (n) => {
  if (n < 2) return n;
  if (n in cache) {
    count++;
    return cache[n];
  }
  cache[n] = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  return cache[n];
} 

const main = () => {
  console.log(memoizedFibonacci(7))
  console.log("Count ->", count);
}

main();
