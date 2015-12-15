var numberMatrix = [[1,1,1],[1,0,1],[1,1,1],[1,1,1]];

function zeroMatrix (matrix) {
  var rows = [];
  var columns = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (+matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }
  for (var k = 0; k < rows.length; k++) {
    for (var l = 0; l < matrix[0].length; l++) {
      matrix[rows[k]][l] = 0;
    }
  }
  for (var m = 0; m < columns.length; m++) {
    for (var n = 0; n < matrix.length; n++) {
      matrix[n][columns[m]] = 0;
    }
  }
  return matrix;
}

zeroMatrix(numberMatrix);