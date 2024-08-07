function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0)
}