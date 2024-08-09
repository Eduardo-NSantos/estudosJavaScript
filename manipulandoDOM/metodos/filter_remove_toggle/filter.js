// const impares = (valor, indice, array) => {
//     if(valor % 2 != 0){
//         return valor
//     }
// }
const numeros = [10, 20, 2, 55, 53, 60, 123, 5, 29]
const impar = numeros.filter((valor)=>{
    if(valor % 2 != 0){
        return valor
    }
})
const par = numeros.filter((valor)=>{
    if(valor % 2 == 0){
        return valor
    }
})

console.log(numeros)
console.log(impar)
console.log(par)