function gimmeTheLetters(sp) {
  let [start, finish, arr] = [sp.charCodeAt(0), sp.charCodeAt(2), []]
  while(start <= finish){
    arr.push(String.fromCharCode(start))
    start++
  }
  return arr.join('')
}