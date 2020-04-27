//Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

let array = [10, 3.1, 4.9, 5, 6.1, 6.9, 7, 8.9, 9, -2];
console.log(array);

for (let i = 0; i < 10; i++) {
  if (array[i] >= 0 && array[i] <= 4.9) {
    array[i] = 'D';
  } else if (array[i] >= 5 && array[i] <= 6.9) {
    array[i] = 'C';
  } else if (array[i] >= 7 && array[i] <= 8.9) {
    array[i] = 'B';
  } else if (array[i] >= 9 && array[i] <= 10) {
    array[i] = 'A';
  }
}

console.log(array);
