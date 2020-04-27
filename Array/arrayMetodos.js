const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa'];
console.log(pilotos);

pilotos.pop(); //remove o ultimo elemento
console.log(pilotos);

pilotos.push('verstappen'); //adiciona na ultima posição
console.log(pilotos);

pilotos.shift(); //remove o primero
console.log(pilotos);

pilotos.unshift('hamilton'); //adiciona primeiro
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'bottas', 'massa'); //adiciona no segundo indice (adiciona antes do raikkonen)
console.log(pilotos);

//remover
pilotos.splice(3, 1); //remove o terceiro indice
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array apartir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
