// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

function Warrior(n){
  var currentName = n;
  this.name = function(newName){
    if(newName)
      currentName = newName;
    return currentName;
  };
}

Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
};

//Tests

var albert  = new Warrior("Albert");
var boris  = new Warrior("Boris");

Test.expect(albert.toString()=="Hi! my name's Albert");
Test.expect(albert.name()=="Albert");
Test.expect(boris.name()=="Boris");

boris.name("Bobo");
Test.expect(boris.name()=="Bobo");
