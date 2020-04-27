const alunos = [
  {
    nome: 'joao',
    nota: 7.3,
    bolsista: false,
  },
  {
    nome: 'maria',
    nota: 9.2,
    bolsista: true,
  },
  {
    nome: 'pedrio',
    nota: 9.8,
    bolsista: false,
  },
  {
    nome: 'ana',
    nota: 8.7,
    bolsista: true,
  },
];

//desafio 1: todos os alunos são bolsistas?

const desafio1 = alunos
  .map((b) => b.bolsista)
  .reduce(function (acumulador, bolsista) {
    if (acumulador == false || bolsista == false) return false;
  });

console.log(desafio1);

//desafio 2: algum auno e bolsista ?

const desafio2 = alunos
  .map((b) => b.bolsista)
  .reduce(function (acumulador, bolsista) {
    if (acumulador == true || bolsista == true) return true;
  });

console.log(desafio2);
