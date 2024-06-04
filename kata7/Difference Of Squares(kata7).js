function differenceOfSquares(n) {
  let arr = []
  for(let i = 1; i <= n; i++){arr.push(i)}
  return Math.pow(arr.reduce((acc,cur) => acc+cur,0,),2) - arr.reduce((acc, cur) => acc + (cur*cur),0,)
}