let numeros = []

function adicionar(){
    let num = document.querySelector("input#numero")
    let lista = document.querySelector("select#lista")

    if(num.value.length == 0 || num.value < 1 || num.value > 100){
        window.alert("você não informou o número ou informou um número inválido")
    }else{
        if(numeros.indexOf(Number(num.value)) != -1){
            window.alert("Esse número já está na lista")
        }else{
            numeros.push(Number(num.value))
            lista.innerHTML += `<option>Você digitou o número ${num.value}</option>`
        }
    }
    num.value = ''
    num.focus()
}

function result(){
    if(numeros.length == 0){
        window.alert("Informe ao menos um número")
    }else{
        let maior = numeros[0]
        let menor = maior
        let soma = 0
        for(let i in numeros){
            if(numeros[i] > maior){
                maior = numeros[i]
            }if(numeros[i] < menor){
                menor = numeros[i]
            }
            soma += numeros[i]
        }
        let media = soma / numeros.length
        let result = document.querySelector("div#result")
        result.innerHTML = `<p>Ao todo, ${numeros.length} números foram cadastrados</p>`
        result.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        result.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        result.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        result.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}