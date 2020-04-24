//Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.

const calculo = (n1, sinal, n2) => {
  switch (sinal) {
    case '+':
      console.log(n1 + n2);
      break;
    case '-':
      console.log(n1 - n2);
      break;
    case '*':
      console.log(n1 * n2);
      break;
    case '/':
      console.log(n1 / n2);
      break;
    default:
      console.log('operação invalida');
      break;
  }
};

let numeros = calculo(6, '*', 25);
