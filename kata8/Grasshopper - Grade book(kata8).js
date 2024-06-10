function getGrade (s1, s2, s3) {
  let av = (s1+s2+s3)/3
  if(av>=90){return("A")}
  if(av>=80){return("B")}
  if(av>=70){return("C")}
  if(av>=60){return("D")}
  return("F")
}