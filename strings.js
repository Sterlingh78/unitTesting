const strings = (str, b) => {
    if (b == 'reverse') {
        return str.split("").reverse().join("");
    }
    if (b == 'upper') {
        return str.toUpperCase()
    }
    if (b == 'remove') {
        return str.replace(/[aeiou]/gi, '');
    }
}
module.exports = strings;