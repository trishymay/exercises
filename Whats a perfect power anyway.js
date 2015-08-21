var isPP = function(n){
  for (var i = 2; i <= n/2; i++) {
    for (var j = 2; j <= n/2; j++) {
      var current = Math.pow(i,j);
      if (current == n)
        return [i, j];
      if (current > n)
        break;
    }
  }
  return null;
}