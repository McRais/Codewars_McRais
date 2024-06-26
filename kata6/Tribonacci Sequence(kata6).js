function tribonacci(signature,n){
  if(n<=3){
    signature.length = n
    return signature
  }
  let answer = [...signature]
  for(let i = 3; i < n; i++){
    answer.push(answer[i-3] + answer[i-2] + answer[i-1])
  }
  return answer
}