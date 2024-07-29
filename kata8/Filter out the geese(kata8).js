function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filtered = birds.filter(w => geese.indexOf(w) ===-1)
  return filtered
};