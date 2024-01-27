// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
for (let i = 0; i< sizes.length; i++){
  if(scrollY < sizes[i]){return i} else {scrollY -= sizes[i]}
}  
  return -1
}