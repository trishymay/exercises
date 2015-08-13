function mineLocation(field){
  var result = [];
  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] > 0) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return result;
}