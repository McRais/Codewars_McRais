function findEvenIndex(arr)
{
 let sumFirst,sumSecond;
  for (let i = 0; i < arr.length; i++){
    sumFirst = 0;
    sumSecond = 0;
    for(let j = 0; j < arr.length; j++){
      if (j < i){
        sumFirst += arr[j];
      } else if (j > i){sumSecond += arr[j]}
    }
    if (sumSecond == sumFirst){return i}
  }
  return -1;
}