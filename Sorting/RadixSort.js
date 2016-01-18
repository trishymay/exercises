function radixSort (array) {
  if (!array || !Array.isArray(array) || !array.length) return [];
  var maxDigits = Math.max.apply(null, array).toString().length;
  var divideNum = 1;
  for (var i = 0; i < maxDigits; i++) {
    var buckets = {};
    for (var a = 0; a < 10; a++) {
      buckets[a] = [];
    }
    for (var j = 0; j < array.length; j++) {
      buckets[Math.floor(array[j]/divideNum) % 10].push(array[j]);
    }
    var result = [];
    for (var b = 0; b < 10; b++) {
      result = result.concat(buckets[b]);
    }
    array = result;
    divideNum *= 10;
  }
  return array;
}

radixSort([23, 97, 111, 59, 2228, 2, 195, 1004, 670]);
