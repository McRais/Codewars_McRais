function or(a, b) { return a ? true : b ? true : false };

function xor(a, b) { return or(a, b) && or(!a, !b) };