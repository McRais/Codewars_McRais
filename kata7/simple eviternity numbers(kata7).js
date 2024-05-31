    const solve = (a,b) => {
  const countCheck = n => {
    let s = n+``
    return s.replace(/[35]/g,'').length >= s.replace(/[38]/g,'').length && 
           s.replace(/[38]/g,'').length >= s.replace(/[58]/g,'').length
  }
  let i = 0
  while(a < b){
    i += /^[358]+$/.test(a+``) && countCheck(a); a++
  }
  return i
}
