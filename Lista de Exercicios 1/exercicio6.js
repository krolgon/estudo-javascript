//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jSimples = (capital, taxa, tempoMeses) => {
  let juros = capital * (taxa / 100) * tempoMeses;
  let montante = capital + juros;
  console.log(montante);
};

const jComposto = (capital, taxa, tempoMeses) => {
  let montante = capital * (1 + taxa / 100) ** tempoMeses;
  console.log(montante);
};

let testeSimples = jSimples(1100, 4, 22);
let testeComosto = jComposto(120, 2, 5);
