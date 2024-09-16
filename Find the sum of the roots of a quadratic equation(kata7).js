function roots(a,b,c) {
  let d = b*b - 4 * a * c;
  if (d < 0) return null;
  return +(-b/a).toFixed(2);
}