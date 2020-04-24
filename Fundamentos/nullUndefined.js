//Objetos tem propriedades passados por referencias
//Tipos primitivos é cópia por valor
//undefined = não está definido

let valor; //não inicializada
console.log(valor);
valor = null; //não tem valor e nem aponta para lugar algum da memoria ausencia de valor
console.log(valor);
// console.log(valor.toString()); //Erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto.preco);
//delete produto.preco
console.log(produto);
produto.preco = null; //sem preco
