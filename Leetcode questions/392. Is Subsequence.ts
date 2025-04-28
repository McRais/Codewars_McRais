function isSubsequence(s: string, t: string): boolean {
    if(s.length == 0){return true}
    let secPointer = 0
    for(let i = 0; i<t.length; i++){
        if(t[i] === s[secPointer]){
            secPointer++
            if(secPointer === s.length){return true}
        }
    }
    return false
};