let num = [1, 3, 2, 5, 4]
console.log(`números: ${num}`)
num.push(6)
console.log(`Após a função num.push(6): ${num}`)
console.log(`usando num.lenght para determinar o tamanho do vetor: ${num.length}`)
console.log(`Botando em ordem com num.sort(): ${num.sort()}\n`)
let posicao = num.indexOf(5) //se o número não existir retorna -1
if(posicao != -1){
    console.log(`encontrando o número com num.indexOf(${num[posicao]}): número ${num[posicao]} está na posição ${posicao}`)
}else{
    console.log("O valor não foi encontrado")
}