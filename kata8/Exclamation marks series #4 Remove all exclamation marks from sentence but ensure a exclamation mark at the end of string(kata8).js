function remove (string) {
  let answer = String(string)
  answer = answer.replace(/!/g, "")
  return answer + "!"
}