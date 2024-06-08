function mergeStrings(first, second){
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}