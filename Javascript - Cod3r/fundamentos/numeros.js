const peso1 = 1.0
const peso2 = Number('2.0')
const teste = 'pedro'

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)

console.log(Number.isInteger(peso2))
console.log(Number.isInteger(teste))

const avaliacao = 1.123
const avaliacao2 = 2.345

const resultado = avaliacao / avaliacao2
console.log(resultado.toFixed(2))
console.log(resultado.toString())

//Transformando em binário
console.log(resultado.toString(2))