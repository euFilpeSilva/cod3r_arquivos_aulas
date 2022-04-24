// NOVO RECURSO ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
 }
}

// console.log(`Seu nome é   ${pessoa.nome} + e voce tem  ${pessoa.nome} anos`);

// VEJA A DESESTRUTURAÇÃO SENDO APLICADA A SEGUIR:

const {nome, idade} = pessoa

console.log(nome, idade);

// AINDA É POSSIVEL APELIDAR OS VALORES DESTRUTURADOS:

const {nome: n, idade: i} = pessoa

console.log(n, i);

// PODEMOS TAMBEM SETAR ATRIBUTIOS DE OBJETOS QUE NÃO EXISTEM:

const {sobrenome, bemHumorada = true} = pessoa
log(sobrenome, bemHumorada);