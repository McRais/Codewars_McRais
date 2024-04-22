function add(arr) {
  let accum = 0
  let returnArr = []
  for(let i = 0; i < arr.length; i++){
    accum+=arr[i]
    returnArr.push(accum)
  }
  return returnArr
}