function squareDigits(num){
    const arrayRet = Array.from(num.toString())
    for(let i = 0; i < arrayRet.length; i++){
        arrayRet[i] = Math.pow(arrayRet[i], 2)
    }
    return parseInt(arrayRet.join(''))
}