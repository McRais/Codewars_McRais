function sumMix(x){
return x.map((num) => parseInt(num)).reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0)
}