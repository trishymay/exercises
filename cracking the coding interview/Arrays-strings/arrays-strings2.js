function permutation (string1, string2) {
  if (string1.length !== string2.length)
    return false;
  var one = {};
  var two = {};
  for (var i = 0; i < string1.length; i++) {
    if (one[string1[i]]) {
      one[string1[i]] += 1;
    } else {
      one[string1[i]] = 1;
    }
    if (two[string2[i]]) {
      two[string2[i]] += 1;
    } else {
      two[string2[i]] = 1;
    }
  }

  for (var j = 0; j < string1.length; j++) {
    if (one[string1[j]] !== two[string1[j]])
      return false
  }
  return true;
}