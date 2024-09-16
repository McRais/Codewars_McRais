const recaman = n => {
  const seq = [0];
  for(let i = 1, seen = {0: true}; i <= n; i++, seen[seq.at(-1)] = true)
    seq.push(seq.at(-1) - i < 0 || seen[seq.at(-1) - i] ? seq.at(-1) + i : seq.at(-1) - i);
  
  return seq.at(-1);
}