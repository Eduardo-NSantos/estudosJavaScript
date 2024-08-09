const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "javaScript", "PHP", "react", "MySQL", "reactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdiconarDepois = document.querySelector("#btnAdicionarDepois")
const nomeCurso = document.querySelector("#nomeCurso")


const removerSelecao = (evt) => {
    const todosSelecionados = [...document.querySelectorAll(".selecionado")]
    todosSelecionados.map(elemento=>{
        if(elemento != evt.target){
            elemento.classList.remove("selecionado")
        }
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = curso
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.addEventListener("click", evt =>{
        removerSelecao(evt)
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento
}

let indice = 0
cursos.map((elemento)=>{
    const novoElemento = criarNovoCurso(elemento)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click", ()=>{
    try{
        alert(`curso selecionado: ${cursoSelecionado().innerHTML}`)
    }catch(error){
        alert("Esolha um elemento")
    }
})

btnRemoverCurso.addEventListener("click", ()=>{
    try{
        cursoSelecionado().remove()
    }catch(error){
        alert("Esolha um elemento")
    }
})

btnAdicionarAntes.addEventListener("click", ()=>{
    try{
        if(nomeCurso.value != ""){
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoElemento, cursoSelecionado())
        }else{
            alert("Digite um curso válido")
        }
    }catch(error){
        alert("escolha um curso")
    }
})

btnAdiconarDepois.addEventListener("click", ()=>{
    try{
        if(nomeCurso.value != ""){
        const novoElemento = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoElemento, cursoSelecionado().nextSibling)
        }else{
            alert("Digite um curso válido")
        }
    }catch(error){
        alert("escolha um curso")
    }
})