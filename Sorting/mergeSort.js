function mergeSort (array) {
  if (!array || !array.length || !Array.isArray(array)) return null;
  if (array.length === 1) return array;
  var leftArray = [];
  var rightArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i % 2) {
      rightArray.push(array[i]);
    } else {
      leftArray.push(array[i]);
    }
  }
  var left = mergeSort(leftArray);
  var right = mergeSort(rightArray);

  return compare(left, right);
}

function compare (left, right) {
  var result = [];
  var leftPointer = 0;
  var rightPointer = 0;
  for (var i = 0; i < left.length + right.length; i++) {
    if (leftPointer < left.length && rightPointer < right.length) {
      if (left[leftPointer] > right[rightPointer]) {
        result.push(right[rightPointer]);
        rightPointer++;
      } else {
        result.push(left[leftPointer]);
        leftPointer++;
      }
    } else if (leftPointer < left.length) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return result;
}
