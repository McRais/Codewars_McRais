function dnaStrand(dna){
  let arr = []
  for(let i = 0; i < dna.length; i++){
    switch(dna[i]){
        case "A":
        arr.push("T")
        break;
        case "T":
        arr.push("A")
        break;
        case "C":
        arr.push("G")
        break;
        case "G":
        arr.push("C")
    }
  }
  return arr.join('')
}