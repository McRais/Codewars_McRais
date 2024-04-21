function checkExam(array1, array2) {
  let c = 0
 for(let i = 0; i < array1.length; i++){
   switch (array2[i]){
       case array1[i]:
       c+=4
       break
       case "":
       c+=0
       break
       default:
       c--
   }
 }
return c > 0? c : 0
}