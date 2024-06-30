function bearDollars(arr) {
  let money = 0
  console.log(arr)
  for(let i = 0; i < arr.length; i++){

    switch(arr[i][1].toLowerCase()){
        case "close friend":
        money += arr[i][0]*25
        break;
        case "friend":
        money += arr[i][0]*50
        break;
        case "acquaintance":
        money += arr[i][0]*100
        break;
        default:
        money += arr[i][0]*125
        break;
    }
  }
  return money
}