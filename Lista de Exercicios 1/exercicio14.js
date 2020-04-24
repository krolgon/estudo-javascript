// ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.

const fruta = 'MelanCia';

switch (fruta.toLowerCase()) {
  case 'maça':
    console.log('não vendemos essa fruta aqui!');
    break;
  case 'kiwi':
    console.log('estamos com escasses de kiwis!');
    break;
  case 'melancia':
    console.log('aqui está, são 3 reais o kg');
    break;
  default:
    console.log('fruta invalida');
}
