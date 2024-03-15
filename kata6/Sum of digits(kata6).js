function sumOfDigits(num){
  let returnNum = 0
  let myArr = String(num).split("").map((num) => {
    return Number(num)
})
  for(let i = 0; i < myArr.length; i++){
    returnNum+=myArr[i]
  }
  
  return returnNum
}

function digitalRoot(n) {
  let answer = n+0
  while(String(answer).length > 1){
    answer = sumOfDigits(answer)
  }
  return answer
}