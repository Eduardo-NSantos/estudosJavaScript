let colecaoHTML = document.getElementsByTagName("div") //prototype: HTMLcolection(não posso usar os métodos de arrays nesta coleção)

colecaoHTML = [...colecaoHTML] //transformei a coleção em array com o método spread(posso realizar essa transformação diretamente na criação da variável)
console.log(colecaoHTML)

colecaoHTML.map(e=>{
    console.log(e)
})