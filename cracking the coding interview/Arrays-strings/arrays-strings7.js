var arrs = [[1,2,3,4], [5,6,7,8], [9, 10, 11, 12], [13, 14, 15, 16]];
var nums = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25]];

function rotate (matrix) {
  var backIndex = matrix.length - 1;
  var runLength = matrix.length - 1;
  for (var i = 0; i < matrix.length/2; i++) {
    var endIndex = backIndex;
    for (var j = i; j < runLength + i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[endIndex][i];
      matrix[endIndex][i] = matrix[backIndex][endIndex];
      matrix[backIndex][endIndex] = matrix[j][backIndex];
      matrix[j][backIndex] = temp;
      endIndex--;
    }
    backIndex--;
    runLength -= 2;
  }
  return matrix;
}

rotate(arrs);