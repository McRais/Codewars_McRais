function sumOfMinimums(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        arr[i].sort((a,b) => {return a-b})
        sum += arr[i][0]
    }
    return sum
}