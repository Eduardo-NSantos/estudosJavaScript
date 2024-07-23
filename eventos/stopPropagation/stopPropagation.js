const caixa1 = document.querySelector("#caixa1")
const btnCursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt)=>{
    window.alert("clicou")
})
btnCursos.map(el=>{
    el.addEventListener("click", evt=>{
        evt.stopPropagation()
    })
})