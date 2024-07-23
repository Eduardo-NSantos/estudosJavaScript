function contagem(){
    var strInicio = document.querySelector("input#txtInicio")
    var strFim = document.querySelector("input#txtFim")
    var strPasso = document.querySelector("input#txtPasso")
    var result = document.querySelector("div#resultado")
    var inicio = Number(strInicio.value)
    var fim = Number(strFim.value)
    var passo = Number(strPasso.value)

    if(strInicio.value.length == 0 || strFim.value.length == 0 || strPasso.value.length == 0){
        window.alert("Verifique se os campos foram preenchidos corretamente")
        result.innerHTML = "Impossível contar"
    }else{
        if(passo == 0){
            window.alert("Você digitou um passo inválido, o passo receberá o valor 1")
            passo = 1
        }
        result.innerHTML = ``

        if(inicio <= fim){
            while(inicio <= fim){
                result.innerHTML += `${inicio} \u{1F449} `
                inicio += Math.abs(passo)
            }
        }else{
            if(passo > 0){
                passo *= -1 
            }
            while(fim <= inicio){
                result.innerHTML += `${inicio} \u{1F449} `
                inicio += passo
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}