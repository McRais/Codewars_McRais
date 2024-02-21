function consecutive(arr, a, b) {
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case a:
      if(arr[i+1] == b){return true}
      case b: 
      if(arr[i+1] == a){return true}
    }
  }
  return false
}