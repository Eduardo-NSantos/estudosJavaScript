function fatorial(n){
    if(n <= 0){
        return 1
    }
    let fat = 1
    for( ; n>1; n--){
        fat *= n
    }
    return fat
}

/*
function fatorial(n){
    if(n <= 0){
        return 1
    }
    return n * fatorial(n-1)
}
*/

console.log(fatorial(6))