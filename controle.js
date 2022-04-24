// function controleNotas(nota) {
//   if(nota >= 7) {
//     console.log("Aprovado com", nota);
//   }else{
//    console.log('Reprovado com', nota);
//   }
// }

// controleNotas(8)
// controleNotas(3.5)


// no exemplo a abaixo, só sera impresso o que for verdade
// obs: o javascript vai converter tudo para bolean por tras dos panos no caso do bloco if


function seForVerdadeImprima(valor) {
  if(valor) {
    console.log('É verdade:' + valor);
  }
}

seForVerdadeImprima()
seForVerdadeImprima(null)
seForVerdadeImprima(undefined)
seForVerdadeImprima(NaN)
seForVerdadeImprima('')
seForVerdadeImprima(0)
seForVerdadeImprima(-1)
seForVerdadeImprima('?')
seForVerdadeImprima(' ')
seForVerdadeImprima([])
seForVerdadeImprima([1,2])
seForVerdadeImprima({})