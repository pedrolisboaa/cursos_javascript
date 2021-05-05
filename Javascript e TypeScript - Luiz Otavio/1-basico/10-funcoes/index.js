function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
}

function soma(n1, n2){
    return n1 + n2
}

saudacao('pedro')
console.log(soma(5, 9))

const raiz = function(b){
    return Math.sqrt(b)
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

const quadrado = n => Math.pow(n, 2)

console.log(quadrado(2))
console.log(quadrado(3))
console.log(quadrado(4))