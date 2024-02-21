function flickSwitch(arr){
  let answer = [], counter = true
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "flick"){counter = !counter}
    answer.push(counter)
  }
  return answer
}