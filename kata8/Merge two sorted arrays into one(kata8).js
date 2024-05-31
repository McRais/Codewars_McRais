function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2)
  arr.sort((a,b) => {return a - b})
  let uniq = [...new Set(arr)];
  return uniq
}