const elements = [...document.querySelectorAll(".classes")]


const msg = () => {
    alert("clicou")
}
elements[0].addEventListener("click", msg) //(ação, evento)


elements.map(el=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.toggle("destaque")
        console.log(`${el.id} foi clicado`)
    })
})