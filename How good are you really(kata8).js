function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, v) => 
    acc + v, yourPoints,
  )
  //console.log(sum)
  if( yourPoints > sum/(classPoints.length+1)){return true}
  return false
}
