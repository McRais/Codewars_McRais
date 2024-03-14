function isValidWalk(walk) {
  let [xAxis, yAxis] = [0,0]
  if(walk.length != 10){return false}
  for (let i = 0; i < walk.length; i++){
    switch(walk[i]){
        case "n":
        xAxis++
        break;
        case "s":
        xAxis--
        break;
        case "w":
        yAxis++
        break;
        case "e":
        yAxis--
        break;
    }
  }
  if (xAxis == 0 && yAxis == 0){return true}
  return false
}