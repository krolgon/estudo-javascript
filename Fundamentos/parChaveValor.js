const saudacao = "opa"; //contexto léxico 2

function exec() {
  const saudacao = "fala"; //contexto lexico
  return saudacao;
}

//objetos são grupos aninhados de ares nome/valor
const cliente = {
  nome: "pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Exemplo",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
