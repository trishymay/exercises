function searchNoSize (list, num) {
  var index = num;
  var low = 0;
  var mid;
  var high;
  while (!high) {
    if (list.i(index) === -1 || list.i(index) >= num) {
      high = index;
    } else if (list.i(index) < num) {
      low = index;
      index *= 2;
    }
  }
  while (true) {
    mid = Math.floor((high + low)/2);
    if (list.i(mid) === num) return mid;
    else if (mid === low) return false;
    else if (list.i(mid) > num || list.i(mid) < 0) high = mid;
    else low = mid;
  }
}

var list = {}
list.arr = [1, 2, 3, 5, 18, 22, 38];
list.i = function (index) {
  var val = this.arr[index];
  if (val === undefined) return -1;
  return val;
};

searchNoSize(list, 7);