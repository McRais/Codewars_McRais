// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
  let [d,f,k,i] = [0,0,0,0]
  
  for (let n = 0; n < group.length; n++){
    switch(group[n]){
        case "D":
        d++
        break;
        case "F":
        f++
        break;
        case "I":
        i++
        break;
        case "K":
        k++
        break;
    }
  }
  
  //console.log([d,f,k,i])
  
  if(f==1 &&(d==2 || i==2 || k==2)){return "F"} else if(d==1 && i==1 && k==1){return "F"}
  if(d==1 &&(f==2 || i==2 || k==2)){return "D"} else if(f==1 && i==1 && k==1){return "D"}
  if(i==1 &&(d==2 || f==2 || k==2)){return "I"} else if(d==1 && f==1 && k==1){return "I"}
  if(f==3){return "F"}
  if(d==3){return "D"}
  if(i==3){return "I"}
  return "K"
}


//best solution
/* function trilingualDemocracy(group) {
  return String.fromCharCode(group.charCodeAt(0) ^ group.charCodeAt(1) ^ group.charCodeAt(2));
}

When you look at the binary representation of the character codes of the language abbreviations you can notice that they are chosen carefully:

D 1000100
F 1000110
I 1001001
K 1001011
Each two of them have set bits in common while the other two have them unset. ^ is the XOR operator and has the following properties: 0 ^ a == a, a ^ a == 0 With this you get the property that XORing three of the same yield the same, two of the same cancel out and XORing three different letters yields the fourth.
 */