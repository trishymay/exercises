function compress(string) {
  var compressed = "";
  for (var i = 0; i < string.length; i++) {
    var count = 1;
    while (string[i] === string[i+1]) {
      count++;
      i++;
    }
    compressed += string[i] + count;
  }
  if (compressed.length < string.length) {
    return compressed;
  } else {
    return string;
  }
}