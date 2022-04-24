// armazenando function em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(5,9)


// Arrow Function
const soma = (a, b) => {
    return a + b
}

console.log(soma(5,9));

// arrow resumida
// essa  funcao tem um retrorno direto se a necessidade de escrever a palavra return
const subtracao = (a, b) => a - b 

console.log(subtracao(5,9));

// caso seja uma função de apenas um parametro, pode-se omitir os parenteses

const imprimor2 = a => console.log(a)
