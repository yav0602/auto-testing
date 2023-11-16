const sinon = require("sinon");
const Matrix = require("../matrix.js");

const mockMatrix = new Matrix(3);
const mock = sinon.mock(mockMatrix);

describe("Mocking", () => {
  it("should call every Matrix's method once", () => {
    mock.expects("getMatrix").once();
    mock.expects("printMatrix").once();
    mock.expects("getRows").once();
    mock.expects("getCols").once();
    mock.expects("mulAdd").once();
    mock.expects("existsWrongRow").once();
    mock.expects("existsZeroRow").once();
    mock.expects("swapWithNonzeroRow").once();

    mockMatrix.getMatrix();
    mockMatrix.printMatrix();
    mockMatrix.getRows();
    mockMatrix.getCols();
    mockMatrix.mulAdd();
    mockMatrix.existsWrongRow();
    mockMatrix.existsZeroRow();
    mockMatrix.swapWithNonzeroRow();

    mock.verify();
  });
});
