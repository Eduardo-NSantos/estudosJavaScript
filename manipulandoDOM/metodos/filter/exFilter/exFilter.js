const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "javaScript", "PHP", "react", "MySQL", "reactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdiconarDepois = document.querySelector("#btnAdicionarDepois")
const nomeCurso = document.querySelector("#nomeCurso")

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = curso
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((elemento)=>{
    const novoElemento = criarNovoCurso(elemento)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[name=rb_curso]")]
    const radioSelecionado = todosRadios.filter((elemento)=>{
        return elemento.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", ()=>{
    const rs = radioSelecionado()
    try{
      //const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`curso selecionado: ${cursoSelecionado}`)
    }catch(error){
        alert("Esolha um elemento")
    }
})

btnRemoverCurso.addEventListener("click", ()=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }catch(error){
        alert("Esolha um elemento")
    }
})

btnAdicionarAntes.addEventListener("click", ()=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoElemento, cursoSelecionado)
        }else{
            alert("Digite um curso válido")
        }
    }catch(error){
        alert("escolha um curso")
    }
})

btnAdiconarDepois.addEventListener("click", ()=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoElemento = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoElemento, cursoSelecionado.nextSibling)
        }else{
            alert("Digite um curso válido")
        }
    }catch(error){
        alert("escolha um curso")
    }
})