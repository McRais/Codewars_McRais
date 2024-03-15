function spinWords(string){
  let wordsArr = string.split(' ')
  
  const reverseTheWord = (string) => {
    return string.split("").reverse().join("")
  }
  
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length >= 5) {
      wordsArr[i] = reverseTheWord(wordsArr[i])
    }
  }
  
  return wordsArr.join(' ')
}