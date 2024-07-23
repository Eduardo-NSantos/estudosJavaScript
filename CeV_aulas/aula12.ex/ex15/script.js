function verificar(){
    var ano = new Date().getFullYear()
    var dataNascimento = window.document.getElementById("txtano")
    var resultado = window.document.getElementById("resultado")
    if(dataNascimento.value.length == 0 || Number(dataNascimento.value) > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var sexo = window.document.getElementsByName("radsex")
        var idade = ano - Number(dataNascimento.value)
        var genero = ""
        if(sexo[0].checked){
            genero = "homem"
            window.document.body.style.background = "rgb(121, 121, 250)"
        }else if(sexo[1].checked){
            genero = "mulher"
            window.document.body.style.background = "rgb(250, 127, 223)"
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}