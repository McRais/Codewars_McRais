function stonePick(arr) {
  let [cobbCount, stickCount] = [0,0];
  for (let i = 0; i < arr.length; i++){
    switch(arr[i]){
        case "Cobblestone":
        cobbCount++
        break;
        case "Wood":
        stickCount += 4
        break;
        case "Sticks":
        stickCount++
        break;
    }
  }
  if (Math.floor(cobbCount/3) < Math.floor(stickCount/2)) {return Math.floor(cobbCount/3)}
  else {return Math.floor(stickCount/2)}
}