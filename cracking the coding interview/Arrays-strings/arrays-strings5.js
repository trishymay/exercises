function withinOne(string1, string2) {
  var counter = 0;
  if (string1.length == string2.length) {
    for (var i = 0; i < string1.length; i++) {
      if (string1[i] != string2[i]) {
        counter ++;
        if (counter > 1)
          return false;
      }
    }
  } else if (string1.length - string2.length == 1 || -1) {
    for (var j = 0; j < string1.length; j++) {
      if ((string1[j] != string2[j]) && (string1[j+1] != string2[j]) && (string1[j] != string2[j+1]))
        return false;
    }
  } else {
    return false;
  }
  return true;
}