const thue = require('../src')

describe("Thue-Morse", () => {
  [
    { len:  1, expected: "0" },
    { len:  2, expected: "01" },
    { len:  3, expected: "011" },
    { len:  4, expected: "0110" },
    { len:  5, expected: "01101" },
    { len: 10, expected: "0110100110" },
    { len: 16, expected: "0110100110010110" },
    { len: 32, expected: "01101001100101101001011001101001" },
    { len: 34, expected: "0110100110010110100101100110100110" },
  ].map(({len, expected}) => {
    it(`should works on ${len}`, () => {
      expect(thue(len)).toEqual(expected)
    })
  })
});
