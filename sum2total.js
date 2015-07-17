function total(arr) {
  if (arr.length < 2)
    return arr[0];
  var arr2 = [];
  for (var i = 0; i < arr.length - 1; i++) {
    arr2.push(arr[i] + arr[i + 1]);
  }
  if (arr2.length > 1) {
    return total(arr2);
  }
  return arr2[0];
}