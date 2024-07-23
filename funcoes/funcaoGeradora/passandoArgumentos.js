function* perguntas(){
    const nome = yield 'Qual seu nome?';
    const esporte = yield 'Qual seu esporte favorito?';
    return "seu nome é " + nome + " e seu esporte favorito é " + esporte;
}

let gen = perguntas();

console.log(gen.next().value)
console.log(gen.next("Eduardo").value)
console.log(gen.next("Fut").value)