//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let negativo = 0;

for (let i = 0; i < 10; i++) {
  array.push(getRandom(-5, 5));
  if (array[i] < 0) {
    negativo++;
  }
}

console.log(array);
console.log('numeros negativos: ' + negativo);
