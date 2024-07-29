function alphabet(ns) {
  const arr = ns.sort((a, b) => a - b);
  // Delete AxB
  let ab = arr.find((e) => e === arr[0] * arr[1]);
  arr.splice(arr.indexOf(ab), 1);
  // A and B are first two numbers, CxD is the greatest. Delete A, B and CxD
  let newArr = arr.slice(2, 6);
  //now we have  C , D, BxC DxA. C is smallest
  let c = newArr[0];
  //return to first array and find D from CxD (the biggest -the last one)
  return arr[6] / c;
}