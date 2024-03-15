function quicksum(packet){
  if (/^[A-Z ]+$/.test(packet) === false) {return 0}
  
  let returnSum = 0
  let arrOfPacket = packet.split('')
  
  
  for(let i = 0; i < arrOfPacket.length; i++){
    
    if(arrOfPacket[i] != " "){
      returnSum = returnSum + ((i+1) * (arrOfPacket[i].charCodeAt(0) - 64))
    }
  }
  
  return returnSum
  
}