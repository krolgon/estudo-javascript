// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let positivo = 0;
let negativo = 0;
for (let i = 0; i < 7; i++) {
  array.push(getRandom(1, 1000));
  if (array[i] % 2 == 0) {
    positivo++;
  } else {
    negativo++;
  }
}

console.log('Qtd numeros positivos: ' + positivo);
console.log('Qtd numeros negativos: ' + negativo);
