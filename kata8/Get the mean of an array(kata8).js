function getAverage(marks){
  return Math.floor(marks.reduce((a,c) => a+c, 0, ) / marks.length)
}