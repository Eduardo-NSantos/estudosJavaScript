var diaSemana = new Date().getDay()
switch(diaSemana){
    case 0:
        console.log("domingo")
        break
    case 1:
        console.log("segunda-feira")
        break
    case 2:
        console.log("terça-feira")
        break
    case 3:
         console.log("quarta-feira")
         break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("Dia inválido")
}
