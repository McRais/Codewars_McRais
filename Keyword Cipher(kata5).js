function keywordCipher(string, keyword) {
  const dict = new Map(Array.from(
    new Set(keyword + "abcdefghijklmnopqrstuvwxyz"),
    (c, i) => [String.fromCharCode(97 + i), c]
  ))
  return string.replace(/\w/g, c => dict.get(c.toLowerCase()))
}