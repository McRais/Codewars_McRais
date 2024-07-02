function combat(health, damage) {
  if(health<damage){return 0}
  health -= damage
  return health
}