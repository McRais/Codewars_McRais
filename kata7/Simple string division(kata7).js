function solve(str, k) {
    let len = str.length - k
    let arr = []
    for (let i = 0; i < str.length; i++)
        arr.push(str.slice(i, len + i))
    return Math.max(...arr)
}