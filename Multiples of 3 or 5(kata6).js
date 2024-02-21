
function solution(number){
  let arr = [];
  let sortArr = [];
  
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sortArr.push(i);
    }
  }
  
  const sumTotal = sortArr.reduce((sum, num) => sum + num, 0);
  
  return sumTotal;
}