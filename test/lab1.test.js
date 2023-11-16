const expect = require("chai").expect;
const Mtrx = require("mtrx");

let m = new Mtrx(2, 3, 0);
const matrix1 = new Mtrx([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
const matrix2 = new Mtrx([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

describe("matrix_test", function () {
  beforeEach(function () {
    console.log("Next test: ");
  });
  it("should create a matrix 2x3 and fill it with zeros", function () {
    expect(m).to.eql([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("should compare two zero 3x3 matrixes and equal", function () {
    expect(Mtrx.zeros(3, 3)).to.eql([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("should compare two ones 3x3 matrixes and equal", function () {
    expect(Mtrx.ones(3, 4)).to.eql([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]);
  });
  it("should create diagonal matrix", function () {
    expect(Mtrx.diag([2, 4, 6])).to.eql([
      [2, 0, 0],
      [0, 4, 0],
      [0, 0, 6],
    ]);
  });
  it("should check if matrix is a matrix", function () {
    expect(Mtrx.isMtrx(m)).to.equal(true);
  });
  it("should add two matrixes", function () {
    expect(Mtrx.add(matrix1, matrix2)).to.eql([
      [2, 2, 3],
      [4, 6, 6],
      [7, 8, 10],
    ]);
  });
  it("should mul two matrixes", function () {
    expect(Mtrx.mul(matrix1, matrix2)).to.eql([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
  it("should div two matrixes", function () {
    expect(Mtrx.div(matrix2, matrix1)).to.eql([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
