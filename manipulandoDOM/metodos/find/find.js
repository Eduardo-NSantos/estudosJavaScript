const pArray = document.querySelector("#array")
const txtPesquisar = document.querySelector("#txtPesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const result = document.querySelector("#resultado")
const elementosArray = [12, 43, 5, 65, 23, 98, 7, 15]

pArray.innerHTML = `[${elementosArray}]`

btnPesquisar.addEventListener("click", evt=>{
    result.innerHTML = "O valor náo foi encontrado"
    const retorno = elementosArray.find((elemento, chave)=>{
        if(elemento==txtPesquisar.value){
            result.innerHTML = `O valor ${elemento} está na posição ${chave}`
            return elemento
        }
    })
})
