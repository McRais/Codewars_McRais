function removeSmallest(numbers) {
    if(!numbers)return [];
  let min=Math.min.apply(null,numbers);
  let newArr = numbers.slice(0);
  newArr.splice(newArr.indexOf(min),1);
  return newArr;
  }