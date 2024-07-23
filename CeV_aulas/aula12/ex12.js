var hora = new Date().getHours()
console.log(`São ${hora} horas`)
if(hora < 13){
    console.log("Bom dia!")
}else if(hora < 18){
    console.log("Boa tarde!")
}else{
    console.log("boa noite!")
}