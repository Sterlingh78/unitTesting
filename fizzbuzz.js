const fizzbuzz = (n) => {
    let arr = []

    for (let i = 0; i <= n; i++) {
        if (i !== 0) {
            if (i / 3 === 0) {
                arr.splice(i, 0, 'fizz')
            }
            if (i / 5 === 0) {
                arr.splice(i, 1, 'buzz')
            }
            if (i / 3 === 0 && i / 5 === 0) {
                arr.splice(i, 1, 'fizzbuzz')
            }
            if (i / 3 !== 0 && i / 5 !== 0) {
                arr.splice(i, 0, i)
            }
        } else {
            arr.push(i)
        }
    }
    return arr
}

console.log(fizzbuzz(15))

module.exports = fizzbuzz;