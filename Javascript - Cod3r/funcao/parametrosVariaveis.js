function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

function soma2(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 2, 3,))
console.log(soma(1))
console.log(soma(1, 5, 8 ,9, 5.5))

console.log(soma2(2, 2))
console.log(soma2())
console.log(soma2(1))
console.log(soma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))