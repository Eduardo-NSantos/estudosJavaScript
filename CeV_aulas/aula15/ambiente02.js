let num = [2, 5, 4, 3, 1, 7, 6, 9]
/*
for(let i=0; i<num.length; i++){
    console.log(`posição ${i}: ${num[i]}`)
}
*/
for(var i in num){
    console.log(`posição ${i}: ${num[i]}`)
}