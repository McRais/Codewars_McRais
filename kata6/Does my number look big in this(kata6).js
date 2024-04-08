let narcissistic = (value) => {
  const val = String(value).split('');
  let result = 0;

  for (ch of val) {
    const num = parseInt(ch, 0)
    result += Math.pow(num, val.length);
  }

  return result === value;
}