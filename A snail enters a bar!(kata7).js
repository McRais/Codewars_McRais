function canSnailReachEnd(length, speed, lengthIncreases) {
  return lengthIncreases < speed
    && (length / (speed - lengthIncreases) < 365.25 * 24 * 60);
}