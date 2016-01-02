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

function permutation (str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  var dictionary = {};
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) continue;
    if (!dictionary[str1[i]])
      dictionary[str1[i]] = 1;
    else if (dictionary[str1[i]] === -1) {
      delete dictionary[str1[i]];
    } else {
      dictionary[str1[i]]++;
    }
    if (!dictionary[str2[i]]) {
      dictionary[str2[i]] = -1;
    } else if (dictionary[str2[i]] === 1) {
      delete dictionary[str2[i]];
    } else {
      dictionary[str1[i]]--;
    }
  }
  if (!Object.keys(dictionary).length) return true;
  return false;
}