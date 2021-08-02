class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    toString() {
        return document.write("name : " + this.name + " weight : " + this.weight + " kg ");
    }
}

let objAnimal1 = new Animal("Elephant", 45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("mou", 20)
objAnimal2.setName("Mouse");
objAnimal2.toString();