//funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //o segundo da undefined
imprimirSoma(2, 3, 4, 5); //pega só os dois primeiros
imprimirSoma();

//funcao com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
