const pessoa = {
    nome: 'Pedro',
    idade: 28,
    altura: 1.90
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log(Object.entries(pessoa).forEach(e => {
    console.log(e)
}))


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '15/09/1992'
})

console.log(pessoa)

