const calculator = (a, b, operator) => {
    if (operator == '+') {
        return a + b
    }
    if (operator == '-') {
        return b - a
    }
    if (operator == '*') {
        return a * b
    }
    if (operator == '/') {
        return a / b
    }
    if (b == '^') {
        return a * a
    }
    if (b == '√') {
        return Math.sqrt(a)
    }
}
module.exports = calculator