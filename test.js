var expect = require('chai').expect;
const {longestContinuous} = require('./LongestContinuous.js');

describe("Expects, to return the longest continuous stretch of a single number", () => {
  it('longestContinuous([]), should return length of 0', () => {
    expect(longestContinuous([])).to.equal(0);
  });

  it(`longestContinuous(['hello']), should return length of 0`, () => {
    expect(longestContinuous(['hello'])).to.equal(0);
  });

  it(`longestContinuous(['1234']), should return length of 0`, () => {
    expect(longestContinuous(['1234'])).to.equal(0);
  });

  it(`longestContinuous(''), should return length of 0`, () => {
    expect(longestContinuous('')).to.equal(0);
  });

  it('longestContinuous([12345]), should return length of 1', () => {
    expect(longestContinuous([12345])).to.equal(1);
  });

  it('longestContinuous([-1,2,2,3,4,5]), should return length of 2', () => {
    expect(longestContinuous([-1,2,2,3,4,5])).to.equal(2);
  });

  it('longestContinuous([1,7,7,3]), should return length of 2', () => {
    expect(longestContinuous([1,7,7,3])).to.equal(2);
  });

  it('longestContinuous([1,7,7,3,9,9,9,4,9]), should return length of 3', () => {
    expect(longestContinuous([1,7,7,3,9,9,9,4,9])).to.equal(3);
  });

  it('longestContinuous([0,0,0,0,0,0,0,-1]), should return length of 8', () => {
    expect(longestContinuous([0,0,0,0,0,0,0,-1])).to.equal(7);
  });

  it(`longestContinuous([0,0,0,0,0,0,0,0,0]), should return length of 5`, () => {
    expect(longestContinuous([0,0,0,0,0,0,0,0,0])).to.equal(9);
  });

  


});