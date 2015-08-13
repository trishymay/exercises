function deleteNth(arr,x){
  var dictionary = {};
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (!dictionary[arr[i]]) {
      results.push(arr[i]);
      dictionary[arr[i]] = 1;
    } else if (dictionary[arr[i]] < x) {
      results.push(arr[i]);
      dictionary[arr[i]]++;
    }
  }
    return results;
}