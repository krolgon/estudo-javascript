//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const calculadora = (x, y) => {
  console.log('soma: ' + (x + y));
  console.log('subtracao: ' + (x - y));
  console.log('multiplicacao: ' + x * y);
  console.log('divisao: ' + x / y);
};

let teste = calculadora(2, 3);
