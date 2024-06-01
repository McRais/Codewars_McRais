function points(games) {
  let counter = 0
  for(let i = 0; i < games.length; i++){
    if(games[i][0]>games[i][2]){counter+=3}
    if(games[i][0]==games[i][2]){counter+=1}
  }
  return counter
}