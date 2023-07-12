function nextBigger(n){
    let stringNum = n.toString(), splice = 0, recordNum = 0, newNumTemp = 0, spliceNum = 0;
    let arrayOfNum =[], arrayOfNumNew = [], sliceOfArrayOfNumForSort = [], sliceOfArrayOfNumUnchang = [] ;
    for (let i = 0; i < stringNum.length; i++){ 
      arrayOfNum[i] = stringNum[i]
    }; 
    
    for( let h = (stringNum.length); h > 0; h--){
    for (let j = (stringNum.length); j >= 0; j--){
      if (arrayOfNum[h] > arrayOfNum[j]){
        spliceNum = arrayOfNum[h];
        arrayOfNumNew = arrayOfNum.slice();
        arrayOfNumNew.splice(h, 1);
        arrayOfNumNew.splice(j, 0, spliceNum);
        sliceOfArrayOfNumForSort = arrayOfNumNew.slice(j+1);
        sliceOfArrayOfNumUnchang = arrayOfNumNew.slice(0, j+1)
        sliceOfArrayOfNumForSort.sort()
        arrayOfNumNew = sliceOfArrayOfNumUnchang.concat(sliceOfArrayOfNumForSort)
        newNumTemp = parseInt(arrayOfNumNew.join(''))
        if (newNumTemp < recordNum && newNumTemp > n) {recordNum = newNumTemp} else if( recordNum == 0 && newNumTemp > n){recordNum = newNumTemp}
      }
    }
      }
    
    if (recordNum != 0){return recordNum} else{ return -1}
  } 