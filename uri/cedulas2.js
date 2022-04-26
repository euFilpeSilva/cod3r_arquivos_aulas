var prompt = require('prompt-sync')({sigint: true});

let valor = parseInt(prompt('Digite UM valor:'));
let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(`${valor} em notas de R$`);

for(let i = 0; i < notas.length; i++) {
  let logica = parseInt(valor / notas[i]);
  console.log(`${logica} notas de R$ ${notas[i]}`);
  valor = valor % notas[i];
}
