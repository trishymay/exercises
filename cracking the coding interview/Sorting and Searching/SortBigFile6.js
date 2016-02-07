function sortBigFile (array) {
  if (array.length < 2) return array;
  var right = array.splice(array.length/2);
  var left = array;
  left = sortBigFile(left);
  right = sortBigFile(right);
  return merge(left, right);
}

function merge (left, right) {
  var result = [];
  var iL = 0;
  var iR = 0;
  for (var i = 0; i < left.length + right.length; i++) {
    if (iL < left.length && iR < right.length) {
      if (left[iL] > right[iR]) {
        result.push(right[iR++]);
      } else {
        result.push(left[iL++]);
      }
    } else if (iL < left.length) {
      result.push(left[iL++]);
    } else {
      result.push(right[iR++]);
    }
  }
  return result;
}

var arr = 'and then I walked outside and saw two cats'.split(' ');
sortBigFile(arr);
