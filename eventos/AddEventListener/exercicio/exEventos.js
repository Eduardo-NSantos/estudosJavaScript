const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnRight = document.querySelector("#transportRight")
const btnLeft = document.querySelector("#transportLeft")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map(el =>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})
btnRight.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map(el=>{
        caixa2.appendChild(el)
        cursosSelecionados.map(element=>{
            element.classList.remove("selecionado")
        })
    })
})
btnLeft.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map(el=>{
        caixa1.appendChild(el)
        cursosSelecionados.map(element=>{
            element.classList.remove("selecionado")
        })
    })
})