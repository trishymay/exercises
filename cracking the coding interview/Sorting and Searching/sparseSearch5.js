function sparseSearch (array, string) {
  var mid;
  var midHigh;
  var midLow;
  var low = 0;
  var high = array.length - 1;
  while (!array[low].length || !array[high].length) {
    while (!array[low].length) low++;
    while (!array[high].length) high--;
  }

  var getMid = function () {
    mid = Math.floor((low + high)/2);
    midHigh = mid;
    midLow = mid;
    while (!array[mid].length) {
      midHigh += 1;
      if (array[midHigh].length) {
        mid = midHigh;
      } else {
        midLow -= 1;
        if (array[midLow].length) mid = midLow;
      }
      if (low >= midLow && high <= midHigh) return false;
    }
  }

  while (true) {
    getMid();
    if (array[mid] === string) return mid;
    if (mid === low) return false;
    if (array[mid] < string) low = midHigh;
    else high = midLow;
  }
}

var arr = ['', '', '', 'amy', '', '', '', 'b', '', 'c', 'd', '', '', '', '', ''];
sparseSearch(arr, 'a');