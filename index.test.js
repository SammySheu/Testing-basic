const {capitalize, reverseString, calculator} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('mul 1 * 2 to equal 2', () => {
  expect(calculator.mul(1, 2)).toBe(2);
});

test('sub 1 - 2 to equal -1', () => {
  expect(calculator.sub(1, 2)).toBe(-1);
});

test('adds 1 / 2 to equal 0.5', () => {
  expect(calculator.div(1, 2)).toBe(0.5);
});

test('capitilize given string "hello world!"', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

test('reverse given string "hello world!"', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});