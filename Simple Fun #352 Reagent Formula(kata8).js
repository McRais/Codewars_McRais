function isValid(formula){
  let [counter78, counter56] = [0,0]
  
  formula.sort()
  for(let i = 0; i < formula.length; i++){
    switch(formula[i]){
        case 1:
        if(formula[i+1] === 2){return false}
        break;
        
        case 3:
        if(formula[i+1] === 4){return false}
        break;
        
        case 5:
        case 6:
        counter56++
        break;
        
        case 7:
        case 8:
        counter78++
        break;
    }
  }
  
  if (counter56 != 0 && counter56 != 2){return false}
  if (counter78 == 0){return false}
  return true  
}