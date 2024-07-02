function generateShape(int){
 let str = ""
 for(let i = 0; i < int; i++){
   if(i!=0){str+="\n"}
   for(let j = 0; j < int; j++){str+="+"}
 }
 return str
}