function converter (mpg) {
  return +Number.parseFloat(mpg*1.609344/4.54609188).toFixed(2);
}