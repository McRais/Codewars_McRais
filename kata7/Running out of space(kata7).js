function spacey(array) {
  let [arr, temp] = [[], array[0]]
  for(let i = 1; i <= array.length; i++){
    arr.push(temp)
    temp += array[i]
  }
  return arr
}