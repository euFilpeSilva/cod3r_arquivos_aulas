var prompt = require('prompt-sync')({sigint: true});

let entrada = parseInt(prompt('Digite o valor:'));

let logica = parseInt(entrada / 100)
console.log(`${logica} notas de 100 R$`);
entrada = entrada % 100

logica = parseInt(entrada / 50)
console.log(`${logica} notas de 50 R$`);
entrada = entrada % 50

logica = parseInt(entrada / 20)
console.log(`${logica} notas de 20 R$`);
entrada = entrada % 20

logica = parseInt(entrada / 10)
console.log(`${logica} notas de 10 R$`);
entrada = entrada % 10

logica = parseInt(entrada / 5)
console.log(`${logica} notas de 5 R$`);
entrada = entrada % 5

logica = parseInt(entrada / 2)
console.log(`${logica} notas de 2 R$`);
entrada = entrada % 2

logica = parseInt(entrada / 1)
console.log(`${logica} moedas de 1 R$`);






