function well(x){
  let counter = 0
  for(let i = 0; i < x.length; i++){
    if(x[i] === "good"){counter++}   
  }
  switch(counter){
      case 0:
      return "Fail!"
      case 1:
      case 2:
      return "Publish!"
  }
  return "I smell a series!"
}