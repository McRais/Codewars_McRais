function giveChange(amount) {
  let arr = [0, 0, 0, 0, 0, 0]
  while(amount>0){
    if(amount >= 100){amount-=100;arr[5]++; continue}
    if(amount >= 50){amount-=50;arr[4]++; continue}
    if(amount >= 20){amount-=20;arr[3]++; continue}
    if(amount >= 10){amount-=10;arr[2]++; continue}
    if(amount >= 5){amount-=5;arr[1]++; continue}
    if(amount >= 1){amount-=1;arr[0]++; continue}
  }
  return arr
}