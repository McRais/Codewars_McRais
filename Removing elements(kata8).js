function removeEveryOther(arr){
  let array = arr
  for (let i = 0; i < array.length; i++){
    array.splice(i+1, 1)
  }
  return array
}