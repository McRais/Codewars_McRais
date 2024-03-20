function duplicateCount(text){
 text = text.toLowerCase().split("")
 let countedletters = text.reduce((allLetters, letter) => {
    if(letter in allLetters) {
    allLetters[letter]++
    } else {
    allLetters[letter] = 1
    }
    return allLetters 
    }, {})
  
  const filterDup = Object.values(countedletters).filter((duplicate) => duplicate >=2)
  return filterDup.length
}