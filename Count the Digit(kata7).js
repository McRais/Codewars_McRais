function nbDig(n, d) {
  var o = '';
    for(var i = 0; i <= n; i++){
      o += Math.pow(i, 2);
    }
  return o.split(d).length-1
}