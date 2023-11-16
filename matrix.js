//This is matrix class.
//The objects of this class are matrixes with (n, n+1) dimensions

class Matrix {
  constructor(n) {
    this.matrix = this.getMatrix(n);
  }

  getMatrix(n) {
    // this will create a 2D array and fill it with zeros
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let j = 0; j < n + 1; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  }

  printMatrix() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        process.stdout.write(this.matrix[i][j] + " ");
      }
      console.log("\n");
    }
  }

  getRows() {
    return this.matrix.length;
  }

  getCols() {
    return this.matrix.length + 1;
  }

  //this function adds the i-th row d*(j-th row)
  mulAdd(i, j, d) {
    for (let k = 0; k < this.getCols(); k++) {
      let t = d * this.matrix[j][k];
      this.matrix[i][k] = this.matrix[i][k] + t;
    }
  }

  //this function returns true if there is a row in the matrix like this-
  //(0, 0, ..., 0, t) where t is nonzero
  existsWrongRow() {
    for (let i = 0; i < this.getRows(); i++) {
      let zero = true;
      for (let j = 0; j < this.getRows(); j++) {
        if (this.matrix[i][j] != 0) {
          zero = false;
          break;
        }
      }
      if (zero == true && this.matrix[i][this.getRows()] != 0) {
        return true;
      }
    }
    return false;
  }

  //this function returns true if there is a row in the matrix like this-
  //(0, 0, ..., 0)
  existsZeroRow() {
    for (let i = 0; i < this.getRows(); i++) {
      let zero = true;
      for (let j = 0; j < this.getCols(); j++) {
        if (this.matrix[i][j] != 0) {
          zero = false;
          break;
        }
      }
      if (zero == true) {
        return true;
      }
    }
    return false;
  }

  //this function swaps the i-th row with a row under it,
  //which i-th element is nonzero
  swapWithNonzeroRow(i) {
    for (let j = i + 1; j < this.getRows(); j++) {
      if (this.matrix[j][i] != 0) {
        for (let k = 0; k < this.getCols(); k++) {
          temp = this.matrix[i][k];
          this.matrix[i][k] = this.matrix[j][k];
          this.matrix[j][k] = temp;
        }
      }
    }
  }

  get(i, j) {
    return this.matrix[i][j];
  }

  set(i, j, d) {
    this.matrix[i][j] = d;
  }
}
module.exports = Matrix;
