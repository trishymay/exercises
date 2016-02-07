function groupAnagrams (array) {
  var dictionary = {};
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var sorted = array[i].split('').sort().join('');
    if (dictionary[sorted]) {
      dictionary[sorted].push(array[i]);
    } else {
      dictionary[sorted] = [array[i]];
    }
  }
  for (var key in dictionary) {
    result = result.concat(dictionary[key]);
  }
  return result;
}

var arr = ['lady', 'brown', 'september', 'hello', 'yes', 'no', 'aldy', 'on', 'tembersep'];

groupAnagrams(arr);