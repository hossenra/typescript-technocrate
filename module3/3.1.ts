{
  // oop - class
  class Animal {
    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Sheferd Bhai", "dog", "Ghew ghew");
  const cat = new Animal("Selim Molla", "cat", "meu meu");
  dog.makeSound();
  //
}
