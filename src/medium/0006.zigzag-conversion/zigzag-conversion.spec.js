import { convert } from './zigzag-conversion';

describe('0006.zigzag-conversion', () => {
  it.each`
    input               | rowCount | expected
    ${'A'}              | ${1}     | ${'A'}
    ${'PAY'}            | ${4}     | ${'PAY'}
    ${'PAYPALISHIRING'} | ${3}     | ${'PAHNAPLSIIGYIR'}
    ${'PAYPALISHIRING'} | ${4}     | ${'PINALSIGYAHRPI'}
  `(
    'should return $expected with $input on $rowCount rows',
    ({ input, expected, rowCount }) => {
      expect.hasAssertions();
      expect(convert(input, rowCount)).toBe(expected);
    }
  );
});
