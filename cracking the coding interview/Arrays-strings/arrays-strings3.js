function urlify (str) {
  var url = "";
  str = str.split(" ");
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    url += str[i];
    if (i + 1 < str.length) {
      url += "%20";
    }
  }
  return url;
}