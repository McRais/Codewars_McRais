function stray(numbers) {
 numbers.sort()
  if(numbers[0] != numbers[1] && numbers[0] != numbers[2]){return numbers[0]}
  return numbers[numbers.length-1]
}