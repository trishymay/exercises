function intersection (array1, array2) {
  if(!array1 || !array2 || !array1.length || !array2.length) return null;
  var result = [];
  var dictionary = {};
  for (var i = 0; i < array1.length; i++) {
    if (dictionary[array1[i]]) {
      dictionary[array1[i]]++;
    } else {
      dictionary[array1[i]] = 1;
    }
  }
  for (var j = 0; j < array2.length; j++) {
    if (dictionary[array2[j]]) {
      result.push(array2[j]);
      dictionary[array1[j]]--;
    }
  }
  return result;
}

var one = [1, 2, 2, 2, 3, 4, 5];
var two = [2, 4, 6, 8, 2];

intersection(one, two);
