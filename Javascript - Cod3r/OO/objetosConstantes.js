// pessoa -> para um endereço de mémoria 123
const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Juliana'

console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Rosangela'

console.log(pessoa)