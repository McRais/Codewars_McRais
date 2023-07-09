var uniqueInOrder=function(iterable){
    let returnArray = [], i = 1;            //let there be array in which we will write symbols and counter "i" for the loop
  
   if (iterable.length == 0){
     return returnArray;                       //if array "iterable" is empty we will just return it and call it a day
   };
   
   returnArray[0] = iterable[0]             //we will always .push the first symbol in the returnArray. Because of that loop will start from the second element so i = 1
  
   while (i < iterable.length) {            //start of the loop from the second to the last element of the "iterable" 
     if (iterable[i] != iterable[i - 1]){ 
       returnArray.push(iterable[i]);       //if current element != previous one - we will push it to the returnArray
     };
     i++; //counter + 1
   };
 
   return returnArray;
 }