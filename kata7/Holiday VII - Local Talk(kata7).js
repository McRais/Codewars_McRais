function pak(s){
  if(!/\S/.test(s)){return ""}
  
  let arr = s.split(" ")
  for(let i = 0; i < arr.length; i+=2){
    arr.splice(i+1, 0, "pak")
  }
  arr.pop()
  
  return arr.join(" ")
}