const sub = require('../sub');

test('subtracts 10 - 5 to equal 5', () => {
    expect(sub(10, 5)).toBe(5);
});