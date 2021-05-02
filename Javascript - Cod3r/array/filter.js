const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preço: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

/*
console.log(produtos.filter(function(p){
    return p.preco > 1000
}))

console.log(produtos.filter(function(p){
    return p.preco < 1000
}))
*/
/*
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(fragil).filter(caro))*/

console.log(produtos.filter(function(p){
    if(p.fragil && p.preco >= 500){
        return produtos
    }
}))