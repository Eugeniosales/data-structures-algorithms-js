const binarySearch = (value, arr) => {
  if (!arr.length) return false;
  return binarySearchAux(value, arr, 0, arr.length-1);
};

const binarySearchAux = (value, arr, low, high) => {
  if (low > high) return false;
  const mid = low + Math.floor((high - low) / 2);
  if (value === arr[mid]) {
    return true
  } else if (value <= arr[mid]) {
    return binarySearchAux(value, arr, low, mid-1);
  } else {
    return binarySearchAux(value, arr, mid+1, high);
  }
}

const main = () => {
  const arr = [2, 4, 6, 8, 10]
  console.log(binarySearch(10, arr));
}

main()
