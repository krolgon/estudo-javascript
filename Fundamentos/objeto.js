const prod1 = {};
prod1.nome = "celular";
prod1.preco = 5555.55;
prod1["Desconto"] = 0.4; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "camisa",
  preco: 50.9,
};

//JSON
('{"nome": "camisa", "preco":50.90}');

// {
// 	"nome": "camisa",
// 	"preco": 50.90
// }

console.log(prod2);
