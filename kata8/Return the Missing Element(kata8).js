function getMissingElement(arr){
  return 45 - arr.reduce((a,b) => a+b, 0,)
}