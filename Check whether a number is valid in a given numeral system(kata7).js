function validateBase(num, base) {
  const ALPHA = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base));
  return [...num].every(n => ALPHA.has(n));
}