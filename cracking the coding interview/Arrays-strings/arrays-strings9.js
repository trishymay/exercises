function substring (str1, str2) {
  if (str1.indexOf(str2) >= 0 || str2.indexOf(str1) >= 0)
    return true;
  return false;
}

function rotation (str1, str2, substringFunction) {
  if (str1.length === str2.length) {
    var checker = str2 + str2;
    if (substringFunction(str1, checker))
      return true;
  }
  return false;
}

rotation("sweats", "aweats", substring);
