let address = {pais:"Brasil", estado: "RN", cidade:"Equador", casa:551}
let address2 = {...address} //se usar: let address2 = address, criará um ponteiro, o spread cria uma cópia
address2.casa = 123 

console.log(address)
console.log(address2)