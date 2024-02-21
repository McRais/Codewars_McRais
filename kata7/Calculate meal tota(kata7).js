function calculate_total(subtotal, tax, tip) {
    return Number((subtotal + (subtotal * tax / 100) + (subtotal * tip / 100)).toFixed(2))
}