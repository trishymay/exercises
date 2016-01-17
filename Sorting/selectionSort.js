function selectionSort (array) {
  if (!array || !Array.isArray(array)) return null;
  for (var i = 0; i < array.length; i++) {
    var smallest = array[i];
    var indexOfSmallest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        indexOfSmallest = j;
      }
    }
    array[indexOfSmallest] = array[i];
    array[i] = smallest;
  }
  return array;
}