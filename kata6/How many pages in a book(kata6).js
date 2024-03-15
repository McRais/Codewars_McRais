function amountOfPages(summary){
  let counter = summary, pageNum = 1
  let length = Math.ceil(Math.log10(pageNum + 1))
  while(length < counter){
    pageNum++
    length = Math.ceil(Math.log10(pageNum + 1))
    counter -= length
  }
  return pageNum
}