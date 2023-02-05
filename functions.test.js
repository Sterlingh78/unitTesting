const sum = require('./functions');


// Example function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//Fizzbuzz
test('3 = fizz; 5 = buzz; 3 or 5 = fizzbuzz' , () => {
    expect(fizzbuzz(15)).toBe([0,1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']);
})