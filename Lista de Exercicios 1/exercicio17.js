//Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela.Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const funcionario = (plano, salarioAtual) => {
  switch (plano) {
    case 'a':
      console.log('novo salário: ' + (salarioAtual * 0.1 + salarioAtual));
      break;
    case 'b':
      console.log('novo salário: ' + (salarioAtual * 0.15 + salarioAtual));
      break;
    case 'c':
      console.log('novo salário: ' + (salarioAtual += 0.2 * salarioAtual));
      break;
    default:
      console.log('plano inválido');
      break;
  }
};

let func = funcionario('c', 100);
