// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  if(!buttons.length) {return Nothing}
  
  let [counterL,counterD] = [0,0]
  for(let i = 0; i < buttons.length; i++){
    switch(buttons[i]){
        
        case Like:
        counterD = 0
        counterL++
        if (counterL == 2){counterL = 0}
        break;
        
        case Dislike:
        counterL = 0
        counterD++
        if (counterD == 2){counterD = 0}
        break;
    }
  }
  
  if(counterL == 1){return Like}
  if(counterD == 1){return Dislike}
  return Nothing
}