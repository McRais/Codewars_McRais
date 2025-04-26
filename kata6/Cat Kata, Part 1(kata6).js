function peacefulYard(y, d) {
  var coords = [];
  for (let i = 0; i < y.length; i++) {
    if (y[i].indexOf("L") !== -1) coords.push([i, y[i].indexOf("L")]);
    if (y[i].indexOf("M") !== -1) coords.push([i, y[i].indexOf("M")]);
    if (y[i].indexOf("R") !== -1) coords.push([i, y[i].indexOf("R")]);
  }
  if (coords.length <= 1) return true;
  return coords.map((c, i) => Math.min(...coords.filter((d, j) => j !== i).map(e => Math.sqrt(Math.pow(e[0] - c[0], 2) + Math.pow(e[1] - c[1], 2)))) < d).every(b => !b);
}