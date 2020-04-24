//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

let triangulo = (x, y, z) => {
  if (x === y && x === z) {
    console.log('triangulo equilatero');
  } else if (x === y || x === z) {
    console.log('triangulo isosceles');
  } else {
    console.log('triangulo escaleno');
  }
};

let teste1 = triangulo(1, 2, 3);
let teste2 = triangulo(1, 1, 2);
let teste3 = triangulo(1, 1, 1);
