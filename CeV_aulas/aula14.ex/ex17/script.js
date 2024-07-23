function tabuada(){
    var numero = document.querySelector("input#numero")
    var result = document.querySelector("select#result")
    result.innerHTML = ''
    if(numero.value.length == 0){
        window.alert("Você não preencheu o campo corretamente, o campo receberá o valor 1")
        numero = 1
    }else{
        numero = Number(numero.value)
    }
    for(let i=1; i<=10; i++){
        result.innerHTML += `<option>${numero} x ${i} = ${numero * i}</option> <br>`
    }
}