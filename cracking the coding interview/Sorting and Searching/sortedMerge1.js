function sortedMerge (arrayA, arrayB) {
  if (!arrayA || !arrayB || !Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    return null;
  }
  var totalLength = arrayA.length + arrayB.length;
  var pointerA = arrayA.length - 1;
  var pointerB = arrayB.length - 1;
  for (var i = totalLength - 1; i >= 0; i--) {
    if (pointerA >= 0 && pointerB >=0) {
      if (arrayA[pointerA] > arrayB[pointerB]) {
        arrayA[i] = arrayA[pointerA--];
      } else {
        arrayA[i] = arrayB[pointerB--];
      }
    } else if (pointerA >= 0) {
      arrayA[i] = arrayA[pointerA--];
    } else {
      arrayA[i] = arrayB[pointerB--];
    }
  }
  return arrayA;
}

var a = [2, 3, 16, 19, 29, 66, 79, 104];
var b = [1, 18, 23, 24, 25, 68, 111];

sortedMerge(a, b);

