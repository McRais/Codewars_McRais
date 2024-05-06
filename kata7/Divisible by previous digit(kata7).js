const divisibleByLast = n => {
  return n.toString().split('').map((el, ind, arr) => el % arr[ind - 1] === 0);
}