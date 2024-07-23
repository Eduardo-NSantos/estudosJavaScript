function* idMaker(){ //função geradora
    yield 1; // passos da função
    yield 2;
    yield 3;
};

var gen = idMaker(); //gen recebe a função geradora
console.log(gen.next().value); //exibe o próximo valor (primeiro)
console.log(gen.next().value); //exibe o próximo valor (segundo)
console.log(gen.next().value); //exibe o próximo valor (terceiro)
console.log(gen.next().value); //exibe o próximo valor (undefined)

console.log()

var gen = idMaker(); //resetando a função geradora
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);