function frogContest(n) {
  let [chris, tom, cat, tomI, catI] = [0,0,0,0,0]
  
  for(let i = 1; i <= n; i++){chris += i}
  
  tomI = Math.floor(chris/2)
  for(let i = 1; i <= tomI; i++){tom += i}
  
  catI = chris + tom
  for(let i = 1; i <= catI; i++){cat += i}
  
  return ("Chris ate "+ chris +" flies, Tom ate "+ tom +" flies and Cat ate "+ cat +" flies")
}