const nome = "rebecca";
const concatenacao = "ola " + nome + "!";

const template = `
    Olá
    ${nome}!`;

console.log(concatenacao);
console.log(template);

//expressoes
console.log(`1 + 1= ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei...${up("Cuidado")} !`);
