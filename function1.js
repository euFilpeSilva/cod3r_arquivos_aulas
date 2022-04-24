
// // sem retorno
// function imprimirSoma(a, b){
//     console.log(a + b)
// }

// imprimirSoma(5,6)

// com retorno

function soma(a,b = 0) {
    return a + b
}

console.log(soma(2,3));