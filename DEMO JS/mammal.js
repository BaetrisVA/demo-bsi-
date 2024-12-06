import Animal from './animal.js';

class Mammal  extends Animal{
    constructor(name, food, energy, canReproduce){
        super(name, food, energy, canReproduce);
    }
    isAdult(){
        return this.getAge () > 50
    }
}

export default Mammal;