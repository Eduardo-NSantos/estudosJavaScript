const jogador1 = {nome: "Bruno", energia: 100, vidas: 3, forca: 100}
const jogador2 = {nome: "José", energia: 100, vidas: 4, resistencia: 150}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)