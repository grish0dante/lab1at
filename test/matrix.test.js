import { expect } from 'chai';
import Mtrx from 'mtrx'; 

describe('Matrix operations', function () {
  let A, B;

  beforeEach(() => {
    A = new Mtrx([[1, 2], [3, 4]]);
    B = new Mtrx([[2, 0], [1, 2]]);
  });

  it('should add two matrices correctly', () => {
    const result = A.add(B);
    console.log('\n=== A + B ===');
    console.table(result);
    expect(result).to.deep.equal([[3, 2], [4, 6]]);
  });

  it('should multiply two matrices correctly', () => {
    const result = A.rightMul(B); // або: const result = B.leftMul(A);
    console.log('\n=== A · B ===');
    console.table(result);
    expect(result).to.deep.equal([[4, 4], [10, 8]]);
  });

  it('should transpose a matrix', () => {
    const result = A.T();
    console.log('\n=== Aᵀ ===');
    console.table(result);
    expect(result).to.deep.equal([[1, 3], [2, 4]]);
  });
});
