const todosElementos = [...document.getElementsByClassName("classes")] //criando um array dos elementos usando spread
const elementosC1 = [...document.getElementsByClassName("c1")]
const elementosC2 = [...document.getElementsByClassName("c2")]
const elementoEspecial = document.getElementsByClassName("classes")[0]

console.log(todosElementos)
console.log(elementosC1)
console.log(elementosC2)
console.log(elementoEspecial)

elementosC2.map(el=>{
    el.classList.add("destaque")
})