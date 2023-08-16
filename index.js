// Write your classes here

class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

// Testing the classes
const oak = new Deciduous("Deciduous Oak", "Oak");
console.log("Deciduous Definition:", Deciduous.definition()); // Should include both definitions
console.log("Oak Definition:", oak.constructor.definition()); // Should include both definitions

const pine = new Evergreen("Evergreen Pine", "Pine");
console.log("Evergreen Definition:", Evergreen.definition()); // Should include both definitions
console.log("Pine Definition:", pine.constructor.definition()); // Should include both definitions
