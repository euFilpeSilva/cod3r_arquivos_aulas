// o Let tem escopo de bloco ou seja esta visivel apenas dentro do bloco em qu esta declarado

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero);
}

console.log('fora =', numero);

