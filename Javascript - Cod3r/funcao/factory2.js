function criarProduto(nome, preco){
    return {
        nome,
        preco, 
        desconto: 0.1
    }
}


console.log(criarProduto('tv', 1000))
console.log(criarProduto('notebook', 2000))

let tv = criarProduto('tv', 1000)
let notebook = criarProduto('notebook', 2000)
console.log(tv)
console.log(notebook)