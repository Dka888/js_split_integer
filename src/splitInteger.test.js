'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const answer = splitInteger(6, 2);

  expect(answer).toBe([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const array = splitInteger(8, 1);

  expect(array).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(19, 5);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const answer = splitInteger(1, 2);

  expect(answer).toEqual([]);
});
