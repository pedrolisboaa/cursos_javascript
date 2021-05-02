const numeros = [1, 2, 3, 4, 5]
const nomes = ['Pedro', 'Juliana', 'Marcelo']

// For com proposito
let resultado = numeros.map(function(e){
    return e * 2
})

let gritandoNome = nomes.map(function(e){
    return `${e.toUpperCase()} !!!!!! `
})

const dobro = e => e * 2
const triplo = e => e * 3
const quina = e => e * 5

let testeComVarios = numeros.map(dobro).map(triplo).map(quina)
console.log(numeros)
console.log(resultado)
console.log(nomes)
console.log(gritandoNome)
console.log(testeComVarios)