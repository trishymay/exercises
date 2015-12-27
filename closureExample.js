function closure () {
  var counter = 10;
  function counts () {
    return counter++;
  }
  return counts;
}

var counts = closure();