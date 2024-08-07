function folding(a,b){
  let count = 0
  while(a>0 && b>0){
    
    if(a>=b){
      count++
      a-=b
      continue
    }
    
    count++
    b-=a
    
  }
  return count
}