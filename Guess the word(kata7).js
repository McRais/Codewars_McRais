function countCorrectCharacters(correctWord, guess){
  let count = 0
  if(correctWord.length != guess.length){throw 'error'}
  for(let i = 0; i < correctWord.length; i++){
    if(correctWord[i] == guess[i]){
      count++
    }
  }
  return count
}