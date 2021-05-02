//Usando notação literal
const obj1 = {

}
console.log(obj1)

//Object em JS...
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, quantidade, desconto){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade

    this.getPrecoComDesconto = function(){
        return preco * (1 - desconto)
    }

    this.getPrecoEstoqueProduto = function(){
        return preco * quantidade
    }
}

const p1 = new Produto('caneta', 5, 50, 0.5)
const p2 = new Produto('caderno', 20, 100, 0.1)


console.log(p1.nome)
console.log(p1.preco)
console.log(p1.getPrecoComDesconto())
console.log(p1.getPrecoEstoqueProduto())


//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase, 
        faltas,
        getSalario(){
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario('Pedro', 2000, 5)
const f2 = criarFuncionario('Juliana', 2000, 0)

console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Olívia'

console.log(filha.nome)
