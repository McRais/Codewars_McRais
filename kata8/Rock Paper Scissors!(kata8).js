const rps = (p1, p2) => {
  switch(p1){
      
      case "scissors":
      if(p2 == "paper"){return ("Player 1 won!")}
      if(p2 == "rock"){return ("Player 2 won!")}
      return "Draw!"
      break
      
      case "rock":
      if(p2 == "scissors"){return ("Player 1 won!")}
      if(p2 == "paper"){return ("Player 2 won!")}
      return "Draw!"
      break
      
      case "paper":
      if(p2 == "rock"){return ("Player 1 won!")}
      if(p2 == "scissors"){return ("Player 2 won!")}
      return "Draw!"
      break
      
  }
};