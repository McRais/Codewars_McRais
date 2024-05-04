function isPronic(n){
  if (n === 0) {return true}
  let sqrtN = Math.sqrt(n)
  return sqrtN % 1 !== 0 && Math.ceil(sqrtN) * Math.floor(sqrtN) === n
}