function ghostBusters(building) {
  let b = building.replace(/\s/g,'')
  console.log(b)
  return b.length == building.length? "You just wanted my autograph didn't you?" : b
}