function takeUmbrella(weather, chance) {
  if(weather=="rainy"){return true}
  if(weather == "cloudy" && chance > 0.2){return true}
  if(weather == "sunny" && chance > 0.5){return true}
  return false
}