function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome: 'Notebook',
    preco: 5000,
    desconto: 0.15,
    getPreco
}

console.log(produto.getPreco())