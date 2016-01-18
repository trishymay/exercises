function quickSort (array) {
  if (!array || !array.length || !Array.isArray(array)) return [];
  if (array.length === 1) return array;
  var partition = 0;
  var pivot = array.pop();
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      var temp = array[i];
      array[i] = array[partition];
      array[partition] = temp;
      partition++;
    }
  }
  var left = quickSort(array.splice(0, partition));
  var right = quickSort(array);
  left.push(pivot);

  return left.concat(right);
}

quickSort([3, 7, 1, 9, 8, 2, 5, 4, 6]);