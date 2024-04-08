function canIPlay(now,start,end) {
  
  let endTime = end-1
  let starttime = now
  if (starttime < start){starttime+=24}
  if(end < start){endTime+=24}
  if(starttime >= start && starttime <= endTime){return true} else {return false}
}