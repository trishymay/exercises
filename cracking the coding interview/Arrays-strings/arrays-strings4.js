function palindromePermutation(str) {
  str = str.split(" ").join("").toLowerCase();
  if (str.length < 2)
    return false;
  var dictionary = {};
  var checklist = [];
  var singles = 0;

  for (var i = 0; i < str.length; i++) {
    if (dictionary[str[i]]) {
      dictionary[str[i]]++;
    } else {
      dictionary[str[i]] = 1;
      checklist.push(str[i]);
    }
  }
  for (var j = 0; j < checklist.length; j++) {
    if (dictionary[checklist[j]]%2 !== 0)
      singles++;
    if (singles > 1)
      return false;
  }
  return true
}