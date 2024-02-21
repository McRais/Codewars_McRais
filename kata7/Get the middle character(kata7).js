function getMiddle(s){
  let sMid = 0.0
  if(s.length % 2 == 0){
    sMid = (s.length/2)
    return s.substring(sMid-1,sMid+1)
  } else{
    sMid = (s.length/2) - 0.5
    return s.substr(sMid,1)
  }
}