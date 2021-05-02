// função se retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(5, 8)
imprimirSoma(2)

//função com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(5, 9))
console.log(soma(5))