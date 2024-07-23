const caixa1 = document.querySelector("#caixa1")
const btnCursos = [...document.querySelectorAll(".curso")]

const cursos = ["HTML", "CSS", "javaScript", "PHP", "react", "MySQL", "reactNative"]
cursos.map((elemento, chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = elemento
    novoElemento.setAttribute("id", `c${chave+1}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.addEventListener("click", evt=>
        caixa1.removeChild(evt.target)
    )
    caixa1.appendChild(novoElemento)
})

