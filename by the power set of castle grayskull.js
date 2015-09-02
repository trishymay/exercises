function power(list) {
  var set = [];
  var binaryList = [];
  var lengthOfSet = Math.pow(2, list.length);
  function binary(num,digits){
    var bin = (num >>> 0).toString(2);
    if (bin.length < digits) {
      var extraDigits = "";
      for (var i = 0; i < digits - bin.length; i++) {
        extraDigits += "0";
      }
      bin = extraDigits + bin;
    }
    return bin;
  }
  for (var i = 0; i < lengthOfSet; i++) {
    binaryList.push(binary(i, list.length));
    console.log(binaryList[binaryList.length - 1]);
  }

  while(binaryList.length) {
    var current = binaryList.pop();
    var currArr = []
    for (var i = 0; i < list.length; i++) {
      if (current[i] === "1")
        currArr.push(list[i]);
    }
    set.push(currArr);
  }
  console.log(set);
  return set;
}
