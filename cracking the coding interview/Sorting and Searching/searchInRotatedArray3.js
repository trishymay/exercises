function searchRotated (array, num) {
  if (array.length === 1) {
    if (array[0] === num) return 0;
    return false;
  }
  var leftArr = array.slice(0, Math.ceil(array.length/2));
  var rightArr = array.slice(Math.ceil(array.length/2), array.length);
  var flag;

  if (leftArr[0] <= leftArr[leftArr.length - 1]) {
    if (leftArr[0] <= num && leftArr[leftArr.length -1] >= num) {
      flag = 'left';
    } else {
      flag = 'right';
    }
  } else {
    if (rightArr[0] <= num && rightArr[rightArr.length -1] >= num) {
      flag = 'right';
    } else {
      flag = 'left';
    }
  }

  if (flag === 'left') {
    var result = searchRotated(leftArr, num);
  } else {
    var result = searchRotated(rightArr, num);
    if (typeof result === 'boolean') {
      return false;
    } else {
      result += leftArr.length;
    }
  }
  return result;
}

var arr = [7, 8, 9, 11, 11, 17, 1, 3, 5];
searchRotated(arr, 1);