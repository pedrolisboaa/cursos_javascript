const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(5, 5)
imprimirResultado(4, 4, function(a, b){
    return a * b
})