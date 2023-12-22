function average(scores) {
    var sum = scores.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);
  return Math.round(sum/scores.length)
}