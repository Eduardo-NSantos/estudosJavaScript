function changeText(HTMLid, text){
    let change = document.getElementById(HTMLid)
    change.innerHTML = text
}

changeText("div1", "Hello, World!")
changeText("div2", "i'm changing the text")
changeText("div3", "...")
