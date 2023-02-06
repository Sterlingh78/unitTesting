const fizzbuzz = require('./fizzbuzz')
const calculator = require('./calculator')
const strings = require('./strings')
const validateObj = require('./validateObj')
const sumNums = require('./sumNums')

// *Fizzbuzz*

test('3 = fizz; 5 = buzz; 3 or 5 = fizzbuzz' , () => {
    expect(fizzbuzz(15)).toStrictEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']);
});

//Check for array
test('test for array returned', () => {
    expect(typeof fizzbuzz(15)).toBe("object")
});

// *Calculator*

// Addition
test('adds 3 + 5 to equal 8', () => {
    expect(calculator(3, 5, '+')).toBe(8);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(3, 5, '+')).toBe("number")
});

// Subtraction
test('subtracts 3 from 5 to equal 2', () => {
    expect(calculator(3, 5, '-')).toBe(2);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(3, 5, '-')).toBe("number")
});

// Multiplication
test('multiply 3 with 5 to equal 15', () => {
    expect(calculator(3, 5, '*')).toBe(15);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(3, 5, '*')).toBe("number")
});

// Division
test('divide 15 by 3 to equal 5', () => {
    expect(calculator(15, 3, '/')).toBe(5);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(15, 3, '/')).toBe("number")
});

// Square
test('square 5 to get 25', () => {
    expect(calculator(5, '^')).toBe(25);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(5, '^')).toBe("number")
});


// Square root
test('return square root of 25 which is 5', () => {
    expect(calculator(25, '√')).toBe(5);
});

//Check for number
test('test for number returned', () => {
    expect(typeof calculator(25, '√')).toBe("number")
});

// *Strings*

// Reverse string
test('reverse input string', () => {
    expect(strings('string', 'reverse')).toBe('gnirts');
});

//Check for string
test('test for string returned', () => {
    expect(typeof strings('string', 'reverse')).toBe("string")
});

// Uppercase string
test('uppercase string', () => {
    expect(strings('string', 'upper')).toBe('STRING');
});

//Check for string
test('test for string returned', () => {
    expect(typeof strings('string', 'upper')).toBe("string")
});

// Remove vowels from string
test('remove vowels from string', () => {
    expect(strings('string', 'remove')).toBe('strng');
});

//Check for string
test('test for string returned', () => {
    expect(typeof strings('string', 'remove')).toBe("string")
});

// *Object validator*

test('check if key is in object', () => {
    expect(validateObj('name', {
        person: "sterling",
        name: "holt"
    })).toBe(true);
});

// Check for boolean
test('test for boolean', () => {
    expect(typeof validateObj('name', {
        person: "sterling",
        name: "holt"
    })).toBe("boolean")
});

// *Sum numbers*

test('sum numbers in given array', () => {
    expect(sumNums([1,2,3,4,5])).toBe(15);
});

test('test for number returned', () => {
    expect(typeof sumNums([1,2,3,4])).toBe("number")
});