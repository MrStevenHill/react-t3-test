// Add two numbers together
function sum(a, b) {
  return a + b;
}

// Test equality
test('sum of 1 & 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test inequality
test('sum of 1 & 2 does not equal 4', () => {
  expect(sum(1, 2)).not.toBe(4);
});

// Test with regular expressions
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Test contents of arrays
const shoppingList = [
  'milk',
  'bread',
  'ketchup',
  'toilet roll',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// See Jest docs for more examples
// https://jestjs.io/docs/en/using-matchers
