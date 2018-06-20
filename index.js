function findElement(arr, func) {
  const res = arr.filter(func);
  return res[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
