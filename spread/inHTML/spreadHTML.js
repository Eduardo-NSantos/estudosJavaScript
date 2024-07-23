//não rodar esse programa no node, pois o DOM não é reconhecido pelo node, apenas pelo brawser

const objs1 = document.getElementsByTagName("div") //cria uma HTMLcollection
const objs2 = [...document.getElementsByTagName("div")] //cria um array

objs2.push("item++")

console.log(objs1)
console.log(objs2)