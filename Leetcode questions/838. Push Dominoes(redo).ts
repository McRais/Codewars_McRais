const R = 82; // 'R'
const L = 76; // 'L'
const O = 46; // '.'

const pushDominoes = (s) => {
    const n = s.length;
    const a = new TextEncoder().encode(s);
    let p = O;
    let j = 0;
    for (let i = 0; i < n; ++i) {
        const ai = a[i];
        if (ai === R) {
            if (p == R) a.fill(p, j, i);
            p = R;
            j = i;
        } else if (ai === L) {
            if (p === O) {
                a.fill(L, j, i + 1);
            } else {
                const h = (i - j + 1) >>> 1;
                a.fill(R, j, j + h);
                a.fill(L, i - h + 1, i + 1);
            }
            j = i + 1;
            p = O;
        }
    }
    if (p == R) a.fill(p, j, n);
    return new TextDecoder().decode(a);;
};