//Armazenando função em variável.

const imprimirSoma = function(a, b=0){
    console.log(a + b)
}

imprimirSoma(1, 99)

//Armazenando uma função arrow
const soma = (a, b) =>  a + b

console.log(soma(5 , 9))

const sub  = (a, b) => {
    return a - b
}

console.log(sub(10, 7))