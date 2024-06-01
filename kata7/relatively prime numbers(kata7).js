let gcd=(a,b)=>b===0?a:gcd(b,a%b)
let relativelyPrime=(n,l)=>l.filter(i=>gcd(n,i)===1)