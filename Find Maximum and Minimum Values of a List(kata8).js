var min = function(list){
    let minN = list[0]
    for(let i = 0; i < list.length; i++){
      if (list[i] < minN){
        minN = list[i]
      }
    }
    return minN
}

var max = function(list){
    let maxN = list[0]
    for(let i = 0; i < list.length; i++){
      if (list[i] > maxN){
        maxN = list[i]
      }
    }
    return maxN
    
}