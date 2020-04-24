const escola = "Cod3r";
console.log(escola.charAt(4));
console.log(escola.charAt(5)); //letra no indice 5
console.log(escola.charCodeAt(3)); //pegar o indice
console.log(escola.indexOf("3"));
console.log(escola.substr(1));
console.log(escola.substr(0, 3));

console.log("Escola ".concat(escola).concat("!")); //concatenção
console.log("escola" + escola + "!"); //concatenação
console.log(escola.replace(/\d/, "e")); //substitue a letra no indice

console.log("Ana,Maria,Pedro".split(",")); //gerar array
