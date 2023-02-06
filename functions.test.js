const fizzbuzz = require('./fizzbuzz')
const addition = require('./addition')

// *Fizzbuzz*
test('3 = fizz; 5 = buzz; 3 or 5 = fizzbuzz' , () => {
    expect(fizzbuzz(15)).toStrictEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']);
});

// *Calculator*

// Addition
test('adds 3 + 5 to equal 8', () => {
    expect(addition(3, 5)).toBe(8);
});

// Subtraction
test('subtracts 3 from 5 to equal 2', () => {
    expect(subtraction(3, 5)).toBe(2);
})