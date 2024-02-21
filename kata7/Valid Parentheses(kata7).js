function validParentheses(parenStr) {
    let opened = 0, closed = 0
    for (let i = 0; i < parenStr.length; i++){
        if(parenStr[i] == '(' ){opened++} else {closed++; if(closed > opened){return false} }
    }
    return (opened == closed) ? true : false
}
