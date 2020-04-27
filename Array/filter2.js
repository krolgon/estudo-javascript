Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

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
  produtos.filter2(function (p) {
    return p.preco > 1500 && p.fragil == true;
  })
);
