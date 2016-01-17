function Animal (data, type) {
  this.data = data;
  this.type = type;
  this.next = null;
}

function AnimalQueue () {
  this.first = null;
  this.last = null;
}

function Shelter () {
  this.petIds = 0;
  this.cats = new AnimalQueue();
  this.dogs = new AnimalQueue();
}

AnimalQueue.prototype.add = function (data, type) {
  if (!data || !type) return null;
  if (type !== 'cat' && type !== 'dog') return null;
  var animal = new Animal(data, type);
  if (!this.last) {
    this.first = animal;
  } else {
    this.last.next = animal;
  }
  this.last = animal;
};

AnimalQueue.prototype.remove = function () {
  if (!this.first) return null;
  var removed = this.first;
  this.first = this.first.next;
  if (!this.first) this.last = null;
  removed.next = null;
  return removed;
};

AnimalQueue.prototype.isEmpty = function () {
  if (!this.first) return true;
  return false;
};

Shelter.prototype.addAnimal = function (data, type) {
  if (!data || !type) return null;
  if (type !== 'cat' && type !== 'dog') return null;
  this.petIds++;
  if (type === 'cat') {
    this.cats.add(data, type);
    this.cats.last.petId = this.petIds;
  } else {
    this.dogs.add(data, type);
    this.dogs.last.petId = this.petIds;
  }
};

Shelter.prototype.adoptAnimal = function (type) {
  if (!type) {
    if (this.cats.isEmpty() && this.dogs.isEmpty()) return null;
    else if (this.cats.isEmpty()) type = 'dog';
    else if (this.dogs.isEmpty()) type = 'cat';
    else type = this.cats.first.petId > this.dogs.first.petId ? 'dog' : 'cat';
  }
  var result = null;
  if (type === 'cat') {
    result = this.cats.remove();
  } else if (type === 'dog') {
    result = this.dogs.remove();
  }
  return result;
};
