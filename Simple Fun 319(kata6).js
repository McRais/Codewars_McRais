  function numberAndIPaddress(s){
  if (/\./.test(s)){return adressToNum(s).toString()}
  else {return numToAdress(s)}
}

function adressToNum(ip){
  return parseInt(ip.split`.`.map(v=>(v*1).toString(2).padStart(8,0)).join``,2)
}

function numToAdress(num){
  return (num*1).toString(2).padStart(32,0).match(/.{8}/g).map(v=>parseInt(v,2)).join`.`
}
