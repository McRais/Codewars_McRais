function countPositivesSumNegatives(input) {
  let arr = [0,0]
  if(!input || !input.length){return []}
  
  for(let i = 0; i < input.length; i++){
    if(input[i]>0){arr[0]++} else {arr[1] += input[i]}
  }
  
  return arr
}