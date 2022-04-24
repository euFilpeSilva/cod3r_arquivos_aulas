let a = 7
let b = 5
// posso trocar os valores das variaveis a e b criando uma terceira variavel c 
// que recebe o valor de a e depois a recebe o valor de b e depois b recebe o valor de c

let c = a
a = b
b = c


console.log(` O novo valor de A é ${a}`);
console.log(` O novo valor de B é ${b}`);