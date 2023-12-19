function highAndLow(numbers){
  let arrayOfNum = numbers.split(' ');
  let high = arrayOfNum[0], low = arrayOfNum[0];
  for (let i = 1; i < arrayOfNum.length; i++){
    if(parseInt(arrayOfNum[i]) > high){high = arrayOfNum[i]}
    if(parseInt(arrayOfNum[i]) < low){low = arrayOfNum[i]}
  }
  return high+" "+low
}