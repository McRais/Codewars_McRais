function findOutlier(integers){
    let oddCount = 0, evenCount = 0, evenNumInQuestion= 0, oddNumInQuestion = 0, remainder = 0;
    for (let i = 0; i < integers.length; i++){
      remainder = integers[i] % 2;
      if (remainder == 0){
        evenCount++;
        evenNumInQuestion = integers[i];
      } else if (remainder != 0){
        oddCount++;
        oddNumInQuestion = integers[i];
        }
     }
    if (oddCount < evenCount){return oddNumInQuestion}
    if (evenCount < oddCount){return evenNumInQuestion};
   }