function Animal (type) {
  this.type = type;
  this.next = null;
}

function AnimalQueue () {
  this.front = null;
  this.end = null;
}

AnimalQueue.prototype.add = function (animal) {
  if (!this.front) {
    this.front = animal;
  } else {
    this.end.next = animal;
  }
  this.end = animal;
};

AnimalQueue.prototype.remove = function () {
  if (!this.front) return null;
  var pet = this.front;
  if (!this.front.next) {
    this.front = null;
    this.end = null;
  } else {
    this.front = this.front.next;
  }
  return pet;
};

AnimalQueue.prototype.peek = function () {
  return this.front;
};

AnimalQueue.prototype.isEmpty = function () {
  if (!this.front) return true;
  return false;
};

function Shelter () {
  this.cats = new AnimalQueue();
  this.dogs = new AnimalQueue();
  this.intakeCounter = 0;
}

Shelter.prototype.intake = function (type) {
  if (type !== 'cat' && type !== 'dog') throw new Error('input must be cat or dog');
  var pet = new Animal(type);
  pet.intakeNum = ++this.intakeCounter;
  if (type === 'cat') {
    this.cats.add(pet);
  } else {
    this.dogs.add(pet);
  }
};

Shelter.prototype.adopt = function (type) {
  if (type && type !== 'cat' && type !== 'dog') throw new Error('input must be cat or dog or left blank for first available pet');
  if (this.cats.isEmpty() && this.dogs.isEmpty()) return "No animals available";
  if (!type) {
    if (this.cats.isEmpty()) type = 'dog';
    else if (this.dogs.isEmpty()) type = 'cat';
    else if (this.cats.peek().intakeNum > this.dogs.peek().intakeNum) {
      type = 'dog';
    } else {
      type = 'cat';
    }
  }
  if (type === 'dog') {
    return this.dogs.remove();
  } else {
    return this.cats.remove();
  }
};

var petPlace = new Shelter();
petPlace.intake('cat');
petPlace.intake('dog');
petPlace.intake('cat');
petPlace.intake('dog');
petPlace.intake('dog');


