//Closure é o escopo criado quando uma função é declarada
//Esse escopo ermite a função acessar e manipular variaveis externas a função

//Contexto léxico em ação

const x = "global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
