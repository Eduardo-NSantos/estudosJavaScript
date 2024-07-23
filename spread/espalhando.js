function soma(n1, n2, n3){
    return n1 + n2 + n3
}

let valores = [1, 2, 3, 10] // o spread pegará apenas os primeiros valores exigidos nos parametros
console.log(soma(...valores)) //se não usar o spread, o arrey inteiro será passado para o primeiro parametro