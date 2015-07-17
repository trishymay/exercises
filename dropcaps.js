function dropCap(n) {
  var str = n.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > 2) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
  }
  return str.join(" ");
}