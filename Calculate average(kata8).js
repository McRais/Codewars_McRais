function findAverage(array) {
  if (!array.length){return 0}
  return (array.reduce((acc, v) => acc+v, 0,))/array.length
}