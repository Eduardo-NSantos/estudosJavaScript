const text1 = document.getElementById("d1");
const text2 = document.getElementById("d2");
const text3 = document.getElementById("d3");
const elements = [text1, text2, text3]; //prototype: array

text1.innerHTML = "Texto alterado com innerHTML";

elements.map(e=>{
    console.log(e)
})



//console.log(text1);
//console.log(text1.id);
//console.log(text1.innerHTML);
