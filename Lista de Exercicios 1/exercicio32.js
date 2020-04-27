// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let soma = 0;
for (let i = 0; i < 10; i++) {
  array.push(getRandom(1, 10));
  soma += array[i];
}

console.log(array);
console.log('media: ' + soma / array.length);
