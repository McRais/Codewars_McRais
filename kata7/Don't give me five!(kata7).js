function dontGiveMeFive(start, end)
{
  let counter = 0
 for(let i = start; i <= end; i++){
   if(!/5/.test(i)){counter++}
 }
  return counter
}