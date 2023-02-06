const fizzbuzz = require('./fizzbuzz')
const calculator = require('./calculator')

// *Fizzbuzz*
test('3 = fizz; 5 = buzz; 3 or 5 = fizzbuzz' , () => {
    expect(fizzbuzz(15)).toStrictEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']);
});

// *Calculator*

// Addition
test('adds 3 + 5 to equal 8', () => {
    expect(calculator(3, 5, '+')).toBe(8);
});

// Subtraction
test('subtracts 3 from 5 to equal 2', () => {
    expect(calculator(3, 5, '-')).toBe(2);
});

// Multiplication
test('multiply 3 with 5 to equal 15', () => {
    expect(calculator(3, 5, '*')).toBe(15);
});

// Division
test('divide 15 by 3 to equal 5', () => {
    expect(calculator(15, 3, '/')).toBe(5);
});

// Square
test('square 5 to get 25', () => {
    expect(calculator(5, '^')).toBe(25);
});

// Square root
test('return square root of 25 which is 5', () => {
    expect(calculator(25, '√')).toBe(5);
});