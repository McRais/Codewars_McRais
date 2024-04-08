function removeExclamationMarks(s) {
  let arr = s.split("")
  return arr.filter((letter) => letter != "!").join("")
}