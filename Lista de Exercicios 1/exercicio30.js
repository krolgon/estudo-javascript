//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let maior = 0;
let menor = 1000;
for (let i = 0; i < 10; i++) {
  array.push(getRandom(1, 1000));
  if (array[i] > maior) {
    maior = array[i];
  }
  if (array[i] < menor) {
    menor = array[i];
  }
}
console.log(array);
console.log('maior numero: ' + maior);
console.log('menor numero: ' + menor);
