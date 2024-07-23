function carregar(){ 
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora < 12){
        //dia
        imagem.src = "manha.jpg"
        window.document.body.style.background = "#e2cd9f"
    }else if(hora < 18){
        //tarde
        imagem.src = "tarde.jpg"
        window.document.body.style.background = "#b9846f"
    }
    else{
        //noite
        imagem.src = "noite.jpg"
        window.document.body.style.background = "#515154"
    }
}