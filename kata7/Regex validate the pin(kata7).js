function validatePIN (pin) {
    let isnum = /^\d+$/.test(pin);
    return (pin.length === 4 || pin.length === 6) ? ((isnum === true) ? true : false) : false
}