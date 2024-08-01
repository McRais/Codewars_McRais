function quadrant(x, y) {
  if(x>0){
    if(y>0){return 1}
    return 4
  }
  if(y>0){return 2}
  return 3
}