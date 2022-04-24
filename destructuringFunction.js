// usando o destruturing como parametro de uma função
// vamos gerar valores aleatorios

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }));