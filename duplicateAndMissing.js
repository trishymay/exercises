//There is an array of N size containing the numbers from 1 through N. One number has been removed and replaced with a duplicate of another number in the array.  The array is not in order.  Return the info to indicate the duplicate and the missing number.

function findTheFunk (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) throw new Error('Invalid Input');
  var sorted = Array(arr.length + 1).fill('empty');
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (current > arr.length) throw new Error('Multiple missing numbers');
    if (sorted[current] === 'empty') {
      sorted[current] = current;
    } else {
      sorted[0] = current;
    }
  }
  var missing = sorted.indexOf('empty');
  if (!missing) return "There was no duplicate number";
  var duplicate = sorted[0];
  var result = "Missing number is " + missing + "  Duplicate number is " + duplicate;
  return result;
}