function remove(s,n){
  let answer = String(s)
  while (n) {
     answer = answer.replace(/!/, "");
   n-=1;
  }
  
  return answer
}