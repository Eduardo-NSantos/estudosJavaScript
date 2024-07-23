let amigo = {
    nome:"josé",
    sexo: 'M',
    peso: 80.2,
    engordar(p){
        this.peso += p 
    }
}

console.log(`${amigo.nome} está pesando ${amigo.peso} kg`)
console.log("...\n...")

aumentoDePeso = 3
amigo.engordar(aumentoDePeso)
console.log(`Após o aumento de ${aumentoDePeso} kilos, josé agora pesa ${amigo.peso} kg`)