// voce pode possuir duas variaveis Iguais des de que estejam em blocos/escopos diferentes
// MESMO ASSIM é aconselhAVEL USAR NOMES DIFERENTES
// FUJA DO ESCOPO GLOBAL

var numero = 1

{
    var numero = 2
    console.log('dentro',  numero);
}

console.log('fora', numero);