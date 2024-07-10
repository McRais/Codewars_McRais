function numberToPower(number, power){
  let num = number
  if (power == 0){return 1}
  for(let i = 1; i < power; i++){num*=number}
  return num
}