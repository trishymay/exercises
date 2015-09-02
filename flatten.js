function flatten () {
  var flatArray = [];
  var finished = false;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] && arguments[i].constructor === Array) {
      flatArray = flatArray.concat(arguments[i]);
    } else {
      flatArray.push(arguments[i]);
    }
  }
  while (!finished) {
    for (var j = 0; j < flatArray.length; j++) {
      if (flatArray[j] && flatArray[j].constructor === Array) {
        flatArray.splice.apply(flatArray, [j, 1].concat(flatArray[j]));
      }
    }
    finished = flatArray.every(function (element) {
      return element.constructor !== Array;
    })
  }
  return flatArray;
}

function isBigEnough(element, index, array) {
  return element >= 10;
}
