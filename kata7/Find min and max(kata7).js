function getMinMax(arr){
  return [arr.sort((a,b) => a-b)[0], arr.sort((a,b) => a-b)[arr.length-1]]
};