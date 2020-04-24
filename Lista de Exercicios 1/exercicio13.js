//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const dia = 10;

switch (dia) {
  case 1:
    console.log('domingo');
    break;
  case 2:
    console.log('segunda');
    break;
  case 3:
    console.log('terça');
    break;
  case 4:
    console.log('quarta');
    break;
  case 5:
    console.log('quinta');
    break;
  case 6:
    console.log('sexta');
    break;
  case 7:
    console.log('sabado');
    break;
  default:
    console.log('dia inválido');
    break;
}
