let dobro = function(a){
    return a * 2
}

dobro = (a) =>{
    return a * 2
}

dobro = a => a * 2 //somente com um parâmetro

console.log(dobro(Math.PI))

let ola = function (){
    return ola
}

ola = () => 'olá'
//ou
ola = _ => 'ola'
console.log(ola())

// outro teste
let soma = function(a, b){
    return a + b
}

soma = (a, b) => a + b

console.log(soma(5, 6))

let divide = (a, b) => a / b
console.log(divide(10, 2))

const juntaNome = (nome1, nome2) => `Olá ${nome1} ${nome2}`
console.log(juntaNome('Pedro', 'Lisboa'))