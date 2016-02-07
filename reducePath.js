function reducePath (string) {
  if (!string || typeof string !== 'string') throw new Error('Invalid Input');
  var arr = string.split('/');
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '..') {
      if (!result.length) throw new Error('Invalid Input');
      result.pop();
    } else if (arr[i] !== '.') {
      result.push(arr[i]);
    }
  }
  return result.join('/')
}