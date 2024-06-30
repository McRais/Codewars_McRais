function sumDigits(number) {
  let n = Math.abs(number)
  let arr = Array.from(String(n), Number)
  return arr.reduce((a,c) => a+c, 0,)
}
