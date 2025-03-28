'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
  health = 100;

  hide() {
    this.hidden = !this.hidden;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Carnivore extends Animal {
  health = 100;

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
