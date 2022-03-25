import { subtractProductAndSum } from './subtract-the-product-and-sum-of-digits-of-an-integer';

describe('1281.subtract-the-product-and-sum-of-digits-of-an-integer', () => {
  it.each`
    input   | expected
    ${234}  | ${15}
    ${4421} | ${21}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(subtractProductAndSum(input)).toBe(expected);
  });
});
