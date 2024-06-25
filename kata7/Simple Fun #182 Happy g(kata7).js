function gHappy(str) {
  return !/(^|[^g])g($|[^g])/.test(str)
}