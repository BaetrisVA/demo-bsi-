//Encapsulation
//Inheritance
//Polymorphism
//Abstraction 


//Object
class Animal {
    #age
    constructor(name, food, energy, canReproduce){
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#age = 20
    }
//breaking encapitulation
//proses meng enkapitulasi data data
    isAdult (){
        return this.#age >18
    }
        
}

const elephant = new Animal('Gajah', 'Herbivore', '100', true);

console.log(elephant.isAdult());