// Add two numbers together
function sum(a, b) {
  return a + b;
}

it('adds 1 and 2 correctly', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(4);
});
