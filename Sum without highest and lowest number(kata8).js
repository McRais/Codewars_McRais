function sumArray(array) {
  if(array == null|| array.length < 3){return 0}
  array.sort((a, b) => b - a)
  array.pop()
  array.shift()
return result = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
}