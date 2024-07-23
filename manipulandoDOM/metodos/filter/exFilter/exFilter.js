const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "javaScript", "PHP", "react", "MySQL", "reactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")

cursos.map((elemento, chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = elemento
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener("click", ()=>{
    const todosRadios = [...document.querySelectorAll("input[name=rb_curso]")]
    let radioSelecionado = todosRadios.filter((elemento)=>{
        return elemento.checked
    })
    radioSelecionado = radioSelecionado[0]

    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert(`curso selecionado: ${cursoSelecionado}`)
})