console.log(typeof Array, typeof new Array(), typeof []);

// let aprovados = new Array[('bia', 'carlos', 'ana')]();
// console.log(aprovados);

let aprovados = ['bia', 'carlos', 'ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'paulo';
console.log(aprovados[3]);

aprovados.push('quatro');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
console.log(aprovados.sort()); //alteração no array

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['bia', 'carlos', 'ana'];
aprovados.splice(1, 2, 'elemento1', 'elemento2');
console.log(aprovados);

aprovados.splice(1, 0, 'elemento1', 'elemento2');
console.log(aprovados);
