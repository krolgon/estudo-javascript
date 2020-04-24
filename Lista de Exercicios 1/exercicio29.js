//Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let intervalo = 0;
for (let i = 0; i < 10; i++) {
  array.push(getRandom(1, 100));
  if (array[i] >= 10 && array[i] <= 20) {
    intervalo++;
  }
}

console.log(array);
console.log('Numeros dentro do intervalo: ' + intervalo);
console.log('Numeros fora do intervalo: ' + (array.length - intervalo));
