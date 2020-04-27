const produtos = [
  {
    nome: 'notebook',
    preco: 2444,
    fragil: true,
  },
  {
    nome: 'iPad',
    preco: 5345,
    fragil: true,
  },
  {
    nome: 'copo de vidro',
    preco: 23,
    fragil: true,
  },
  {
    nome: 'copo de plastico',
    preco: 12,
    fragil: false,
  },
];

console.log(
  produtos.filter(function (p) {
    return p.preco > 1500 && p.fragil == true;
  })
);
