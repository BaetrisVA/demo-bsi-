//breaking encapitulation
//proses meng enkapitulasi data data
import Animal from './animal.js';
import Mammal from './mammal.js';

const elephant = new Animal('Gajah', 'Herbivore', '100', true, 100);
const orangutan = new Mammal( 'orangutan', 'omnivore',200, false,12);

console.log(orangutan.isAdult());