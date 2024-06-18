function GeometricSequenceSum(a, r, n) {
  let sum = 0
  let curr = a
  for(let i = 0; i < n; i++){
    sum+=curr
    curr*=r
  }
  return sum
}