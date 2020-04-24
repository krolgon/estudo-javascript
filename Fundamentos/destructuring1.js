//novo recurso do ES2015
//com objetos

const pessoa = {
  nome: "ana",
  idade: 5,
  endereco: {
    logradouro: "rua abc",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { lograduro, numero, cep },
} = pessoa;
console.log(lograduro, numero, cep);

// const {
//   conta: { ag, num },
// } = pessoa;
// console.log(ag, num);
