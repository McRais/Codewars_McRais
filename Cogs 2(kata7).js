function cogRpm(cogs, n) {
  let d = [1,-1];
  return [ d[n % 2] * cogs[n] / cogs[0], d[(cogs.length - n + 1) % 2] * cogs[n] / cogs[cogs.length-1] ];
}