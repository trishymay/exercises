function rotate(array,n){
  var answer = array.slice(0);
  for(var i = 0; i < n; i++) {
    answer.unshift(answer.pop());
  }
  for(var i = 0; i < -n; i++) {
    answer.push(answer.shift());
  }
  return answer;
}