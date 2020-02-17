const sum = require('../sum');

test('adds 10 + 10 to equal 20', () => {
    expect(sum(10, 10)).toBe(20);
});