var countBits = function(n) {
  let toBinary = n.toString(2)
  let counter = 0
  for(let i = 0; i<toBinary.length;i++){
    if(toBinary[i] == 1){counter++}
  }
  return counter
};