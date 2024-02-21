var humanYearsCatYearsDogYears = function(humanYears) {
  let secYear, thirdYear = 0
  if ((humanYears - 1) <= 0){secYear = 0} else {secYear = 1}
  if ((humanYears - 2) <= 0){thirdYear = 0} else {thirdYear = humanYears - 2}
  return [humanYears, 15 + (secYear*9) + (thirdYear*4), 15 + (secYear*9) + (thirdYear*5)]
}