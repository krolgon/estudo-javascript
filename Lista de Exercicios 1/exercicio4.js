//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const divisao = (dividendo, divisor) => {
  let resultado = dividendo / divisor;
  console.log('resultado: ' + resultado);
  let resto = dividendo % divisor;
  console.log('resto: ' + resto);
};

let numeros = divisao(49, 2);
