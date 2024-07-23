//const soma2 = (n1, n2) => {return n1 + n2}

const quadrado = n => n ** 2 //quando tenho apenas um parametro, o parênteses e o return são desnecessários

const soma = (...valores) => {
    acumulador = 0
    for(n of valores){
        acumulador += n 
    }
    return acumulador
}
console.log(soma(10, 5, 5, 20, 7, 3))
console.log(quadrado(5))