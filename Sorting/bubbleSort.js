function bubbleSort (arr) {
  if (!arr || !Array.isArray(arr)) return null;
  var flag = true;
  while (flag) {
    flag = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i+1] < arr[i]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        flag = true;
        console.log("processing", arr);
      }
    }
  }
  return arr;
}