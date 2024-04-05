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