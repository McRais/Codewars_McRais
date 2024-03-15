function XO(str) {
    let [numX, numO] = [0,0]
    let arr = str.split('')

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === "X" || arr[i] === "x"){numX+=1}
        if (arr[i] === "O" || arr[i] === "o"){numO+=1}
    }

    if (numX === numO) {return true}
    return false
}