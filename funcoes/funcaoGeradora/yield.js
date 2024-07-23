function* outroGerador(i){//criando um gerador
    yield i+1;
    yield i+2;
    yield i+3;
}
function* gerador(i){//gerador que usará outro gerador
    yield i; //primeiro passo
    yield* outroGerador(i); //segundo, terceiro e quarto passo
    yield i+10; //quinto passo
}

let gen = gerador(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);