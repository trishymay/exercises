function duplicate (string) {
  string = string || "";
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j])
        return true;
    }
  }
  return false;
}