const pizza1 = {
    sabor: "queijo"
}
const pizza2 = pizza1

console.log(pizza1, pizza2)

pizza2.sabor = 'portuguesa'

console.log(pizza1, pizza2)


let n1 = 5
let n2 = n1

console.log(n1, n2)

n2 = n1 + 5

console.log(n1, n2)

let valor // não inicializada
console.log(valor)
// console.log(valor2)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 50
console.log(produto)
console.log(produto.preco)


produto.preco = null
console.log(produto)
console.log(produto.preco)