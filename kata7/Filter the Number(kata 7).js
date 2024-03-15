var filterString = function(value) {
  let arr = value.split("")
  return parseInt(arr.filter((number) => Number.isInteger(parseInt(number))).join(''))
}