function moveZeros(arr) {
  let counter0 = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr.splice(i,1);
      counter0++
      i--
    }
  }
  
  for (let i = 0; i< counter0; i++){arr.push(0)}
  
  return arr
}