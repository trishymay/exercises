var iterator = function () {
  var val = 0;
  return {
    addOne : function () {
      val++;
      return val;
    },
    subtractOne : function () {
      val--;
      return val;
    },
    currentValue : function () {
      return val;
    }
  }
}();