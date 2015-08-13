var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {this._friends.push.apply(this._friends, f)}
  }
  return person;
}