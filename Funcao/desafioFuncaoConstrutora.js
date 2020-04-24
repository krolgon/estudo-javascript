function criarPessoa(nome) {
  this.falar = function () {
    return "meu nome é " + nome;
  };
}

const p1 = new criarPessoa("joao");
console.log(p1.falar());
