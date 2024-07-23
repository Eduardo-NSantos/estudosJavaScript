const soma = (...valores) =>{
    const somar = val =>{
        let acumulador = 0
        for(n of val){
            acumulador += n
        }
        return acumulador
    }
    return somar(valores)
}

console.log(soma(10, 20, 1))