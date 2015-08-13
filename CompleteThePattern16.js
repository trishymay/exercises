function pattern (n) {
  if (n < 1)
    return "";
  var output;
  var array = [];
  for (var j = n; j > 0; j--) {
    for (var i = n; i > 0; i--) {
      if (i > j) {
        array.push(i % 10);
      } else {
        array.push(j % 10);
      }
    }
    if (j > 1)
      array.push('\n');
  }
  output = array.join('');
  return output;
}