function findOdd(A) {
  let counter = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return arr[i];
    }
  }
}