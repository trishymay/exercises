function archersReady(archers){
  var current = true;

  if(!archers.length) {
    return false;
  }

  for (var i = 0; i < archers.length; i++) {
     if(archers[i] < 5){
     return false;
     }
  }

  return current;

}