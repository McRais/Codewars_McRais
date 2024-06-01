function divisibleByLast(n) {
  n = String(n);
  var result = [false];
  
  for (var i = 1; i < n.length; i++) {
    result.push(n[i] % n[i - 1] === 0);
  }
  
  return result;
}