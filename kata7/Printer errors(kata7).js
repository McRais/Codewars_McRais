function printerError(s) {
    let error = 0;
    let regex = /[a-m]/
  for(let i = 0; i < s.length; i++){
    if(!regex.test(s[i])){error++}
  }
  return (error + "/" + (s.length))
}