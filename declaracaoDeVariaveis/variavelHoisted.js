if(a == undefined){
    console.log(a);//exibirá undefined
}
var a = "hoisted"; //se usar let o programa acusará referenceError
console.log(a) // exibirá "hoisted"