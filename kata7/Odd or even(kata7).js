function oddOrEven(array) {
   if(!array || !array.length){return "even"}
  let sum = array.reduce((a, c) => a + c, 0, )
  return sum%2 == 0 ? "even" : "odd" 
}