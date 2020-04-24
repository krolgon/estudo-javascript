//Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

const cardapio = (cod, quant) => {
  let total;
  switch (cod) {
    case 100:
      total = quant * 3;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    case 200:
      total = quant * 4;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    case 300:
      total = quant * 5.5;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    case 400:
      total = quant * 7.5;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    case 500:
      total = quant * 3.5;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    case 600:
      total = quant * 2.8;
      console.log('valor a ser pago: R$' + total.toFixed(2).replace('.', ','));
      break;
    default:
      console.log('produto inexistente');
      break;
  }
};

let pedido = cardapio(410, 2);
