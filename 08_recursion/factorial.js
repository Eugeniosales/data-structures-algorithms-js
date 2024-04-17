const findFactorialRecursive = (number) => {
  return factorialRecursiveAuxiliar(number, number);
};

const factorialRecursiveAuxiliar = (number, result) => {
  if (number === 2) return result;
  result = result * (number - 1);
  return factorialRecursiveAuxiliar(number - 1, result);
};

const shortFactorialRecursive = (number) => {
  if (number === 2) return 2;
  return number * shortFactorialRecursive(number - 1);
};

const findFactorialIterative = (number) => {};

const main = () => {
  console.log(shortFactorialRecursive(6));
};

main();
